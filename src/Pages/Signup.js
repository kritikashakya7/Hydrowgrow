import React from "react";
import "../css/Signup.css";
import Navbar from "../Components/Navbar"; 
import { Link } from "react-router-dom";
import Footer from "../Components/Footer"; 


const Signup = () => {
  return (
    <><div className="signup-page">
      <Navbar />
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-redirect">
          Already have an account? <Link to="/Login" style={{ color: '#27548A' }}>Login</Link>

        </p>
      </div>
    </div><div className="footer">   <Footer /></div></>
  );
};

export default Signup;
