import React from "react";
import styles from "../Hero.module.css";
import { personalInfo, cmsStaticData } from "@/CMS/details";

export const SubHeroCard = () => {
  const { yearsOfExperience, sassAppsWorkedOn, companies } = cmsStaticData;
  const { totalExperience, location, appsWorkedOn, companiesWorkedOn } =
    personalInfo;

  return (
    <div className={styles.creativeSection}>
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <div className={styles.profileImage}>
            <div className={styles.profilePlaceholder}>
              <span>RR</span>
            </div>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.statusIndicator}>
              <div className={styles.statusDot}></div>
              <span>Available for work</span>
            </div>
            <div className={styles.location}>{location}</div>
          </div>
        </div>
      </div>

      <div className={styles.quickStats}>
        <div className={styles.stat}>
          <div className={styles.statNumber}>{totalExperience}</div>
          <div className={styles.statLabel}>{yearsOfExperience}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>{appsWorkedOn}</div>
          <div className={styles.statLabel}>{sassAppsWorkedOn}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>{companiesWorkedOn}</div>
          <div className={styles.statLabel}>{companies}</div>
        </div>
      </div>
    </div>
  );
};
