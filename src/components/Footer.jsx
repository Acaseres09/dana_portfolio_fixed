import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const whatsappNumber = "5492920328409";
  const email = "lillo.dana3@gmail.com";

  return (
    <footer className="bg-white relative overflow-hidden py-6">
      {/* Fondos decorativos sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[200px] h-[200px] bg-[#E76727]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-[250px] h-[250px] bg-[#E76727]/20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
        {/* Iconos de contacto con glow animado */}
        <div className="flex items-center gap-6">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-transform duration-200 hover:scale-110 relative"
          >
            <FaWhatsapp className="w-6 h-6 text-[#E76727] drop-shadow-md" />
            {/* Glow animado */}
            <span className="absolute inset-0 rounded-full bg-[#E76727]/20 opacity-0 hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></span>
          </a>

          <a
            href={`mailto:${email}`}
            className="p-3 rounded-full transition-transform duration-200 hover:scale-110 relative"
          >
            <FaEnvelope className="w-6 h-6 text-[#E76727] drop-shadow-md" />
            {/* Glow animado */}
            <span className="absolute inset-0 rounded-full bg-[#E76727]/20 opacity-0 hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></span>
          </a>
        </div>

        {/* Texto de derechos */}
        <p className="text-sm text-gray-600 mt-3 text-center">
          © 2025 Dana Antonella Lillo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;








