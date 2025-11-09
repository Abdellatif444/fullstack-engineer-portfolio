# 🚀 Déployer sur Replit

## Étape 1 : Préparer le projet

1. **Assure-toi que tous les fichiers sont prêts** :
   - ✅ `.replit` (créé)
   - ✅ `replit.nix` (créé)
   - ✅ `package.json` (existe)

## Étape 2 : Pousser vers GitHub

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Portfolio Abdellatif GOURRI - Prêt pour Replit"

# Créer le repository sur GitHub puis :
git remote add origin https://github.com/Abdellatif444/awesome-portfolio.git
git branch -M main
git push -u origin main
```

## Étape 3 : Importer dans Replit

1. Va sur **https://replit.com**
2. Clique sur **"+ Create Repl"**
3. Sélectionne **"Import from GitHub"**
4. Colle : `https://github.com/Abdellatif444/awesome-portfolio`
5. Clique **"Import from GitHub"**

## Étape 4 : Configuration dans Replit

Une fois importé, Replit va :
- ✅ Détecter automatiquement Next.js
- ✅ Installer les dépendances (`npm install`)
- ✅ Lancer le serveur de dev

## Étape 5 : Déployer en production

1. Dans Replit, clique sur l'onglet **"Deployments"**
2. Clique **"Deploy"**
3. Ton site sera disponible sur : `https://awesome-portfolio.abdellatif444.repl.co`

## 📝 Commandes utiles dans Replit

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Optimiser les images
npm run optimize-images
```

## ⚙️ Variables d'environnement

Si tu as besoin de variables d'env (API keys, etc.) :
1. Va dans **"Secrets"** (icône 🔒)
2. Ajoute tes clés
3. Elles seront disponibles via `process.env.MA_CLE`

## 🌐 URL personnalisée

Pour avoir ton propre domaine :
1. Achète un domaine (ex: abdellatif-gourri.com)
2. Dans Replit Deployments → **"Custom Domains"**
3. Configure les DNS selon les instructions

## 🔄 Mises à jour automatiques

Pour que Replit se mette à jour automatiquement quand tu push sur GitHub :
1. Va dans **Settings** → **"Git"**
2. Active **"Auto-pull from GitHub"**

## 💡 Conseils

- ✅ Utilise **Replit pour le dev** : Édite directement dans le navigateur
- ✅ **Vercel pour la production** : Meilleures performances
- ✅ **Les deux ?** : Développe sur Replit, déploie sur Vercel !

## 🆚 Replit vs Vercel

| Besoin | Solution |
|--------|----------|
| **Développer rapidement** | Replit ✅ |
| **Collaborer en temps réel** | Replit ✅ |
| **Meilleures performances** | Vercel ✅ |
| **CDN global** | Vercel ✅ |
| **Base de données** | Replit ✅ |
| **Gratuit** | Les deux ✅ |

## 🎯 Workflow recommandé

1. **Développe** sur Replit (IDE en ligne, facile)
2. **Push** vers GitHub
3. **Déploie** sur Vercel (performances optimales)

Comme ça, tu as le meilleur des deux mondes ! 🚀
