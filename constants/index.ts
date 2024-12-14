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


export const quotes = [
    {
        text: "Engineering scalable systems with precision and creativity.",
        subtitle: "System Design",
    },
    {
        text: "Building innovative solutions that empower businesses to grow.",
        subtitle: "Development Vision",
    },
    {
        text: "Blending code and design for intuitive digital experiences.",
        subtitle: "User-Centric Approach",
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
            { name: "NodeJS", url: `${baseUrlTech}/nodejs.svg` },
            { name: "React", url: `${baseUrlTech}/react.svg` },
            { name: "Next.js", url: `${baseUrlTech}/nextjs.svg` },
            { name: "ExpressJS", url: `${baseUrlTech}/express.svg` },
            { name: "Nest JS", url: `${baseUrlTech}/nestjs.svg` },
            { name: "WebRTC", url: `${baseUrlTech}/webrtc.svg` },
            { name: "Socket.io", url: `${baseUrlTech}/socket-io.svg` },
            { name: "Tailwind", url: `${baseUrlTech}/tailwind.svg` },
            { name: "Sass", url: `${baseUrlTech}/saas.svg` },
        ],
        capabilities: [
            { text: 'Building responsive website front end using React and NextJs', icon: '💻' },
            { text: 'Creating application backend in Node, Express & NestJs', icon: '⚙️' },
            { text: 'Writing clean and maintainable code following best practices', icon: '✨' },
        ]
    },
    {
        name: "Cloud Infra-Architecture",
        image: "/assets/images/statics.svg",
        tech: [
            { name: "AWS", url: `${baseUrlTech}/aws.svg` },
            { name: "Docker", url: `${baseUrlTech}/docker.svg` },
            { name: "Firebase", url: `${baseUrlTech}/firebase.svg` },
            { name: "MongoDB", url: `${baseUrlTech}/mongodb.svg` },
            { name: "Vercel", url: `${baseUrlTech}/vercel.svg` },
            { name: "Nginx", url: `${baseUrlTech}/nginx.svg` },
            { name: "Postgres", url: `${baseUrlTech}/postgresql.svg` },
        ],
        capabilities: [
            { text: 'Designing and managing scalable cloud infrastructure on AWS, Firebase, and Vercel', icon: '☁️' },
            { text: 'Implementing secure and efficient database solutions using MongoDB, Postgres and Nginx', icon: '🔒' },
            { text: 'Optimizing application deployment pipelines and ensuring high availability across environments', icon: '🚀' },
        ]
    }
];

