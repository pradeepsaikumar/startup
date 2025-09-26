import axios from "axios";
const BASE_URL = "http://localhost:5000/api";

// Login
export const loginUser = async (email, password) => {
  const res = await axios.post(`${BASE_URL}/login`, { email, password });
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));
  return res.data.user;
};

// Register
export const registerUser = async (name, email, password, role="Employee") => {
  const res = await axios.post(`${BASE_URL}/register`, { name, email, password, role });
  return res.data.user;
};
