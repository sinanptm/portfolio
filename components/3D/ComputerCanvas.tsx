'use client';
import { Suspense, useState, FC, memo } from "react";
import dynamic from 'next/dynamic';
import { Canvas, GroupProps } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Computers = dynamic<GroupProps>(() => import('./Computer').then(mod => mod.default),
  {
    ssr: false,
    loading: () => <CanvasLoader />
  }
);

const ComputersCanvas: FC = () => {
  const [cameraSettings] = useState({
    position: [20, 3, 5] as [number, number, number],
    fov: 25,
  });
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
      className="w-full"
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

export default memo(ComputersCanvas);