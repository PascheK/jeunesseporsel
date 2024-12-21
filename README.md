# Site Web du Théâtre du Giron de Jeunesse

Bienvenue sur le dépôt du site web pour la  **Jeunesse de Porsel**. Ce site a pour objectif de fournir toutes les informations nécessaires aux visiteurs et participants : horaires, lieu, réservations, et plus encore !

---

## **Fonctionnalités du site**
- **Présentation de la pièce** : Synopsis et détails sur le spectacle.
- **Informations pratiques** : Accès, horaires, et réservations.
- **Section acteurs** : Présentation des participants et équipes techniques.
- **Contact** : Formulaire de contact et coordonnées.

---

## **Structure du projet**

### Arborescence
```
jeunesseporsel/
├── public/
│   └──assets/        # Images pour le site (backgrounds, galerie, etc.)
│      ├── icons/     # Icônes SVG (réseaux sociaux, flèches, etc.)
|      images/        # Images statiques (logo, bannières, etc.)
├── app/
│   └── (root)/       # Pages principales du site (index, infos, contact, etc.)
│   
├── components/       # Composants réutilisables (navbar, footer, etc.) 
│   
├── constants/        # Constantes et données statiques (horaires, tarifs, etc.)
│   
├── lib/              # Fonctions utilitaires et helpers.
│   
├── types/            # Interfaces et types TypeScript.
│           
├── .gitignore          # Fichiers et dossiers ignorés par Git.
├── package.json        # Dépendances et scripts du projet.
├── README.md           # Documentation (ce fichier).
└── tailwind.config.js  # Configuration de Tailwind CSS.
```

---

## **Technologies utilisées**
- **Frontend** : [Next.js](https://nextjs.org) pour la création de l'interface utilisateur dynamique.
- **Backend** : 
- **Styling** : [Tailwind CSS](https://tailwindcss.com/) ou CSS personnalisée.
- **Hébergement** : [Vercel](https://vercel.com/) pour le déploiement du site.

---

## **Installation locale**

### Prérequis
- **Node.js** (v16 ou plus récent)
- Un gestionnaire de paquets comme `npm` ou `yarn`

### Étapes d'installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/paschek/jeunesseporsel
   ```
2. Naviguez dans le dossier du projet :
   ```bash
   cd jeunesseporsel
   ```
3. Installez les dépendances pour le frontend :
   ```bash
   npm install
   ```
4. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```
5. Accédez au site sur [http://localhost:3000](http://localhost:3000).

---

## **Auteurs**
- **Pasche Killian** - Responsable principal.

---

## **Licence**
Ce projet est sous licence [MIT](LICENSE).