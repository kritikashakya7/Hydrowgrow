import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import Booking from "./Pages/Booking";
import Order from "./Pages/Order";
import Guide from "./Pages/Guide";
import Admin from "./Pages/Admin/Admin";
import AdminLogin from "./Pages/Admin/Adminlogin";
import Adminsignup from "./Pages/Admin/Adminsignup";
import AdminOrder from "./Pages/Admin/AdminOrder";
import Sidebar from "./Components/Sidebar";
import ItemsPage from "./Pages/Items";
import Customers from "./Pages/Admin/Customers";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/footer" element={<Footer />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/order" element={<Order/>} />
        <Route path="/guide" element={<Guide/>} />      
         <Route path="/admin" element={<Admin/>} />    
         <Route path="/adminlogin" element={<AdminLogin/>} /> 
          <Route path="/adminsignup" element={<Adminsignup/>} /> 
             <Route path="/adminorder" element={<AdminOrder/>} /> 
              <Route path="/sidebar" element={<Sidebar/>} /> 
              <Route path="/items" element={<ItemsPage/>} /> 
              <Route path="/customers" element = {<Customers/>} />
        
         
      </Routes>
    </Router>
  );
};

export default App;
