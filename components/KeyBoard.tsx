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
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { memo, useCallback, useEffect, useRef, useState } from "react";

const Keyboard = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/keyboardpress.mp3");
  }, []);

  return (
    <div className="mx-auto h-full backdrop:blur-sm p-2 items-center justify-center">
      <div className="h-full rounded-md mx-auto p-3">
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

        {/* sixth Row */}
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
      <audio ref={audioRef} src="/keyboardpress.mp3" preload="auto" />
    </div>
  );
};

const KBtn = memo(({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/keyboardpress.mp3");
  }, []);

  const handleClick = useCallback(() => {
    // Play sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.error("Error playing sound:", err));
    }

    // Visual feedback
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
  }, []);

  return (
    <div
      className={cn(
        "p-[1px] rounded-md cursor-pointer transition-all duration-150",
        backlit && "bg-white/[0.2] shadow-lg shadow-white/20",
        isPressed && "bg-purple-500/50 shadow-purple-500/30",
      )}
      onClick={handleClick}
    >
      <div
        className={cn(
          "h-10 w-10 bg-[#0A090D] rounded-md flex items-center justify-center transition-all",
          className,
          isPressed && "bg-[#1A191D] transform scale-95",
        )}
        style={{
          boxShadow: isPressed
            ? "0px -0.5px 2px 0 #2D2D3F inset, -0.5px 0px 2px 0 #2D2D3F inset"
            : "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "text-neutral-200 text-[8px] w-full flex justify-center items-center flex-col",
            childrenClassName,
            backlit && "text-white",
            isPressed && "text-purple-200",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
});

KBtn.displayName = "KBtn";

const Row = memo(({ children }: { children: React.ReactNode; }) => {
  return <div className="flex gap-1 mb-1 w-full flex-shrink-0 justify-center">{children}</div>;
});

Row.displayName = "Row";

const CommandKey = memo(() => (
  <KBtn className="w-14">
    <div className=" w-full h-full relative">
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

const OptionKey = memo(() => {
  return (
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
  );
});

OptionKey.displayName = "OptionKey"

export default memo(Keyboard);
