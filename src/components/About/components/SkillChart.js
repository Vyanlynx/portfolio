import React, { useEffect, useState } from "react";
import styles from "../About.module.css";

const skills = [
  { name: "Frontend Development", percentage: 95 },
  { name: "React & Next.js", percentage: 92 },
  { name: "Backend Development", percentage: 88 },
  { name: "UI/UX Design", percentage: 85 },
  { name: "Database Management", percentage: 80 },
];

export const SkillChart = ({ inView }) => {
  const [skillProgress, setSkillProgress] = useState({});

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        skills.forEach((skill, index) => {
          setTimeout(() => {
            setSkillProgress((prev) => ({
              ...prev,
              [skill.name]: skill.percentage,
            }));
          }, index * 200);
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView, skills]);

  return (
    <div
      className={`${styles.skillsContainer} ${
        inView ? styles.slideInRight : ""
      }`}
    >
      <div className={styles.skillsCard}>
        <h3 className={styles.skillsTitle}>Skills & Expertise</h3>
        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercentage}>
                  {skillProgress?.[skill?.name] || 0}%
                </span>
              </div>
              <div className={styles.skillBar}>
                <div
                  className={styles.skillProgress}
                  style={{
                    transform: `scaleX(${
                      (skillProgress[skill.name] || 0) / 100
                    })`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
