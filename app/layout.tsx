import { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import "../style/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Muhammed Sinan | MERN Stack Developer",
  description: "Portfolio of Muhammed Sinan, a passionate MERN stack developer building scalable and efficient web applications.",
  keywords: ["MERN", "Full Stack", "Developer", "React", "Node.js", "MongoDB", "Express.js"],
  authors: [{ name: "Muhammed Sinan" }],
  creator: "Muhammed Sinan",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={cn("bg-background font-sans antialiased relative z-0", plusJakartaSans.variable)} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Navbar />
          {children}
          <Analytics debug={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}