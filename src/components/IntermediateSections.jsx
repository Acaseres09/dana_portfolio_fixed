import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Mini SVGs personalizados por herramienta
const toolSVGs = {
  illustrator: (
    <svg width="50" height="50" viewBox="0 0 64 64" className="rounded-lg shadow-md">
      <rect width="64" height="64" rx="12" fill="#FF9A00" />
      <text x="32" y="42" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">Ai</text>
    </svg>
  ),
  photoshop: (
    <svg width="50" height="50" viewBox="0 0 64 64" className="rounded-lg shadow-md">
      <rect width="64" height="64" rx="12" fill="#31A8FF" />
      <text x="32" y="42" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">Ps</text>
    </svg>
  ),
  premiere: (
    <svg width="50" height="50" viewBox="0 0 64 64" className="rounded-lg shadow-md">
      <rect width="64" height="64" rx="12" fill="#9900FF" />
      <text x="32" y="38" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">Pr</text>
    </svg>
  ),
  corel: (
    <svg width="50" height="50" viewBox="0 0 64 64" className="rounded-lg shadow-md">
      <rect width="64" height="64" rx="12" fill="#FF3C00" />
      <text x="32" y="38" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">Cd</text>
    </svg>
  ),
  indesign: (
    <svg width="50" height="50" viewBox="0 0 64 64" className="rounded-lg shadow-md">
      <rect width="64" height="64" rx="12" fill="#FF3366" />
      <text x="32" y="38" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">Id</text>
    </svg>
  ),
  sketchbook: (
    <svg width="50" height="50" viewBox="0 0 64 64" className="rounded-lg shadow-md">
      <rect width="64" height="64" rx="12" fill="#10B981" />
      <path d="M20 44 L44 20" stroke="white" strokeWidth="3" />
      <path d="M20 20 L44 44" stroke="white" strokeWidth="3" />
    </svg>
  ),
  drawing: (
    <svg width="50" height="50" viewBox="0 0 64 64" className="rounded-lg shadow-md">
      <rect width="64" height="64" rx="12" fill="#8B5CF6" />
      <circle cx="32" cy="32" r="12" stroke="white" strokeWidth="3" fill="none" />
    </svg>
  ),
  cutter: (
    <svg width="50" height="50" viewBox="0 0 64 64" className="rounded-lg shadow-md">
      <rect width="64" height="64" rx="12" fill="#F59E0B" />
      <line x1="16" y1="48" x2="48" y2="16" stroke="white" strokeWidth="4" />
    </svg>
  ),
  plotter: (
    <svg width="50" height="50" viewBox="0 0 64 64" className="rounded-lg shadow-md">
      <rect width="64" height="64" rx="12" fill="#3B82F6" />
      <rect x="16" y="24" width="32" height="16" fill="white" rx="2" />
    </svg>
  ),
};

// Icono para experiencia
const workSVG = (
  <svg width="50" height="50" viewBox="0 0 100 100" className="rounded-lg shadow-md">
    <rect width="100" height="100" rx="16" fill="#F59E0B" />
    <text x="50" y="60" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">💼</text>
  </svg>
);

// Datos
const tools = [
  { name: "Adobe Illustrator", svg: toolSVGs.illustrator },
  { name: "Adobe InDesign", svg: toolSVGs.indesign },
  { name: "Adobe Photoshop", svg: toolSVGs.photoshop },
  { name: "Corel Draw", svg: toolSVGs.corel },
  { name: "Autodesk Sketchbook", svg: toolSVGs.sketchbook },
  { name: "Adobe Premiere Pro", svg: toolSVGs.premiere },
  { name: "Ilustración vectorial", svg: toolSVGs.drawing },
  { name: "Dibujo tradicional y digital", svg: toolSVGs.drawing },
  { name: "Corte manual", svg: toolSVGs.cutter },
  { name: "Plotter", svg: toolSVGs.plotter },
];

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Intermedio-Avanzado" },
];

const experiences = [
  {
    company: "Grafica LEC (C.A.B.A Belgrano)",
    position: [
      "Fotocopista",
      "Atención al público",
      "Caja",
      "Armado de archivos para impresión y plotter",
      "Corte manual con cutter, guillotina eléctrica y plotter",
      "Armado de diseño para tarjetería, stickers y flyers",
      "Plastificados, anillados y presupuestos"
    ],
    period: "2023 - Actualidad",
    svg: workSVG
  },
  {
    company: "Nave Uno (Las Grutas, Rio Negro)",
    position: [
      "Vendedora y caja",
      "Renovación de vidrieras",
      "Community Manager y fotografía (Facebook e Instagram)"
    ],
    period: "2022 - 2023",
    svg: workSVG
  },
  {
    company: "Freelance",
    position: [
      "Diseño de tarjetas de cumpleaños infantil",
      "Ubuntu Kids: diseño de marca, etiquetas de ropa, manual normativo",
      "Nashira Indu: diseño de marca, etiquetas de ropa, manual normativo",
      "Radio Marítima FM: diseño de marca, manual normativo, plantilla para redes sociales, maquetación de página web",
      "Hotel Terramar: historias para RR.SS."
    ],
    period: "2022",
    svg: workSVG
  },
  {
    company: "Guia ABC de la Comarca (Viedma, Rio Negro)",
    position: [
      "Community Manager",
      "Planificación y creación de posts para redes sociales",
      "Administración de página web",
      "Creación y carga de banners"
    ],
    period: "2021",
    svg: workSVG
  },
];

const education = [
  {
    title: "Tecnicatura En Diseño Gráfico",
    university: "Escuela De Arte N1 Alcides Biagetti, Carmen De Patagones, Buenos Aires",
    year: "2016 - 2021",
  },
  {
    title: "Inglés Intermedio Superior",
    university: "Instituto De Inglés Cambridge",
    year: "2009 - 2015",
  },
  {
    title: "Profesorado De Dibujo Artístico",
    university: "Academia De Arte Musical",
    year: "2009 - 2015",
  },
];

const IntermediateSections = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-out-back", once: true });
  }, []);

  const cardClass =
    "bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center font-medium shadow-md cursor-pointer transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 relative";

  return (
    <section
      className="px-6 md:px-16 py-16 space-y-20 bg-gray-50 relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-offset="100"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="100"
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[200px] h-[200px] bg-[#E76727]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-[250px] h-[250px] bg-[#E76727]/20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* HERRAMIENTAS */}
      <div data-aos="fade-up" data-aos-delay="150">
        <h2 className="text-3xl font-bold mb-8 text-[#E76727] relative z-10">Herramientas & Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative z-10">
          {tools.map((tool, index) => (
            <div key={index} data-aos="zoom-in-up" data-aos-delay={index * 100} className={cardClass}>
              {tool.svg}
              <span className="text-sm mt-2 text-gray-900">{tool.name}</span>
              <div className="absolute inset-0 rounded-2xl bg-[#E76727]/20 opacity-0 hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* IDIOMAS */}
      <div data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-bold mb-8 text-[#E76727] relative z-10">Idiomas</h2>
        <div className="flex flex-wrap gap-6 relative z-10">
          {languages.map((lang, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 150} className={cardClass + " px-6 py-4"}>
              <p className="font-semibold text-gray-900 text-lg">{lang.name}</p>
              <p className="text-sm text-gray-500">{lang.level}</p>
              <div className="absolute inset-0 rounded-2xl bg-[#E76727]/20 opacity-0 hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCIA */}
      <div data-aos="fade-up" data-aos-delay="250">
        <h2 className="text-3xl font-bold mb-8 text-[#E76727] relative z-10">Experiencia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up-right"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl p-6 flex gap-4 shadow-md cursor-pointer hover:shadow-xl hover:scale-105 hover:-translate-y-1 relative transition-transform duration-300"
            >
              {exp.svg}
              <div className="text-left flex-1">
                <p className="text-gray-900 font-semibold text-lg">{exp.company}</p>
                <ul className="text-gray-700 text-sm mt-1 list-disc list-inside space-y-1">
                  {exp.position.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
                <p className="text-gray-400 text-xs mt-2">{exp.period}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#E76727]/20 opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCACIÓN */}
      <div data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-3xl font-bold mb-8 text-[#E76727] relative z-10">Educación</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {education.map((edu, index) => (
            <div key={index} data-aos="zoom-in-up" data-aos-delay={index * 100} className={cardClass}>
              <p className="text-gray-900 font-semibold text-lg">{edu.title}</p>
              <p className="text-gray-700 text-sm mt-2">{edu.university}</p>
              <p className="text-gray-400 text-xs mt-1">{edu.year}</p>
              <div className="absolute inset-0 rounded-2xl bg-[#E76727]/20 opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntermediateSections;




























