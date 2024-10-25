'use client'

import { Html, useProgress } from "@react-three/drei"
import { Progress } from "@/components/ui/progress"

export default function CanvasLoader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="w-64 p-4 rounded-lg shadow-lg mt-32">
        <Progress value={progress} className="w-full mb-0 h-1" />
        <p className="text-center text-sm font-sm">{progress.toFixed(0)}%</p>
      </div>
    </Html>
  )
}