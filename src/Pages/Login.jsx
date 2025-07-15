import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "../Services/auth";
import { useAuth } from "../Context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, token } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const handleLogin = async () => {
  //   const response = await loginUser(email, password);
  //   localStorage.setItem("sessionUser", response.token);
  //   navigate("/Order");
  // };

  useEffect(() => {
    if (token) {
      navigate("/"); // or navigate("/order") if that makes more sense
    }
  }, [token, navigate]);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      // Redirect to dashboard or homepage here
    } catch (errMsg) {
      setError(errMsg);
    }
  };

  return (
    <>
      <motion.div
        className="login-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />

        <div className="login-wrapper">
          <div className="booking-container">
            <h2 className="login-title">Welcome Back</h2>

            <form className="login-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div
                className="password-input-wrapper"
                style={{ position: "relative" }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  style={{ paddingRight: "2rem" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#52AE77FF",
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>

              <Button type="submit">Login</Button>
            </form>

            <p className="signup-redirect">
              Don't have an account?{" "}
              <Link to="/Signup" style={{ color: "#52AE77FF" }}>
                Signup!
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

export default Login;
