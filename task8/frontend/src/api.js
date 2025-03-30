import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getBuyers = async () => await axios.get(`${API_URL}/buyers`);
export const getProducts = async () => await axios.get(`${API_URL}/products`);
export const getTransactions = async () => await axios.get(`${API_URL}/transactions`);

