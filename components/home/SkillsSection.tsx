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
      <Card className="bg-transparent border-none">
        <CardHeader>
          <CardTitle className="text-xl text-purple-400">Skills</CardTitle>
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
