import React from "react";
import styles from "../About.module.css";
import { personalInfo, cmsStaticData } from "@/CMS/details";

export const ProfileDescription = ({ inView }) => {
  return (
    <div
      className={`${styles.personalInfo} ${inView ? styles.slideInLeft : ""}`}
    >
      <div className={styles.personalCard}>
        <div className={styles.aboutText}>
          <p>
            Hi! I&apos;m a passionate{" "}
            <span className={styles.highlight}>Front end Developer</span> with
            over <span>{personalInfo.totalExperience}</span> years of experience
            creating innovative digital solutions. I specialize in building
            scalable web applications using modern technologies.
          </p>
          <p>
            My journey in tech started with curiosity about how websites work,
            and it has evolved into a career focused on creating{" "}
            <span className={styles.highlight}>user-centric experiences</span>
            that solve real-world problems.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, or sharing
            knowledge with the developer community.
          </p>
        </div>

        <div className={styles.profileStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              {personalInfo.totalExperience}
            </span>
            <span className={styles.statLabel}>
              {cmsStaticData.yearsOfExperience}
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              {personalInfo.appsWorkedOn}
            </span>
            <span className={styles.statLabel}>
              {cmsStaticData.sassAppsWorkedOn}
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              {personalInfo.companiesWorkedOn}
            </span>
            <span className={styles.statLabel}>{cmsStaticData.companies}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
