import { useSpring, config } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export const useHeroScroll = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const titleAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0px)" : "translateY(100px)",
    },
    config: config.slow,
    delay: 200,
  });

  const subtitleAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0px)" : "translateX(-50px)",
    },
    config: config.gentle,
    delay: 600,
  });

  const ctaAnimation = useSpring({
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 },
    config: config.wobbly,
    delay: 1000,
  });

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    ref,
    titleAnimation,
    subtitleAnimation,
    ctaAnimation,
    scrollToProjects,
  };
};
