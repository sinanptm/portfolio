import Stack from '@/components/Stack';
import Hero from '@/components/Hero';
import Tech from '@/components/Tech';
import { memo } from 'react';
import Projects from '@/components/Projects';

const page = () => {
  return (
    <>
      <Hero />
      <Stack />
      <Tech />
      <Projects />
    </>
  );
};

export default memo(page);