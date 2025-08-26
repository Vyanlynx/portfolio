"use client";

import React, { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    const interactiveElements =
      document && document.querySelectorAll('a, button, [data-cursor="hover"]');

    interactiveElements?.forEach((el) => {
      el?.addEventListener("mouseenter", handleMouseEnter);
      el?.addEventListener("mouseleave", handleMouseLeave);
    });

    window && window.addEventListener("mousemove", mouseMove);

    return () => {
      window && window.removeEventListener("mousemove", mouseMove);
      interactiveElements.forEach((el) => {
        el?.removeEventListener("mouseenter", handleMouseEnter);
        el?.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 2,
    },
  };

  return (
    <>
      <div
        className={`${styles.cursor} ${styles[cursorVariant]}`}
        style={{
          left: variants[cursorVariant].x,
          top: variants[cursorVariant].y,
          transform: `scale(${variants[cursorVariant].scale})`,
        }}
      />
      <div
        className={styles.cursorDot}
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      />
    </>
  );
};
