'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/constants";
import Image from "next/image";
import { useMemo } from "react";

export default function SkillsSection() {
  const Skills = useMemo(() =>
    skills.map((skill, index) => (
      <div key={index}>
        <Image
          src={skill.url}
          alt={`Logo of ${skill.name}`}
          width={23}
          height={23}
          className="h-6 w-auto"
        />
      </div>
    )),
    [skills]
  );

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-purple-400 mb-6">Technical Skills</h2>
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-purple-400">Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {Skills}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
