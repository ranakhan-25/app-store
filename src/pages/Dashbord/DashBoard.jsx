import React, { useContext } from 'react'
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import AppContext from "../../Context/AppContext";
import useDataFetch from "../../CustomHooks/useDataFetch";

const DashBoard = () => {
  const {installApp} = useContext(AppContext)
  const { apps } = useDataFetch()
  const uninstall = apps.length - installApp.length;
  
  const data = [
    { name: "Install", value: installApp.length, fill: "blue" },
    { name: "UnInstall", value: uninstall, fill: "green" },
  ];
  return (
    <div className="py-10 px-3 sm:px-5 md:px-[9%] bg-gray-50">
      <h1 className="text-3xl font-bold text-red-500 text-center mb-5">Install & UnInstall Apps</h1>
      <div className="flex justify-center items-center">
        <PieChart
          width={400}
          height={400}
          style={{ maxWidth: "500px", maxHeight: "80vh", aspectRatio: 1 }}
        >
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius={50}
            
            paddingAngle={5}
            isAnimationActive={true}
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default DashBoard;
