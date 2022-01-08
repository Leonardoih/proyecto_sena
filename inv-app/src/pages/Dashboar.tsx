import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/SideBar/Sidebar";
import Report from "../components/Report/Report";
import Footer from "../components/Footer/Footer";
import Logo from "../components/Images/logo.jpg"

const Dashboar = () => {
  return (
      <div>
        <div>
          <img src={Logo} className="logo" alt="main-logo" />
        </div>
            <div className="container">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="title">
          <h1>Inv-App</h1>
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
