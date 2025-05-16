import React from "react";
import "../css/Home.css";
import { CircleAlert, Cpu, Grid2x2Check, SquareActivity, CircleCheck } from "lucide-react";
import Navbar from "../Components/Navbar"; 
import Footer from "../Components/Footer"; 

function Home() {
  return (
    <><div className="home">
      <Navbar />

      <div className="content">
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
      </div>

      <div className="features">
        <h1>Key Features</h1>
        <div className="feature-container">
          <div className="feature">
            <h2>Alert System <CircleAlert color="red" size={25} /></h2>
            <p>Receive real-time notifications about critical changes in your system, ensuring immediate action when necessary.</p>
          </div>
          <div className="feature">
            <h2>Compact Design <Grid2x2Check color="#3cd770" size={25} /></h2>
            <p>Hydrowgrow's setup is space-efficient, perfect for both home and commercial use with minimal space requirements.</p>
          </div>
          <div className="feature">
            <h2>IoT Powered <Cpu color="#3c41d7" size={25} /></h2>
            <p>Connected devices and sensors allow for remote monitoring and automated control of your hydroponic farm, making farming smarter.</p>
          </div>
          <div className="feature">
            <h2>Monitor <SquareActivity color="#0d0d0d" size={25} /></h2>
            <p>Track vital parameters like water pH, temperature, and nutrient levels to ensure your crops receive optimal conditions for growth.</p>
          </div>
        </div>

        <h1>Results</h1>
        <div className="feature-container">
          <div className="feature">
            <h2><CircleCheck color="#0bf933" strokeWidth={2.5} style={{ marginRight: "8px" }} />Improved Crop Health</h2>
            <p>Real-time alerts and monitoring help prevent issues like nutrient imbalance or water pH fluctuations, ensuring plants grow in optimal conditions.</p>
          </div>
          <div className="feature">
            <h2><CircleCheck color="#0bf933" strokeWidth={2.5} style={{ marginRight: "8px" }} />Space Efficiency</h2>
            <p>The compact design allows maximum yield in minimal space, making it ideal for urban or indoor farming setups.</p>
          </div>
          <div className="feature">
            <h2><CircleCheck color="#0bf933" strokeWidth={2.5} style={{ marginRight: "8px" }} />Remote Management</h2>
            <p>IoT-powered control lets farmers manage and adjust settings remotely, reducing manual labor and improving convenience.</p>
          </div>
          <div className="feature">
            <h2><CircleCheck color="#0bf933" strokeWidth={2.5} style={{ marginRight: "8px" }} />Higher Yield & Consistency</h2>
            <p>Continuous monitoring leads to stable growing conditions, resulting in faster growth and more consistent crop production.</p>
          </div>
        </div>
      </div>


    </div><div className="footer">   <Footer /></div></>
    
  );
}

export default Home;
