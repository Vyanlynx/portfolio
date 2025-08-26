"use client";

import React, { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.css";
import { ProfileDescription } from "./components/ProfileDescription";
import { SkillChart } from "./components/SkillChart";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const technologies = useMemo(
    () => [
      { name: "HTML5", icon: "🏢" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "🚀" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Redux", icon: "🌀" },
      { name: "Node.js", icon: "🟢" },
      { name: "MongoDB", icon: "🍃" },
      { name: "GraphQL", icon: "🧬" },
    ],
    []
  );

  return (
    <section id="about" className={styles.aboutSection} ref={ref}>
      <div className={styles.container}>
        <div
          className={`${styles.titleContainer} ${
            inView ? styles.animated : ""
          }`}
        >
          <h2 className={styles.sectionTitle}>About Me</h2>
        </div>

        <div className={styles.aboutGrid}>
          <ProfileDescription inView={inView} />
          <SkillChart inView={inView} />
        </div>

        <div className={styles.technologiesSection}>
          <h3 className={styles.techTitle}>Technologies I Work With</h3>
          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`${styles.techItem} ${
                  inView ? styles.fadeInUp : ""
                }`}
                style={{ animationDelay: `${index * 100 + 700}ms` }}
              >
                <span className={styles.techIcon}>{tech.icon}</span>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
