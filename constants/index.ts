export const socialLinks = [
    { image: '/assets/linkedin.svg', href: 'https://www.linkedin.com/in/sinanptm/', label: 'LinkedIn' },
    { image: '/assets/github.svg', href: 'https://github.com/sinanptm/', label: 'GitHub' },
    { image: '/assets/instagram.svg', href: 'https://www.instagram.com/si_an_z/', label: 'Instagram' },
    { image: '/assets/stackoverflow.svg', href: 'https://stackoverflow.com/users/25472984/sinan', label: 'Stack Overflow' },
];

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
    { title: "GitHub", icon: "/assets/social/github.svg", href: "https://github.com/sinanptm" },
    { title: "LinkedIn", icon: "/assets/social/linkedin.svg", href: "https://www.linkedin.com/in/sinanptm" },
    { title: "Resume", icon: "/assets/social/resume.svg", href: "/resume" },
    { title: "Instagram", icon: "/assets/social/instagram.svg", href: "https://www.instagram.com/si_an_z" },
    { title: "Email", icon: "/assets/social/email.svg", href: "mailto:muhammedsinan0549@gmail.com" },
    { title: "phone", icon: "/assets/social/phone.svg", href: "tel:+918089507749" },
];


export const projects = [
    {
        title: "Trends: E-commerce Store",
        description: "A full-featured e-commerce platform with secure authentication, dynamic product management, and integrated payment systems.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Razorpay"],
        link: "https://trendsonline.online/",
        thumbnail: "/assets/projects/trends.png",
        githubLink: "https://github.com/sinanptm/ecommerse-project",
        demoLink: "https://youtu.be/8w6HqmgeDcA",
        features: [
            "Secure registration, login, OTP validation, and JWT-based authentication.",
            "Multiple addresses, wallet, dynamic offers, cart, wishlist, and coupon management.",
            "Flexible payment integration with Razorpay, and order tracking/management.",
            "Comprehensive admin panel for products, categories, stock, orders, sales reports, and banners.",
            "Real-time chat system for customer support and admin interaction.",
            "Detailed sales reports for performance tracking.",
            "Automatic invoice creation using PDFKit for each order.",
            "Hosted on AWS with NGINX for scalability, reliability, and security.",
            "Optimized for search engines and fully responsive design for mobile users."
        ]
    },
    {
        title: "AVM Ayurvedic: Hospital Management",
        description: "A wellness platform with AI-powered health insights and Ayurvedic consultations, featuring video calls, smart booking, and secure payments.",
        technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "WebSocket"],
        link: "http://avm-ayurvedic.online",
        githubLink: "https://github.com/sinanptm/avm-ayurvedic",
        thumbnail: "/assets/projects/avm.png",
        demoLink: "https://youtu.be/fpOPtDixtD4",
        achievements: [
            "Optimized the front end for performance, achieving 90+ scores in Google Lighthouse for SEO, accessibility, and page speed.",
            "Implemented real-time video consultations and communication features.",
            "Architected the backend using Node.js, Express.js, and MongoDB hosted on AWS, ensuring scalability and secure data handling.",
            "Followed clean architecture and SOLID principles for maintainable, modular code, with robust error logging via Winston.",
            "Deployed the platform using Vercel, managing CI/CD pipelines with GitHub Actions for automated testing and deployment workflows.",
            "Implemented Role-Based Authorization, ensuring secure access management and differentiated user permissions for various platform features."
        ]
    },
    {
        title: "Sahithyolsav Manager",
        description: "A program management application for the SSF Kerala community, built using the MERN stack within three days.",
        technologies: ["React", "Redux", "Express.js", "Node.js", "MongoDB"],
        link: "https://sahityotsav-manager.onrender.com/",
        githubLink: "https://github.com/sinanptm/Program-manager",
        demoLink: "https://www.linkedin.com/posts/sinanptm_mern-react-redux-activity-7220717132450254848-7bGb?utm_source=share&utm_medium=member_desktop",
        thumbnail: "/assets/projects/program-manager.png",
        achievements: [
            "Implemented features for mark lists, team marks, program registrations, and participant management.",
            "Optimized performance with memoization, achieving a 70% boost, and reduced API calls by 80% through smart caching and state management.",
            "Enhanced user experience with code splitting and lazy loading, resulting in faster load times.",
            "Secured the application using JWT authentication to ensure data integrity and user security."
        ]
    },
    {
        title: "URL Shortener",
        description: "Developed a URL shortener with the MERN stack and NestJS backend for efficient server-side operations.",
        technologies: ["NestJS", "MongoDB", "React"],
        link: "https://url-shortener-sooty-five.vercel.app/",
        githubLink: "https://github.com/sinanptm/url-shortener",
        demoLink: "https://www.linkedin.com/posts/sinanptm_nestjs-typescript-nodejs-activity-7252588020401389568-tyYv?utm_source=share&utm_medium=member_desktop",
        thumbnail: "/assets/projects/url-shortener.png",
        achievements: [
            "Added URL shortening, click tracking, and user authentication with a personalized dashboard.",
            "Gained experience with NestJS, focusing on modular architecture, dependency injection, and JWT authentication."
        ]
    },
    {
        title: "Ace-Quiz: Quiz App",
        description: "A quiz application built using Next.js, TypeScript, and Clean Architecture, focusing on a scalable and maintainable codebase.",
        technologies: ["Next.js", "TypeScript", "MongoDB", "Redux", "Express.js", "Node.js"],
        link: "https://quiz-app-six-dusky.vercel.app/",
        thumbnail: "/assets/projects/quiz.png",
        githubLink: "https://github.com/sinanptm/Quiz-app",
        demoLink: "https://www.linkedin.com/posts/sinanptm_nextjs-typescript-cleanarchitecture-activity-7232711700452425729-J_81?utm_source=share&utm_medium=member_desktop",
        achievements: [
            "Integrated tools like Radix UI for accessible components, Redux Toolkit for efficient state management, and Node.js/Express for the backend.",
            "Gained hands-on experience with GitHub workflows and CI, enhancing skills in automated deployment and testing."
        ]
    },
    {
        title: "OLX & Netflix Clones",
        description: "Developed comprehensive clones of Netflix and OLX using ReactJS and Firebase, ensuring responsive and dynamic user interfaces.",
        technologies: ["React.js", "Firebase", "TMDb API"],
        githubLink: "https://github.com/sinanptm/OLX-clone",
        link: "https://netflix-clone-gamma-virid.vercel.app",
        thumbnail: "/assets/projects/netflix.png",
        demoLink: "https://www.linkedin.com/posts/sinanptm_reactjs-firebase-tmdb-activity-7211610477729054720-nLr1?utm_source=share&utm_medium=member_desktop",
        achievements: [
            "Integrated The Movie Database (TMDb) API for real-time movie data in the Netflix clone.",
            "Implemented secure user authentication with Firebase for both projects.",
            "Developed image uploading functionality for the OLX clone, allowing users to post visually appealing listings."
        ]
    }
];

const basedUrl = "/assets/tech";

export const technologies = [
    { name: "ReactJS", url: `${basedUrl}/react.svg` },
    { name: "NodeJS", url: `${basedUrl}/nodejs.svg` },
    { name: "ExpressJS", url: `${basedUrl}/express.svg` },
    { name: "MongoDB", url: `${basedUrl}/mongodb.svg` },
    { name: "Next JS", url: `${basedUrl}/nextjs.svg` },
    { name: "Nest JS", url: `${basedUrl}/nestjs.svg` },
    { name: "WebRTC", url: `${basedUrl}/webrtc.svg` },
    { name: "Socket.io", url: `${basedUrl}/socket-io.svg` },
    { name: "Three.JS", url: `${basedUrl}/threejs-1.svg` },
    { name: "AWS", url: `${basedUrl}/aws.svg` },
    { name: "Google AI", url: `${basedUrl}/google-ai.svg` },
    { name: "OpenAI", url: `${basedUrl}/openai.svg` },
    { name: "Firebase", url: `${basedUrl}/firebase.svg` },
    { name: "Stripe", url: `${basedUrl}/stripe.svg` },
    { name: "TypeScript", url: `${basedUrl}/typescript.svg` },
    { name: "Redux", url: `${basedUrl}/redux.svg` },
    { name: "React Query", url: `${basedUrl}/react-query.svg` },
    { name: "Postgres", url: `${basedUrl}/postgresql.svg` },
    { name: "MySQL", url: `${basedUrl}/mysql.svg` },
    { name: "JWT", url: `${basedUrl}/jwt.svg` },
    { name: "OAuth", url: `${basedUrl}/oauth.svg` },
    { name: "Framer Motion", url: `${basedUrl}/framer-motion.svg` },
    { name: "TailwindCSS", url: `${basedUrl}/tailwind.svg` },
    { name: "Radix UI", url: `${basedUrl}/radix-ui.svg` },
    { name: "shadcn", url: `${basedUrl}/shadcn.svg` },
    { name: "Vercel", url: `${basedUrl}/vercel.svg` },
    { name: "Vercel Analytics", url: `${basedUrl}/vercel-analytics.svg` },
    { name: "Google Analytics", url: `${basedUrl}/google-analytics.svg` },
    { name: "Razorpay", url: `${basedUrl}/razorpay.svg` },
    { name: "Vite", url: `${basedUrl}/vite.svg` },
    { name: "React Form", url: `${basedUrl}/react-hook-form.svg` },
    { name: "Chart.js", url: `${basedUrl}/chartjs.svg` },
    { name: "Styled Components", url: `${basedUrl}/styled-components.svg` },
    { name: "Axios", url: `${basedUrl}/axios.svg` },
    { name: "Bootstrap", url: `${basedUrl}/bootstrap.svg` },
    { name: "jQuery", url: `${basedUrl}/jquery.svg` },
    { name: "Nginx", url: `${basedUrl}/nginx.svg` },
    { name: "GitHub Actions", url: `${basedUrl}/github-action.svg` },
    { name: "ESLint", url: `${basedUrl}/eslint.svg` },
    { name: "Prettier", url: `${basedUrl}/prettier.svg` },
    { name: "NPM", url: `${basedUrl}/npm.svg` },
    { name: "Nodemon", url: `${basedUrl}/nodemon.svg` },
    { name: "Postman", url: `${basedUrl}/postman.svg` },
    { name: "Figma", url: `${basedUrl}/figma-icon.svg` },
    { name: "V0", url: `${basedUrl}/v0.webp` },
    { name: "Joi", url: `${basedUrl}/joi.svg` },
    { name: "Winston", url: `${basedUrl}/winston.svg` },
    { name: "Render", url: `${basedUrl}/render.svg` }
 ];


// { name: "Clean Architecture", url: "https://img.shields.io/badge/Clean_Architecture-%230D6EFD.svg?style=flat&logo=architecture&logoColor=white" },
// { name: "SOLID Principles", url: "https://img.shields.io/badge/SOLID_Principles-%230D6EFD.svg?style=flat&logo=architecture&logoColor=white" },


export const skills = [
    { name: "TypeScript", url: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white" },
    { name: "Next JS", url: "https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white" },
    { name: "Nest.js", url: "https://img.shields.io/badge/nestjs-%23E0234E.svg?style=flat&logo=Nestjs&logoColor=%2361DAFB" },
    { name: "React", url: "https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB" },
    { name: "Redux", url: "https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white" },
    { name: "React Query", url: "https://img.shields.io/badge/-React%20Query-FF4154?style=flat&logo=react%20query&logoColor=white" },
    { name: "Vite", url: "https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white" },
    { name: "AWS", url: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white" },
    { name: "Stripe", url: "https://img.shields.io/badge/stripe-%236464FF.svg?style=flat&logo=stripe&logoColor=white" },
    { name: "WebRTC", url: "https://img.shields.io/badge/WebRTC-333333?style=flat&logo=webrtc&logoColor=white" },
    { name: "Socket.io", url: "https://img.shields.io/badge/Socket.io-black?style=flat&logo=socket.io&badgeColor=010101" },
    { name: "Google AI", url: "https://img.shields.io/badge/Google_AI-4285F4?style=flat&logo=google&logoColor=white" },
    { name: "OpenAI", url: "https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white" },
    { name: "MongoDB", url: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white" },
    { name: "Postgres", url: "https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white" },
    { name: "Zod", url: "https://img.shields.io/badge/zod-%233068b7.svg?style=flat&logo=zod&logoColor=white" },
    { name: "Clean Architecture", url: "https://img.shields.io/badge/Clean_Architecture-%230D6EFD.svg?style=flat&logo=architecture&logoColor=white" },
    { name: "SOLID Principles", url: "https://img.shields.io/badge/SOLID_Principles-%230D6EFD.svg?style=flat&logo=architecture&logoColor=white" },
    { name: "NodeJS", url: "https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white" },
    { name: "Express.js", url: "https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB" },
    { name: "TailwindCSS", url: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white" },
    { name: "Vercel", url: "https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white" },
    { name: "Firebase", url: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase" },
    { name: "Razorpay", url: "https://img.shields.io/badge/razorpay-%2300A7E1.svg?style=flat&logo=razorpay&logoColor=white" },
    { name: "Google Analytics", url: "https://img.shields.io/badge/Google%20Analytics-E37400?style=flat&logo=google-analytics&logoColor=white" },
    { name: "Vercel Analytics", url: "https://img.shields.io/badge/Vercel%20Analytics-E37400?style=flat&logo=google-analytics&logoColor=white" },
    { name: "Styled Components", url: "https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white" },
    { name: "Radix UI", url: "https://img.shields.io/badge/radix%20ui-161618.svg?style=flat&logo=radix-ui&logoColor=white" },
    { name: "Axios", url: "https://img.shields.io/badge/Axios-5A29E3?style=flat&logo=axios&logoColor=white" },
    { name: "JWT", url: "https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens" },
    { name: "OAuth", url: "https://img.shields.io/badge/OAuth-3C78A9?style=flat&logo=oauth&logoColor=white" },
    { name: "Joi", url: "https://img.shields.io/badge/Joi-0080FF?style=flat&logo=joi&logoColor=white" },
    { name: "Winston", url: "https://img.shields.io/badge/Winston-231F20?style=flat&logo=winston&logoColor=white" },
    { name: "shadcn", url: "https://img.shields.io/badge/shadcn-4A154B?style=flat&logo=react&logoColor=white" },
    { name: "Chart.js", url: "https://img.shields.io/badge/chart.js-F5788D.svg?style=flat&logo=chart.js&logoColor=white" },
    { name: "Prettier", url: "https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black" },
    { name: "ESLint", url: "https://img.shields.io/badge/ESLint-4B3263?style=flat&logo=eslint&logoColor=white" },
    { name: "GitHub Actions", url: "https://img.shields.io/badge/github%20actions-%232671E5.svg?style=flat&logo=githubactions&logoColor=white" },
    { name: "Nginx", url: "https://img.shields.io/badge/nginx-%23009639.svg?style=flat&logo=nginx&logoColor=white" },
    { name: "Render", url: "https://img.shields.io/badge/Render-%46E3B7.svg?style=flat&logo=render&logoColor=white" },
    { name: "Cloudflare", url: "https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=Cloudflare&logoColor=white" },
    { name: "V0", url: "https://img.shields.io/badge/V0-4E54E2?style=flat&logo=react&logoColor=white" },
    { name: "React Hook Form", url: "https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white" },
    { name: "Context-API", url: "https://img.shields.io/badge/Context--Api-000000?style=flat&logo=react" },
    { name: "JavaScript", url: "https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E" },
    { name: "MySQL", url: "https://img.shields.io/badge/mysql-4479A1.svg?style=flat&logo=mysql&logoColor=white" },
    { name: "Bootstrap", url: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=flat&logo=bootstrap&logoColor=white" },
    { name: "jQuery", url: "https://img.shields.io/badge/jquery-%230769AD.svg?style=flat&logo=jquery&logoColor=white" },
    { name: "NPM", url: "https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat&logo=npm&logoColor=white" },
    { name: "Nodemon", url: "https://img.shields.io/badge/NODEMON-%23323330.svg?style=flat&logo=nodemon&logoColor=%BBDEAD" },
    { name: "Postman", url: "https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white" },
    { name: "Figma", url: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white" },
    { name: "Framer", url: "https://img.shields.io/badge/Framer-black?style=flat&logo=framer&logoColor=blue" }
];