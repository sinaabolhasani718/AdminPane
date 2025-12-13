import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import styles from "./Header.module.css";

function Header({ search, onSearch }) {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerSearch}>
        <img src="/img/search-normal.svg" alt="" />
        <input
          type="text"
          placeholder="جستجوی کالا"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {user && (
        <div className={styles.headerUser}>
          <img src="/img/user.svg" alt="" />
          <div>
            <h5>{user.username}</h5>
            <p>مدیر</p>
          </div>
          <button onClick={handleLogout}>خروج</button>
        </div>
      )}
    </div>
  );
}

export default Header;
