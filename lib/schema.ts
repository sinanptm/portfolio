import { hostedUrl, profile } from "@/constants";

export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${hostedUrl}#person`, 
  name: profile.name,
  alternateName: "sinanptm",
  jobTitle: profile.title,
  description: profile.summary,
  image: `${hostedUrl}/assets/profile-image.jpg`,
  url: hostedUrl,
  sameAs: [
    profile.gitHub,
    profile.linkedin,
    profile.x
  ],
  knowsAbout: [
    "Web Development",
    "MERN Stack",
    "React.js",
    "Node.js",
    "MongoDB",
    "Nest.js",
    "Express.js",
    "Next.js",
    "JavaScript",
    "TypeScript"
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance/Independent"
  },
  nationality: "Indian",
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
  description: "Full Stack Developer specializing in MERN stack development. Building scalable web applications with React, Node.js, Express, MongoDB, and Next.js.",
  author: {
    "@id": `${hostedUrl}#person`
  },
  publisher: {
    "@id": `${hostedUrl}#person`
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString(),
  audience: {
    "@type": "Audience",
    audienceType: [
      "General Public",
      "Developers",
      "Students",
      "Professionals",
      "Businesses",
      "Employers",
      "Collaborators",
      "Tech Community"
    ]
  },
  offers: {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0",
    "priceCurrency": "USD"
  }
});