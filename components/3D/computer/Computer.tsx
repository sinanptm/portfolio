'use client';
import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Group, Material, BufferGeometry } from 'three';
import type { SpotLightProps } from '@react-three/fiber';
import useScreen from "@/lib/useScreen";

const MODEL_PATH = "/desktop/scene.gltf";
useGLTF.preload(MODEL_PATH);

const Computers: React.FC = () => {
  const meshRef = useRef<Group>(null);
  const computer = useGLTF(MODEL_PATH);
  const { isMobile } = useScreen();

  const modelProperties = useMemo(() => ({
    scale: isMobile ? 0.5 : 0.65,
    position: isMobile ? [0, -3, -1.5] : [0, -3.25, -1.5],
    rotation: [-0.01, -0.2, -0.1],
  }), [isMobile]);

  const lights = useMemo(() => ({
    hemisphereLight: {
      intensity: 0.9,
      groundColor: "black"
    },
    spotLight: {
      position: [-20, 50, 100],
      angle: 0.19,
      penumbra: 1,
      intensity: 1,
      castShadow: true,
    } satisfies Partial<SpotLightProps>,
    pointLight: {
      intensity: 1
    }
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      const speed = 0.5;
      const amplitude = 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * speed) * amplitude;
    }
  });

  useEffect(() => {
    const scene = computer?.scene;
    return () => {
      scene?.traverse((object: any) => {
        if (object.material && (object.material).dispose) {
          (object.material).dispose();
        }
        if (object.geometry && (object.geometry).dispose) {
          (object.geometry).dispose();
        }
      });
    };
  }, [computer]);

  return (
    <group ref={meshRef}>
      <hemisphereLight {...lights.hemisphereLight} />
      <spotLight {...lights.spotLight} />
      <pointLight {...lights.pointLight} />
      <primitive
        object={computer.scene}
        scale={modelProperties.scale}
        position={modelProperties.position}
        rotation={modelProperties.rotation}
        dispose={null}
      />
    </group>
  );
};

export default React.memo(Computers);
