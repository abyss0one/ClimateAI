import React from "react";
import { useTranslation } from "react-i18next";
import { RiTranslate2 } from "react-icons/ri";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="lang-menu">
      <RiTranslate2 className="h-7 w-7" />
      <div className="selected-lang"></div>
      <ul>
        <li>
          <button
            onClick={() => handleChangeLanguage("cat")}
            className="cat"
          ></button>
        </li>
        <li>
          <button
            onClick={() => handleChangeLanguage("en")}
            className="en"
          ></button>
        </li>
        <li>
          <button
            onClick={() => handleChangeLanguage("es")}
            className="es"
          ></button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
