"use client"

import { KEYBOARD_THEME } from "@/style";
import { cn } from "@/lib/utils";
import { memo, type ReactNode, useCallback, useRef, useEffect, useState } from "react"

interface KBtnProps {
    className?: string;
    children?: ReactNode;
    childrenClassName?: string;
    keyValue?: string;
    onKeyPress?: (key: string) => void;
}

const KBtn = ({ className = "", children, childrenClassName = "", keyValue, onKeyPress }: KBtnProps) => {
// For ripple animation
    const rippleRef = useRef<HTMLDivElement>(null);
    const [isWindowFocused, setIsWindowFocused] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    // Track window focus state
    useEffect(() => {
        const handleFocus = () => setIsWindowFocused(true);
        const handleBlur = () => setIsWindowFocused(false);

        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleBlur);

        return () => {
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("blur", handleBlur);
        };
    }, [])

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

    // Handle mouse enter/leave for individual button hover state
    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, [])

    return (
        <button
            className={cn(
                "p-[1px] rounded-md cursor-pointer transition-all duration-150 relative key-glow",
                isWindowFocused
                    ? isHovered
                        ? `bg-gradient-to-br ${KEYBOARD_THEME.hoverKeyGradient}`
                        : `bg-gradient-to-br ${KEYBOARD_THEME.keyGradient}`
                    : isHovered
                        ? "bg-gradient-to-br from-purple-700/50 via-slate-700/50 to-purple-800/50"
                        : "bg-gradient-to-br from-purple-800/40 via-slate-800/40 to-purple-900/40",
            )}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            name="KeyBoard Button"
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={cn(
                    "h-10 w-10 bg-[#0A090D] rounded-md flex items-center justify-center transition-all relative overflow-hidden",
                    className,
                  isWindowFocused
                      ? isHovered
                          ? "bg-[#15141A] border border-purple-500/40"
                          : "bg-[#0A090D] border border-purple-500/20"
                      : isHovered
                          ? "bg-[#12111A] border border-purple-500/20"
                          : "bg-[#0A090D] border border-purple-500/10",
              )}
                style={{
                    boxShadow: isWindowFocused
                        ? "0px -0.5px 2px 0 rgba(147, 51, 234, 0.2) inset, -0.5px 0px 2px 0 rgba(147, 51, 234, 0.2) inset"
                        : "0px -0.5px 1px 0 rgba(147, 51, 234, 0.1) inset, -0.5px 0px 1px 0 rgba(147, 51, 234, 0.1) inset",
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
                        background: isWindowFocused
                            ? "radial-gradient(circle at center, rgba(139, 92, 246, 0.8) 0%, rgba(79, 70, 229, 0.4) 50%, transparent 70%)"
                            : "radial-gradient(circle at center, rgba(139, 92, 246, 0.4) 0%, rgba(79, 70, 229, 0.2) 50%, transparent 70%)",
                        opacity: isHovered ? (isWindowFocused ? 0.7 : 0.4) : isWindowFocused ? 0.3 : 0.15,
                    }}
                />

                {/* Hover effect overlay - only visible when hovered */}
                {isHovered && (
                    <div className="absolute inset-0 rounded-md pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)]" />
                    </div>
                )}

                <div
                    className={cn(
                        "text-neutral-200 text-[8px] w-full flex justify-center items-center flex-col relative z-10",
                        childrenClassName,
                      isWindowFocused ? "text-purple-100/90" : "text-purple-100/70",
                      isHovered && "text-purple-100",
                  )}
                >
                    {children}
                </div>

                {/* Bottom edge glow */}
                <div
                    className={cn(
                        "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r transition-opacity",
                        isWindowFocused
                            ? "from-purple-500/0 via-purple-500/70 to-purple-500/0"
                            : "from-purple-500/0 via-purple-500/40 to-purple-500/0",
                        isHovered ? "opacity-100" : isWindowFocused ? "opacity-80" : "opacity-50",
                    )}
                />

                {isHovered && (
                    <>
                        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-purple-500/0 via-indigo-500/50 to-purple-500/0 transition-all duration-300" />
                        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-purple-500/0 via-blue-500/50 to-purple-500/0 transition-all duration-300" />
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-500/0 via-violet-500/50 to-purple-500/0 transition-all duration-300" />
                    </>
                )}
            </div>
        </button>
    );
};

export default memo(KBtn);
