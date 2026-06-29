import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À Propos | Abdellatif GOURRI - Ingénieur d\'État Full-Stack & DevOps',
  description: 'Découvrez mon parcours en tant qu\'ingénieur d\'État en Génie Informatique diplômé de l\'EHTP (juin 2026), ma passion pour le développement Full-Stack, l\'IA et les pratiques DevOps.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
