'use client';

import TechCategories from '@/components/TechCategories';
import { motion, AnimatePresence } from 'framer-motion';
import useScreen from '@/hooks/useScreen';
import dynamic from 'next/dynamic';
import { useCallback, useState, useEffect } from 'react';
import { techCategories } from '@/constants/techData';

const KeyBoard = dynamic(() => import("@/components/keyboard/KeyBoard"));

const Stack = () => {
  const { isMobile } = useScreen();
  const [typedString, setTypedString] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(techCategories);

  const handleType = useCallback((val: string) => {
    setTypedString(val);
  }, []);

  useEffect(() => {
    if (!typedString.trim()) {
      setFilteredCategories(techCategories);
      return;
    }

    const filtered = techCategories.map(category => ({
      ...category,
      technologies: category.technologies.filter(tech =>
        tech.name.toLowerCase().includes(typedString.toLowerCase())
      )
    })).filter(category => category.technologies.length > 0);

    setFilteredCategories(filtered);
  }, [typedString]);

  return (
    <section className="relative w-full min-h-screen">
      <AnimatePresence mode='popLayout'>
        <div className="max-w-7xl mx-auto px-5 py-16 sm:px-6 lg:px-10 space-y-10">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              My Tech Arsenal
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Explore the cutting-edge technologies I leverage to craft efficient and scalable solutions.
              <br />
              From concept to deployment, I bring expertise in every aspect of the development lifecycle.
            </p>
          </motion.div>

          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <KeyBoard
                setTypedString={handleType}
                typedString={typedString}
                label='Type to filter technologies...'
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TechCategories
              categories={filteredCategories}
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </section>
  );
};

export default Stack;
