import React from "react";
import { useNavigate } from "react-router";
import { courses } from "../utils/utils";
import Card from "./reusable-components/Card";

const HomeTopCourses = () => {
  const navigate = useNavigate();
  return (
    <div className="h-max px-[35px] md:px-16 py-14">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Top Courses</h2>
        <button
          onClick={() => navigate("/course-details")}
          className="text-sm hover:underline underline-offset-2 duration-150 transition-all ease-linear text-main_blue font-medium"
        >
          See More
        </button>
      </div>

      {/* Show first 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {courses.slice(0,4).map((course, index) => (
          <Card key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default HomeTopCourses;
