import { useState } from "react";
import AppContext from "./AppContext";

const ProviderContext = ({ children }) => {
  const [installApp, setInstallApps] = useState([]);
  const handelInstallApp = (app) => {
    setInstallApps(pre=>[...pre,app])
  };

  const data = {
    installApp,
    setInstallApps,
    handelInstallApp,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default ProviderContext;
