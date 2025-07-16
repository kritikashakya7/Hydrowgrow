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
import Customers from "./Pages/Admin/Customers";
import Button from "./Components/Button";
import { useAuth } from "./Context/authContext";
import PrivateRoute from "./Components/privateRoutes";
import PaymentFail from "./Pages/PaymentFail";
import PaymentSuccess from "./Pages/PaymentSuccess";

const App = () => {
  const { token } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/payment-fail" element={<PaymentFail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* Protected routes */}
        <Route
          path="/booking"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route
          path="/adminorder"
          element={
            <PrivateRoute>
              <AdminOrder />
            </PrivateRoute>
          }
        />
        {/* Add more protected routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
