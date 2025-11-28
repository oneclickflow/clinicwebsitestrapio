"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Linkedin, GraduationCap, Award, Languages, Calendar, Mail } from 'lucide-react';

export default function EquipoPage() {
    const team = [
        {
            name: "Dr. Ana Liébana Bobadilla",
            specialty: "Directora & Ortodoncista",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
            bio: "Especialista en ortodoncia invisible con más de 15 años de experiencia transformando sonrisas. Apasionada por crear tratamientos personalizados que combinan estética y funcionalidad.",
            education: [
                "Licenciatura en Odontología - Universidad Complutense de Madrid",
                "Máster en Ortodoncia - Universidad de Barcelona",
                "Certificación Invisalign Diamond Provider"
            ],
            experience: "15+ años",
            certifications: [
                "Invisalign Diamond Provider",
                "Miembro de la SEDO (Sociedad Española de Ortodoncia)",
                "Certificación en Ortodoncia Lingual"
            ],
            specializations: ["Ortodoncia Invisible", "Brackets Estéticos", "Ortodoncia Lingual", "Ortodoncia Infantil"],
            languages: ["Español", "Inglés", "Francés"],
            email: "ana.liebana@clinica.com",
            linkedin: "#"
        },
        {
            name: "Dr. Carlos Sada Martínez",
            specialty: "Implantología & Cirugía Oral",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
            bio: "Experto en implantes dentales y cirugía oral avanzada con formación internacional. Certificado por la European Association of Osseointegration, especializado en casos complejos de regeneración ósea.",
            education: [
                "Licenciatura en Odontología - Universidad de Valencia",
                "Máster en Implantología - Universidad de Nueva York",
                "Fellowship en Cirugía Oral - Boston University"
            ],
            experience: "12+ años",
            certifications: [
                "European Association of Osseointegration",
                "Certificación All-on-4 Nobel Biocare",
                "Miembro de SEPA (Sociedad Española de Periodoncia)"
            ],
            specializations: ["Implantes Dentales", "All-on-4", "Regeneración Ósea", "Cirugía Oral Avanzada"],
            languages: ["Español", "Inglés"],
            email: "carlos.sada@clinica.com",
            linkedin: "#"
        },
        {
            name: "Dra. María González López",
            specialty: "Estética Dental",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
            bio: "Especializada en diseño de sonrisa y carillas dentales. Miembro de la Academia Española de Odontología Estética. Combina arte y ciencia para crear sonrisas naturales y armoniosas.",
            education: [
                "Licenciatura en Odontología - Universidad de Sevilla",
                "Máster en Estética Dental - Universidad Internacional de Cataluña",
                "Diplomado en Diseño de Sonrisa Digital"
            ],
            experience: "10+ años",
            certifications: [
                "Academia Española de Odontología Estética",
                "Certificación en Carillas de Porcelana",
                "Experta en Blanqueamiento Dental Avanzado"
            ],
            specializations: ["Carillas de Porcelana", "Diseño de Sonrisa", "Blanqueamiento", "Reconstrucciones Estéticas"],
            languages: ["Español", "Inglés", "Italiano"],
            email: "maria.gonzalez@clinica.com",
            linkedin: "#"
        },
        {
            name: "Dr. Javier Ruiz Fernández",
            specialty: "Endodoncia & Periodoncia",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
            bio: "Dedicado a salvar dientes mediante tratamientos de conducto y cuidado de encías con tecnología de última generación. Utiliza microscopio clínico en todos sus tratamientos para máxima precisión.",
            education: [
                "Licenciatura en Odontología - Universidad de Granada",
                "Máster en Endodoncia - Universidad Rey Juan Carlos",
                "Máster en Periodoncia - Universidad Complutense"
            ],
            experience: "11+ años",
            certifications: [
                "Certificación en Endodoncia Microscópica",
                "Miembro de AEDE (Asociación Española de Endodoncia)",
                "Experto en Cirugía Periodontal"
            ],
            specializations: ["Endodoncia Microscópica", "Retratamientos", "Cirugía Periodontal", "Regeneración Tisular"],
            languages: ["Español", "Inglés", "Alemán"],
            email: "javier.ruiz@clinica.com",
            linkedin: "#"
        }
    ];

    return (
        <main className="min-h-screen text-[#333333] font-sans">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f3d56] to-[#0a2d42]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-4 text-[#B5902B]">
                        Nuestro Equipo
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Equipo Médico
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Profesionales altamente cualificados comprometidos con tu salud dental
                    </p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="space-y-20">
                        {team.map((member, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    } gap-12 items-center max-w-6xl mx-auto`}
                            >
                                {/* Image */}
                                <div className="lg:w-1/2">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-[#B5902B] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="lg:w-1/2 space-y-6">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-2">
                                            {member.name}
                                        </h2>
                                        <p className="text-xl text-[#B5902B] font-semibold mb-4">
                                            {member.specialty}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Quick Info Grid */}
                                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-200">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-[#B5902B]" />
                                            <div>
                                                <p className="text-xs text-gray-500">Experiencia</p>
                                                <p className="font-semibold text-gray-800">{member.experience}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Languages className="w-5 h-5 text-[#B5902B]" />
                                            <div>
                                                <p className="text-xs text-gray-500">Idiomas</p>
                                                <p className="font-semibold text-gray-800">{member.languages.length}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Education */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <GraduationCap className="w-5 h-5 text-[#0f3d56]" />
                                            <h3 className="font-bold text-gray-800">Formación</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {member.education.map((edu, i) => (
                                                <li key={i} className="text-sm text-gray-600 pl-7">
                                                    • {edu}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Specializations */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Award className="w-5 h-5 text-[#0f3d56]" />
                                            <h3 className="font-bold text-gray-800">Especializaciones</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {member.specializations.map((spec, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contact */}
                                    <div className="flex gap-4 pt-4">
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center gap-2 bg-[#0f3d56] text-white px-6 py-3 rounded-lg hover:bg-[#0a2d42] transition-colors"
                                        >
                                            <Mail className="w-4 h-4" />
                                            Contactar
                                        </a>
                                        <a
                                            href={member.linkedin}
                                            className="flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#006399] transition-colors"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Our Team */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d56] mb-12">
                            ¿Por Qué Confiar en Nuestro Equipo?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Formación Continua",
                                    desc: "Nuestros profesionales se actualizan constantemente con las últimas técnicas y tecnologías"
                                },
                                {
                                    title: "Experiencia Internacional",
                                    desc: "Formación y certificaciones en las mejores universidades de Europa y América"
                                },
                                {
                                    title: "Enfoque Personalizado",
                                    desc: "Cada paciente recibe un plan de tratamiento único adaptado a sus necesidades"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6">
                                    <div className="w-12 h-12 bg-[#B5902B] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0f3d56] mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#0f3d56] to-[#0a2d42]">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        ¿Quieres Conocer a Nuestro Equipo?
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Agenda tu primera consulta gratuita y conoce al profesional ideal para tu tratamiento
                    </p>
                    <a
                        href="https://wa.me/34649537609"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#B5902B] text-[#0f3d56] px-8 py-4 rounded-lg font-semibold hover:bg-[#c49d2f] transition-colors duration-300 shadow-xl inline-block"
                    >
                        Reservar Consulta
                    </a>
                </div>
            </section>

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
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000"></span>
                    <div className="relative bg-[#25D366] p-4 rounded-full text-white shadow-lg hover:bg-[#1ebc57] transition-transform transform hover:scale-110 flex items-center justify-center">
                        <WhatsAppIcon className="w-8 h-8" />
                    </div>
                </div>
            </a>
        </main>
    );
}
