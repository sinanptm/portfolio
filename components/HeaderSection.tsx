'use client';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeaderSection() {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const socialLinks = [
        { image: '/assets/linkedin.svg', href: 'https://www.linkedin.com/in/sinanptm/', label: 'LinkedIn' },
        { image: '/assets/github.svg', href: 'https://github.com/sinanptm/', label: 'GitHub' },
        { image: '/assets/instagram.svg', href: 'https://www.instagram.com/si_an_z/', label: 'Instagram' },
        { image: '/assets/stackoverflow.svg', href: 'https://stackoverflow.com/users/25472984/sinan', label: 'Stack Overflow' },
    ];

    return (
        <motion.header className="text-center mb-16" variants={itemVariants}>
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