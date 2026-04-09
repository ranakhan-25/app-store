import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import All_Apps from "../pages/Apps/All_Apps";
import InstallApp from "../pages/Install/InstallApp";
import Layout from "../layouts/Layout";
import Error from "../Error/Error";
import AppDetails from "../pages/Apps/AppDetails";
import DashBoard from "../pages/Dashbord/DashBoard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: "/all-apps",
        element:<All_Apps/>
      },
      {
        path: "/install-apps",
        element:<InstallApp/>
      },
      {
        path: "/app/:id",
        element:<AppDetails/>
      },
      {
        path: "/dashboard",
        element:<DashBoard/>
      }
    ]
  },
  {
    path: "*",
    element:<Error/>
  }
])

export default router