import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abdellatif GOURRI — Ingénieur d\'État Full-Stack & DevOps',
  description: 'Portfolio d\'Abdellatif GOURRI, ingénieur d\'État en Génie Informatique diplômé de l\'EHTP (juin 2026). Développeur Full-Stack spécialisé en Laravel, Vue.js, React/TypeScript, Spring Boot, Flutter et Docker. Disponible immédiatement.',
  keywords: [
    'Développeur Full-Stack',
    'Laravel',
    'Vue.js',
    'React',
    'TypeScript',
    'Kafka',
    'Spring Boot',
    'Flutter',
    'Docker',
    'Ingénieur d\'État',
    'EHTP',
    'Génie Informatique',
    'Disponible immédiatement',
    'Morocco',
    'Casablanca',
    'Rabat',
    'Portfolio',
    'DevOps'
  ],
  authors: [{ name: 'Abdellatif GOURRI', url: 'https://fullstack-engineer-portfolio.replit.app' }],
  creator: 'Abdellatif GOURRI',
  publisher: 'Abdellatif GOURRI',
  metadataBase: new URL('https://fullstack-engineer-portfolio.replit.app'),
  alternates: {
    canonical: 'https://fullstack-engineer-portfolio.replit.app',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://fullstack-engineer-portfolio.replit.app',
    siteName: 'Abdellatif GOURRI Portfolio',
    title: 'Abdellatif GOURRI — Ingénieur d\'État Full-Stack & DevOps',
    description: 'Portfolio d\'Abdellatif GOURRI, ingénieur d\'État en Génie Informatique diplômé de l\'EHTP (juin 2026). Développeur Full-Stack spécialisé en Laravel, Vue.js, React/TypeScript, Spring Boot, Flutter et Docker. Disponible immédiatement.',
    images: [
      {
        url: '/image_profil.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdellatif GOURRI - Ingénieur d\'État Full-Stack',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AbdellatifGourri',
    creator: '@AbdellatifGourri',
    title: 'Abdellatif GOURRI — Ingénieur d\'État Full-Stack & DevOps',
    description: 'Portfolio d\'Abdellatif GOURRI, ingénieur d\'État en Génie Informatique diplômé de l\'EHTP (juin 2026). Développeur Full-Stack spécialisé en Laravel, Vue.js, React/TypeScript, Spring Boot, Flutter et Docker. Disponible immédiatement.',
    images: ['/image_profil.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification IDs when available
    // google: 'google-verification-code',
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#100C08',
    'color-scheme': 'dark',
  },
}

export default metadata
