import React from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div >
      <ul>
        <li>
          <Link to="/Laptop">Laptop</Link>
        </li>
        <li>
          <Link to="/Desktop">Desktop</Link>
        </li>
        <li>
          <Link to="/Otros">Otros</Link>
        </li>
        <li>
          <Link to="/ControlPanel">Control Panel</Link>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default Sidebar;
