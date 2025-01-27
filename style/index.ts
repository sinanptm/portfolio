import { Variants } from "framer-motion";

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


export const buttonBaseStyles = `inline-flex items-center justify-center rounded-md text-sm font-medium
                                 transition-colors focus-visible:outline-none focus-visible:ring-2
                                 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50
                                 disabled:pointer-events-none bg-secondary text-secondary-foreground 
                                 hover:bg-secondary/80  h-6  py-0.5 px-3 text-xs`;

