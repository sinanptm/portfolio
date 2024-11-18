import Project from './Project';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects. From full-stack applications to responsive websites, see how I solve real-world problems with code.",
  openGraph: {
      title: "Projects | Muhammed Sinan",
      description: "Portfolio of innovative web development projects built with modern technologies",
      images: [
          {
              url: "/screenshots/projects-og.png",
              width: 1200,
              height: 630,
              alt: "Featured Projects Portfolio",
              type: "image/png",
          }
      ],
  },
  twitter: {
      card: "summary_large_image",
      title: "Projects | Muhammed Sinan",
      description: "Portfolio of innovative web development projects built with modern technologies",
      images: ["/screenshots/projects-og.png"],
  }
};

const page = () => {
  return (
    <Project />
  )
}

export default page