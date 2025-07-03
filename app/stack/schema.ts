import { hostedUrl, profile } from "@/constants";
import { technologies } from "@/constants/techData";

export const stackPageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${hostedUrl}/stack#stackpage`,
  url: `${hostedUrl}/stack`,
  name: "Technology Stack - Muhammed Sinan",
  description: "Explore the cutting-edge technologies and tools Muhammed Sinan uses for web development including React, Node.js, MongoDB, and more.",
  mainEntity: {
    "@type": "Person",
    "@id": `${hostedUrl}#person`,
    name: profile.name,
    jobTitle: "Full Stack Developer",
    knowsAbout: technologies.map(tech => tech.name),
    hasSkill: technologies.map(tech => ({
      "@type": "DefinedTerm",
      name: tech.name,
      description: `Proficient in ${tech.name} for web development`
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
  description: "Comprehensive list of technologies and tools used by Muhammed Sinan",
  numberOfItems: technologies.length,
  itemListElement: technologies.map((tech, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: tech.name,
      applicationCategory: "DeveloperTool",
      operatingSystem: "Cross-platform",
      description: `${tech.name} - Professional development tool used for building scalable web applications`,
      author: {
        "@type": "Person",
        "@id": `${hostedUrl}#person`,
        name: profile.name
      }
    }
  }))
};

export const skillsSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${hostedUrl}/stack#skills`,
  name: profile.name,
  jobTitle: "Full Stack Developer",
  description: "Experienced developer with expertise across modern web technologies",
  hasSkill: [
    {
      "@type": "DefinedTerm",
      name: "Frontend Development",
      description: "Expert in React, Next.js, TypeScript, and modern CSS frameworks"
    },
    {
      "@type": "DefinedTerm",
      name: "Backend Development",
      description: "Proficient in Node.js, Express.js, NestJS, and API development"
    },
    {
      "@type": "DefinedTerm",
      name: "Database Management",
      description: "Experienced with MongoDB, PostgreSQL, MySQL, and Redis"
    },
    {
      "@type": "DefinedTerm",
      name: "Cloud Services",
      description: "Skilled in AWS, Firebase, Vercel, and cloud deployment"
    },
    {
      "@type": "DefinedTerm",
      name: "DevOps",
      description: "Knowledgeable in Docker, GitHub Actions, and CI/CD pipelines"
    }
  ],
  knowsLanguage: [
    {
      "@type": "Language",
      name: "JavaScript"
    },
    {
      "@type": "Language",
      name: "TypeScript"
    }
  ]
};