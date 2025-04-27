import React from "react";
import BottomTabs from "./BottomTabs"; // Adjust the import path as needed

const Layout = ({ children }) => {
  return (
    <div className="pb-2">
      {" "}
      {/* This padding accommodates the bottom tabs */}
      {children}
      <BottomTabs />
    </div>
  );
};

export default Layout;
