import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",  // ✅ backend base URL
  withCredentials: true,                 // if using cookies
});

export default api;
