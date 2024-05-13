import axios from "axios";
const LOCALHOST = "http://ec2-54-206-114-28.ap-southeast-2.compute.amazonaws.com:1213";

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem("jwt");

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

api.defaults.headers.post["Content-Type"] = "application/json";

export default api;
