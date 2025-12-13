import axios from "axios";

const API_URL = "http://localhost:3000";

/* AUTH */
export const login = async (username, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { username, password });
  return res.data; // { token }
};

export const register = async (username, password) => {
  const res = await axios.post(`${API_URL}/auth/register`, {
    username,
    password,
  });
  return res.data;
};

/* TOKEN */
const getToken = () => localStorage.getItem("token");

/* PRODUCTS */
export const fetchProducts = async (search = "") => {
  const res = await axios.get(
    `${API_URL}/products${search ? `?name=${search}` : ""}`,
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );
  console.log("API response:", res.data);
  return res.data.data; 
};

export const addProduct = async (product) => {
  const token = getToken();
  const res = await axios.post(
    `${API_URL}/products`,
    {
      name: product.name,
      price: Number(product.price),
      quantity: Number(product.quantity),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export const editProduct = async (product) => {
  const token = getToken();
  const res = await axios.put(
    `${API_URL}/products/${product.id}`,
    {
      name: product.name,
      price: Number(product.price),
      quantity: Number(product.quantity),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export const deleteProduct = async (id) => {
  const token = getToken();
  await axios.delete(`${API_URL}/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
