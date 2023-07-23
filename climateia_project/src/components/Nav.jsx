// import React, { useState } from "react";
// import {
//   RiCheckboxBlankCircleFill,
//   RiMenu3Fill,
//   RiCloseLine,
// } from "react-icons/ri";
// const Nav = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   return (
//     <div>
//       <nav
//         className={`flex items-center font-Poppins justify-center flex-row gap-12 fixed w-[80%] md:w-[40%] xl:w-full h-full ${
//           showMenu ? "left-0" : "-left-full"
//         } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
//       >
//         <a href="#hero" className="">
//           <img
//             src="/assets/icon_1_2.png"
//             className="self-center mr-[650px] mt-2 h-[60px]"
//           ></img>
//           <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
//         </a>

//         <a
//           href="#context"
//           className="text-white text-[18px] hover-underline"
//           onClick={(e) => handleClick(e, "#context")}
//         >
//           Contexto
//         </a>
//         <a
//           href="#prediction"
//           className="text-white text-[18px] hover-underline"
//           onClick={(e) => handleClick(e, "#prediction")}
//         >
//           Predicción
//         </a>
//         <a
//           href="#modified_prediction"
//           className="text-white text-[18px] hover-underline"
//           onClick={(e) => handleClick(e, "#modified_prediction")}
//         >
//           Interactua
//         </a>
//         <a
//           href="#learn"
//           className="text-white text-[18px] hover-underline"
//           onClick={(e) => handleClick(e, "#learn")}
//         >
//           Aprende
//         </a>
//         <a
//           href="#contact"
//           className="text-white text-[18px] hover-underline"
//           onClick={(e) => handleClick(e, "#contact")}
//         >
//           Contacta
//         </a>
//       </nav>
//       <button
//         onClick={() => setShowMenu(!showMenu)}
//         className="xl:hidden text-2xl p-2"
//       >
//         {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
//       </button>
//     </div>
//   );
// };

// export default Nav;

import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const navRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <nav className={showMenu ? "responsive_nav active" : "responsive_nav"} ref={navRef}>
      <a>
          <img src="/assets/icon_1_2.png" className="h-[60px] nav_logo" alt="Logo"></img>
        </a>
        <a href="/#context" className="hover-underline" onClick={hideMenu}>
          Contexto
        </a>
        <a href="/#prediction" className="hover-underline" onClick={hideMenu}>
          Predición
        </a>
        <a href="/#learn" className="hover-underline" onClick={hideMenu}>
          Aprende
        </a>
        <a href="/#contact" className="hover-underline" onClick={hideMenu}>
          Contacta
        </a>
        {showMenu && (
          <button className="nav-close-btn" onClick={toggleMenu}>
            <FaTimes />
          </button>
        )}
      </nav>
      <button className={`nav-btn ${showMenu ? "hidden" : ""}`} onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav;