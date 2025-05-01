import { ThingsIDo } from "@/types";
import { baseUrlTech } from "./techData";

export const profile = {
  summary: ` Self-taught MERN stack developer passionate about building scalable, efficient applications. 
              Fascinated by technology from a young age, I've continuously expanded my expertise across 
              various tools and frameworks. Committed to improving my skills, writing better code, and 
              delivering impactful solutions.`,
  gitHub: "https://github.com/sinanptm/portfolio",
  name: "Muhammed Sinan",
  title: "Full Stack Developer",
  gitHubUserName: "sinanptm",
  xUserName: "sinanptm",
  linkedin: 'https://www.linkedin.com/in/sinanptm',
  x: 'https://x.com/sinanptm',
  instagram: "https://www.instagram.com/si_an_z"
};
export const hostedUrl = "https://muhammedsinan.space";
export const canonicalUrl = "https://muhammedsinan.space";

export const TYPEWRITER_WORDS = [
  { text: "I" },
  { text: "Build" },
  { text: "Innovative" },
  { text: "Digital" },
  { text: "Solutions" },
  { text: "With" },
  { text: "Precision" },
  { text: "And" },
  { text: "Passion" },
  { text: "!" }
];


export const socialMediaLinks = [
  {
    title: 'LinkedIn',
    icon: '/assets/social/linkedin.svg',
    href: 'https://www.linkedin.com/in/sinanptm',
    smLabel: 'LN',
  },
  {
    title: 'GitHub',
    icon: '/assets/social/github.svg',
    href: 'https://github.com/sinanptm',
    smLabel: 'GH',
  },
  {
    title: 'Stack Overflow',
    icon: '/assets/social/stackoverflow.png',
    href: 'https://stackoverflow.com/users/25472984/sinan',
    smLabel: 'SO',
  },
  {
    title: 'LeetCode',
    icon: '/assets/social/leetcode.jpg',
    href: 'https://leetcode.com/u/Sinan_z',
    smLabel: 'LC',
  },
  {
    title: 'Email',
    icon: '/assets/social/email.svg',
    href: 'mailto:muhammedsinan0549@gmail.com',
    smLabel: 'EM',
  },
  {
    title: 'Twitter',
    icon: '/assets/social/x.png',
    href: 'https://x.com/sinanptm',
    smLabel: 'TW',
  }
];


export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/open-source", label: "Open Source" },
  { href: "/experience", label: "Experience" },
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

export const CSS_ANIMATIONS = `
  @keyframes ripple {
    0% {
      transform: scale(0.8);
      opacity: 0.7;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .animate-ripple {
    animation: ripple 0.8s ease-out;
  }
  
  @keyframes breathe {
    0%, 100% {
      box-shadow: 0 0 15px 5px rgba(139, 92, 246, 0.4);
    }
    50% {
      box-shadow: 0 0 25px 10px rgba(139, 92, 246, 0.6), 0 0 35px 15px rgba(79, 70, 229, 0.3);
    }
  }

  @keyframes breathe-unfocused {
    0%, 100% {
      box-shadow: 0 0 10px 3px rgba(139, 92, 246, 0.2);
    }
    50% {
      box-shadow: 0 0 15px 5px rgba(139, 92, 246, 0.3), 0 0 25px 10px rgba(79, 70, 229, 0.15);
    }
  }
  
  .keyboard-glow {
    animation: breathe 3s infinite ease-in-out;
    animation-play-state: running !important;
  }

  .keyboard-glow-unfocused {
    animation: breathe-unfocused 4s infinite ease-in-out;
    animation-play-state: running !important;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(10px) scale(0.95);
    }
    20% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    80% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
  }

  .key-popup-animation {
    animation: appear 2s ease-in-out;
  }

  @keyframes key-press {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(1px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .key-press-animation {
    animation: key-press 0.15s ease-in-out;
  }

  @keyframes color-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .color-shift-animation {
    background: linear-gradient(90deg,
      rgba(139, 92, 246, 0.7),
      rgba(79, 70, 229, 0.7),
      rgba(59, 130, 246, 0.7),
      rgba(139, 92, 246, 0.7));
    background-size: 300% 100%;
    animation: color-shift 3s infinite ease-in-out;
  }
`;

// Audio file path
export const AUDIO_SRC = "/keyboardpress.mp3";

// Timing constants
export const KEY_PRESS_DURATION = 150;

// Keyboard theme
export const KEYBOARD_THEME = {
  // Multi-color gradient with purple as the primary color
  keyGradient: "from-purple-800 via-indigo-800 to-violet-900",
  hoverKeyGradient: "from-purple-700 via-indigo-700 to-violet-800",
  glowColor: "rgba(139, 92, 246, 0.5)",
  unfocusedGlowColor: "rgba(139, 92, 246, 0.2)"
};
