"use client";

import { KEYBOARD_THEME } from "@/constants";
import { cn } from "@/lib/utils";
import { KBtnProps } from "@/types";
import { memo, useCallback, useRef } from "react";

/**
 * Keyboard button component
 */
const KBtn = ({
    className = "",
    children,
    childrenClassName = "",
    keyValue,
    onKeyPress
}: KBtnProps) => {
    // For ripple animation
    const rippleRef = useRef<HTMLDivElement>(null);

    // Handle button click with ripple effect
    const handleClick = useCallback(() => {
        // Trigger key press handler if provided
        if (onKeyPress && keyValue) {
            onKeyPress(keyValue);
        }

        // Create ripple effect
        if (rippleRef.current) {
            rippleRef.current.classList.remove("animate-ripple");
            setTimeout(() => {
                if (rippleRef.current) {
                    rippleRef.current.classList.add("animate-ripple");
                }
            }, 10);
        }
    }, [onKeyPress, keyValue]);

    return (
        <div
            className={cn(
                "p-[1px] rounded-md cursor-pointer transition-all duration-150 group relative key-glow",
                `bg-gradient-to-br ${KEYBOARD_THEME.keyGradient}`,
                `hover:bg-gradient-to-br ${KEYBOARD_THEME.hoverKeyGradient}`
            )}
            onClick={handleClick}
        >
            <div
                className={cn(
                    "h-10 w-10 bg-[#0A090D] rounded-md flex items-center justify-center transition-all relative overflow-hidden",
                    className,
                    "group-hover:bg-[#15141A] border border-purple-500/20 group-hover:border-purple-500/40",
                )}
                style={{
                    boxShadow: "0px -0.5px 2px 0 rgba(147, 51, 234, 0.2) inset, -0.5px 0px 2px 0 rgba(147, 51, 234, 0.2) inset",
                }}
            >
                {/* Ripple effect element */}
                <div
                    ref={rippleRef}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-violet-500/20 opacity-0"
                />

                {/* Key glow effect */}
                <div
                    className="absolute inset-0 rounded-md transition-opacity duration-300"
                    style={{
                        background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.8) 0%, transparent 70%)",
                        opacity: 0.3,
                    }}
                />

                <div
                    className={cn(
                        "text-neutral-200 text-[8px] w-full flex justify-center items-center flex-col relative z-10",
                        childrenClassName,
                        "text-purple-100/90",
                        "group-hover:text-purple-100",
                    )}
                >
                    {children}
                </div>

                {/* Bottom edge glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-purple-500/0 opacity-80 transition-opacity" />
            </div>
        </div>
    );
};

export default memo(KBtn);