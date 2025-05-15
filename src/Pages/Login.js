import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
import Navbar from "../Components/Navbar";

const Login = () => {
  return (
    <div className="login-page">
      <Navbar />
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-redirect">
        Forgot password? <Link to="/" style={{ color: '#27548A' }}>Click here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
