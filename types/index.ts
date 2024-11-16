export interface Project {
    title: string;
    description: string;
    detailedDescription: string;
    technologies: number[];
    link: string;
    githubLink: string;
    thumbnail: string;
    demoLink: string;
    achievements: string[];
    isLinkedin?: boolean;
}

export interface Tech {
    name: string;
    url: string;
}

export interface RootLayoutProps {
    readonly children: React.ReactNode;
}
