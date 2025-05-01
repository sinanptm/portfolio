"use client";

import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { containerVariants, staggerChildren } from "@/style";
import { timelineData } from "@/constants/timeline";
import Timeline from "./experience/Timeline";
import Expertise from "./experience/Expertise";

const Experience = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main className="flex flex-col min-h-screen relative overflow-hidden max-w-7xl mx-auto py-5 sm:px-6 lg:py-8 lg:px-8">
            <motion.section
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                variants={containerVariants}
                className="w-full"
            >
                <motion.div className="max-w-7xl mx-auto w-full px-4 lg:px-8" variants={staggerChildren}>
                    <div className="pt-20 md:pt-24 lg:pt-28 text-center">
                        {/* Enhanced title with animated underline */}
                        <div className="relative inline-block">
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-100 to-white"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.8,
                                            ease: [0.22, 1, 0.36, 1]
                                        }
                                    }
                                }}
                            >
                                Professional Journey
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-20 px-2 leading-relaxed"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.3,
                                        ease: [0.22, 1, 0.36, 1]
                                    }
                                }
                            }}
                        >
                            Explore my career path and professional growth as a developer. Each role has contributed to my technical
                            expertise and problem-solving abilities, shaping me into the developer I am today.
                        </motion.p>
                    </div>

                    <Expertise />


                    <Timeline data={timelineData} />
                </motion.div>
            </motion.section>
        </main>
    );
};

export default memo(Experience);
