import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="containerNav">
      <nav className="navbar">
        <label className="invApp">Inv - App</label>
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
        <span className="btn-menu">
          <i>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </i>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
