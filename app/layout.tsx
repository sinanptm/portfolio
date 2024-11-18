import { Analytics } from "@vercel/analytics/react";
import { Fira_Code, Source_Code_Pro } from 'next/font/google';
import { HeroHighlight } from "@/components/ui/hero-highlight";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/layout/NavBar";
import { RootLayoutProps } from "@/types";
import { cn } from "@/lib/utils";
import "../style/globals.css";
import metadata from "./metadata";

const firaCode = Fira_Code({ subsets: ['latin'] });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export { metadata };

const layout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={
          cn("bg-background antialiased relative remove-scrollbar",
            firaCode.className, sourceCodePro.className
          )}
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


export default layout;