import { hostedUrl, profile, openSourceOrganizations } from "@/constants";

export const openSourcePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${hostedUrl}/open-source#opensourcepage`,
  url: `${hostedUrl}/open-source`,
  name: "Open Source Contributions - Muhammed Sinan",
  description: "Explore Muhammed Sinan's contributions to open source projects and collaboration with the developer community.",
  mainEntity: {
    "@type": "Person",
    "@id": `${hostedUrl}#person`,
    name: profile.name,
    jobTitle: "Full Stack Developer",
    knowsAbout: [
      "Open Source Development",
      "Community Collaboration",
      "Code Contribution",
      "Software Development",
      "GitHub",
      "Pull Requests",
      "Issue Resolution"
    ]
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
        name: "Open Source",
        item: `${hostedUrl}/open-source`
      }
    ]
  }
};

export const contributionsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${hostedUrl}/open-source#contributions`,
  name: "Open Source Contributions",
  description: "List of organizations and projects Muhammed Sinan has contributed to",
  numberOfItems: openSourceOrganizations.length,
  itemListElement: openSourceOrganizations.map((org, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Organization",
      name: org.name,
      url: org.url,
      logo: `${hostedUrl}${org.logo}`,
      description: `Open source contribution to ${org.name}`,
      contributor: {
        "@type": "Person",
        "@id": `${hostedUrl}#person`,
        name: profile.name
      }
    }
  }))
};

export const developerProfileSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${hostedUrl}/open-source#developer`,
  name: profile.name,
  jobTitle: "Open Source Contributor",
  description: "Active contributor to open source projects with expertise in web development and community collaboration",
  url: hostedUrl,
  sameAs: [
    profile.gitHub,
    profile.linkedin
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Open Source Development",
    "Community Building",
    "Code Review",
    "Documentation"
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationLocation: {
      "@type": "Place",
      name: "Remote"
    },
    skills: [
      "Open Source Contribution",
      "Pull Request Management",
      "Issue Resolution",
      "Code Documentation",
      "Community Engagement"
    ]
  }
};