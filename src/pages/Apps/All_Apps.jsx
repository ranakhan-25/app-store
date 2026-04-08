import Card from "./Card";
import useDataFetch from "../../CustomHooks/useDataFetch";

const All_Apps = () => {
  
  const {isLoading,apps} = useDataFetch()

  return (
    <div className="py-10 px-3 sm:px-5 md:px-[9%] bg-gray-50">
      <div className="text-center my-4">
        <h1 className=" text-3xl font-bold">Our All Applications</h1>
        <p className="text-gray-500 mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <p className="text-xl font-medium">({apps.length}) Apps Found</p>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-75 py-10">
          <span className="loading loading-spinner text-primary w-12 h-12"></span>
            <p className="mt-4 text-gray-500">Loading trending apps...</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mt-10 lg:gap-10">
          {apps.map((app) => (
            <Card key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default All_Apps;
