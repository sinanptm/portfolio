'use client';

import FloatingDock from '@/components/ui/floating-dock';
import { navLinks } from '@/constants';
import { memo } from 'react';
import { motion } from 'framer-motion';


const NavMenu = () => {
  return (
    <motion.div
      className={"fixed right-4 top-1/2 -translate-y-1/2 z-[9999] "}
    >
      <FloatingDock items={navLinks} />
    </motion.div>
  );
};

export default memo(NavMenu);