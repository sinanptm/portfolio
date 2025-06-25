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
            "🔐 Implemented multi-factor authentication with secure email/password login and OTP verification for enhanced user security.",
            "🌐 Integrated Google and GitHub OAuth using Firebase, ensuring seamless and secure social login experiences.",
            "👥 Established role-based access control with JWT, enabling secure and efficient management of user and admin routes.",
            "🛠️ Designed a clean, modular architecture with independent logic layers, promoting maintainability and scalability.",
            "📱 Crafted a fully responsive UI using Next.js 15 and Tailwind CSS, optimized for all device sizes.",
            "🔄 Automated CI/CD pipelines with GitHub Actions, streamlining deployment and ensuring consistent updates.",
            "🛡️ Incorporated robust security features, including rate limiting and input sanitization, to protect against common vulnerabilities.",
            "📊 Developed an admin dashboard with comprehensive system analytics and insights for effective monitoring.",
            "🚀 Achieved scalable deployment on Vercel for the frontend and AWS with Nginx for the backend, ensuring high availability.",
            "🧪 Wrote comprehensive Jest unit and integration tests, ensuring reliability and robust code coverage.",
            "📧 Utilized Nodemailer for sending OTP and password reset email notifications, enhancing user experience.",
            "🔍 Ensured end-to-end TypeScript implementation for robust type safety and improved developer productivity.",
            "🌟 Gained significant recognition with over 30 GitHub stars and strong engagement on social media platforms."
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
            "🌟 Achieved 90+ Google Lighthouse scores for performance, accessibility, and SEO, ensuring an optimized user experience.",
            "📹 Enabled global video consultations using WebRTC and Socket.io, providing seamless real-time communication.",
            "🔔 Implemented real-time notifications with Socket.io, keeping users informed with instant alerts.",
            "🔐 Securely managed image uploads using AWS S3 presigned URLs, ensuring safe and efficient storage.",
            "📅 Streamlined appointment booking with automated reminders, improving user engagement and scheduling efficiency.",
            "💳 Integrated Stripe for secure and reliable payment processing, supporting multiple transaction types.",
            "🤖 Provided AI-powered wellness insights, delivering personalized health recommendations based on user data.",
            "🌐 Built a high-performance frontend with Next.js and Vercel, optimized for speed and scalability.",
            "🔒 Enforced role-based access control for admin, doctor, and patient roles, ensuring secure data access.",
            "📑 Enabled prescription management with downloadable PDFs for patients, enhancing usability.",
            "📊 Created an admin dashboard with detailed analytics for efficient hospital management and decision-making.",
            "🛠️ Followed clean architecture and SOLID principles, ensuring a modular and maintainable codebase.",
            "⚙️ Implemented Winston for comprehensive error tracking and logging, improving debugging efficiency.",
            "📈 Leveraged Google and Vercel Analytics for performance optimization and user behavior insights.",
            "🔄 Automated CI/CD with GitHub Actions, ensuring reliable and frequent deployment cycles.",
            "🖼️ Optimized SEO with Open Graph and Twitter Card integration, improving social media visibility.",
            "🎨 Designed a responsive UI with TailwindCSS and Framer Motion, ensuring a modern and engaging experience.",
            "🛡️ Ensured robust data validation using Zod and Joi, preventing invalid inputs and enhancing security.",
            "🌐 Deployed on AWS with NGINX, ensuring high scalability and reliability for global access."
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
            "🔐 Implemented secure JWT-based authentication with OTP validation, ensuring robust user security.",
            "💳 Integrated Razorpay payment gateway for seamless and secure online transactions across multiple payment methods.",
            "📊 Developed a comprehensive admin panel with detailed sales tracking and reporting for business insights.",
            "🌐 Deployed on AWS with NGINX, ensuring high scalability and reliability for handling large traffic volumes.",
            "🎨 Utilized Bootstrap for a responsive and modern UI, optimized for cross-device compatibility.",
            "📑 Leveraged PDFKit for generating professional invoices, improving transaction documentation for users.",
            "💸 Introduced a wallet system for managing user transactions, enhancing payment flexibility and user experience.",
            "🛒 Built fully functional cart and wishlist features, providing a seamless shopping experience for customers.",
            "💬 Enabled real-time customer support via integrated chat functionality, improving user satisfaction and engagement."
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
            "🔐 Integrated Google OAuth 2.0 with Passport.js, providing secure and user-friendly authentication.",
            "⚡ Optimized performance with Redis caching, significantly reducing response times for high-traffic scenarios.",
            "📊 Developed comprehensive analytics with geolocation tracking, offering detailed insights into URL click patterns.",
            "🔒 Secured API endpoints with JWT and HTTP-only cookies, protecting against unauthorized access and attacks.",
            "📈 Created a topic-based URL organization system, enabling users to categorize and manage links efficiently.",
            "🛡️ Implemented rate limiting and security measures to safeguard the API from abuse and vulnerabilities.",
            "🧪 Achieved high test coverage with Jest, ensuring reliability and robustness of the codebase.",
            "📱 Provided detailed device and browser analytics, enhancing user understanding of audience behavior.",
            "🌍 Integrated a geolocation-based tracking system for precise click distribution analysis across regions.",
            "🔄 Built custom collision detection for URL aliases, ensuring unique and reliable short links.",
            "📊 Developed a comparative analytics dashboard for users to evaluate link performance over time.",
            "🚀 Deployed with Nginx for high availability and efficient load balancing under heavy traffic.",
            "📈 Enabled real-time click tracking, providing instant feedback on URL performance.",
            "🛡️ Added URL sanitization and XSS protection, ensuring safe link creation and usage"
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
            "🏆 Secured first ranking in Google search for 'PTM Kalari,' boosting visibility and organic traffic.",
            "🌍 Implemented full i18n support, enabling seamless multilingual experiences for global users.",
            "📱 Enabled offline functionality with PWA features, ensuring accessibility in low-connectivity environments.",
            "🔄 Configured background synchronization for reliable data updates, even in unstable network conditions.",
            "📊 Integrated Vercel Analytics for detailed performance insights, optimizing user experience and site efficiency.",
            "🖼️ Optimized image delivery with WebP/AVIF formats, reducing load times and improving performance.",
            "🎨 Designed a modern UI with Framer Motion and Radix UI, creating an engaging and intuitive interface.",
            "🛠️ Deployed with automated CI/CD pipelines, ensuring consistent and error-free production workflows.",
            "🚀 Achieved Lighthouse scores of 97/100 for Performance, 100/100 for Accessibility, Best Practices, and SEO"
        ]
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
            "🕶️ Enabled anonymous posting, allowing users to share content without requiring an account for enhanced privacy.",
            "🎨 Provided theme customization with light and dark mode toggles, improving user comfort and accessibility.",
            "📖 Built a personalized feed system, enabling users to curate articles based on their preferences.",
            "👍 Implemented like and share functionalities, fostering user interaction and content engagement.",
            "🔍 Integrated debounced search for smooth and responsive article discovery, optimizing performance.",
            "📸 Managed image uploads efficiently with Cloudinary, ensuring fast and reliable media handling.",
            "📊 Utilized Nuqs for efficient state management, streamlining search and pagination workflows.",
            "🔐 Secured access with JWT authentication, protecting user data and ensuring private interactions.",
            "💻 Deployed on Vercel with GitHub Actions for automated CI/CD, ensuring reliable and frequent updates"
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
            "⚡ Improved performance by 70% through strategic memoization, optimizing rendering and data processing.",
            "📉 Reduced API calls by 80% with smart caching techniques, enhancing application efficiency.",
            "🔐 Implemented JWT authentication for secure access, protecting sensitive event and participant data.",
            "📑 Developed mark lists and participant management features, streamlining event organization tasks.",
            "🎨 Leveraged Mui Components for a smooth and intuitive user interface, improving user experience"
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
            "📊 Implemented click tracking and personalized user dashboards, providing actionable insights for link performance.",
            "🛠️ Gained hands-on experience with NestJS, focusing on modular clean architecture and dependency injection for scalability"
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
            "🎨 Integrated Radix UI and Redux Toolkit for efficient state management and a modern, accessible interface.",
            "🔄 Leveraged CI pipelines for automated deployment and testing, ensuring a robust and reliable release process"
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
            "🔐 Implemented secure JWT authentication with refresh tokens, ensuring robust and seamless user sessions.",
            "📁 Built a secure file management system with AWS S3 presigned URLs, enabling safe document uploads.",
            "👥 Developed a comprehensive role-based access control system, managing permissions for admins and candidates.",
            "🎨 Created a responsive UI with Tailwind CSS and shadcn/ui, optimized for all device sizes and accessibility.",
            "🔒 Ensured end-to-end type safety with TypeScript, reducing runtime errors and improving code reliability.",
            "🚀 Deployed frontend on Vercel and backend on AWS EC2, achieving high availability and performance.",
            "📊 Built an admin dashboard with analytics and candidate management tools for efficient oversight.",
            "🔄 Designed a RESTful API with Express.js, adhering to industry best practices for scalability.",
            "📱 Optimized for responsive design, supporting seamless experiences across desktops, tablets, and mobiles.",
            "🛡️ Implemented secure cookie-based session management, enhancing user data protection.",
            "📄 Added a comprehensive document upload and verification system, streamlining candidate workflows.",
            "⚡ Optimized performance with effective data caching strategies, reducing server load and latency.",
            "🔍 Integrated advanced search and filtering capabilities, improving usability for candidate management.",
            "📈 Enabled real-time progress tracking for candidates, enhancing transparency and engagement"
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
           "📡 Integrated TMDb API for the Netflix clone, enabling dynamic and real-time movie data retrieval.",
           "🔐 Leveraged Firebase for secure authentication and efficient image uploads in the OLX clone, ensuring user safety"
        ]
    }
];
