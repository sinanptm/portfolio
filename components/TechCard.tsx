"use client";

import Image from "next/image";
import { memo, useState } from "react";
import CardSpotlight from "./ui/card-spotlight";
import type { Tech } from "@/types";

interface TechCardProps {
    tech: Tech;
}

const TechCard = ({ tech }: TechCardProps) => {
    const [imageError, setImageError] = useState(false);

    return (
        <CardSpotlight className="p-4 flex flex-col items-center justify-center h-full w-full aspect-[1.2/1] group">
            <div className="flex items-center justify-center mb-3 sm:mb-4 w-full h-10 sm:h-12 md:h-14">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    {!imageError ? (
                        <Image
                            alt={tech.name}
                            src={tech.url || "/placeholder.svg"}
                            fill
                            sizes="(max-width: 640px) 2rem, (max-width: 768px) 2.5rem, 3rem"
                            className="object-contain"
                            onError={() => setImageError(true)}
                            priority={false}
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                            <span className="text-xs font-bold text-white">{tech.name.charAt(0)}</span>
                        </div>
                    )}
                </div>
            </div>
            <h3 className="text-sm sm:text-base md:text-base text-center font-medium text-white group-hover:text-blue-300 transition-colors duration-200">
                {tech.name}
            </h3>
        </CardSpotlight>
    );
};

export default memo(TechCard);
