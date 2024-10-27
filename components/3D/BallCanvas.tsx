'use client'

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import CanvasLoader from "./CanvasLoader"
import Ball from "./Ball"

function BallCanvas({ icon }: { icon: string }) {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas