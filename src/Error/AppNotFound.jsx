import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center  py-10 mt-5 bg-gray-200 rounded-xl">
      <div className="bg-white shadow-lg rounded-xl p-10 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Not Apps Found</h1>
        <p className="text-gray-600 text-lg mb-6">
          No app installed. Please install an app to continue.
        </p>

        <div className="flex gap-4 justify-center">
          {/* Apps Page Button */}
          <button
            onClick={() => navigate("/all-apps")}
            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Go to Apps Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
