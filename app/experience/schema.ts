import { hostedUrl, profile } from "@/constants";
import { timelineData } from "@/constants/timeline";

export const experiencePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${hostedUrl}/experience#experiencepage`,
  url: `${hostedUrl}/experience`,
  name: "Professional Experience - Muhammed Sinan",
  description: "Explore Muhammed Sinan's professional journey as a full-stack developer, including work experience, achievements, and career growth.",
  mainEntity: {
    "@type": "Person",
    "@id": `${hostedUrl}#person`,
    name: profile.name,
    jobTitle: "Full Stack Developer",
    worksFor: timelineData.map(experience => ({
      "@type": "Organization",
      name: experience.company,
      employee: {
        "@type": "Person",
        name: profile.name,
        jobTitle: experience.title,
        startDate: experience.duration.start,
        endDate: experience.duration.end === "Present" ? new Date().toISOString().split('T')[0] : experience.duration.end
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
        name: "Experience",
        item: `${hostedUrl}/experience`
      }
    ]
  }
};

export const workExperienceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${hostedUrl}/experience#workexperience`,
  name: "Work Experience",
  description: "Professional work experience of Muhammed Sinan",
  numberOfItems: timelineData.length,
  itemListElement: timelineData.map((experience, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Role",
      roleName: experience.title,
      startDate: experience.duration.start,
      endDate: experience.duration.end === "Present" ? new Date().toISOString().split('T')[0] : experience.duration.end,
      description: experience.description,
      worksFor: {
        "@type": "Organization",
        name: experience.company
      },
      employee: {
        "@type": "Person",
        "@id": `${hostedUrl}#person`,
        name: profile.name
      }
    }
  }))
};