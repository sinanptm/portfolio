'use client';
import Technologies from '@/components/Technologies';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, staggerVariants } from '@/constants/animationVariants';
import { memo } from 'react';

const Stack = () => {
  const quotes = [
    {
      text: "Engineering scalable systems with precision and creativity.",
      subtitle: "System Design",
    },
    {
      text: "Building innovative solutions that empower businesses to grow.",
      subtitle: "Development Vision",
    },
    {
      text: "Blending code and design for intuitive digital experiences.",
      subtitle: "User-Centric Approach",
    },
  ];

  return (
    <motion.section
      className="relative w-full min-h-fit mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="heading">Technologies I Excel At</h2>
        <p className="text-lg sm:text-xl text-center text-gray-300 mb-8 sm:mb-12">
          These are the tools and technologies I use to create dynamic, robust, and efficient applications tailored to your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden"
              custom={index} 
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
            >
              <div className="relative z-10 p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">

                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="mb-6 relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Image
                      width={24}
                      height={24}
                      alt="Quote Icon"
                      className="text-blue-400"
                      src={'/assets/icons/quote.svg'}
                    />
                  </div>
                </div>

                <div className="relative">
                  <p className="text-xl font-medium text-gray-100 mb-3 leading-relaxed">
                    {quote.text}
                  </p>
                  <p className="text-sm text-blue-400 font-medium tracking-wide uppercase">
                    {quote.subtitle}
                  </p>
                </div>

                <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8">
          <Technologies />
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Stack);
