import { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import "../style/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammed Sinan (sinanptm) | Full Stack Developer",
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
  creator: "Muhammed Sinan (sinanptm)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sinanptm.vercel.app",
    siteName: "Muhammed Sinan Portfolio",
    title: "Muhammed Sinan (sinanptm) | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack development. Building scalable web applications with React, Node.js, Express, MongoDB, and Next.js. Known as sinanptm on GitHub and LinkedIn.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Sinan (sinanptm) - Full Stack Developer Portfolio",
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

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={cn("bg-background antialiased relative remove-scrollbar", plusJakartaSans.variable)} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <HeroHighlight>
            <NavMenu />
            {children}
            <Footer />
            <Toaster />
          </HeroHighlight>
          <Analytics debug={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}