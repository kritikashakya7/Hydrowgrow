import React, { useState } from 'react';
import '../css/Booking.css';
import Navbar from "../Components/Navbar"; 
import Footer from "../Components/Footer"; 
import { useNavigate } from 'react-router-dom';
import flowerGif from '../Assets/flower.gif'; // ✅ Import flower gif

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time.');
      return;
    }

    alert(`Demo booked for ${selectedDate} at ${selectedTime}`);
    navigate('/Booked');
  };

  return (
    <>
      <Navbar />
      <div className="booking-wrapper">
        <img src={flowerGif} alt="Flower" className="booking-gif" />
        
        <div className="booking-container">
          <h2 className="signup-title">Book a Demo 🌱</h2>

          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              Choose a date:
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
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

            <button type="submit" className="login-btn">Book Now</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Booking;
