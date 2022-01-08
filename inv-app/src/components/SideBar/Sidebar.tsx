import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <span className="">Sidebar</span>
      </Link>
      <br />
      <ul>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">Dashboard55</Link>
        </li>
      </ul>
      <br />
      <div>
        <Link
          to="#"
          className="d-flex align-items-center text-black text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
