import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Contact</Link>
        </li>
        <li>
          <Link to="/edit">Edit Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
