import React from "react";

const Stars = () => {
  return <div className="p-3 sm:p-5 md:px-[9%] bg-linear-to-r from-[#632EE3] to-[#9F62F2] md:py-10">
    <div>
      <h1 className="text-center text-3xl text-white font-bold">Trusted by Millions, Built for You</h1>
      <div className="flex flex-wrap justify-around items-center gap-5 mt-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-200">Total Downloads</p>
          <h2 className="text-3xl font-bold text-white my-3">29.6M</h2>
          <p className="text-sm text-gray-200">21% more than last month</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-200">Total Reviews</p>
          <h2 className="text-3xl font-bold text-white my-3">906K</h2>
          <p className="text-sm text-gray-200">46% more than last month</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-200">Active Apps</p>
          <h2 className="text-3xl font-bold text-white my-3">132+</h2>
          <p className="text-sm text-gray-200">31 more will Launch</p>
        </div>
      </div>
  </div>
  </div>;
};

export default Stars;
