import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Sidebar.scss";



const Sidebar = () => {
  return (
    <div >
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="Laptop">Laptop</NavLink>
          </li>
          <li>
            <NavLink to="Desktop">Desktop</NavLink>
          </li>
          <li>
            <NavLink to="Otros">Otros</NavLink>
          </li>
        </ul>
      </div>
      <div className="control">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
