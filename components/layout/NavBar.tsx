"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";
import Logo from "../Logo";
import { navLinks } from "@/constants";
import Link from "next/link";
import { itemVariants } from "@/style";
import useIsActiveLink from "@/hooks/useIsActiveLink";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = useIsActiveLink();

    return (
        <nav className={`sticky top-0 w-full z-50 ${!isOpen && "backdrop-blur-sm"}`}>
            <div className="relative">
                <div className="flex items-center justify-between h-16 w-full z-50 px-4 sm:px-6 lg:px-8">
                    <Logo onClick={() => setIsOpen(false)} />
                    <nav className="hidden md:flex">
                        {navLinks.map((item) => (
                            <Link key={item.href} href={item.href} passHref>
                                <motion.p
                                    className={`text-sm font-medium px-3 py-2 rounded-md ${isActive(item.href)
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'
                                        : 'text-white hover:text-slate-600'}`}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    variants={itemVariants}
                                >
                                    {item.label}
                                </motion.p>
                            </Link>
                        ))}
                    </nav>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 inline-flex flex-col items-center justify-center w-8 h-8 space-y-2 p-1"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <motion.span
                                animate={{
                                    rotate: isOpen ? 45 : 0,
                                    y: isOpen ? 0 : -4,
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute w-8 h-[3px] bg-blue-purple"
                            />
                            <motion.span
                                animate={{
                                    rotate: isOpen ? -45 : 0,
                                    y: isOpen ? 0 : 4,
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute w-8 h-[3px] bg-blue-purple"
                            />
                        </div>
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 px-4 sm:px-6 lg:px-8 bg-black"
                        >
                            <div className="flex flex-col h-full pt-5">
                                <NavLinks setSheetOpen={setIsOpen} />
                                <SocialLinks />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default memo(NavBar);

