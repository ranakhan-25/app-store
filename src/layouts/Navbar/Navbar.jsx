import React from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

import Logo from "../../assets/images/logo.png";


const Navbar = () => {
  const link = <>
    <NavLink className={({isActive})=> `${isActive ? "underline bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""} font-medium `} to="/">Home</NavLink>
    <NavLink className={({isActive})=> `${isActive ? "underline bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""} font-medium `} to="/all-apps">Apps</NavLink>
    <NavLink className={({isActive})=> `${isActive ? "underline bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""} font-medium `} to="/install-apps">Installation</NavLink>
    <NavLink className={({isActive})=> `${isActive ? "underline bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""} font-medium `} to="/dashboard">Dashboard</NavLink>
  </>
  return (
    <div className="navbar sm:px-[9%]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  flex flex-col gap-2"
          >
            {link}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10" src={Logo} alt="" />
          <span className="text-xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <FaGithub />
          <span>Contribute</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
