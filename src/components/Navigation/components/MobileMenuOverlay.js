import React from "react";
import styles from "../Navigation.module.css";

export const MobileMenuOverlay = ({ navItems, isMenuOpen, onClose }) => (
  <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
    <div className={styles.mobileMenuContent}>
      <ul className={styles.mobileNavList}>
        {navItems.map((item, index) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={styles.mobileNavLink}
              onClick={onClose}
            >
              <span className={styles.mobileNavNumber}>0{index + 1}</span>
              <span className={styles.mobileNavText}>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.mobileResumeContainer}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileResumeBtn}
          onClick={onClose}
        >
          Download Resume
        </a>
      </div>
    </div>
  </div>
);
