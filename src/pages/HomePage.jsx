import React from "react";
import HomeHero from "../components/HomeHero";
import HomeStatistics from "../components/HomeStatistics";
import HomeTopCategory from "../components/HomeTopCategory";
import HomeTopInstructor from "../components/HomeTopInstructor";
import HomeTestimonial from "../components/HomeTestimonial";
import HomeCTA from "../components/HomeCTA";

const HomePage = () => {
  return (
    <div className="min-h-screen mt-32">
      <HomeHero />
      <HomeStatistics />
      <HomeTopCategory />
      <HomeTopInstructor />
      <HomeTestimonial />
      <HomeCTA />
    </div>
  );
};

export default HomePage;
