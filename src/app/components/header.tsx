import WaveTopSVG from "@/icons/waveTopSvg";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.svgWaves}>
        <WaveTopSVG />
      </div>
      <div className={styles.profile}>
        <div>
          <p className={styles.beforeName}>Hola, soy...</p>
          <h1 className={styles.name}>Andres Fernandez</h1>
        </div>
        <Image
          src="/profile-img.jpg"
          alt="Profile Picture"
          className={styles.profileImage}
          style={{
            width: "auto",
            height: "auto",
          }}
          width={256}
          height={341}
        />
      </div>
    </header>
  );
};

export default Header;
