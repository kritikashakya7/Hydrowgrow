import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../Assets/logo.png";
import { useAuth } from "../Context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { logout, token } = useAuth();

  // Optional: Handle logout logic
  const handleLogout = () => {
    localStorage.removeItem("sessionUser");
    setIsLoggedIn(false);
    logout(); // Make sure this calls your auth context logout
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Guide">Guide</Link>
        </li>
        <li>
          <Link to="/Booking">Demo</Link>
          
        </li>
        <li>
         <Link to="/Order" style={{ color: "#52AE77" }}>
        Order Now
        </Link>

        </li>
        <li>
          {token ? (
        <Link
       to="/login"
  onClick={handleLogout}
  style={{ color: "#52AE77" }}
>
  Logout
</Link>
) : (
<Link
  to="/login"
  style={{ color: "#52AE77" }}
>
  Login
</Link>

          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
