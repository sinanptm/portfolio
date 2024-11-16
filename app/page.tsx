import { memo } from 'react';
import Hero from '@/components/Hero';
import NavMenu from '@/components/layout/NavMenu';

const page = () => {
  return (
    <>
      <NavMenu />
      <Hero />
    </>
  );
};

export default memo(page);