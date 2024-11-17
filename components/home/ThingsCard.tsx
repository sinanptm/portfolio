// components/about/ThingCard.tsx
'use client';

import { useTooltip } from '@/hooks/useTooltip';
import Image from 'next/image';
import { memo } from 'react';
import AnimatedTooltip from '../project/AnimatedTooltip';
import { ThingsIDo } from '@/types';


const ThingCard = ({ name, image, tech, capabilities }: ThingsIDo) => {
    const { rotate, translateX, handleHover, hoveredItem } = useTooltip();

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square w-full max-w-xl mx-auto">
                <Image
                    src={image}
                    alt={`${name} Illustration`}
                    fill
                    className="object-contain"
                    loading="lazy"
                />
            </div>

            <div className="space-y-8">
                <header>
                    <h3 className="text-2xl sm:text-3xl font-bold">{name}</h3>
                </header>

                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2 max-w-2xl">
                    {tech.map((tech) => (
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
                                loading="lazy"
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

                <ul className="space-y-4">
                    {capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-2xl flex-shrink-0 mt-1">
                                {capability.icon}
                            </span>
                            <p className="text-lg text-muted-foreground">
                                {capability.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default memo(ThingCard);