"use client";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import styles from "./FloatingButtons.module.css";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // Show when scrolling up or near top; hide when scrolling down
      if (current <= 10 || current < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.floatingContainer} ${visible ? styles.visible : styles.hidden}`}>
      {/* Phone Call */}
      <a href="tel:+971543093833" className={styles.floatingButton} aria-label="Call us">
        <FaPhoneAlt size={20} />
        <span className={styles.btnLabel}>Call</span>
      </a>

      {/* Email */}
      <a href="mailto:sales@bestechparts.ae" className={styles.floatingButton} aria-label="Email us">
        <FaEnvelope size={20} />
        <span className={styles.btnLabel}>Email</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/971543093833"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.floatingButton} ${styles.whatsapp}`}
        aria-label="WhatsApp us"
      >
        <FaWhatsapp size={22} />
        <span className={styles.btnLabel}>WhatsApp</span>
      </a>
    </div>
  );
}
