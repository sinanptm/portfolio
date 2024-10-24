import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/robot.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/robot.glb");

  useFrame((state) => {
    if (group.current) {
      
      group.current.rotation.y += 0.01;
      
      
      const breathingScale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      group.current.scale.setScalar(breathingScale);
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
