import { memo } from 'react';
import Image from 'next/image';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';

const page = () => {
  return (
    <main className='flex flex-col pt-12'>
      <div className='relative'>
        <Image
          src="/assets/profile-image.jpg"
          alt="Muhammed sinan - Mern stack developer"
          fill
          className="object-contain opacity-0"
          loading='lazy'
        />
      </div>
      <Hero />
      <About />
    </main>
  );
};

export default memo(page);