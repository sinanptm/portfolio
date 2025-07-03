import { hostedUrl, profile, socialMediaLinks } from "@/constants";

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${hostedUrl}/contact#contactpage`,
  url: `${hostedUrl}/contact`,
  name: "Contact Muhammed Sinan",
  description: "Get in touch with Muhammed Sinan for web development projects, collaborations, or any inquiries.",
  mainEntity: {
    "@type": "Person",
    "@id": `${hostedUrl}#person`,
    name: profile.name,
    jobTitle: "Full Stack Developer",
    email: "sinan@codecords.com",
    telephone: "+91-XXXXXXXXXX", // Add your phone number if you want to include it
    url: hostedUrl,
    sameAs: socialMediaLinks.map(link => link.href),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional Inquiries",
      email: "sinan@codecords.com",
      availableLanguage: ["English"],
      areaServed: "Worldwide"
    }
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
        name: "Contact",
        item: `${hostedUrl}/contact`
      }
    ]
  }
};

export const contactFormSchema = {
  "@context": "https://schema.org",
  "@type": "WebForm",
  "@id": `${hostedUrl}/contact#contactform`,
  name: "Contact Form",
  description: "Contact form to reach out to Muhammed Sinan for professional inquiries",
  url: `${hostedUrl}/contact`,
  target: {
    "@type": "EntryPoint",
    urlTemplate: `${hostedUrl}/contact`,
    httpMethod: "POST"
  },
  potentialAction: {
    "@type": "CommunicateAction",
    target: {
      "@type": "Person",
      name: profile.name,
      email: "sinan@codecords.com"
    }
  }
};