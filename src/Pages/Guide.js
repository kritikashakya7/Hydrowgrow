import React, { useState } from "react";
import "../css/Guide.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

// Images
import lettuce from "../Assets/lettuce.jpg";
import mint from "../Assets/mint.webp";
import cilantro from "../Assets/cilantro.jpeg";
import spinach from "../Assets/spinach.jpg";
import oregano from "../Assets/oregano.jpg";
import chives from "../Assets/chives.jpeg";
import strawberry from "../Assets/strawberry.jpeg";
import tomato from "../Assets/tomato.jpeg";
import eggplant from "../Assets/eggplant.avif";
import Radish from "../Assets/radish.webp";
import beetroot from "../Assets/beetroot.jpeg";
import mustardgreen from "../Assets/mustardgreen.jpeg";
import parsley from "../Assets/parsley.webp";
import zucini from "../Assets/zucini.jpeg";
import kale from "../Assets/kale.jpeg";
import greenonions from "../Assets/green onion.jpeg";
import cucumber from "../Assets/cucumber.jpg";
import bokchoy from "../Assets/bok choy.webp";
import lemongrass from "../Assets/lemongrass.jpeg";
import chilly from "../Assets/chilly.webp";

const Guide = () => {
  const [showMore, setShowMore] = useState(Array(12).fill(false));

  const cropData = 
 [
  { title: "Beetroot (चुकन्दर)", image: beetroot, details: "Beetroot prefers a pH of 6.0–6.5, grows best in deep water culture or media beds, and needs medium light." },
  { title: "Bok Choy (बक चोई)", image: bokchoy, details: "Grows in 6.0–7.0 pH, cool climate, and needs 10–12 hours of light with good spacing." },
  { title: "Chilly (खुर्सानी)", image: chilly, details: "Grows well with 5.5–6.5 pH, high light, and warm climate; requires support as it grows." },
  { title: "Chives (चाइभ्स)", image: chives, details: "Requires nutrient-rich water, 6.0-6.5 pH, and good airflow to grow well." },
  { title: "Cilantro (धनिया)", image: cilantro, details: "Use 6.5 pH, low humidity, and LED lighting for better yield in towers." },
  { title: "Cucumber (काँक्रो)", image: cucumber, details: "Cucumber grows best in 5.5–6.0 pH with vertical support, high humidity, and warm conditions." },
  { title: "Eggplant (भण्टा)", image: eggplant, details: "Eggplants grow best in systems like drip or ebb & flow with a pH of 5.5–6.5, need high-intensity light, and should be regularly pruned to direct energy to fruit growth." },
  { title: "Green Onions (हरियो प्याज)", image: greenonions, details: "Thrives in 6.0–6.5 pH, needs medium light, and can regrow easily in hydro systems." },
  { title: "Kale (केल)", image: kale, details: "Kale thrives in 5.5–6.5 pH, needs cool temperatures, high light, and is nutrient-dense." },
  { title: "Lemongrass (लेमनग्रास)", image: lemongrass, details: "Needs 5.5–6.5 pH, strong light, and grows well in deep water or media-based systems." },
  { title: "Lettuce (लेटस)", image: lettuce, details: "Grow lettuce using a hydroponic tower by maintaining 6.0-6.5 pH, cool temperature, and 10-14 hours of light." },
  { title: "Mint (पुदीना)", image: mint, details: "Mint grows well in hydro towers with 5.5-6.0 pH, frequent harvesting, and medium light." },
  { title: "Mustard Greens (तोरीको साग)", image: mustardgreen, details: "Grow well at 6.0–7.5 pH, fast-growing with medium light and regular harvesting." },
  { title: "Oregano (अजवायन)", image: oregano, details: "Grows best in 6.0-7.0 pH with 6-8 hours of direct light in towers." },
  { title: "Parsley (अजवाइन पात)", image: parsley, details: "Thrives at 5.5–6.0 pH, moderate light, and prefers cooler hydroponic environments." },
  { title: "Radish (मूला)", image: Radish, details: "Prefer a pH of 6.0–7.0, need medium light, and can be harvested in about 3–4 weeks. Avoid overcrowding for proper root formation." },
  { title: "Spinach (पालुङ्गो)", image: spinach, details: "Keep spinach in cooler environments, 6.0-7.5 pH, and harvest within 4-6 weeks." },
  { title: "Strawberry (स्ट्रबेरी)", image: strawberry, details: "Strawberries grow well in hydro towers or NFT systems with a pH of 5.5–6.2, require high light (12–14 hours/day)." },
  { title: "Tomato (टमाटर)", image: tomato, details: "Tomatoes thrive in deep water culture or drip systems with a pH of 5.8–6.3, need strong support, high-intensity light." },
  { title: "Zucchini (जुकिनी)", image: zucini, details: "Prefers 5.8–6.5 pH, warm temperatures, and good airflow; needs space and support." }
];


   

  const toggleMore = (i) => {
    const updated = [...showMore];
    updated[i] = !updated[i];
    setShowMore(updated);
  };

  return (
    <>
      <Navbar />
      <div className="guide-container">
        <h2 className="guide-title">What Can We Grow</h2>

        <div className="grid-container">
          {cropData.map((item, i) => (
            <motion.div
              className="grow-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={item.image} alt={item.title} className="grow-image" />
              <h3>{item.title}</h3>
              <button className="more-btn" onClick={() => toggleMore(i)}>
                {showMore[i] ? "Hide" : "More"}
              </button>
              {showMore[i] && (
                <motion.p
                  className="grow-details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.details}
                </motion.p>
              )}
            </motion.div>
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
