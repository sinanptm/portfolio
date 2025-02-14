import { hostedUrl, profile } from "@/constants";

export const personSchema = {
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
    "ReactJS", "Next JS",
    "MongoDB", "API Development"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    addressCountry: "IN"
  }
};

export const websiteSchema = {
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
};