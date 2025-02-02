import React from "react";
import Button from "./resuable-components/Button";

const HomeHero = () => {
  const handleHome = () => {
    console.log("Start your instructor journey");
  };
  return (
    <div>
      <Button
        btnText="Start your instructor journey"
        btnStyle="bg-main_blue text-white py-4 px-6 rounded-full"
        btnFunc={() => {
          handleHome();
        }}
        extraText="My new text"
      />
    </div>
  );
};

export default HomeHero;
