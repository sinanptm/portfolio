'use client';

import { thingsIDo } from '@/constants';
import { containerVariants } from '@/constants/animationVariants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { memo, useMemo } from 'react';
import AnimatedTooltip from './project/AnimatedTooltip';
import { useTooltip } from '@/lib/useTooltip';

const About = () => {
    const { rotate, translateX, handleHover, hoveredItem } = useTooltip();
    const MemoizedThings = useMemo(() =>
        thingsIDo.map((el, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-8 items-center">

                <div className="relative aspect-square w-full max-w-xl mx-auto">
                    <Image
                        src={el.image}
                        alt={`${el.name} Illustration`}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="space-y-8">
                    <h3 className="text-2xl sm:text-3xl font-bold">{el.name}</h3>

                    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2 max-w-2xl">
                        <AnimatedTooltip
                            rotate={rotate}
                            translateX={translateX}
                            text={el.name}
                            show={hoveredItem === el.name}
                        />
                        {el.tech.map((tech) => (
                            <div
                                key={tech.name}
                                className="relative aspect-square w-10 h-10 sm:w-14 sm:h-14 group"
                                onMouseEnter={() => handleHover(tech.name)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <Image
                                    src={tech.url}
                                    alt={tech.name}
                                    fill
                                    className="object-contain p-1 transition-transform duration-200 group-hover:scale-110"
                                />
                                <AnimatedTooltip
                                    rotate={rotate}
                                    isLink={false}
                                    translateX={translateX}
                                    text={tech.name}
                                    show={hoveredItem === tech.name}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        {el.capabilities.map((capability, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-2xl flex-shrink-0 mt-1">{capability.icon}</span>
                                <p className="text-lg text-muted-foreground">{capability.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )), [handleHover, hoveredItem, rotate, translateX]);

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            id='about'
            variants={containerVariants}
            className="relative w-full min-h-screen mx-auto sm:px-16 px-6 pb-10"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold heading text-center mb-4 sm:mb-8">What I Do? 🤔</h2>

                {MemoizedThings}
            </div>
        </motion.section>
    );
};

export default memo(About);