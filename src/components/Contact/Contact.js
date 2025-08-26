"use client";

import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(60px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0px)" : "translateY(60px)",
    },
    config: config.gentle,
    delay: 100,
  });

  const infoSpring = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0px)" : "translateX(50px)",
    },
    config: config.gentle,
    delay: 500,
  });

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "raghul.r2805@gmail.com",
      link: "mailto:raghul.r2805@gmail.com",
    },
    {
      icon: "📲",
      label: "LinkedIn",
      value: "Raghul Rajalingam",
      link: "https://in.linkedin.com/in/raghul-dev",
    },
    {
      icon: "📍",
      label: "Location",
      value: "India, Chennai",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className={styles.contactSection} ref={ref}>
      <div className={styles.container}>
        <animated.div style={titleSpring} className={styles.titleContainer}>
          <span className={styles.sectionNumber}>03</span>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSubtitle}>
            Ready to bring your ideas to life? Let&apos;s collaborate and create
            something amazing together.
          </p>
        </animated.div>
        <div className={styles.contactGrid}>
          <animated.div style={infoSpring} className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Let&apos;s Connect</h3>
              <p className={styles.infoDescription}>
                I&apos;m always excited to discuss new opportunities, creative
                projects, or just have a friendly chat about technology and
                innovation.
              </p>

              <div className={styles.contactDetails}>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactItem}
                  >
                    <span className={styles.contactIcon}>{info.icon}</span>
                    <div className={styles.contactContent}>
                      <span className={styles.contactLabel}>{info.label}</span>
                      <span className={styles.contactValue}>{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </animated.div>
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.glowOrb} data-position="top-left"></div>
        <div className={styles.glowOrb} data-position="bottom-right"></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  );
};
