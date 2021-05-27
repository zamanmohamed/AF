import React from "react";
import { Link } from "react-router-dom";
//import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3 fixed-top">
      <div class="container">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Approve">
              Approve
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Login">
              Contact
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Login">
              Contact
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
