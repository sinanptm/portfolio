import { memo } from 'react';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';

const page = () => {
  return (
    <main className='flex flex-col pt-12'>
      <Hero />
      <About />
    </main>
  );
};

export default memo(page);