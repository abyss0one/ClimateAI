import React, { useState } from "react";
// icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";
const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="overflow-hidden relative flex flex-col  w-full ">
      <div className="bg-[url(https://file.rendit.io/n/Ox0uyT8qDYqqfx8xY8aw.png)] bg-cover bg-50%_50%  flex flex-col gap-10  mb-10  h-screen ">
        <nav
          className={` flex items-center justify-center flex-row gap-20 mb-40 ml-4 fixed w-[80%] md:w-[40%] xl:w-full h-full ${
            showMenu ? "left-0" : "-left-full"
          } top-0 xl:static flex-1  flex flex-col xl:flex-row items-center  transition-all duration-500`}
        >
          <img
            src="https://file.rendit.io/n/ktUb6Djte4vRuNhR7gee.png"
            className="self-center mr-[700px]  mt-5"
          />
          <a href="#" className="text-white text-[18px] hover-underline">
            Prediction
          </a>
          <a href="#" className="text-white text-[18px] hover-underline">
            Interact
          </a>
          <a href="#" className="text-white text-[18px] hover-underline">
            Learn
          </a>
          <a href="#" className="text-white text-[18px] hover-underline">
            Contact
          </a>
        </nav>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl p-2 xl:hidden"
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          {/* aqui se introduce un onclick y una funcion asociada,en la linea 11 se ha inportado el instructor  */}
        </button>
        <div className=" text-[100px] font-['Sora']  lg:text-[160px] font-bold text-white text-center ">
          Climate AI
        </div>
        <div className="bg-[rgba(24,24,24,0.37)] flex flex-col justify-center h-32 lg:mx-[200px] px-8 rounded-[20px] mx-6">
          <div className="text-justify font-Sora md:leading-[30px] text-xs md:text-[16px] text-white">
            La inteligencia artificial para la predicción climatológica. Obtén
            pronósticos confiables del tiempo y descubre información detallada
            sobre el clima, incluyendo análisis históricos, para anticipar
            cambios climáticos en el área de Cataluña.
          </div>
        </div>
        <button className="bg-white mx-auto justify-center h-16 items-center rounded-[60px] mb-8 transition-colors hover:bg-[#301f05] hover:text-white hover:font-bold">
          <div className="text-xl font-['Poppins'] text-[#48924f] mx-8 md:mx-24 font-bold">
            START
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
