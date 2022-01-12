import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar2">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Inventario">Inventario</Link>
          </li>
          <li>
            <Link to="Report">Reportes</Link>
          </li>
          <li className="linkr">
            <Link to="Perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
