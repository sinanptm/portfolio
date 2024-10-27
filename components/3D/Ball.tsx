'use client'

import { useEffect, useState } from "react"
import { Decal, Float } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { Texture, TextureLoader } from "three";

function Ball({ icon }: { icon: string }) {
  const [decal, setDecal] = useState<Texture | null>(null)
  const { gl } = useThree()

  useEffect(() => {
    const loader = new TextureLoader()
    loader.load(icon, (texture) => {
      setDecal(texture)
    })
  }, [icon])

  if (!decal) return null

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

export default Ball