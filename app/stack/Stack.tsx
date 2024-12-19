'use client';
import Technologies from '@/components/Technologies';
import { motion } from 'framer-motion';
import { containerVariants, paragraphVariants, titleVariants } from '@/style';
import { memo } from 'react';

const Stack = () => {
  return (
    <motion.section
      className="relative w-full min-h-fit mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 variants={titleVariants} className="heading">Technologies I Excel At</motion.h2>
        <motion.p variants={paragraphVariants} className="text-lg sm:text-xl text-center text-gray-300 mb-8 sm:mb-12">
          These are the tools and technologies I use to create dynamic, robust, and efficient applications tailored to your needs.
        </motion.p>


        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8">
          <Technologies />
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Stack);
