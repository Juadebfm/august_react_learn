import React from "react";
import HomeHero from "../components/HomeHero";
import HomeStatistics from "../components/HomeStatistics";
import HomeTopCategories from "../components/HomeTopCategories";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeStatistics />
      <HomeTopCategories/>
    </>
  );
};

export default HomePage;
