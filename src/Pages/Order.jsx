import React from "react";
import "../css/Order.css";
import buzz from "../Assets/buzz.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import { order } from "../Services/order";

const Buy = () => {
  const price = 15000;
  const handleBuy = async () => {
    const response = await order();

    if (response.success) {
      const url = response.data.paymentUrl;

      window.location.href = url;
    }
  };

  return (
    <>
      <Navbar />

      <motion.div
        className="order-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="buy-card">
          <img src={buzz} alt="Eco Bloom" className="product-image" />

          <div className="product-info">
            <h2 className="product-name">Eco Bloom</h2>
            <p className="product-price">Rs. {price}</p>
            <Button type="button" onClick={handleBuy}>
              Buy
            </Button>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Buy;
