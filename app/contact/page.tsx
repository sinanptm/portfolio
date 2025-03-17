'use client';

import { memo } from 'react';
import { globeConfig, globArcs } from "@/constants/glob";
import ContactForm from '@/components/ContactForm';
import dynamic from 'next/dynamic';
import ContactDetails from '@/components/ContactDetails';
import { motion } from "framer-motion";
import { containerVariants } from '@/style';

const World = dynamic(() => import('@/components/ui/globe').then(b => b.World), { ssr: false });

const Page = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center py-20 min-h-screen relative w-full"
    >
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 flex flex-col items-center justify-between gap-12">
        <ContactDetails />
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-12">
          <ContactForm />
          <div className="w-full lg:w-1/2 relative overflow-hidden h-[40rem]">
            <div className="absolute w-full h-full">
              <World data={globArcs} globeConfig={globeConfig} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Page);