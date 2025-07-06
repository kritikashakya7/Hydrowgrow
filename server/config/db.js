// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gaurangkansakar:i9zGSXduqZdjb2xY@hydrowgrow.6zivvl4.mongodb.net/?retryWrites=true&w=majority&appName=hydrowGrow"
    );
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;
