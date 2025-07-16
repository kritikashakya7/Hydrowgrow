import { BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";

const PaymentSuccess = () => {
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
        <h1 style={{ color: "green" }}>Thankyou for your order</h1>

        <BadgeCheck style={{ color: "green", height: 32, width: 32 }} />

        <div style={{ maxWidth: 500, display: "flex", marginTop: 24 }}>
          <Button onClick={() => navigate("/Order")}>Order More</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
