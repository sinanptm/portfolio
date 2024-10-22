'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/constants";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function SkillsSection() {

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

  const Skills = useMemo(()=>{
    return skills.map((skill, index) => (
      <motion.div key={index} variants={itemVariants}>
        <img src={skill.url} alt={skill.name} className="h-6" />
      </motion.div>
    ))
  },skills)

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
            {Skills} 
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
