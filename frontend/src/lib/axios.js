import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    // import.meta.env.MODE === "development"
    "https://chat-app-blue-iota-28.vercel.app/api",
  // : "/api",
  withCredentials: true,
});
