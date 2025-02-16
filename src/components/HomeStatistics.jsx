import React from "react";

const Statistic = ({ value, valueText }) => {
  return (
    <div className="flex items-center justify-center flex-col text-[#0F172A] px-12">
      <div className="text-[32px] font-bold tracking-normal mb-2">{value}+</div>
      <p className="font-light text-sm">{valueText}</p>
    </div>
  );
};

const HomeStatistics = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 justify-center bg-[#F8FAFC] mt-10 px-[35px] md:px-16 py-14">
      <div className=" flex items-center justify-center w-full lg:w-[25%]">
        <Statistic value={`2500`} valueText={`Courses by our best mentors`} />
      </div>
      <div className="bg-gray-500/50 w-[50%] h-[3px] lg:h-[30px] lg:w-[3px] my-5 lg:my-0"></div>
      <div className=" flex items-center justify-center w-full lg:w-[25%]">
        <Statistic value={`1000`} valueText={`Courses by our best mentors`} />
      </div>
      <div className="bg-gray-500/50 w-[50%] h-[3px] lg:h-[30px] lg:w-[3px] my-5 lg:my-0"></div>
      <div className=" flex items-center justify-center w-full lg:w-[25%]">
        <Statistic value={`150`} valueText={`Courses by our best mentors`} />
      </div>
      <div className="bg-gray-500/50 w-[50%] h-[3px] lg:h-[30px] lg:w-[3px] my-5 lg:my-0"></div>
      <div className=" flex items-center justify-center w-full lg:w-[25%]">
        <Statistic value={`2400`} valueText={`Courses by our best mentors`} />
      </div>
     
    </div>
  );
};

export default HomeStatistics;
