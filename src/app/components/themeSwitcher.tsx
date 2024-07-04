"use client";
import { useTheme } from "@/app/theme-provider";
import DarkModeIcon from "@/icons/darkModeIcon";
import LightModeIcon from "@/icons/lightModeIcon";
import styles from "../styles/themeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.themeSwitcher} onClick={toggleTheme}>
      {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
};

export default ThemeSwitcher;
