'use client';

import { useTooltip } from '@/hooks/useTooltip';
import Image from 'next/image';
import { memo } from 'react';
import AnimatedTooltip from '../AnimatedTooltip';
import { ThingsIDo } from '@/types';
import { motion } from 'framer-motion';
import { containerVariants, imageVariants, itemVariants, techIconVariants } from '@/style';

const ThingCard = ({ name, image, tech, capabilities }: ThingsIDo) => {
    const { rotate, translateX, handleHover, hoveredItem, handleMouseMove } = useTooltip();

    return (
        <motion.div
            className="grid lg:grid-cols-2 gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="relative aspect-square w-full max-w-xl mx-auto"
                variants={imageVariants}
            >
                <Image
                    src={image}
                    alt={`${name} Illustration`}
                    fill
                    className="object-contain"
                    loading="lazy"
                />
            </motion.div>

            <motion.div className="space-y-8" variants={containerVariants}>
                <motion.header variants={itemVariants}>
                    <h3 className="text-2xl sm:text-3xl font-bold">{name}</h3>
                </motion.header>

                <motion.div
                    className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2 max-w-2xl"
                    variants={containerVariants}
                >
                    {tech.map((tech) => (
                        <motion.div
                            key={tech.name}
                            className="relative aspect-square w-10 h-10 sm:w-14 sm:h-14 group"
                            onMouseEnter={() => handleHover(tech.name)}
                            onMouseLeave={() => handleHover(null)}
                            onMouseMove={handleMouseMove}
                            variants={techIconVariants}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image
                                src={tech.url}
                                alt={tech.name}
                                fill
                                sizes="(max-width: 768px) 2.5rem, (max-width: 1200px) 3.5rem, 2.5rem"
                                loading="lazy"
                                className="object-contain p-1 transition-transform duration-200"
                            />
                            <AnimatedTooltip
                                rotate={rotate}
                                isLink={false}
                                translateX={translateX}
                                text={tech.name}
                                show={hoveredItem === tech.name}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.ul className="space-y-4" variants={containerVariants}>
                    {capabilities.map((capability, index) => (
                        <motion.li
                            key={index}
                            className="flex items-start gap-3"
                            variants={itemVariants}
                        >
                            <span className="text-2xl flex-shrink-0 mt-1">
                                {capability.icon}
                            </span>
                            <p className="text-lg text-muted-foreground">
                                {capability.text}
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    );
};

export default memo(ThingCard);