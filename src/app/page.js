import React from "react";
import {
  About,
  Contact,
  CustomCursor,
  Footer,
  Hero,
  Navigation,
  Projects,
} from "../components/index";

import { ThemeProvider } from "../components/ThemeProvider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <ThemeProvider>
      <div className={styles.page}>
        <CustomCursor />
        <Navigation />
        <main className={styles.main}>
          <section id="home">
            <Hero />
          </section>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
