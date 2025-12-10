import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedChatBubbleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedChatBubble = ({
  children,
  delay = 0,
  className = "",
  style,
}: AnimatedChatBubbleProps) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay: delay,
          ease: [0.25, 0.25, 0, 1],
        },
        scale: {
          duration: 0.6,
          delay: delay,
          ease: [0.25, 0.25, 0, 1],
        },
        y: {
          duration: 0.6,
          delay: delay,
          ease: [0.25, 0.25, 0, 1],
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedChatBubble;

