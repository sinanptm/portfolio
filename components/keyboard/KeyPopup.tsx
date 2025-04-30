"use client";

import { cn } from "@/lib/utils";
import { KeyPopupProps } from "@/types";
import { memo } from "react";

/**
 * Component to display typed text in a popup
 */
const KeyPopup = ({ text, isVisible }: KeyPopupProps) => {
    // Don't render anything if not visible or no text
    if (!isVisible || !text) return null;

    return (
        <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
            <div
                className={cn(
                    "px-6 py-3 bg-purple-900/90 rounded-lg border border-purple-500/50 shadow-lg",
                    "text-purple-100 font-mono text-lg backdrop-blur-sm",
                    "transition-opacity duration-300",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
            >
                {text}
                <span className="inline-block w-2 h-5 bg-purple-400/80 ml-1 animate-pulse">|</span>
            </div>
        </div>
    );
};

export default memo(KeyPopup);