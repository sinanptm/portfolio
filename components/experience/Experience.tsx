"use client";

import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { containerVariants, staggerChildren } from "@/style";
import { timelineData } from "@/constants/timeline";
import Timeline from "./Timeline";

const Experience = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main className="flex flex-col min-h-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-full md:w-[30rem] h-[20rem] md:h-[30rem] bg-violet-600/5 rounded-full filter blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-[20rem] md:w-[25rem] h-[20rem] md:h-[25rem] bg-indigo-600/5 rounded-full filter blur-[100px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute top-2/3 right-1/4 w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem] bg-purple-600/5 rounded-full filter blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 5,
                    }}
                />
            </div>

            <motion.section
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                variants={containerVariants}
                className="w-full"
            >
                <motion.div className="max-w-7xl mx-auto w-full px-4 lg:px-8" variants={staggerChildren}>
                    <div className="pt-16 text-center">

                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative inline-block"
                            variants={staggerChildren}
                        >
                            Professional Journey
                        </motion.h1>

                        <motion.p
                            className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2"
                            variants={staggerChildren}
                        >
                            Explore my career path and professional growth as a developer. Each role has contributed to my technical
                            expertise and problem-solving abilities, shaping me into the developer I am today.
                        </motion.p>
                    </div>

                    <Timeline data={timelineData} />
                </motion.div>
            </motion.section>
        </main>
    );
};

export default memo(Experience);