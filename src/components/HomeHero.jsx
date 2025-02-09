import React from "react";
import Button from "./reusable-components/Button";
import HeroImg from "/hero1.png";

const HomeHero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-[35px] md:px-16 py-8">
      <div className="w-full lg:w-[70%]">
        <h1 className="text-[40px] font-bold capitalize mb-6 leading-tight">Unlock Your Potential with Byway</h1>
        <p>
          Welcome to Byway, where learning knows no bounds. We believe that
          education is the key to personal and professional growth, and we're
          here to guide you on your journey to success.
        </p>
        <Button
          btnText="Start your instructor journey"
          btnStyle="bg-[#3B82F6] dark:bg-red-500 h-[40px] text-white w-full lg:w-max justify-center lg:justify-start rounded-md mt-6 mb-10 lg:mb-0"
        />
      </div>
      <div>
        <img src={HeroImg} alt="Mentor Holding Class Notes" />
      </div>
    </section>
  );
};

export default HomeHero;
