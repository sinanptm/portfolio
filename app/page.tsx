import Stack from '@/components/Stack';
// import StarsCanvas from '@/components/3D/Stars';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Feedbacks from '@/components/Feedbacks';
import Hero from '@/components/Hero';
import Tech from '@/components/Tech';
import Works from '@/components/Works';
import { memo } from 'react';
import Projects from '@/components/Projects';

const page = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <Stack />
      <Projects />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
    </>
  );
}

export default memo(page);