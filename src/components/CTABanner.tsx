import React from 'react';

const CTABanner = () => {
  return (
    <section className="py-20 bg-[#0f3d56] text-white text-center">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para tu Nueva Sonrisa?
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Agenda tu cita hoy y recibe una evaluación gratuita con nuestros especialistas.
        </p>
        <a
          href="https://wa.me/34649537609"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#D4AF37] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#B5902B] transition-colors shadow-lg inline-block"
        >
          Reservar Consulta
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
