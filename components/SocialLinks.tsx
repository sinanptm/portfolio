import { socialMediaLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useTooltip } from '@/hooks/useTooltip';
import { memo } from 'react';
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { containerVariants, techIconVariants } from '@/style';
const AnimatedTooltip = dynamic(() => import("./AnimatedTooltip"));

const SocialLinks = () => {
    const { rotate, translateX, handleHover, hoveredItem, handleMouseMove } = useTooltip();

    return (
        <motion.ul
            variants={containerVariants}
            className="grid grid-flow-col auto-cols-max gap-4 mb-6"
            aria-label='Owner Social media links'
        >
            {socialMediaLinks.map((link, i) => (
                <motion.li
                    key={i}
                    className="relative flex items-center justify-center"
                    onMouseEnter={() => handleHover(link.href)}
                    onMouseLeave={() => handleHover(null)}
                    variants={techIconVariants}
                    aria-label={`${link.title} link: ${link.title}`}
                >
                    {hoveredItem === link.href && (
                        <AnimatedTooltip
                            rotate={rotate}
                            translateX={translateX}
                            text={link.title}
                            show={hoveredItem === link.href}
                        />
                    )}

                    <Link
                        href={link.href}
                        className="flex items-center justify-center h-9 w-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        prefetch={false}
                        onMouseMove={handleMouseMove}
                    >
                        <Image
                            src={link.icon}
                            alt={link.title}
                            width={24}
                            height={24}
                            aria-hidden={true}
                            className="w-6 h-6"
                        />
                    </Link>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default memo(SocialLinks);
