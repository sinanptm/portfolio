import TypewriterEffect from '@/components/ui/typewriter-effect';
import { TYPEWRITER_WORDS } from '@/constants';
import About from '@/components/home/About';
import Name from '@/components/home/Name';
import Image from 'next/image';
import { memo } from 'react';


const HomePage = () => {
  return (
    <main className='flex flex-col pt-12'>
      {/* Optimized SEO Image */}
      <div className='relative h-0 w-0'>
        <Image
          src="/assets/profile-image.jpg"
          alt="Muhammed sinan - Mern stack developer"
          width={1}
          height={1}
          loading='lazy'
          className="opacity-0"
        />
      </div>

      <section className="w-full mx-auto sm:px-16 px-6 pb-10">
        <div className="pb-7 mx-auto flex flex-row items-start gap-5">
          <div>
            <header>
              <Name />
            </header>
            <article>
              <TypewriterEffect words={TYPEWRITER_WORDS} />
            </article>
          </div>
        </div>
      </section>

      <About />
    </main>
  );
};

export default memo(HomePage);