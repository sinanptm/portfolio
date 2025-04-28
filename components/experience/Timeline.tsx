"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { TimelineEntry } from "@/types";
import TimelineCard from "./TimelineCard";

interface TimelineProps {
    data: TimelineEntry[];
}

export const Timeline = ({ data }: TimelineProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }

        const handleResize = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setHeight(rect.height);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 80%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const scaleTransform = useTransform(scrollYProgress, [0, 0.2], [0.97, 1]);

    return (
        <motion.div
            ref={containerRef}
            className="relative pb-20 sm:pb-24 md:pb-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ scale: scaleTransform }}
            aria-label="Career timeline"
        >
            <div ref={ref} className="relative max-w-7xl mx-auto">
                {data.map((entry, index) => (
                    <TimelineCard key={entry.id} entry={entry} isEven={index % 2 === 0} index={index} />
                ))}

                <div
                    style={{ height: height + "px" }}
                    className="absolute left-4 sm:left-6 md:left-8 top-0 w-[2px] sm:w-[3px] bg-gradient-to-b from-transparent via-violet-600/30 to-transparent"
                    aria-hidden="true"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[3px] sm:w-[3px] bg-gradient-to-t from-violet-600 via-violet-500 to-transparent rounded-full shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                    />

                    {[...Array(isMobile ? 12 : 8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-violet-500/80 left-1/2 -translate-x-1/2 shadow-lg shadow-violet-500/50"
                            style={{
                                top: `${(i + 1) * (isMobile ? 8 : 12)}%`,
                                opacity: opacityTransform,
                            }}
                            animate={{
                                y: [0, isMobile ? 10 : 15, 0],
                                scale: [1, isMobile ? 1.5 : 1.3, 1],
                                opacity: [0.5, 0.9, 0.5],
                                boxShadow: [
                                    "0 0 3px rgba(139, 92, 246, 0.3)",
                                    "0 0 15px rgba(139, 92, 246, 0.6)",
                                    "0 0 3px rgba(139, 92, 246, 0.3)",
                                ],
                            }}
                            transition={{
                                duration: isMobile ? 4 : 5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * (isMobile ? 0.5 : 0.7),
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {data.map((_, idx) => (
                        <motion.div
                            key={`node-${idx}`}
                            className="absolute w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-violet-500/50 left-1/2 -translate-x-1/2 shadow-lg shadow-violet-500/50 z-10"
                            style={{
                                top: `${(idx + 0.5) * (100 / data.length)}%`,
                                opacity: opacityTransform,
                            }}
                            animate={{
                                boxShadow: [
                                    "0 0 5px rgba(139, 92, 246, 0.4)",
                                    "0 0 20px rgba(139, 92, 246, 0.8)",
                                    "0 0 5px rgba(139, 92, 246, 0.4)",
                                ],
                                scale: isMobile ? [1, 1.1, 1] : [1, 1, 1],
                            }}
                            transition={{
                                duration: isMobile ? 3 : 4,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: idx * (isMobile ? 0.5 : 0.7),
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    <motion.div
                        className="absolute w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-violet-500/30 left-1/2 -translate-x-1/2 blur-md"
                        style={{
                            top: heightTransform,
                            opacity: opacityTransform,
                        }}
                        animate={{
                            scale: isMobile ? [1, 1.8, 1] : [1, 1.5, 1],
                            opacity: isMobile ? [0.4, 0.8, 0.4] : [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: isMobile ? 1.5 : 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>

            <motion.div
                className="w-full flex justify-center mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="w-24 sm:w-20 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
            </motion.div>
        </motion.div>
    );
};

export default Timeline;
