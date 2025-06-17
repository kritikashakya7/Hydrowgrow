  import React from "react";
  import "../css/Signup.css";
  import Navbar from "../Components/Navbar"; 
  import { Link } from "react-router-dom";
  import Footer from "../Components/Footer"; 
  import { motion } from "framer-motion";
  import Button from "../Components/Button"; 



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
       <Button type="submit">Signup</Button>
    </form>
    <p className="login-redirect">
      Already have an account? <Link to="/Login" style={{ color: '#3D873A' }}>Login</Link>
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
