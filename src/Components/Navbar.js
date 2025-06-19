import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Guide">Guide</Link></li>
        <li><Link to="/Booking">Demo</Link></li>
        <li>
          <Link to="/Signup" className="order-now-btn">
            Order Now
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
