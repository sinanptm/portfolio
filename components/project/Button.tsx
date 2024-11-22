"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/style";
import { memo } from "react";
import { cn } from "@/lib/utils";
import { buttonBaseStyles } from "@/style";
import { ProjectButtonProps } from "@/types";

// eslint-disable-next-line
const ProjectButton = ({ href, icon, text, onMouseEnter, onMouseLeave, children, handleMouseMove }: ProjectButtonProps) => (
  <motion.div
    variants={{
      ...buttonVariants
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="relative"
    aria-label={`Project link on ${text}`}
  >
    <Link
      href={href}
      prefetch={false}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        // if you want the hover effect on links then you can add it 
        // onMouseMove={handleMouseMove}
        className={cn(buttonBaseStyles, "transition-colors duration-300 hover:bg-gray-600 hover:text-blue-700")}
      >
        <Image width={10} height={10} src={icon} alt={text} className="w-3 h-3 mr-1" />
        {text}
      </button>
    </Link>
    {children}
  </motion.div>
);


export default memo(ProjectButton);