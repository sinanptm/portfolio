import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Fira_Code, Source_Code_Pro } from 'next/font/google';
import { HeroHighlight } from "@/components/ui/hero-highlight";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/layout/NavBar";
import { RootLayoutProps } from "@/types";
import { cn } from "@/lib/utils";
import "../style/globals.css";

const firaCode = Fira_Code({ subsets: ['latin'] });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

const layout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={cn("bg-background antialiased relative remove-scrollbar", firaCode.className, sourceCodePro.className)}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <HeroHighlight>
            <NavBar />
            {children}
            <Toaster />
          </HeroHighlight>
          <Analytics debug={false} />
        </ThemeProvider>
      </body>
    </html>
  );

};


export const metadata: Metadata = {
  title: {
    default: "Muhammed Sinan | Full Stack Developer",
    template: "%s | Muhammed Sinan",
  },
  description: "Full Stack Developer specializing in MERN stack development. Building scalable web applications with React, Node.js, Express, MongoDB, and Next.js. Known as sinanptm on GitHub and LinkedIn.",
  keywords: [
    "Muhammed Sinan",
    "sinanptm",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "Software Engineer",
    "Next.js Developer",
    "MongoDB",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Full Stack Engineer",
  ],
  authors: [
    {
      name: "Muhammed Sinan",
      url: "https://github.com/sinanptm",
    }
  ],
  creator: "Muhammed Sinan sinanptm",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sinanptm.vercel.app",
    siteName: "Muhammed Sinan Portfolio",
    title: "Muhammed Sinan | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack development. Building scalable web applications with React, Node.js, Express, MongoDB, and Next.js. Known as sinanptm on Social medias.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Sinan - Full Stack Developer Portfolio",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
    ],
    apple: [
      { url: "/favicon.png" },
    ],
  },
  alternates: {
    canonical: "https://sinanptm.vercel.app",
  },
  metadataBase: new URL("https://sinanptm.vercel.app"),
};


export default layout;