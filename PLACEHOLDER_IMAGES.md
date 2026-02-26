# Images Placeholder - Guide d'Utilisation

## 📸 Images Temporaires Ajoutées

J'ai configuré le site pour utiliser des **images placeholder temporaires** via des services en ligne. Voici comment ça fonctionne :

---

## 🎯 Images Actuellement Configurées

### 1. **Logo VIBRA**
- ✅ Créé : `assets/images/logo/vibra-logo.svg`
- ✅ Logo SVG simple avec le texte "VIBRA" en orange
- 📍 Utilisé dans : Header, Footer

### 2. **Hero Background (Tour Eiffel)**
- 🌐 URL Placeholder : `https://images.unsplash.com/photo-1514933651103-005eec06c04b`
- 📸 Image de soirée événementielle à Paris
- 📐 Taille : 1920x1080px
- 📍 Utilisé dans : Hero section de la page d'accueil

### 3. **Logos Clients (6 logos)**
J'ai utilisé des URLs placeholder pour chaque client :
- **Safran** : https://via.placeholder.com/120x60/CCCCCC/666666?text=SAFRAN
- **Capgemini** : https://via.placeholder.com/120x60/CCCCCC/666666?text=CAPGEMINI
- **L'Oréal** : https://via.placeholder.com/120x60/CCCCCC/666666?text=LOREAL
- **AlphaNOV** : https://via.placeholder.com/120x60/CCCCCC/666666?text=ALPHANOV
- **BOSS** : https://via.placeholder.com/120x60/CCCCCC/666666?text=BOSS
- **Gendarmerie** : https://via.placeholder.com/120x60/CCCCCC/666666?text=GENDARMERIE

### 4. **Cartes de Services (6 images)**
Toutes configurées avec des images de qualité d'événements :
- **Mariages** : https://images.unsplash.com/photo-1519741497674-611481863552
- **Corporate** : https://images.unsplash.com/photo-1511578314322-379afb476865
- **Rooftop** : https://images.unsplash.com/photo-1470337458703-46ad1756a187
- **Anniversaires** : https://images.unsplash.com/photo-1530103862676-de8c9debad1d
- **Soirées Privées** : https://images.unsplash.com/photo-1492684223066-81342ee5ff30
- **Festivals** : https://images.unsplash.com/photo-1459749411175-04bf5292ceea

---

## 🔄 Comment Remplacer par Vos Vraies Images

### Option 1 : Remplacer les URLs dans le HTML

1. Ouvrez `index.html`
2. Cherchez les images placeholder (commencent par `https://images.unsplash.com` ou `https://via.placeholder.com`)
3. Remplacez par vos propres chemins d'images

**Exemple :**
```html
<!-- Avant (placeholder) -->
<img src="https://images.unsplash.com/photo-..." alt="Mariage">

<!-- Après (votre image) -->
<img src="/assets/images/services/wedding.jpg" alt="Mariage">
```

### Option 2 : Placer Vos Images dans les Dossiers

Placez vos images aux emplacements suivants :

```
assets/images/
├── hero/
│   └── hero-eiffel-party.jpg          # Photo hero (1920x1080px recommandé)
│
├── clients/
│   ├── safran.png                     # Logo Safran (120x60px recommandé)
│   ├── capgemini.png                  # Logo Capgemini
│   ├── loreal.png                     # Logo L'Oréal
│   ├── alphanov.png                   # Logo AlphaNOV
│   ├── boss.png                       # Logo BOSS
│   └── gendarmerie.png                # Logo Gendarmerie
│
└── services/
    ├── wedding.jpg                    # Image mariage (800x600px)
    ├── corporate.jpg                  # Image corporate
    ├── rooftop.jpg                    # Image rooftop
    ├── birthday.jpg                   # Image anniversaire
    ├── private.jpg                    # Image soirée privée
    └── festival.jpg                   # Image festival
```

---

## ✨ Avantages des Images Placeholder

1. **Voir le design complet** - Vous pouvez voir à quoi ressemble le site immédiatement
2. **Tester les animations** - Toutes les animations fonctionnent avec les placeholders
3. **Vérifier la mise en page** - Assurer que tout est bien aligné
4. **Pas de connexion requise** - Les images Unsplash se chargent depuis leur CDN

---

## 🎨 Recommandations pour Vos Images

### Formats Recommandés
- **Hero** : JPG, 1920x1080px, qualité 85%
- **Services** : JPG, 800x600px (ratio 4:3), qualité 85%
- **Logos Clients** : PNG avec fond transparent, 240x120px max
- **Logo VIBRA** : SVG (vectoriel) ou PNG haute résolution

### Optimisation
Pour de meilleures performances :
1. Compressez vos images avec [TinyPNG](https://tinypng.com) ou [Squoosh](https://squoosh.app)
2. Utilisez le format WebP quand possible
3. Gardez les images sous 500KB chacune

---

## 🚀 Voir le Site Maintenant

1. Ouvrez **Live Server** dans VS Code
2. Le site s'affiche avec **toutes les images placeholder**
3. Vous pouvez voir l'expérience complète !

---

## 📝 Notes Importantes

- ✅ Les images placeholder sont **temporaires** et **gratuites**
- ✅ Unsplash fournit des **images de haute qualité** gratuitement
- ✅ Aucun téléchargement nécessaire - tout fonctionne via URL
- ⚠️ Remplacez par vos vraies images avant la mise en production
- ⚠️ Les URLs placeholder peuvent ne pas fonctionner hors ligne

---

## 🔗 Services Utilisés

- **Unsplash** : https://unsplash.com (images haute qualité gratuites)
- **Placeholder.com** : https://via.placeholder.com (logos placeholder)

---

Votre site est maintenant **100% fonctionnel** avec des images pour visualiser le design complet ! 🎉
