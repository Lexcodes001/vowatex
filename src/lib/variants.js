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
      x: 0,
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
    y: -100,
    opacity: 0,
  },
  bottomFade: {
    y: 100,
    opacity: 0,
  },
  fade: {
    opacity: 0,
  },
  leftFade: {
    x: -50,
    opacity: 0,
  },
  rightFade: {
    x: 50,
    opacity: 0,
  },
  scaleFade: {
    scale: 0.7,
    opacity: 0,
  },
};
