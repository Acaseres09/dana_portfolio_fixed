import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import About from "./components/About";
import IntermediateSections from "./components/IntermediateSections";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Home from "./components/Home"; // Importamos el Home

function App({ font = "font-sans", textColor = "text-gray-900" }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${font} ${textColor} bg-gradient-to-b from-purple-50 via-purple-100 to-gray-50`}>
      
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow">

        {/* Home */}
        <section id="home">
          <Home />
        </section>

        {/* About */}
        <section id="about" className="py-16 px-6 md:px-20" data-aos="fade-up">
          <About />
        </section>

        {/* Secciones intermedias */}
        <section id="intermediate" className="py-16 px-6 md:px-20" data-aos="fade-up">
          <IntermediateSections />
        </section>

        {/* Portafolio */}
        <section id="portfolio" className="py-16 px-6 md:px-20" data-aos="fade-up">
          <Portfolio />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;












