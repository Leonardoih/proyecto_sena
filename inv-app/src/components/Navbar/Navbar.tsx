import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">      
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Inventario">Inventario </NavLink>
        </li>
        <li>
          <NavLink to="/Reportes">Reportes</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
