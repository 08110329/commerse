import axios from "axios";

export const backend = axios.create({
  baseURL: "https://commerse-cmbv.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
