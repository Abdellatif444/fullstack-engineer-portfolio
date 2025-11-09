'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Brain,
  Code,
  Award,
  Users,
  Coffee,
  Globe,
  BookOpen,
  ExternalLink,
  Calendar,
  MapPin,
  Microscope
} from 'lucide-react'

// Metadata moved to layout.tsx or removed for client component

// Carousel automatique pour les médias
function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const media = [
    { type: 'video', src: '/about/a.mp4', duration: 10000 }, // 10 secondes pour la vidéo
    { type: 'image', src: '/about/5927911.gif', duration: 5000 }, // 5 secondes
    { type: 'image', src: '/about/télécharger.gif', duration: 5000 },
    { type: 'image', src: '/about/télécharger1.jfif', duration: 5000 }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length)
    }, media[currentIndex].duration)

    return () => clearTimeout(timer)
  }, [currentIndex, media])

  const current = media[currentIndex]

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
      {current.type === 'video' ? (
        <video
          key={currentIndex}
          autoPlay
          muted
          playsInline
          className="w-full h-auto rounded-lg shadow-2xl transition-opacity duration-500"
          style={{
            clipPath: 'inset(0 0 12% 0)',
            transform: 'scale(1.14)',
            transformOrigin: 'center'
          }}
        >
          <source src={current.src} type="video/mp4" />
        </video>
      ) : (
        <Image
          key={currentIndex}
          src={current.src}
          alt="Media showcase"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-2xl transition-opacity duration-500 object-cover"
          style={{
            clipPath: 'inset(0 0 12% 0)',
            transform: 'scale(1.14)',
            transformOrigin: 'center'
          }}
        />
      )}
    </div>
  )
}

const skills = [
  { category: 'Langages & Frameworks', items: ['Python', 'Java', 'C', 'C++', 'C#', 'JavaScript', 'Laravel', 'Spring Boot', 'Vue.js', 'React.js', 'Flutter'] },
  { category: 'Bases de données', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'] },
  { category: 'Développement Web', items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'XML', 'ASP.NET'] },
  { category: 'DevOps & Outils', items: ['Docker', 'Docker Compose', 'Git/GitHub', 'Linux/Unix'] },
  { category: 'Méthodologies & Gestion', items: ['UML', 'Merise', 'Agile/Scrum', 'GanttProject', 'ClickUp', 'Trello'] },
  { category: 'Design & Créativité', items: ['Figma', 'Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'Microsoft Office'] },
]

const achievements = [
  {
    title: 'Leadership Étudiant',
    description: 'Chef Design du Club Social de l\'EHTP',
    icon: Users,
    year: '2024-2025',
  },
  {
    title: 'Activités Parascolaires',
    description: 'Membre actif Club Geo IT & Club IT - Organisation CODE_IT_7',
    icon: Users,
    year: '2023-2025',
  },
  {
    title: 'Excellence Technique',
    description: 'Projets Full-Stack avec Laravel, Vue.js, Spring Boot et Flutter',
    icon: Code,
    year: '2025',
  },
  {
    title: 'DevOps & Conteneurisation',
    description: 'Expertise en Docker/Compose pour environnements reproductibles',
    icon: Brain,
    year: '2025',
  },
]

const values = [
  {
    title: 'Innovation First',
    description: 'Je crois en l\'importance de l\'innovation et de la créativité dans le développement logiciel.',
    icon: Brain,
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Qualité & Craftsmanship',
    description: 'Je m\'efforce de livrer des solutions de haute qualité, en suivant les meilleures pratiques et en respectant les normes.',
    icon: Award,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Apprentissage Continu',
    description: 'Je suis convaincu que l\'apprentissage continu est essentiel pour rester à jour avec les dernières technologies et tendances.',
    icon: BookOpen,
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Collaboration',
    description: 'Je crois en l\'importance de la collaboration et du travail d\'équipe pour atteindre des objectifs communs.',
    icon: Users,
    gradient: 'from-pink-500/20 to-violet-500/20',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                  <Badge variant="outline" className="mr-3">
                    About Me
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Casablanca, Rabat, Maroc
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Créer des Solutions Innovantes avec<br />
                  Le Code & La Passion
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Élève-ingénieur en 3ᵉ année à l'EHTP, passionné par le développement Full-Stack et l'architecture logicielle.
                  Je conçois des applications web et mobiles performantes avec Laravel, Vue.js, Spring Boot et Flutter,
                  tout en maîtrisant les pratiques DevOps (Docker/Compose).
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Me Contacter
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/resume">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir mon CV
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <MediaCarousel />
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-card border rounded-lg p-4 shadow-lg">
                  <div className="flex items-center">
                    <Code className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <p className="text-2xl font-bold">10+</p>
                      <p className="text-sm text-muted-foreground">Projets</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-card border rounded-lg p-4 shadow-lg">
                  <div className="flex items-center">
                    <Calendar className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-muted-foreground">Stages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Mon Parcours</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6" style={{ textAlign: 'justify' }}>
                Mon parcours en informatique a débuté par une curiosité insatiable pour la technologie et une envie de comprendre son fonctionnement. Après un Baccalauréat en Sciences Mathématiques, j'ai intégré les Classes Préparatoires MPSI à Agadir, où j'ai développé des bases solides en mathématiques, physique et informatique.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ textAlign: 'justify' }}>
                Depuis mon entrée à l'École Hassania des Travaux Publics (EHTP) en 2023, je me passionne pour le développement Full-Stack et l'architecture logicielle. J'ai eu l'opportunité de travailler sur des projets concrets chez OPTIZAWORKS (gestion de stocks avec Laravel/Vue.js), OHSE CAPITAL (application HealthTech avec Spring Boot/Flutter) et Marolet (optimisation WordPress).
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ textAlign: 'justify' }}>
                Mes expériences m'ont permis de maîtriser les technologies modernes comme Docker/Compose pour la conteneurisation, ainsi que les pratiques DevOps et Agile. J'ai également développé une expertise en conception d'API REST, gestion de bases de données (MySQL, PostgreSQL) et création d'interfaces responsives.
              </p>
              <p className="text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
                Aujourd'hui, je continue d'approfondir mes compétences techniques et professionnelles, toujours à la recherche de nouveaux défis. Mon objectif est de contribuer à des projets innovants et d'apporter une réelle valeur aux équipes avec lesquelles je collabore.
              </p>  
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Mes Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="relative p-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <value.icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {value.title}
                          </h3>
                          <div className="ml-auto">
                            <Badge variant="outline" className="text-xs opacity-60">
                              0{index + 1}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Réalisations Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement) => (
                <Card key={achievement.title} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <achievement.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{achievement.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Coffee className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Au-delà du Code</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              En dehors du développement, j'étais Chef Design du Club Social de l'EHTP l'année 2024-2025. Je contribue activement aux activités parascolaires : membre actif du Club Geo IT (année 2023-2024) et du Club IT (année 2023-2024) où j'ai participé à l'organisation de l'événement CODE_IT_7. Je crée des supports visuels pour les événements et je m'intéresse également au design graphique avec Photoshop et Illustrator. Je crois que les meilleures innovations naissent de perspectives diverses et d'un apprentissage continu.
            </p>
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <span>4 Langues</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>Apprenant Continu</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>Contributeur Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-8 shadow-lg">
              <Code className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Construisons Quelque Chose d'Incroyable Ensemble
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Je suis toujours enthousiaste à l'idée de collaborer sur des projets innovants et d'explorer de nouveaux défis. 
              Que vous cherchiez un développeur Full-Stack fiable ou quelqu'un pour concevoir une application web/mobile performante, 
              connectons-nous et créons quelque chose d'extraordinaire ensemble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/contact">
                  Commencez une Conversation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow bg-background/80 backdrop-blur">
                <Link href="/experience">
                  View Experience
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}