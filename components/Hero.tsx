'use client'

import { memo } from "react"
import ComputersCanvas from "./3D/ComputerCanvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className={`pb-7 absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-600" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]`}>
            Hi, I'm <span className="text-violet-600">Muhammed Sinan</span>
          </h1>
          <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
            I am MERN Stack Developer <br className="sm:block hidden" /> I Build Full-Stack Web Applications with the MERN Stack
          </p>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center" />
    </section>
  )
}

export default memo(Hero)