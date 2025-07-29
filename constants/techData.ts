import { Tech, TechCategory } from "@/types";

const badgeBase = "https://img.shields.io/badge";

export const skills: Tech[] = [
    { name: "TypeScript", url: `${badgeBase}/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white` },
    { name: "Next.js", url: `${badgeBase}/Next.js-black?style=flat&logo=next.js&logoColor=white` },
    { name: "Nest.js", url: `${badgeBase}/Nest.js-%23E0234E.svg?style=flat&logo=nestjs&logoColor=%2361DAFB` },
    { name: "React", url: `${badgeBase}/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB` },
    { name: "Redux", url: `${badgeBase}/Redux-%23593d88.svg?style=flat&logo=redux&logoColor=white` },
    { name: "React Query", url: `${badgeBase}/React%20Query-FF4154?style=flat&logo=react%20query&logoColor=white` },
    { name: "Vite", url: `${badgeBase}/Vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white` },
    { name: "AWS", url: `${badgeBase}/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white` },
    { name: "Stripe", url: `${badgeBase}/Stripe-%236464FF.svg?style=flat&logo=stripe&logoColor=white` },
    { name: "WebRTC", url: `${badgeBase}/WebRTC-333333?style=flat&logo=webrtc&logoColor=white` },
    { name: "Socket.io", url: `${badgeBase}/Socket.io-black?style=flat&logo=socket.io&badgeColor=010101` },
    { name: "Google AI", url: `${badgeBase}/Google%20AI-4285F4?style=flat&logo=google&logoColor=white` },
    { name: "OpenAI", url: `${badgeBase}/OpenAI-412991?style=flat&logo=openai&logoColor=white` },
    { name: "MongoDB", url: `${badgeBase}/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white` },
    { name: "PostgreSQL", url: `${badgeBase}/PostgreSQL-%23316192.svg?style=flat&logo=postgresql&logoColor=white` },
    { name: "Zod", url: `${badgeBase}/Zod-%233068b7.svg?style=flat&logo=zod&logoColor=white` },
    { name: "Clean Architecture", url: `${badgeBase}/Clean%20Architecture-%230D6EFD.svg?style=flat&logo=architecture&logoColor=white` },
    { name: "SOLID Principles", url: `${badgeBase}/SOLID%20Principles-%230D6EFD.svg?style=flat&logo=architecture&logoColor=white` },
    { name: "Node.js", url: `${badgeBase}/Node.js-6DA55F?style=flat&logo=node.js&logoColor=white` },
    { name: "Express.js", url: `${badgeBase}/Express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB` },
    { name: "Tailwind CSS", url: `${badgeBase}/Tailwind%20CSS-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white` },
    { name: "Vercel", url: `${badgeBase}/Vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white` },
    { name: "Firebase", url: `${badgeBase}/Firebase-%23039BE5.svg?style=flat&logo=firebase` },
    { name: "Razorpay", url: `${badgeBase}/Razorpay-%2300A7E1.svg?style=flat&logo=razorpay&logoColor=white` },
    { name: "Google Analytics", url: `${badgeBase}/Google%20Analytics-E37400?style=flat&logo=google-analytics&logoColor=white` },
    { name: "Vercel Analytics", url: `${badgeBase}/Vercel%20Analytics-E37400?style=flat&logo=vercel-analytics&logoColor=white` },
    { name: "Styled Components", url: `${badgeBase}/Styled%20Components-DB7093?style=flat&logo=styled-components&logoColor=white` },
    { name: "Radix UI", url: `${badgeBase}/Radix%20UI-161618.svg?style=flat&logo=radix-ui&logoColor=white` },
    { name: "Axios", url: `${badgeBase}/Axios-5A29E3?style=flat&logo=axios&logoColor=white` },
    { name: "JWT", url: `${badgeBase}/JWT-black?style=flat&logo=JSON%20web%20tokens` },
    { name: "OAuth", url: `${badgeBase}/OAuth-3C78A9?style=flat&logo=oauth&logoColor=white` },
    { name: "Joi", url: `${badgeBase}/Joi-0080FF?style=flat&logo=joi&logoColor=white` },
    { name: "Winston", url: `${badgeBase}/Winston-231F20?style=flat&logo=winston&logoColor=white` },
    { name: "Shadcn UI", url: `${badgeBase}/Shadcn%20UI-4A154B?style=flat&logo=react&logoColor=white` },
    { name: "Recharts", url: `${badgeBase}/Recharts-4CAF50.svg?style=flat&logo=recharts&logoColor=white` },
    { name: "Prettier", url: `${badgeBase}/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black` },
    { name: "ESLint", url: `${badgeBase}/ESLint-4B3263?style=flat&logo=eslint&logoColor=white` },
    { name: "GitHub Actions", url: `${badgeBase}/GitHub%20Actions-%232671E5.svg?style=flat&logo=githubactions&logoColor=white` },
    { name: "Nginx", url: `${badgeBase}/Nginx-%23009639.svg?style=flat&logo=nginx&logoColor=white` },
    { name: "Render", url: `${badgeBase}/Render-%46E3B7.svg?style=flat&logo=render&logoColor=white` },
    { name: "Cloudflare", url: `${badgeBase}/Cloudflare-F38020?style=flat&logo=cloudflare&logoColor=white` },
    { name: "V0", url: `${badgeBase}/V0-4E54E2?style=flat&logo=react&logoColor=white` },
    { name: "React Hook Form", url: `${badgeBase}/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white` },
    { name: "Context API", url: `${badgeBase}/Context%20API-000000?style=flat&logo=react` },
    { name: "JavaScript", url: `${badgeBase}/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E` },
    { name: "MySQL", url: `${badgeBase}/MySQL-4479A1.svg?style=flat&logo=mysql&logoColor=white` },
    { name: "Bootstrap", url: `${badgeBase}/Bootstrap-%238511FA.svg?style=flat&logo=bootstrap&logoColor=white` },
    { name: "jQuery", url: `${badgeBase}/jQuery-%230769AD.svg?style=flat&logo=jquery&logoColor=white` },
    { name: "NPM", url: `${badgeBase}/NPM-%23CB3837.svg?style=flat&logo=npm&logoColor=white` },
    { name: "Nodemon", url: `${badgeBase}/Nodemon-%23323330.svg?style=flat&logo=nodemon&logoColor=%BBDEAD` },
    { name: "Postman", url: `${badgeBase}/Postman-FF6C37?style=flat&logo=postman&logoColor=white` },
    { name: "Figma", url: `${badgeBase}/Figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white` },
    { name: "Framer", url: `${badgeBase}/Framer-black?style=flat&logo=framer&logoColor=blue` },
    { name: "PDFKit", url: `${badgeBase}/PDFKit-ff4f00.svg?style=flat&logo=pdfkit&logoColor=white` },
    { name: "Sharp", url: `${badgeBase}/Sharp-ff4f00.svg?style=flat&logo=sharp&logoColor=white` },
    { name: "PDF Viewer", url: `${badgeBase}/PDF%20Viewer-ff4f00.svg?style=flat&logo=pdf&logoColor=white` },
    { name: "Cookies", url: `${badgeBase}/Cookies-ffcc00.svg?style=flat&logo=cookie&logoColor=white` },
    { name: "EJS", url: `${badgeBase}/EJS-8A3FFA.svg?style=flat&logo=ejs&logoColor=white` },
    { name: "Nuqs", url: `${badgeBase}/Nuqs-000000?style=flat&logo=react&logoColor=white` },
    { name: "Cloudinary", url: `${badgeBase}/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white` },
    { name: "Next.js 15", url: `${badgeBase}/Next.js%2015-black?style=flat&logo=next.js&logoColor=white` },
    { name: "React 19", url: `${badgeBase}/React%2019-%2320232a?style=flat&logo=react&logoColor=%2361DAFB` },
    { name: "Hostinger", url: `${badgeBase}/Hostinger-%23F7931E.svg?style=flat&logo=hostinger&logoColor=white` },
    { name: "Multer", url: `${badgeBase}/Multer-%23FEFEFE.svg?style=flat&logo=multer&logoColor=black` },
    { name: "Jest", url: `${badgeBase}/Jest-%23C21325.svg?style=flat&logo=jest&logoColor=white` },
    { name: "Redis", url: `${badgeBase}/Redis-%23DC382D.svg?style=flat&logo=redis&logoColor=white` },
    { name: "Passport", url: `${badgeBase}/Passport-%2340AEF0.svg?style=flat&logo=passport&logoColor=white` },
    { name: "Geolocation", url: `${badgeBase}/Geolocation-%233E6E93.svg?style=flat&logo=google-maps&logoColor=white` },
    { name: "Framer Motion", url: `${badgeBase}/Framer%20Motion-%23000000.svg?style=flat&logo=framer&logoColor=white` },
    { name: "Chalk", url: `${badgeBase}/Chalk-4A148C?style=flat&logo=chalk&logoColor=white` },
    { name: "Commander", url: `${badgeBase}/Commander-6A1B9A?style=flat&logo=terminal&logoColor=white` },
    { name: "Execa", url: `${badgeBase}/Execa-00796B?style=flat&logo=terminal&logoColor=white` },
    { name: "Inquirer", url: `${badgeBase}/Inquirer-1565C0?style=flat&logo=inquirer&logoColor=white` },
    { name: "Ora", url: `${badgeBase}/Ora-FF6F00?style=flat&logo=ora&logoColor=white` },
    { name: "Lucide Icons", url: `${badgeBase}/Lucide%20Icons-%23000000.svg?style=flat&logo=react&logoColor=white` },
    { name: "Zustand", url: `${badgeBase}/Zustand-%232F2F2F.svg?style=flat&logo=react&logoColor=white` },
    { name: "Inversify", url: `${badgeBase}/Inversify-%23FFD700.svg?style=flat&logo=javascript&logoColor=black` },
    { name: "bcryptjs", url: `${badgeBase}/bcryptjs-%232E8B57.svg?style=flat&logo=javascript&logoColor=white` },
    { name: "Nodemailer", url: `${badgeBase}/Nodemailer-%23FFA500.svg?style=flat&logo=node.js&logoColor=white` },
];

export const baseUrlTech = "/assets/tech";


export const techCategories: TechCategory[] = [
    {
        id: 'backend',
        name: 'Backend Development',
        description: 'Server-side frameworks, APIs, and authentication',
        icon: '⚙️',
        color: 'from-green-500 to-emerald-500',
        technologies: [
            // Backend Frameworks
            { name: "NodeJS", url: `${baseUrlTech}/nodejs.svg` },
            { name: "ExpressJS", url: `${baseUrlTech}/express.svg` },
            { name: "Nest JS", url: `${baseUrlTech}/nestjs.svg` },

            // Real-time Communication
            { name: "Socket.io", url: `${baseUrlTech}/socket-io.svg` },
            { name: "WebRTC", url: `${baseUrlTech}/webrtc.svg` },

            // Authentication & Authorization
            { name: "JWT", url: `${baseUrlTech}/jwt.png` },
            { name: "OAuth", url: `${baseUrlTech}/oauth.svg` },
            { name: "Passport Js", url: `${baseUrlTech}/passport.png` },

            // HTTP & API Tools
            { name: "Axios", url: `${baseUrlTech}/axios.svg` },

            { name: "SendGrid", url: `${baseUrlTech}/sendgrid.png` }
        ]
    },
    {
        id: 'frontend-core',
        name: 'Frontend Development',
        description: 'Core frontend frameworks, languages, and build tools',
        icon: '🎨',
        color: 'from-blue-500 to-cyan-500',
        technologies: [
            // Languages & Frameworks
            { name: "TypeScript", url: `${baseUrlTech}/typescript.svg` },
            { name: "JavaScript", url: `${baseUrlTech}/javascript.svg` },
            { name: "ReactJS", url: `${baseUrlTech}/react.svg` },
            { name: "Next JS", url: `${baseUrlTech}/nextjs.svg` },
            { name: "Vite", url: `${baseUrlTech}/vite.svg` },
            { name: "jQuery", url: `${baseUrlTech}/jquery.svg` },

            // State Management & Forms
            { name: "Redux", url: `${baseUrlTech}/redux.svg` },
            { name: "React Query", url: `${baseUrlTech}/react-query.svg` },
            { name: "Nuqs", url: `${baseUrlTech}/nuqs.svg` },
            { name: "React Form", url: `${baseUrlTech}/react-hook-form.svg` },
            { name: "Zod", url: `${baseUrlTech}/zod.svg` },
            { name: "Joi", url: `${baseUrlTech}/joi.svg` },
        ]
    },
    {
        id: 'database',
        name: 'Database Systems',
        description: 'Database management and data storage solutions',
        icon: '🗄️',
        color: 'from-orange-500 to-red-500',
        technologies: [
            // Databases
            { name: "MongoDB", url: `${baseUrlTech}/mongodb.svg` },
            { name: "Postgres", url: `${baseUrlTech}/postgresql.svg` },
            { name: "MySQL", url: `${baseUrlTech}/mysql.svg` },
            { name: "Redis", url: `${baseUrlTech}/redis.png` },

            // Backend as a Service
            { name: "Supabase", url: `${baseUrlTech}/supabase.png` },
            { name: "Firebase", url: `${baseUrlTech}/firebase.svg` },
            { name: "Appwrite", url: `${baseUrlTech}/appwrite.svg` },
            { name: "Strapi", url: `/assets/org/strapi.png` },
        ]
    },
    {
        id: 'cloud-hosting',
        name: 'Cloud & Hosting',
        description: 'Cloud platforms, hosting services, and infrastructure',
        icon: '☁️',
        color: 'from-sky-500 to-blue-500',
        technologies: [
            // Cloud & Hosting
            { name: "AWS", url: `${baseUrlTech}/aws.svg` },
            { name: "Vercel", url: `${baseUrlTech}/vercel.svg` },
            { name: "Render", url: `${baseUrlTech}/render.svg` },
            { name: "Hostinger", url: `${baseUrlTech}/hostinger.png` },
            { name: "Cloudinary", url: `${baseUrlTech}/cloudinary.png` },
            { name: "Hetzner", url: `${baseUrlTech}/hetzner.ico` },
        ]
    },
    {
        id: 'mobile',
        name: 'Mobile Development',
        description: 'Cross-platform mobile applications',
        icon: '📱',
        color: 'from-purple-500 to-pink-500',
        technologies: [
            { name: "React Native", url: `${baseUrlTech}/react.svg` },
            { name: "Expo", url: `${baseUrlTech}/expo.svg` },
        ]
    },
    {
        id: 'ai-payments',
        name: 'AI & Payment Systems',
        description: 'AI services and payment integration',
        icon: '🤖',
        color: 'from-violet-500 to-purple-500',
        technologies: [
            // AI & Machine Learning
            { name: "OpenAI", url: `${baseUrlTech}/openai.svg` },
            { name: "Google AI", url: `${baseUrlTech}/google-ai.svg` },
            { name: "Hugging Face", url: `${baseUrlTech}/huggingface.png` },
            { name: "Together ai", url: `${baseUrlTech}/together-ai.png` },
            { name: "Gradio", url: `${baseUrlTech}/gradio.png` },

            // Payment Systems
            { name: "Stripe", url: `${baseUrlTech}/stripe.svg` },
            { name: "Razorpay", url: `${baseUrlTech}/razorpay.svg` },
            { name: "Dodo", url: `${baseUrlTech}/dodo.png` },
            { name: "Chappa", url: `${baseUrlTech}/chappa.svg` },
        ]
    },
    {
        id: 'ui-design',
        name: 'UI & Design Systems',
        description: 'Styling, animations, UI components, and design tools',
        icon: '🎭',
        color: 'from-pink-500 to-purple-500',
        technologies: [
            // Styling & Animations
            { name: "TailwindCSS", url: `${baseUrlTech}/tailwind.svg` },
            { name: "Bootstrap", url: `${baseUrlTech}/bootstrap.svg` },
            { name: "Framer Motion", url: `${baseUrlTech}/framer-motion.svg` },
            { name: "Three.JS", url: `${baseUrlTech}/threejs-1.svg` },
            { name: "Rombo", url: `${baseUrlTech}/rombo.svg` },
            { name: "Figma", url: `${baseUrlTech}/figma-icon.svg` },

            // UI Component Libraries
            { name: "Shadcn", url: `${baseUrlTech}/shadcn.svg` },
            { name: "Radix UI", url: `${baseUrlTech}/radix-ui.svg` },
            { name: "Mui UI", url: `${baseUrlTech}/mui.png` },
            { name: "Aceternity", url: `${baseUrlTech}/aceternity.png` },
            { name: "Origin Ui", url: `${baseUrlTech}/origin.ico` },
            { name: "Chart.js", url: `${baseUrlTech}/chartjs.svg` },
        ]
    },
    {
        id: 'cli-tools',
        name: 'CLI Development Tools',
        description: 'Command-line interface development libraries',
        icon: '⌨️',
        color: 'from-slate-500 to-gray-600',
        technologies: [
            { name: "Chalk", url: `${baseUrlTech}/chalk.svg` },
            { name: "Commander", url: `${baseUrlTech}/commander.svg` },
            { name: "Execa", url: `${baseUrlTech}/execa.svg` },
            { name: "Inquirer", url: `${baseUrlTech}/inquirer.svg` },
            { name: "Ora", url: `${baseUrlTech}/ora.svg` },
        ]
    },
    {
        id: 'devops-testing',
        name: 'DevOps & Testing',
        description: 'CI/CD, containerization, testing, and code quality tools',
        icon: '🚀',
        color: 'from-blue-600 to-purple-600',
        technologies: [
            // DevOps & CI/CD
            { name: "Docker", url: `${baseUrlTech}/docker.svg` },
            { name: "GitHub Actions", url: `${baseUrlTech}/github-action.svg` },
            { name: "Nginx", url: `${baseUrlTech}/nginx.svg` },

            // Testing & Code Quality
            { name: "Jest", url: `${baseUrlTech}/jest.png` },
            { name: "ESLint", url: `${baseUrlTech}/eslint.svg` },
            { name: "Biome", url: `${baseUrlTech}/biome.svg` },

            // API Testing
            { name: "Postman", url: `${baseUrlTech}/postman.svg` },
            { name: "Thunder Client", url: `${baseUrlTech}/thunder-client.png` },
        ]
    },
    {
        id: 'tools-utilities',
        name: 'Development Utilities',
        description: 'Package managers, monitoring, and development utilities',
        icon: '🛠️',
        color: 'from-amber-500 to-orange-500',
        technologies: [
            // Package Managers
            { name: "NPM", url: `${baseUrlTech}/npm.svg` },
            { name: "PNPM", url: `${baseUrlTech}/pnpm.png` },
            { name: "YARN", url: `${baseUrlTech}/yarn.png` },

            // Monitoring & Analytics
            { name: "Vercel Analytics", url: `${baseUrlTech}/vercel-analytics.svg` },
            { name: "Google Analytics", url: `${baseUrlTech}/google-analytics.svg` },
            { name: "Winston", url: `${baseUrlTech}/winston.svg` },
            { name: "PM2", url: `${baseUrlTech}/pm2.png` },
        ]
    }
];

export const technologies = techCategories.flatMap(category => category.technologies);