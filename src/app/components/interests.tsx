// components/Interests.tsx
import { CheckIcon } from "@/icons/checkIcon";
import LightIcon from "@/icons/lightIcon";
import styles from "../styles/interests.module.css";

const Interests = () => {
  const interests = [
    "Programación",
    "Lectura",
    "Viajes",
    "Música",
    "Futbol",
    "Motos",
  ];

  return (
    <section className={styles.interests}>
      <h2 className="heading">
        <LightIcon />
        Intereses
      </h2>
      <ul className={styles.myUnorderedList}>
        {interests.map((interest, index) => (
          <li key={index} className={styles.myListItem}>
            <CheckIcon />
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
