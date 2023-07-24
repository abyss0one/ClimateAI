import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Dark_Light_mode from "./Dark_Light_mode";


function Nav() {
  const navRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
    hideMenu();
  };

  return (
    <header>
      <nav className={`${showMenu ? "responsive_nav active" : "responsive_nav"}`} ref={navRef}>
        <a>
          <img src="/assets/icon_1_2.png" className="h-[60px] nav_logo" alt="Logo"></img>
        </a>
        <a href="/#context" className="hover-underline" onClick={(e) => handleClick(e, "#context")}>
          Contexto
        </a>
        <a href="/#prediction" className="hover-underline" onClick={(e) => handleClick(e, "#prediction")}>
          Predición
        </a>
        <a href="/#learn" className="hover-underline" onClick={(e) => handleClick(e, "#learn")}>
          Aprende
        </a>
        <a href="/#contact" className="hover-underline" onClick={(e) => handleClick(e, "#contact")}>
          Contacta
        </a>
        <div><Dark_Light_mode/></div>
        {showMenu && (
          <button className="nav-close-btn" onClick={toggleMenu}>
            <FaTimes />
          </button>
        )}
      </nav>
      <button className={`nav-btn  ${showMenu ? "hidden" : ""}`} onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav;
