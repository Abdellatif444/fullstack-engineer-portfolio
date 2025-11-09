"use client";

import { Star, TrendingUp, Users, GraduationCap, Cloud, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

// Points forts basés sur mon parcours et expériences
const trustElements = [
    {
        name: "Élève-Ingénieur EHTP",
        icon: GraduationCap,
        description:
            "3ᵉ année Génie Informatique à l'École Hassania des Travaux Publics, solide formation en algorithmique, POO et architecture logicielle.",
        color: "text-accent",
        bgColor: "bg-accent/10",
        borderColor: "border-accent/20",
    },
    {
        name: "Expérience Full-Stack",
        icon: TrendingUp,
        description: "Développement d'applications web et mobiles avec Laravel, Vue.js, Spring Boot et Flutter lors de stages professionnels réussis et projets académiques.",
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
    },
    {
        name: "DevOps & Conteneurisation",
        icon: Cloud,
        description:
            "Maîtrise de Docker/Docker Compose pour orchestrer des environnements reproductibles et optimiser les déploiements d'applications.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/10",
        borderColor: "border-cyan-400/20",
    },
    {
        name: "Stages Professionnels",
        icon: Star,
        description:
            "Expériences concrètes chez OPTIZAWORKS (gestion de stocks), OHSE CAPITAL (app HealthTech) et Marolet (optimisation web).",
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/10",
        borderColor: "border-yellow-400/20",
    },
    {
        name: "Bases de Données & API",
        icon: BrainCircuit,
        description:
            "Expérience en conception et administration de bases de données (MySQL, PostgreSQL, MinIO) et développement d'API REST.",
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
    },
    {
        name: "Capacité d'Adaptation",
        icon: Users,
        description:
            "Rigoureux, curieux et en apprentissage continu. J'évolue constamment pour apporter une réelle valeur aux équipes et projets.",
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
    },
];

export function TrustStrip() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">
                <motion.div
                    className="text-center space-y-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Section Header */}
                    <div className="space-y-4">
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Pourquoi Me{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                                Choisir?
                            </span>
                        </motion.h2>
                        <motion.h2
                            className="text-4xl font-bold tracking-tight text-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Compétences & Expériences
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Élève-ingénieur passionné par le développement Full-Stack, je combine formation solide et expériences concrètes.
                            À la recherche d'un stage PFE pour contribuer à des projets innovants et continuer à développer mes compétences.
                        </motion.p>
                    </div>

                    {/* Trust Badges Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trustElements.map((element, index) => (
                            <motion.div
                                key={element.name}
                                className="relative group p-6 rounded-xl bg-card/40 border border-primary/10 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 shadow-lg hover:shadow-primary/10"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 },
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`p-3 rounded-lg ${element.bgColor} border ${element.borderColor}`}
                                    >
                                        <element.icon
                                            className={`w-6 h-6 ${element.color}`}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {element.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {element.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}