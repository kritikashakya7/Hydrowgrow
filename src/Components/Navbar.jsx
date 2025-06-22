import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check session on component mount
  useEffect(() => {
    const user = localStorage.getItem("sessionUser");
    setIsLoggedIn(!!user);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("sessionUser");
    setIsLoggedIn(false); // update state
    navigate("/Login");
  };

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
          <Link to="/Signup" className="order-now-btn">Order Now</Link>
          {isLoggedIn ? (
            <Link to ="/Login" onClick={handleLogout} className="order-now-btn" style={{ backgroundColor: "#ffffff", border: "2px solid #52AE77" }}>
              Logout
            </Link>
          ) : (
            <Link to="/Login" className="order-now-btn">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
