import React from "react";
import Logo from "/byway_logo.svg";
import { Link } from "react-router";
import { Search, ShoppingCart } from "lucide-react";
import Button from "./resuable-components/Button";

const Navbar = () => {
  const handleSignupBtnClick = () => {
    console.log("I have been clicked");
  };
  const handleLoginBtnClick = () => {
    window.location.href = "/signin";
  };
  return (
    <nav className="flex items-center justify-between px-[5rem] py-[1.4rem] border-b-2 border-b-[#E2E8F0] fixed w-full bg-white">
      <Link to="/">
        <img src={Logo} alt="Company Logo" />
      </Link>
      <div>
        <Link to="/category">Category</Link>
      </div>
      <div className="border border-main_dark_grey w-[600px] h-[40px] relative rounded-md">
        <input
          type="text"
          placeholder="Search Courses"
          className="pl-[2.8rem] w-full h-full placeholder:text-main_dark_grey focus:outline-none rounded-md"
        />
        <Search className="absolute -translate-y-0 top-[15%] left-[15px]" />
      </div>
      <div>
        <Link to="/mentors">Teach On ByWay</Link>
      </div>
      <div>
        <ShoppingCart />
      </div>
      <div className="flex items-center justify-center gap-8">
        <Button
          btnText="Log In"
          btnStyle="w-auto h-[40px] border border-main_dark_grey text-black"
          btnFunc={() => {
            handleLoginBtnClick();
          }}
        />
        <Button
          btnText="Sign Up"
          btnStyle="w-auto h-[40px] bg-[#334155] text-white"
          btnFunc={() => {
            handleSignupBtnClick();
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
