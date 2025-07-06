import React, { useState } from "react";
import "../css/Booking.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import flowerGif from "../Assets/flower.gif";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import { bookDemo } from "../Services/demo";
import { useForm } from "react-hook-form";

const MotionButton = motion(Button);

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { date, time } = data;
    await bookDemo(date, time);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };
  const tomorrow = getTomorrowDate();

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

          <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <label>
              Choose a date:
              <input
                type="date"
                {...register("date", {
                  required: "Date is required",
                  min: tomorrow,
                })}
                min={tomorrow}
              />
            </label>
            {errors.date && <p className="error">{errors.date.message}</p>}

            <label>
              Choose a time:
              <input
                type="time"
                {...register("time", {
                  required: "Time is required",
                  validate: (value) =>
                    (value >= "10:00" && value <= "17:00") ||
                    "Select a time between 10:00 and 17:00",
                })}
                min="10:00"
                max="17:00"
              />
              <span className="time-note">
                (Available from 10:00 AM to 5:00 PM)
              </span>
            </label>
            {errors.time && <p className="error">{errors.time.message}</p>}

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
