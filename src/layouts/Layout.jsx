import React from 'react'
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <div className='max-w-400 mx-auto'>
      <ToastContainer/>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout