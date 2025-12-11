import { motion } from "framer-motion";
import { ReactNode, Children, isValidElement } from "react";

interface SequentialRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

const SequentialReveal = ({
  children,
  className = "",
  staggerDelay = 0.15,
  initialDelay = 0,
}: SequentialRevealProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1] as const,
      },
    },
  };

  // Convert children to array and filter out invalid elements
  const childrenArray = Children.toArray(children).filter(isValidElement);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SequentialReveal;

