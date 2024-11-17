import { memo } from 'react';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';

const page = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default memo(page);