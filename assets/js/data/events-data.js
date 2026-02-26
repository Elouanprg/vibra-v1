/**
 * VIBRA - Données des événements pour le modal de détail
 * Chaque clé correspond à un data-event-id dans le HTML
 * Classement : du plus impressionnant au moins impressionnant
 *
 * Images : placez vos fichiers dans assets/images/evenements/<dossier>/
 */
const eventsData = {

  // ===== ÉVÉNEMENTS PROFESSIONNELS (classés par importance) =====

  // 1. Scaleway - ai-PULSE - Station F, Paris
  'pro-scaleway': {
    title: 'Scaleway',
    subtitle: 'Événement ai-PULSE - Station F',
    category: 'Corporate',
    description: "Sonorisation et ambiance musicale pour l'événement ai-PULSE de Scaleway à Station F. Une prestation technique de pointe dans le plus grand campus de startups au monde, devant des centaines de participants.",
    images: [
      'assets/images/evenements/pro-scaleway/principale.webp',
      'assets/images/evenements/pro-scaleway/galerie-1.webp',
      'assets/images/evenements/pro-scaleway/galerie-2.webp',
      'assets/images/evenements/pro-scaleway/galerie-3.webp',
    ],
    location: 'Paris - Station F',
    date: '2025'
  },

  // 2. L'Oréal - Institut de l'Entreprise / Le Visionnaire, Paris
  'pro-loreal': {
    title: "L'Oréal Paris",
    subtitle: "Institut de l'Entreprise - Le Visionnaire",
    category: 'Corporate',
    description: "Mise en ambiance musicale et lumineuse pour l'Institut de l'Entreprise organisé par L'Oréal Paris. Un DJ set élégant accompagné d'un éclairage aux couleurs de la marque pour une soirée corporate inoubliable dans un cadre parisien d'exception.",
    images: [
      'assets/images/evenements/pro-loreal/galerie-2.webp',
      'assets/images/evenements/pro-loreal/galerie-1.webp',
      'assets/images/evenements/pro-loreal/galerie-3.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  // 3. Noti Plage - Fête de la Musique 2025, Paris
  'pro-notiplage': {
    title: 'Noti Plage',
    subtitle: 'Fête de la Musique 2025 - Paris',
    category: 'Festival',
    description: "Animation DJ et sonorisation pour la Fête de la Musique 2025 au Noti Plage à Paris. Une ambiance festive en plein air avec un sound system adapté à l'espace extérieur, devant une foule en fête.",
    images: [
      'assets/images/evenements/pro-notiplage/galerie-2.webp',
      'assets/images/evenements/pro-notiplage/principale.webp',
      'assets/images/evenements/pro-notiplage/galerie-1.webp',
      'assets/images/evenements/pro-notiplage/galerie-3.webp',
      'assets/images/evenements/pro-notiplage/galerie-4.jpg',
      'assets/images/evenements/pro-notiplage/galerie-5.jpg',
      'assets/images/evenements/pro-notiplage/galerie-6.jpg',
      'assets/images/evenements/pro-notiplage/galerie-7.jpg',
    ],
    location: 'Paris',
    date: '2025'
  },

  // 4. Gendarmerie Nationale - Tulle
  'pro-gendarmerie': {
    title: 'Gendarmerie Nationale',
    subtitle: 'Gala officiel - Tulle',
    category: 'Institutionnel',
    description: "Prestation son et lumière pour le gala officiel de la Gendarmerie Nationale à Tulle. Sonorisation de la cérémonie, éclairage d'ambiance et DJ set pour la soirée dansante dans un cadre prestigieux.",
    images: [
      'assets/images/evenements/pro-gendarmerie/galerie-1.webp',
      'assets/images/evenements/pro-gendarmerie/principale.webp',
      'assets/images/evenements/pro-gendarmerie/galerie-2.webp',
    ],
    location: 'Tulle',
    date: '2025'
  },

  // 5. Safran - Afterwork, Quai de la Photo, Paris
  'pro-safran': {
    title: 'Safran',
    subtitle: 'Afterwork - Quai de la Photo',
    category: 'Corporate',
    description: "Afterwork corporate pour Safran au Quai de la Photo à Paris. DJ set dans une ambiance rouge intimiste au sein de ce lieu culturel unique en bord de Seine.",
    images: [
      'assets/images/evenements/pro-safran/principale.webp',
      'assets/images/evenements/pro-safran/galerie-1.webp',
    ],
    location: 'Paris - Quai de la Photo',
    date: '2025'
  },

  // 6. SFEIR - Afterwork / Séminaire, Agence Paris
  'pro-sfeir': {
    title: 'SFEIR',
    subtitle: 'Afterwork & Séminaire - Agence Paris',
    category: 'Corporate',
    description: "Mise en ambiance musicale et lumineuse pour l'afterwork et le séminaire SFEIR dans leurs locaux parisiens. Éclairage bleu immersif et DJ set pour une soirée tech et conviviale.",
    images: [
      'assets/images/evenements/pro-sfeir/principale.webp',
      'assets/images/evenements/pro-sfeir/galerie-1.webp',
      'assets/images/evenements/pro-sfeir/galerie-2.webp',
    ],
    location: 'Paris',
    date: '2025'
  },

  // 7. Capgemini - Séminaire, La Rotonde Stalingrad, Paris
  'pro-capgemini': {
    title: 'Capgemini',
    subtitle: 'Séminaire - La Rotonde Stalingrad',
    category: 'Corporate',
    description: "Prestation complète son et lumière pour le séminaire Capgemini à La Rotonde Stalingrad. Sonorisation de la conférence plénière et DJ set pour la soirée de gala dans ce lieu emblématique parisien.",
    images: [
      'assets/images/evenements/pro-capgemini/galerie-1.webp',
      'assets/images/evenements/pro-capgemini/principale.webp',
    ],
    location: 'Paris - La Rotonde Stalingrad',
    date: '2025'
  },

  // 8. Gina & Pommery - Pool Party, Hôtel Renaissance Mariott, Bordeaux
  'pro-gina': {
    title: 'Gina & Pommery',
    subtitle: 'Pool Party - Hôtel Renaissance Mariott',
    category: 'Marque',
    description: "Pool party pour Gina & Pommery à l'Hôtel Renaissance Mariott de Bordeaux. DJ set au bord de la piscine avec une ambiance estivale et élégante pour un événement de marque mémorable.",
    images: [
      'assets/images/evenements/pro-gina/principale.webp',
    ],
    location: 'Bordeaux - Hôtel Renaissance Mariott',
    date: '2025'
  },

  // 9. Santa Teresa - Borne Hôtel, Bordeaux
  'pro-santa-teresa': {
    title: 'Santa Teresa 1796',
    subtitle: 'Soirée de marque - Borne Hôtel',
    category: 'Marque',
    description: "Soirée exclusive pour Santa Teresa 1796 au Borne Hôtel de Bordeaux. Ambiance musicale latino et chaleureuse avec dégustation de rhum dans un cadre historique bordelais.",
    images: [
      'assets/images/evenements/pro-santa-teresa/principale.webp',
      'assets/images/evenements/pro-santa-teresa/galerie-1.webp',
      'assets/images/evenements/pro-santa-teresa/galerie-2.webp',
      'assets/images/evenements/pro-santa-teresa/galerie-3.webp',
      'assets/images/evenements/pro-santa-teresa/galerie-4.webp',
    ],
    location: 'Bordeaux - Borne Hôtel',
    date: '2025'
  },

  // 10. Ricard - Soirée de la marque, Carcans
  'pro-ricard': {
    title: 'Ricard',
    subtitle: 'Soirée de la marque - Carcans',
    category: 'Marque',
    description: "Animation DJ pour la soirée Ricard à Carcans. Ambiance festive et ensoleillée pour cet événement estival emblématique de la marque, en plein air avec une foule en fête.",
    images: [
      'assets/images/evenements/pro-ricard/principale.webp',
      'assets/images/evenements/pro-ricard/galerie-1.webp',
      'assets/images/evenements/pro-ricard/galerie-2.webp',
    ],
    location: 'Carcans',
    date: '2025'
  },

  // 11. Cap Sciences - 30 ans, Bordeaux
  'pro-capsciences': {
    title: 'Cap Sciences',
    subtitle: '30 ans - Bordeaux',
    category: 'Institutionnel',
    description: "Prestation musicale et technique pour les 30 ans de Cap Sciences à Bordeaux. Sonorisation, mise en lumière spectaculaire et DJ set pour célébrer trois décennies de culture scientifique.",
    images: [
      'assets/images/evenements/pro-capsciences/principale.webp',
      'assets/images/evenements/pro-capsciences/galerie-1.webp',
      'assets/images/evenements/pro-capsciences/galerie-2.webp',
      'assets/images/evenements/pro-capsciences/galerie-3.webp',
    ],
    location: 'Bordeaux',
    date: '2024'
  },

  // 12. Provalliance / Bleu Libellule - Séminaire, Diego, Arcachon
  'pro-provalliance': {
    title: 'Provalliance / Bleu Libellule',
    subtitle: 'Séminaire - Diego, Arcachon',
    category: 'Corporate',
    description: "Séminaire d'entreprise pour Provalliance / Bleu Libellule au restaurant Diego à Arcachon. Ambiance chaleureuse avec éclairage orange et DJ set pour une soirée team building réussie.",
    images: [
      'assets/images/evenements/pro-provalliance/principale.webp',
      'assets/images/evenements/pro-provalliance/galerie-1.webp',
    ],
    location: 'Arcachon - Diego',
    date: '2025'
  },

  // 13. ALPHANOV - Summer School, Hôtel Radison Blu, Bordeaux
  'pro-alphanov-summer': {
    title: 'ALPHANOV',
    subtitle: 'Summer School - Hôtel Radison Blu',
    category: 'Corporate',
    description: "Animation musicale et mise en lumière pour la Summer School d'ALPHANOV à l'Hôtel Radison Blu de Bordeaux. Éclairage vert immersif et sonorisation pour un événement scientifique convivial.",
    images: [
      'assets/images/evenements/pro-alphanov-summer/principale.webp',
      'assets/images/evenements/pro-alphanov-summer/galerie-1.webp',
      'assets/images/evenements/pro-alphanov-summer/galerie-2.webp',
      'assets/images/evenements/pro-alphanov-summer/galerie-3.webp',
    ],
    location: 'Bordeaux - Hôtel Radison Blu',
    date: '2025'
  },

  // 14. ALPHANOV - Séminaire, Bordeaux
  'pro-alphanov-seminaire': {
    title: 'ALPHANOV',
    subtitle: 'Séminaire - Bordeaux',
    category: 'Corporate',
    description: "DJ set tropical pour le séminaire ALPHANOV à Bordeaux. Ambiance exotique et chaleureuse dans un bar à thème pour une soirée d'entreprise dépaysante.",
    images: [
      'assets/images/evenements/pro-alphanov-seminaire/principale.webp',
      'assets/images/evenements/pro-alphanov-seminaire/galerie-1.webp',
      'assets/images/evenements/pro-alphanov-seminaire/galerie-2.webp',
    ],
    location: 'Bordeaux',
    date: '2025'
  },

  // 15. Pompiers - Sainte-Barbe, Caserne de Cestas
  'pro-pompiers': {
    title: 'Pompiers',
    subtitle: 'Sainte-Barbe - Caserne de Cestas',
    category: 'Institutionnel',
    description: "Prestation complète son et lumière pour la Sainte-Barbe des Pompiers à la Caserne de Cestas. Mise en lumière multicolore de la salle, sonorisation et DJ set pour la soirée dansante.",
    images: [
      'assets/images/evenements/pro-pompiers/principale.webp',
      'assets/images/evenements/pro-pompiers/galerie-1.webp',
      'assets/images/evenements/pro-pompiers/galerie-2.webp',
      'assets/images/evenements/pro-pompiers/galerie-3.webp',
    ],
    location: 'Cestas',
    date: '2025'
  },

  // 16. Calicéo - Bordeaux
  'pro-caliceo': {
    title: 'Calicéo',
    subtitle: 'DJ Set piscine - Bordeaux',
    category: 'Loisirs',
    description: "DJ set au bord de la piscine du centre aquatique Calicéo à Bordeaux. Ambiance musicale au coucher du soleil pour les baigneurs, avec un sound system adapté à l'espace extérieur.",
    images: [
      'assets/images/evenements/pro-caliceo/principale.webp',
      'assets/images/evenements/pro-caliceo/galerie-1.webp',
      'assets/images/evenements/pro-caliceo/galerie-2.webp',
    ],
    location: 'Bordeaux',
    date: '2025'
  },

  // 17. Société Générale - Séminaire, Deauville
  'pro-socgen': {
    title: 'Société Générale',
    subtitle: 'Séminaire - Deauville',
    category: 'Corporate',
    description: "Prestation DJ pour le séminaire Société Générale à Deauville. Ambiance musicale au restaurant La Péniche pour une soirée corporate élégante en bord de mer.",
    images: [
      'assets/images/evenements/pro-socgen/principale.webp',
      'assets/images/evenements/pro-socgen/galerie-1.webp',
    ],
    location: 'Deauville - La Péniche',
    date: '2025'
  },

  // 18. HUGO BOSS - DJ Set, Bordeaux
  'pro-hugoboss': {
    title: 'HUGO BOSS',
    subtitle: 'DJ Set - Bordeaux',
    category: 'Marque',
    description: "DJ set exclusif pour HUGO BOSS en boutique à Bordeaux. Ambiance musicale raffinée pour un événement de marque de luxe.",
    images: [
      'assets/images/evenements/pro-hugoboss/principale.webp',
    ],
    location: 'Bordeaux',
    date: '2025'
  },

  // 19. Comptastar - Séminaire, Burdigala II, Bordeaux
  'pro-comptastar': {
    title: 'Comptastar',
    subtitle: 'Séminaire - Burdigala II',
    category: 'Corporate',
    description: "DJ set sur le bateau Burdigala II pour le séminaire Comptastar à Bordeaux. Croisière musicale sur la Garonne avec vue sur le Pont de Pierre et les quais bordelais.",
    images: [
      'assets/images/evenements/pro-comptastar/principale.webp',
      'assets/images/evenements/pro-comptastar/galerie-1.webp',
      'assets/images/evenements/pro-comptastar/galerie-2.jpg',
    ],
    location: 'Bordeaux - Burdigala II',
    date: '2025'
  },

  // 20. Shiro Games - Séminaire, Burdigala II, Bordeaux
  'pro-shirogames': {
    title: 'Shiro Games',
    subtitle: 'Séminaire - Burdigala II',
    category: 'Corporate',
    description: "Animation DJ pour le séminaire Shiro Games sur le bateau Burdigala II. Croisière d'entreprise sur la Garonne pour le studio de jeux vidéo bordelais.",
    images: [
      'assets/images/evenements/pro-shirogames/principale.webp',
      'assets/images/evenements/pro-shirogames/galerie-1.webp',
    ],
    location: 'Bordeaux - Burdigala II',
    date: '2025'
  },

  // 21. Climb Up - Soirée Black Lights, Bordeaux
  'pro-climbup': {
    title: 'Climb Up',
    subtitle: 'Soirée Black Lights - Bordeaux',
    category: 'Loisirs',
    description: "DJ set et mise en lumière UV pour la soirée Black Lights de Climb Up à Bordeaux. Ambiance néon et blacklight dans la salle d'escalade pour un événement sportif et festif unique.",
    images: [
      'assets/images/evenements/pro-climbup/principale.webp',
      'assets/images/evenements/pro-climbup/galerie-1.webp',
    ],
    location: 'Bordeaux',
    date: '2023'
  },

  // ===== FÊTES DE LA MUSIQUE =====

  'pro-fdlm-2024': {
    title: 'Fête de la Musique 2024',
    subtitle: 'Pont Neuf - Paris',
    category: 'Festival',
    description: "DJ set en plein air pour la Fête de la Musique 2024 sur le Pont Neuf à Paris. Une soirée mémorable avec une foule survoltée au cœur de la capitale, entre sets dynamiques et ambiance de fête.",
    images: [
      'assets/images/evenements/pro-fdlm-2024/principale.jpg',
      'assets/images/evenements/pro-fdlm-2024/galerie-1.jpg',
      'assets/images/evenements/pro-fdlm-2024/galerie-2.jpg',
      'assets/images/evenements/pro-fdlm-2024/galerie-3.jpg',
      'assets/images/evenements/pro-fdlm-2024/galerie-4.jpg',
    ],
    location: 'Paris - Pont Neuf',
    date: '2024'
  },

  'pro-fdlm-2023': {
    title: 'Fête de la Musique 2023',
    subtitle: 'Invalides - Paris',
    category: 'Festival',
    description: "Animation musicale pour la Fête de la Musique 2023 aux Invalides à Paris. Une soirée de fête dans un cadre historique prestigieux.",
    images: [
      'assets/images/evenements/pro-fdlm-2023/principale.jpg',
    ],
    location: 'Paris - Invalides',
    date: '2023'
  },

  'pro-fdlm-2022': {
    title: 'Fête de la Musique 2022',
    subtitle: 'Bordeaux',
    category: 'Festival',
    description: "DJ set en plein air pour la Fête de la Musique 2022 à Bordeaux. Ambiance festive et populaire pour cette édition locale avec une foule enthousiaste.",
    images: [
      'assets/images/evenements/pro-fdlm-2022/principale.jpg',
      'assets/images/evenements/pro-fdlm-2022/galerie-1.jpg',
      'assets/images/evenements/pro-fdlm-2022/galerie-2.jpg',
      'assets/images/evenements/pro-fdlm-2022/galerie-3.jpg',
      'assets/images/evenements/pro-fdlm-2022/galerie-4.jpeg',
    ],
    location: 'Bordeaux',
    date: '2022'
  },

  // ===== SOIRÉES ÉTUDIANTES =====

  'pro-ebbs': {
    title: 'EBBS Business School',
    subtitle: 'Gala - Bordeaux',
    category: 'Étudiant',
    description: "DJ set et mise en ambiance pour le gala de l'EBBS Business School à Bordeaux. Une soirée étudiante haut de gamme avec éclairage professionnel et musique adaptée.",
    images: [
      'assets/images/evenements/pro-ebbs/principale.jpg',
      'assets/images/evenements/pro-ebbs/galerie-1.png',
      'assets/images/evenements/pro-ebbs/galerie-2.jpg',
      'assets/images/evenements/pro-ebbs/galerie-3.jpg',
    ],
    location: 'Bordeaux',
    date: '2024'
  },

  'pro-peyragudes': {
    title: 'Funbreak',
    subtitle: 'Week-End Ski - Peyragudes',
    category: 'Étudiant',
    description: "Animation DJ pour les week-ends ski organisés par Funbreak à Peyragudes. Après-ski survoltés et soirées enflammées dans les stations de montagne.",
    images: [
      'assets/images/evenements/pro-peyragudes/principale.jpg',
      'assets/images/evenements/pro-peyragudes/galerie-1.jpg',
      'assets/images/evenements/pro-peyragudes/galerie-2.jpg',
      'assets/images/evenements/pro-peyragudes/galerie-3.jpg',
    ],
    location: 'Peyragudes',
    date: '2022'
  },

  // ===== ÉVÉNEMENTS PARTICULIERS - MARIAGES =====

  'part-mariage-lafitte': {
    title: 'Mariage au Château Lafitte',
    subtitle: 'Yvrac - Bordeaux',
    category: 'Mariage',
    description: "Prestation complète pour un mariage d'exception au Château Lafitte à Yvrac. Du vin d'honneur à la soirée dansante, sonorisation de la cérémonie, mise en lumière du château et DJ set personnalisé pour une fête mémorable.",
    images: [
      'assets/images/evenements/part-mariage-lafitte/principale.jpg',
      'assets/images/evenements/part-mariage-lafitte/galerie-1.jpg',
      'assets/images/evenements/part-mariage-lafitte/galerie-2.jpeg',
      'assets/images/evenements/part-mariage-lafitte/galerie-3.jpg',
      'assets/images/evenements/part-mariage-lafitte/galerie-4.jpg',
      'assets/images/evenements/part-mariage-lafitte/sono-1.jpg',
      'assets/images/evenements/part-mariage-lafitte/sono-2.jpg',
      'assets/images/evenements/part-mariage-lafitte/lumiere-1.jpg',
      'assets/images/evenements/part-mariage-lafitte/lumiere-2.jpg',
      'assets/images/evenements/part-mariage-lafitte/lumiere-3.jpg',
      'assets/images/evenements/part-mariage-lafitte/lumiere-4.jpg',
    ],
    location: 'Château Lafitte - Yvrac',
    date: '2024'
  },

  'part-mariage-possible': {
    title: 'Mariage au Domaine du Possible',
    subtitle: 'Eauze',
    category: 'Mariage',
    description: "Mariage féerique au Domaine du Possible à Eauze. Prestation son et lumière avec machines à étincelles froides pour sublimer les moments forts : entrée des mariés, première danse et gâteau. Un spectacle visuel époustouflant dans un cadre champêtre.",
    images: [
      'assets/images/evenements/part-mariage-possible/principale.jpg',
      'assets/images/evenements/part-mariage-possible/galerie-1.jpg',
      'assets/images/evenements/part-mariage-possible/galerie-2.jpg',
      'assets/images/evenements/part-mariage-possible/galerie-3.jpg',
      'assets/images/evenements/part-mariage-possible/galerie-4.jpg',
      'assets/images/evenements/part-mariage-possible/galerie-5.jpg',
      'assets/images/evenements/part-mariage-possible/galerie-6.jpg',
      'assets/images/evenements/part-mariage-possible/effets-1.jpg',
      'assets/images/evenements/part-mariage-possible/effets-2.jpg',
      'assets/images/evenements/part-mariage-possible/effets-3.jpg',
      'assets/images/evenements/part-mariage-possible/ambiance-1.jpg',
      'assets/images/evenements/part-mariage-possible/ambiance-2.jpg',
    ],
    location: 'Domaine du Possible - Eauze',
    date: '2025'
  },

  'part-mariage-bijoutier': {
    title: 'Mariage au Domaine du Bijoutier',
    subtitle: 'Lyon',
    category: 'Mariage',
    description: "Prestation musicale et lumineuse pour un mariage élégant au Domaine du Bijoutier à Lyon. Accompagnement de la cérémonie à la soirée dansante, avec une ambiance sur mesure pour chaque moment : sortie d'église, vin d'honneur, repas, première danse et soirée.",
    images: [
      'assets/images/evenements/part-mariage-bijoutier/principale.jpg',
      'assets/images/evenements/part-mariage-bijoutier/galerie-1.jpg',
      'assets/images/evenements/part-mariage-bijoutier/galerie-2.jpg',
      'assets/images/evenements/part-mariage-bijoutier/galerie-3.jpg',
      'assets/images/evenements/part-mariage-bijoutier/galerie-4.jpg',
      'assets/images/evenements/part-mariage-bijoutier/galerie-5.jpg',
      'assets/images/evenements/part-mariage-bijoutier/galerie-6.jpg',
      'assets/images/evenements/part-mariage-bijoutier/galerie-7.jpg',
      'assets/images/evenements/part-mariage-bijoutier/galerie-8.png',
    ],
    location: 'Domaine du Bijoutier - Lyon',
    date: '2024'
  },

  'part-mariage-arcachon': {
    title: 'British Wedding',
    subtitle: 'Bassin d\'Arcachon',
    category: 'Mariage',
    description: "Prestation DJ pour un mariage anglo-français au Bassin d'Arcachon. Ambiance musicale éclectique mêlant hits internationaux et classiques british pour une fête bilingue et conviviale.",
    images: [
      'assets/images/evenements/part-mariage-arcachon/principale.jpeg',
      'assets/images/evenements/part-mariage-arcachon/galerie-1.jpeg',
      'assets/images/evenements/part-mariage-arcachon/galerie-2.jpeg',
    ],
    location: 'Bassin d\'Arcachon',
    date: '2024'
  },

  'part-mariage-villamaria': {
    title: 'Mariage Villa Maria',
    subtitle: 'Arcachon - avec Alegria',
    category: 'Mariage',
    description: "Mariage à la Villa Maria à Arcachon en partenariat avec Alegria. Prestation DJ et sonorisation dans un cadre luxueux face au bassin, avec une ambiance musicale raffinée et festive.",
    images: [
      'assets/images/evenements/part-mariage-villamaria/principale.jpg',
      'assets/images/evenements/part-mariage-villamaria/galerie-1.jpg',
    ],
    location: 'Villa Maria - Arcachon',
    date: '2024'
  },

  'part-mariage-thil': {
    title: 'Mariage au Château du Thil',
    subtitle: 'Léognan - avec Alegria',
    category: 'Mariage',
    description: "Mariage au Château du Thil à Léognan en collaboration avec Alegria. DJ set et mise en lumière dans ce domaine viticole bordelais d'exception pour une soirée inoubliable.",
    images: [
      'assets/images/evenements/part-mariage-thil/principale.jpg',
      'assets/images/evenements/part-mariage-thil/galerie-1.jpg',
    ],
    location: 'Château du Thil - Léognan',
    date: '2024'
  },

  'part-ceremonie': {
    title: 'Cérémonies Laïques',
    subtitle: 'Sonorisation & Ambiance',
    category: 'Mariage',
    description: "Sonorisation et ambiance musicale pour des cérémonies laïques en extérieur. Installation sono discrète et élégante, playlist soigneusement sélectionnée pour accompagner chaque moment de la cérémonie avec émotion.",
    images: [
      'assets/images/evenements/part-ceremonie/principale.jpeg',
      'assets/images/evenements/part-ceremonie/galerie-1.jpeg',
      'assets/images/evenements/part-ceremonie/galerie-2.jpg',
    ],
    location: 'Sud-Ouest',
    date: '2024'
  },

  // ===== PRESTATIONS TECHNIQUES =====
  'tech-sono-1': {
    title: 'Sonorisation événementielle',
    subtitle: 'Prestation DJ & sound system',
    category: 'Sonorisation',
    description: "Installation complète de sonorisation pour événement. Matériel haut de gamme dimensionné pour votre espace avec ingénieur son dédié.",
    images: [
      'assets/images/page-son-et-lumiere/sono-1.webp',
    ],
    location: 'France',
    date: '2025'
  },

  'tech-sono-2': {
    title: 'Matériel de sonorisation',
    subtitle: 'Équipement professionnel',
    category: 'Sonorisation',
    description: "Découvrez notre parc matériel de sonorisation professionnelle. Enceintes RCF, LD Systems, Bose, HK Audio, tables de mixage et microphones Shure.",
    images: [
      'assets/images/page-son-et-lumiere/sono-2.webp',
    ],
    location: 'France',
    date: '2025'
  },

  'tech-sono-3': {
    title: 'Installation sono événement',
    subtitle: 'Mise en place complète',
    category: 'Sonorisation',
    description: "Montage et installation de la sonorisation pour vos événements. Notre équipe technique s'occupe de tout, du câblage au réglage final.",
    images: [
      'assets/images/page-son-et-lumiere/sono-3.webp',
    ],
    location: 'France',
    date: '2025'
  },

  'tech-light-1': {
    title: 'Éclairage ambiance',
    subtitle: 'Scénographie lumineuse',
    category: 'Éclairage',
    description: "Création d'ambiances lumineuses sur mesure. Architecture lumineuse, projecteurs LED, lyres et lasers pour transformer vos espaces.",
    images: [
      'assets/images/page-son-et-lumiere/lumiere-1.webp',
    ],
    location: 'France',
    date: '2025'
  },

  'tech-light-2': {
    title: 'Projecteurs LED',
    subtitle: 'Éclairage événementiel',
    category: 'Éclairage',
    description: "Projecteurs LED dernière génération pour un éclairage puissant et économe en énergie. Couleurs personnalisables selon votre identité visuelle.",
    images: [
      'assets/images/page-son-et-lumiere/lumiere-2.webp',
    ],
    location: 'France',
    date: '2025'
  },

  'tech-light-3': {
    title: 'Mise en lumière scène',
    subtitle: 'Installation technique',
    category: 'Éclairage',
    description: "Mise en lumière de scène professionnelle. Éclairage de face, contre-jour et effets spéciaux pour sublimer vos artistes et intervenants.",
    images: [
      'assets/images/page-son-et-lumiere/lumiere-3.webp',
    ],
    location: 'France',
    date: '2025'
  },

  'tech-light-4': {
    title: 'Prestation lumière',
    subtitle: 'Événement complet',
    category: 'Éclairage',
    description: "Prestation lumière complète pour votre événement. De la conception à l'installation, notre équipe crée l'ambiance parfaite.",
    images: [
      'assets/images/page-son-et-lumiere/lumiere-4.webp',
    ],
    location: 'France',
    date: '2025'
  },
};

// Make available globally
window.eventsData = eventsData;
