import styles from "../styles/navbar.module.css";
import ThemeSwitcher from "./themeSwitcher";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="#about">Sobre mí</a>
        </li>
        <li>
          <a href="#interests">Intereses</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
