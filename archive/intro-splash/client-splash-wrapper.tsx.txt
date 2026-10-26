"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Charger SplashScreen uniquement côté client pour éviter les erreurs d'hydratation
const SplashScreen = dynamic(() => import("@/components/ui/splash-screen"), {
  ssr: false,
});

export default function ClientSplashWrapper() {
  const [shouldShowSplash, setShouldShowSplash] = useState(false);

  useEffect(() => {
    // Vérifier si le splash a déjà été affiché dans cette session
    const hasSeenSplash = sessionStorage.getItem('splashScreenShown');

    if (!hasSeenSplash) {
      // Première visite de la session → afficher le splash
      setShouldShowSplash(true);
      sessionStorage.setItem('splashScreenShown', 'true');
    }
  }, []);

  // Ne rien afficher si le splash a déjà été vu dans cette session
  if (!shouldShowSplash) {
    return null;
  }

  return <SplashScreen />;
}
