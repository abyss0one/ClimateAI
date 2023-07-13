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
    <div className="overflow-hidden relative flex flex-col  w-full  ">
      <div className="bg-[url(https://file.rendit.io/n/Ox0uyT8qDYqqfx8xY8aw.png)] bg-cover bg-50%_50%  flex flex-col gap-10  mb-10 " >
        <nav
          className={` flex items-center justify-center flex-row gap-20 mb-40 ml-4 fixed w-[80%] md:w-[40%] xl:w-full h-full ${
            showMenu ? "left-0" : "-left-full"
          } top-0 xl:static flex-1  flex flex-col xl:flex-row items-center  transition-all duration-500`}
        >
          <img
            src="https://file.rendit.io/n/ktUb6Djte4vRuNhR7gee.png"
            className="min-h-0 min-w-0 self-center mr-[700px] w-10 mt-4"
          />
          <a href="#" className=" nav_a">
            Prediction
          </a>
          <a href="#" className="nav_a">
            Interact
          </a>
          <a href="#" className="nav_a">
            Learn
          </a>
          <a href="#" className="nav_a">
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
        <div className="text-center whitespace-nowrap text-[160px] font-['Sora'] font-bold leading-[135px] text-white self-end w-3/4 mb-5 mr-32">
          Climate AI
        </div>
        <div className="bg-[rgba(24,_24,_24,_0.2)] flex flex-col justify-center h-32 shrink-0 mx-12 px-8 rounded-[20px]">
          <div className="text-justify font-['Sora'] leading-[30px] text-white ml-4 h-[57.02%]">
            La inteligencia artificial para la predicción climatológica. Obtén
            pronósticos confiables del tiempo y descubre información detallada
            sobre el clima, incluyendo análisis históricos, para anticipar
            cambios climáticos en el área de Cataluña.
          </div>
        </div>
        <button className="bg-[#fafafa] self-start flex flex-col justify-center ml-[467px] h-16 shrink-0 items-center rounded-[60px]">
          <div className="text-xl font-['Poppins'] font-bold tracking-[1.3] text-[#48924f] bg-[linear-gradient(180deg,_#ffffff_0%,_#ffffff_100%)] w-16 mx-20">
            START
          </div>
        </button>
      </div>
    </div>
  );
}

export default Hero