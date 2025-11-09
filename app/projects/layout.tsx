import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Abdellatif GOURRI - Élève Ingénieur EHTP',
  description: 'Découvrez mon portfolio de projets Full-Stack, de la conception au déploiement. Projets en Laravel, Vue.js, Spring Boot, Flutter, React, FastAPI et plus encore.',
  keywords: ['Projets Full-Stack', 'Portfolio développeur', 'Laravel', 'Vue.js', 'Spring Boot', 'Flutter', 'React', 'FastAPI', 'Docker', 'EHTP'],
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
