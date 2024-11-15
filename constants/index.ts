import { Tech } from "@/types";

export const profile = {
    summary: ` Self-taught MERN stack developer passionate about building scalable, efficient applications. 
              Fascinated by technology from a young age, I&apos;ve continuously expanded my expertise across 
              various tools and frameworks. Committed to improving my skills, writing better code, and 
              delivering impactful solutions.`,
    email: 'muhammedsinan0549@gmail.com',
    phone: "+91 8089507749"
};

export const navLinks = [
    { title: "Home", icon: "/assets/home.svg", href: "/" },
    { title: "Resume", icon: "/assets/social/resume.svg", href: "/resume" },
    { title: "LinkedIn", icon: "/assets/social/linkedin.svg", href: "https://www.linkedin.com/in/sinanptm" },
    { title: "GitHub", icon: "/assets/social/github.svg", href: "https://github.com/sinanptm" },
    { title: "Instagram", icon: "/assets/social/instagram.svg", href: "https://www.instagram.com/si_an_z" },
    { title: 'Stack Overflow', icon: '/assets/social/stackoverflow.png', href: 'https://stackoverflow.com/users/25472984/sinan' },
    // { title: "Email", icon: "/assets/social/email.svg", href: "mailto:mail@gmail.com" },
    // { title: "phone", icon: "/assets/social/phone.svg", href: "tel:+8989348934" },
];


export const projects = [
    {
        title: "AVM Ayurvedic: Hospital Management",
        description: "A wellness platform with AI-powered health insights and Ayurvedic consultations.",
        detailedDescription: "A comprehensive Ayurvedic platform with video consultations, secure payments, and real-time notifications. Optimized for performance with Google Lighthouse 90+ scores. The backend is designed for scalability and secure data handling using Node.js, Express.js, and MongoDB on AWS. It includes role-based authorization and is deployed frontend with Vercel, utilizing GitHub Actions for CI/CD.",
        technologies: [1, 18, 19, 13, 9, 10, 17, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 51, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        link: "http://avm-ayurvedic.online",
        githubLink: "https://github.com/sinanptm/avm-ayurvedic",
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
        technologies: [0, 19, 30, 29, 35, 44, 48, 51, 57, 56,],
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
        technologies: [60, 13, 59, 0, 61, 58, 29, 27, 15, 36],
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
        technologies: [2, 13, 3],
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
    // {
    //     title: "OLX & Netflix Clones",
    //     description: "Clones of Netflix and OLX with real-time data and secure authentication.",
    //     detailedDescription: "These clones, developed using React and Firebase, showcase responsive design and real-time data. TMDb API is used in the Netflix clone for movie data, and Firebase handles authentication and image uploads for the OLX clone.",
    //     technologies: [3, 22],
    //     githubLink: "https://github.com/sinanptm/OLX-clone",
    //     link: "https://netflix-clone-gamma-virid.vercel.app",
    //     thumbnail: "/assets/projects/netflix.png",
    //     isLinkedin: true,
    //     demoLink: "https://www.linkedin.com/posts/sinanptm_reactjs-firebase-tmdb-activity-7211610477729054720-nLr1?utm_source=share&utm_medium=member_desktop",
    //     achievements: [
    //         "Integrated TMDb API for Netflix clone.",
    //         "Firebase for secure authentication and image uploads."
    //     ]
    // }
];

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
};




const badgeBase = "https://img.shields.io/badge";

export const skills: Tech[] = [
    { name: "TypeScript", url: `${badgeBase}/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white` },
    { name: "Next JS", url: `${badgeBase}/Next-black?style=flat&logo=next.js&logoColor=white` },
    { name: "Nest.js", url: `${badgeBase}/nestjs-%23E0234E.svg?style=flat&logo=Nestjs&logoColor=%2361DAFB` },
    { name: "React", url: `${badgeBase}/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB` },
    { name: "Redux", url: `${badgeBase}/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white` },
    { name: "React Query", url: `${badgeBase}/-React%20Query-FF4154?style=flat&logo=react%20query&logoColor=white` },
    { name: "Vite", url: `${badgeBase}/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white` },
    { name: "AWS", url: `${badgeBase}/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white` },
    { name: "Stripe", url: `${badgeBase}/stripe-%236464FF.svg?style=flat&logo=stripe&logoColor=white` },
    { name: "WebRTC", url: `${badgeBase}/WebRTC-333333?style=flat&logo=webrtc&logoColor=white` },
    { name: "Socket.io", url: `${badgeBase}/Socket.io-black?style=flat&logo=socket.io&badgeColor=010101` },
    { name: "Google AI", url: `${badgeBase}/Google_AI-4285F4?style=flat&logo=google&logoColor=white` },
    { name: "OpenAI", url: `${badgeBase}/OpenAI-412991?style=flat&logo=openai&logoColor=white` },
    { name: "MongoDB", url: `${badgeBase}/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white` },
    { name: "Postgres", url: `${badgeBase}/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white` },
    { name: "Zod", url: `${badgeBase}/zod-%233068b7.svg?style=flat&logo=zod&logoColor=white` },
    { name: "Clean Architecture", url: `${badgeBase}/Clean_Architecture-%230D6EFD.svg?style=flat&logo=architecture&logoColor=white` },
    { name: "SOLID Principles", url: `${badgeBase}/SOLID_Principles-%230D6EFD.svg?style=flat&logo=architecture&logoColor=white` },
    { name: "NodeJS", url: `${badgeBase}/node.js-6DA55F?style=flat&logo=node.js&logoColor=white` },
    { name: "Express.js", url: `${badgeBase}/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB` },
    { name: "TailwindCSS", url: `${badgeBase}/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white` },
    { name: "Vercel", url: `${badgeBase}/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white` },
    { name: "Firebase", url: `${badgeBase}/firebase-%23039BE5.svg?style=flat&logo=firebase` },
    { name: "Razorpay", url: `${badgeBase}/razorpay-%2300A7E1.svg?style=flat&logo=razorpay&logoColor=white` },
    { name: "Google Analytics", url: `${badgeBase}/Google%20Analytics-E37400?style=flat&logo=google-analytics&logoColor=white` },
    { name: "Vercel Analytics", url: `${badgeBase}/Vercel%20Analytics-E37400?style=flat&logo=google-analytics&logoColor=white` },
    { name: "Styled Components", url: `${badgeBase}/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white` },
    { name: "Radix UI", url: `${badgeBase}/radix%20ui-161618.svg?style=flat&logo=radix-ui&logoColor=white` },
    { name: "Axios", url: `${badgeBase}/Axios-5A29E3?style=flat&logo=axios&logoColor=white` },
    { name: "JWT", url: `${badgeBase}/JWT-black?style=flat&logo=JSON%20web%20tokens` },
    { name: "OAuth", url: `${badgeBase}/OAuth-3C78A9?style=flat&logo=oauth&logoColor=white` },
    { name: "Joi", url: `${badgeBase}/Joi-0080FF?style=flat&logo=joi&logoColor=white` },
    { name: "Winston", url: `${badgeBase}/Winston-231F20?style=flat&logo=winston&logoColor=white` },
    { name: "shadcn", url: `${badgeBase}/shadcn-4A154B?style=flat&logo=react&logoColor=white` },
    { name: "Recharts", url: `${badgeBase}/Recharts-4CAF50.svg?style=flat&logo=recharts&logoColor=white` },
    { name: "Prettier", url: `${badgeBase}/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black` },
    { name: "ESLint", url: `${badgeBase}/ESLint-4B3263?style=flat&logo=eslint&logoColor=white` },
    { name: "GitHub Actions", url: `${badgeBase}/github%20actions-%232671E5.svg?style=flat&logo=githubactions&logoColor=white` },
    { name: "Nginx", url: `${badgeBase}/nginx-%23009639.svg?style=flat&logo=nginx&logoColor=white` },
    { name: "Render", url: `${badgeBase}/Render-%46E3B7.svg?style=flat&logo=render&logoColor=white` },
    { name: "Cloudflare", url: `${badgeBase}/Cloudflare-F38020?style=flat&logo=Cloudflare&logoColor=white` },
    { name: "V0", url: `${badgeBase}/V0-4E54E2?style=flat&logo=react&logoColor=white` },
    { name: "React Hook Form", url: `${badgeBase}/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white` },
    { name: "Context-API", url: `${badgeBase}/Context--Api-000000?style=flat&logo=react` },
    { name: "JavaScript", url: `${badgeBase}/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E` },
    { name: "MySQL", url: `${badgeBase}/mysql-4479A1.svg?style=flat&logo=mysql&logoColor=white` },
    { name: "Bootstrap", url: `${badgeBase}/bootstrap-%238511FA.svg?style=flat&logo=bootstrap&logoColor=white` },
    { name: "jQuery", url: `${badgeBase}/jquery-%230769AD.svg?style=flat&logo=jquery&logoColor=white` },
    { name: "NPM", url: `${badgeBase}/NPM-%23CB3837.svg?style=flat&logo=npm&logoColor=white` },
    { name: "Nodemon", url: `${badgeBase}/NODEMON-%23323330.svg?style=flat&logo=nodemon&logoColor=%BBDEAD` },
    { name: "Postman", url: `${badgeBase}/Postman-FF6C37?style=flat&logo=postman&logoColor=white` },
    { name: "Figma", url: `${badgeBase}/figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white` },
    { name: "Framer", url: `${badgeBase}/Framer-black?style=flat&logo=framer&logoColor=blue` },
    { name: "PDFKit", url: `${badgeBase}/PDFKit-ff4f00.svg?style=flat&logo=pdfkit&logoColor=white` },
    { name: "Sharp", url: `${badgeBase}/Sharp-ff4f00.svg?style=flat&logo=sharp&logoColor=white` },
    { name: "PDF Viewer", url: `${badgeBase}/PDF_Viewer-ff4f00.svg?style=flat&logo=pdf&logoColor=white` },
    { name: "Cookies", url: `${badgeBase}/Cookies-ffcc00.svg?style=flat&logo=cookie&logoColor=white` },
    { name: "EJS", url: `${badgeBase}/EJS-8A3FFA.svg?style=flat&logo=ejs&logoColor=white` },
    { name: "Nuqs", url: `${badgeBase}/Nuqs-000000?style=flat&logo=react&logoColor=white` },
    { name: "Clodinary", url: `${badgeBase}/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white` },
    { name: "Nextjs 15", url: `${badgeBase}/Next%20JS-15-black?style=flat&logo=next.js&logoColor=white` },
    { name: "React 19", url: `${badgeBase}/React-19-%2320232a?style=flat&logo=react&logoColor=%2361DAF` },
];



const basedUrl = "/assets/tech";

export const technologies: Tech[] = [
    // Languages
    { name: "TypeScript", url: `${basedUrl}/typescript.svg` },
    { name: "JavaScript", url: `${basedUrl}/javascript.svg` },

    // Backend Frameworks
    { name: "NodeJS", url: `${basedUrl}/nodejs.svg` },
    { name: "ExpressJS", url: `${basedUrl}/express.svg` },
    { name: "Nest JS", url: `${basedUrl}/nestjs.svg` },

    // Frontend Frameworks/Libraries
    { name: "ReactJS", url: `${basedUrl}/react.svg` },
    { name: "Next JS", url: `${basedUrl}/nextjs.svg` },
    { name: "Vite", url: `${basedUrl}/vite.svg` },

    // Databases
    { name: "MongoDB", url: `${basedUrl}/mongodb.svg` },
    { name: "Postgres", url: `${basedUrl}/postgresql.svg` },
    { name: "MySQL", url: `${basedUrl}/mysql.svg` },


    // Cloud & Hosting
    { name: "AWS", url: `${basedUrl}/aws.svg` },
    { name: "Cloudinary", url: `${basedUrl}/cloudinary.png` },
    { name: "Firebase", url: `${basedUrl}/firebase.svg` },
    { name: "Vercel", url: `${basedUrl}/vercel.svg` },
    { name: "Render", url: `${basedUrl}/render.svg` },
    { name: "Nginx", url: `${basedUrl}/nginx.svg` },

    // WebRTC & Real-Time Communication
    { name: "WebRTC", url: `${basedUrl}/webrtc.svg` },
    { name: "Socket.io", url: `${basedUrl}/socket-io.svg` },

    // State-management
    { name: "Redux", url: `${basedUrl}/redux.svg` },
    { name: "React Query", url: `${basedUrl}/react-query.svg` },
    { name: "Nuqs", url: `${basedUrl}/nuqs.svg` },

    // Payment Systems
    { name: "Stripe", url: `${basedUrl}/stripe.svg` },
    { name: "Razorpay", url: `${basedUrl}/razorpay.svg` },

    // Styling & Animations
    { name: "TailwindCSS", url: `${basedUrl}/tailwind.svg` },
    { name: "Three.JS", url: `${basedUrl}/threejs-1.svg` },
    { name: "Rombo", url: `${basedUrl}/rombo.svg` },
    { name: "Framer Motion", url: `${basedUrl}/framer-motion.svg` },
    { name: "Styled Components", url: `${basedUrl}/styled-components.svg` },
    { name: "Bootstrap", url: `${basedUrl}/bootstrap.svg` },

    // UI Component Libraries
    { name: "Radix UI", url: `${basedUrl}/radix-ui.svg` },
    { name: "shadcn", url: `${basedUrl}/shadcn.svg` },


    // Authentication & Authorization
    { name: "JWT", url: `${basedUrl}/jwt.svg` },
    { name: "OAuth", url: `${basedUrl}/oauth.svg` },

    // APIs & Utilities
    { name: "Axios", url: `${basedUrl}/axios.svg` },
    { name: "React Form", url: `${basedUrl}/react-hook-form.svg` },
    { name: "Joi", url: `${basedUrl}/joi.svg` },
    { name: "Zod", url: `${basedUrl}/zod.svg` },
    { name: "Postman", url: `${basedUrl}/postman.svg` },
    { name: "Thunder Client", url: `${basedUrl}/thunder-client.png` },

    // AI & Analytics
    { name: "Google AI", url: `${basedUrl}/google-ai.svg` },
    { name: "OpenAI", url: `${basedUrl}/openai.svg` },
    { name: "Vercel Analytics", url: `${basedUrl}/vercel-analytics.svg` },
    { name: "Google Analytics", url: `${basedUrl}/google-analytics.svg` },
    { name: "Chart.js", url: `${basedUrl}/chartjs.svg` },

    // DevOps & CI/CD
    { name: "GitHub Actions", url: `${basedUrl}/github-action.svg` },
    { name: "NPM", url: `${basedUrl}/npm.svg` },
    { name: "Nodemon", url: `${basedUrl}/nodemon.svg` },

    // Code Quality & Logging
    { name: "ESLint", url: `${basedUrl}/eslint.svg` },
    { name: "Prettier", url: `${basedUrl}/prettier.svg` },
    { name: "Winston", url: `${basedUrl}/winston.svg` },

    // Design & Prototyping
    { name: "Figma", url: `${basedUrl}/figma-icon.svg` },

    // Legacy Support
    { name: "jQuery", url: `${basedUrl}/jquery.svg` },
];



