'use client';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { socialLinks } from "@/constants";

export default function HeaderSection() {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };


    return (
        <motion.header className="text-center mb-16" variants={itemVariants}>
            <Badge variant={'outline'} className="bg-yellow-950">🚧 Construction in Progress 😊</Badge>
            <h2
                className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
            >
                Muhammed Sinan
            </h2>
            <p
                className="text-2xl text-gray-300 mb-8"

            >
                MERN Stack Developer
            </p>
            <div
                className="flex justify-center space-x-4"

            >
                {socialLinks.map((link, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        asChild
                        className="text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
                    >
                        <Link href={link.href} target="_blank" rel="noopener noreferrer">
                            <Image src={link.image} width={12} height={12} alt={link.label} className="h-5 w-5" />
                            <span className="sr-only">{link.label}</span>
                        </Link>
                    </Button>
                ))}
            </div>
        </motion.header>
    );
}