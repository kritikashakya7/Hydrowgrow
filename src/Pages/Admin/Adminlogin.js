import React from "react";
import "../../css/Admincss/Adminlogin.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Admin');
  };

  return (
    <>
<motion.div
  className="login-page"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>

  <div className="login-wrapper">
    <div className="login-card">
      <h2 className="login-title">Welcome Admin!</h2>
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
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
   
  </div>
</motion.div>
    </>
  );
};

export default AdminLogin;
