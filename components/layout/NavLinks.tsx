import { navLinks } from '@/constants';
import useIsActiveLink from '@/hooks/useIsActiveLink';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dispatch, memo, SetStateAction, useCallback } from 'react';

const NavLink = ({
    href,
    children,
    isActive = false,
    index
}: {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
    index: number;
}) => (
    <Link href={href}>
        <motion.span
            className={`text-6xl sm:text-7xl lg:text-8xl tracking-tighter font-source-code-pro
            ${isActive
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'text-white hover:text-slate-600'} 
            transition-all duration-300`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: 'easeOut'
            }}
        >
            {children}
        </motion.span>
    </Link>
);

const NavLinks = ({ setSheetOpen }: { setSheetOpen: Dispatch<SetStateAction<boolean>>; }) => {
    const isActive = useIsActiveLink()

    const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'SPAN') {
            setSheetOpen(false);
        }
    }, [setSheetOpen]);

    return (
        <motion.nav
            className="flex flex-col mt-32 sm:mt-12 flex-grow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={handleClick}
        >
            {navLinks.map(({ href, label }, index) => (
                <NavLink
                    key={href}
                    href={href}
                    isActive={isActive(href)}
                    index={index}
                >
                    {label}
                </NavLink>
            ))}
            <NavLink
                key={'/resume'}
                href={'/resume'}
                isActive={isActive('/resume')}
                index={navLinks.length}
            >
                Resume
            </NavLink>
        </motion.nav>
    );
};

export default memo(NavLinks);