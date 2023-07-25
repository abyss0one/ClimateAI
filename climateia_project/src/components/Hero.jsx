import React from "react";
import Nav from "./Nav";
import { useTranslation } from 'react-i18next';

const scrollToContext = () => {
  const contextSection = document.getElementById('context');
  contextSection.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full my-auto" id="hero">
      <div className="dark:wallpaper bg-[url(https://file.rendit.io/n/Ox0uyT8qDYqqfx8xY8aw.png)] bg-cover bg-50%_50% flex flex-col  h-screen">
      {/* TODO verificar por que no funciona el dark:wallpaper */}
        <div className="my-auto z-10">
          <Nav />
        </div>
        <div className=" font-Poppins text-[95px] md:text-[115px] lg:text-[180px] font-bold text-white text-center w-full">
        {t('hero.title')}
        </div>
        <div className="bg-[rgba(24,24,24,0.37)] flex  py-2 rounded-[20px] md:mx-32 mx-[2rem] px-2 mb-5">
          <div className="text-center font-Poppins md:leading-[30px] md:text-base text-sm text-white ">
          {t('hero.description')}
          </div>
        </div>
        <button className="bg-white mx-auto justify-center h-14 items-center rounded-[60px] lg:mb-20  md:mb-[130px] mb-6 transition-colors hover:bg-hover_btn  hover:font-bold">
          <div className="text-xl font-Poppins text-text_green mx-8  font-bold hover:text-white" onClick={scrollToContext}>
            <a href="#context">{t('hero.button')}</a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
