import { ThingsIDo } from "@/types";
import { baseUrlTech } from "./techData";

export const profile = {
    summary: ` Self-taught MERN stack developer passionate about building scalable, efficient applications. 
              Fascinated by technology from a young age, I've continuously expanded my expertise across 
              various tools and frameworks. Committed to improving my skills, writing better code, and 
              delivering impactful solutions.`,
    gitHub: "https://github.com/sinanptm/portfolio",
    name: "Muhammed Sinan",
    title:"Full Stack Developer",
    gitHubUserName: "sinanptm",
    xUserName: "sinanptm",
};
export const hostedUrl = "https://sinanptm.vercel.app";

export const socialMediaLinks = [
    { 
        title: "LinkedIn", 
        icon: "/assets/social/linkedin.svg", 
        href: "https://www.linkedin.com/in/sinanptm",  
        smLabel: "LN", 
    },
    { 
        title: "GitHub", 
        icon: "/assets/social/github.svg", 
        href: "https://github.com/sinanptm",  
        smLabel: "GH", 
    },
    { 
        title: 'Stack Overflow', 
        icon: '/assets/social/stackoverflow.png', 
        href: 'https://stackoverflow.com/users/25472984/sinan', 
        smLabel: "SO",
    },
    { 
        title: "LeetCode", 
        icon: "/assets/social/leetcode.jpg", 
        href: "https://leetcode.com/u/Sinan_z", 
        smLabel: "LC", 
    },
    { 
        title: "Email", 
        icon: "/assets/social/email.svg", 
        href: "mailto:muhammedsinan0549@gmail.com", 
        smLabel: "EM", 
    },
    { 
        title: "Twitter", 
        icon: "/assets/social/x.png", 
        href: "https://x.com/sinanptm", 
        smLabel: "TW", 
    },
];



export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/open-source", label: "Open Source" },
    { href: "/stack", label: "Stack" },
    { href: "/contact", label: "Contact Me" },
];

export const openSourceOrganizations = [
    { name: "Impler", url: "https://impler.io", logo: "/assets/org/impler.png" },
    { name: "Strapi", url: "https://strapi.io", logo: "/assets/org/strapi.png" },
    { name: "Origin Ui", url: "https://originui.com", logo: "/assets/org/origin.ico" }
];


export const thingsIDo: ThingsIDo[] = [
    {
        name: "Full Stack Development",
        image: "/assets/images/fullstack.svg",
        tech: [
            { name: "TypeScript", url: `${baseUrlTech}/typescript.svg` },
            { name: "React", url: `${baseUrlTech}/react.svg` },
            { name: "Next.js", url: `${baseUrlTech}/nextjs.svg` },
            { name: "NodeJS", url: `${baseUrlTech}/nodejs.svg` },
            { name: "Nest JS", url: `${baseUrlTech}/nestjs.svg` },
            { name: "Redux", url: `${baseUrlTech}/redux.svg` },
            { name: "React Query", url: `${baseUrlTech}/react-query.svg` },
            { name: "Tailwind", url: `${baseUrlTech}/tailwind.svg` },
            { name: "Shadcn", url: `${baseUrlTech}/shadcn.svg` },
            { name: "WebRTC", url: `${baseUrlTech}/webrtc.svg` },
        ],
        capabilities: [
            { text: 'Developing modern web applications with React, Next.js, and TypeScript', icon: '💻' },
            { text: 'Building robust backend services with Node.js and NestJS', icon: '⚙️' },
            { text: 'Implementing real-time features using WebRTC and state management', icon: '🔄' },
        ]
    },
    {
        name: "Cloud Architecture & Database Management",
        image: "/assets/images/statics.svg",
        tech: [
            { name: "AWS", url: `${baseUrlTech}/aws.svg` },
            { name: "Firebase", url: `${baseUrlTech}/firebase.svg` },
            { name: "MongoDB", url: `${baseUrlTech}/mongodb.svg` },
            { name: "Postgres", url: `${baseUrlTech}/postgresql.svg` },
            { name: "Redis", url: `${baseUrlTech}/redis.png` },
            { name: "Vercel", url: `${baseUrlTech}/vercel.svg` },
            { name: "Cloudinary", url: `${baseUrlTech}/cloudinary.png` },
            { name: "Nginx", url: `${baseUrlTech}/nginx.svg` },
        ],
        capabilities: [
            { text: 'Designing scalable cloud infrastructure and database architectures', icon: '☁️' },
            { text: 'Implementing caching strategies with Redis and performance optimization', icon: '⚡' },
            { text: 'Managing data storage solutions across SQL and NoSQL databases', icon: '💾' },
        ]
    },
    {
        name: "DevOps & Quality Assurance",
        image: "/assets/images/devops.svg",
        tech: [
            { name: "Docker", url: `${baseUrlTech}/docker.svg` },
            { name: "GitHub Actions", url: `${baseUrlTech}/github-action.svg` },
            { name: "Jest", url: `${baseUrlTech}/jest.png` },
            { name: "ESLint", url: `${baseUrlTech}/eslint.svg` },
            { name: "Prettier", url: `${baseUrlTech}/prettier.svg` },
            { name: "PM2", url: `${baseUrlTech}/pm2.png` },
            { name: "Winston", url: `${baseUrlTech}/winston.svg` },
            { name: "Postman", url: `${baseUrlTech}/postman.svg` },
        ],
        capabilities: [
            { text: 'Implementing CI/CD pipelines with Docker and GitHub Actions', icon: '🔄' },
            { text: 'Writing comprehensive test suites using Jest and maintaining code quality', icon: '✅' },
            { text: 'Managing application logging, monitoring, and deployment processes', icon: '📊' },
        ]
    }
];