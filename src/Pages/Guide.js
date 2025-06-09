import React, { useState } from "react";
import "../css/Guide.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import lettuce from "../Assets/lettuce.jpg";
import mint from "../Assets/mint.webp";
import cilantro from "../Assets/cilantro.jpeg";
import spinach from "../Assets/spinach.jpg";
import oregano from "../Assets/oregano.jpg";
import chives from "../Assets/chives.jpeg";


const Guide = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(Array(6).fill(false));

  const cropData = [
    { title: "Lettuce", image:lettuce, details: "Grow lettuce using a hydroponic tower by maintaining 6.0-6.5 pH, cool temperature, and 10-14 hours of light." },
    { title: "Mint", image: mint, details: "Mint grows well in hydro towers with 5.5-6.0 pH, frequent harvesting, and medium light." },
    { title: "Spinach", image: spinach, details: "Keep spinach in cooler environments, 6.0-7.5 pH, and harvest within 4-6 weeks." },
    { title: "Cilantro", image: cilantro, details: "Use 6.5 pH, low humidity, and LED lighting for better yield in towers." },
    { title: "Oregano", image: oregano, details: "Grows best in 6.0-7.0 pH with 6-8 hours of direct light in towers." },
    { title: "Chives", image: chives, details: "Requires nutrient-rich water, 6.0-6.5 pH, and good airflow to grow well." },
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
      <Navbar />
      <div className="guide-container">
        <h2 className="guide-title">What Can We Grow</h2>

        <div className="slider-controls">
          <button onClick={prevSlide}><ChevronLeft /></button>
          <button onClick={nextSlide}><ChevronRight /></button>
        </div>

        <div className="grow-slider">
          {cropData.slice(index, index + 3).map((item, i) => (
            <div className="grow-card" key={i}>
              <img src={item.image} alt={item.title} className="grow-image" />
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

export default Guide;
