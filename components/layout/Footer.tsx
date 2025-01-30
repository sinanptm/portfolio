"use client"
import Link from "next/link"
import { socialMediaLinks, profile, navLinks } from "@/constants"
import Image from "next/image"
import { memo, useMemo } from "react"
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/style";

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <motion.footer
      className="bg-background  border-t"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div className="md:flex md:justify-between md:items-start">
          <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            >
              {profile.name}
            </Link>
            <motion.p className="text-muted-foreground text-base max-w-md" variants={itemVariants}>
              Self-taught MERN stack developer passionate about building scalable, efficient applications.
            </motion.p>
            <motion.div className="flex space-x-4" variants={containerVariants}>
              {socialMediaLinks.map((link) => (
                <motion.div key={link.title} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={`Visit ${link.title}`}
                  >
                    <span className="sr-only">{link.title}</span>
                    <Image
                      src={link.icon || "/placeholder.svg"}
                      alt={`${link.title} icon`}
                      width={24}
                      height={24}
                      loading="lazy"
                      className="w-6 h-6 object-contain"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.nav className="mt-8 md:mt-0" variants={itemVariants}>
            <motion.h3
              className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4"
              variants={itemVariants}
            >
              Navigation
            </motion.h3>
            <motion.ul className="space-y-2" variants={containerVariants}>
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants}>
                <Link
                  href={"/resume"}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Resume
                </Link>
              </motion.li>
            </motion.ul>
          </motion.nav>
        </div>
        <motion.div className="mt-8 border-t border-gray-200 pt-4" variants={itemVariants}>
          <motion.p className="text-sm text-muted-foreground text-center" variants={itemVariants}>
            &copy; {year} {profile.name}. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default memo(Footer)

