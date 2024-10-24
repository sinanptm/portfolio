'use client'

import Link from "next/link"
import { memo } from "react"

const Navbar = () => {
  const navItems = [
    // { name: "Skills", href: "/skills" },
    // { name: "Projects", href: "/projects" },
    // { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume" }
  ]

  return (
    <nav className="w-full flex justify-center py-4 px-6 bg-stone-950 text-white">
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm hover:text-stone-300 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default memo(Navbar)
