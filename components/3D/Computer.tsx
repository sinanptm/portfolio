'use client';
import { useRef, useEffect, useMemo, FC, memo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh, SpotLight, type Group, type Object3D } from 'three';
import useScreen from "@/hooks/useScreen";


const MODEL_PATH = "/assets/desktop/scene.gltf";
useGLTF.preload(MODEL_PATH);

const Computers: FC = () => {
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
      intensity: 1.3,
      groundColor: "black"
    },
    spotLight: {
      // position: [-20, 50, 100],
      angle: 0.19,
      penumbra: 1,
      intensity: 1,
      castShadow: true,
    } satisfies Partial<SpotLight>,
    pointLight: {
      intensity: 2
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
      scene?.traverse((object: Object3D) => {
        if (object instanceof Mesh) {
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material?.dispose?.());
            } else {
              object.material.dispose();
            }
          }
          if (object.geometry) {
            object.geometry.dispose();
          }
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

export default memo(Computers);
