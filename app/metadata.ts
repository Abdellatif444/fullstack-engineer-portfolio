import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abdellatif GOURRI — Élève-Ingénieur Full-Stack & DevOps',
  description: 'Portfolio d\'Abdellatif GOURRI, Élève-ingénieur en Génie Informatique à l\'EHTP. Développeur Full-Stack spécialisé en Laravel, Vue.js, Spring Boot, Flutter et Docker. En recherche de stage PFE (janvier/février 2026).',
  keywords: [
    'Développeur Full-Stack',
    'Laravel',
    'Vue.js',
    'Spring Boot',
    'Flutter',
    'Docker',
    'Élève-ingénieur',
    'EHTP',
    'Génie Informatique',
    'Stage PFE',
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
    title: 'Abdellatif GOURRI — Élève-Ingénieur Full-Stack & DevOps',
    description: 'Portfolio d\'Abdellatif GOURRI, Élève-ingénieur en Génie Informatique à l\'EHTP. Développeur Full-Stack spécialisé en Laravel, Vue.js, Spring Boot, Flutter et Docker. En recherche de stage PFE (janvier/février 2026).',
    images: [
      {
        url: '/image_profil.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdellatif GOURRI - Élève-Ingénieur Full-Stack',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AbdellatifGourri',
    creator: '@AbdellatifGourri',
    title: 'Abdellatif GOURRI — Élève-Ingénieur Full-Stack & DevOps',
    description: 'Portfolio d\'Abdellatif GOURRI, Élève-ingénieur en Génie Informatique à l\'EHTP. Développeur Full-Stack spécialisé en Laravel, Vue.js, Spring Boot, Flutter et Docker. En recherche de stage PFE (janvier/février 2026).',
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
