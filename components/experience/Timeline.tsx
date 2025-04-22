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
            className="relative pb-12 sm:pb-16 md:pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ scale: scaleTransform }}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto">
                {data.map((entry, index) => (
                    <TimelineCard key={entry.id} entry={entry} isEven={index % 2 === 0} index={index} />
                ))}

                <div
                    style={{ height: height + "px" }}
                    className="absolute left-4 sm:left-6 md:left-8 top-0 w-[2px] sm:w-[3px] bg-gradient-to-b from-transparent via-violet-600/20 to-transparent"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] sm:w-[3px] bg-gradient-to-t from-violet-600 via-violet-500 to-transparent rounded-full"
                    />

                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-violet-500/80 left-1/2 -translate-x-1/2 shadow-lg shadow-violet-500/50"
                            style={{
                                top: `${(i + 1) * 18}%`,
                                opacity: opacityTransform,
                            }}
                            animate={{
                                y: [0, 10, 0],
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.9, 0.5],
                                boxShadow: [
                                    "0 0 3px rgba(139, 92, 246, 0.3)",
                                    "0 0 10px rgba(139, 92, 246, 0.6)",
                                    "0 0 3px rgba(139, 92, 246, 0.3)",
                                ],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.5,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {data.map((_, idx) => (
                        <motion.div
                            key={`node-${idx}`}
                            className="absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-violet-500/30 left-1/2 -translate-x-1/2 shadow-lg shadow-violet-500/50 z-10"
                            style={{
                                top: `${(idx + 0.5) * (100 / data.length)}%`,
                                opacity: opacityTransform,
                            }}
                            animate={{
                                boxShadow: [
                                    "0 0 5px rgba(139, 92, 246, 0.3)",
                                    "0 0 15px rgba(139, 92, 246, 0.6)",
                                    "0 0 5px rgba(139, 92, 246, 0.3)",
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: idx * 0.7,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Timeline;
