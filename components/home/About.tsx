'use client';

import { containerVariants } from '@/constants/animationVariants';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { profile, thingsIDo } from '@/constants';
import ThingsCard from './ThingsCard';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import SocialLinks from '../SocialLinks';

const About = () => {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            id="about"
            variants={containerVariants}
            className="relative w-full min-h-screen mx-auto sm:px-16 px-6 pb-10"
        >
            <div className="max-w-7xl mx-auto">
                <header>
                    <h2 className="text-3xl sm:text-4xl font-bold heading text-center mb-4 sm:mb-8">About Me</h2>
                </header>

                <div className="space-y-16">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="relative aspect-square w-full max-w-xl mx-auto">
                            <Image
                                src="/assets/images/sitting.svg"
                                alt="Illustration of a developer sitting at a desk, coding with a laptop and books around"
                                fill
                                className="object-contain"
                                loading="lazy"
                            />
                        </div>

                        <div className="space-y-6">
                            <article>
                                <p className="text-lg text-muted-foreground">
                                    {profile.summary}
                                </p>
                            </article>

                            <SocialLinks />

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={profile.gitHub} prefetch={false}>
                                    <Button
                                        className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700"
                                        aria-label='Star me on github'
                                    >
                                        <Image
                                            src={'/assets/icons/star.svg'}
                                            width={12}
                                            height={12}
                                            alt="Star"
                                            loading="lazy"
                                            className="w-5 h-5 text-yellow-500"
                                        />
                                        Star me on GitHub
                                    </Button>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16">
                <h2 className="text-3xl sm:text-4xl font-bold heading text-center mb-4 sm:mb-8">What I Do?</h2>

                <div className="space-y-16">
                    {thingsIDo.map((thing, index) => (
                        <ThingsCard key={index} {...thing} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default memo(About);