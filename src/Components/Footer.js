import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Instagram , Youtube, Twitter  } from "lucide-react";
import "../css/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" className="footer-logo">
        <img src="logo.png" alt="Logo" height="32" />
        HydroGrow
      </a>

      <nav className="footer-nav">
        <a href="#">Documentation</a>
        <a href="#">Use Cases</a>
        <a href="#">Blog</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </nav>

      <div className="footer-social">
        <a href="#"><i><Facebook color="#5710da" size={40}  /></i></a>
        <a href="#"><i ><Instagram color="#d66b6b" size={40}  /></i></a>
        <a href="#"><i><Youtube color="#ef0b0b" size={40} /></i></a>
        <a href="#"><i><Twitter color="#0bc1ef" size={40} /></i></a>
      
      </div>

      <div className="footer-bottom">
        © 2025 HydroGrow 
      </div>
    </footer>
  );
};

export default Footer;

