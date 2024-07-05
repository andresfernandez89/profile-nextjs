import ManIcon from "@/icons/manIcon";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className="heading">
        <ManIcon className={styles.manIcon} />
        Sobre mí
      </h2>
      <p>
        Soy un Frontend Developer dedicado que durante los últimos 4 años ha
        perfeccionado tanto habilidades técnicas como soft skills. He colaborado
        activamente en equipos comprometidos, desarrollando proyectos bajo
        metodologías Agile y siguiendo las mejores prácticas.
      </p>
      <p>
        Mi principal objetivo es contribuir a la mejora continua de los procesos
        en los que me involucro, siempre en busca de oportunidades de
        crecimiento profesional. Soy una persona emprendedora, con gran
        curiosidad y una mentalidad orientada a superar mis propios límites.
        Asumo los errores como oportunidades de aprendizaje y me esfuerzo por
        mejorar constantemente.
      </p>
      <p>
        Actualmente, busco un entorno laboral que fomente el crecimiento, el
        aprendizaje y la innovación, donde pueda contribuir activamente y
        enfrentar nuevos retos.
      </p>
      <p>
        Disfruto especialmente construyendo proyectos innovadores en equipo,
        facilitando la colaboración y la reflexión a través de retrospectivas.
      </p>
    </section>
  );
};

export default About;
