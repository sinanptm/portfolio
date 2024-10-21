import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image";

export default function ProfileSummary() {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <motion.section className="mb-16" variants={itemVariants}>
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-3xl text-purple-400">Profile Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Self-taught MERN stack developer passionate about building scalable, efficient applications. 
            Fascinated by technology from a young age, I&apos;ve continuously expanded my expertise across 
            various tools and frameworks. Committed to improving my skills, writing better code, and 
            delivering impactful solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button variant="outline" className="w-full sm:w-auto text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300">
              <Image alt="Email" width={13} height={13} src={'/assets/email.svg'} className="mr-2 h-4 w-4" /> muhammedsinan0549@gmail.com
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300">
              <Image alt="Phone" width={13} height={13} src={'/assets/phone.svg'} className="mr-2 h-4 w-4" /> +91 8089507749
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300">
              <Image alt="Resume" width={13} height={13} src={'/assets/download.svg'} className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}