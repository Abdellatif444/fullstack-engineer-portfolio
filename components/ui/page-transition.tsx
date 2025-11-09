"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Calcul du timing optimisé avec fondu enchaîné :
    // 4.14s (GIF) + 0.15s (blackout) + 1.68s (texte 28 lettres * 60ms) + 0.6s (pauses naturelles) + 1.2s (pause)
    // On commence 0.2s avant la fin pour créer un fondu enchaîné fluide
    const totalTime = 4140 + 150 + (28 * 60) + 600 + 1200 - 200;

    const timer = setTimeout(() => {
      setShowContent(true);
    }, totalTime);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1], // Courbe de bézier ultra-fluide
        staggerChildren: 0.05,
      }}
    >
      {children}
    </motion.div>
  );
}
