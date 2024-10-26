'use client';

import { memo } from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion } from 'framer-motion';
import useScreen from "@/lib/useScreen";
import dynamic from "next/dynamic";
const ComputerCanvas = dynamic(() => import('./3D/ComputerCanvas'), { ssr: false });

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
  const { isMobile } = useScreen();
  return (
    <section className="relative w-full h-screen mx-auto sm:px-16 px-6 pb-10">
      <div className={`pb-7 absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 ml-5">
        </div>
        <div>
          <h1 className={`font-black  lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]`}>
            Hi, I&apos;m <span className="text-violet-600">Muhammed Sinan</span>
          </h1>
          <TypewriterEffect words={words} />
        </div>
      </div>
      <ComputerCanvas />

      {isMobile && (
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#stack'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-slate-700 flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-slate-700 mb-1'
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default memo(Hero);