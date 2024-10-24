import About from '@/components/About';
import StarsCanvas from '@/components/canvas/Stars';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Feedbacks from '@/components/Feedbacks';
import Hero from '@/components/Hero';
import Tech from '@/components/Tech';
import Works from '@/components/Works';

export default function Portfolio() {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}