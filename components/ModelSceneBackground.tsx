import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

interface ModelSceneBackgroundProps {
  children: ReactNode;
  src:string;
}

const ModelSceneBackground: React.FC<ModelSceneBackgroundProps> = ({ children, src }) => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>  
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <Scene src={src} />
      </div>
      <main style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </main>
    </div>
  );
};

export default ModelSceneBackground;
