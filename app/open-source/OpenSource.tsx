'use client';

import Contributions from "@/components/open-source/Contributions";
import AnimatedTooltip from "@/components/AnimatedTooltip";
import { openSourceOrganizations } from "@/constants";
import { articleVariants, containerVariants, imageVariants, paragraphVariants, titleVariants } from "@/style";
import { useTooltip } from "@/hooks/useTooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const OpenSource = () => {
    const { handleHover, hoveredItem, rotate, translateX , handleMouseMove} = useTooltip();
    
    return (
        <motion.section
            className="relative w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto space-y-16">
                <motion.h2 variants={titleVariants} className="heading text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8">Contributed Organizations</motion.h2>
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
                                    onMouseMove={handleMouseMove}
                                    rel="noopener noreferrer"
                                >
                                    <motion.div variants={containerVariants} className="relative w-16 h-16">
                                        <Image
                                            src={org.logo}
                                            alt={`${org.name} logo`}
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <motion.div variants={containerVariants} className="space-y-16">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <motion.div variants={imageVariants} className="relative aspect-square w-full max-w-xl mx-auto">
                            <Image
                                src="/assets/images/coding.svg"
                                alt="Illustration of a developer coding, representing open source collaboration"
                                fill
                                className="object-contain"
                                loading="lazy"
                            />
                        </motion.div>

                        <div className="space-y-6">
                            <motion.h2 className="text-3xl sm:text-3xl font-bold text-center mb-4 sm:mb-8" variants={titleVariants}>What Open Source Taught Me</motion.h2>
                            <motion.article variants={articleVariants} >
                                <motion.p variants={paragraphVariants} className="text-lg leading-relaxed">
                                    Open source collaboration has been a transformative experience in my journey as a developer. It taught me the value of community-driven development, where diverse minds come together to create something greater than the sum of its parts. Through open source, I learned the importance of clear communication, thorough documentation, and writing clean, maintainable code that others can understand and build upon.
                                </motion.p>
                                <motion.p variants={paragraphVariants} className="text-lg leading-relaxed mt-4">
                                    Participating in open source projects honed my ability to work with different coding styles and philosophies, making me a more adaptable and versatile developer. It also instilled in me a deep appreciation for the power of shared knowledge and the impact that collaborative efforts can have on the tech community and beyond.
                                </motion.p>
                            </motion.article>
                        </div>
                    </div>
                </motion.div>

                <Contributions />
            </div>
        </motion.section>
    );
};

export default memo(OpenSource);