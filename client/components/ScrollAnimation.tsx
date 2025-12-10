import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

const ScrollAnimation = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
      scale: direction === "fade" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;

