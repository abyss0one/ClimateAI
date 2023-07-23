import React, { useState } from "react";
import Nav from "./Nav";
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full" id="hero">
      <div className="bg-[url(https://file.rendit.io/n/Ox0uyT8qDYqqfx8xY8aw.png)] bg-cover bg-50%_50% flex flex-col  h-screen">
      <div className=" my-auto">
        <Nav/>
      </div>
        {/* <nav
          className={`flex items-center font-Poppins justify-center flex-row gap-12 fixed w-[80%] md:w-[40%] xl:w-full h-full ${
            showMenu ? "left-0" : "-left-full"
          } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
        >
          <a href="#hero" className="">
            <img
              src="/assets/icon_1_2.png"
              className="self-center mr-[650px] mt-2 h-[60px]"
            ></img>
            <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
          </a>

          <a
            href="#context"
            className="text-white text-[18px] hover-underline"
            onClick={(e) => handleClick(e, "#context")}
          >
            Contexto
          </a>
          <a
            href="#prediction"
            className="text-white text-[18px] hover-underline"
            onClick={(e) => handleClick(e, "#prediction")}
          >
            Predicción
          </a>
          <a
            href="#modified_prediction"
            className="text-white text-[18px] hover-underline"
            onClick={(e) => handleClick(e, "#modified_prediction")}
          >
            Interactua
          </a>
          <a
            href="#learn"
            className="text-white text-[18px] hover-underline"
            onClick={(e) => handleClick(e, "#learn")}
          >
            Aprende
          </a>
          <a
            href="#contact"
            className="text-white text-[18px] hover-underline"
            onClick={(e) => handleClick(e, "#contact")}
          >
            Contacta
          </a>
        </nav>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="xl:hidden text-2xl p-2"
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button> */}
        <div className="text-[95px] font-Poppins lg:text-[160px] font-bold text-white text-center w-full">
          Climate AI
        </div>
        <div className="bg-[rgba(24,24,24,0.37)] flex  py-2 rounded-[20px] md:mx-32 mx-[2rem] px-2 mb-5">
          <div className="text-center font-Poppins md:leading-[30px] md:text-[16px] text-[12px] text-white ">
            La inteligencia artificial para la predicción climatológica. Obtén
            pronósticos confiables del tiempo y descubre información detallada
            sobre el clima, incluyendo análisis históricos, para anticipar
            cambios climáticos en el área de Cataluña.
          </div>
        </div>
        <button className="bg-white mx-auto justify-center h-14 items-center rounded-[60px] mb-36 transition-colors hover:bg-hover_btn  hover:font-bold">
          <div className="text-xl font-Poppins text-text_green mx-8  font-bold hover:text-white">
            <a href="#context">Comenzar</a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
