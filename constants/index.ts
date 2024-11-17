import { Project, ThingsIDo } from "@/types";
import { baseUrlTech } from "./techData";

export const profile = {
    summary: ` Self-taught MERN stack developer passionate about building scalable, efficient applications. 
              Fascinated by technology from a young age, I've continuously expanded my expertise across 
              various tools and frameworks. Committed to improving my skills, writing better code, and 
              delivering impactful solutions.`,
    gitHub: "https://github.com/sinanptm/portfolio",
    name: "Muhammed Sinan",
    gitHubUserName: "sinanptm"
};

export const socialMediaLinks = [
    { title: "LinkedIn", icon: "/assets/social/linkedin.svg", href: "https://www.linkedin.com/in/sinanptm" },
    { title: "GitHub", icon: "/assets/social/github.svg", href: "https://github.com/sinanptm" },
    { title: "Instagram", icon: "/assets/social/instagram.svg", href: "https://www.instagram.com/si_an_z" },
    { title: 'Stack Overflow', icon: '/assets/social/stackoverflow.png', href: 'https://stackoverflow.com/users/25472984/sinan' },
    { title: "Email", icon: "/assets/social/email.svg", href: "mailto:muhammedsinan0549@gmail.com@gmail.com" },
    { title: "Twitter", icon: "/assets/social/x.png", href: "https://x.com/luffy_kuns" }
    // { title: "phone", icon: "/assets/social/phone.svg", href: "tel:+8989348934" },
];

export  const quotes = [
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

/**
 * Add this indexes to your project, According technologies you used.
 */
//eslint-disable-next-line
const INDEXES = {
    "TypeScript": 0,
    "Next JS": 1,
    "Nest.js": 2,
    "React": 3,
    "Redux": 4,
    "React Query": 5,
    "Vite": 6,
    "AWS": 7,
    "Stripe": 8,
    "WebRTC": 9,
    "Socket.io": 10,
    "Google AI": 11,
    "OpenAI": 12,
    "MongoDB": 13,
    "Postgres": 14,
    "Zod": 15,
    "Clean Architecture": 16,
    "SOLID Principles": 17,
    "NodeJS": 18,
    "Express.js": 19,
    "TailwindCSS": 20,
    "Vercel": 21,
    "Firebase": 22,
    "Razorpay": 23,
    "Google Analytics": 24,
    "Vercel Analytics": 25,
    "Styled Components": 26,
    "Radix UI": 27,
    "Axios": 28,
    "JWT": 29,
    "OAuth": 30,
    "Joi": 31,
    "Winston": 32,
    "shadcn": 33,
    "Recharts": 34,
    "Prettier": 35,
    "ESLint": 36,
    "GitHub Actions": 37,
    "Nginx": 38,
    "Render": 39,
    "Cloudflare": 40,
    "V0": 41,
    "React Hook Form": 42,
    "Context-API": 43,
    "JavaScript": 44,
    "MySQL": 45,
    "Bootstrap": 46,
    "jQuery": 47,
    "NPM": 48,
    "Nodemon": 49,
    "Postman": 50,
    "Figma": 51,
    "Framer": 52,
    "PDFKit": 53,
    "Sharp": 54,
    "PDF Viewer": 55,
    "Cookies": 56,
    "EJS": 57,
    "Nuqs": 58,
    "Clodinary": 59,
    "Nextjs 15": 60,
    "React 19": 61,
    "Hostinger": 62,
    "Multer": 63
};

export const projects: Project[] = [
    {
        title: "AVM Ayurvedic: Hospital Management",
        description: "A wellness platform with AI-powered health insights and Ayurvedic consultations.",
        detailedDescription: "A comprehensive Ayurvedic platform with video consultations, secure payments, and real-time notifications. Optimized for performance with Google Lighthouse 90+ scores. The backend is designed for scalability and secure data handling using Node.js, Express.js, and MongoDB on AWS. It includes role-based authorization and is deployed frontend with Vercel, utilizing GitHub Actions for CI/CD.",
        technologies: [1, 18, 19, 13, 9, 10, 17, 20, 21, 22, 23, 24, 25, 26, 27, 62, 28, 29, 30, 31, 32, 33, 51, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        link: "http://avm-ayurvedic.online",
        githubLink: "https://github.com/sinanptm/hospital-management-system",
        showGitStats: true,
        thumbnail: "/assets/projects/avm.png",
        demoLink: "https://youtu.be/fpOPtDixtD4",
        achievements: [
            "🌟 Achieved 90+ scores on Google Lighthouse for performance.",
            "📹 Video Consultations: Global access with WebRTC and Socket.io.",
            "🔔 Notifications: Real-time alerts via Socket.io.",
            "🔐 Image Uploads: Securely managed with AWS S3 presigned URLs.",
            "📅 Appointment Booking: Streamlined scheduling with reminders.",
            "💳 Payments: Integrated Stripe for secure transactions.",
            "🤖 AI Wellness Insights: Personalized health recommendations.",
            "🌐 High-Performance Frontend: Optimized with Next.js and Vercel.",
            "🔒 Role-Based Access Control for Admin, Doctor, and Patient.",
            "📑 Prescription Management: Prescriptions Download for patients.",
            "📊 Admin Dashboard: Analytics for effective management.",
            "🛠️ Modular Architecture: Clean Architecture and SOLID principles.",
            "⚙️ Logging: Error tracking with Winston.",
            "📈 Analytics: Google and Vercel Analytics for optimization.",
            "🔄 CI/CD: Automated deployment with GitHub Actions.",
            "🖼️ SEO & Social: Open Graph and Twitter Card integration.",
            "🎨 Responsive Design: Styled with TailwindCSS and Framer Motion.",
            "🛡️ Data Validation: Schema validation with Zod and Joi.",
            "🌐 Deployed on AWS with NGINX for scalability and reliability.",
        ]
    },
    {
        title: "Trends: E-commerce Store",
        description: "A full-featured e-commerce platform with dynamic product management and payment integration.",
        detailedDescription: "Trends is an e-commerce store with secure authentication, Razorpay payment integration, and extensive product management. It has features like real-time chat for customer support, order tracking, and a comprehensive admin panel for managing products and sales reports. Deployed on AWS with NGINX for scalability and reliability.",
        technologies: [18, 19, 13, 29, 7, 44, 23, 63, 30, 62, 38, 39, 54, 57, 49, 56],
        link: "https://trendsonline.online",
        githubLink: "https://github.com/sinanptm/ecommerse-project",
        thumbnail: "/assets/projects/trends.png",
        demoLink: "https://youtu.be/8w6HqmgeDcA",
        achievements: [
            "Secure JWT-based authentication and OTP validation.",
            "Integrated Razorpay payment gateway.",
            "Comprehensive admin panel and sales tracking.",
            "Deployed on AWS with NGINX for scalability and reliability.",
            "Bootstrap for a responsive and modern UI.",
            "PDFKIT For generating invoices.",
            "Wallet for managing transactions.",
            "Fully functional Cart and Wishlist functionality.",
            "Customer support via chat."
        ]
    },
    {
        title: "Readify: Article Management Platform",
        description: "Discover, read, and manage your favorite articles effortlessly.",
        detailedDescription: "Readify is an article management platform featuring anonymous posting, theme customization, and a personalized feed. The platform is built with Next.js 15, TailwindCSS, and Radix UI, and uses MongoDB for data storage. Cloudinary handles image uploads, and JWT ensures secure access. The project is deployed on Vercel with GitHub Actions for CI/CD.",
        technologies: [60, 13, 59, 0, 61, 58, 29, 27, 15, 36, 18],
        link: "http://readify-gamma.vercel.app",
        githubLink: "https://github.com/sinanptm/readify",
        isLinkedin: true,
        thumbnail: "/assets/projects/readify.png",
        demoLink: "https://www.linkedin.com/posts/sinanptm_nuqs-statemanagement-urlpersistence-activity-7259535302615080961-F5Pf?utm_source=share&utm_medium=member_desktop",
        achievements: [
            "🕶️ Anonymous Posting: Share thoughts without an account.",
            "🎨 Theme Customization: Toggle between light and dark themes.",
            "📖 Personalized Feed: Customize your article feed.",
            "👍 Like & Share: Interact with favorite articles.",
            "🔍 Search with Debounce: Smooth, responsive searching.",
            "📸 Cloudinary Image Uploads: Effortless image management.",
            "📊 Nuqs State Management: Efficient search and pagination.",
            "🔐 JWT Authentication: Secure and private access.",
            "💻 Deployed with Vercel and GitHub Actions for CI/CD."
        ]
    },
    {
        title: "Sahithyolsav Manager",
        description: "Program management app for SSF Kerala with features for managing events and participants.",
        detailedDescription: "Developed in three days using the MERN stack, this app includes mark lists, participant management, and caching for performance boosts. The UI is optimized for fast load times, and JWT authentication ensures data security.",
        technologies: [3, 4, 19, 18, 13],
        link: "https://sahityotsav-manager.onrender.com",
        githubLink: "https://github.com/sinanptm/Program-manager",
        isLinkedin: true,
        demoLink: "https://www.linkedin.com/posts/sinanptm_mern-react-redux-activity-7220717132450254848-7bGb?utm_source=share&utm_medium=member_desktop",
        thumbnail: "/assets/projects/program-manager.png",
        achievements: [
            "Boosted performance by 70% through memoization.",
            "Smart caching reduced API calls by 80%.",
            "JWT authentication for security.",
            "Implemented mark lists and participant management.",
            "Utilized Mui Components for a smooth user experience."
        ]
    },
    {
        title: "URL Shortener",
        description: "A URL shortener with click tracking and personalized dashboards.",
        detailedDescription: "Developed with MERN stack and NestJS, this app offers URL shortening, click tracking, and personalized user dashboards. It provides experience in NestJS, focusing on modular architecture and dependency injection.",
        technologies: [2, 18, 13, 3, 21],
        link: "https://url-shortener-sooty-five.vercel.app",
        isLinkedin: true,
        githubLink: "https://github.com/sinanptm/url-shortener",
        demoLink: "https://www.linkedin.com/posts/sinanptm_nestjs-typescript-nodejs-activity-7252588020401389568-tyYv?utm_source=share&utm_medium=member_desktop",
        thumbnail: "/assets/projects/url-shortener.png",
        achievements: [
            "Implemented click tracking and user dashboards.",
            "Hands-on experience with NestJS and modular clean architecture.",
        ]
    },
    {
        title: "Ace-Quiz: Quiz App",
        description: "A quiz application built with Next.js and TypeScript following clean architecture principles.",
        detailedDescription: "This quiz app focuses on scalability and maintainable code, using tools like Radix UI and Redux for efficient state management. GitHub workflows and CI enhance deployment and testing capabilities.",
        technologies: [1, 0, 13, 4, 19, 18, 27, 33],
        link: "https://quiz-app-six-dusky.vercel.app",
        githubLink: "https://github.com/sinanptm/Quiz-app",
        thumbnail: "/assets/projects/quiz.png",
        isLinkedin: true,
        demoLink: "https://www.linkedin.com/posts/sinanptm_nextjs-typescript-cleanarchitecture-activity-7232711700452425729-J_81?utm_source=share&utm_medium=member_desktop",
        achievements: [
            "Integrated Radix UI and Redux Toolkit.",
            "Experienced with CI for deployment and testing."
        ]
    },
    {
        title: "OLX & Netflix Clones",
        description: "Clones of Netflix and OLX with real-time data and secure authentication.",
        detailedDescription: "These clones, developed using React and Firebase, showcase responsive design and real-time data. TMDb API is used in the Netflix clone for movie data, and Firebase handles authentication and image uploads for the OLX clone.",
        technologies: [3, 22],
        githubLink: "https://github.com/sinanptm/OLX-clone",
        link: "https://netflix-clone-gamma-virid.vercel.app",
        thumbnail: "/assets/projects/netflix.png",
        isLinkedin: true,
        demoLink: "https://www.linkedin.com/posts/sinanptm_reactjs-firebase-tmdb-activity-7211610477729054720-nLr1?utm_source=share&utm_medium=member_desktop",
        achievements: [
            "Integrated TMDb API for Netflix clone.",
            "Firebase for secure authentication and image uploads."
        ]
    }
];