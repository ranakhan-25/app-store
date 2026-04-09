
import { useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";
import Installed from "./Installed";
import AppNotFound from "../../Error/AppNotFound"

const InstallApp = () => {
  const { installApp, setInstallApps } = useContext(AppContext)
  
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("apps")) || [];
    setInstallApps(storedApps);
  }, []);

  return (
    <div className="py-10 px-3 sm:px-5 md:px-[9%] bg-gray-50">
      <div className="text-center my-4">
        <h1 className=" text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div>
        <h1 className="text-xl font-medium">{installApp.length > 0 ? installApp.length : "Not"} Apps Found </h1>

        <div>
          {installApp.length > 0 ? installApp.map((app) => <Installed key={app.id} item={app}   />) : <AppNotFound/>}
        </div>
      </div>
    </div>
  );
};

export default InstallApp;
