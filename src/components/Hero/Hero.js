"use client";

import React from "react";
import { animated } from "@react-spring/web";
import styles from "./Hero.module.css";
import { useHeroScroll } from "@/hooks/use-hero-scroll";
import { SubHeroCard } from "./components/SubHeroCard";

export const Hero = () => {
  const {
    ref,
    titleAnimation,
    subtitleAnimation,
    ctaAnimation,
    scrollToProjects,
  } = useHeroScroll();

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <animated.div className={styles.tagline} style={subtitleAnimation}>
              <span className={styles.taglineText}>Code meets concept</span>
            </animated.div>

            <animated.h1 className={styles.title} style={titleAnimation}>
              <span className={styles.titleLine1}>Raghul</span>
              <span className={styles.titleLine2}>Rajalingam</span>
              <span className={styles.titleAccent}>
                React Developer & Creative Engineer
              </span>
            </animated.h1>

            <animated.div
              className={styles.description}
              style={subtitleAnimation}
            >
              <p>
                Crafting digital experiences that blend{" "}
                <em>beautiful design</em> with
                <span className={styles.highlight}> robust functionality</span>.
                Passionate about creating solutions that inspire and delight.
              </p>
            </animated.div>

            <animated.div className={styles.ctaContainer} style={ctaAnimation}>
              <button className={styles.primaryCta} onClick={scrollToProjects}>
                <span>Explore My Code</span>
                <div className={styles.ctaArrow}>→</div>
              </button>

              <a href="#contact" className={styles.secondaryCta}>
                Let&apos;s Connect
              </a>
            </animated.div>
          </div>

          <SubHeroCard />
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollText}>Scroll to explore</div>
          <div className={styles.scrollLine}></div>
        </div>
      </div>
    </section>
  );
};
