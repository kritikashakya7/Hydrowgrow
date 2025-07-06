// routes/mailRoutes.js
import express from "express";
import { sendMail } from "../controllers/demoController.js";
import authenticate from "../middlewares/authenticate.js";

const router = express.Router();

router.post("/send", authenticate, sendMail);

export default router;
