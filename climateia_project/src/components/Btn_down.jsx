import React, { useState } from "react";
import { BiArrowToBottom } from "react-icons/bi";
const Btn_down = () => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleButtonClick = () => {
    setIsVisible(false);
    scrollToBottom();
  };

  return (
    <div className={`floating-button`} onClick={handleButtonClick}>
      <span className="text-2xl">
        <BiArrowToBottom />
      </span>
    </div>
  );
};

export default Btn_down;
