import { Variants } from "framer-motion"

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

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
}

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
}

export const imageVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 }
}

export const titleVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -5 }
}

export const buttonVariants: Variants = {
  rest: { y: 0, opacity: 0.8 },
  hover: { y: -3, opacity: 1 }
}