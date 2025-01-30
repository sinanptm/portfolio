import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import About from '@/components/home/About';
import Name from '@/components/home/Name';
import Image from 'next/image';
import { memo } from 'react';

const page = () => {
  const words = [
    { text: "I" },
    { text: "Build" },
    { text: "Innovative", },
    { text: "Digital", },
    { text: "Solutions", },
    { text: "With", },
    { text: "Precision" },
    { text: "And" },
    { text: "Passion" },
    { text: "!" },
  ];
  return (
    <main className='flex flex-col pt-12'>
      {/* Profile image for Seo */}
      <div className='relative'>
        <Image
          src="/assets/profile-image.jpg"
          alt="Muhammed sinan - Mern stack developer"
          fill
          className="object-contain opacity-0"
          loading='lazy'
        />
      </div>

      {/* <Hero /> */}
      <section className="w-full mx-auto sm:px-16 px-6 pb-10">
        <div className={`pb-7 mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-5">
          </div>
          <div>
            <header>
              <Name />
            </header>
            <article>
              <TypewriterEffect words={words} />
            </article>
          </div>
        </div>
      </section>

      {/* About section */}
      <About />
    </main>
  );
};

export default memo(page);