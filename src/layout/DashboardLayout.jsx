import React from "react";
import logo from "../assets/teja-logo.jpeg";

const DashboardLayout = ({ children }) => {
  return (
    <div className="soft-bg min-h-screen relative">

      {/* Top-left logo */}
      <div className="absolute top-6 left-8">
        <img
          src={logo}
          alt="Teja Logo"
          className="w-28 object-contain teja-animate"
        />
      </div>

      {/* Main centered content */}
      <div className="min-h-screen flex items-center justify-center">
        {children}
      </div>

    </div>
  );
};

export default DashboardLayout;