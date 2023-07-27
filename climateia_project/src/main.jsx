import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import App from './App.jsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js'; // Importa la instancia de i18n que hemos creado

createRoot(document.getElementById('root')).render( // Usa createRoot en lugar de ReactDOM.createRoot
    // <React.StrictMode>
    //   <I18nextProvider i18n={i18n}>
    //     <App />
    //   </I18nextProvider>
    // </React.StrictMode>


  // Para solucionar un problema con el chat bot quita el strict mode
  
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>

);
