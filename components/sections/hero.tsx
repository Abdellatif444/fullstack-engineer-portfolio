"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Stack technique principal
const techStack = ["Java", "Laravel", "Vue.js", "Spring Boot", "Flutter", "Docker", "PostgreSQL", "MySQL"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge
              variant="secondary"
              className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-accent/10 to-primary/10 text-primary border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Disponible pour stage PFE - Janvier/Février 2026</span>
              </div>
            </Badge>

            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                <span className="block">
                  Bonjour, je suis Abdellatif GOURRI
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                  Développeur Full-Stack & Étudiant Ingénieur
                </span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Élève-ingénieur en 3ᵉ année à l'EHTP, passionné par la conception
                d'applications web et mobiles performantes. Expérience en Laravel, Vue.js,
                Spring Boot et Flutter avec Docker/Compose.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 font-bold"
              >
                <Link href="/contact">
                  Contactez-moi <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 font-bold"
              >
                <Link href="/resume">
                  Voir le CV <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visuals & Profile */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* --- VIDEO ANIMÉE (mise à jour) --- */}
            <motion.div
              className="rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative" style={{ overflow: 'hidden' }}>
                <video
                  key="hero-video-v4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto object-cover"
                  poster="/hero-image.jfif"
                  style={{
                    display: 'block',
                    clipPath: 'inset(0 0 12% 0)',
                    transform: 'scale(1.14)',
                    transformOrigin: 'center'
                  }}
                >
                  <source src="/hero-video.mp4?v=4" type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>
                {/* Dégradé pour masquer la coupure avec la couleur du site */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--background)) 100%)'
                  }}
                />
              </div>
            </motion.div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-center text-sm font-semibold text-muted-foreground mb-4">
                CORE TECHNOLOGIES
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 text-xs font-mono"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
