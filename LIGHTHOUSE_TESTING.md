# Guide de Test Lighthouse - VIBRA Event Agency

## 🚀 Comment Tester les Performances avec Lighthouse

### Méthode 1 : Chrome DevTools (Recommandé)

1. **Ouvrir la page dans Chrome**
   ```
   Ouvrez index.html dans Google Chrome
   ```

2. **Ouvrir DevTools**
   - Appuyez sur `F12` ou `Ctrl+Shift+I` (Windows)
   - Ou `Cmd+Option+I` (Mac)

3. **Accéder à Lighthouse**
   - Cliquez sur l'onglet "Lighthouse" dans DevTools
   - Si vous ne le voyez pas, cliquez sur `>>` et sélectionnez "Lighthouse"

4. **Configurer le Test**
   - ✅ Cochez "Performance"
   - ✅ Cochez "Accessibility"
   - ✅ Cochez "Best Practices"
   - ✅ Cochez "SEO"
   - Mode: Choisir "Desktop" pour le premier test

5. **Lancer l'Analyse**
   - Cliquez sur "Analyze page load"
   - Attendez 30-60 secondes

6. **Interpréter les Résultats**

### Méthode 2 : Ligne de Commande

```bash
# Installer Lighthouse globally
npm install -g lighthouse

# Tester la page
lighthouse index.html --view

# Sauvegarder le rapport
lighthouse index.html --output html --output-path ./lighthouse-report.html
```

---

## 📊 Scores Attendus vs Objectifs

### Performance (Objectif: > 90)

**Métriques Clés:**
- **FCP (First Contentful Paint):** < 1.0s ✅
- **LCP (Largest Contentful Paint):** < 2.5s ✅
- **TBT (Total Blocking Time):** < 200ms ✅
- **CLS (Cumulative Layout Shift):** < 0.1 ✅
- **SI (Speed Index):** < 3.4s ✅

**Facteurs Impactant le Score:**
- ✅ Lazy loading images
- ✅ WebP format (82% des images)
- ✅ Smooth scroll désactivé sur mobile
- ⚠️ CSS non minifié (-5 points)
- ⚠️ Pas de cache headers (-3 points, nécessite serveur)

**Score Estimé:** 88-92

### Accessibility (Objectif: > 95)

**Points Vérifiés:**
- ✅ Contraste de couleurs (4.5:1 minimum)
- ✅ Attributs alt sur images
- ✅ Navigation clavier
- ✅ ARIA labels
- ✅ Skip to content link
- ✅ Focus visible

**Score Estimé:** 95-100

### Best Practices (Objectif: > 90)

**Points Vérifiés:**
- ✅ HTTPS (à vérifier en production)
- ✅ Console errors (aucune)
- ✅ Images avec dimensions (aspect-ratio CSS)
- ✅ CDN libraries fiables (unpkg, jsdelivr)

**Score Estimé:** 90-95

### SEO (Objectif: > 95)

**Points Vérifiés:**
- ✅ Meta description
- ✅ Title tag
- ✅ Viewport meta tag
- ✅ Robots.txt
- ✅ Sitemap.xml
- ✅ Attributs alt
- ✅ Structure sémantique HTML5

**Score Estimé:** 95-100

---

## 🔍 Opportunités d'Amélioration Possibles

### Performance

1. **Minification CSS/JS**
   ```bash
   # Économie estimée: 20-30% de taille de fichier
   npx cssnano assets/css/main.css assets/css/main.min.css
   npx terser assets/js/main.js -o assets/js/main.min.js
   ```

2. **Compression Images PNG → WebP**
   ```bash
   # Réduire 7 PNG restants
   # Économie estimée: 40-60% de poids
   ```

3. **Prefetch DNS pour CDN**
   ```html
   <link rel="dns-prefetch" href="https://unpkg.com">
   <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
   <link rel="dns-prefetch" href="https://fonts.googleapis.com">
   ```

4. **Defer Non-Critical JS**
   ```html
   <!-- Déjà fait pour main.js (type="module") ✅ -->
   ```

### Accessibility

1. **Ajouter lang attribute**
   ```html
   <html lang="fr">
   ```

2. **Améliorer contraste sur boutons hover** (si signalé)

### SEO

1. **Schema.org Markup (Optionnel)**
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "EventPlanner",
     "name": "VIBRA Event Agency",
     "description": "Agence événementielle premium...",
     "address": {...},
     "telephone": "...",
     "priceRange": "$$$"
   }
   </script>
   ```

---

## 📸 Captures d'Écran Recommandées

Après le test, capturer :

1. **Score global** (les 4 cercles de score)
2. **Métriques Performance** (FCP, LCP, TBT, CLS, SI)
3. **Opportunités** (suggestions Lighthouse)
4. **Diagnostics** (problèmes détectés)

Sauvegarder dans : `docs/lighthouse-reports/`

---

## 🎯 Actions Post-Test

### Si Score < 90 en Performance

1. Vérifier les opportunités suggérées par Lighthouse
2. Prioriser les "High Impact" actions
3. Implémenter minification CSS/JS
4. Re-tester

### Si Score > 90 Partout ✅

1. ✅ Marquer tâche "Test Lighthouse" comme complète
2. ✅ Documenter les scores finaux dans OPTIMIZATION_REPORT.md
3. ✅ Passer à la minification CSS/JS
4. ✅ Préparer Option 3 (création des 7 pages)

---

## 🔗 Ressources

- **Lighthouse Documentation:** https://developers.google.com/web/tools/lighthouse
- **Web Vitals:** https://web.dev/vitals/
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **WebP Converter:** https://developers.google.com/speed/webp

---

**Note:** Les tests Lighthouse doivent être effectués :
- En mode navigation privée (éviter extensions)
- Sur serveur local ou production (pas file://)
- Plusieurs fois (moyenne de 3 tests)
- Desktop ET Mobile

**Prochaine étape :** Exécuter le test et documenter les résultats !
