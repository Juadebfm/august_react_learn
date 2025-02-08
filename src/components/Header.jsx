import React from "react";
import ByWay from "/byway_full_logo.svg";
import { Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";
import Button from "./reusable-components/Button";
import { CiSearch } from "react-icons/ci";
import { AlignJustify } from "lucide-react";



const Header = () => {
  return (
    <nav className="capitalize flex items-center justify-between px-[35px] md:px-16 lg:px-20 py-6 border-b border-[#E2E8F0]">
      <img src={ByWay} alt="Company Logo" />
      <Link to="/category-page" className="hidden lg:block">Category</Link>
      <div className="hidden relative border border-main_heading h-[40px] lg:flex items-center justify-start w-[622px] rounded-md">
        <input
          type="search"
          placeholder="Search Courses"
          className="placeholder:text-main_text pl-8 focus:outline-none w-full h-full rounded-md"
        />
        <CiSearch className="absolute left-[10px] top-[25%]"/>
      </div>
      <Link to="/mentors-page" className="hidden lg:block">Teach On ByWay</Link>
      <div className="hidden lg:flex items-center justify-center gap-6">
        <IoCartOutline />
        <div className="flex items-center justify-center gap-4">
          <Button
            btnText="Login"
            btnStyle="w-auto h-[40px] border border-main_heading bg-transparent"
          />
          <Button
            btnText="Sign Up"
            btnStyle="w-auto h-[40px] border border-main_heading bg-main_text text-white"
          />
        </div>
      </div>
    <div className="flex lg:hidden">
    <AlignJustify />
    </div>
    </nav>
  );
};

export default Header;
