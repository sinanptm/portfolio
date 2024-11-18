'use client';

import { memo } from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion } from 'framer-motion';
import { containerVariants } from "@/style";
import { profile } from "@/constants";

const words = [
  { text: "I" },
  { text: "Build" },
  { text: "Innovative", },
  { text: "Digital", },
  { text: "Solutions", },
  { text: "With", },
  { text: "Precision" },
  { text: "And" },
  { text: "Passion" },
  { text: "!" },
];

const Hero = () => {
  return (
    <section className="w-full mx-auto sm:px-16 px-6 pb-10">
      <div className={`pb-7 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 ml-5">
        </div>
        <div>
          <header>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className={`font-black  lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]`}
            >
              I&apos;m <span className="text-violet-600">{profile.name}</span>
            </motion.h1>
          </header>
          <article>
            <TypewriterEffect words={words} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);