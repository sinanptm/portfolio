'use client';

import FloatingDock from '@/components/ui/floating-dock';
import { navLinks } from '@/constants';
import { memo } from 'react';


const NavMenu = () => {
  return (
    <FloatingDock items={navLinks} />
  );
};

export default memo(NavMenu);