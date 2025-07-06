import { toast } from "sonner";
import api from "../api";

export const loginUser = async (email, password) => {
  try {
    const res = await api.post("/auth/login", { email, password });
    toast.success(res.data.message);
    return res.data;
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
    return err.response?.data?.message || err.message;
  }
};
export const signup = async (fullName, email, password) => {
  try {
    const res = await api.post("/auth/signup", { fullName, email, password });
    toast.success(res.data.message);
    return res.data;
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
    return err.response?.data?.message || err.message;
  }
};
