import Stack from '@/components/Stack';
import Hero from '@/components/Hero';
import { memo } from 'react';
import Projects from '@/components/Project';

const page = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Stack />
    </>
  );
};

export default memo(page);