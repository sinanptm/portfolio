'use client';

import { buttonHover, buttonVariants, containerVariants, fadeInUp, imageVariants, staggerChildren } from '@/style';
import { profile, thingsIDo } from '@/constants';
import SocialLinks from '../SocialLinks';
import { motion } from 'framer-motion';
import ThingsCard from './ThingsCard';
import { Button } from '../ui/button';
import Image from 'next/image';
import { memo } from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            id="about"
            variants={containerVariants}
            className="w-full mx-auto px-6 pb-10"
        >
            <motion.div className="max-w-7xl mx-auto" variants={staggerChildren}>
                <div className="space-y-16 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            className="relative aspect-square w-full h-64 sm:h-auto max-w-xl mx-auto"
                            variants={imageVariants}
                        >
                            <Image
                                src="/assets/images/sitting.svg"
                                alt="Illustration of a developer sitting at a desk, coding with a laptop and books around"
                                fill
                                priority={false}
                                sizes="(max-width: 768px) 2.5rem, (max-width: 1200px) 3.5rem, 2.5rem"
                                className="object-contain"
                            />
                        </motion.div>

                        <motion.div className="space-y-6" variants={staggerChildren}>
                            <motion.article
                                className="text-lg text-muted-foreground"
                                variants={fadeInUp}
                            >
                                {profile.summary}
                            </motion.article>

                            <motion.div variants={fadeInUp}>
                                <SocialLinks />
                            </motion.div>

                            <motion.div
                                className="flex-col sm:flex-row gap-4 hidden sm:flex"
                                variants={fadeInUp}
                            >
                                <Link href={profile.gitHub} prefetch={false}>
                                    <motion.div whileHover={buttonHover} variants={buttonVariants} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
                                            aria-label='Star me on github'
                                        >
                                            <Image
                                                src={'/assets/icons/star.svg'}
                                                width={12}
                                                height={12}
                                                alt="Star"
                                                priority={false}
                                                className="w-5 h-5 text-yellow-500"
                                            />
                                            Star me on GitHub
                                        </Button>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="max-w-7xl mx-auto mt-16"
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold heading text-center mb-4 sm:mb-8"
                    variants={fadeInUp}
                >
                    What I Do?
                </motion.h2>

                <motion.div className="space-y-16" variants={staggerChildren}>
                    {thingsIDo.map((thing, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <ThingsCard {...thing} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default memo(About);