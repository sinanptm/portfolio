"use client";
import { cn } from "@/lib/utils";
import type React from "react";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconSearch,
  IconWorld,
  IconCommand,
  IconCaretLeftFilled,
  IconCaretDownFilled,
} from "@tabler/icons-react";
import { memo, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { RootLayoutProps } from "@/types";

const audioContext =
  typeof window !== "undefined" ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;
let audioBuffer: AudioBuffer | null = null;

const preloadAudio = async () => {
  if (!audioContext) return;

  try {
    const response = await fetch("/keyboardpress.mp3");
    const arrayBuffer = await response.arrayBuffer();
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  } catch (error) {
    console.error("Error loading audio:", error);
  }
};

const playKeySound = () => {
  if (!audioContext || !audioBuffer) return;

  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.start(0);
};

const Row = memo(({ children }: RootLayoutProps) => {
  return <div className="flex gap-1 mb-1 w-full flex-shrink-0 justify-center">{children}</div>;
});
Row.displayName = "Row";

const KBtn = memo(
  ({
    className,
    children,
    childrenClassName,
    backlit = true
  }: {
    className?: string;
    children?: ReactNode;
    childrenClassName?: string;
    backlit?: boolean;
  }) => {
    const [isPressed, setIsPressed] = useState(false);
    const [glowIntensity, setGlowIntensity] = useState(0.3); // Start with some glow

    // Create ripple effect when key is pressed
    const rippleRef = useRef<HTMLDivElement>(null);

    const handleClick = useCallback(() => {
      // Play sound
      playKeySound();

      // Set pressed state
      setIsPressed(true);

      // Increase glow intensity with fade effect
      setGlowIntensity(1);

      // Create ripple effect
      if (rippleRef.current) {
        rippleRef.current.classList.remove("animate-ripple");
        setTimeout(() => {
          if (rippleRef.current) {
            rippleRef.current.classList.add("animate-ripple");
          }
        }, 10);
      }

      // Reset pressed state after a short delay
      const timer = setTimeout(() => setIsPressed(false), 150);

      // Gradually decrease glow intensity but keep a minimum
      const glowTimer = setTimeout(() => {
        const fadeInterval = setInterval(() => {
          setGlowIntensity((prev) => {
            const newIntensity = prev - 0.05;
            if (newIntensity <= 0.3) {
              clearInterval(fadeInterval);
              return 0.3; // Always maintain some glow
            }
            return newIntensity;
          });
        }, 30);

        setTimeout(() => clearInterval(fadeInterval), 900);
      }, 200);

      return () => {
        clearTimeout(timer);
        clearTimeout(glowTimer);
      };
    }, []);

    return (
      <div
        className={cn(
          "p-[1px] rounded-md cursor-pointer transition-all duration-150 group relative key-glow",
          "bg-gradient-to-br from-purple-500/40 via-violet-500/30 to-indigo-500/40",
          isPressed && "bg-gradient-to-br from-purple-500/80 via-violet-500/70 to-indigo-500/80",
          "hover:bg-gradient-to-br hover:from-purple-500/60 hover:via-violet-500/50 hover:to-indigo-500/60",
        )}
        onClick={handleClick}
        style={{
          boxShadow: `0 0 ${10 + glowIntensity * 15}px ${glowIntensity * 5}px rgba(139, 92, 246, ${0.3 + glowIntensity * 0.4})`,
          transition: "box-shadow 0.2s ease-in-out",
        }}
      >
        <div
          className={cn(
            "h-10 w-10 bg-[#0A090D] rounded-md flex items-center justify-center transition-all relative overflow-hidden",
            className,
            isPressed && "bg-[#1A191D] transform scale-95",
            "group-hover:bg-[#15141A] border border-purple-500/20 group-hover:border-purple-500/40",
          )}
          style={{
            boxShadow: isPressed
              ? "0px -0.5px 2px 0 rgba(147, 51, 234, 0.5) inset, -0.5px 0px 2px 0 rgba(147, 51, 234, 0.5) inset"
              : "0px -0.5px 2px 0 rgba(147, 51, 234, 0.2) inset, -0.5px 0px 2px 0 rgba(147, 51, 234, 0.2) inset",
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
              opacity: 0.2 + glowIntensity * 0.5,
            }}
          />

          <div
            className={cn(
              "text-neutral-200 text-[8px] w-full flex justify-center items-center flex-col relative z-10",
              childrenClassName,
              "text-purple-100/90",
              isPressed && "text-purple-200",
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
  },
);
KBtn.displayName = "KBtn";

const CommandKey = memo(() => (
  <KBtn className="w-14">
    <div className="w-full h-full relative">
      <div className="pl-2 absolute bottom-[-14px]">
        <span className="block">command</span>
      </div>
      <div className="absolute top-[-12px] right-[4px]">
        <IconCommand className="h-2 w-2" />
      </div>
    </div>
  </KBtn>
));
CommandKey.displayName = "CommandKey";

const OptionKey = memo(() => (
  <KBtn>
    <div className="w-full h-full py-1 relative">
      <div className="pl-1.5 absolute bottom-[-10px]">
        <span className="block">option</span>
      </div>
      <div className="absolute top-[-8px] right-[4px]">
        <svg
          fill="none"
          version="1.1"
          id="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-2 w-2"
        >
          <rect stroke="currentColor" strokeWidth={2} x="18" y="5" width="10" height="2" />
          <polygon stroke="currentColor" strokeWidth={2} points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 " />
          <rect id="_Transparent_Rectangle_" className="st0" width="32" height="32" stroke="none" />
        </svg>
      </div>
    </div>
  </KBtn>
));
OptionKey.displayName = "OptionKey";

const Keyboard = () => {
  const isMountedRef = useRef(false);
  const keyboardRef = useRef<HTMLDivElement>(null);

  // Purple color settings
  const purpleColor = {
    baseColor: "purple",
    glowColor: "rgba(139, 92, 246, 0.7)", // Tailwind purple-500
    keyGradient: "from-purple-500/40 via-violet-500/30 to-indigo-500/40",
  };

  useEffect(() => {
    if (typeof window !== "undefined" && !isMountedRef.current) {
      isMountedRef.current = true;

      const resumeAudio = () => {
        if (audioContext?.state === "suspended") {
          audioContext.resume();
        }
        document.removeEventListener("click", resumeAudio);
      };
      document.addEventListener("click", resumeAudio);

      preloadAudio();

      // Add animation styles
      const style = document.createElement('style');
      style.textContent = `
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.7;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ripple {
          animation: ripple 0.8s ease-out;
        }
        
        @keyframes breathe {
          0%, 100% {
            box-shadow: 0 0 15px 5px rgba(139, 92, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 25px 10px rgba(139, 92, 246, 0.6);
          }
        }
        
        .keyboard-glow {
          animation: breathe 3s infinite ease-in-out;
          animation-play-state: running !important;
        }
      `;
      document.head.appendChild(style);

      // Force animations to always run even when tab isn't focused
      document.addEventListener("visibilitychange", () => {
        const keyboardEl = keyboardRef.current;
        if (keyboardEl) {
          keyboardEl.style.animationPlayState = "running";
        }

        // Force all keys to maintain glow effect
        const allKeys = document.querySelectorAll(".key-glow");
        allKeys.forEach(key => {
          (key as HTMLElement).style.animationPlayState = "running";
        });
      });
    }

    return () => {
      document.removeEventListener("click", () => { });
      document.removeEventListener("visibilitychange", () => { });
    };
  }, []);

  // Add ambient glow to entire keyboard - now purple
  const keyboardGlowStyle = {
    boxShadow: `0 0 25px 7px ${purpleColor.glowColor}`,
  };

  return (
    <div className="mx-auto max-w-fit backdrop:blur-sm items-center justify-center will-change-transform">
      <div
        ref={keyboardRef}
        className={cn(
          "rounded-xl mx-auto p-3 bg-black/90 border border-purple-500/30 keyboard-glow"
        )}
        style={keyboardGlowStyle}
      >

        <Row>
          <KBtn className="w-14">esc</KBtn>
          <KBtn>
            <IconBrightnessDown className="h-2 w-2" />
            <span className="inline-block mt-1">F1</span>
          </KBtn>
          <KBtn>
            <IconBrightnessUp className="h-2 w-2" />
            <span className="inline-block mt-1">F2</span>
          </KBtn>
          <KBtn>
            <IconTable className="h-2 w-2" />
            <span className="inline-block mt-1">F3</span>
          </KBtn>
          <KBtn>
            <IconSearch className="h-2 w-2" />
            <span className="inline-block mt-1">F4</span>
          </KBtn>
          <KBtn>
            <IconMicrophone className="h-2 w-2" />
            <span className="inline-block mt-1">F5</span>
          </KBtn>
          <KBtn>
            <IconMoon className="h-2 w-2" />
            <span className="inline-block mt-1">F6</span>
          </KBtn>
          <KBtn>
            <IconPlayerTrackPrev className="h-2 w-2" />
            <span className="inline-block mt-1">F7</span>
          </KBtn>
          <KBtn>
            <IconPlayerSkipForward className="h-2 w-2" />
            <span className="inline-block mt-1">F8</span>
          </KBtn>
          <KBtn>
            <IconPlayerTrackNext className="h-2 w-2" />
            <span className="inline-block mt-1">F9</span>
          </KBtn>
          <KBtn>
            <IconVolume3 className="h-2 w-2" />
            <span className="inline-block mt-1">F10</span>
          </KBtn>
          <KBtn>
            <IconVolume2 className="h-2 w-2" />
            <span className="inline-block mt-1">F11</span>
          </KBtn>
          <KBtn>
            <IconVolume className="h-2 w-2" />
            <span className="inline-block mt-1">F12</span>
          </KBtn>
          <KBtn>
            <div className="h-5 w-5 rounded-full bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
              <div className="bg-black h-full w-full rounded-full" />
            </div>
          </KBtn>
        </Row>

        {/* Second row */}
        <Row>
          <KBtn>
            <span className="block">~</span>
            <span className="block mt-1">`</span>
          </KBtn>
          <KBtn>
            <span className="block">!</span>
            <span className="block">1</span>
          </KBtn>
          <KBtn>
            <span className="block">@</span>
            <span className="block">2</span>
          </KBtn>
          <KBtn>
            <span className="block">#</span>
            <span className="block">3</span>
          </KBtn>
          <KBtn>
            <span className="block">$</span>
            <span className="block">4</span>
          </KBtn>
          <KBtn>
            <span className="block">%</span>
            <span className="block">5</span>
          </KBtn>
          <KBtn>
            <span className="block">^</span>
            <span className="block">6</span>
          </KBtn>
          <KBtn>
            <span className="block">&</span>
            <span className="block">7</span>
          </KBtn>
          <KBtn>
            <span className="block">*</span>
            <span className="block">8</span>
          </KBtn>
          <KBtn>
            <span className="block">(</span>
            <span className="block">9</span>
          </KBtn>
          <KBtn>
            <span className="block">)</span>
            <span className="block">0</span>
          </KBtn>
          <KBtn>
            <span className="block">&mdash;</span>
            <span className="block">_</span>
          </KBtn>
          <KBtn>
            <span className="block">+</span>
            <span className="block">=</span>
          </KBtn>
          <KBtn className="w-14">delete</KBtn>
        </Row>

        {/* Third row */}
        <Row>
          <KBtn className="w-14">tab</KBtn>
          <KBtn>
            <span className="block">Q</span>
          </KBtn>
          <KBtn>
            <span className="block">W</span>
          </KBtn>
          <KBtn>
            <span className="block">E</span>
          </KBtn>
          <KBtn>
            <span className="block">R</span>
          </KBtn>
          <KBtn>
            <span className="block">T</span>
          </KBtn>
          <KBtn>
            <span className="block">Y</span>
          </KBtn>
          <KBtn>
            <span className="block">U</span>
          </KBtn>
          <KBtn>
            <span className="block">I</span>
          </KBtn>
          <KBtn>
            <span className="block">O</span>
          </KBtn>
          <KBtn>
            <span className="block">P</span>
          </KBtn>
          <KBtn>
            <span className="block">{`{`}</span>
            <span className="block">{`[`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`}`}</span>
            <span className="block">{`]`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`|`}</span>
            <span className="block">{`\\`}</span>
          </KBtn>
        </Row>

        {/* Fourth Row */}
        <Row>
          <KBtn className="w-19">caps lock</KBtn>
          <KBtn>
            <span className="block">A</span>
          </KBtn>
          <KBtn>
            <span className="block">S</span>
          </KBtn>
          <KBtn>
            <span className="block">D</span>
          </KBtn>
          <KBtn>
            <span className="block">F</span>
          </KBtn>
          <KBtn>
            <span className="block">G</span>
          </KBtn>
          <KBtn>
            <span className="block">H</span>
          </KBtn>
          <KBtn>
            <span className="block">J</span>
          </KBtn>
          <KBtn>
            <span className="block">K</span>
          </KBtn>
          <KBtn>
            <span className="block">L</span>
          </KBtn>
          <KBtn>
            <span className="block">{`:`}</span>
            <span className="block">{`;`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`"`}</span>
            <span className="block">{`'`}</span>
          </KBtn>
          <KBtn className="w-16">return</KBtn>
        </Row>

        {/* Fifth Row */}
        <Row>
          <KBtn className="w-[94px]">shift</KBtn>
          <KBtn>
            <span className="block">Z</span>
          </KBtn>
          <KBtn>
            <span className="block">X</span>
          </KBtn>
          <KBtn>
            <span className="block">C</span>
          </KBtn>
          <KBtn>
            <span className="block">V</span>
          </KBtn>
          <KBtn>
            <span className="block">B</span>
          </KBtn>
          <KBtn>
            <span className="block">N</span>
          </KBtn>
          <KBtn>
            <span className="block">M</span>
          </KBtn>
          <KBtn>
            <span className="block">{`<`}</span>
            <span className="block">{`,`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`>`}</span>
            <span className="block">{`.`}</span>
          </KBtn>
          <KBtn>
            <span className="block">{`?`}</span>
            <span className="block">{`/`}</span>
          </KBtn>
          <KBtn className="w-[94px]">shift</KBtn>
        </Row>

        {/* Sixth Row */}
        <Row>
          <KBtn>
            <div className="w-full h-full py-1 relative">
              <div className="flex justify-start pl-1 absolute top-[-8px] right-1.5">
                <span className="block">fn</span>
              </div>
              <div className="flex justify-end pr-1 absolute -bottom-1.5 left-1.5">
                <IconWorld className="h-2 w-2" />
              </div>
            </div>
          </KBtn>
          <KBtn>
            <div className="w-full h-full py-1 relative">
              <div className="pl-1 absolute bottom-[-10px]">
                <span className="block">control</span>
              </div>
              <div className="absolute top-[-8px] right-[3px]">
                <IconChevronUp className="h-2 w-2" />
              </div>
            </div>
          </KBtn>
          <OptionKey />

          <CommandKey />

          <KBtn className="w-[236px]"></KBtn>

          <CommandKey />

          <OptionKey />

          <div className="mt-1 h-10 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
            <KBtn className="w-8 h-4">
              <IconCaretUpFilled className="h-2 w-2" />
            </KBtn>
            <div className="flex">
              <KBtn className="w-8 h-4">
                <IconCaretLeftFilled className="h-2 w-2" />
              </KBtn>
              <KBtn className="w-8 h-4">
                <IconCaretDownFilled className="h-2 w-2" />
              </KBtn>
              <KBtn className="w-8 h-4">
                <IconCaretRightFilled className="h-2 w-2" />
              </KBtn>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default memo(Keyboard);