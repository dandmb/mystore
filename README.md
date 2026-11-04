# MyStore — Frontend e-commerce (React)

Boutique en ligne de stickers : catalogue, panier, paiement en ligne et suivi des commandes, avec un espace client et un espace administrateur.

Ce dépôt contient le **frontend**. Il consomme une API REST **Spring Boot** (dépôt backend à venir).

> Projet réalisé dans le cadre de la formation *Become a Java Full Stack Developer with React & Spring Boot* (Udemy) — en cours.

## Fonctionnalités

- **Catalogue** : liste des produits, recherche, fiche produit détaillée
- **Panier** : ajout avec choix de la quantité, suppression d'articles, vidage du panier, contenu conservé entre les visites (localStorage), total calculé automatiquement
- **Paiement en ligne** avec **Stripe** (formulaire de paiement sécurisé), puis page de confirmation de commande
- **Compte client** : inscription, connexion, profil modifiable, historique des commandes
- **Routes protégées** : pages réservées aux utilisateurs connectés
- **Espace administrateur** : gestion des commandes et des messages reçus via le formulaire de contact
- **Pages** d'accueil, à propos, contact, et page d'erreur personnalisée
- **Notifications** utilisateur (succès, erreurs) et état de chargement pendant la navigation

## Stack technique

- **React 19** + **Vite**
- **React Router 7** — routage avec `loader` / `action` (chargement des données et soumission des formulaires au niveau des routes)
- **Context API** — état global de l'authentification et du panier
- **axios** — client HTTP centralisé (`src/api/apiClient.js`)
- **Tailwind CSS 4** — styles, avec thème clair / sombre
- **Stripe** (`@stripe/react-stripe-js`) — paiement
- **react-toastify**, **Font Awesome**, **ESLint**

## Sécurité côté client

- Authentification par **JWT** : le token est ajouté automatiquement à chaque requête (`Authorization: Bearer …`)
- Protection **CSRF** : pour les requêtes qui modifient des données, le client récupère le token `XSRF-TOKEN` et l'envoie dans l'en-tête `X-XSRF-TOKEN`
- Cookies envoyés avec les requêtes (`withCredentials`)

## Structure

```
src/
  api/          client HTTP (axios, intercepteurs JWT + CSRF)
  components/   pages et composants (catalogue, panier, paiement, profil, commandes…)
    admin/      espace administrateur (commandes, messages)
    footer/     pied de page
  store/        contextes React (authentification, panier)
  main.jsx      définition des routes (loaders / actions)
public/stickers images des produits
```

## Lancer le projet en local

Prérequis : Node.js et l'API backend Spring Boot démarrée.

```bash
npm install
# créer un fichier .env à la racine :
# VITE_API_BASE_URL=<URL de l'API backend>, par ex. http://localhost:8081/…
npm run dev
```

L'application est servie sur `http://localhost:5173`.

### Autres commandes

```bash
npm run build     # build de production
npm run preview   # prévisualiser le build
npm run lint      # ESLint
```

## Auteur

Dan Bizwa — [Portfolio](https://dan-bizwa.netlify.app/#dan-bizwa) · [GitHub](https://github.com/dandmb)
