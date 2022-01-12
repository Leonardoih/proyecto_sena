import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="laptop">Laptop</Link>
        </li>
        <li>
          <Link to="desktop">Desktop</Link>
        </li>
        <li>
          <Link to="otros">Otros</Link>
        </li>
        <li>
          <Link to="panel">Control Panel</Link>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default Sidebar;
