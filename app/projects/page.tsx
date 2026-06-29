'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Microscope, Github, Calendar, Clock, Code, Brain, Cpu, Rocket, Smartphone, Globe } from 'lucide-react'
import { AnimatedBackground } from '@/components/3d/animated-background'

// Mes projets GitHub réels
// Note: Le metadata est géré par le layout parent car cette page est un Client Component ('use client')
const projects = [
  {
    id: 'site-safe-ai',
    title: 'SiteSafe AI - Supervision HSE par Intelligence Artificielle',
    description: 'Projet de Fin d\'Études (PFE) réalisé chez CID Développement. Système de supervision intelligente en temps réel sur les chantiers de construction pour la détection automatique du non-port des Équipements de Protection Individuelle (EPI).',
    image: null,
    imageGradient: 'from-rose-600 via-red-500 to-orange-500',
    tags: ['React', 'TypeScript', 'Spring Boot', 'Python', 'Kafka', 'Docker', 'YOLO/RT-DETR', 'WebSockets', 'PostgreSQL', 'PostGIS', 'MinIO'],
    categories: ['Full-Stack', 'Web'],
    status: 'Privé',
    timeline: '5 mois',
    year: '2026',
    client: 'CID Développement (PFE)',
    featured: true,
    links: [{ type: 'github', url: '#' }], // Privé
  },
  {
    id: 'pv-mpp-monitor',
    title: 'Supervision Photovoltaïque MPP (En cours)',
    description: 'Système de supervision en temps réel d\'un panneau photovoltaïque avec analyse du point de puissance maximale (MPP). Montage simulé sur Proteus (ESP32 + capteurs ACS712), affichage des courbes I-V et P-V, WebSocket temps réel, import/export CSV. Architecture dockerisée complète (FastAPI + React + PostgreSQL).',
    image: null,
    imageGradient: 'from-blue-500 to-blue-600',
    tags: ['Python', 'FastAPI', 'React', 'Vite', 'TypeScript', 'Docker', 'PostgreSQL', 'WebSocket', 'Chart.js'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '1 mois (en cours)',
    year: '2025',
    client: 'Projet académique - Génie Électrique',
    featured: true,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/pv-mpp-monitor' }],
  },
  {
    id: 'gestion-stock-jakarta',
    title: 'Gestion de Stock - Jakarta EE',
    description: 'Application web de gestion de stock développée avec Jakarta EE 10 pour une entreprise de produits technologiques.',
    image: null,
    imageGradient: 'from-purple-500 to-purple-600',
    tags: ['Java', 'Jakarta EE', 'JPA', 'JSF'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '3 mois',
    year: '2025',
    client: 'Projet académique',
    featured: true,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/-Gestion-de-Stock---Application-Jakarta-EE' }],
  },
  {
    id: 'sgc-angular-django',
    title: 'Système de Gestion Scolaire',
    description: 'Système de Gestion Scolaire avec Angular et Django',
    image: null,
    imageGradient: 'from-green-500 to-emerald-600',
    tags: ['Angular', 'Django', 'TypeScript', 'Python'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '2 mois',
    year: '2025',
    client: 'Projet académique',
    featured: true,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/SGC' }],
  },
  {
    id: 'php-eventmanager',
    title: 'PHP EventManager',
    description: 'Plateforme web complète dédiée à la gestion et à l\'organisation d\'événements. PHP, JavaScript, HTML/CSS, SQL.',
    image: null,
    imageGradient: 'from-red-500 to-rose-600',
    tags: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '2 mois',
    year: '2025',
    client: 'Projet académique',
    featured: true,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/PHP-EventManager' }],
  },
  {
    id: 'whatsautofx',
    title: 'WhatsAutoFX - Automation WhatsApp',
    description: 'Application JavaFX qui automatise la création de groupes WhatsApp. Interface simple et intuitive.',
    image: null,
    imageGradient: 'from-amber-500 to-orange-600',
    tags: ['Java', 'JavaFX', 'Automation'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '1 mois',
    year: '2024',
    client: 'Projet académique',
    featured: true,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/WhatsAutoFX-WhatsApp-Automation-JavaFX' }],
  },
  {
    id: 'hex-game-c',
    title: 'Jeu de Hex en C',
    description: 'Jeu de Hex implémenté en langage C avec une interface console/grille et intelligence artificielle.',
    image: null,
    imageGradient: 'from-purple-500 to-violet-600',
    tags: ['C', 'Algorithmes', 'IA', 'Console'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '1 mois',
    year: '2024',
    client: 'Projet académique',
    featured: false,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/hex-game-c' }],
  },
  {
    id: 'moulin-game-c',
    title: 'Jeu du Moulin en C',
    description: 'Jeu de stratégie à 2 joueurs sur un damier spécial. Placez et déplacez 9 pions pour former des alignements de 3.',
    image: null,
    imageGradient: 'from-lime-500 to-green-600',
    tags: ['C', 'Algorithmes', 'Jeux', 'Console'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '1 mois',
    year: '2024',
    client: 'Projet académique',
    featured: false,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/Moulin-game-c' }],
  },
  {
    id: 'application-kermesse',
    title: 'Application Kermesse',
    description: 'Application ludique permettant à un enfant de commander le buffet lors d\'événements kermesse. Projet développé dans le cadre d\'activités parascolaires du club.',
    image: null,
    imageGradient: 'from-orange-500 to-red-600',
    tags: ['JavaScript', 'HTML/CSS', 'UI/UX', 'Figma', 'Jeu'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '2 semaines',
    year: '2024',
    client: 'Projet parascolaire / Club',
    featured: false,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/application-kermesse' }],
  },
  {
    id: 'ihste',
    title: 'IHSTE - Système de Gestion de Stocks',
    description: 'Logiciel complet de gestion des stocks et approvisionnements développé pour l\'Institut Hôtelier de Tanger. Gestion des articles, inventaire permanent, codes-barres, génération automatique de bons et rapports PDF/Excel.',
    image: null,
    imageGradient: 'from-indigo-500 to-purple-600',
    tags: ['PHP', 'Laravel', 'MySQL', 'PDF', 'Excel', 'Codes-barres'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '3 mois',
    year: '2025',
    client: 'OPTIZAWORKS / IHSTE Tanger',
    featured: true,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/IHSTE' }],
  },
  {
    id: 'fullstack-engineer-portfolio',
    title: 'Portfolio Professionnel Full-Stack',
    description: 'Portfolio professionnel - Ingénieur d\'État EHTP | Full-Stack & DevOps Engineer',
    image: null,
    imageGradient: 'from-cyan-500 to-blue-600',
    tags: ['TypeScript', 'Next.js', 'React', 'TailwindCSS'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '2 mois',
    year: '2025',
    client: 'Projet personnel',
    featured: true,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/fullstack-engineer-portfolio' }],
  },
  {
    id: 'oshapp-application',
    title: 'OSHApp - Application HealthTech Multi-utilisateurs',
    description: 'Application mobile responsive connectant médecins du travail, RH, HSE et infirmiers. Authentification JWT, gestion de rendez-vous médicaux, certificats et notifications. Stage chez OHSE CAPITAL.',
    image: null,
    imageGradient: 'from-emerald-500 to-teal-600',
    tags: ['Flutter', 'Dart', 'Spring Boot', 'JWT', 'Docker Compose', 'Figma'],
    categories: ['Full-Stack', 'Mobile'],
    status: 'Privé',
    timeline: '3 mois',
    year: '2025',
    client: 'OHSE CAPITAL (Laâyoune)',
    featured: true,
    links: [{ type: 'github', url: '#' }], // Privé - pas de lien
  },
  {
    id: 'volexpress',
    title: 'VolExpress - Réservation de Vols',
    description: 'Application ASP.NET Core MVC pour la réservation de vols avec gestion clients/gestionnaires. Développée en C#, Bootstrap, SQL Server et déployée sur IIS.',
    image: null,
    imageGradient: 'from-sky-500 to-blue-600',
    tags: ['C#', 'ASP.NET Core', 'Bootstrap', 'SQL Server', 'IIS'],
    categories: ['Full-Stack', 'Web'],
    status: 'Privé',
    timeline: '2 mois',
    year: '2025',
    client: 'Projet académique',
    featured: false,
    links: [{ type: 'github', url: '#' }], // Privé - pas de lien
  },
  {
    id: 'kit-commun-hospitalier',
    title: 'Kit Commun Hospitalier',
    description: 'Architecture microservices de gestion hospitalière intégrant une brique Blockchain pour la sécurisation et la traçabilité des dossiers médicaux. Orchestration multi-conteneurs.',
    image: null,
    imageGradient: 'from-indigo-600 to-violet-700',
    tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Blockchain', 'Docker Compose', 'Microservices', 'Eureka', 'Gateway'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '3 mois',
    year: '2025',
    client: 'Projet académique',
    featured: true,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/KitCommun-Hospital' }],
  },
  {
    id: 'fpgrowth-recommender',
    title: 'Système de Recommandation FP-Growth',
    description: 'Système de recommandation basé sur l\'algorithme FP-Growth avec une architecture Flask, PostgreSQL et Docker Compose. Permet d\'analyser les transactions et d\'extraire les règles d\'association.',
    image: null,
    imageGradient: 'from-green-600 to-teal-700',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Docker Compose', 'FP-Growth', 'Machine Learning', 'JavaScript', 'HTML/CSS'],
    categories: ['Full-Stack', 'Web'],
    status: 'Public',
    timeline: '1 mois',
    year: '2024',
    client: 'Projet académique',
    featured: false,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/fpgrowth-recommender-system' }],
  },
  {
    id: 'bigfive-personality-test',
    title: 'Test de Personnalité Big Five (OCEAN)',
    description: 'Application web interactive permettant d\'évaluer la personnalité basée sur le modèle psychologique Big Five (OCEAN). Construit avec une interface moderne et soignée.',
    image: null,
    imageGradient: 'from-rose-500 to-pink-600',
    tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'shadcn/ui'],
    categories: ['Web'],
    status: 'Public',
    timeline: '2 semaines',
    year: '2024',
    client: 'Projet personnel',
    featured: false,
    links: [{ type: 'github', url: 'https://github.com/Abdellatif444/bigfive-personality-test' }],
  },
  {
    id: 'rapport-docker-latex',
    title: 'Compilation LaTeX avec Docker',
    description: 'Projet d\'automatisation permettant de compiler automatiquement des rapports LaTeX dans un conteneur Docker, garantissant un environnement de compilation cohérent et reproductible.',
    image: null,
    imageGradient: 'from-slate-600 to-zinc-700',
    tags: ['Python', 'Docker', 'LaTeX', 'Dockerfile', 'Shell', 'Gnuplot', 'Automation'],
    categories: ['Full-Stack'],
    status: 'Privé',
    timeline: '1 mois',
    year: '2024',
    client: 'Projet personnel',
    featured: false,
    links: [{ type: 'github', url: '#' }], // Privé
  },
  {
    id: 'powerpoint-automation',
    title: 'PowerPoint Automation (SiteSafe AI)',
    description: 'Système d\'automatisation de génération de présentations PowerPoint (notamment pour la soutenance PFE SiteSafe AI) avec OnlyOffice, Python et Docker Compose.',
    image: null,
    imageGradient: 'from-orange-600 to-red-700',
    tags: ['Python', 'HTML', 'Docker Compose', 'OnlyOffice', 'Automation'],
    categories: ['Full-Stack'],
    status: 'Privé',
    timeline: '3 semaines',
    year: '2026',
    client: 'Projet personnel',
    featured: false,
    links: [{ type: 'github', url: '#' }], // Privé
  },
]

const categories = ['All', 'Mobile', 'Full-Stack', 'Web']

const getProjectIcon = (category: string) => {
  switch (category) {
    case 'Mobile':
      return <Smartphone className="w-8 h-8" />
    case 'Full-Stack':
      return <Code className="w-8 h-8" />
    case 'Web':
      return <Globe className="w-8 h-8" />
    default:
      return <Cpu className="w-8 h-8" />
  }
}

// Small icon variant for category tabs
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Mobile':
      return <Smartphone className="w-4 h-4" />
    case 'Full-Stack':
      return <Code className="w-4 h-4" />
    case 'Web':
      return <Globe className="w-4 h-4" />
    default:
      return <Cpu className="w-4 h-4" />
  }
}

export default function ProjectsPage() {
  // État pour gérer l'affichage complet des tags par projet
  const [expandedTags, setExpandedTags] = useState<Record<string, boolean>>({})
  // État pour gérer les erreurs de chargement d'images
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const toggleTags = (projectId: string) => {
    setExpandedTags(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  // Helper function to get details for each link type
  const getLinkDetails = (type: string) => {
    switch (type) {
      case 'github':
        return { text: 'View Code', icon: <Github className="w-4 h-4" /> }
      case 'freelancer':
        return { text: 'Project Details', icon: <ExternalLink className="w-4 h-4" /> }
      case 'live':
        return { text: 'Live Site', icon: <Rocket className="w-4 h-4" /> }
      case 'kaggle':
        return { text: 'View Notebook', icon: <ExternalLink className="w-4 h-4" /> }
      default:
        return { text: 'View Link', icon: <ExternalLink className="w-4 h-4" /> }
    }
  }

  // Counts per category for tab badges
  const categoryCounts: Record<string, number> = Object.fromEntries(
    categories.map((c) => [
      c,
      c === 'All' ? projects.length : projects.filter((p) => p.categories?.includes(c)).length,
    ])
  )

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Mes Projets
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Une sélection de projets académiques et professionnels réalisés lors de ma formation à l'EHTP. Chaque projet illustre mes compétences en développement Full-Stack avec Laravel, Vue.js, Spring Boot, Flutter et Docker.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="text-sm">
                  {projects.length} Projets Réalisés
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Projets Académiques & Stages
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Développeur Full-Stack
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="h-auto rounded-full bg-background/50 supports-[backdrop-filter]:bg-background/60 backdrop-blur border border-primary/10 shadow-sm p-1 gap-1">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all
                               hover:text-foreground hover:bg-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
                               data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-primary/20"
                    >
                      <span className="flex items-center gap-2">
                        <span className="opacity-80">{getCategoryIcon(category)}</span>
                        <span>{category}</span>
                        <span
                          className="ml-1 inline-flex items-center justify-center text-[10px] font-semibold px-2 py-0.5 rounded-full
                                     bg-primary/10 text-primary group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground"
                        >
                          {categoryCounts[category]}
                        </span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter((project) => category === 'All' || project.categories?.includes(category))
                      .map((project) => (
                        <Card key={project.id} className="flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                          <div className="relative overflow-hidden">
                            {project.image && !imageErrors[project.id] ? (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={240}
                                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={() => setImageErrors(prev => ({ ...prev, [project.id]: true }))}
                              />
                            ) : (
                              <div className={`w-full h-60 bg-gradient-to-br ${project.imageGradient} flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden`}>
                                {/* Decorative background elements */}
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16" />

                                {/* Content */}
                                <div className="text-white text-center p-6 z-10 flex flex-col items-center gap-4">
                                  {/* Code icons */}
                                  <div className="flex items-center gap-3 text-4xl font-bold opacity-80">
                                    <span>&lt;</span>
                                    <span>/</span>
                                    <span>&gt;</span>
                                  </div>

                                  {/* Title */}
                                  <h3 className="font-bold text-lg mb-1 line-clamp-2 px-4">{project.title}</h3>

                                  {/* Category */}
                                  <p className="text-sm opacity-90 font-medium">{project.categories?.[0] || 'Full-Stack'}</p>
                                </div>
                              </div>
                            )}
                            <div className="absolute top-4 left-4">
                              <Badge
                                variant={project.status === 'Public' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {project.status}
                              </Badge>
                            </div>
                            {project.featured && (
                              <div className="absolute top-4 right-4">
                                <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
                                  Featured
                                </Badge>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col flex-grow">
                            <CardHeader>
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {project.categories?.[0] || 'Full-Stack'}
                                </Badge>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {project.year}
                                </div>
                              </div>
                              <CardTitle className="text-xl">{project.title}</CardTitle>
                              <CardDescription className="text-sm">
                                {project.description}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow">
                              <div className="mb-4">
                                <div className="flex items-center text-xs text-muted-foreground mb-2">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {project.timeline}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Client: {project.client}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {(expandedTags[project.id] ? project.tags : project.tags.slice(0, 4)).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {project.tags.length > 4 && !expandedTags[project.id] && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                                    onClick={() => toggleTags(project.id)}
                                    title="Cliquez pour voir tous les tags"
                                  >
                                    +{project.tags.length - 4}
                                  </Badge>
                                )}
                                {expandedTags[project.id] && project.tags.length > 4 && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs cursor-pointer border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                                    onClick={() => toggleTags(project.id)}
                                    title="Réduire les tags"
                                  >
                                    ✕ Réduire
                                  </Badge>
                                )}
                              </div>
                            </CardContent>

                            <CardFooter className="flex-wrap gap-x-4 gap-y-2 border-t pt-4 mt-auto">
                              {project.links && project.links.length > 0 ? (
                                project.links.map((link) => {
                                  const details = getLinkDetails(link.type)
                                  const isPrivate = project.status === 'Privé' && link.url === '#'

                                  if (isPrivate) {
                                    return (
                                      <div
                                        key={link.type}
                                        className="inline-flex items-center text-sm font-medium text-muted-foreground cursor-not-allowed opacity-50"
                                        title="Repository privé"
                                      >
                                        {details.icon}
                                        <span className="ml-2">{details.text}</span>
                                        <span className="ml-2 text-xs">🔒</span>
                                      </div>
                                    )
                                  }

                                  return (
                                    <Link
                                      key={link.type}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                                    >
                                      {details.icon}
                                      <span className="ml-2">{details.text}</span>
                                    </Link>
                                  )
                                })
                              ) : (
                                <p className="text-sm text-muted-foreground italic">No public links available.</p>
                              )}
                            </CardFooter>
                          </div>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Prêt à Rejoindre Votre Équipe ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutons de comment je peux contribuer à vos projets avec mes compétences en développement Full-Stack & DevOps et ma motivation à apprendre et innover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contactez-moi</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/CV_GOURRI_ABDELLATIF.pdf" download="CV_GOURRI_ABDELLATIF.pdf">Télécharger mon CV</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}