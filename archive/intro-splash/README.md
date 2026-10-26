# Intro archivée (écran d'accueil animé)

Retirée du site le 26/10/2026 à la demande d'Abdellatif : la vidéo (GIF de 4 s) et le texte « Bienvenue sur mon portfolio ! » s'affichaient avant d'entrer dans le portfolio, et le menu n'apparaissait qu'après 6 s.

Contenu de ce dossier (rien n'est supprimé) :
- `splash-screen.tsx.txt` : l'ancien composant `components/ui/splash-screen.tsx` ;
- `client-splash-wrapper.tsx.txt` : l'ancien `components/ui/client-splash-wrapper.tsx` (déjà inutilisé) ;
- `welcome-animation-v2.gif` : l'animation, sortie de `public/` pour ne plus être mise en ligne.

Les fichiers de code portent l'extension `.txt` pour que TypeScript et `next build` les ignorent.

Pour remettre l'intro :
1. renommer les deux fichiers en `.tsx` et les replacer dans `components/ui/` ;
2. replacer le GIF dans `public/` ;
3. dans `app/layout.tsx`, remettre `import SplashScreen from "@/components/ui/splash-screen";` et `<SplashScreen />` avant `<Header />` ;
4. dans `components/layout/header.tsx`, remettre le délai de 6 s (`setTimeout(() => setIsVisible(true), 6000)`).
5. dans `components/ui/page-transition.tsx`, remettre l'attente d'environ 7,5 s avant d'afficher la page (retirée le 26/10/2026 : elle était calée sur l'intro et laissait la page vide après son retrait).
