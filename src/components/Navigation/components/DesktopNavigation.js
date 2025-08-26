import React from "react";
import styles from "../Navigation.module.css";
import { LIGHT_THEME } from "../../constants";

export const DesktopNavigation = ({
  navItems = [],
  toggleTheme,
  theme,
  closeMenu,
}) => (
  <div className={styles.desktopNav}>
    <ul className={styles.navList}>
      {navItems?.map((item, index) => (
        <li key={item.name}>
          <a href={item.href} className={styles.navLink} onClick={closeMenu}>
            <span className={styles.navNumber}>0{index + 1}</span>
            <span className={styles.navText}>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>

    <div className={styles.navActions}>
      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <span className={styles.themeIcon}>
          {theme === LIGHT_THEME ? "🌙" : "☀️"}
        </span>
      </button>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resumeBtn}
      >
        Resume
      </a>
    </div>
  </div>
);
