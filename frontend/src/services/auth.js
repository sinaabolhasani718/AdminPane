import axios from "axios";

export async function login(username, password) {
  try {
    const res = await axios.post("http://localhost:3000/auth/login", {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
}

export async function register(username, password,phone) {
  try {
    const res = await axios.post("http://localhost:3000/auth/register", {
      username,
      password,
      phone,
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || "Register filed";
  }
}
