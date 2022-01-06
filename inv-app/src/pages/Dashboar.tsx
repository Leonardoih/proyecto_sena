import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/SideBar/Sidebar";


const Dashboar = () => {
  return (
    <div className="container">
        <div>
            <Navbar></Navbar>
          <h1>Inv-App</h1>
          <Sidebar></Sidebar>
        </div>
    </div>
  );
};

export default Dashboar;
