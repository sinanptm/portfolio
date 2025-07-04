import { hostedUrl, openSourceOrganizations } from "@/constants";

export const openSourcePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${hostedUrl}/open-source#opensourcepage`,
  url: `${hostedUrl}/open-source`,
  name: "Open Source Contributions",
  gitHubUrl: "https://github.com/sinanptm",
  description: "Contributions to open source projects and collaboration with the developer community.",
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
  name: "Open Source Organizations",
  description: "Organizations and projects contributed to in the open source community",
  numberOfItems: openSourceOrganizations.length,
  itemListElement: openSourceOrganizations.map((org, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Organization",
      name: org.name,
      url: org.url,
      logo: `${hostedUrl}${org.logo}`,
      description: `Open source contribution to ${org.name}`
    }
  }))
};