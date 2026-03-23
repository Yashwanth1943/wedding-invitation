export const LUXURY_EASE = [0.22, 1, 0.36, 1]

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.2,
}

export const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: LUXURY_EASE },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: LUXURY_EASE, delay: index * 0.08 },
  }),
}

export const heroTextContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

export const heroTextItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: LUXURY_EASE },
  },
}

export const galleryCard = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: LUXURY_EASE, delay: index * 0.06 },
  }),
}

export const subtleButtonMotion = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.6, ease: LUXURY_EASE },
}
