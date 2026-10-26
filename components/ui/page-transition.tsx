"use client";

import { motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  // L'attente d'environ 7,5 s calée sur l'intro animée est retirée (intro archivée le 26/10/2026,
  // voir archive/intro-splash) : la page apparaît tout de suite, avec le même fondu qu'avant.
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
