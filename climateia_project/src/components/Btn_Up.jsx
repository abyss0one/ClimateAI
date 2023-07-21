import React, { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

const Btn_Up = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleButtonClick = () => {
    setIsVisible(false);
    scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`floating-button2 ${isVisible ? "visible" : ""}`}
      onClick={handleButtonClick}
    >
      <span className="text-2xl">
        <BiArrowToTop />
      </span>
    </div>
  );
};

export default Btn_Up;





