"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { TimelineEntry } from "@/types";

interface TimelineCardProps {
    entry: TimelineEntry;
    isEven: boolean;
    index: number;
}

const TimelineCard = ({ entry, isEven, index }: TimelineCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    // Animation variants - adjusted for better mobile display
    const cardVariants = {
        hidden: { opacity: 0, x: isEven ? -30 : 30, y: 20 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
            },
        },
        hover: {
            y: -5,
            transition: { duration: 0.3 },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.3 + custom * 0.1,
            },
        }),
    };

    return (
        <div className={`flex justify-start pt-16 sm:pt-24 md:pt-32 md:gap-6 lg:gap-10 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Timeline marker with number */}
            <motion.div
                className="sticky flex flex-col md:flex-row z-40 items-center top-24 sm:top-32 md:top-40 self-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 absolute left-0 rounded-full bg-zinc-800/80 backdrop-blur-sm flex items-center justify-center border-2 border-violet-500/30 shadow-lg shadow-violet-500/20">
                    <motion.div
                        className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-violet-600/40 to-indigo-600/40 flex items-center justify-center text-sm sm:text-lg md:text-xl font-bold text-violet-200"
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [-5, 5, -5],
                            boxShadow: [
                                "0 0 0 rgba(139, 92, 246, 0)",
                                "0 0 10px rgba(139, 92, 246, 0.3)",
                                "0 0 0 rgba(139, 92, 246, 0)",
                            ],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    >
                        {index + 1}
                    </motion.div>
                </div>
                <motion.h3
                    className="hidden md:block text-lg lg:text-2xl md:pl-20 lg:pl-24 md:text-2xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400"
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {entry.company}
                </motion.h3>
            </motion.div>

            {/* Card content - improved for mobile */}
            <motion.div
                className={`relative pl-16 sm:pl-20 pr-4 md:pl-4 w-full max-w-xl sm:max-w-2xl ${isEven ? "md:mr-4 lg:mr-8" : "md:ml-4 lg:ml-8"}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="bg-zinc-800/50 rounded-lg sm:rounded-xl border border-zinc-700 p-4 sm:p-6 md:p-8 backdrop-blur-sm transition-all duration-500 relative overflow-hidden"
                    animate={{
                        borderColor: isHovered ? "rgba(139, 92, 246, 0.5)" : "rgba(63, 63, 70, 1)",
                        boxShadow: isHovered
                            ? "0 15px 30px -15px rgba(139, 92, 246, 0.2)"
                            : "0 10px 20px -15px rgba(2, 12, 27, 0.5)",
                    }}
                >
                    {/* Animated background effects */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Animated corner accent */}
                    <motion.div
                        className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0.3 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 overflow-hidden">
                            <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-violet-500/20 rotate-45 transform origin-bottom-left"></div>
                        </div>
                    </motion.div>

                    {/* Mobile company title */}
                    <motion.h3
                        className="md:hidden text-xl sm:text-2xl mb-3 sm:mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-300"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={0}
                        viewport={{ once: true }}
                    >
                        {entry.company}
                    </motion.h3>

                    <div className="mb-3 sm:mb-4 md:mb-5">
                        <motion.h4
                            className="text-xl sm:text-2xl font-bold text-zinc-100"
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                            viewport={{ once: true }}
                        >
                            {entry.title}
                        </motion.h4>
                        <motion.div
                            className="flex flex-wrap items-center gap-1 sm:gap-2 text-zinc-400 mt-1 sm:mt-2"
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm sm:text-base text-violet-300">
                                {entry.duration.start} - {entry.duration.end}
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="capitalize text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                                {entry.type}
                            </span>
                        </motion.div>
                    </div>

                    <motion.p
                        className="text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={3}
                        viewport={{ once: true }}
                    >
                        {entry.description}
                    </motion.p>

                    {/* Animated accent line */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-transparent"
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? "100%" : "30%" }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TimelineCard;