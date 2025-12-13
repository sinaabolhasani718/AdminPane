import { useState } from "react";
import styles from "../pages/Register.module.css";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const submitHandler = async () => {
    if (password !== confirmPassword) {
      setError("رمز عبور و تکرار آن مطابقت ندارند!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await register(username, password, phone);
      console.log("ثبت‌نام موفق:", result);

      navigate("/login");
    } catch (err) {
      console.log("خطای ثبت‌نام:", err);
      setError(err.message || err || "خطای ثبت‌نام رخ داد");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.registerCounter}>
          <div className={styles.registerHeder}>
            <img src="/img/favicon1.svg" alt="" />
            <p className={styles.title}>ثبت‌نام</p>
          </div>

          <div className={styles.registerInput}>
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

            <input
              type="password"
              placeholder="تکرار رمز عبور"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <input
              type="tel"
              placeholder="شماره تماس"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button onClick={submitHandler} disabled={isLoading}>
              {isLoading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
            </button>

            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}

            <p onClick={() => navigate("/login")}>
              قبلاً ثبت ‌نام کرده‌اید؟ وارد شوید
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
