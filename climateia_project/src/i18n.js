import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es', // Establecer el idioma por defecto a 'es' (español)
    debug: true, // Habilitar mensajes de debug en la consola
    // Agrega aquí más opciones de configuración si las necesitas
    interpolation: {
      escapeValue: false, // No escapar los valores traducidos para componentes React
    },
    backend: {
      // Ruta base donde se encuentran los archivos de traducción
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
