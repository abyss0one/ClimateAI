import { useEffect, useState } from "react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";

function Dark_Light_mode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Cambiar la clase 'dark' del elemento 'html' al cambiar el estado del modo oscuro
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Función para determinar si es de noche (9 PM a 5 AM)
  const isNight = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 21 || hour < 5;
  };

  useEffect(() => {
    // Establecer el modo oscuro automáticamente al cargar la página si es de noche
    setDarkMode(isNight());

    // Configurar un intervalo para verificar si es de noche y cambiar el modo oscuro automáticamente
    const interval = setInterval(() => {
      setDarkMode(isNight());
    }, 1000 * 60); // Verificar cada minuto

    // Limpiar el intervalo cuando se desmonte el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Contenido de tu aplicación */}
      <button
        className={darkMode ? "bg-white w-11 h-11 rounded-full flex items-center justify-center" : "bg-black w-11 h-11 rounded-full flex items-center justify-center "}
        onClick={() => setDarkMode(!darkMode)}
      >
        {/* Utilizamos el ícono de la luna si está en dark mode, o el sol si está en light mode */}
        {darkMode ? (
          <WiDaySunny size={24} className="text-gray-600" />
        ) : (
          <WiNightClear size={24} className="text-gray-600" />
        )}
      </button>
    </div>
  );
}

export default Dark_Light_mode;
