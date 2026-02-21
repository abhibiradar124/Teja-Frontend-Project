import React from "react";
import logo from "../assets/teja-logo.jpeg";

const DashboardLayout = ({ children }) => {
  return (
    <div className="soft-bg min-h-screen">

      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur border-b border-gray-200 flex items-center px-8 z-50">
        <img
          src={logo}
          alt="Teja Logo"
          className="h-14 w=20 object-contain teja-animate"
        />
      </div>

      {/* PAGE CONTENT */}
      <div className="pt-16 min-h-screen flex items-center justify-center">
        {children}
      </div>

    </div>
  );
};

export default DashboardLayout;