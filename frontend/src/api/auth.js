import axios from "axios";

const API = "https://task-manager-mern-97dh.onrender.com/api";

export const loginUser = async (data) => {
  return await axios.post(`${API}/auth/login`, data);
};

export const registerUser = async (data) => {
  return await axios.post(`${API}/auth/register`, data);
};