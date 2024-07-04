"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import ThemeSwitcher from "./themeSwitcher";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  function handleClck(props: string): void {
    setActiveSection(props);
  }
  return (
    <nav className={styles.navbar}>
      <ul>
        <div>
          <li>
            <Link
              onClick={() => handleClck("about")}
              href="#about"
              className={activeSection === "about" ? styles.active : ""}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleClck("interests")}
              href="#interests"
              className={activeSection === "interests" ? styles.active : ""}
            >
              Intereses
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleClck("contact")}
              href="#contact"
              className={activeSection === "contact" ? styles.active : ""}
            >
              Contacto
            </Link>
          </li>
        </div>
        <ThemeSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;
