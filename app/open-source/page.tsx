import { Metadata } from "next";
import OpenSource from "./OpenSource";
import { hostedUrl } from "@/constants";

export const metadata: Metadata = {
    title: "Open Source",
    description: "Check out my contributions to open source projects. See how I collaborate with the developer community and share code for public benefit.",
    openGraph: {
        title: "Open Source Contributions | Muhammed Sinan",
        description: "Exploring my open source journey and contributions to the developer community",
        images: [
            {
                url: "/screenshots/opensource-og.png.png",
                width: 1200,
                height: 630,
                alt: "Open Source Contributions",
                type: "image/png",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Open Source Contributions | Muhammed Sinan",
        description: "Exploring my open source journey and contributions to the developer community",
        images: ["/screenshots/opensource-og.png.png"],
    },
    alternates: {
        canonical:  `${hostedUrl}/open-source`,
      },
};


const OpenSourcePage = () => <OpenSource />;


export default OpenSourcePage;