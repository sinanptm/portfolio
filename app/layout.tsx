import { personSchema, siteNavigationSchema, websiteSchema } from "@/app/schema";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { firaCode, sourceCodePro } from "./fonts";
import NavBar from "@/components/layout/NavBar";
import type { RootLayoutProps } from "@/types";
import { cn } from "@/lib/utils";
import metadata from "./metadata";
import "@/style/globals.css";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";

const layout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased relative remove-scrollbar",
          firaCode.className,
          sourceCodePro.className,
        )}
        suppressHydrationWarning={true}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [personSchema, websiteSchema, siteNavigationSchema],
            }),
          }}
        />
        <HeroHighlight>
          <NavBar />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
          <Toaster />
          <Footer />
        </HeroHighlight>
        <Analytics debug={false} />
      </body>
    </html>
  );
};
export { metadata };

export default layout;