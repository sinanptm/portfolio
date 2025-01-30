import { HeroHighlight } from "@/components/ui/hero-highlight";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { personSchema, websiteSchema } from "@/app/schema";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { firaCode, sourceCodePro } from "./fonts";
import NavBar from "@/components/layout/NavBar";
import { RootLayoutProps } from "@/types";
import { cn } from "@/lib/utils";
import metadata from "./metadata";
import "../style/globals.css";
import Footer from "@/components/layout/Footer";
import { memo } from "react";

const layout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          cn("bg-background antialiased relative remove-scrollbar",
            firaCode.className, sourceCodePro.className
          )}
        suppressHydrationWarning={true}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                personSchema,
                websiteSchema
              ]
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <HeroHighlight>
            <NavBar />
            {children}
            <Toaster />
            <Footer />
          </HeroHighlight>
          <Analytics debug={false} />
        </ThemeProvider>
      </body>
    </html>
  );
};
export { metadata };

export default memo(layout);