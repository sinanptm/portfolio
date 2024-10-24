'use client';
import React, { memo } from "react";
import { useGLTF } from "@react-three/drei";
import useScreen from "@/lib/useScreen";

useGLTF.preload("/desktop/scene.gltf");
const Computers = () => {
  const computer = useGLTF("/desktop/scene.gltf")
  const { isMobile } = useScreen()

  return (
    <mesh>
      <hemisphereLight intensity={0.7} groundColor="black" />
      <spotLight
        position={[-20, 50, 100]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.65}
        position={isMobile ? [0, -3, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default memo(Computers);
