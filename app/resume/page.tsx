// Client component for interactive resume page
'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Code,
  Star,
  ExternalLink,
  Download
} from 'lucide-react'

const personalInfo = {
  name: 'Abdellatif GOURRI',
  title: 'Développeur Full-Stack & Étudiant Ingénieur',
  email: 'gourri.abdellatif@gmail.com',
  phone: '+212 609 569 090',
  location: 'Casablanca, Rabat, Maroc',
  linkedin: 'linkedin.com/in/abdellatif-gourri-989b7a1b8',
  github: 'github.com/Abdellatif444',
}

const professionalSummary = `Élève-ingénieur en 3ᵉ année du cycle Ingénieur en Génie Informatique à l'École Hassania des Travaux Publics (EHTP), passionné par la conception et le développement d'applications et de sites web, l'architecture logicielle et les pratiques DevOps (conteneurisation Docker/Compose). Mon parcours m'a permis d'acquérir des compétences solides en algorithmique, structures et bases de données, et en génie logiciel (POO), que je mets au service de projets ambitieux, orientés utilisateur, performants et évolutifs. Actuellement à la recherche d'un stage de fin d'études (PFE) débutant en janvier ou février 2026, je souhaite contribuer à des solutions innovantes et robustes au sein d'équipes exigeantes.`

const experience = [
  {
    title: 'Stage d\'Ingénieur - Développement Full-Stack',
    company: 'OPTIZAWORKS',
    location: 'Agadir, Maroc',
    period: 'Sept 2025 - Présent',
    achievements: [
      "Conception et développement d'une application web de gestion des stocks et des approvisionnements",
      "Implémentation des fonctionnalités principales : gestion des articles, mouvements de stock, inventaire permanent et génération automatique de bons (réception, sortie, commande)",
      "Développement du backend en Laravel (API REST, validation des données) et du frontend en Vue.js (interfaces dynamiques et responsives)",
      "Génération automatique des rapports PDF/Excel et des tableaux de suivi"
    ],
  },
  {
    title: 'Stage d\'Ingénieur - Développement Mobile HealthTech',
    company: 'OHSE CAPITAL',
    location: 'Laâyoune, Maroc',
    period: 'Juil - Sept 2025',
    achievements: [
      "Conception et développement d'une application mobile responsive en HealthTech multi-utilisateurs (OSHApp)",
      "Analyse des besoins métiers et intégration de la communication entre les acteurs RH, HSE, Infirmier et Médecin du travail",
      "Développement du backend en Spring Boot (API REST, sécurité par JWT) et du frontend mobile en Flutter/Dart (interfaces responsives)",
      "Création des maquettes interactives sous Figma, validées avec l'équipe métier",
      "Planification et suivi du projet via GanttProject, selon une approche agile itérative",
      "Implémentation des fonctionnalités : authentification, gestion des rendez-vous médicaux, certificats, notifications in-app et e-mail",
      "Conteneurisation et orchestration avec Docker Compose pour un environnement reproductible",
      "Collaboration et versionnement du code via GitHub (revues de code)"
    ],
  },
  {
    title: 'Stage d\'Initiation Professionnelle - Développement Web',
    company: 'Marolet',
    location: 'Meknès, Maroc',
    period: 'Juil - Août 2024',
    achievements: [
      "Mise à jour et optimisation du site web Behost.ma sur la plateforme WordPress",
      "Amélioration du référencement naturel (SEO) et de l'expérience utilisateur (UX)",
      "Refonte graphique et intégration d'éléments visuels via Canva",
      "Optimisation du code front-end (HTML/CSS, JavaScript) et des performances du site"
    ],
  }
]

const education = [
  {
    degree: 'Élève Ingénieur en Génie Informatique',
    school: 'École Hassania des Travaux Publics (EHTP)',
    location: 'Casablanca, Maroc',
    period: '2023 - 2026',
    details: [
      'Spécialisation en développement d\'applications et architecture logicielle',
      'Compétences en algorithmique, bases de données, génie logiciel (POO) et DevOps',
    ],
  },
  {
    degree: "Classes Préparatoires aux Grandes Écoles d'ingénieurs",
    school: "Filière MPSI (Mathématiques, Physique et Sciences de l'ingénieur)",
    location: "Agadir, Maroc",
    period: "2021 - 2023",
    details: [
      "Préparation intensive en Mathématiques, Physique et Informatique",
      "Formation aux méthodes de résolution de problèmes et pensée analytique"
    ],
  },
  {
    degree: "Baccalauréat en Sciences Mathématiques",
    school: "Lycée Ibn Soulaimane Roudani",
    location: "Taroudant, Maroc",
    period: "2018 - 2021",
    details: [
      "Mention Bien",
      "Spécialisation en mathématiques et sciences"
    ],
  },
]

const skills = {
  'Langages & Frameworks': ['Python', 'Java', 'C', 'C++', 'C#', 'SQL', 'JavaScript', 'Laravel', 'Spring Boot', 'Vue.js', 'React.js', 'Flutter (Dart)', 'ASP.NET'],
  'Développement Web': ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XML'],
  'Bases de données': ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'],
  'DevOps & Outils': ['Docker', 'Docker Compose', 'Git/GitHub', 'Linux/Unix'],
  'Méthodologies & Gestion': ['UML', 'Merise', 'Agile/Scrum', 'GanttProject', 'ClickUp', 'Trello'],
  'Design & Outils': ['Figma', 'Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'Microsoft Office']
};


const certifications = [
  'AWS Educate Machine Learning Foundations — Amazon Web Services (AWS), avril 2025 — https://www.credly.com/badges/98ef4c16-0fbe-412c-b09f-fda86e5ecda4',
  'Cloud Computing Fundamentals — IBM SkillsBuild, avril 2025 — https://www.credly.com/badges/f2276716-9643-444a-a95d-f177fd327678',
  'Introduction à Docker — DataScientest, mars 2025 — ID: 1GOIXVY3WRVSN',
  'Python (Basic) — HackerRank, mars 2025 — ID: 4D65D1A4C0FD',
  'Cassandra: Architecture | Deployment | Performance Monitoring — EDUCBA, février 2025 — ID: UC-82497744-2801-4255-b170-64dce5070b26',
  'Programming Foundations Fundamentals — LinkedIn Learning, mai 2024 — ID: 265632adfae7c7f7cb7bda3bc7931a899d5df7df2b667728ae032422844d330b',
  'Scrum Foundation Professional Certification (SFPC) — CertiProf, mai 2024 — ID: 96682434',
]

const achievements = [
  "Chef Design du Club Social de l'EHTP (2024-2025)",
  "Membre actif du Club Geo IT (année 2023-2024) et du Club IT (année 2023-2024)",
  "Participation à l'organisation de l'événement CODE_IT_7 (Problem Solving Competition)",
  "Conception graphique pour événements (Caravane, Forum social) avec Canva, Photoshop et Illustrator",
  "Participation aux Forum social et Caravane 2024-2025",
  "Développement de projets notables : Application de réservation de vols (ASP.NET), Gestion de stock (Java/J2EE), Serveur Linux d'entreprise",
  "Création de jeux intelligents (Hex et Moulin) en C avec algorithme A*"
]


export default function ResumePage() {
  useEffect(() => {
    document.title = 'CV | Abdellatif GOURRI - Développeur Full-Stack & Étudiant Ingénieur'
  }, [])

  return (
    <div className="min-h-screen relative bg-transparent print:bg-white">
      <AnimatedBackground variant="resume" />

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl opacity-40 group-hover:opacity-60 transition-opacity print:hidden" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-xl print:border-0 print:shadow-none print:bg-white print:backdrop-blur-none">
            <div className="p-8 print:p-6">
              {/* Personal Info Header */}
              <header className="text-center mb-10 print:mb-6">
                <h1 className="text-4xl font-bold text-foreground mb-2">{personalInfo.name}</h1>
                <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-5">{personalInfo.title}</h2>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    {personalInfo.email}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {personalInfo.location}
                  </div>
                </div>

                {/* Links professionnels */}
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <Link
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                    <span className="tracking-wide">{personalInfo.linkedin}</span>
                  </Link>
                  <Link
                    href={`https://${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    <Github className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                    <span className="tracking-wide">{personalInfo.github}</span>
                  </Link>
                </div>

                {/* Quick Stats removed per request to remove numbers */}

                <div className="mt-6 flex justify-center gap-4 print:hidden">
                  <Button size="sm" variant="outline" asChild className="text-xs">
                    <Link href="/CV_GOURRI_ABDELLATIF.pdf" download>
                      <Download className="w-3 h-3 mr-2" />
                      Télécharger CV
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="text-xs bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                    <Link href="/contact">Stage PFE 2026</Link>
                  </Button>
                </div>
              </header>

              {/* Professional Summary */}
              <section className="mb-10">
                <h3 className="text-xl font-bold text-foreground mb-5 flex items-center relative">
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:block w-2 h-6 bg-gradient-to-b from-primary to-accent rounded" />
                  <Star className="w-5 h-5 mr-2 text-primary drop-shadow" />
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base" style={{ textAlign: 'justify' }}>
                  {professionalSummary}
                </p>
              </section>

              <Separator className="my-8" />

              {/* Experience */}
              <section className="mb-10">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-primary" />
                  Professional Experience
                </h3>
                <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                  {experience.map((job, index) => (
                    <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                      {/* Timeline bullet improved alignment */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                          <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                            <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{job.company}</span>
                            <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{job.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {job.period}
                        </div>
                      </div>
                      <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60" style={{ textAlign: 'justify' }}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="my-8" />

              {/* Education */}
              <section className="mb-10">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                  Education
                </h3>
                <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                          <h4 className="text-base font-semibold text-foreground">{edu.degree}</h4>
                          <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                            <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{edu.school}</span>
                            <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{edu.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="my-8" />

              {/* Skills */}
              <section className="mb-10">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-primary" />
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-[10px] tracking-wide uppercase rounded-md bg-muted/70 hover:bg-muted">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="my-8" />

              {/* Certifications & Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <section>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Certifications
                  </h3>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{cert}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://www.linkedin.com/in/abdellatif-gourri-989b7a1b8/details/certifications/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir toutes mes certifications sur LinkedIn
                      </Link>
                    </Button>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-primary" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Footer */}
              <footer className="mt-14 pt-8 border-t border-border/60 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  References available upon request
                </p>
                <div className="flex justify-center gap-4 print:hidden">
                  <Button variant="outline" asChild>
                    <Link href="/projects">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Projects
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>{/* end container */}

      {/* Additional Actions */}
      <section className="py-16 bg-card print:hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vous Recrutez un Stagiaire PFE ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Actuellement en recherche d'un stage PFE (janvier/février 2026), je serais ravi de mettre mes compétences en développement Full-Stack au service de vos projets innovants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contactez-moi
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-4 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300 font-bold shadow-lg hover:shadow-xl">
                <Link href="/projects">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir Mes Projets
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
