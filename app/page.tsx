import { memo } from 'react';
import Hero from '@/components/Hero';
import Stack from '@/components/Stack';
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