'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image";
import { projects } from "@/constants";


export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.section 
      className="mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-semibold text-purple-400 mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-700/50 text-purple-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {project.achievements && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.features && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">Features</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-start space-x-4">
                {project.liveLink && (
                  <Button asChild variant="outline" className="text-gray-300 hover:text-purple-400 hover:border-purple-400">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Image src={'/assets/world.svg'} alt="Live" width={13} height={13} className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                )}
                {project.githubLink && (
                  <Button asChild variant="outline" className="text-gray-300 hover:text-purple-400 hover:border-purple-400">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Image src={'/assets/github.svg'} alt="Live" width={13} height={13} className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
                {project.demoLink && (
                  <Button asChild variant="outline" className="text-gray-300 hover:text-purple-400 hover:border-purple-400">
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <Image src={'/assets/youtube.svg'} alt="Live" width={13} height={13} className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}