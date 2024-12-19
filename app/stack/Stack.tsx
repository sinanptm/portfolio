'use client';
import { useState, useCallback, ChangeEvent, useMemo } from 'react';
import Technologies from '@/components/Technologies';
import { motion, AnimatePresence } from 'framer-motion';
import { technologies } from "@/constants/techData";
import { IconSearch, IconCode, IconServer, IconCloudComputing, IconTestPipe, IconServer2 } from '@tabler/icons-react';
import Expertise from '@/components/Expertise';

const Stack = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTechnologies = useMemo(() => technologies.filter(tech =>
    tech.name.toLowerCase().includes(searchQuery.toLowerCase())
  ), [searchQuery]);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <section className="relative w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
          className="relative max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <input
            type="text"
            placeholder="Discover technologies..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-6 py-4 text-lg text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
          <IconSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
        </motion.div>

        <AnimatePresence>
          {filteredTechnologies.length > 0 ? (
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Technologies technologies={filteredTechnologies} />
            </motion.div>
          ) : (
            <motion.p
              className="text-center text-xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No technologies found. Try a different search term.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Stack;

