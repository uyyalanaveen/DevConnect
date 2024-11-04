// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Top Bar */}
      <div className="w-full fixed top-0 left-0 z-20">  {/* Updated z-index */}
        <Navbar />
      </div>
      {/* Main content area */}
      <div className="flex-grow mt-16 p-4 b-0 text-gray-300">
        {/* Outlet will render the current route's component */}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

