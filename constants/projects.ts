import { Project } from "@/types";

/**
 * Add these indexes to your project according to technologies you used.
 */
//eslint-disable-next-line
const INDEXES = {
    "TypeScript": 0,
    "Next.js": 1,
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
    "PostgreSQL": 14,
    "Zod": 15,
    "Clean Architecture": 16,
    "SOLID Principles": 17,
    "Node.js": 18,
    "Express.js": 19,
    "Tailwind CSS": 20,
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
    "Shadcn UI": 33,
    "Recharts": 34,
    "Prettier": 35,
    "ESLint": 36,
    "GitHub Actions": 37,
    "Nginx": 38,
    "Render": 39,
    "Cloudflare": 40,
    "V0": 41,
    "React Hook Form": 42,
    "Context API": 43,
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
    "Cloudinary": 59,
    "Next.js 15": 60,
    "React 19": 61,
    "Hostinger": 62,
    "Multer": 63,
    "Jest": 64,
    "Redis": 65,
    "Passport": 66,
    "Geolocation": 67,
    "Framer Motion": 68,
    "Chalk": 69,
    "Commander": 70,
    "Execa": 71,
    "Inquirer": 71,
    "Ora": 73,
    "Lucide Icons": 74,
    "Zustand": 75,
    "Inversify": 76,
    "bcryptjs": 77,
    "Nodemailer": 78,
};

export const projects: Project[] = [
    {
        title: "Full Stack Authentication Template",
        description: "A production-ready authentication system with clean architecture, featuring multi-factor authentication, OAuth, and role-based access control.",
        detailedDescription: "A comprehensive full-stack authentication template built with clean architecture principles, offering robust user authentication and authorization. It includes multi-factor authentication with OTP, Google and GitHub OAuth, and role-based access control for user and admin roles. The system is optimized for scalability with MongoDB, Redis caching, and a modular TypeScript-based stack. Deployed on Vercel and AWS with automated CI/CD pipelines using GitHub Actions.",
        technologies: [
            0,  // TypeScript
            18, // Node.js
            19, // Express.js
            1,  // Next.js
            13, // MongoDB
            76, // Inversify
            16, // Clean Architecture
            17, // SOLID Principles
            20, // Tailwind CSS
            75, // Zustand
            77, // bcryptjs
            78, // Nodemailer
            27, // Radix UI
            5,  // React Query
            15, // Zod
            21, // Vercel
            22, // Firebase
            29, // JWT
            31, // Joi
            32, // Winston
            33, // Shadcn UI
            35, // Prettier
            36, // ESLint
            37, // GitHub Actions
            42, // React Hook Form
            49, // Nodemon
            61, // React 19
            64, // Jest
            68, // Framer Motion
            74, // Lucide Icons
        ],
        link: "https://full-stack-clean-auth-template.vercel.app",
        githubLink: "https://github.com/sinanptm/fullstack-clean-auth-template",
        thumbnail: "/assets/projects/auth-template.jpeg",
        demoLink: "https://www.linkedin.com/posts/sinanptm_webdevelopment-opensource-nextjs-activity-7340757181467607043-1qZd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ-UEEBRMD-TDWuU0pd3KhZH3Ti1MlQ-nU",
        isLinkedin: true,
        showGitStats: true,
        achievements: [
            "🔐 MFA with email/password and OTP verification.",
            "🌐 Google/GitHub OAuth with Firebase for secure login.",
            "👥 RBAC with JWT for secure user/admin routes.",
            "🛠️ Clean, modular architecture with independent logic.",
            "📱 Responsive UI with Next.js 15 and Tailwind CSS.",
            "🔄 Automated CI/CD using GitHub Actions.",
            "🛡️ Security features including rate limiting, etc.",
            "📊 Admin dashboard with comprehensive system analytics and insights.",
            "🚀 Scalable deployment on Vercel for frontend and AWS with Nginx.",
            "🧪 Comprehensive Jest unit and integration tests for reliability.",
            "📧 Nodemailer for sending OTP and password reset email notifications.",
            "🔍 End-to-end TypeScript for robust type safety across the stack.",
            "🌟 Earned 30+ GitHub stars and strong social media recognition."
        ]
    },
    {
        title: "AVM Ayurvedic: Hospital Management",
        description: "A wellness platform with AI-powered health insights, video consultations, and secure payment processing.",
        detailedDescription: "A comprehensive Ayurvedic platform with video consultations, secure payments, and real-time notifications. Optimized for performance with Google Lighthouse 90+ scores. The backend is designed for scalability and secure data handling using Node.js, Express.js, and MongoDB on AWS. It includes role-based authorization and is deployed frontend with Vercel, utilizing GitHub Actions for CI/CD.",
        technologies: [1, 18, 19, 13, 9, 10, 68, 17, 20, 21, 22, 23, 24, 25, 26, 27, 61, 28, 29, 30, 31, 32, 33, 51, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
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
        description: "A full-featured e-commerce platform with dynamic product management and secure payment integration.",
        detailedDescription: "Trends is an e-commerce store with secure authentication, Razorpay payment integration, and extensive product management. It has features like real-time chat for customer support, order tracking, and a comprehensive admin panel for managing products and sales reports. Deployed on AWS with NGINX for scalability and reliability.",
        technologies: [18, 19, 13, 29, 7, 44, 23, 62, 30, 61, 38, 39, 54, 57, 49, 56],
        link: "https://ecommerse-project.onrender.com",
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
        title: "Shortify: URL Shortener API",
        description: "A scalable URL shortening service with advanced analytics and Google authentication integration.",
        detailedDescription: "A comprehensive URL shortening API featuring Google OAuth integration, Redis caching, detailed analytics with geolocation tracking, and topic-based organization. Built with TypeScript and Node.js, it includes advanced features like custom alias support, real-time analytics, and robust security measures. The system utilizes Redis for performance optimization and implements detailed click tracking with geographic distribution analysis.",
        technologies: [0, 18, 19, 13, 64, 63, 65, 66, 29, 30, 38, 31, 50, 67],
        link: "https://shortify.avm-ayurvedic.online",
        githubLink: "https://github.com/sinanptm/shortify",
        thumbnail: "/assets/projects/shortify.png",
        achievements: [
            "🔐 Implemented Google OAuth 2.0 with Passport.js",
            "⚡ Optimized performance with Redis caching system",
            "📊 Built comprehensive analytics with geolocation tracking",
            "🔒 Secured endpoints with JWT and HTTP-only cookies",
            "📈 Developed topic-based URL organization system",
            "🛡️ Implemented rate limiting and security measures",
            "🧪 Added comprehensive test coverage with Jest",
            "📱 Created detailed device and browser analytics",
            "🌍 Integrated geolocation-based tracking system",
            "🔄 Built custom collision detection for aliases",
            "📊 Developed comparative analytics dashboard",
            "🚀 Deployed with Nginx for high availability",
            "📈 Implemented real-time click tracking",
            "🛡️ Added URL sanitization and XSS protection"
        ]
    },
    {
        title: "PTM Kalari Website",
        description: "A feature-rich PWA optimized for performance and usability, incorporating modern web technologies.",
        detailedDescription: "A progressive web application showcasing PTM Kalarisangam - bridging ancient Indian martial arts and healing traditions with modern technology.",
        technologies: [1, 3, 0, 68, 20, 27, 33, 58, 51, 36],
        link: "https://ptmkalari.vercel.app",
        githubLink: "https://github.com/sinanptm/ptm",
        thumbnail: "/assets/projects/ptm.png",
        demoLink: "https://www.youtube.com/channel/UCLM9UEYxJMq2lXXjycxeOTQ",
        achievements: [
            "🏆 Got first ranking in Google search for 'PTM Kalari'.",
            "🌍 Built with full i18n (internationalization) support.",
            "📱 Offline functionality for seamless user experience.",
            "🔄 Background synchronization for data reliability.",
            "📊 Integrated Vercel Analytics for detailed performance insights.",
            "🖼️ Leveraged WebP/AVIF for optimized image delivery.",
            "🎨 Modern UI with Framer Motion and Radix UI.",
            "🛠️ Deployed with CI/CD pipelines for robust production workflows.",
            "🚀 Lighthouse scores: 97/100 Performance, 100/100 Accessibility, 100/100 Best Practices, 100/100 SEO.",
        ],
    },
    {
        title: "Readify: Article Management Platform",
        description: "A modern platform for discovering and managing articles with personalized feeds and theme customization.",
        detailedDescription: "Readify is an article management platform featuring anonymous posting, theme customization, and a personalized feed. The platform is built with Next.js 15, TailwindCSS, and Radix UI, and uses MongoDB for data storage. Cloudinary handles image uploads, and JWT ensures secure access. The project is deployed on Vercel with GitHub Actions for CI/CD.",
        technologies: [2, 0, 3, 20, 21, 24, 27, 33, 36, 37,],
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
        description: "A program management system with participant tracking and mark list generation for event organization.",
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
        description: "A URL shortening platform with click tracking analytics and personalized user dashboard features.",
        detailedDescription: "Developed with MERN stack and NestJS, this app offers URL shortening, click tracking, and personalized user dashboards. It provides experience in NestJS, focusing on modular architecture and dependency injection.",
        technologies: [2, 18, 13, 3, 21],
        link: "https://url-shortener-sooty-five.vercel.app",
        isLinkedin: true,
        githubLink: "https://github.com/sinanptm/url-shortener",
        demoLink: "https://www.linkedin.com/posts/sinanptm_nestjs-typescript-nodejs-activity-7252588020401389567-tyYv?utm_source=share&utm_medium=member_desktop",
        thumbnail: "/assets/projects/url-shortener.png",
        achievements: [
            "Implemented click tracking and user dashboards.",
            "Hands-on experience with NestJS and modular clean architecture.",
        ]
    },
    {
        title: "Ace-Quiz: Quiz App",
        description: "A modern quiz application with clean architecture implementation and automated deployment workflow.",
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
        title: "Role-Based Candidate Management",
        description: "A secure candidate management system with role-based access control and file handling features.",
        detailedDescription: "A comprehensive candidate management platform featuring role-based access control, secure file uploads with AWS S3 presigned URLs, and real-time profile management. Built with TypeScript throughout the stack, it implements secure authentication, file handling, and extensive API endpoints for both admin and candidate portals.",
        technologies: [0, 3, 18, 19, 13, 7, 20, 27, 33, 28, 29, 42, 56],
        link: "https://candidate-management-psi.vercel.app",
        githubLink: "https://github.com/sinanptm/candidate-management",
        showGitStats: true,
        thumbnail: "/assets/projects/c-manage.png",
        achievements: [
            "🔐 Implemented secure JWT authentication with refresh tokens",
            "📁 Built secure file management system using AWS S3 presigned URLs",
            "👥 Created comprehensive role-based access control system",
            "🎨 Developed responsive UI with Tailwind CSS and shadcn/ui",
            "🔒 Implemented end-to-end type safety with TypeScript",
            "🚀 Deployed frontend on Vercel and backend on AWS EC2",
            "📊 Created admin dashboard with analytics and candidate management",
            "🔄 Built RESTful API with Express.js following best practices",
            "📱 Developed responsive design supporting all device sizes",
            "🛡️ Implemented secure cookie-based session management",
            "📄 Added comprehensive document upload and verification system",
            "⚡ Optimized performance with proper data caching",
            "🔍 Integrated advanced search and filtering capabilities",
            "📈 Added real-time progress tracking for candidates"
        ]
    },
    {
        title: "OLX & Netflix Clones",
        description: "Platform clones featuring real-time data synchronization and secure authentication implementation.",
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
