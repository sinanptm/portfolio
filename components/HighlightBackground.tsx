"use client";

import { RootLayoutProps } from "@/types";
import {
  useMotionValue,
  motion,
  useMotionTemplate,
  useSpring
} from "framer-motion";
import { memo, useRef, useEffect, useCallback } from "react";

const HighlightBackground = ({ children }: RootLayoutProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 15, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 15, stiffness: 150 });

  const ref = useRef<HTMLDivElement>(null);

  const dotPattern = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E")`;

  const handleContainerMouseMove = useCallback(({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    if (!currentTarget) return;
    const rect = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    mouseX.set(width / 2);
    mouseY.set(height / 2);
  }, [mouseX, mouseY]);


  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      onMouseMove={handleContainerMouseMove}
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/3 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full filter blur-[120px]" />

        <div
          className="pointer-events-none absolute inset-0 block opacity-60"
          style={{
            backgroundImage: dotPattern,
          }}
        />

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djI2aDI0VjM0aC0yNHpNMCAzNHYyNmgyNFYzNEgwek0wIDBoMjR2MjZIMFYwem0zNiAwaDI0djI2SDM2VjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent mix-blend-overlay"></div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${smoothX}px ${smoothY}px,
              rgba(168, 85, 247, 0.10) 0%,
              rgba(139, 92, 246, 0.05) 30%,
              transparent 60%
            )
          `
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default memo(HighlightBackground);