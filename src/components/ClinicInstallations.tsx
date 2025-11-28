import React from 'react';

const ClinicInstallations = () => {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
            alt: "Gabinete dental moderno",
            className: "col-span-1 md:col-span-2 row-span-2 h-full"
        },
        {
            url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
            alt: "Sala de espera confortable",
            className: "col-span-1 h-64 md:h-full"
        },
        {
            url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
            alt: "Tecnología de vanguardia",
            className: "col-span-1 h-64 md:h-full"
        }
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                    <div className="md:w-1/2">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
                            La Clínica
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0f3d56] leading-tight">
                            Un espacio diseñado para tu tranquilidad
                        </h2>
                    </div>
                    <div className="md:w-1/2 md:pt-8">
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Nuestras instalaciones combinan la última tecnología odontológica con un ambiente relajante y minimalista.
                            Cada rincón ha sido pensado para que tu visita sea una experiencia confortable, lejos del estrés tradicional
                            de una clínica dental.
                        </p>
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-2xl group ${img.className}`}
                        >
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Gabinetes", value: "4" },
                        { label: "Tecnología", value: "3D" },
                        { label: "Sala de Espera", value: "Premium" },
                        { label: "Parking", value: "Gratuito" }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                            <p className="text-3xl font-bold text-[#B5902B] mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a href="/clinica" className="inline-block border border-[#0f3d56] text-[#0f3d56] px-10 py-3 rounded uppercase text-sm font-bold tracking-wide hover:bg-[#0f3d56] hover:text-white transition-all duration-300">
                        Ver más sobre nuestras instalaciones
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ClinicInstallations;
