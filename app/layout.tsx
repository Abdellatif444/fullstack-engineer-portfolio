import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";
import SplashScreen from "@/components/ui/splash-screen";
import PageTransition from "@/components/ui/page-transition";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Abdellatif GOURRI — Développeur Full-Stack & Étudiant Ingénieur",
  description: "Portfolio d'Abdellatif GOURRI, étudiant ingénieur en Génie Informatique à l'EHTP, passionné par le développement Full-Stack avec Laravel, Vue.js, Spring Boot, Flutter et Docker. Actuellement à la recherche d'un stage PFE débutant en janvier ou février 2026.",
  keywords: ["Développeur Full-Stack", "Laravel", "Vue.js", "Spring Boot", "Flutter", "Docker", "EHTP", "Étudiant Ingénieur", "Stage PFE", "Next.js", "React", "PostgreSQL", "MySQL"],
  authors: [{ name: "Abdellatif GOURRI" }],
  creator: "Abdellatif GOURRI",
  metadataBase: new URL("https://abdellatif-gourri.me"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdellatif-gourri.me",
    siteName: "Abdellatif GOURRI Portfolio",
    title: "Abdellatif GOURRI — Développeur Full-Stack & Étudiant Ingénieur",
    description: "Portfolio d'Abdellatif GOURRI, étudiant ingénieur en Génie Informatique à l'EHTP, passionné par le développement Full-Stack avec Laravel, Vue.js, Spring Boot, Flutter et Docker. Actuellement à la recherche d'un stage PFE débutant en janvier ou février 2026.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdellatif GOURRI — Développeur Full-Stack & Étudiant Ingénieur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdellatif GOURRI — Développeur Full-Stack & Étudiant Ingénieur",
    description: "Portfolio d'Abdellatif GOURRI, étudiant ingénieur en Génie Informatique à l'EHTP, passionné par le développement Full-Stack avec Laravel, Vue.js, Spring Boot, Flutter et Docker. Actuellement à la recherche d'un stage PFE débutant en janvier ou février 2026.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SplashScreen />
          <PageTransition>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </PageTransition>
          <CursorGlow />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
