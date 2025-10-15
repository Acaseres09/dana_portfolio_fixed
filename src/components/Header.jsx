import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [showContact, setShowContact] = useState(false);
  const menuRef = useRef(null);

  const whatsappNumber = "5492920328409";
  const email = "lillo.dana3@gmail.com";

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowContact(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="w-full py-4 px-6 md:px-16 flex items-center justify-between
                 bg-white/70 backdrop-blur-md fixed top-0 z-50 shadow-sm border-b border-[#E76727]/30"
    >
      {/* Logo / Nombre */}
      <h1
        className="text-2xl md:text-3xl font-bold tracking-tight text-[#E76727]
                   hover:text-[#1a1a1a] transition-colors duration-300 cursor-pointer"
      >
        Dana Antonella Lillo
      </h1>

      {/* Navegación */}
      <nav className="flex items-center gap-6 md:gap-10 text-[#1a1a1a] relative font-medium">

        {/* Inicio */}
        <a
          href="#about"
          className="relative group transition-colors duration-300 hover:text-[#E76727]"
        >
          Inicio
          <span
            className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#E76727]
                       group-hover:w-full group-hover:left-0 transition-all duration-300
                       shadow-[0_0_6px_rgba(231,103,39,0.5)]"
          ></span>
        </a>

        {/* Portafolio */}
        <a
          href="#portfolio"
          className="relative group transition-colors duration-300 hover:text-[#E76727]"
        >
          Portafolio
          <span
            className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#E76727]
                       group-hover:w-full group-hover:left-0 transition-all duration-300
                       shadow-[0_0_6px_rgba(231,103,39,0.5)]"
          ></span>
        </a>

        {/* Contacto con mini menú */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowContact(!showContact)}
            className="relative group transition-colors duration-300 hover:text-[#E76727]"
          >
            Contacto
            <span
              className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#E76727]
                         group-hover:w-full group-hover:left-0 transition-all duration-300
                         shadow-[0_0_6px_rgba(231,103,39,0.5)]"
            ></span>
          </button>

          {/* Mini menú de contacto */}
          {showContact && (
            <div
              className="absolute right-0 mt-2 bg-[#1a1a1a]/90 backdrop-blur-md rounded-lg shadow-lg 
                         flex flex-col items-start p-3 gap-2 z-50 border border-[#E76727]/50"
            >
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 text-gray-100 hover:text-[#E76727] hover:bg-[#ffffff1a] rounded transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 px-3 py-1 text-gray-100 hover:text-[#E76727] hover:bg-[#ffffff1a] rounded transition"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
