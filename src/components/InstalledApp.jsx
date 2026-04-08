import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const InstalledApp = ({app,handelInstall}) => {
  const { companyName, downloads, image, ratingAvg, size, title } = app;
  return (
    <div className="sm:flex gap-5  items-center">
          <div className="max-w-[30%]">
            <img className="rounded-xl" src={image} alt="image" />
          </div>
          <div className="w-[80%]">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-500">{companyName}</p>
            <hr className="w-full text-gray-200 my-3" />
            <div className="flex justify-start gap-5 lg:gap-10">
              <div className="text-center">
                <FaArrowDown className="text-2xl font-bold mx-auto text-green-500 " />
                <p className="text-sm my-1">Download</p>
                <h2 className="text-4xl font-bold">{downloads}</h2>
              </div>
              <div className="text-center">
                <FaStar className="text-2xl font-bold mx-auto text-orange-400 " />
                <p className="text-sm my-1">Average Ratings</p>
                <h2 className="text-4xl font-bold">{ratingAvg}</h2>
              </div>
              <div className="text-center">
                <FaHeart className="text-2xl font-bold mx-auto text-purple-500 " />
                <h2 className="text-sm my-1">Total Reviews</h2>
                <p className="text-4xl font-bold">{size}K</p>
              </div>
            </div>
            <div>
              <button
                className="btn bg-green-700 text-white my-3"
                onClick={() => handelInstall(app)}
              >
                Install Now ({downloads})
              </button>
            </div>
          </div>
        </div>
  )
}

export default InstalledApp