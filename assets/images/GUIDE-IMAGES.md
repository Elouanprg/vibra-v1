# GUIDE DES IMAGES - Site VIBRA

Toutes les images du site se trouvent dans le dossier `assets/images/`.
Chaque sous-dossier correspond a une page du site. Les noms de fichiers indiquent
exactement ou l'image apparait sur le site.

Format recommande : `.webp` (leger et rapide)

---

## LOGOS CLIENTS

Dossier : `logos-clients/`

Ces logos apparaissent sur la page d'accueil et la page portfolio (bandeau clients).

| Fichier              | Client                |
|----------------------|-----------------------|
| `safran.png`         | Safran                |
| `capgemini.png`      | Capgemini             |
| `loreal.webp`        | L'Oreal               |
| `alphanov.png`       | AlphaNOV              |
| `hugo-boss.png`      | Hugo Boss             |
| `gendarmerie.png`    | Gendarmerie Nationale |

Pour ajouter un nouveau logo client : ajoutez le fichier ici et modifiez le HTML.

---

## PAGE D'ACCUEIL (index.html)

Dossier : `page-accueil/`

| Fichier                    | Emplacement sur la page                      | Taille recommandee |
|----------------------------|----------------------------------------------|-------------------|
| `hero.webp`                | Grande image tout en haut de la page          | 1920 x 1080       |
| `carte-mariages.webp`      | Carte "Mariages" dans la section services     | 800 x 500         |
| `carte-corporate.webp`     | Carte "Corporate" dans la section services    | 800 x 500         |
| `carte-rooftop.webp`       | Carte "Rooftop" dans la section services      | 800 x 500         |
| `carte-anniversaires.webp` | Carte "Anniversaires" dans la section services| 800 x 500         |
| `carte-soirees-privees.webp`| Carte "Soirees privees" dans la section services | 800 x 500     |
| `carte-festivals.webp`     | Carte "Festivals" dans la section services    | 800 x 500         |

---

## PAGE EVENEMENTS PROFESSIONNELS (evenements-professionnels.html)

Dossier : `page-evenements-pro/`

| Fichier                    | Emplacement sur la page                      | Taille recommandee |
|----------------------------|----------------------------------------------|-------------------|
| `hero.webp`                | Grande image tout en haut de la page          | 1920 x 1080       |
| `carte-sonorisation.webp`  | Carte "Installation sonorisation" (services)  | 800 x 400         |
| `carte-lumiere.webp`       | Carte "Mise en lumiere" (services)            | 800 x 400         |
| `carte-dj.webp`            | Carte "Booking DJ" (services)                 | 800 x 400         |

### Carrousel evenements pro (5 slides)

Chaque evenement pro a son dossier dans `evenements/` :

| Dossier                        | Evenement                           | Position |
|--------------------------------|-------------------------------------|----------|
| `evenements/pro-loreal/`       | L'Oreal Paris - Institut Entreprise | Slide 1  |
| `evenements/pro-capgemini/`    | Capgemini - Seminaire La Rotonde    | Slide 2  |
| `evenements/pro-scaleway/`     | Scaleway - ai-PULSE Station F       | Slide 3  |
| `evenements/pro-notiplage/`    | Noti Plage - Fete de la Musique     | Slide 4  |
| `evenements/pro-corporate/`    | Evenement Corporate Premium         | Slide 5  |

Dans chaque dossier, placez :
- `principale.webp` → Image principale (celle du carrousel) - 1200 x 800
- `galerie-1.webp` → 1ere photo supplementaire (modal detail) - 1200 x 800
- `galerie-2.webp` → 2eme photo supplementaire - 1200 x 800
- `galerie-3.webp` → 3eme photo supplementaire - 1200 x 800

---

## PAGE EVENEMENTS PARTICULIERS (evenements-particuliers.html)

Dossier : `page-evenements-prives/`

| Fichier                    | Emplacement sur la page                      | Taille recommandee |
|----------------------------|----------------------------------------------|-------------------|
| `hero.webp`                | Grande image tout en haut de la page          | 1920 x 1080       |
| `carte-sonorisation.webp`  | Carte "Sonorisation sur mesure" (services)    | 800 x 400         |
| `carte-lumiere.webp`       | Carte "Mise en lumiere" (services)            | 800 x 400         |
| `carte-dj.webp`            | Carte "DJ & Animation" (services)             | 800 x 400         |

### Carrousel evenements prives (5 slides)

| Dossier                          | Evenement                           | Position |
|----------------------------------|-------------------------------------|----------|
| `evenements/part-mariage/`       | Mariage - Chateau de la Vallee      | Slide 1  |
| `evenements/part-anniversaire/`  | Anniversaire - Soiree privee Paris  | Slide 2  |
| `evenements/part-soiree/`        | Soiree Privee - Villa Elegance      | Slide 3  |
| `evenements/part-bapteme/`       | Bapteme - Fete de famille           | Slide 4  |
| `evenements/part-fiancailles/`   | Fiancailles - Soiree intime         | Slide 5  |

Dans chaque dossier, placez :
- `principale.webp` → Image principale (celle du carrousel) - 1200 x 800
- `galerie-1.webp` → 1ere photo supplementaire (modal detail) - 1200 x 800
- `galerie-2.webp` → 2eme photo supplementaire - 1200 x 800
- `galerie-3.webp` → 3eme photo supplementaire - 1200 x 800

---

## PAGE SON & LUMIERE (prestations-techniques.html)

Dossier : `page-son-et-lumiere/`

### Section Sonorisation

| Fichier        | Emplacement sur la page                          | Taille recommandee |
|----------------|--------------------------------------------------|-------------------|
| `sono-1.webp`  | Image grande a gauche (DJ / prestation sono)     | 1200 x 800        |
| `sono-2.webp`  | Image petite a droite (materiel sono)            | 600 x 400         |
| `sono-3.webp`  | Image pleine largeur en bas (installation sono)  | 1400 x 600        |

### Section Eclairage

| Fichier          | Emplacement sur la page                            | Taille recommandee |
|------------------|-----------------------------------------------------|-------------------|
| `lumiere-1.webp` | Image pleine largeur en haut (ambiance blanche)     | 1400 x 600        |
| `lumiere-2.webp` | Rangee du bas - image gauche (projecteurs LED)      | 600 x 400         |
| `lumiere-3.webp` | Rangee du bas - image droite (mise en lumiere scene)| 600 x 400         |
| `lumiere-4.webp` | Image supplementaire (prestation lumiere)           | 600 x 400         |

### Galeries modales (clic sur une image)

Quand on clique sur une image de cette page, un modal s'ouvre avec plus de photos.
Ces photos sont dans les dossiers suivants :

| Dossier                       | Correspond a           |
|-------------------------------|------------------------|
| `evenements/tech-sono-1/`     | Galerie de sono-1      |
| `evenements/tech-sono-2/`     | Galerie de sono-2      |
| `evenements/tech-sono-3/`     | Galerie de sono-3      |
| `evenements/tech-light-1/`    | Galerie de lumiere-1   |
| `evenements/tech-light-2/`    | Galerie de lumiere-2   |
| `evenements/tech-light-3/`    | Galerie de lumiere-3   |
| `evenements/tech-light-4/`    | Galerie de lumiere-4   |

Dans chaque dossier, placez :
- `galerie-1.webp`, `galerie-2.webp`, `galerie-3.webp` (photos supplementaires)

---

## PAGE PORTFOLIO (portfolio.html)

Dossier : `page-portfolio/`

La page portfolio affiche une grille de 16 cartes (4 lignes x 4 colonnes).

| Fichier          | Position dans la grille    | Client/Evenement                 |
|------------------|---------------------------|----------------------------------|
| `carte-01.webp`  | Ligne 1, Colonne 1        | AlphaNOV                         |
| `carte-02.webp`  | Ligne 1, Colonne 2        | Capgemini - Soiree entreprise    |
| `carte-03.webp`  | Ligne 1, Colonne 3        | L'Oreal - Lancement produit      |
| `carte-04.webp`  | Ligne 1, Colonne 4        | BOSS - Soiree de marque          |
| `carte-05.webp`  | Ligne 2, Colonne 1        | Capgemini - Team building        |
| `carte-06.webp`  | Ligne 2, Colonne 2        | Capgemini - Conference annuelle  |
| `carte-07.webp`  | Ligne 2, Colonne 3        | Capgemini - Gala fin d'annee     |
| `carte-08.webp`  | Ligne 2, Colonne 4        | Capgemini - Seminaire d'ete      |
| `carte-09.webp`  | Ligne 3, Colonne 1        | Capgemini - Innovation Day       |
| `carte-10.webp`  | Ligne 3, Colonne 2        | Capgemini - Afterwork            |
| `carte-11.webp`  | Ligne 3, Colonne 3        | Capgemini - Workshop creatif     |
| `carte-12.webp`  | Ligne 3, Colonne 4        | Capgemini - Cocktail clients     |
| `carte-13.webp`  | Ligne 4, Colonne 1        | Capgemini - Remise de prix       |
| `carte-14.webp`  | Ligne 4, Colonne 2        | Capgemini - Convention nationale |
| `carte-15.webp`  | Ligne 4, Colonne 3        | Capgemini - Soiree de Noel       |
| `carte-16.webp`  | Ligne 4, Colonne 4        | Capgemini - Summer Party         |

Taille recommandee : 600 x 600 (carre)

### Galeries modales portfolio

Quand on clique sur une carte, un modal s'ouvre. Les photos supplementaires
sont dans :

| Dossier                          | Correspond a      |
|----------------------------------|--------------------|
| `evenements/port-alphanov/`      | Carte 01 AlphaNOV  |
| `evenements/port-boss/`          | Carte 04 BOSS      |

(Les cartes 02 Capgemini et 03 L'Oreal reutilisent les galeries
`evenements/pro-capgemini/` et `evenements/pro-loreal/`)

Dans chaque dossier, placez :
- `galerie-1.webp`, `galerie-2.webp` (photos supplementaires) - 1200 x 800

---

## PAGE DJS (equipe-djs.html)

Dossier : `page-djs/`

3 DJs, chacun avec 3 photos dans un carrousel :

| Fichier            | DJ         | Position          |
|--------------------|------------|-------------------|
| `dj1-photo-1.webp` | DJ 1 (YL)  | Carrousel photo 1 |
| `dj1-photo-2.webp` | DJ 1 (YL)  | Carrousel photo 2 |
| `dj1-photo-3.webp` | DJ 1 (YL)  | Carrousel photo 3 |
| `dj2-photo-1.webp` | DJ 2       | Carrousel photo 1 |
| `dj2-photo-2.webp` | DJ 2       | Carrousel photo 2 |
| `dj2-photo-3.webp` | DJ 2       | Carrousel photo 3 |
| `dj3-photo-1.webp` | DJ 3       | Carrousel photo 1 |
| `dj3-photo-2.webp` | DJ 3       | Carrousel photo 2 |
| `dj3-photo-3.webp` | DJ 3       | Carrousel photo 3 |

Taille recommandee : 800 x 1000 (portrait)

---

## PAGE ARTISTES / SOLO & GROUPES (equipe-solo-groupes.html)

Dossier : `page-artistes/`

3 artistes/groupes, chacun avec 2-3 photos dans un carrousel :

| Fichier                | Artiste    | Position          |
|------------------------|------------|-------------------|
| `artiste1-photo-1.webp` | Artiste 1  | Carrousel photo 1 |
| `artiste1-photo-2.webp` | Artiste 1  | Carrousel photo 2 |
| `artiste1-photo-3.webp` | Artiste 1  | Carrousel photo 3 |
| `artiste2-photo-1.webp` | Artiste 2  | Carrousel photo 1 |
| `artiste2-photo-2.webp` | Artiste 2  | Carrousel photo 2 |
| `artiste2-photo-3.webp` | Artiste 2  | Carrousel photo 3 |
| `artiste3-photo-1.webp` | Artiste 3  | Carrousel photo 1 |
| `artiste3-photo-2.webp` | Artiste 3  | Carrousel photo 2 |

Taille recommandee : 800 x 1000 (portrait)

---

## PAGE MIX & PLAYLISTS (mix-playlists.html)

Dossier : `page-mix/`

| Fichier      | Emplacement sur la page              | Taille recommandee |
|--------------|--------------------------------------|-------------------|
| `hero.webp`  | Grande image en haut de la page      | 1920 x 1080       |

---

## LOGO DU SITE

Dossier : `logo/`

Ne pas modifier sauf pour changer le logo VIBRA.

---

## COMMENT REMPLACER UNE IMAGE

1. Trouvez le bon dossier grace a ce guide
2. Renommez votre image avec le nom exact indique (par ex. `hero.webp`)
3. Placez-la dans le dossier correspondant (remplace l'ancienne si elle existe)
4. Rafraichissez le site dans votre navigateur (Ctrl + F5)
5. C'est tout !

## FORMAT DES IMAGES

- Utilisez le format `.webp` pour toutes les images (plus leger, chargement rapide)
- Vous pouvez convertir vos images sur https://squoosh.app ou https://convertio.co
- Gardez une bonne qualite : 80-90% suffit pour le web

## RESUME DES DOSSIERS

```
assets/images/
├── logo/                    → Logo VIBRA (ne pas toucher)
├── logos-clients/           → Logos des clients partenaires
├── page-accueil/            → Images de la page d'accueil
├── page-evenements-pro/     → Images de la page evenements pro
├── page-evenements-prives/  → Images de la page evenements prives
├── page-son-et-lumiere/     → Images de la page son & lumiere
├── page-portfolio/          → Images des cartes du portfolio
├── page-djs/                → Photos des DJs
├── page-artistes/           → Photos des artistes solo & groupes
├── page-mix/                → Image de la page mix & playlists
└── evenements/              → Photos supplementaires pour les modals
    ├── pro-loreal/          → Galerie L'Oreal (modal)
    ├── pro-capgemini/       → Galerie Capgemini (modal)
    ├── pro-scaleway/        → Galerie Scaleway (modal)
    ├── pro-notiplage/       → Galerie Noti Plage (modal)
    ├── pro-corporate/       → Galerie Corporate (modal)
    ├── part-mariage/        → Galerie Mariage (modal)
    ├── part-anniversaire/   → Galerie Anniversaire (modal)
    ├── part-soiree/         → Galerie Soiree privee (modal)
    ├── part-bapteme/        → Galerie Bapteme (modal)
    ├── part-fiancailles/    → Galerie Fiancailles (modal)
    ├── tech-sono-1/         → Galerie sono 1 (modal)
    ├── tech-sono-2/         → Galerie sono 2 (modal)
    ├── tech-sono-3/         → Galerie sono 3 (modal)
    ├── tech-light-1/        → Galerie lumiere 1 (modal)
    ├── tech-light-2/        → Galerie lumiere 2 (modal)
    ├── tech-light-3/        → Galerie lumiere 3 (modal)
    ├── tech-light-4/        → Galerie lumiere 4 (modal)
    ├── port-alphanov/       → Galerie AlphaNOV (modal)
    └── port-boss/           → Galerie BOSS (modal)
```
