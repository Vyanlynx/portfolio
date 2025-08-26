"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Projects.module.css";
import {projects} from '../constants';

export const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.titleContainer} ${inView ? styles.titleAnimated : ''}`}>
          <span className={styles.sectionNumber}>02</span>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Innovative solutions crafted with cutting-edge technologies
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${inView ? styles.projectAnimated : ''}`}
              style={{ animationDelay: `${index * 200 + 400}ms` }}
              data-color={project.color}
            >
              <div className={styles.projectHeader}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectCategory}>
                    {project.category}
                  </span>
                  <span className={styles.projectYear}>{project.year}</span>
                </div>
                <div
                  className={styles.projectStatus}
                  data-status={project.status}
                >
                  {project.status}
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.projectMetrics}>
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className={styles.metricItem}>
                      <span className={styles.metricValue}>{value}</span>
                      <span className={styles.metricLabel}>{key}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.projectActions}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  data-type="code"
                >
                  <span>View Code</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  data-type="demo"
                >
                  <span>Live Demo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 3h6v6M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <div
                className={styles.projectGlow}
                style={{ backgroundColor: project.color }}
              ></div>
            </div>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <button className={styles.viewAllBtn}>
            <span>Explore All Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape} data-shape="circle"></div>
        <div className={styles.floatingShape} data-shape="square"></div>
        <div className={styles.floatingShape} data-shape="triangle"></div>
      </div>
    </section>
  );
};
