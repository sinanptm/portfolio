"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full z-50">
            <div className="relative">

                <div className="flex items-center justify-between h-16 w-full z-50 bg-transparent px-4 sm:px-6 lg:px-8">
                    <Logo onClick={()=>setIsOpen(false)} />
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
                            className="fixed inset-0 z-40 bg-black px-4 sm:px-6 lg:px-8"
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

