import React from "react";
import { FaBehance } from "react-icons/fa";

const projects = [
  {
    title: "Horvenia",
    image: "/image/horvenia.jpg",
    link: "https://www.behance.net/gallery/235695939/Horvenia",
  },
  {
    title: "Psyche",
    image: "/image/psyche.jpg",
    link: "https://www.behance.net/gallery/210010111/Psyche",
  },
  {
    title: "Justicia",
    image: "/image/justicia.jpg",
    link: "https://www.behance.net/gallery/201146213/Justicia",
  },
  {
    title: "Ubuntu Kids",
    image: "/image/ubuntu.jpg",
    link: "https://www.behance.net/gallery/166010125/UBUNTU-KIDS-Diseno-de-identidad",
  },
  {
    title: "Amaranta Diseño de Marca",
    image: "/image/amaranta.jpg",
    link: "https://www.behance.net/gallery/146714609/Diseno-de-Marca-Amara-shampoo-solido",
  },
  {
    title: "Mae Illustration",
    image: "/image/mae.jpg",
    link: "https://www.behance.net/gallery/143629973/Mae-Illustration",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Fondos decorativos suaves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#E76727]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#E76727]/20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Título principal */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-[#E76727] text-center relative z-10">
        Portafolio
      </h2>

      {/* Galería de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 bg-white border border-[#E76727]/20 relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#E76727]/30 via-[#E76727]/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold text-[#E76727] relative z-10">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      {/* Botón para ver más en Behance */}
      <div className="text-center mt-14 relative z-10">
        <a
          href="https://www.behance.net/danalillo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 text-white bg-[#E76727] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-[#d45b20]"
        >
          <FaBehance className="text-white w-5 h-5 animate-pulse" />
          Ver portafolio completo en Behance
        </a>
      </div>
    </section>
  );
};

export default Portfolio;








