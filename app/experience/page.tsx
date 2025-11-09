import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Calendar,
  MapPin,
  Building,
  Code,
  Brain,
  Users,
  Award,
  ExternalLink,
  Download
} from 'lucide-react'
// import { Description } from '@radix-ui/react-dialog'

export const metadata: Metadata = {
  title: 'Experience | Abdellatif GOURRI - Développeur Full-Stack & Étudiant Ingénieur',
  description: 'Parcours professionnel et académique d\'Abdellatif GOURRI : stages en développement Full-Stack, formation EHTP, compétences en Laravel, Vue.js, Spring Boot, Flutter et Docker.',
}

const workExperience = [
  {
    title: 'Stage d\'Ingénieur',
    company: 'OPTIZAWORKS',
    location: 'Agadir, Maroc',
    period: 'Sept 2025 - Présent',
    type: 'Stage',
    description: "Développement d'un site web de gestion des stocks et des approvisionnements.",
    achievements: [
      "Conception et développement d'une application web de gestion des stocks et des approvisionnements",
      "Implémentation des fonctionnalités principales : gestion des articles, mouvements de stock, inventaire permanent et génération automatique de bons (réception, sortie, commande)",
      "Développement du backend en Laravel (API REST, validation des données) et du frontend en Vue.js (interfaces dynamiques et responsives)",
      "Génération automatique des rapports PDF/Excel et des tableaux de suivi"
    ],
    technologies: ['Laravel', 'Vue.js', 'PHP', 'JavaScript', 'MySQL', 'API REST', 'Docker']
  },
  {
    title: 'Stage d\'Ingénieur',
    company: 'OHSE CAPITAL',
    location: 'Laâyoune, Maroc',
    period: 'Juil - Sept 2025',
    type: 'Stage',
    description: "Conception et développement d'une application mobile responsive en HealthTech multi-utilisateurs (OSHApp)",
    achievements: [
      "Analyse des besoins métiers en découvrant le fonctionnement du médecin d'entreprise et en étudiant l'intégration de la communication entre les acteurs RH, HSE, Infirmier et Médecin du travail",
      "Conception et développement du backend en Spring Boot (API REST, sécurité par JWT) et du frontend mobile en Flutter/Dart (interfaces responsives)",
      "Création des maquettes interactives sous Figma, validées avec l'équipe métier",
      "Planification et suivi du projet via GanttProject, selon une approche agile itérative",
      "Implémentation des fonctionnalités principales : authentification, gestion des rendez-vous médicaux, certificats, notifications in-app et e-mail",
      "Conteneurisation et orchestration avec Docker Compose pour un environnement reproductible",
      "Collaboration et versionnement du code via GitHub (revues de code)"
    ],
    technologies: ['Spring Boot', 'Flutter', 'Dart', 'Java', 'JWT', 'Figma', 'Docker', 'Docker Compose', 'GitHub', 'PostgreSQL']
  },
  {
    title: 'Stage d\'initiation professionnelle',
    company: 'Marolet',
    location: 'Meknès, Maroc',
    period: 'Juil - Août 2024',
    type: 'Stage',
    description: "Mise à jour et optimisation du site web Behost.ma",
    achievements: [
      "Travail sur la plateforme WordPress, incluant la gestion du contenu, la configuration des thèmes et l'optimisation des extensions",
      "Amélioration du référencement naturel (SEO) et de l'expérience utilisateur (UX) afin d'accroître la visibilité et l'ergonomie du site",
      "Refonte graphique et intégration d'éléments visuels via Canva, assurant une identité visuelle moderne et cohérente",
      "Optimisation du code front-end (HTML/CSS, JavaScript) et des performances du site pour garantir une navigation fluide et rapide"
    ],
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'SEO', 'Canva', 'UX Design']
  },
]

const education = [
  {
    degree: 'Cycle Ingénieur en Génie Informatique',
    school: 'École Hassania des Travaux Publics (EHTP)',
    location: 'Casablanca, Maroc',
    period: '2023 - 2026',
    status: 'En cours (3ᵉ année)',
    description: 'Formation d\'ingénieur en Génie Informatique avec spécialisation en développement Full-Stack, architecture logicielle et pratiques DevOps.',
    achievements: [
      'Chef Design du Club Social de l\'EHTP (2024-2025)',
      'Membre actif du Club Geo IT (année 2023-2024)',
      'Membre actif du Club IT (année 2023-2024)',
      'Participation à l\'organisation de l\'événement CODE_IT_7',
    ],
    coursework: ['Algorithmique', 'Structures de données', 'Bases de données', 'Génie logiciel (POO)', 'Architecture logicielle', 'Développement Web', 'DevOps', 'Gestion de projet'],
  },
  {
    degree: 'Classes Préparatoires aux Grandes Écoles (CPGE)',
    school: 'Filière MPSI',
    location: 'Agadir, Maroc',
    period: '2021 - 2023',
    status: 'Complété',
    description: "Classes préparatoires en Mathématiques, Physique et Sciences de l'ingénieur, développant une solide base en mathématiques, physique et pensée analytique.",
    achievements: [
      "Formation intensive en Mathématiques et Physique",
      "Développement de compétences en résolution de problèmes et pensée analytique",
      "Préparation aux concours des grandes écoles d'ingénieurs",
      "Base solide pour la spécialisation en Génie Informatique à l'EHTP"
    ],
    coursework: ['Mathématiques avancées', 'Physique', 'Sciences de l\'ingénieur', 'Informatique', 'Français', 'Anglais'],
  },
  {
    degree: 'Baccalauréat Sciences Mathématiques',
    school: 'Lycée Ibn Soulaimane Roudani',
    location: 'Taroudant, Maroc',
    period: '2018 - 2021',
    status: 'Complété',
    description: 'Baccalauréat en Sciences Mathématiques avec excellence académique.',
    achievements: [],
    coursework: ['Mathématiques', 'Physique-Chimie', 'Sciences de l\'ingénieur', 'Français', 'Arabe'],
  },
]

const certifications = [
  {
    title: 'AWS Educate Machine Learning Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Avril 2025',
    credentialId: 'https://www.credly.com/badges/98ef4c16-0fbe-412c-b09f-fda86e5ecda4/public_url',
    description: 'Formation sur les fondamentaux du Machine Learning avec AWS.'
  },
  {
    title: 'Cloud Computing Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Avril 2025',
    credentialId: 'https://www.credly.com/badges/f2276716-9643-444a-a95d-f177fd327678/public_url',
    description: 'Formation sur les fondamentaux du Cloud Computing.'
  },
  {
    title: 'Introduction à Docker',
    issuer: 'DataScientest',
    date: 'Mars 2025',
    credentialId: 'https://app.datascientist.fr/certificat/1GOIXVY3WRVSN',
    description: 'Formation à la conteneurisation avec Docker.'
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    date: 'Mars 2025',
    credentialId: 'https://www.hackerrank.com/certificates/4d65d1a4c0fd',
    description: 'Certification Python niveau basique.'
  },
  {
    title: 'Cassandra: Architecture | Deployment | Performance Monitoring',
    issuer: 'EDUCBA',
    date: 'Février 2025',
    credentialId: 'https://www.udemy.com/certificate/UC-82497744-2801-4255-b170-64dce5070b26/',
    description: 'Formation sur l\'architecture et le déploiement de Cassandra.'
  },
  {
    title: 'Programming Foundations Fundamentals',
    issuer: 'LinkedIn Learning',
    date: 'Mai 2024',
    credentialId: 'https://lnkd.in/e9VXhd48',
    description: 'Fondamentaux de la programmation.'
  },
  {
    title: 'Scrum Foundation Professional Certification (SFPC)',
    issuer: 'CertiProf',
    date: 'Mai 2024',
    credentialId: '/certificates/scrum-sfpc.pdf',
    description: 'Certification professionnelle Scrum Foundation.'
  }
];


const skills = {
  technical: [
    { name: 'Laravel', level: 30 },
    { name: 'Vue.js', level: 55 },
    { name: 'Spring Boot', level: 55 },
    { name: 'Flutter', level: 50 },
    { name: 'Docker', level: 50 },
    { name: 'MySQL/PostgreSQL', level: 65 },
    { name: 'Java', level: 55 },
    { name: 'PHP', level: 40 },
    { name: 'JavaScript', level: 40 },
    { name: 'HTML/CSS', level: 70 }
  ],
  soft: [
    { name: 'Résolution de problèmes', level: 50 },
    { name: 'Communication', level: 65 },
    { name: 'Leadership', level: 50 },
    { name: 'Gestion de projet', level: 60 },
    { name: 'Travail d\'\u00e9quipe', level: 70 },
    { name: 'Adaptabilité', level: 60 },
  ],
  additional: [
    'Agile/Scrum',
    'Git/GitHub',
    'Figma',
    'UML/Merise',
    'API REST',
    'Responsive Design',
    'SEO',
    'Performance Optimization',
    'Docker Compose',
    'GanttProject'
  ]
}

export default function ExperiencePage() {
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Parcours Professionnel & Académique
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Élève-ingénieur en 3ᵉ année à l'EHTP, passionné par le développement Full-Stack.
                De la formation académique solide aux expériences professionnelles concrètes, chaque étape a renforcé mes compétences techniques et ma capacité d'adaptation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/CV_GOURRI_ABDELLATIF.pdf" download="CV_GOURRI_ABDELLATIF.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger mon CV
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Contactez-moi
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="experience" className="w-full">
                <div className="flex justify-center mb-12">
                  <TabsList className="grid w-full max-w-md grid-cols-4 gap-2 bg-transparent p-2">
                    <TabsTrigger 
                      value="experience" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white data-[state=active]:border-orange-500 border-2 border-primary/20 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:text-white hover:border-orange-400 hover:scale-105 transition-all duration-200 rounded-lg px-4 py-3 font-semibold shadow-sm hover:shadow-lg"
                    >
                      Work
                    </TabsTrigger>
                    <TabsTrigger 
                      value="education" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white data-[state=active]:border-orange-500 border-2 border-primary/20 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:text-white hover:border-orange-400 hover:scale-105 transition-all duration-200 rounded-lg px-4 py-3 font-semibold shadow-sm hover:shadow-lg"
                    >
                      Education
                    </TabsTrigger>
                    <TabsTrigger 
                      value="certifications" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white data-[state=active]:border-orange-500 border-2 border-primary/20 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:text-white hover:border-orange-400 hover:scale-105 transition-all duration-200 rounded-lg px-4 py-3 font-semibold shadow-sm hover:shadow-lg"
                    >
                      Certs
                    </TabsTrigger>
                    <TabsTrigger 
                      value="skills" 
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white data-[state=active]:border-orange-500 border-2 border-primary/20 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:text-white hover:border-orange-400 hover:scale-105 transition-all duration-200 rounded-lg px-4 py-3 font-semibold shadow-sm hover:shadow-lg"
                    >
                      Skills
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Work Experience Tab */}
                <TabsContent value="experience">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
                    {workExperience.map((job, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Building className="w-4 h-4 mr-1" />
                                  {job.company}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {job.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {job.period}
                                </div>
                              </div>
                            </div>
                            <Badge variant={job.type === 'Internship' ? 'secondary' : 'default'}>
                              {job.type}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-muted-foreground">{job.description}</p>

                          <div>
                            <h4 className="font-semibold mb-3">Key Achievements</h4>
                            <ul className="space-y-2">
                              {job.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Education Tab */}
                <TabsContent value="education">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
                    {education.map((edu, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Building className="w-4 h-4 mr-1" />
                                  {edu.school}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {edu.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {edu.period}
                                </div>
                              </div>
                            </div>
                            <Badge variant={edu.status === 'Final Year' ? 'default' : 'secondary'}>
                              {edu.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-muted-foreground">{edu.description}</p>

                          <div>
                            <h4 className="font-semibold mb-3">Achievements</h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course) => (
                                <Badge key={course} variant="outline" className="text-xs">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Certifications Tab */}
                <TabsContent value="certifications">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Certifications & Credentials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {certifications.map((cert, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                  <Award className="w-4 h-4 mr-1" />
                                  {cert.issuer}
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {cert.date}
                                </div>
                              </div>
                              {(cert.credentialId.startsWith('http') || cert.credentialId.startsWith('/')) ? (
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={cert.credentialId} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                                  </Link>
                                </Button>
                              ) : (
                                <Button variant="outline" size="sm" disabled>
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                              {cert.description}
                            </p>
                            {(!cert.credentialId.startsWith('http') && !cert.credentialId.startsWith('/')) && (
                              <div className="text-xs text-muted-foreground">
                                Credential ID: {cert.credentialId}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent value="skills">
                  <div className="space-y-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Skills & Competencies</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Technical Skills */}
                      <div>
                        <div className="flex items-center mb-6">
                          <Code className="w-6 h-6 text-primary mr-3" />
                          <h3 className="text-2xl font-bold">Technical Skills</h3>
                        </div>
                        <div className="space-y-4">
                          {skills.technical.map((skill) => (
                            <div key={skill.name}>
                              <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">{skill.name}</span>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full transition-all duration-500"
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Soft Skills */}
                      <div>
                        <div className="flex items-center mb-6">
                          <Users className="w-6 h-6 text-primary mr-3" />
                          <h3 className="text-2xl font-bold">Soft Skills</h3>
                        </div>
                        <div className="space-y-4">
                          {skills.soft.map((skill) => (
                            <div key={skill.name}>
                              <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">{skill.name}</span>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full transition-all duration-500"
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Additional Skills */}
                    <div className="text-center mt-12">
                      <h3 className="text-2xl font-bold mb-6">Compétences Additionnelles</h3>
                      <div className="flex flex-wrap justify-center gap-3">
                        {skills.additional.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Brain className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Prêt à Rejoindre Votre Équipe
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Avec une formation solide en Génie Informatique, des expériences concrètes en développement Full-Stack et une forte motivation, je suis prêt à contribuer à vos projets innovants dans le cadre d'un stage PFE (janvier/février 2026).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Discutons de Mon Projet
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">
                    Voir Mes Projets
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
