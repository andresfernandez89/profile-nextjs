"use client";
import ScheduleIcon from "@/icons/scheduleIcon";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../styles/contactForm.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccessMessage("¡Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className={styles.contactForm}>
      <h2 className="heading">
        <ScheduleIcon />
        Contacto
      </h2>

      {successMessage ? (
        <p className={styles.successMessage}>{successMessage}</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className={styles.inputOrTextarea}
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className={styles.inputOrTextarea}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className={styles.inputOrTextarea}
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className={styles.myButton} type="submit">
            Enviar
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
