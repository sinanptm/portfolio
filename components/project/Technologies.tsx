import { skills } from "@/constants/techData";
import Image from "next/image";
import { memo } from "react";

const TechnologyIcon = ({ techIndex }: { techIndex: number }) => {
    const skill = skills[techIndex];
    return (
        <Image
            key={techIndex}
            src={skill.url}
            alt={skill.name}
            width={80}
            height={20}
            className="h-6 cursor-pointer"
        />
    );
};

export default memo(TechnologyIcon)