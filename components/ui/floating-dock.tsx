'use client'
import { cn } from "@/lib/utils"
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useCallback, useEffect } from "react"

type FloatingDockItem = {
  title: string
  icon: string
  href: string
}

const SimplifiedFloatingDock = ({
  items,
  className,
}: {
  items: FloatingDockItem[]
  className?: string
}) => {
  const mouseY = useMotionValue(Infinity)

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      mouseY.set(e.pageY)
    }

    const handleGlobalMouseLeave = () => {
      mouseY.set(Infinity)
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    window.addEventListener('mouseleave', handleGlobalMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('mouseleave', handleGlobalMouseLeave)
    }
  }, [mouseY])

  return (
    <motion.div
      className={cn(
        "fixed right-4 top-1/2 -translate-y-1/2 z-[9999] flex flex-col gap-4 pointer-events-none",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

const IconContainer = ({
  mouseY,
  title,
  icon,
  href,
}: {
  mouseY: MotionValue
  title: string
  icon: string
  href: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const distance = useTransform(mouseY, (val) => {
    if (!ref.current || !hovered) return 150;
    const bounds = ref.current.getBoundingClientRect();
    return val - (bounds.top + window.scrollY) - bounds.height / 2;
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const handleMouseEnter = useCallback(() => setHovered(true), [])
  const handleMouseLeave = useCallback(() => setHovered(false), [])

  return (
    <Link href={href} className="pointer-events-auto">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs z-[9999]"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          <Image width={40} height={40} alt={title} src={icon} className="w-full h-full" />
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default SimplifiedFloatingDock