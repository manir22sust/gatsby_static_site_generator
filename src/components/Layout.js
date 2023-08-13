import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {/*  content for each page */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
