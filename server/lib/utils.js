import jwt from "jsonwebtoken";

export const decodeToken = (token) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in env");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    return null;
  }
};
