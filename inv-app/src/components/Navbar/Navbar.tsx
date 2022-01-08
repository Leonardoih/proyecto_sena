import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      
      <ul>
        <li>
          <Link to="#">Navbar</Link>
        </li>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">Link </Link>
        </li>
        <li>
          <Link to="#">Dropdown</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
