export  const socialLinks = [
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
    email:'muhammedsinan0549@gmail.com',
    phone:"+91 8089507749"
  };

export const projects = [
    {
        title: "Trends: E-commerce Store",
        description: "A full-featured e-commerce platform with secure authentication, dynamic product management, and integrated payment systems.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Razorpay"],
        link: "https://trendsonline.online/",
        thumbnail:"/assets/projects/trends.png",
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
        thumbnail:"/assets/projects/avm.png",
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
        thumbnail:"/assets/projects/program-manager.png",
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
        thumbnail:"/assets/projects/url-shortener.png",
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
        thumbnail:"/assets/projects/quiz.png",
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
        link:"https://netflix-clone-gamma-virid.vercel.app",
        thumbnail:"/assets/projects/netflix.png",
        demoLink: "https://www.linkedin.com/posts/sinanptm_reactjs-firebase-tmdb-activity-7211610477729054720-nLr1?utm_source=share&utm_medium=member_desktop",
        achievements: [
            "Integrated The Movie Database (TMDb) API for real-time movie data in the Netflix clone.",
            "Implemented secure user authentication with Firebase for both projects.",
            "Developed image uploading functionality for the OLX clone, allowing users to post visually appealing listings."
        ]
    }
];

const basedUrl = "/assets/tech";

export const skills = [
    { name: "TypeScript", url: `${basedUrl}/typescript.svg` },
    { name: "Next JS", url: `${basedUrl}/nextjs.svg` },
    { name: "Nest.js", url: `${basedUrl}/nestjs.svg` },
    { name: "React", url: `${basedUrl}/react.svg` },
    { name: "Redux", url: `${basedUrl}/redux.svg` },
    { name: "React Query", url: `${basedUrl}/reactquery.svg` },
    { name: "Vite", url: `${basedUrl}/vite.svg` },
    { name: "AWS", url: `${basedUrl}/aws.svg` },
    { name: "Stripe", url: `${basedUrl}/stripe.svg` },
    { name: "WebRTC", url: `${basedUrl}/webrtc.svg` },
    { name: "Socket.io", url: `${basedUrl}/socketio.svg` },
    { name: "Google AI", url: `${basedUrl}/google_ai.svg` },
    { name: "OpenAI", url: `${basedUrl}/openai.svg` },
    { name: "MongoDB", url: `${basedUrl}/mongodb.svg` },
    { name: "Postgres", url: `${basedUrl}/postgres.svg` },
    { name: "Zod", url: `${basedUrl}/zod.svg` },
    { name: "NodeJS", url: `${basedUrl}/nodejs.svg` },
    { name: "Express.js", url: `${basedUrl}/express.svg` },
    { name: "TailwindCSS", url: `${basedUrl}/tailwindcss.svg` },
    { name: "Vercel", url: `${basedUrl}/vercel.svg` },
    { name: "Firebase", url: `${basedUrl}/firebase.svg` },
    { name: "Razorpay", url: `${basedUrl}/razorpay.svg` },
    { name: "Google Analytics", url: `${basedUrl}/google_analytics.svg` },
    { name: "Vercel Analytics", url: `${basedUrl}/vercel_analytics.svg` },
    { name: "Styled Components", url: `${basedUrl}/styled_components.svg` },
    { name: "Radix UI", url: `${basedUrl}/radix_ui.svg` },
    { name: "Axios", url: `${basedUrl}/axios.svg` },
    { name: "JWT", url: `${basedUrl}/jwt.svg` },
    { name: "OAuth", url: `${basedUrl}/oauth.svg` },
    { name: "Joi", url: `${basedUrl}/joi.svg` },
    { name: "Winston", url: `${basedUrl}/winston.svg` },
    { name: "shadcn", url: `${basedUrl}/shadcn.svg` },
    { name: "Chart.js", url: `${basedUrl}/chartjs.svg` },
    { name: "Prettier", url: `${basedUrl}/prettier.svg` },
    { name: "ESLint", url: `${basedUrl}/eslint.svg` },
    { name: "GitHub Actions", url: `${basedUrl}/github_actions.svg` },
    { name: "Nginx", url: `${basedUrl}/nginx.svg` },
    { name: "Render", url: `${basedUrl}/render.svg` },
    { name: "React Hook Form", url: `${basedUrl}/react_hook_form.svg` },
    { name: "JavaScript", url: `${basedUrl}/javascript.svg` },
    { name: "MySQL", url: `${basedUrl}/mysql.svg` },
    { name: "Bootstrap", url: `${basedUrl}/bootstrap.svg` },
    { name: "jQuery", url: `${basedUrl}/jquery.svg` },
    { name: "NPM", url: `${basedUrl}/npm.svg` },
    { name: "Nodemon", url: `${basedUrl}/nodemon.svg` },
    { name: "Postman", url: `${basedUrl}/postman.svg` },
    { name: "Figma", url: `${basedUrl}/figma.svg` },
    { name: "Framer", url: `${basedUrl}/framer.svg` },
    { name: "Three.JS", url: `${basedUrl}/threejs.svg` },
    { name: "V0", url: `${basedUrl}/v0.webp` },
];

// { name: "Clean Architecture", url: "https://img.shields.io/badge/Clean_Architecture-%230D6EFD.svg?style=flat&logo=architecture&logoColor=white" },
// { name: "SOLID Principles", url: "https://img.shields.io/badge/SOLID_Principles-%230D6EFD.svg?style=flat&logo=architecture&logoColor=white" },