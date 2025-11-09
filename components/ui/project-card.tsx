"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, LucideIcon, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  liveHref: string;
  githubHref: string;
  image: string; // New field for project image
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const liveDisabled = !project.liveHref || project.liveHref === "#";
  const githubDisabled = !project.githubHref || project.githubHref === "#";
  return (
    <motion.div
      className="h-full group"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Card className={`h-full flex flex-col bg-card/50 border-2 ${project.borderColor} hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}>
        {/* Project Image or Fallback */}
        <div className="relative h-48 overflow-hidden">
          {!imageError ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </>
          ) : (
            // Fallback design avec fond coloré
            <div className={`w-full h-full ${project.bgColor} flex items-center justify-center relative overflow-hidden`}>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/20" />
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
              
              {/* Icon centrée */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className={`p-6 rounded-2xl border-2 ${project.borderColor} backdrop-blur-sm bg-black/20`}>
                  <project.icon className={`w-12 h-12 ${project.color}`} />
                </div>
                <Code2 className={`w-8 h-8 ${project.color} opacity-50`} />
              </div>
            </div>
          )}
          
          {/* Status Badge Overlay */}
          <div className="absolute top-4 right-4">
            <Badge
              variant="secondary"
              className={`font-mono text-xs ${project.bgColor} ${project.borderColor} border backdrop-blur-sm`}
            >
              {project.status}
            </Badge>
          </div>

          {/* Icon Overlay (only if image loaded) */}
          {!imageError && (
            <div className={`absolute bottom-4 left-4 p-3 rounded-xl border ${project.borderColor} ${project.bgColor} backdrop-blur-sm`}>
              <project.icon className={`w-6 h-6 ${project.color}`} />
            </div>
          )}
        </div>

        {/* Content - Full Description */}
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        {/* Tags */}
        <CardContent className="flex-grow flex flex-col justify-end pb-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs font-mono bg-background/80 hover:bg-primary/10 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        {/* Action Buttons */}
        <CardFooter className="pt-0 flex gap-2">
          <Button
            {...(!liveDisabled && { asChild: true })}
            variant="outline"
            size="sm"
            className={`flex-1 ${liveDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-primary/10'}`}
            disabled={liveDisabled}
            aria-disabled={liveDisabled}
          >
            {liveDisabled ? (
              <span className="flex items-center justify-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </span>
            ) : (
              <a href={project.liveHref} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
          </Button>
          <Button
            {...(!githubDisabled && { asChild: true })}
            variant="outline"
            size="sm"
            className={`flex-1 ${githubDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-primary/10'}`}
            disabled={githubDisabled}
            aria-disabled={githubDisabled}
          >
            {githubDisabled ? (
              <span className="flex items-center justify-center">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </span>
            ) : (
              <a href={project.githubHref} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
