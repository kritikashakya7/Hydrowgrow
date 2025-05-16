import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">HydroGrow</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/components">Components</Link></li>
        <li><Link to="/Booking">Contact</Link></li>
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
