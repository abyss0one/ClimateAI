import React, { useState } from "react";
import Nav from "./Nav";

const Hero = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };
// TODO verificar para que sirve la func 
  return (
    <div className="flex flex-col w-full my-auto" id="hero">
      <div className="bg-[url(https://file.rendit.io/n/Ox0uyT8qDYqqfx8xY8aw.png)] bg-cover bg-50%_50% flex flex-col  h-screen">
        <div className="my-auto">
          <Nav />
        </div>
        <div className=" font-Poppins text-[95px] md:text-[115px] lg:text-[180px] font-bold text-white text-center w-full">
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
        <button className="bg-white mx-auto justify-center h-14 items-center rounded-[60px] lg:mb-20  md:mb-[200px] mb-6 transition-colors hover:bg-hover_btn  hover:font-bold">
          <div className="text-xl font-Poppins text-text_green mx-8  font-bold hover:text-white">
            <a href="#context">Comenzar</a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;



// import React from "react";
// import Nav from "./Nav";
// const Hero = () => {
//   return (
//     <div className="flex flex-col w-full my-auto" id="hero">
//       <div className="bg-[url(https://file.rendit.io/n/Ox0uyT8qDYqqfx8xY8aw.png)] bg-cover bg-50%_50% flex flex-col  h-screen">
//         <div className="my-auto">
//           <Nav />
//         </div>md:text-base
//         <div className=" font-Poppins text-[95px] md:text-[115px] lg:text-[180px] font-bold text-white text-center w-full">
//           Climate AI
//         </div>
//         <div className="bg-[rgba(24,24,24,0.37)] flex  py-2 rounded-[20px] md:mx-32 mx-[2rem] px-2 mb-5">
//           <div className="text-center font-Poppins md:leading-[30px] md:text-base text-sm text-white ">
//             La inteligencia artificial para la predicción climatológica. Obtén
//             pronósticos confiables del tiempo y descubre información detallada
//             sobre el clima, incluyendo análisis históricos, para anticipar
//             cambios climáticos en el área de Cataluña.
//           </div>
//         </div>
//         <button className="bg-white mx-auto justify-center h-14 items-center rounded-[60px] lg:mb-20  md:mb-[130px] mb-6 transition-colors hover:bg-hover_btn  hover:font-bold">
//           <div className="text-xl font-Poppins text-text_green mx-8  font-bold hover:text-white">
//             <a href="#context">Comenzar</a>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
