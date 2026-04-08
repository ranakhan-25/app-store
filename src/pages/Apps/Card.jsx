import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";


const Card = ({ app }) => {
  const {
    downloads,
    image,
    ratingAvg,
    title,
  } = app;


  return (
    <Link to={`/app/${app.id}`}>
      <div className="card bg-base-100 shadow-sm max-h-80">
        <figure>
          <img
            width={300}
            src={image}
            alt="Images"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center justify-between">
            <button className="px-3 py-1 rounded-md flex items-center gap-2 text-green-500 bg-green-100">
              <FaArrowDown/>
              {downloads}
            </button>
            <button className="flex items-center gap-2 text-yellow-500 bg-yellow-100 px-3 py-1 rounded-md">
              <FaRegStar/>
              {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
