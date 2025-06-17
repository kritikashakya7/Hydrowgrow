import React, { useState } from 'react';
import '../css/Order.css';
import buzz from '../Assets/buzz.png';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import Button from "../Components/Button"; 

const Buy = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 499;
  const totalPrice = quantity * pricePerItem;

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleBuy = () => {
    alert(`You bought ${quantity} Eco Bloom for Rs. ${totalPrice}`);
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

            <div className="quantity-control">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>

            <p className="product-price">Rs. {totalPrice}</p>

           <Button type="submit">Buy</Button>
          </div>
        </div>
      </motion.div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Buy;
