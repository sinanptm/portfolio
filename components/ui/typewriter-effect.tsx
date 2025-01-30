"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { memo, useEffect, useMemo, useCallback } from "react";

const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = useMemo(() => words.map((word) => ({
    ...word,
    text: word.text.split(""),
  })), [words]);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 4,
          width: "fit-content",
        },
        {
          duration: 0.2,
          delay: stagger(0.1, { startDelay: 0.3 }),
          ease: "linear",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = useCallback(() => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${index}`}
              className={cn(
                `dark:text-white text-black opacity-0 hidden`,
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  ), [wordsArray, scope]);

  return (
    <div className={cn(
      "text-base sm:text-xl md:text-1xl lg:text-4xl font-bold text-center",
      className
    )}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};

export default memo(TypewriterEffect);