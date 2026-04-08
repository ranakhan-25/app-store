import { useParams } from "react-router";
import useDataFetch from "../../CustomHooks/useDataFetch";
// import {toast } from 'react-toastify';


import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import RatingData from "../../components/RatingData";
import InstalledApp from "../../components/InstalledApp";

const AppDetails = () => {


  const { installApp, handelInstallApp } = useContext(AppContext);
  const { id } = useParams();
  const { apps, isLoading } = useDataFetch();
  const app = apps.find((item) => String(item.id) === id);



  if (isLoading) {return <h1 className="text-center text-2xl font-bold">Loading...</h1>}
  const totalReviews = app.ratings.reduce((sum, item) => sum + item.count, 0);
  const ratingsWithPercent = app.ratings.map((item) => ({
    ...item,
    percentage:
      totalReviews > 0 ? Math.round((item.count / totalReviews) * 100) : 0,
    formattedCount: item.count.toLocaleString(),
  }));
  const sortedRatings = [...ratingsWithPercent].reverse();


  
  const handelInstall = (newApp) => {
    const existApp = installApp.find((item) => item.id === newApp.id);

    if (existApp) {
      alert("This app already Installed");
    } else {
      handelInstallApp(newApp);
      alert("Install successfully");
    }
  };

  return (
    <div className="px-3 sm:px-5 md:px-[9%] mt-10">
      <div className="border-2 border-gray-200 p-2 rounded-xl">
        <InstalledApp app={app} handelInstall={handelInstall} />
      </div>
      <div>
        <h1 className="text-2xl font-medium mt-5">Ratings</h1>
        <div>{RatingData(totalReviews, sortedRatings)}</div>
      </div>
      <div className="p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Description
        </h2>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
