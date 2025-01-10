'use client';

import { socialMediaLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useTooltip } from '@/hooks/useTooltip';
import { memo, lazy, Suspense } from 'react';
import { motion } from "framer-motion";
import { containerVariants, techIconVariants } from '@/style';

const AnimatedTooltip = lazy(() => import("./AnimatedTooltip"));

const SocialLinks = () => {
    const { rotate, translateX, handleHover, hoveredItem, handleMouseMove } = useTooltip();

    const renderSocialLink = (link: typeof socialMediaLinks[number], index: number) => {
        const hiddenClass = (link.smLabel === "SO" || link.smLabel === "LC")
            ? "hidden sm:flex"
            : "";

        return (
            <motion.li
                key={`${link.href}-${index}`}
                className={`relative flex items-center justify-center ${hiddenClass}`}
                onMouseEnter={() => handleHover(link.href)}
                onMouseLeave={() => handleHover(null)}
                variants={techIconVariants}
                aria-label={`${link.title} link: ${link.title}`}
            >
                {hoveredItem === link.href && (
                    <Suspense fallback={null}>
                        <AnimatedTooltip
                            rotate={rotate}
                            translateX={translateX}
                            text={link.title}
                            show={hoveredItem === link.href}
                            isLink={true}
                        />
                    </Suspense>
                )}

                <Link
                    href={link.href}
                    className="flex items-center justify-center h-14 w-14 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${link.title}`}
                >
                    <Image
                        src={link.icon}
                        alt={link.title}
                        width={24}
                        height={24}
                        loading="lazy"
                        className="w-6 h-6 object-contain"
                    />
                </Link>
            </motion.li>
        );
    };

    return (
        <motion.ul
            variants={containerVariants}
            className="grid grid-flow-col auto-cols-max gap-4 mb-6"
            aria-label='Owner Social media links'
        >
            {socialMediaLinks.map(renderSocialLink)}
        </motion.ul>
    );
};

export default memo(SocialLinks);