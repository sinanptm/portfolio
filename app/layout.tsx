import { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import "../style/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Muhammed Sinan | MERN Stack Developer",
  description: "Portfolio of Muhammed Sinan (sinanptm), a passionate MERN stack developer building scalable and efficient web applications.",
  keywords: ["MERN", "Full Stack", "Developer", "React", "Node.js", "MongoDB", "Express.js", "MERN Stack Developer", "Muhammed Sinan", "sinanptm", "portfolio", "Nextjs portfolio"],
  authors: [{ name: "Muhammed Sinan" }],
  creator: "Muhammed Sinan",
  icons: {
    icon: "/favicon.png",
  }
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
          </HeroHighlight>
          <Analytics debug={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}