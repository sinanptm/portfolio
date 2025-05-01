import { Variants } from "framer-motion";

export const KEYBOARD_THEME = {
  keyGradient: "from-purple-800 via-indigo-800 to-violet-900",
  hoverKeyGradient: "from-purple-700 via-indigo-700 to-violet-800",
  glowColor: "rgba(139, 92, 246, 0.5)",
  unfocusedGlowColor: "rgba(139, 92, 246, 0.2)"
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export const techIconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
};


export const textVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};


export const titleVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -5 }
};

export const buttonVariants: Variants = {
  rest: { y: 0, opacity: 0.8 },
  hover: { y: -3, opacity: 1 }
};

export const staggerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const articleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const fadeInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export const fadeInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};


export const buttonBaseStyles = `inline-flex items-center justify-center rounded-md text-sm font-medium
                                 transition-colors focus-visible:outline-none focus-visible:ring-2
                                 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50
                                 disabled:pointer-events-none bg-secondary text-secondary-foreground 
                                 hover:bg-secondary/80  h-6  py-0.5 px-3 text-xs`;



export const letterVariants: Variants = {
  hidden: { y: 48, opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { delay: i * 0.06, type: "spring", stiffness: 120 },
  }),
};

export const orbVariants: Variants = {
  animate: {
    scale: [1, 1.10, 1],
    y: [0, 15, 0],
    x: [0, 8, 0],
    transition: {
      duration: 18,
      repeat: Infinity,
      repeatType: "mirror"
    },
  }
};

export const timelineLineVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: (height: number) => ({
    height,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  }),
};

export const cardVariants: Variants = {
  hidden: (isEven: boolean) => ({ opacity: 0, y: 60, x: isEven ? -60 : 60, scale: 0.96 }),
  visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { type: "spring", stiffness: 110, damping: 15 } },
  hover: { scale: 1.025, boxShadow: "0 6px 48px 0 #9b87f522" }
};

export const cardGlowVariants = {
  rest: { opacity: 0, scale: 1 },
  hover: { opacity: 1, scale: 1.1, transition: { duration: 0.3 } },
};
