import React, { useState } from "react";
import "../../css/Admincss/Adminsignup.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../Components/Button";



const Adminsignup = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Do signup logic here (e.g., API call)
    console.log("Signup Data:", formData);

    // Redirect after successful signup
    navigate("/Login");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="signup-page">
        <div className="signup-card">
          <h2 className="signup-title">Create an Account</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
             <Button type="submit">Signup</Button>
          </form>
          <p className="login-redirect">
            Already have an account? <Link to="/AdminLogin" style={{ color: '#27548A' }}>Login</Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Adminsignup;
