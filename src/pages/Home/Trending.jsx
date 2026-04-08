
import useDataFetch from "../../CustomHooks/useDataFetch";
import Card from "../Apps/Card";
import { Link } from "react-router";


const Trending = () => {
  const {isLoading,apps} = useDataFetch()

  return (
    <div className="py-10 px-3 sm:px-5 md:px-[9%]">
      <div className="text-center my-4">
        <h1 className=" text-3xl font-bold">Trending Apps</h1>
        <p className="text-gray-500 mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
     
        {isLoading ? (
          <div className="flex items-center justify-center min-h-75 py-10">
            <span className="loading loading-spinner text-primary w-12 h-12"></span>
            <p className="mt-4 text-gray-500">Loading trending apps...</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mt-10 lg:gap-10">{
            apps.slice(0, 9).map((app) => <Card key={app.id} app={app} />)
          }</div>
        )}
      
      <div className="text-center mt-10">
        <Link className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white" to="/all-apps">View All</Link>
      </div>
    </div>
  );
};

export default Trending;
