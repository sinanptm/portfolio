import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/robot.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/robot.glb");
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (group.current) {
      const offset = scroll.offset;
      
      // Rotate the model based on scroll
      group.current.rotation.y = offset * Math.PI * 2;
      
      // Subtle breathing animation
      const breathingScale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      group.current.scale.setScalar(breathingScale);
      
      // Optional: subtle hover effect
      group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}