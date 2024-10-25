import Stack from '@/components/Stack';
import Hero from '@/components/Hero';
import Tech from '@/components/Tech';
import { memo } from 'react';
import Projects from '@/components/Projects';

const page = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <Stack />
      <Tech />
      <Projects />
    </>
  );
}

export default memo(page);