'use client';
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      className="text-center py-8 mt-16 border-t border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-gray-400 text-sm">
          Created by{' '}
          <a 
            href="https://v0.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            v0
          </a>
        </p>
        <p className="text-gray-500 text-xs mt-2">
          &copy; {currentYear} Muhammed Sinan. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}