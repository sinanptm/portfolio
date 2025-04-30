"use client";

import { memo, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
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
  IconCaretLeftFilled,
  IconCaretDownFilled,
} from "@tabler/icons-react";

import { KeyboardProps } from "../../types";
import { useAudio } from "../../hooks/useAudio";
import { useKeyPress } from "../../hooks/useKeyPress";
import { CSS_ANIMATIONS, KEYBOARD_THEME } from "@/constants";
import Row from "./Row";
import KBtn from "./KBtn";
import { CommandKey, OptionKey } from "./SpecialKeys";

/**
 * Main Keyboard component
 */
const Keyboard = ({ typedString = "", setTypedString }: KeyboardProps) => {
  const keyboardRef = useRef<HTMLDivElement>(null);
  const { preloadAudio } = useAudio();
  const { showPopup, handleKeyPress } = useKeyPress(typedString, setTypedString);

  // Initialize keyboard on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load audio
    preloadAudio();

    // Add animation styles once
    const style = document.createElement("style");
    style.textContent = CSS_ANIMATIONS;
    document.head.appendChild(style);

    // Force animations to always run even when the tab isn't focused
    const handleVisibilityChange = () => {
      if (keyboardRef.current) {
        keyboardRef.current.style.animationPlayState = "running";
      }

      // Force all keys to maintain glow effect
      const allKeys = document.querySelectorAll(".key-glow");
      allKeys.forEach((key) => {
        (key as HTMLElement).style.animationPlayState = "running";
      });
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [preloadAudio]);

  // Keyboard glow style
  const keyboardGlowStyle = {
    boxShadow: `0 0 25px 7px ${KEYBOARD_THEME.glowColor}`,
  };

  return (
    <div className="mx-auto max-w-fit backdrop:blur-sm items-center justify-center will-change-transform relative">
      {/* Popup for typed text */}
      <div
        className={cn(
          "absolute top-[-90px] left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 key-popup-animation",
          showPopup ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="px-3 py-1 bg-purple-900/90 rounded-lg border border-purple-500/50 shadow-lg text-purple-100 font-mono text-lg backdrop-blur-sm">
          {typedString || (
            <span className="text-purple-500/50">Start typing...</span>
          )}
          <span className="inline-block w-2 h-5 bg-purple-400/80 ml-1 animate-pulse">|</span>
        </div>
      </div>

      <div
        ref={keyboardRef}
        className={cn(
          "rounded-xl mx-auto p-3 bg-black/90 border border-purple-500/30 keyboard-glow mt-8"
        )}
        style={keyboardGlowStyle}
      >
        {/* Function row */}
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

        {/* Number row */}
        <Row>
          <KBtn keyValue="`" onKeyPress={handleKeyPress}>
            <span className="block">~</span>
            <span className="block mt-1">`</span>
          </KBtn>
          <KBtn keyValue="1" onKeyPress={handleKeyPress}>
            <span className="block">!</span>
            <span className="block">1</span>
          </KBtn>
          <KBtn keyValue="2" onKeyPress={handleKeyPress}>
            <span className="block">@</span>
            <span className="block">2</span>
          </KBtn>
          <KBtn keyValue="3" onKeyPress={handleKeyPress}>
            <span className="block">#</span>
            <span className="block">3</span>
          </KBtn>
          <KBtn keyValue="4" onKeyPress={handleKeyPress}>
            <span className="block">$</span>
            <span className="block">4</span>
          </KBtn>
          <KBtn keyValue="5" onKeyPress={handleKeyPress}>
            <span className="block">%</span>
            <span className="block">5</span>
          </KBtn>
          <KBtn keyValue="6" onKeyPress={handleKeyPress}>
            <span className="block">^</span>
            <span className="block">6</span>
          </KBtn>
          <KBtn keyValue="7" onKeyPress={handleKeyPress}>
            <span className="block">&</span>
            <span className="block">7</span>
          </KBtn>
          <KBtn keyValue="8" onKeyPress={handleKeyPress}>
            <span className="block">*</span>
            <span className="block">8</span>
          </KBtn>
          <KBtn keyValue="9" onKeyPress={handleKeyPress}>
            <span className="block">(</span>
            <span className="block">9</span>
          </KBtn>
          <KBtn keyValue="0" onKeyPress={handleKeyPress}>
            <span className="block">)</span>
            <span className="block">0</span>
          </KBtn>
          <KBtn keyValue="-" onKeyPress={handleKeyPress}>
            <span className="block">&mdash;</span>
            <span className="block">_</span>
          </KBtn>
          <KBtn keyValue="=" onKeyPress={handleKeyPress}>
            <span className="block">+</span>
            <span className="block">=</span>
          </KBtn>
          <KBtn className="w-14" keyValue="Backspace" onKeyPress={handleKeyPress}>delete</KBtn>
        </Row>

        {/* Third row */}
        <Row>
          <KBtn className="w-14" keyValue="Tab" onKeyPress={handleKeyPress}>tab</KBtn>
          <KBtn keyValue="q" onKeyPress={handleKeyPress}><span className="block">Q</span></KBtn>
          <KBtn keyValue="w" onKeyPress={handleKeyPress}><span className="block">W</span></KBtn>
          <KBtn keyValue="e" onKeyPress={handleKeyPress}><span className="block">E</span></KBtn>
          <KBtn keyValue="r" onKeyPress={handleKeyPress}><span className="block">R</span></KBtn>
          <KBtn keyValue="t" onKeyPress={handleKeyPress}><span className="block">T</span></KBtn>
          <KBtn keyValue="y" onKeyPress={handleKeyPress}><span className="block">Y</span></KBtn>
          <KBtn keyValue="u" onKeyPress={handleKeyPress}>
            <span className="block">U</span>
          </KBtn>
          <KBtn keyValue="i" onKeyPress={handleKeyPress}>
            <span className="block">I</span>
          </KBtn>
          <KBtn keyValue="o" onKeyPress={handleKeyPress}>
            <span className="block">O</span>
          </KBtn>
          <KBtn keyValue="p" onKeyPress={handleKeyPress}>
            <span className="block">P</span>
          </KBtn>
          <KBtn keyValue="[" onKeyPress={handleKeyPress}>
            <span className="block">{`{`}</span>
            <span className="block">{`[`}</span>
          </KBtn>
          <KBtn keyValue="]" onKeyPress={handleKeyPress}>
            <span className="block">{`}`}</span>
            <span className="block">{`]`}</span>
          </KBtn>
          <KBtn keyValue="\\" onKeyPress={handleKeyPress}>
            <span className="block">{`|`}</span>
            <span className="block">{`\\`}</span>
          </KBtn>
        </Row>

        {/* Fourth Row */}
        <Row>
          <KBtn className="w-19" onKeyPress={handleKeyPress}>caps lock</KBtn>
          <KBtn keyValue="a" onKeyPress={handleKeyPress}>
            <span className="block">A</span>
          </KBtn>
          <KBtn keyValue="s" onKeyPress={handleKeyPress}>
            <span className="block">S</span>
          </KBtn>
          <KBtn keyValue="d" onKeyPress={handleKeyPress}>
            <span className="block">D</span>
          </KBtn>
          <KBtn keyValue="f" onKeyPress={handleKeyPress}>
            <span className="block">F</span>
          </KBtn>
          <KBtn keyValue="g" onKeyPress={handleKeyPress}>
            <span className="block">G</span>
          </KBtn>
          <KBtn keyValue="h" onKeyPress={handleKeyPress}>
            <span className="block">H</span>
          </KBtn>
          <KBtn keyValue="j" onKeyPress={handleKeyPress}>
            <span className="block">J</span>
          </KBtn>
          <KBtn keyValue="k" onKeyPress={handleKeyPress}>
            <span className="block">K</span>
          </KBtn>
          <KBtn keyValue="l" onKeyPress={handleKeyPress}>
            <span className="block">L</span>
          </KBtn>
          <KBtn keyValue=";" onKeyPress={handleKeyPress}>
            <span className="block">{`:`}</span>
            <span className="block">{`;`}</span>
          </KBtn>
          <KBtn keyValue="'" onKeyPress={handleKeyPress}>
            <span className="block">{`"`}</span>
            <span className="block">{`'`}</span>
          </KBtn>
          <KBtn className="w-16" onKeyPress={handleKeyPress}>return</KBtn>
        </Row>

        {/* Fifth Row */}
        <Row>
          <KBtn className="w-[94px]" onKeyPress={handleKeyPress}>shift</KBtn>
          <KBtn keyValue="z" onKeyPress={handleKeyPress}>
            <span className="block">Z</span>
          </KBtn>
          <KBtn keyValue="x" onKeyPress={handleKeyPress}>
            <span className="block">X</span>
          </KBtn>
          <KBtn keyValue="c" onKeyPress={handleKeyPress}>
            <span className="block">C</span>
          </KBtn>
          <KBtn keyValue="v" onKeyPress={handleKeyPress}>
            <span className="block">V</span>
          </KBtn>
          <KBtn keyValue="b" onKeyPress={handleKeyPress}>
            <span className="block">B</span>
          </KBtn>
          <KBtn keyValue="n" onKeyPress={handleKeyPress}>
            <span className="block">N</span>
          </KBtn>
          <KBtn keyValue="m" onKeyPress={handleKeyPress}>
            <span className="block">M</span>
          </KBtn>
          <KBtn keyValue="," onKeyPress={handleKeyPress}>
            <span className="block">{`<`}</span>
            <span className="block">{`,`}</span>
          </KBtn>
          <KBtn keyValue="." onKeyPress={handleKeyPress}>
            <span className="block">{`>`}</span>
            <span className="block">{`.`}</span>
          </KBtn>
          <KBtn keyValue="/" onKeyPress={handleKeyPress}>
            <span className="block">{`?`}</span>
            <span className="block">{`/`}</span>
          </KBtn>
          <KBtn className="w-[94px]" onKeyPress={handleKeyPress}>shift</KBtn>
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
          <KBtn className="w-[236px]" keyValue="Space" onKeyPress={handleKeyPress}></KBtn>
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
};

export default memo(Keyboard);
