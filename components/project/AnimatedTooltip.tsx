import { motion, AnimatePresence, MotionValue } from "framer-motion";
import Link from "next/link";
import { memo } from "react";

type AnimatedTooltipProps = {
  show: boolean;
  text: string;
  rotate: MotionValue<number>;
  translateX: MotionValue<number>;
};

const AnimatedTooltip = ({ show, text, rotate, translateX }: AnimatedTooltipProps) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.6 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 10,
          },
        }}
        exit={{ opacity: 0, y: 20, scale: 0.6 }}
        style={{
          translateX: translateX,
          rotate: rotate,
          whiteSpace: "nowrap",
        }}
        className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
      >
        <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
        <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
        <div className="font-semibold relative z-30 text-sm">
          <Link href={text}>
            {text}
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default memo(AnimatedTooltip);