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
    showGitStats?: true;
}

export interface Tech {
    name: string;
    url: string;
}

export interface RootLayoutProps {
    readonly children: React.ReactNode;
}

export type ProjectModelProps = {
    project: Project | null;
    isOpen: boolean;
    setOpen: (open: boolean) => void;
};

export type GitHubStats = {
    stars: number;
    forks: number;
    openIssues: number;
    closedIssues: number;
    pullRequests: number;
};

export interface GitHubError {
    message: string;
    documentation_url?: string;
}

export type ThingsIDo = {
    name: string;
    image: string;
    tech: Tech[],
    capabilities: {
        text: string;
        icon: string;
    }[];
};

export type ChartDataType = {
    status: string;
    count: number;
    fill: string;
  }[];