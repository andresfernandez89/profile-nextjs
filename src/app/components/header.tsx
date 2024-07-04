import styles from "../styles/header.module.css";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <img
        src="/profile.jpg"
        alt="Profile Picture"
        className={styles.profileImage}
      />
      <h1 className={styles.name}>Andres Fernandez</h1>
    </header>
  );
};

export default Header;
