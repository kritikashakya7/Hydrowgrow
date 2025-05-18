import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        className="login-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>
          <form className="login-form">
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p className="signup-redirect">
            Forgot password?{" "}
            <Link to="/" style={{ color: '#27548A' }}>
              Click here
            </Link>
          </p>
        </div>
      </motion.div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Login;
