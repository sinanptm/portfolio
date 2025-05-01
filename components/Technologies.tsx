import Image from "next/image";
import { memo } from "react";
import CardSpotlight from "./ui/card-spotlight";
import { motion } from 'framer-motion';
import { Tech } from "@/types";

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
      <CardSpotlight className="p-4 flex flex-col items-center justify-center">
        <div className="mb-2 sm:mb-3">
          <Image
            alt={name}
            src={url}
            width={48}
            height={48}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </div>
        <h2 className="text-sm sm:text-base md:text-lg font-medium text-center">{name}</h2>
      </CardSpotlight>
    </motion.div>
  ));
};

export default memo(Technologies);

