import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Components from "./Pages/Components";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import Booking from "./Pages/Booking";
import Order from "./Pages/Order";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/footer" element={<Footer />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/order" element={<Order/>} />
         
      </Routes>
    </Router>
  );
};

export default App;
