"use client";

import { useState, useEffect, memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/types";
import { skills } from "@/constants";

type Props = {
    project: Project | null;
    isOpen: boolean;
    setOpen: (open: boolean) => void;
};

const ProjectModal = ({ isOpen, project, setOpen }: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
  
    const MemoizedTechnologies = useMemo(() => {
        if (!project) return null;
        
        return project.technologies.map((techIndex) => (
            <Image
                key={techIndex}
                src={skills[techIndex].url}
                alt={skills[techIndex].name}
                width={80}
                height={20}
                className="h-6"
            />
        ));
    }, [project]);

    if (!isMounted) {
        return null;
    }

    if (!project) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                    <DialogDescription>
                        <span className="text-muted-foreground">{project.description}</span>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Project Details</h3>
                        <p className="text-sm text-muted-foreground">{project.detailedDescription}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {MemoizedTechnologies}
                        </div>
                    </div>
                    {project.achievements && project.achievements.length > 0 && (
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Key Achievements And Features</h3>
                            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                {project.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <Separator />
                    <div className="flex flex-wrap justify-between gap-2">
                        {project.link && (
                            <Button asChild className="flex-1">
                                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                    Visit Project
                                </Link>
                            </Button>
                        )}
                        {project.githubLink && (
                            <Button variant="outline" asChild className="flex-1">
                                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    View on GitHub
                                </Link>
                            </Button>
                        )}
                        {project.demoLink && (
                            <Button variant="secondary" asChild className="flex-1">
                                <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                    {project.isLinkedin ? "View on LinkedIn" : "Watch Demo"}
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default memo(ProjectModal);