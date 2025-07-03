import { hostedUrl } from "@/constants";
import { projects } from "@/constants/projects";
import { skills } from "@/constants/techData";

export const projectsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${hostedUrl}/projects#projectspage`,
  url: `${hostedUrl}/projects`,
  name: "Projects Portfolio",
  description: "Portfolio of web development projects featuring full-stack applications and innovative solutions.",
  mainEntity: {
    "@type": "ItemList",
    "@id": `${hostedUrl}/projects#projectslist`,
    name: "Web Development Projects",
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
        programmingLanguage: project.technologies.map(techIndex => skills[techIndex]?.name).filter(Boolean),
        codeRepository: project.githubLink,
        screenshot: `${hostedUrl}${project.thumbnail}`,
        featureList: project.achievements?.slice(0, 5) || []
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