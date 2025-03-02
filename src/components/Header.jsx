import React, { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { Link } from "react-router";
import ByWay from "/byway_full_logo.svg";
import { CiSearch } from "react-icons/ci";
import { AlignJustify, MoonIcon, Sun, X } from "lucide-react";
import { IoCartOutline } from "react-icons/io5";
import Button from "./reusable-components/Button";

const Header = () => {
  // UseTheme Context
  const { isDarkMode, toggleTheme } = useThemeContext();
  // State for menu open and close
  const [isMenuOpen, setIsMenuOpen] = useState(false); // isMenuOpen = false

  // Create a menu toggle function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // isMenuOpen from false to true, true to false
  };

  const goToSignup = () => {
    window.location.href = "/signup"; // http://localhost:5173/signup
  };
  const goToSignin = () => {
    window.location.href = "/login";
  };

  return (
    <header className="fixed w-full z-50">
      <nav className="capitalize flex items-center justify-between px-[35px] md:px-16 lg:px-20 py-6 border-b border-[#E2E8F0] bg-white dark:bg-gray-900 dark:text-white">
        <Link to="/">
          <img src={ByWay} alt="" />
        </Link>
        <Link to="/category-page" className="hidden lg:block">
          Category
        </Link>

        <div className="hidden relative border border-main_heading h-[40px] lg:flex items-center justify-start w-[622px] rounded-md">
          <input
            type="search"
            placeholder="Search Courses"
            className="placeholder:text-main_text pl-8 focus:outline-none w-full h-full rounded-md"
          />
          <CiSearch className="absolute left-[10px] top-[25%]" />
        </div>

        <Link to="/mentors-page" className="hidden lg:block">
          Teach On ByWay
        </Link>

        <div className="hidden lg:flex items-center justify-center gap-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          >
            {isDarkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <MoonIcon className="text-gray-400" />
            )}
          </button>

          <IoCartOutline size={23} />

          <div className="flex items-center justify-center gap-4">
            <Button
              btnText="Login"
              btnStyle="w-auto h-[40px] border border-main_heading bg-transparent text-sm"
              btnFunc={goToSignin}
            />
            <Button
              btnText="Sign Up"
              btnStyle="w-auto h-[40px] border border-main_heading bg-main_heading text-white text-sm"
              btnFunc={goToSignup}
            />
          </div>
        </div>

        <button onClick={toggleMenu} className="lg:hidden p-2">
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <AlignJustify className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* // Mobile nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full h-max bg-gray-400 dark:bg-gray-900 dark:text-white border-b border-[#e2e8f0] px-[35px] py-6 flex flex-col gap-6">
          <div className="relative border border-main_heading h-[40px] flex items-center justify-start w-full rounded-md">
            <input
              type="search"
              placeholder="Search Courses"
              className="placeholder:text-main_text pl-8 focus:outline-none w-full h-full rounded-md"
            />
            <CiSearch className="absolute left-[10px] top-[25%]" />
          </div>
          <Link to="/category-page">Category</Link>
          <Link to="/mentors-page">Teach On ByWay</Link>

          <div className="lg:hidden items-center justify-center gap-6">
            <div className="flex items-center justify-start gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
              >
                {isDarkMode ? (
                  <Sun className="text-yellow-400" size={23} />
                ) : (
                  <MoonIcon className="text-gray-400" size={23} />
                )}
              </button>

              <IoCartOutline size={23} />
            </div>

            <div className="flex-col flex items-center justify-center gap-4 mt-8">
              <Button
                btnText="Login"
                btnStyle="w-full h-[40px] border border-main_heading bg-transparent text-sm"
              />
              <Button
                btnText="Sign Up"
                btnStyle="w-full h-[40px] border border-main_heading bg-main_heading text-white text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
