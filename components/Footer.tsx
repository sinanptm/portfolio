"use client";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import Contact from "./Contact";
import { globeConfig, sampleArcs } from "@/constants/glob";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
    ssr: false,
});

const Footer = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center py-20 min-h-screen relative w-full">
            <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
                <Contact />
                <div className="w-full lg:w-1/2 relative overflow-hidden h-[40rem]">
                    <div className="absolute w-full h-full">
                        <World data={sampleArcs} globeConfig={globeConfig} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Footer);