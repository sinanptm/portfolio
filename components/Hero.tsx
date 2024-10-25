'use client';

import { memo } from "react";
import ComputersCanvas from "./3D/computer/ComputerCanvas";
import { TypewriterEffect } from "./ui/typewriter-effect";

const words = [
  {
    text: "I",
  },
  {
    text: "Develop",
  },
  {
    text: "Awesome",
  },
  {
    text: "Applications",
  },
  {
    text: "In",
  },
  {
    text: "Mern",
    className: "text-violet-600"
  },
  {
    text: "Stack",
  },
];

const Hero = () => {
  return (
      <section className="relative w-full h-screen mx-auto ">
        <div className={`pb-7 absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-5">
            <div className="w-5 h-5 rounded-full bg-violet-600" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]`}>
              Hi, I&apos;m <span className="text-violet-600">Muhammed Sinan</span>
            </h1>
            <TypewriterEffect words={words} />
          </div>
        </div>

        <ComputersCanvas />

      </section>
  );
};

export default memo(Hero);