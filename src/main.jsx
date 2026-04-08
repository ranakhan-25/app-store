import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom"
import router from './Router/Routers'
import ProviderContext from './Context/ProviderContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderContext>
      <RouterProvider router={router}></RouterProvider>
    </ProviderContext>
  </StrictMode>,
)

