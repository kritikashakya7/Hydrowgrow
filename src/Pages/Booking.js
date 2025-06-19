import React, { useState } from 'react';
import '../css/Booking.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom';
import flowerGif from '../Assets/flower.gif';
import { motion } from 'framer-motion';
import Button from "../Components/Button"; 

const MotionButton = motion(Button);

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigate = useNavigate();

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time.');
      return;
    }

    const selected = new Date(`${selectedDate}T${selectedTime}`);
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    if (selected < tomorrow) {
      alert('You can only book a demo from tomorrow onwards.');
      return;
    }

    alert(`Demo booked for ${selectedDate} at ${selectedTime}`);
    navigate('/Booked');
  };

  return (
    <>
      <Navbar />

      <motion.div 
        className="booking-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <motion.div 
          className="booking-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="signup-title"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Book a Demo 🌱
          </motion.h2>

          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              Choose a date:
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={getTomorrowDate()}
                required
              />
            </label>

            <label>
              Choose a time:
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                min="10:00"
                max="17:00"
                required
              />
              <span className="time-note">(Available from 10:00 AM to 5:00 PM)</span>
            </label>

           
            <MotionButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </MotionButton>
          </form>
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Booking;
