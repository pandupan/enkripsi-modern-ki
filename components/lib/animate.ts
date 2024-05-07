export const itemShow = (duration: number = .6, usingScale = true) => ({
  initial: {
    opacity: 0,
    scale: usingScale ? .8 : 1,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      type: 'spring',
      damping: 10,
      stiffness: 100,
      friction: 5,
    },
  },
});

export const containerShow = {
  intial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delayChildren: 0.5,
      staggerChildren: 0.2,
      ease: 'easeInOut',
    },
  },
};
