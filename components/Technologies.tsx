import Image from "next/image";
import { memo } from "react";
import CardSpotlight from "./ui/card-spotlight";
import { technologies } from "@/constants/techData";



const Technologies = () => {
    return technologies.map((tech, i) => (
      <CardSpotlight key={i} className="p-4 flex flex-col items-center justify-center">
        <div className="mb-2 sm:mb-3">
          <Image
            alt={tech.name}
            src={tech.url}
            width={48}
            height={48}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </div>
        <h3 className="text-sm sm:text-base md:text-lg font-medium text-center">{tech.name}</h3>
      </CardSpotlight>
    ))
};

export default memo(Technologies);