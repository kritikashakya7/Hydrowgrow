import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "../css/Home.css";
import {
  CircleAlert,
  Cpu,
  Grid2x2Check,
  SquareActivity,
  CircleCheck,
  Sprout
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import bgimg from '../Assets/bgimg.jpg';
import aku from '../Assets/aku.mp4';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(Array(6).fill(false));

  const cropData = [
    { title: "Lettuce", details: "Grow lettuce using a hydroponic tower by maintaining 6.0-6.5 pH, cool temperature, and 10-14 hours of light." },
    { title: "Mint", details: "Mint grows well in hydro towers with 5.5-6.0 pH, frequent harvesting, and medium light." },
    { title: "Spinach", details: "Keep spinach in cooler environments, 6.0-7.5 pH, and harvest within 4-6 weeks." },
    { title: "Cilantro", details: "Use 6.5 pH, low humidity, and LED lighting for better yield in towers." },
    { title: "Oregano", details: "Grows best in 6.0-7.0 pH with 6-8 hours of direct light in towers." },
    { title: "Chives", details: "Requires nutrient-rich water, 6.0-6.5 pH, and good airflow to grow well." },
  ];

  const toggleMore = (i) => {
    const updated = [...showMore];
    updated[i] = !updated[i];
    setShowMore(updated);
  };

  const nextSlide = () => {
    if (index < cropData.length - 3) setIndex(index + 3);
  };

  const prevSlide = () => {
    if (index >= 3) setIndex(index - 3);
  };

  return (
    <>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />

        <motion.div
          className="content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="intro-wrapper"
            style={{
              backgroundImage: `url(${bgimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
           

            <div className="intro">
              <h1>Hydrowgrow: IoT for Hydroponic Farming</h1>
              <p>
                Hydrowgrow is a cutting-edge platform that leverages the power
                of the Internet of Things (IoT) to enhance hydroponic farming.
                By using advanced sensors, Hydrowgrow monitors and manages
                crucial factors such as water temperature, pH levels, nutrient
                concentrations, and humidity to create the optimal environment
                for plant growth—all without soil.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="about-us-section">
          <div className="about-text">
            <h2><Sprout color="#4bd530" size={30}/>Get to Know Us</h2>
            <p>
              At Hydrowgrow, we believe in blending innovation with nature.
              <br /><br />
              Our goal is to make farming not just smart, but also sustainable and joyful. 💧🌿
              <br /><br />
              Whether you're an urban gardener or a full-scale grower, we’re here to help your plants thrive with love and tech!
            </p>
          </div>
          <div className="about-video">
            <video width="100%" autoPlay loop muted>
              <source src={aku} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="features">
          <h1>Key Features</h1>
          <div className="feature-container">
            {[{
                title: "Alert System",
                icon: <CircleAlert color="red" size={25} />,
                desc: "Receive real-time notifications about critical changes in your system, ensuring immediate action when necessary.",
              },
              {
                title: "Compact Design",
                icon: <Grid2x2Check color="#3cd770" size={25} />,
                desc: "Hydrowgrow's setup is space-efficient, perfect for both home and commercial use with minimal space requirements.",
              },
              {
                title: "IoT Powered",
                icon: <Cpu color="#3c41d7" size={25} />,
                desc: "Connected devices and sensors allow for remote monitoring and automated control of your hydroponic farm, making farming smarter.",
              },
              {
                title: "Monitor",
                icon: <SquareActivity color="#0d0d0d" size={25} />,
                desc: "Track vital parameters like water pH, temperature, and nutrient levels to ensure your crops receive optimal conditions for growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="feature"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h2>{item.title} {item.icon}</h2>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <h1>Results</h1>
          <div className="feature-container">
            {[
              "Improved Crop Health",
              "Space Efficiency",
              "Remote Management",
              "Higher Yield & Consistency",
            ].map((result, index) => (
              <motion.div
                key={index}
                className="feature"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h2>
                  <CircleCheck
                    color="#0bf933"
                    strokeWidth={2.5}
                    style={{ marginRight: "8px" }}
                  />
                  {result}
                </h2>
                <p>
                  {[
                    "Real-time alerts and monitoring help prevent issues like nutrient imbalance or water pH fluctuations, ensuring plants grow in optimal conditions.",
                    "The compact design allows maximum yield in minimal space, making it ideal for urban or indoor farming setups.",
                    "IoT-powered control lets farmers manage and adjust settings remotely, reducing manual labor and improving convenience.",
                    "Continuous monitoring leads to stable growing conditions, resulting in faster growth and more consistent crop production.",
                  ][index]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="what-grow-section">
        <h2 className="what-grow-title">What Can We Grow</h2>

        <div className="slider-controls">
          <button onClick={prevSlide}><ChevronLeft /></button>
          <button onClick={nextSlide}><ChevronRight /></button>
        </div>

        <div className="grow-slider">
          {cropData.slice(index, index + 3).map((item, i) => (
            <div className="grow-card" key={i}>
              <h3>{item.title}</h3>
              <button className="more-btn" onClick={() => toggleMore(i + index)}>
                {showMore[i + index] ? "Hide" : "More"}
              </button>
              {showMore[i + index] && <p className="grow-details">{item.details}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
