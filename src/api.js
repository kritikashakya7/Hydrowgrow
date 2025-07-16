// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Change to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // If you're handling cookies (optional)
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      localStorage.removeItem("token");

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
