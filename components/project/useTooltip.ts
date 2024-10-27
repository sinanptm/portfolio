import { useState } from "react"
import { useMotionValue, useSpring, useTransform } from "framer-motion"

export const useTooltip = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0)
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  )
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth)
  }

  const handleButtonHover = (buttonType: string | null) => {
    setHoveredButton(buttonType)
  }

  return {
    hoveredButton,
    x,
    rotate,
    translateX,
    handleMouseMove,
    handleButtonHover,
  }
}