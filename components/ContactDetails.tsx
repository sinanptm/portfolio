'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { navMenuLinks } from '@/constants';
import { memo } from 'react';

const ContactDetails = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden ring-4 ring-purple-500/20">
                        <Image
                            src="/assets/me.jpg"
                            alt="Profile photo"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 350px"
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-white mb-6">Connect With Me</h2>
                    <p className="text-gray-300 mb-6">
                        I&apos;m available on various social media platforms. Feel free to connect with me! <br />
                        I Usually get back to you in 24 hours.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {navMenuLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                            >
                                <Image src={link.icon} alt={link.title} width={24} height={24} className="mr-3" />
                                <span className="text-gray-300">{link.title}</span>
                            </a>
                        ))}
                    </div>
                    <Link href="/resume" passHref>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-colors duration-300 py-3 relative overflow-hidden group">
                            <span className="relative z-10">View My Resume</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default memo(ContactDetails);