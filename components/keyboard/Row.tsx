"use client";

import { RootLayoutProps } from "@/types";
import { memo } from "react";

/**
 * Keyboard row component - optimized with memo
 */
const Row = ({ children }: RootLayoutProps) => {
    return (
        <div className="flex gap-1 mb-1 w-full flex-shrink-0 justify-center">
            {children}
        </div>
    );
};

export default memo(Row);