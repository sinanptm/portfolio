import { socialMediaLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedTooltip from './project/AnimatedTooltip';
import { useTooltip } from '@/hooks/useTooltip';
import { memo } from 'react';

const SocialLinks = () => {
    const { rotate, translateX, handleHover, hoveredItem } = useTooltip();

    return (
        <div className="grid grid-flow-col auto-cols-max gap-4 mb-6">
            {socialMediaLinks.map((link, i) => (
                <div
                    key={i}
                    className="relative flex items-center justify-center"
                    onMouseEnter={() => handleHover(link.href)}
                    onMouseLeave={() => handleHover(null)} 
                >
                    <AnimatedTooltip
                        rotate={rotate}
                        translateX={translateX}
                        text={link.title}
                        show={hoveredItem === link.href}
                    />
                    
                    <Link
                        href={link.href}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={link.icon}
                            alt={link.title}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default memo(SocialLinks);
