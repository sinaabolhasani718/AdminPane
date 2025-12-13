import styles from "../Header/Header.module.css";

function Header({ search, onSearch }) {
  return (
    <>
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
        <div className={styles.headerUser}>
          <img src="./img/user.svg" alt="" />
          <div>
            <h5>سینا ابوالحسنی</h5>
            <p>مدیر</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
