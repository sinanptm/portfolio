"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { memo, useEffect, useState, useRef } from "react";
import { containerVariants, staggerChildren } from "@/style";
import { timelineData } from "@/constants/timeline";
import Timeline from "./experience/Timeline";
import useScreen from "@/hooks/useScreen";
import dynamic from "next/dynamic";
const KeyBoard = dynamic(() => import("./KeyBoard"))

const Experience = () => {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useScreen()

    // Parallax scroll effect for background elements
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const backgroundY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const backgroundY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const backgroundY3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main
            ref={containerRef}
            className="flex flex-col min-h-screen relative overflow-hidden max-w-7xl mx-auto py-5 sm:px-6 lg:py-8 lg:px-8"
        >

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">

                <motion.div
                    className="absolute top-1/4 left-1/4 w-full md:w-[35rem] h-[25rem] md:h-[35rem] bg-violet-600/10 rounded-full filter blur-[120px]"
                    style={{ y: backgroundY1 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-[25rem] md:w-[30rem] h-[25rem] md:h-[30rem] bg-indigo-600/10 rounded-full filter blur-[120px]"
                    style={{ y: backgroundY2 }}
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute top-2/3 right-1/4 w-[20rem] md:w-[25rem] h-[20rem] md:h-[25rem] bg-purple-600/10 rounded-full filter blur-[120px]"
                    style={{ y: backgroundY3 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 5,
                    }}
                />

                {/* Premium grid pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djI2aDI0VjM0aC0yNHpNMCAzNHYyNmgyNFYzNEgwek0wIDBoMjR2MjZIMFYwem0zNiAwaDI0djI2SDM2VjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            </div>

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

                    {!isMobile && <KeyBoard />}

                    <Timeline data={timelineData} />
                </motion.div>
            </motion.section>
        </main>
    );
};

export default memo(Experience);
