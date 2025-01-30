import { TYPEWRITER_WORDS } from '@/constants';
import About from '@/components/home/About';
import Name from '@/components/home/Name';
import { memo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const TypewriterEffect = dynamic(() => import('@/components/ui/typewriter-effect'), {
  ssr: false
});


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
          priority={false}
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
              <Suspense>
                <TypewriterEffect words={TYPEWRITER_WORDS} />
              </Suspense>
            </article>
          </div>
        </div>
      </section>

      <About />
    </main>
  );
};

export default memo(HomePage);