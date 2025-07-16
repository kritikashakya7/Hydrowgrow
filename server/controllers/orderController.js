import { request } from "express";
import User from "../model/User.js";
import Order from "../model/order.js";
import { decodeToken } from "../lib/utils.js";
import axios from "axios";

export const createOrder = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided." });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(403).json({ message: "Invalid token." });
    }

    const decodedToken = decodeToken(token);

    if (!decodedToken) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    const userId = decodedToken.id;

    if (!userId) {
      return res.status(400).json({ message: "Invalid request." });
    }

    const customer = await User.findById(userId);

    console.log("🚀 ~ createOrder ~ customer:", customer);

    if (!customer) {
      return res.status(401).json({ message: "Invalid token." });
    }

    const newOrder = new Order({
      userId,
    });

    await newOrder.save();

    const orderId = newOrder._id.toString();

    const options = {
      method: "POST",
      url: `${process.env.KHALTI_URL}/epayment/initiate/`,
      headers: {
        Authorization: process.env.KHALTI_SECRECT,
        "Content-Type": "application/json",
      },
      data: {
        return_url: `${process.env.SERVER_BASE_URL}/order/payment/callback`,
        website_url: `${process.env.CLIENT_BASE_URL}`,
        amount: newOrder.totalAmount * 1,
        purchase_order_id: orderId,
        purchase_order_name: orderId,
        customer_info: {
          name: customer.fullName,
          email: customer.email,
        },
      },
    };

    const response = await axios(options);
    const data = response.data;

    if (data.error_key) {
      return res.status(400).json({
        message:
          "Your request couldn't be completed at the moment. Please try again later.",
      });
    }

    return res.status(200).json({
      message: "Order created successfully.",
      order: newOrder,
      paymentUrl: data.payment_url,
    });
  } catch (error) {
    console.log("🚀 ~ createOrder error:", error?.response?.data || error);
    return res
      .status(500)
      .json({ message: "Internal server error. Try again later." });
  }
};

export const paymentCallback = async (req, res) => {
  try {
    const { pidx, status, purchase_order_id } = req.query;

    if (status === "User canceled") {
      await Order.findOneAndUpdate(
        { _id: purchase_order_id },
        { status: "Cancelled" }
      );
      return res.redirect(`${process.env.CLIENT_BASE_URL}/payment-fail`);
    }

    var options = {
      method: "POST",
      url: `${process.env.KHALTI_URL}/epayment/lookup/`,
      headers: {
        Authorization: process.env.KHALTI_SECRECT,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pidx: pidx,
      }),
    };

    request(options, async function (error, response) {
      const data = JSON.parse(response?.body);

      if (data.error_key)
        return res.redirect(`${process.env.CLIENT_BASE_URL}/payment-fail`);

      if (error) throw new Error(error);

      if (data.status === "Completed") {
        return res.redirect(`${process.env.CLIENT_BASE_URL}/payment-success`);
      }
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return res.redirect(`${process.env.CLIENT_BASE_URL}/payment-fail`);
  }
};
