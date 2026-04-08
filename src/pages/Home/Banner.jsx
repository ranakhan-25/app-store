import React from "react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

import BannerImage from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="max-md:px-3 md:px-[9%] bg-gray-50">
      <div className="text-center pt-10 ">
        <h1 className="font-bold text-3xl md:text-5xl my-5">
          We Build <br />{" "}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
            Productive 
          </span>
          Apps
        </h1>
        <p className="text-gray-500">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="my-5">
          <button className="btn mr-2">
            <FaGooglePlay className="text-green-600 text-2xl" />{" "}
            <span>Google Play</span>
          </button>
          <button className="btn ">
            <FaAppStoreIos className="text-blue-700 text-2xl" />{" "}
            <span>App Store</span>
          </button>
        </div>
        <div className="sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          <img className="mx-auto" src={BannerImage} alt="BannerImage" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
