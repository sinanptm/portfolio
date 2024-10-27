import Stack from '@/components/Stack';
import Hero from '@/components/Hero';
import { memo } from 'react';
import Projects from '@/components/Projects';

const page = () => {
  return (
    <>
      <Hero />
      <Stack />
      {/* <Projects /> */}
    </>
  );
};

export default memo(page);