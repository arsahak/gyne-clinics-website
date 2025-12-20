"use client";

import { motion, MotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

export type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight";

export interface ScrollMotionProps extends Omit<MotionProps, "initial" | "animate" | "whileInView"> {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

// Optimized animation variants for better performance
const animationVariants: Record<AnimationType, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
};

const ScrollMotion = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.5,
  distance,
  once = true,
  className,
  ...props
}: ScrollMotionProps) => {
  // Get base variant
  const baseVariant = animationVariants[animation];

  // Apply custom distance if provided
  const variant: Variants = distance
    ? {
        hidden: {
          ...baseVariant.hidden,
          ...(animation.includes("x") && { x: distance }),
          ...(animation.includes("y") && { y: distance }),
        },
        visible: baseVariant.visible,
      }
    : baseVariant;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        margin: "-50px", // Trigger animation slightly before element enters viewport
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Optimized easing for smoother animation
      }}
      variants={variant}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotion;

