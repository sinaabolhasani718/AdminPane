import axios from "axios";

export async function login(username, password) {
  try {
    const res = await axios.post("http://localhost:3000/auth/login", {
      username,
      password,
    });
    return res.data.token;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
}
