import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage('es')}>Español</button>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
    </div>
  );
};

export default LanguageSwitcher;
