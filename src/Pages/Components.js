import React from 'react';
import Navbar from "../Components/Navbar"; 
import "../css/Components.css";
import ldr from '../Assets/ldr.jpeg';
import dht11 from '../Assets/dht11.jpeg';
import soil from '../Assets/soil.jpg';
import esp from '../Assets/esp.jpeg';
import buzz from '../Assets/buzz.png';
const ComponentsPage = () => {
  return (
    <div className="components-page">
      <Navbar />

      <div className="components-wrapper">
        <div className="component-card small-card">
          <div className="component-image">
          <img
              src={ldr}
              alt="LDR Sensor"
              className="sensor-image"
            />
          </div>
          <div className="component-description">
            <h2 className="component-title">LDR (Light Dependent Resistor)</h2>
            <p className="description-text">
              An LDR is a sensor that detects light levels. Its resistance decreases as the light intensity increases. It’s commonly used in light-sensitive devices like automatic street lights.
            </p>
          </div>
        </div>

        <div className="component-card small-card">
          <div className="component-image">
          <img
              src={dht11}
              alt="LDR Sensor"
              className="sensor-image"
            />
          </div>
          <div className="component-description">
            <h2 className="component-title">DHT11 (Temp & Humidity Sensor)</h2>
            <p className="description-text">
              The DHT11 is a low-cost digital sensor that measures both temperature and humidity. It is ideal for weather stations and hydroponic systems.
            </p>
          </div>
        </div>

        <div className="component-card small-card">
          <div className="component-image">
            <img
              src={soil}
              alt="Soil Moisture Sensor"
              className="sensor-image"
            />
          </div>
          <div className="component-description">
            <h2 className="component-title">Soil Moisture Sensor</h2>
            <p className="description-text">
              This sensor measures water content in the soil. It helps determine if the soil is dry or wet and is used in smart irrigation systems.
            </p>
          </div>
        </div>

        <div className="component-card small-card">
          <div className="component-image">
            <img
              src={esp}
              alt="ESP32"
              className="sensor-image"
            />
          </div>
          <div className="component-description">
            <h2 className="component-title">ESP32 Microcontroller</h2>
            <p className="description-text">
              The ESP32 is a powerful microcontroller with built-in Wi-Fi and Bluetooth. It’s perfect for IoT projects and supports multiple tasks.
            </p>
          </div>
        </div>

        <div className="component-card small-card">
          <div className="component-image">
            <img
              src={buzz}
              alt="Buzzer"
              className="sensor-image"
            />
          </div>
          <div className="component-description">
            <h2 className="component-title">Buzzer</h2>
            <p className="description-text">
              A buzzer is a simple sound-producing component used in alarms and notifications to alert users about specific events.
            </p>
          </div>
        </div>

        <div className="component-card small-card">
          <div className="component-image">
            <img
              src={buzz}
              alt="Buzzer"
              className="sensor-image"
            />
          </div>
          <div className="component-description">
            <h2 className="component-title">Registers and Transistors</h2>
            <p className="description-text">
            Registers are used inside microcontrollers (like ESP32) to temporarily hold sensor data 
            (e.g., temperature, moisture) for quick processing and decision-making in automated hydroponic systems. <br/>
            Transistors are used to switch devices like pumps, lights, or alarms on and off automatically based on sensor readings, 
            making the hydroponic system more efficient and responsive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
