import { toast } from "sonner";
import api from "../api";

export const order = async () => {
  try {
    const res = await api.post("/order/create");

    toast.success(res.data.message);
    return { data: res.data, success: true };
  } catch (err) {
    const message = err.response?.data?.message || err.message;
    toast.error(message);
    return {
      success: false,
      message,
    };
  }
};
