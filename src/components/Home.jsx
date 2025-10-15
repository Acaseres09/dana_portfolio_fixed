import React from "react";

const Home = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-white via-white to-[#E76727] flex items-center justify-center overflow-hidden">
      
      {/* Imagen integrada al fondo con overlay */}
      <div className="absolute inset-0">
        <img
          src="/image/design-graphic.png"
          alt="Diseño Gráfico"
          className="w-full h-full object-cover opacity-30 filter brightness-90 contrast-125 blur-sm"
        />
        {/* Overlay degradado suave para integrar la imagen con la paleta */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-[#E76727]/40"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#E76727]">
            Dana Antonella Lillo
          </h1>
          <p className="text-lg md:text-2xl mb-12 text-black">
            Diseñadora Gráfica Integral | Especialista en Identidad Visual
          </p>

          {/* Botón de scroll con glow multicapa integrado */}
          <a href="#about">
            <div className="relative w-[50px] h-[80px] mx-auto rounded-3xl border-4 border-[#E76727] flex justify-center items-start p-2 shadow-lg bg-[#E76727]/20 backdrop-blur-sm hover:bg-[#E76727]/40 transition-colors duration-300 cursor-pointer
              after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-3xl after:blur-2xl after:bg-[#E76727] after:opacity-30 after:animate-pulse
              before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-3xl before:blur-xl before:bg-[#E76727] before:opacity-15 before:scale-90 before:animate-ping">
              <div className="w-3 h-3 bg-[#E76727] rounded-full mb-1 animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Fondo decorativo opcional */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 pointer-events-none"></div>
    </section>
  );
};

export default Home;






