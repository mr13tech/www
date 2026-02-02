import { Variants } from 'framer-motion'

// Spring physics configurations for natural motion
export const springConfig = {
  stiff: { type: 'spring' as const, stiffness: 200, damping: 20 },
  default: { type: 'spring' as const, stiffness: 100, damping: 15 },
  gentle: { type: 'spring' as const, stiffness: 60, damping: 12 },
}

// Container animations with stagger
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Item animations for staggered reveals
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig.default,
  },
}

// Blur to focus reveal effect
export const blurToFocusVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Scale and rotate entrance
export const scaleRotateVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: springConfig.default,
  },
}

// Elastic bounce effect
export const elasticBounceVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 12,
      mass: 0.5,
    },
  },
}

// Slide up entrance
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// Fade in animation
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// Number counter animation
export const counterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: springConfig.default },
}

// Hero entrance sequence
export const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig.default,
  },
}

// Card hover effect
export const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 50px rgba(179, 213, 116, 0.2)',
    transition: springConfig.gentle,
  },
}

// Gradient border animation
export const gradientBorderVariants = {
  initial: {
    backgroundPosition: '0% 50%',
  },
  animate: {
    backgroundPosition: '100% 50%',
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse' as const,
    },
  },
}

// Particle animation
export const particleVariants: Variants = {
  floating: {
    y: [-10, 10, -10],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4 + Math.random() * 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'easeInOut',
    },
  },
}

// Pulsing glow effect
export const pulseGlowVariants: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    boxShadow: [
      '0 0 20px rgba(179, 213, 116, 0.2)',
      '0 0 40px rgba(179, 213, 116, 0.4)',
      '0 0 20px rgba(179, 213, 116, 0.2)',
    ],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
    },
  },
}

// Typing effect for text
export const typeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
}
