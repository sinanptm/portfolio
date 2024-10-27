'use client'

import { memo, useState } from "react"
import { motion } from "framer-motion"
import { projects } from "@/constants"
import { Project } from "@/types"
import ProjectModel from "./project/ProjectModel"
import ProjectCard from "./project/ProjectsCard"
import { containerVariants, itemVariants, textVariants } from "./project/animationVariants"



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section className="relative py-16">
      <div className="mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl font-bold text-primary mb-4"
            variants={textVariants}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={textVariants}
          >
            Explore a collection of my latest work, showcasing a diverse range of skills and technologies.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ProjectCard project={project} onViewDetails={handleViewDetails} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {isModalOpen&&(
        <ProjectModel project={selectedProject} isOpen={isModalOpen} setOpen={setIsModalOpen} />
      )}
    </section>
  )
}

export default memo(Projects)