// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const handleChangeLanguage = (newLanguage) => {
//     i18n.changeLanguage(newLanguage);
//   };

//   return (
//     <div>
//       <button onClick={() => handleChangeLanguage('es')}>Español</button>
//       <button onClick={() => handleChangeLanguage('en')}>English</button>
//       <button onClick={() => handleChangeLanguage('cat')}>Catalan</button>
//     </div>
//   );
// };

// export default LanguageSwitcher;

import React from "react";
import { useTranslation } from "react-i18next";
import { RiTranslate2 } from "react-icons/ri";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    // <div className="fixed bottom-0 left-0">
    //   <div className="flex space-x-2">
    //     <button
    //       onClick={() => handleChangeLanguage('es')}
    //       className="focus:outline-none border-none bg-transparent"
    //     >
    //       <img src="/assets/es_flag.png" alt="Español" width="30" height="20" />
    //     </button>
    //     <button
    //       onClick={() => handleChangeLanguage('en')}
    //       className="focus:outline-none border-none bg-transparent"
    //     >
    //       <img src="/assets/en_flag.png" alt="English" width="30" height="20" />
    //     </button>
    //     <button
    //       onClick={() => handleChangeLanguage('cat')}
    //       className="focus:outline-none border-none bg-transparent"
    //     >
    //       <img src="/assets/cat_flag.png" alt="Catalan" width="30" height="20" />
    //     </button>
    //   </div>
    // </div>
    <div className="lang-menu"><RiTranslate2 className="h-8 w-8"/>
      <div className="selected-lang"></div>
      <ul>
        <li>
          <button onClick={() => handleChangeLanguage("cat")} className="cat">
          </button>
        </li>
        <li>
          <button onClick={() => handleChangeLanguage("en")} className="en">
          </button>
        </li>
        <li>
          <button onClick={() => handleChangeLanguage("es")} className="es">
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
