import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image";

const projects = [
  {
    title: "AVM Ayurvedic: Hospital Management",
    description: "A wellness platform with AI-powered health insights and Ayurvedic consultations, featuring video calls, smart booking, and secure payments.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "WebSocket"],
    liveLink: "http://avm-ayurvedic.online/",
    githubLink: "https://github.com/sinanptm/avm-ayurvedic",
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
    title: "Trends: E-commerce Store",
    description: "A full-featured e-commerce platform with secure authentication, dynamic product management, and integrated payment systems.",
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Razorpay"],
    liveLink: "https://trendsonline.online/",
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
    title: "Sahithyolsav Manager",
    description: "A program management application for the SSF Kerala community, built using the MERN stack within three days.",
    technologies: ["React", "Redux", "Express.js", "Node.js", "MongoDB"],
    liveLink: "https://sahityotsav-manager.onrender.com/",
    githubLink: "https://github.com/sinanptm/Program-manager",
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
    liveLink: "https://vercel.com/sinans-projects-8d312afe/url-shortener",
    githubLink: "https://github.com/sinanptm/url-shortener",
    achievements: [
      "Added URL shortening, click tracking, and user authentication with a personalized dashboard.",
      "Gained experience with NestJS, focusing on modular architecture, dependency injection, and JWT authentication."
    ]
  },
  {
    title: "Ace-Quiz: Quiz App",
    description: "A quiz application built using Next.js, TypeScript, and Clean Architecture, focusing on a scalable and maintainable codebase.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Redux", "Express.js", "Node.js"],
    liveLink: "https://quiz-app-six-dusky.vercel.app/",
    githubLink: "https://github.com/sinanptm/Quiz-app",
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
    achievements: [
      "Integrated The Movie Database (TMDb) API for real-time movie data in the Netflix clone.",
      "Implemented secure user authentication with Firebase for both projects.",
      "Developed image uploading functionality for the OLX clone, allowing users to post visually appealing listings."
    ]
  }
];


export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      <h2 className="text-3xl font-semibold text-purple-400 mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-700/50 text-purple-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {project.achievements && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.features && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">Features</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-start space-x-4">
                {project.liveLink && (
                  <Button asChild variant="outline" className="text-gray-300 hover:text-purple-400 hover:border-purple-400">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Image src={'/assets/world.svg'} alt="Live" width={13} height={13} className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                )}
                {project.githubLink && (
                  <Button asChild variant="outline" className="text-gray-300 hover:text-purple-400 hover:border-purple-400">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Image src={'/assets/github.svg'} alt="Live" width={13} height={13} className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
                {project.demoLink && (
                  <Button asChild variant="outline" className="text-gray-300 hover:text-purple-400 hover:border-purple-400">
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <Image src={'/assets/youtube.svg'} alt="Live" width={13} height={13} className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}