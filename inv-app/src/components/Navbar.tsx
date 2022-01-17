import { NavLink } from "react-router-dom";
import  Logo  from '../Img/logo.png';




const Navbar = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="" />
      </div>
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
          <NavLink to="/Sesion">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
