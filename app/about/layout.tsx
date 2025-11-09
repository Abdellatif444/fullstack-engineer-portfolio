import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À Propos | Abdellatif GOURRI - Développeur Full-Stack & Étudiant Ingénieur',
  description: 'Découvrez mon parcours en tant qu\'élève-ingénieur en Génie Informatique à l\'EHTP, ma passion pour le développement Full-Stack et les valeurs qui guident mon travail.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
