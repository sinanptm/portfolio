"use client";
import { RootLayoutProps } from "@/types";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { memo } from "react";

const HighlightBackground = ({ children }: RootLayoutProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotPatterns = {
    default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='${1.5}'%3E%3C/circle%3E%3C/svg%3E")`,
    hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='${3}'%3E%3C/circle%3E%3C/svg%3E")`,
  };

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className="group relative w-full"
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 block"
        style={{
          backgroundImage: dotPatterns.default,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 block"
        style={{
          backgroundImage: dotPatterns.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default memo(HighlightBackground);