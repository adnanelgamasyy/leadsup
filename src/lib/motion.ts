import { Variants, Transition } from "framer-motion";

const easeOutExpo: Transition["ease"] = [0.16, 1, 0.3, 1];

const baseTransition: Transition = {
  duration: 0.6,
  ease: easeOutExpo,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: baseTransition,
  },
};

export const fadeInStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ...baseTransition,
      duration: 0.7,
    },
  },
};

export const hoverLift = {
  scale: 1.02,
  y: -4,
  transition: {
    duration: 0.3,
    ease: easeOutExpo,
  },
};

export const buttonHover = {
  scale: 1.05,
  y: -2,
  transition: {
    duration: 0.2,
    ease: easeOutExpo,
  },
};

export const iconHover = {
  x: 3,
  transition: {
    duration: 0.2,
    ease: easeOutExpo,
  },
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
};
