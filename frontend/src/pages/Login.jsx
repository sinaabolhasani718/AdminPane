import { useState } from "react";

import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

import styles from "../pages/Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandeler = async () => {
    if (!username || !password) {
      console.log("Fields are empty");
      return;
    }
    try {
      const token = await login(username, password);
      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (error) {
      console.log("Login error", error);
    }
  };

  return (
    <>
      <div className={styles.loginCounter}>
        <div>
          <img src="./public/img/favicon1.svg" alt="" />
          <p>فرم ورود</p>
        </div>
        <div className={styles.loginInput}>
          <input
            type="text"
            placeholder="نام"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={submitHandeler}>Login</button>
          <p>ایجاد حساب کاربری!</p>
        </div>
      </div>
    </>
  );
}

export default Login;
