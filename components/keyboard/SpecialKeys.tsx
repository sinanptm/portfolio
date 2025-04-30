"use client";

import { memo } from "react";
import { IconCommand } from "@tabler/icons-react";
import KBtn from "./KBtn";

export const CommandKey = memo(() => (
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


export const OptionKey = memo(() => (
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