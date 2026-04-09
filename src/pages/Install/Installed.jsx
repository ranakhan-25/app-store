import { useContext } from "react";
import {toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import AppContext from "../../Context/AppContext";

const Installed = ({ item }) => {
  
  const { setInstallApps } = useContext(AppContext)
  
  

  const handelRemoveApp = (id) => {
  const getData = JSON.parse(localStorage.getItem("apps")) || [];
  const updatedData = getData.filter(item => item.id !== id);
  setInstallApps(updatedData);
  localStorage.setItem("apps", JSON.stringify(updatedData));
  toast.success("Uninstall successfully");
};

  return (
    <div>
      <div className="flex items-center justify-between p-2 border border-gray-400 rounded-xl my-2 ">
        <div className="flex items-center gap-2">
          <div className="w-15 rounded">
            <img src={item.image} alt="image" />
          </div>
          <div>
            <h1 className="text-lg font-medium">{item.title}</h1>
            <div className="flex items-center gap-5 mt-1">
              <div className="flex items-center gap-1 text-green-500 text-sm">
                <FaArrowDown />
                <p>9M</p>
              </div>
              <div className="flex items-center gap-1 text-orange-400 text-sm">
                <FaStar />
                <p>{item.ratingAvg}</p>
              </div>
              <p className="text-sm">{item.size}MB</p>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-success"
            onClick={() => handelRemoveApp(item.id)}
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default Installed;
