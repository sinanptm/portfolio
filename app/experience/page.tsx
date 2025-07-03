import { Metadata } from 'next';
import Experience from '@/components/Experience';
import { canonicalUrl } from '@/constants';
import { experiencePageSchema, workExperienceSchema } from './schema';
import SchemaScripts from '@/components/SchemaScripts';

export const metadata: Metadata = {
    title: "Experience | Muhammed Sinan",
    description: "Explore my professional journey as a full-stack developer. From freelance projects to open-source contributions, see my growth and achievements.",
    openGraph: {
        title: "Experience | Muhammed Sinan",
        description: "Professional journey and achievements as a full-stack developer",
        images: [
            {
                url: "/screenshots/experience-og.png",
                width: 1200,
                height: 630,
                alt: "Professional Experience Timeline",
                type: "image/png",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Experience | Muhammed Sinan",
        description: "Professional journey and achievements as a full-stack developer",
        images: ["/screenshots/experience-og.png"],
    },
    alternates: {
        canonical: `${canonicalUrl}/experience`,
    },
};

const ExperiencePage = () => {
    return (
        <>
            <SchemaScripts schemas={[experiencePageSchema, workExperienceSchema]} />
            <Experience />
        </>
    );
};

export default ExperiencePage;