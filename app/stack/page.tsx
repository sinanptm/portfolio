import { Metadata } from "next";
import Stack from "../../components/Stack";
import { canonicalUrl } from "@/constants";
import { stackPageSchema, technologiesSchema, skillsSchema } from './schema';

export const metadata: Metadata = {
  title: "Technology Stack",
  description: "Explore the cutting-edge technologies and tools I use for web development including React, Node.js, MongoDB, and more. See how I create efficient, scalable applications.",
  openGraph: {
    title: "Technology Stack | Muhammed Sinan",
    description: "Discover the modern tech stack and development tools I use to build powerful web applications",
    images: [
      {
        url: "/screenshots/stack-og.png",
        width: 1200,
        height: 630,
        alt: "Technology Stack Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Stack | Muhammed Sinan",
    description: "Discover the modern tech stack and development tools I use to build powerful web applications",
    images: ["/screenshots/stack-og.png"],
  },
  alternates:{
    canonical: `${canonicalUrl}/stack`
  }
};

const StackPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [stackPageSchema, technologiesSchema, skillsSchema],
          }),
        }}
      />
      <Stack />
    </>
  );
};

export default StackPage;