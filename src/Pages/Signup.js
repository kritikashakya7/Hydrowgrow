  import React from "react";
  import "../css/Signup.css";
  import Navbar from "../Components/Navbar"; 
  import { Link } from "react-router-dom";
  import Footer from "../Components/Footer"; 
  import { motion } from "framer-motion";



  const Signup = () => {
    return (
      <>
        <Navbar />
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
 

  <div className="signup-page">

  <div className="signup-card">
    <h2 className="signup-title">Create an Account</h2>
    <form className="signup-form">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />
      <button type="submit" className="button">Sign Up</button>
    </form>
    <p className="login-redirect">
      Already have an account? <Link to="/Login" style={{ color: '#27548A' }}>Login</Link>
    </p>
  </div>
</div>

</motion.div>

        <div className="footer">
          <Footer />
        </div>
      </>
    );
  };

  export default Signup;
