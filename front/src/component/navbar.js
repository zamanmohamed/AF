import React from "react";
import { Link } from "react-router-dom";
//import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Approve">
              Approve
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
