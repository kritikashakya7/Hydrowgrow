// middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "../model/User.js";

const SECRET_KEY = "your-secret-key"; // In production, use process.env.JWT_SECRET

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(decoded.id).select("_id email");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = {
      _id: user._id,
      email: user.email,
    };

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authenticate;
