// index.js
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import demoRoute from "./routes/demoRoute.js";
import dotenv from "dotenv";
import cors from "cors";
import orderRoute from "./routes/orderRoutes.js";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(express.json());
// index.js
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/demo", demoRoute);
app.use("/api/order", orderRoute);

connectDB(); // connect to MongoDB

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
