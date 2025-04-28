'use client';
import Technologies from '@/components/Technologies';
import { motion, AnimatePresence } from 'framer-motion';
import Expertise from '@/components/experience/Expertise';

const Stack = () => {

  return (
    <section className="relative w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl">
        <AnimatePresence mode='popLayout'>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Tech Arsenal
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-center text-gray-300 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore the cutting-edge technologies I leverage to craft powerful, efficient, and scalable solutions. <br />
            From concept to deployment, I bring expertise in every aspect of the development lifecycle.
          </motion.p>

          <Expertise />


          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Technologies />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Stack;

