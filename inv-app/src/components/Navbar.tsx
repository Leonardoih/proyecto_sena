import { NavLink } from "react-router-dom";






const Navbar = () => {
  return (
    <div className="navbar">
      <div >
        <img src={require(`../images/Logo6.png`)} alt="logo" />
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
