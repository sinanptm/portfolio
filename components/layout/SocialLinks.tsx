import { memo, useMemo, useState } from "react";
import { socialMediaLinks } from "@/constants";
import Link from "next/link";
import { motion } from 'framer-motion';

const SocialLink = ({
    href,
    lgLabel,
    smLabel,
    isEnd,
    className
}: {
    href: string;
    lgLabel: string;
    smLabel: string;
    isEnd?: boolean;
    className?: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center px-3 py-2 transition-colors duration-200 ease-in-out hover:bg-zinc-900 group flex-1 ${!isEnd ? "border-r border-gray-500" : ""} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="mr-2 font-normal text-sm md:text-base text-white">
                <span className={`hidden md:inline ${isHovered ? 'text-purple-end' : ''}`}>{lgLabel}</span>
                <span className={`md:hidden ${isHovered ? 'text-purple-end' : ''}`}>{smLabel}</span>
            </span>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width={30}
                height={16}
                fill={isHovered ? '#8B5CF6' : 'white'}
                className={`w-4 ml-1 h-4 ${isHovered ? 'text-purple-end' : 'text-white'}`}
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
            </motion.svg>
        </Link>
    );
};

const SocialLinks = () => {
    const Links = useMemo(
        () =>
            socialMediaLinks.map((social, index) => {
                if (social.smLabel === "SO" || social.smLabel === "LC") {
                    return (
                        <SocialLink
                            key={social.href}
                            href={social.href}
                            lgLabel={social.title}
                            smLabel={social.smLabel}
                            isEnd={index === socialMediaLinks.length - 1}
                            className="hidden md:flex" 
                        />
                    );
                }

                return (
                    <SocialLink
                        key={social.href}
                        href={social.href}
                        lgLabel={social.title}
                        smLabel={social.smLabel}
                        isEnd={index === socialMediaLinks.length - 1}
                    />
                );
            }),
        []
    );

    return (
        <div className="py-4 mb-6 w-full">
            <div className="flex border-2 border-gray-500 w-full">
                {Links}
            </div>
        </div>
    );
};

export default memo(SocialLinks);
