export const Variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: (level) => {
    return {
      zIndex: level ? level : 1,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.5 },
    };
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  topFade: {
    y: -10,
    opacity: 0,
  },
  bottomFade: {
    y: 10,
    opacity: 0,
  },
  fade: {
    opacity: 0,
  },
  leftFade: {
    y: 10,
    opacity: 0,
  },
  rightFade: {
    y: -10,
    opacity: 0,
  },
  scaleFade: {
    scale: 0.9,
    opacity: 0,
  },
};
