import { memo } from 'react';
import Hero from '@/components/Hero';
import NavMenu from '@/components/layout/NavMenu';
import About from '@/components/About';

const page = () => {
  return (
    <>
      <NavMenu />
      <Hero />
      <About />
    </>
  );
};

export default memo(page);