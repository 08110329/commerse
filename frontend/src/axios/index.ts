import axios from "axios";

export const backend = axios.create({
baseURL: process.env.BACKEND,
headers: {
    "Content-Type": "application/json",
},
}); 