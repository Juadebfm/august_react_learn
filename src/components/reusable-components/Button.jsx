import React from "react";

const Button = ({ btnText, btnStyle, btnFunc }) => {
  return (
    <button
      onClick={btnFunc}
      className={`${btnStyle} flex items-center px-3 h-[48px] hover:cursor-pointer hover:shadow-md hover:shadow-main_heading/30 duration-300 transition-all ease-linear`}
    >
      {btnText}
    </button>
  );
};

export default Button;
