import { hostedUrl } from "@/constants";
import { technologies } from "@/constants/techData";

export const stackPageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${hostedUrl}/stack#stackpage`,
  url: `${hostedUrl}/stack`,
  name: "Technology Stack",
  description: "Technologies and tools used for web development including React, Node.js, MongoDB, and more.",
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
        name: "Technology Stack",
        item: `${hostedUrl}/stack`
      }
    ]
  }
};

export const technologiesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${hostedUrl}/stack#technologies`,
  name: "Development Technologies",
  description: "Technologies and tools used for building scalable web applications",
  numberOfItems: technologies.length,
  itemListElement: technologies.map((tech, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: tech.name,
      applicationCategory: "DeveloperTool",
      description: `${tech.name} - Development tool for building web applications`
    }
  }))
};

export const skillCategoriesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${hostedUrl}/stack#skillcategories`,
  name: "Technical Skill Categories",
  description: "Categorized technical skills and expertise areas",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "DefinedTerm",
        name: "Frontend Development",
        description: "React, Next.js, TypeScript, Tailwind CSS"
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "DefinedTerm",
        name: "Backend Development",
        description: "Node.js, Express.js, NestJS, API development"
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "DefinedTerm",
        name: "Database Management",
        description: "MongoDB, PostgreSQL, MySQL, Redis"
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "DefinedTerm",
        name: "Cloud & DevOps",
        description: "AWS, Docker, GitHub Actions, CI/CD"
      }
    }
  ]
};