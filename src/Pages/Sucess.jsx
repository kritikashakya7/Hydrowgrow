import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Sucess.css';
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Success = () => {
  const navigate = useNavigate();

  return (
     <><Navbar /><div className="success-container">
          <h1>Booking Successful 🎉</h1>
          <button onClick={() => navigate("/")}>Back to homepage</button>
      </div>
       <div className="footer">
        <Footer />
      </div></>
  );
  
};

export default Success;
