'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image' // Import Next.js Image component
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  MapPin,
  Calendar,
  Clock,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Cloud,
  ShieldCheck,
  BrainCircuit,
} from 'lucide-react'

// Updated with your real information
const contactMethods = [
  {
    title: 'Email',
    description: 'Best way to reach me',
    value: 'gourri.abdellatif@gmail.com',
    icon: Mail,
    action: 'mailto:gourri.abdellatif@gmail.com',
    primary: true,
  },
  // {
  //   title: 'Phone',
  //   description: 'Call for urgent inquiries',
  //   value: '+212 684233470',
  //   icon: Phone,
  //   action: 'tel:+212684233470',
  //   primary: false,
  // },
  {
    title: 'Localisation',
    description: 'Basé à Casablanca/Rabat, Maroc',
    value: 'Disponible immédiatement — sur site, à distance ou hybride',
    icon: MapPin,
    action: null,
    primary: false,
  },
]

// Updated with your expertise from your resume
const expertiseAreas = [
  {
    title: 'Développement Full-Stack',
    description: 'Création d\'applications web complètes avec Laravel, Vue.js, Spring Boot et Flutter. Maîtrise de l\'architecture MVC et des APIs REST.',
    icon: BrainCircuit,
  },
  {
    title: 'DevOps & Conteneurisation',
    description: 'Déploiement et gestion d\'applications avec Docker, Docker Compose et configuration de pipelines CI/CD.',
    icon: Cloud,
  },
  {
    title: 'Bases de Données & Backend',
    description: 'Conception et optimisation de bases de données MySQL/PostgreSQL, développement d\'APIs robustes et sécurisées.',
    icon: ShieldCheck,
  },
];


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Préparer les données pour l'envoi
      const typeDemandeLabel = formData.projectType === 'stage' ? 'Opportunité de Stage PFE' :
        formData.projectType === 'freelance' ? 'Idée d\'un Projet' :
          formData.projectType === 'collaboration' ? 'Proposition de Collaboration' : 'Question Générale'

      const formDataToSend = new FormData()
      formDataToSend.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('subject', `[${typeDemandeLabel}] ${formData.subject}`)
      formDataToSend.append('from_name', 'Portfolio Abdellatif GOURRI')
      formDataToSend.append('message', `
═══════════════════════════════════════════════════════
📧 NOUVEAU MESSAGE DEPUIS LE PORTFOLIO
═══════════════════════════════════════════════════════

👤 INFORMATIONS DU CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom complet    : ${formData.name}
Email          : ${formData.email}
Type de demande: ${typeDemandeLabel}
Sujet          : ${formData.subject}

💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}

═══════════════════════════════════════════════════════
⏰ Reçu le : ${new Date().toLocaleString('fr-FR', {
        dateStyle: 'full',
        timeStyle: 'short'
      })}
═══════════════════════════════════════════════════════
      `.trim())

      // Envoyer vers Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de l\'envoi. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background relative overflow-x-hidden flex items-center justify-center">
        <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Message Envoyé !</h1>
            <p className="text-muted-foreground mb-8">
              Merci pour votre message ! J&apos;ai bien reçu votre demande et je vous répondrai dans les 24 heures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsSubmitted(false)}>Envoyer un Autre Message</Button>
              <Button variant="outline" asChild><Link href="/">Retour à l&apos;Accueil</Link></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
      <div className="relative z-10">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Ingénieur d'État en Génie Informatique</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ingénieur Full-Stack Disponible
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ingénieur d'État en Génie Informatique diplômé de l'EHTP (juin 2026), je me spécialise dans le développement Full-Stack avec Laravel, Vue.js, React/TypeScript, Spring Boot et Flutter. Je suis <strong>ouvert aux opportunités d'emploi</strong> dès maintenant.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" /> Réponse sous 24h</Badge>
                <Badge variant="secondary"><Calendar className="w-3 h-3 mr-1" /> Disponible immédiatement</Badge>
                <Badge variant="secondary"><MapPin className="w-3 h-3 mr-1" /> Casablanca/Rabat</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <Card className="border-4 border-orange-500 shadow-2xl">
                    <CardHeader>
                      <CardTitle className="text-2xl">Envoyez-moi un Message</CardTitle>
                      <CardDescription>
                        Une idée de projet, une opportunité professionnelle ou une collaboration ? Remplissez le formulaire ci-dessous.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Nom complet *</label>
                            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Votre nom complet" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Adresse Email *</label>
                            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="votre.email@exemple.com" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-3">Type de Demande</label>
                          <div className="space-y-3">
                            <label className="flex items-center p-3 border-2 border-border rounded-lg cursor-pointer transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-orange-500 hover:scale-105 hover:shadow-lg">
                              <input
                                type="radio"
                                name="projectType"
                                value="stage"
                                checked={formData.projectType === 'stage'}
                                onChange={handleInputChange}
                                className="mr-3 w-4 h-4"
                              />
                              <span className="text-sm font-medium">Opportunité d&apos;emploi</span>
                            </label>
                            <label className="flex items-center p-3 border-2 border-border rounded-lg cursor-pointer transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-orange-500 hover:scale-105 hover:shadow-lg">
                              <input
                                type="radio"
                                name="projectType"
                                value="freelance"
                                checked={formData.projectType === 'freelance'}
                                onChange={handleInputChange}
                                className="mr-3 w-4 h-4"
                              />
                              <span className="text-sm font-medium">Idée d'un Projet</span>
                            </label>
                            <label className="flex items-center p-3 border-2 border-border rounded-lg cursor-pointer transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-orange-500 hover:scale-105 hover:shadow-lg">
                              <input
                                type="radio"
                                name="projectType"
                                value="collaboration"
                                checked={formData.projectType === 'collaboration'}
                                onChange={handleInputChange}
                                className="mr-3 w-4 h-4"
                              />
                              <span className="text-sm font-medium">Proposition de Collaboration</span>
                            </label>
                            <label className="flex items-center p-3 border-2 border-border rounded-lg cursor-pointer transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white hover:border-orange-500 hover:scale-105 hover:shadow-lg">
                              <input
                                type="radio"
                                name="projectType"
                                value="general"
                                checked={formData.projectType === 'general'}
                                onChange={handleInputChange}
                                className="mr-3 w-4 h-4"
                              />
                              <span className="text-sm font-medium">Question Générale</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet *</label>
                          <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Brève description de votre demande" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                          <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Parlez-moi de l'opportunité, du projet, des délais, etc..." />
                        </div>
                        <Button type="submit" size="lg" className="w-full transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:scale-105 hover:shadow-lg" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" /> Envoi en cours...</>
                          ) : (
                            <><Send className="w-4 h-4 mr-2" /> Envoyer le Message</>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-8">
                  {/* --- REDESIGNED HIRE ME CARD --- */}
                  <Card className="overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="bg-muted p-4 border-b">
                        <CardTitle>Profil Professionnel</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                      {/* Freelancer Profile */}
                      <div className="flex items-center gap-4 p-3 rounded-lg border bg-card">
                        <Image
                          src="/image_profil.jpg"
                          alt="Abdellatif GOURRI"
                          width={128}
                          height={128}
                          className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-xl"
                        />
                        <div>
                          <h4 className="font-bold">Abdellatif GOURRI</h4>
                          <p className="text-xs text-muted-foreground">Ingénieur d'État en Génie Informatique — EHTP (juin 2026)</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Passionné par le développement Full-Stack (Laravel, Vue.js, React/TS, Spring Boot, Flutter, Docker, Kafka)
                          </p>
                        </div>
                      </div>
                      {/* Other Links */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="https://www.linkedin.com/in/abdellatif-gourri-989b7a1b8/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="https://github.com/Abdellatif444" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" /> GitHub
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Informations de Contact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {contactMethods.map((method) => (
                        <div key={method.title} className="flex items-start">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            <method.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{method.title}</h4>
                            {method.action ? (
                              <Link href={method.action} className="text-sm text-primary hover:underline">{method.value}</Link>
                            ) : (
                              <p className="text-sm">{method.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Domaines d'Expertise</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {expertiseAreas.map((service) => (
                        <div key={service.title} className="flex items-start">
                          <service.icon className="w-5 h-5 text-primary mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-sm">{service.title}</h4>
                            <p className="text-xs text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Statut Actuel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Poste</span>
                          <Badge variant="default" className="text-xs bg-green-600">Disponible immédiatement</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Type</span>
                          <span className="text-muted-foreground">CDI / Freelance</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquemment Posées</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">Quelle est votre disponibilité actuelle ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Je suis ingénieur d&apos;État diplômé de l&apos;EHTP depuis juin 2026 et disponible immédiatement. Je suis également disponible pour des projets freelance. Je réponds généralement sous 24 heures.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quel type de poste recherchez-vous ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Je suis à la recherche d&apos;un premier poste d&apos;ingénieur Full-Stack ou DevOps, en CDI, mission freelance, idéalement sur des projets ambitieux avec des équipes exigeantes, afin de mettre en pratique mes compétences et de contribuer concrètement à vos projets.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quelles technologies maîtrisez-vous ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Je maîtrise le développement Full-Stack avec Laravel, Vue.js, React/TypeScript, Spring Boot, Flutter et Docker, ainsi que l&apos;intégration de services IA (Computer Vision, Kafka, MinIO). Je suis passionné par la création d&apos;applications web modernes et scalables.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quels types de projets vous intéressent ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Je suis intéressé par les projets de développement web Full-Stack, les applications mobiles, les systèmes de gestion, et toute opportunité qui me permettra d&apos;apprendre et de contribuer avec mes compétences techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}