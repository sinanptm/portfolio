'use client'

import { memo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { containerVariants } from "@/constants/animationVariants"
import { navLinks } from "@/constants"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="sticky top-0 z-50 w-full backdrop-blur"
    >
      <div className="flex h-14 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            className="font-bold text-xl font-source-code-pro text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {'< Sinanptm />'}
          </motion.span>
        </Link>
        <div className="flex-1" />
        <nav className="hidden md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <motion.p
                className="text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-blue-500"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.p>
            </Link>
          ))}
        </nav>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Image
                src={'/assets/icons/menu.svg'}
                alt="menu"
                width={15}
                height={15}
                className="h-5 w-5"
              />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            {navLinks.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link
                  href={item.href}
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.header>
  )
}

export default memo(NavBar)