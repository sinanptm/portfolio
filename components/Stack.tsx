'use client';

import Technologies from '@/components/Technologies';
import { motion, AnimatePresence } from 'framer-motion';
import useScreen from '@/hooks/useScreen';
import dynamic from 'next/dynamic';
import { useCallback, useState, useEffect } from 'react';
import { technologies } from '@/constants/techData';

const KeyBoard = dynamic(() => import("@/components/keyboard/KeyBoard"));

const Stack = () => {
  const { isMobile } = useScreen();
  const [typedString, setTypedString] = useState("");
  const [techs, setTechs] = useState(technologies);

  const handleType = useCallback((val: string) => {
    setTypedString(val);
  }, []);

  useEffect(() => {
    const filteredTechs = technologies.filter((el) =>
      el.name.toLocaleLowerCase().includes(typedString.toLocaleLowerCase())
    );
    setTechs(filteredTechs);
  }, [typedString]); 

  return (
    <section className="relative w-full min-h-screen ">
      <AnimatePresence mode='popLayout'>
        <div className="max-w-7xl mx-auto px-5 py-16 sm:px-6 lg:px-10 space-y-10">
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
            Explore the cutting-edge technologies I leverage to craft efficient, and scalable solutions. <br />
            From concept to deployment, I bring expertise in every aspect of the development lifecycle.
          </motion.p>

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
                label='Type to filter Technologies...'
              />
            </motion.div>
          )}

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ staggerChildren: 0.05, delayChildren: 0.8 }}
          >
            <Technologies technologies={techs} />
          </motion.div>
        </div>
      </AnimatePresence>
    </section>
  );
};

export default Stack;
