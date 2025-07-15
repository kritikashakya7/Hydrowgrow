// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../Services/auth"; // Service functions

const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user = { id, email }
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);

  // Optional: auto-fetch profile if token exists
  // useEffect(() => {
  //   const init = async () => {
  //     if (token && !user) {
  //       try {
  //         setLoading(true);
  //         const res = await fetchUserProfile(); // GET /protected/profile
  //         setUser(res.data.user || res.data); // adjust based on your route response
  //       } catch (err) {
  //         console.error("Profile fetch failed:", err);
  //         logout(); // token may be expired
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   };
  //   init();
  // }, [token]);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await loginUser(email, password);
      const token = res.token;
      localStorage.setItem("token", token);
      setToken(token);
      setUser(res.data.user || { email }); // backend doesn't return user, so fallback
    } catch (err) {
      throw err.response?.data?.message || "Login failed";
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
