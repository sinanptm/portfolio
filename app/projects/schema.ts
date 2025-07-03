import { hostedUrl, profile } from "@/constants";
import { projects } from "@/constants/projects";
import { skills } from "@/constants/techData";

export const projectsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${hostedUrl}/projects#projectspage`,
  url: `${hostedUrl}/projects`,
  name: "Projects Portfolio - Muhammed Sinan",
  description: "Explore Muhammed Sinan's portfolio of web development projects, featuring full-stack applications, responsive websites, and innovative solutions.",
  mainEntity: {
    "@type": "ItemList",
    "@id": `${hostedUrl}/projects#projectslist`,
    name: "Web Development Projects",
    description: "Collection of projects showcasing full-stack development expertise",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        "@id": `${hostedUrl}/projects#project-${index}`,
        name: project.title,
        description: project.description,
        url: project.link || project.githubLink,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
        author: {
          "@type": "Person",
          "@id": `${hostedUrl}#person`,
          name: profile.name
        },
        programmingLanguage: project.technologies.map(techIndex => skills[techIndex]?.name).filter(Boolean),
        codeRepository: project.githubLink,
        screenshot: `${hostedUrl}${project.thumbnail}`,
        featureList: project.achievements?.slice(0, 5) || [],
        dateCreated: "2023",
        license: "MIT"
      }
    }))
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: hostedUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${hostedUrl}/projects`
      }
    ]
  }
};

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${hostedUrl}/projects#portfolio`,
  name: "Muhammed Sinan's Development Portfolio",
  description: "A comprehensive portfolio showcasing full-stack web development projects and technical expertise",
  creator: {
    "@type": "Person",
    "@id": `${hostedUrl}#person`,
    name: profile.name
  },
  about: [
    "Full Stack Development",
    "MERN Stack",
    "Web Applications",
    "React Development",
    "Node.js Development",
    "Database Design",
    "API Development"
  ],
  keywords: [
    "portfolio",
    "web development",
    "full stack",
    "MERN stack",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js"
  ]
};