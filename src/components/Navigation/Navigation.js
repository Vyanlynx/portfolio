"use client";

import React, { useState } from "react";
import { useTheme } from "../ThemeProvider";
import styles from "./Navigation.module.css";
import { LIGHT_THEME } from "../constants";
import { MobileMenuOverlay } from "./components/MobileMenuOverlay";
import { DesktopNavigation } from "./components/DesktopNavigation";
import { useNavigationScroll } from "@/hooks/use-navigation-scroll";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isScrolled } = useNavigationScroll();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <a href="#home" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoMark}>R</span>
          </a>

          <DesktopNavigation
            navItems={navItems}
            toggleTheme={toggleTheme}
            theme={theme}
            closeMenu={closeMenu}
          />

          {/* Mobile Menu Button */}
          <div className={styles.mobileActions}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span className={styles.themeIcon}>
                {theme === LIGHT_THEME ? "🌙" : "☀️"}
              </span>
            </button>

            <button
              className={`${styles.menuButton} ${
                isMenuOpen ? styles.active : ""
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenuOverlay
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </>
  );
};
