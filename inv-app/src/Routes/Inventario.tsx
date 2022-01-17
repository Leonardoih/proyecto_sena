import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Inventario = () => {
  return (
    <div id="inventario" >
      <div >
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

export default Inventario;
