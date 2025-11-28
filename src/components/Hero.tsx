import React from 'react';
import { Star } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { GoogleIcon } from './icons/GoogleIcon';
import { HeroData } from '@/types/strapi';
import { getStrapiMedia } from '@/lib/strapi';

interface HeroProps {
  data?: HeroData | null;
}

const Hero = ({ data }: HeroProps) => {
  const {
    title,
    subtitle,
    primaryCTAText,
    primaryCTALink,
    secondaryCTAText,
    secondaryCTALink,
    rating,
    reviewCountText,
    backgroundImage
  } = data?.attributes || {};

  const bgImageUrl = backgroundImage?.data ? getStrapiMedia(backgroundImage.data.attributes.url) : "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600&auto=format&fit=crop";

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden mt-24">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageUrl || ""}
          alt={title || "Sonrisa saludable"}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay: Dark Navy to Transparent/Dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d56]/90 to-[#0f3d56]/40 md:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {title ? (
              <span dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />
            ) : (
              <>Tu Sonrisa, <br />Nuestra Prioridad</>
            )}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            {subtitle || "Cuidamos de tu salud dental con tecnología de vanguardia y un equipo de profesionales dedicados a tu bienestar."}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-10">
            <button className="bg-[#B5902B] hover:bg-[#8E7022] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg transform hover:-translate-y-1 border border-[#B5902B]">
              {primaryCTAText || "Reservar Cita"}
            </button>
            {/* Updated Secondary CTA to WhatsApp */}
            <a
              href={secondaryCTALink || "https://wa.me/34649537609"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2 group"
            >
              <WhatsAppIcon className="w-6 h-6 text-white group-hover:text-[#25D366] transition-colors" />
              <span>{secondaryCTAText || "Contactar por WhatsApp"}</span>
            </a>
          </div>

          {/* Rating / Reviews Component */}
          <div className="flex items-center justify-center md:justify-start gap-4 animate-fade-in-up">
            <div className="flex items-center gap-1 text-[#B5902B]">
              <span className="text-white text-xl font-bold mr-2">{rating || "5.0"}</span>
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <div className="ml-2 bg-white rounded-full p-1 shadow-sm">
                <GoogleIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-300 font-medium">{reviewCountText || "Hemos ayudado a +2000 pacientes"}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
