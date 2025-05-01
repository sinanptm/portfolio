"use client";

import { RootLayoutProps } from "@/types";
import {
  useMotionValue,
  motion,
  useMotionTemplate,
  useTransform,
  useScroll,
  animate,
  useSpring
} from "framer-motion";
import { memo, useRef, useEffect } from "react";

const HighlightBackground = ({ children }: RootLayoutProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 200 });

  const ref = useRef<HTMLDivElement>(null);

  const dotPatterns = {
    default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='${2.90}'%3E%3C/circle%3E%3C/svg%3E")`,
    hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23a855f7' id='pattern-circle' cx='10' cy='10' r='${2.5}'%3E%3C/circle%3E%3C/svg%3E")`
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

  function handleMouseLeave() {
    if (!ref.current) return;
    animate(mouseX, ref.current.clientWidth / 2, { duration: 1.5 });
    animate(mouseY, ref.current.clientHeight / 2, { duration: 1.5 });
  }

  useEffect(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    mouseX.set(width / 2);
    mouseY.set(height / 2);
  }, [mouseX, mouseY]);

  return (
    <div
      className="group relative w-full min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <HighLight targetRef={ref} />

      <div
        className="pointer-events-none absolute inset-0 block opacity-60 transition-opacity duration-500"
        style={{
          backgroundImage: dotPatterns.default,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 block"
        style={{
          backgroundImage: dotPatterns.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${smoothX}px ${smoothY}px,
              black 0%,
              transparent 70%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${smoothX}px ${smoothY}px,
              black 0%,
              transparent 70%
            )
          `,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${smoothX}px ${smoothY}px,
              rgba(168, 85, 247, 0.08) 0%,
              rgba(139, 92, 246, 0.05) 30%,
              transparent 70%
            )
          `
        }}
      />

      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default memo(HighlightBackground);

export const HighLight = memo(({
  targetRef
}: {
  targetRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundY4 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <motion.div
        className="absolute top-1/4 left-1/4 w-full md:w-[40rem] h-[25rem] md:h-[40rem] bg-purple-500/15 rounded-full filter blur-[120px]"
        style={{ y: backgroundY1 }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[22rem] md:w-[30rem] h-[22rem] md:h-[30rem] bg-purple-600/15 rounded-full filter blur-[140px]"
        style={{ y: backgroundY4 }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -30, 0]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 7
        }}
      />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djI2aDI0VjM0aC0yNHpNMCAzNHYyNmgyNFYzNEgwek0wIDBoMjR2MjZIMFYwem0zNiAwaDI0djI2SDM2VjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent mix-blend-overlay"></div>
    </div>
  );
});

HighLight.displayName = "HighLight";