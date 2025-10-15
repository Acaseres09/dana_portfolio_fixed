import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const themes = {
  light: {
    background: "bg-gradient-to-b from-neutral-100 via-white to-neutral-200",
    textColor: "text-neutral-800",
    font: "font-[Futura]",
  },
  dark: {
    background: "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700",
    textColor: "text-neutral-100",
    font: "font-[Futura]",
  },
};

function Root() {
  const [theme, setTheme] = useState("light");

  // Detectar el modo del sistema al inicio
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(systemPrefersDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* Botón flotante minimalista */}
      <button
        onClick={toggleTheme}
        className="fixed top-2 right-2 z-50 w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full shadow-md opacity-20 hover:opacity-100 transition-opacity duration-300"
        title="Cambiar tema"
      >
        {theme === "light" ? "🌞" : "🌙"}
      </button>

      {/* App con tema */}
      <App
        background={themes[theme].background}
        textColor={themes[theme].textColor}
        font={themes[theme].font}
      />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
