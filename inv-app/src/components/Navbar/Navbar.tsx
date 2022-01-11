import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar2">
      <nav>
        <ul>
          <li>
            <Link id="op0" to="/dashboar/report">Navbar</Link>
          </li>
          <li>
            <Link id="op1" to="/dashboar">Home</Link>
          </li>
          <li>
            <Link id="op2" to="#">Link </Link>
          </li>
          <li className="linkr" >
            <Link id="op3" to="#">Dropdown</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Navbar;
