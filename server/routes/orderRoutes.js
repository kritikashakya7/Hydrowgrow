import express from "express";
import {
  createOrder,
  paymentCallback,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/create", createOrder);
router.get("/payment/callback", paymentCallback);

export default router;
