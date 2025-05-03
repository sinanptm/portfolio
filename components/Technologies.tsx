"use client"

import Image from "next/image";
import { memo } from "react";
import CardSpotlight from "./ui/card-spotlight";
import { motion } from "framer-motion";
import type { Tech } from "@/types";

const Technologies = ({ technologies }: { technologies: Tech[]; }) => {
  return technologies.map(({ name, url }, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay: i * 0.05 }}
      className="custom-shadow"
    >
      <CardSpotlight className="p-4 flex flex-col items-center justify-center h-full w-full aspect-[1.4/1]">
        <div className="flex items-center justify-center mb-3 sm:mb-4 w-full h-10 sm:h-12 md:h-14">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
            <Image
              alt={name}
              src={url || "/placeholder.svg"}
              fill
              sizes="(max-width: 640px) 2rem, (max-width: 768px) 2.5rem, 3rem"
              className="object-contain"
              priority
            />
          </div>
        </div>
        <h3 className="text-sm sm:text-base md:text-base text-center">{name}</h3>
      </CardSpotlight>
    </motion.div>
  ));
}

export default memo(Technologies);
