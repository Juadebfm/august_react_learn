import React from "react";

const Button = ({ btnText, btnStyle, btnFunc, extraText }) => {
  return (
    <button className={`${btnStyle} px-5`} onClick={btnFunc}>
      {btnText} <span>{extraText}</span>
    </button>
  );
};

export default Button;
