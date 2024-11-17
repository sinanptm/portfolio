import { Analytics } from "@vercel/analytics/react";
import { Fira_Code, Source_Code_Pro } from 'next/font/google';
import { HeroHighlight } from "@/components/ui/hero-highlight";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/layout/NavBar";
import { RootLayoutProps } from "@/types";
import { cn } from "@/lib/utils";
import "../style/globals.css";
import { Metadata } from "next";
import { techNames } from "@/constants/techData";

const firaCode = Fira_Code({ subsets: ['latin'] });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

const layout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={
          cn("bg-background antialiased relative remove-scrollbar",
            firaCode.className, sourceCodePro.className)}
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
  description: "Experienced Full Stack Developer specializing in MERN stack development with expertise in building high-performance, scalable web applications. Expert in React, Node.js, Express, MongoDB, Next.js, and TypeScript. Available for collaboration and exciting projects.",
  keywords: [
    "Muhammed Sinan",
    "sinanptm",
    "Full Stack Developer",
    "Sinanptm portfolio",
    "MERN Stack",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "Software Engineer",
    "Next.js Developer",
    "Portfolio",
    "Full Stack Engineer",
    "Web Applications",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "Database Design",
    "Cloud Computing",
    "REST API",
    "Responsive Design",
    "UI/UX Development",
    "portfolio template",
    ...techNames
  ],
  authors: [
    {
      name: "Muhammed Sinan",
      url: "https://github.com/sinanptm",
    }
  ],
  creator: "Muhammed Sinan (sinanptm)",
  publisher: "Muhammed Sinan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "Muhammed Sinan Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sinanptm.vercel.app",
    siteName: "Muhammed Sinan Portfolio",
    title: "Muhammed Sinan | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack development. Building scalable web applications with React, Node.js, Express, MongoDB, and Next.js.",
    images: [
      {
        url: "/screenshots/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Sinan - Full Stack Developer Portfolio",
        type: "image/png",
      }
    ],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Sinan | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack development. Building scalable web applications with React, Node.js, Express, MongoDB, and Next.js.",
    images: ["/screenshots/twitter-image.png"],
    creator: "@luffy_kuns",
    site: "@luffy_kuns",
    creatorId: "1467726470533754880",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/icons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/icons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/icons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/icons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/icons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#5bbad5"
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://sinanptm.vercel.app",
    languages: {
      "en-US": "https://sinanptm.vercel.app",
    },
  },
  category: "technology",
  classification: "Portfolio Website",
  metadataBase: new URL("https://sinanptm.vercel.app"),
};

export default layout;