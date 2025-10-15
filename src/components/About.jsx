import React, { useEffect } from "react";
import { Star, Pencil, Monitor } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-back", once: true });
  }, []);

  return (
    <section className="relative px-6 md:px-16 py-20 flex justify-center bg-white overflow-hidden">
      {/* Fondos decorativos suaves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-[#E76727]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#E76727]/20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div
        data-aos="fade-up"
        className="relative bg-white rounded-2xl p-8 md:p-12 max-w-4xl shadow-xl border border-[#E76727]/20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#E76727] text-center">
          Perfil Profesional
        </h2>

        <p className="text-lg md:text-xl font-medium mb-10 text-black text-center leading-relaxed">
          Diseñadora Gráfica Integral | Especialista en Identidad Visual y Producción para Imprenta
        </p>

        <div className="space-y-6 text-black text-base md:text-lg leading-relaxed">
          <p className="flex items-start gap-3">
            <Pencil className="w-6 h-6 text-[#E76727] mt-1 flex-shrink-0" />
            <span className="text-justify">
              Profesional con un enfoque integral en diseño gráfico, combinando la creatividad conceptual 
              con el dominio técnico en la producción. Experiencia sólida en la preparación y armado de archivos 
              para impresión (preimpresión), asegurando la máxima calidad en el resultado final.
            </span>
          </p>

          <p className="flex items-start gap-3">
            <Monitor className="w-6 h-6 text-[#E76727] mt-1 flex-shrink-0" />
            <span className="text-justify">
              Experta en la creación de piezas gráficas <span className="font-medium">offline</span> 
              (flyers, tarjetería) y <span className="font-medium">online</span> 
              (contenido estratégico para redes sociales). Habilidad demostrada en diseño de marca, ilustración 
              y vectorización de logotipos.
            </span>
          </p>

          <p className="flex items-start gap-3">
            <Star className="w-6 h-6 text-[#E76727] mt-1 flex-shrink-0" />
            <span className="text-justify">
              <span className="font-semibold text-[#E76727]">Logro Destacado:</span> Ganadora del <span className="italic">3er Puesto</span> en el concurso 
              <span className="font-medium"> Fernet Branca Arte Único 2023 (Categoría Póster)</span>.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;











