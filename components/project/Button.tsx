"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/style";
import { memo, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonBaseStyles } from "@/style";

type Props = {
  href: string;
  icon: string;
  text: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: ReactNode;
};


const ProjectButton = ({ href, icon, text, onMouseEnter, onMouseLeave, children }: Props) => (
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