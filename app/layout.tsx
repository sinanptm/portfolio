import { getPersonSchema, getWebsiteSchema } from "@/app/schema";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { firaCode, sourceCodePro } from "./fonts";
import NavBar from "@/components/layout/NavBar";
import { RootLayoutProps } from "@/types";
import { cn } from "@/lib/utils";
import metadata from "./metadata";
import "../style/globals.css";
import "../style/search.css";

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
                getPersonSchema(),
                getWebsiteSchema()
              ]
            }, null, 2)
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
          </HeroHighlight>
          <Analytics debug={false} />
        </ThemeProvider>
      </body>
    </html>
  );
};
export { metadata };

export default layout;