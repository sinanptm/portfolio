'use client';
import { profile } from '@/constants';
import { containerVariants } from '@/style';
import { motion } from 'framer-motion';

const Name = () => {
    return (
        <motion.h1
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={`font-black  lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]`}
        >
            I&apos;m <span className="text-violet-600">{profile.name}</span>
        </motion.h1>
    );
};

export default Name;