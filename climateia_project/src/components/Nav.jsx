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

import React, { useState } from "react";
// import Button from './Button';

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            {/* <ion-icon name="logo-ionic"></ion-icon> */}
          </span>
          Designer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <Button>Get Started</Button> */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
