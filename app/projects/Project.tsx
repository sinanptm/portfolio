'use client';

import { memo, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants/projects";
import { Project } from "@/types";
import ProjectModel from "../../components/project/ProjectModel";
import ProjectCard from "../../components/project/ProjectsCard";
import { containerVariants, itemVariants, textVariants } from "../../style";
import Link from "next/link";
import dynamic from "next/dynamic";

const ComputerCanvas = dynamic(() => import("../../components/3D/ComputerCanvas"), { ssr: false });

export default memo(function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  return (
    <section className="relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center absolute inset-x-0 top-0 z-10 pt-16 pb-8 bg-gradient-to-b from-background to-transparent"
      >
        <motion.h2 className="heading" variants={textVariants}>
          My Projects
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          variants={textVariants}
        >
          Explore a collection of my latest work, showcasing a diverse range of skills and technologies.
        </motion.p>
      </motion.div>
      <div className="relative w-full h-[calc(100vh-4rem)] min-h-[400px]">
        <ComputerCanvas />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeOut"
          }}
          variants={containerVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <Link href="#projects" prefetch={false} className="block">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary/50 flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-primary mb-1"
              />
            </div>
          </Link>
        </motion.div>
      </div>
      
      <div className="mx-auto px-4 py-16" id="projects">
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

      {isModalOpen && (
        <ProjectModel project={selectedProject} isOpen={isModalOpen} setOpen={setIsModalOpen} />
      )}
    </section>
  );
});