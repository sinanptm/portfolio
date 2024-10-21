import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-semibold text-purple-400 mb-6">Technical Skills</h2>
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-purple-400">Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <img src={skill.url} alt={skill.name} className="h-6" />
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
