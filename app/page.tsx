'use client'

import { motion } from "framer-motion"
import HeaderSection from "@/components/HeaderSection"
import ProfileSummary from "@/components/ProfileSummary"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/FooterSection";

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <HeaderSection />
        <ProfileSummary />
        <SkillsSection />
        <ProjectsSection />
      </motion.div>
        <Footer />
    </div>
  )
}