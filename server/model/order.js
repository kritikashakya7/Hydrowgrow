// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    totalAmount: { type: Number, required: true, default: 15000 },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Pending", "Paid", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
