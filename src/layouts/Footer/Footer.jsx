import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import Logo from "../../assets/images/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="text-white bg-black px-3 sm:px-[9%] pt-10">
      <div className="flex justify-between items-center border-b border-gray-50 pb-10">
        <div className="flex items-center gap-2">
          <img width={30} src={Logo} alt="" />
          <h1>HERO.IO</h1>
        </div>
        <div>
          <h1>Social Link</h1>
          <ul className="flex gap-3 my-3 ">
            <li className="bg-white text-black w-7 h-7 flex justify-center items-center rounded-full hover:bg-red-400 hover:text-white">
              <Link to="">
                <FaTwitter />
              </Link>
            </li>
            <li className="bg-white text-black w-7 h-7 flex justify-center items-center rounded-full hover:bg-red-400 hover:text-white">
              <Link to="">
                <FaFacebookF />
              </Link>
            </li>
            <li className="bg-white text-black w-7 h-7 flex justify-center items-center rounded-full hover:bg-red-400 hover:text-white">
              <Link  to="">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-5">
        <p className="text-sm">
          YourBrand
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
