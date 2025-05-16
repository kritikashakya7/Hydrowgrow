import React from "react";
import "../css/Home.css";
import { CircleAlert, Cpu, Grid2x2Check, SquareActivity, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      {/* Sunrays Animation Background */}
      <motion.div
        className="sunrays"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.4, rotate: 360 }}
        transition={{ duration: Infinity, repeat: Infinity, ease: "linear" }}
      />

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
          <div className="intro">
            <h1>Hydrowgrow: IoT for Hydroponic Farming</h1>
            <p>
              Hydrowgrow is a cutting-edge platform that leverages the power of the Internet of Things (IoT) to enhance hydroponic farming.
              By using advanced sensors, Hydrowgrow monitors and manages crucial factors such as water temperature, pH levels, nutrient concentrations,
              and humidity to create the optimal environment for plant growth—all without soil.
            </p>
          </div>

          <div className="vid">
            <video width="100%" controls>
              <source src="your-video-source.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        <div className="features">
          <h1>Key Features</h1>
          <div className="feature-container">
            {[
              {
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
              "Higher Yield & Consistency"
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
                  <CircleCheck color="#0bf933" strokeWidth={2.5} style={{ marginRight: "8px" }} />
                  {result}
                </h2>
                <p>
                  {[
                    "Real-time alerts and monitoring help prevent issues like nutrient imbalance or water pH fluctuations, ensuring plants grow in optimal conditions.",
                    "The compact design allows maximum yield in minimal space, making it ideal for urban or indoor farming setups.",
                    "IoT-powered control lets farmers manage and adjust settings remotely, reducing manual labor and improving convenience.",
                    "Continuous monitoring leads to stable growing conditions, resulting in faster growth and more consistent crop production."
                  ][index]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
