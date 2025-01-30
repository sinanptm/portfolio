"use client"
import { memo, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

const FooterContent = dynamic(() => import("./FooterContent"), {
  loading: () => <p>Loading...</p>,
})

const Footer = () => {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (pathname !== "/resume") {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [pathname])

  if (!isVisible) {
    return null
  }

  return (
    <footer className="bg-background border-t animate-fade-in-up">
      <FooterContent />
    </footer>
  )
}

export default memo(Footer)

