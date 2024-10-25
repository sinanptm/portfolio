'use client';
import React, { Suspense, useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { Canvas, GroupProps } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";

const Computers = dynamic<GroupProps>(() => import('./Computer').then(mod => mod.default),
  { 
    ssr: false, 
    loading: () => <CanvasLoader />
  }
);

const ComputersCanvas: React.FC = () => {
  const [cameraSettings] = useState({
    position: [20, 3, 5] as [number, number, number],
    fov: 25,
  });

  const [size, setSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const orbitControlsProps = {
    enableZoom: false,
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 2,
    enablePan: false,
  };

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, Math.min(2, window.devicePixelRatio)]} 
      camera={cameraSettings}
      gl={{
        preserveDrawingBuffer: true,
        antialias: false, 
        powerPreference: "high-performance",
      }}
      className="w-full h-full"
      style={{ 
        width: size.width, 
        height: size.height 
      }}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls {...orbitControlsProps} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default React.memo(ComputersCanvas);