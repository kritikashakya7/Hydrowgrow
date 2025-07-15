import React, { useEffect } from "react";
import "../css/Signup.css";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import { signup } from "../Services/auth";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/authContext";

const Signup = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (token) {
      navigate("/"); // or navigate("/order") if that makes more sense
    }
  }, [token, navigate]);
  const onSubmit = async (data) => {
    const { fullname, email, password } = data;
    try {
      await signup(fullname, email, password);
      navigate("/login"); // ✅ redirect to login after signup
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="signup-page">
          <div className="signup-card">
            <h2 className="signup-title">Create an Account</h2>
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullname", { required: "Full name is required" })}
              />
              {errors.fullname && (
                <p className="error">{errors.fullname.message}</p>
              )}

              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}

              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}

              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword.message}</p>
              )}

              <Button type="submit">Signup</Button>
            </form>
            <p className="login-redirect">
              Already have an account?{" "}
              <Link to="/Login" style={{ color: "#3D873A" }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Signup;
