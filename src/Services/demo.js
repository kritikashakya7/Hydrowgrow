import api from "../api";
import { toast } from "sonner";

export const bookDemo = async (date, time) => {
  try {
    const res = await api.post("/demo/send", { date, time });
    toast.success(res.data.message);
    return res.data;
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
    return err.response?.data?.message || err.message;
  }
};
