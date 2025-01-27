import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types";
import AnimatedTooltip from "../AnimatedTooltip";
import { useTooltip } from "../../hooks/useTooltip";
import { imageVariants, titleVariants, buttonVariants } from "../../style";
import { memo } from "react";
import ProjectButton from "@/components/project/Button";
import { cn } from "@/lib/utils";
import { buttonBaseStyles } from "@/style";
import TechnologyIcon from "./Technologies";

type ProjectCardProps = {
  project: Project;
  onViewDetails: (project: Project) => void;
};

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const { hoveredItem, rotate, translateX, handleHover, handleMouseMove } = useTooltip();

  return (
    <div className="rounded-xl group/bento hover:shadow-xl transition duration-300 shadow-input dark:shadow-none p-4 bg-black flex flex-col h-full">
      <motion.div className="overflow-hidden rounded-md mb-4" initial="rest" whileHover="hover" animate="rest">
        <motion.div variants={imageVariants}>
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            height={200}
            width={300}
            className="w-full h-44 md:h-56 object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col flex-grow">
        <motion.h3
          className="font-sans font-bold text-lg text-primary mb-2"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={titleVariants}
        >
          {project.title}
        </motion.h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((techIndex, index) => (
              <TechnologyIcon key={index} techIndex={techIndex} />
            ))}
            {project.technologies.length > 3 && (
              <button
                onClick={() => onViewDetails(project)}
                className="text-xs text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                Show all..
              </button>
            )}

          </div>
        </div>
        <motion.div className="flex flex-wrap gap-x-2 gap-y-2" initial="rest" whileHover="hover" animate="rest">
          {project.link && (
            <ProjectButton
              href={project.link}
              handleMouseMove={handleMouseMove}
              icon="/assets/social/world.svg"
              text="Live"
              onMouseEnter={() => handleHover("live")}
              onMouseLeave={() => handleHover(null)}
            >
              <AnimatedTooltip
                show={hoveredItem === "live"}
                text={project.link}
                rotate={rotate}
                translateX={translateX}
              />
            </ProjectButton>
          )}
          <ProjectButton
            handleMouseMove={handleMouseMove}
            href={project.githubLink}
            icon="/assets/social/github.svg"
            text="GitHub"
            onMouseEnter={() => handleHover("github")}
            onMouseLeave={() => handleHover(null)}
          >
            <AnimatedTooltip
              show={hoveredItem === "github"}
              text={project.githubLink}
              rotate={rotate}
              translateX={translateX}
            />
          </ProjectButton>
          {project.demoLink && (
            <ProjectButton
              handleMouseMove={handleMouseMove}
              href={project.demoLink}
              icon={`${project.isLinkedin ? "/assets/social/linkedin.svg" : "/assets/social/youtube.svg"}`}
              text="Demo"
              onMouseEnter={() => handleHover("demo")}
              onMouseLeave={() => handleHover(null)}
            >
              <AnimatedTooltip
                show={hoveredItem === "demo"}
                text={project.demoLink}
                rotate={rotate}
                translateX={translateX}
              />
            </ProjectButton>
          )}
          <motion.div variants={buttonVariants}>
            <button
              onClick={() => onViewDetails(project)}
              className={cn(buttonBaseStyles, "transition-colors duration-300 hover:bg-gray-600 hover:text-slate-500")}
            >
              <Image width={10} height={10} src="/assets/icons/info.svg" alt="Info" className="w-3 h-3 mr-1" />
              More Details
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(ProjectCard)

