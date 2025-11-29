import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import TrustSection from '@/components/TrustSection';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import ContactPreview from '@/components/ContactPreview';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import ClinicInstallations from '@/components/ClinicInstallations';
import MedicalTeam from '@/components/MedicalTeam';
import { fetchAPI } from '@/lib/strapi';
import BlockRenderer from '@/components/BlockRenderer';
import { PageData } from '@/types/strapi';

async function getHeroData() {
  try {
    const res = await fetchAPI("/hero", { populate: "*" });
    return res?.data;
  } catch (error) {
    return null;
  }
}

async function getServices() {
  try {
    const res = await fetchAPI("/services", { sort: "categoryIndex:asc" });
    return res?.data;
  } catch (error) {
    return null;
  }
}

async function getDoctors() {
  try {
    const res = await fetchAPI("/doctors", { populate: "*" });
    return res?.data;
  } catch (error) {
    return null;
  }
}

async function getTestimonials() {
  try {
    const res = await fetchAPI("/testimonials", { populate: "*" });
    return res?.data;
  } catch (error) {
    return null;
  }
}

async function getPageData(slug: string) {
  try {
    // Populate blocks and their nested fields (deep population might be needed depending on component structure)
    // For simple components, populate: "blocks.backgroundImage" etc might work, or use a plugin like populate-deep
    // Here we try a standard populate approach for known components
    const res = await fetchAPI("/pages", {
      filters: { slug },
      populate: {
        blocks: {
          populate: "*"
        }
      }
    });
    return res?.data?.[0];
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  const heroData = await getHeroData();
  const servicesData = await getServices();
  const doctorsData = await getDoctors();
  const testimonialsData = await getTestimonials();

  // Try to fetch dynamic page layout
  const pageData: PageData | null = await getPageData('home');
  const blocks = pageData?.attributes?.blocks;

  const globalData = {
    services: servicesData,
    doctors: doctorsData,
    testimonials: testimonialsData
  };

  return (
    <main className="min-h-screen text-[#333333] font-sans">
      <Header />

      {blocks && blocks.length > 0 ? (
        // Dynamic Layout from Strapi Page Builder
        <BlockRenderer blocks={blocks} globalData={globalData} />
      ) : (
        // Fallback: Fixed Layout
        <>
          <Hero data={heroData} />
          <ClinicInstallations />
          <Services data={servicesData} />
          <MedicalTeam data={doctorsData} />
          <BeforeAfterSection />
          <TrustSection />
          <Testimonials data={testimonialsData} />
        </>
      )}

      {/* Static Sections that should always be there (unless moved to blocks too) */}
      {!blocks && (
        <>
          <CTABanner />
          <ContactPreview />
        </>
      )}

      {/* If using blocks, we might want to include these if they aren't blocks yet */}
      {blocks && blocks.length > 0 && (
        <>
          <BeforeAfterSection />
          <TrustSection />
          <CTABanner />
          <ContactPreview />
        </>
      )}

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/34649537609"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          {/* Ping Animation Ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000"></span>

          {/* Main Button */}
          <div className="relative bg-[#25D366] p-4 rounded-full text-white shadow-lg hover:bg-[#1ebc57] transition-transform transform hover:scale-110 flex items-center justify-center">
            <WhatsAppIcon className="w-8 h-8" />
          </div>
        </div>
      </a>
    </main>
  );
}
