import About from "./components/about";
import ContactForm from "./components/contactForm";
import Header from "./components/header";
import Interests from "./components/interests";
import styles from "./styles/home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.mainContent}>
          <section id="about">
            <About />
          </section>
          <section id="interests">
            <Interests />
          </section>
          <section id="contact">
            <ContactForm />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
