'use client';

import Contributions from "@/components/open-source/Contributions";
import AnimatedTooltip from "@/components/project/AnimatedTooltip";
import { openSourceOrganizations } from "@/constants";
import { containerVariants } from "@/constants/animationVariants";
import { useTooltip } from "@/hooks/useTooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const Page = () => {
    const { handleHover, hoveredItem, rotate, translateX } = useTooltip();

    return (
        <motion.section
            className="relative w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto space-y-10">
                <h2 className="heading">Contributed Organizations</h2>
                <div className="flex flex-wrap items-center justify-center gap-16">
                    {openSourceOrganizations.map((org) => (
                        <div
                            key={org.name}
                            onMouseEnter={() => handleHover(org.url)}
                            onMouseLeave={() => handleHover(null)}
                            className="relative flex items-center justify-center"
                        >
                            <div>
                                <AnimatedTooltip
                                    rotate={rotate}
                                    translateX={translateX}
                                    text={org.name}
                                    show={hoveredItem === org.url}
                                />
                                <Link
                                    href={org.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="relative w-20 h-20">
                                        <Image
                                            src={org.logo}
                                            alt={`${org.name} logo`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 80px, 80px"
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <Contributions />
            </div>
        </motion.section >
    );
};

export default memo(Page);