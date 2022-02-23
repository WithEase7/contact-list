import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ width: "90%", margin: "0 auto" }}>
      <ul
        id="nav"
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li style={{ cursor: "pointer" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li style={{ cursor: "pointer" }}>
          <Link to="/add" style={{ textDecoration: "none" }}>
            Add Contact
          </Link>
        </li>
        <li style={{ cursor: "pointer" }}>
          <Link
            to="/edit"
            className="active"
            style={{ textDecoration: "none" }}
          >
            Edit Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
