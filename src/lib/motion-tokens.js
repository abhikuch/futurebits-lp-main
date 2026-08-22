/**
 * Shared motion tokens — Corporate + Premium blend for Futurebits.
 * @see motion-design skill: card 200–350ms, stagger 50–100ms, ease-out entrances.
 */
export const MOTION = {
  duration: 0.42,
  durationSlow: 0.52,
  /** MD3 emphasized decelerate — entrance */
  ease: [0.16, 1, 0.3, 1],
  /** Standard stagger (micro cascade) */
  stagger: 0.06,
  viewportAmount: 0.12,
  hoverLift: 4,
  entranceY: 20,
};

export const MOTION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: MOTION.entranceY },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION.duration,
        delay,
        ease: MOTION.ease,
      },
    }),
  },
  staggerContainer: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: MOTION.stagger,
        delayChildren: 0.04,
      },
    },
  },
  staggerItem: {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: MOTION.duration, ease: MOTION.ease },
    },
  },
};
