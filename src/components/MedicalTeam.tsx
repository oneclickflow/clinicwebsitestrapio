"use client";

import React from 'react';
import { Linkedin } from 'lucide-react';
import { DoctorData } from '@/types/strapi';
import { getStrapiMedia } from '@/lib/strapi';

const defaultTeam = [
    {
        name: "Dr. Ana Liébana Bobadilla",
        specialty: "Directora & Ortodoncista",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
        bio: "Especialista en ortodoncia invisible con más de 15 años de experiencia transformando sonrisas.",
        linkedin: "#"
    },
    {
        name: "Dr. Carlos Sada Martínez",
        specialty: "Implantología & Cirugía",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
        bio: "Experto en implantes dentales y cirugía oral avanzada. Certificado por la European Association of Osseointegration.",
        linkedin: "#"
    },
    {
        name: "Dra. María González López",
        specialty: "Estética Dental",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
        bio: "Especializada en diseño de sonrisa y carillas dentales. Miembro de la Academia Española de Odontología Estética.",
        linkedin: "#"
    },
    {
        name: "Dr. Javier Ruiz Fernández",
        specialty: "Endodoncia & Periodoncia",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
        bio: "Dedicado a salvar dientes mediante tratamientos de conducto y cuidado de encías con tecnología de última generación.",
        linkedin: "#"
    }
];

interface MedicalTeamProps {
    data?: DoctorData[] | null;
}

const MedicalTeam = ({ data }: MedicalTeamProps) => {
    const team = data?.length
        ? data.map(member => ({
            name: member.attributes.name,
            specialty: member.attributes.specialty,
            image: getStrapiMedia(member.attributes.image?.data?.attributes?.url) || "",
            bio: member.attributes.bio,
            linkedin: member.attributes.linkedin
        }))
        : defaultTeam;

    return (
        <section className="py-24">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
                        Nuestro Equipo
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d56] mb-4">
                        Equipo Médico
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Profesionales altamente cualificados comprometidos con tu salud dental
                    </p>
                </div>

                {/* Team Grid - Equal Sizes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">

                                {/* Image Container */}
                                <div className="relative overflow-hidden h-96">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                        <p className="text-[#B5902B] text-sm font-medium mb-3">{member.specialty}</p>
                                        <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>

                                {/* LinkedIn Icon */}
                                <a
                                    href={member.linkedin}
                                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#0077B5] hover:text-white z-10"
                                    aria-label={`LinkedIn de ${member.name}`}
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 mb-6">¿Quieres conocer a nuestro equipo en persona?</p>
                    <a
                        href="/equipo"
                        className="inline-block bg-[#0f3d56] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0a2d42] transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Conocer al Equipo Completo
                    </a>
                </div>

            </div>
        </section>
    );
};

export default MedicalTeam;
