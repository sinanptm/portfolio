import { hostedUrl, profile } from "@/constants";

export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${hostedUrl}#person`, 
  name: profile.name,
  alternateName: "sinanptm",
  jobTitle: "Full Stack Web Developer",
  headline: "MERN Stack & Modern Web Technologies Specialist",
  description: "Innovative self-taught developer creating scalable web applications with cutting-edge technologies.",
  image: `${hostedUrl}/assets/profile-image.jpg`,
  url: hostedUrl,
  birthDate: "2005-06-02",
  nationality: "Indian",
  keywords: [
    "Web Development", "Full Stack", "JavaScript", 
    "React", "Node.js", "TypeScript"
  ],
  sameAs: [
    profile.gitHub,
    profile.linkedin,
    profile.x,
    profile.instagram
  ],
  knowsLanguage: ["Malayalam", "English"],
  knowsAbout: [
    "Web Development", "MERN Stack", 
    "TypeScript", "JavaScript", 
    "NodeJS", "ExpressJS", "Nest JS",
    "ReactJS", "Next JS", "Vite",
    "MongoDB", "Postgres", "MySQL",
    "AWS", "Docker", "Nginx", "Vercel",
    "WebRTC", "State Management", 
    "Authentication", "API Development"
  ],
  skills: [
    {
      "@type": "DefinedTerm",
      name: "Languages",
      hasDefinedTerm: ["TypeScript", "JavaScript"]
    },
    {
      "@type": "DefinedTerm", 
      name: "Backend Frameworks",
      hasDefinedTerm: ["NodeJS", "ExpressJS", "Nest JS"]
    },
    {
      "@type": "DefinedTerm",
      name: "Frontend Technologies",
      hasDefinedTerm: ["ReactJS", "Next JS", "Vite"]
    }
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance/Independent"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    addressCountry: "IN"
  }
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${hostedUrl}#website`,
  url: hostedUrl,
  name: `${profile.name} | Portfolio`,
  description: "Portfolio showcasing full stack development expertise across modern web technologies.",
  author: { "@id": `${hostedUrl}#person` },
  publisher: { "@id": `${hostedUrl}#person` },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString()
});