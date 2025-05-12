import { Html, useProgress } from "@react-three/drei"
import { memo } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="w-64 p-4 rounded-lg mt-32 flex flex-col items-center">
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-violet-500"
            style={{
              width: `${progress}%`,
              transition: "width 0.3s ease-out"
            }}
          />
        </div>
      </div>
    </Html>
  )
}
export default memo(CanvasLoader);