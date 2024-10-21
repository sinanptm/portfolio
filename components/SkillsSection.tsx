import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function SkillsSection() {
  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "SQL", "HTML", "(S)CSS"] },
    { category: "Frameworks", items: ["Node.js", "Express.js", "NestJS", "Next.js", "TailwindCSS"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL"] },
    { category: "Libraries", items: ["React.js", "Socket.io", "Redux", "React Query", "Framer Motion", "Radix UI", "WebRTC", "Axios", "JWT"] },
    { category: "Platforms", items: ["AWS", "GitHub", "Render", "Vercel", "Firebase", "Cloudinary"] },
    { category: "Tools", items: ["Git", "GitHub Actions", "CI/CD", "Winston", "ESLint", "npm"] },
    { category: "Concepts", items: ["Clean Architecture", "MVC Architecture", "SOLID Principles", "Agile Methodologies"] },
    { category: "Others", items: ["Google AI", "OpenAI", "Stripe", "Razorpay", "OAuth 2", "Zod", "Joi", "Vite.js"] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.section 
      className="mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-semibold text-purple-400 mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-purple-700/50 text-purple-200 hover:bg-purple-600/50 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}