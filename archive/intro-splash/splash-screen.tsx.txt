"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [phase, setPhase] = useState<'gif' | 'blackout' | 'welcome' | 'fadeout'>('gif');
  const welcomeText = "Bienvenue sur mon portfolio !";
  const [displayedText, setDisplayedText] = useState("");
  const [gifDuration, setGifDuration] = useState(4140); // Durée par défaut (4.14 secondes)
  // Nouveau fichier GIF pour forcer le rechargement complet (évite le cache Windsurf)
  const gifUrl = `/welcome-animation-v2.gif`;

  useEffect(() => {
    // Détecter la durée du GIF en créant une image temporaire
    const img = new Image();
    img.src = gifUrl;

    // Durée ajustée pour une animation complète
    // 4.14 secondes pour voir l'animation entière
    const estimatedDuration = 4140; // 4.14 secondes
    setGifDuration(estimatedDuration);

    // Phase 1 : GIF joue pendant la durée détectée
    const gifTimer = setTimeout(() => {
      setPhase('blackout');
    }, estimatedDuration);

    // Phase 2 : Extinction ultra-rapide (0.15s après le GIF)
    const blackoutTimer = setTimeout(() => {
      setPhase('welcome');
    }, estimatedDuration + 150);

    // Phase 3 : Affichage lettre par lettre avec pauses naturelles
    const welcomeStartTimer = setTimeout(() => {
      let index = 0;
      let extraDelay = 0;
      
      // Son désactivé : les navigateurs bloquent l'autoplay audio
      // Impossible de jouer du son sans interaction utilisateur préalable
      const playTypingSound = () => {
        // Désactivé
      };

      const typeNextLetter = () => {
        if (index <= welcomeText.length) {
          setDisplayedText(welcomeText.slice(0, index));
          
          // Jouer le son de tappage
          if (index > 0 && index < welcomeText.length) {
            playTypingSound();
          }
          
          index++;
          
          // Ajouter des pauses naturelles après certains mots
          let delay = 60; // Délai normal
          
          const currentText = welcomeText.slice(0, index);
          if (currentText.endsWith("Bienvenue")) {
            delay = 400; // Pause après "Bienvenue" (réflexion)
          } else if (currentText.endsWith("sur")) {
            delay = 200; // Petite pause après "sur"
          }
          
          setTimeout(typeNextLetter, delay);
        }
      };

      typeNextLetter();
    }, estimatedDuration + 150);

    // Phase 4 : Fadeout fluide juste après le texte complet (pause de 1.2s)
    // Avec pauses naturelles : +400ms (Bonjour) +200ms (sur) = +600ms
    const fadeoutTimer = setTimeout(() => {
      setPhase('fadeout');
    }, estimatedDuration + 150 + (welcomeText.length * 60) + 600 + 1200);

    return () => {
      clearTimeout(gifTimer);
      clearTimeout(blackoutTimer);
      clearTimeout(welcomeStartTimer);
      clearTimeout(fadeoutTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {phase !== 'fadeout' && (
        <motion.div
          key={phase}
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'blackout' ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: phase === 'blackout' ? 0.15 : 0.8,
            ease: "easeOut"
          }}
          className="fixed inset-0 z-[9999] bg-black"
        >
        {/* Phase 1 & 2: GIF Animation plein écran */}
        {(phase === 'gif' || phase === 'blackout') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'blackout' ? 0 : 1 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <img
              src={gifUrl}
              alt="Animation de bienvenue"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Phase 3: Message de bienvenue avec effet lumineux */}
        {phase === 'welcome' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Effet lumineux de fond qui se dilate à la fin */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 3, opacity: 0.3 }}
              exit={{ scale: 6, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl"
            />

            {/* Texte lettre par lettre avec disparition douce */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 text-center"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl">
                {displayedText}
                {displayedText === welcomeText && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block ml-1"
                  >
                    |
                  </motion.span>
                )}
              </h1>
            </motion.div>
          </motion.div>
        )}

        {/* Barre de progression (uniquement pendant le GIF) */}
        {phase === 'gif' && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: gifDuration / 1000, ease: "linear" }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
          />
        )}
      </motion.div>
      )}
    </AnimatePresence>
  );
}
