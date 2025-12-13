import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";
import { login } from "../services/api";
import styles from "../pages/Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler = async () => {
    if (!username || !password) return;

    try {
      const res = await login(username, password);
      loginUser({ username });
      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } catch (error) {
      console.log("Login error", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCounter}>
        <div className={styles.loginHeader}>
          <img src="/img/favicon1.svg" alt="" />
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
          <button onClick={submitHandler}>ورود</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
