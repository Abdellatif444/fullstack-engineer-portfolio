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
  title: "Abdellatif GOURRI — Ingénieur d'État Full-Stack & DevOps",
  description: "Portfolio d'Abdellatif GOURRI, ingénieur d'État en Génie Informatique diplômé de l'EHTP (juin 2026), passionné par le développement Full-Stack avec Laravel, Vue.js, React/TypeScript, Spring Boot, Flutter et Docker. Disponible immédiatement.",
  keywords: ["Développeur Full-Stack", "Laravel", "Vue.js", "Spring Boot", "React", "TypeScript", "Kafka", "Flutter", "Docker", "EHTP", "Ingénieur d'État", "DevOps", "Next.js", "PostgreSQL", "MySQL"],
  authors: [{ name: "Abdellatif GOURRI" }],
  creator: "Abdellatif GOURRI",
  metadataBase: new URL("https://abdellatif-gourri.me"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdellatif-gourri.me",
    siteName: "Abdellatif GOURRI Portfolio",
    title: "Abdellatif GOURRI — Ingénieur d'État Full-Stack & DevOps",
    description: "Portfolio d'Abdellatif GOURRI, ingénieur d'État en Génie Informatique diplômé de l'EHTP (juin 2026), passionné par le développement Full-Stack avec Laravel, Vue.js, React/TypeScript, Spring Boot, Flutter et Docker. Disponible immédiatement.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdellatif GOURRI — Ingénieur d'État Full-Stack & DevOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdellatif GOURRI — Ingénieur d'État Full-Stack & DevOps",
    description: "Portfolio d'Abdellatif GOURRI, ingénieur d'État en Génie Informatique diplômé de l'EHTP (juin 2026), passionné par le développement Full-Stack avec Laravel, Vue.js, React/TypeScript, Spring Boot, Flutter et Docker. Disponible immédiatement.",
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
          <Header />
          <PageTransition>
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
