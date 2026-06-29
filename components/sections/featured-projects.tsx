"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Vote, School } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard, ProjectData } from "@/components/ui/project-card";

// Mes 3 meilleurs projets (Featured)
const projects: ProjectData[] = [
    {
        id: "gestion-stock-jakarta",
        title: "Gestion de Stock - Jakarta EE",
        description: "Application web de gestion de stock développée avec Jakarta EE 10 pour une entreprise de produits technologiques.",
        status: "Public",
        tags: ["Java", "Jakarta EE", "JPA", "JSF"],
        icon: School,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&auto=format&q=80",
        liveHref: "#",
        githubHref: "https://github.com/Abdellatif444/-Gestion-de-Stock---Application-Jakarta-EE"
    },
    {
        id: "sgc-angular-django",
        title: "Système de Gestion Scolaire",
        description: "Système de Gestion Scolaire développé avec Angular (frontend) et Django (backend). Gestion complète des élèves, professeurs, classes et notes avec interface moderne et responsive.",
        status: "Public",
        tags: ["Angular", "Django", "TypeScript", "Python", "HTML"],
        icon: Vote,
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&auto=format&q=80",
        liveHref: "#",
        githubHref: "https://github.com/Abdellatif444/SGC"
    },
    {
        id: "site-safe-ai",
        title: "SiteSafe AI - Supervision HSE par IA",
        description: "Système de supervision HSE intelligente en temps réel sur les chantiers. Détection automatique du non-port des EPI (casque, gilet, gants, chaussures) avec Spring Boot, React, Python IA, Kafka et Docker Compose.",
        status: "Privé",
        tags: ["React", "Spring Boot", "Python IA", "Kafka", "Docker", "WebSockets"],
        icon: Bot,
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        borderColor: "border-red-400/20",
        image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=600&h=400&fit=crop&auto=format&q=80",
        liveHref: "#",
        githubHref: "#"
    },
];

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Mes{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                            Projets Phares
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Une sélection de mes projets professionnels et académiques qui démontrent mes compétences en développement Full-Stack,
                        de la conception au déploiement.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Updated Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Button asChild size="lg" className="font-semibold">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}