import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/SideBar/Sidebar";
import Report from "../components/Report/Report";
import Footer from "../components/Footer/Footer";
import Logo from "../components/Images/logo.jpg";

const Dashboar = () => {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="content">
          <Report></Report>
        </div>
        <div className="Footer">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboar;
