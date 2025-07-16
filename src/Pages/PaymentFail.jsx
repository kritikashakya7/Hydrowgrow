import React from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import { CircleX } from "lucide-react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const PaymentFail = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "red" }}>Your payment Failed</h1>

        <CircleX style={{ color: "red", height: 32, width: 32 }} />

        <div style={{ maxWidth: 500, display: "flex", marginTop: 24 }}>
          <Button onClick={() => navigate("/Order")}>Go Back</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
