'use client'

import { lazy, Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"
import { HeroSection } from "@/components/sections/hero" // Keep hero section for immediate loading
import { AnimatedBackground } from "@/components/3d/animated-background"

// Lazy load non-critical sections
const TrustStrip = lazy(() => import("@/components/sections/trust-strip").then(mod => ({ default: mod.TrustStrip })))
const FeaturedProjects = lazy(() => import("@/components/sections/featured-projects").then(mod => ({ default: mod.FeaturedProjects })))
const CTABand = lazy(() => import("@/components/sections/cta-band").then(mod => ({ default: mod.CTABand })))
const FloatingActionButton = lazy(() => import("@/components/ui/floating-action-button").then(mod => ({ default: mod.FloatingActionButton })))

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdellatif GOURRI",
            "jobTitle": "Développeur Full-Stack & Étudiant Ingénieur",
            "url": "https://fullstack-engineer-portfolio.replit.app",
            "image": "/image_profil.jpg",
            "description": "Portfolio d'Abdellatif GOURRI, élève-ingénieur en 3ᵉ année à l'EHTP, passionné par le développement Full-Stack. Compétences en Laravel, Vue.js, Spring Boot, Flutter et Docker. À la recherche d'un stage PFE (janvier/février 2026).",
            "email": "mailto:gourri.abdellatif@gmail.com",
            "sameAs": [
              "https://www.linkedin.com/in/abdellatif-gourri-989b7a1b8/",
              "https://github.com/Abdellatif444"
            ],
            "knowsAbout": [
              "Software Engineering",
              "Full-Stack Development",
              "Laravel",
              "Vue.js",
              "Spring Boot",
              "Flutter",
              "Docker",
              "DevOps",
              "PostgreSQL",
              "MySQL"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rabat",
              "addressCountry": "Morocco"
            }
          })
        }}
      />

      <main className="min-h-screen relative overflow-x-hidden">
        <Analytics />
        {/* 3D Animated Background */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <AnimatedBackground />
        </div>

        <div className="relative z-10">
          {/* Hero Section - Load immediately */}
          <HeroSection />

          {/* Trust Strip - Lazy loaded */}
          <Suspense fallback={<div className="h-20 bg-black/20 animate-pulse" />}>
            <TrustStrip />
          </Suspense>

          {/* Featured Projects - Lazy loaded */}
          <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
            <FeaturedProjects />
          </Suspense>

          {/* CTA - Lazy loaded */}
          <Suspense fallback={<div className="h-32 bg-black/20 animate-pulse" />}>
            <CTABand />
          </Suspense>
        </div>

        {/* Floating Action Button - Lazy loaded */}
        <Suspense fallback={null}>
          <FloatingActionButton />
        </Suspense>
      </main>
    </>
  )
}
