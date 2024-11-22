import { useCallback, useState } from "react"
import { useMotionValue, useSpring, useTransform } from "framer-motion"

export const useTooltip = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const springConfig = { stiffness: 300, damping: 15 }
  const x = useMotionValue(0)

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    { ...springConfig, restDelta: 0.01 }
  )
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    { ...springConfig, restDelta: 0.01 }
  )

  const handleHover = useCallback((type: string | null) => {
    setHoveredItem(type)
  }, [])

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2
    const mouseX = event.nativeEvent.offsetX - halfWidth
    x.set(mouseX * 1.5)
  }, [x])

  return {
    hoveredItem,
    rotate,
    translateX,
    handleHover,
    handleMouseMove,
  }
}

