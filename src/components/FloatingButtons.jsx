"use client";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingButtons.module.css";

export default function FloatingButtons() {
  return (
    <div className={styles.floatingContainer}>
      {/* Phone Call - Landline */}
      <a href="tel:065227299" className={styles.floatingButton}>
        <FaPhoneAlt size={20} />
      </a>

      {/* Email */}
      <a href="mailto:sales@bestechparts.ae" className={styles.floatingButton}>
        <FaEnvelope size={20} />
      </a>

      {/* WhatsApp - Mobile */}
      <a
        href="https://wa.me/971543093833"
        target="_blank"
        className={styles.floatingButton}
      >
        <FaWhatsapp size={22} />
      </a>
    </div>
  );
}
