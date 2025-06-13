# Oubly

Oubly est une application web permettant de centraliser la gestion des objets trouvés et perdus, facilitant la recherche, la déclaration et la restitution d'objets pour les particuliers et les établissements partenaires.
PS : La projet s'appelle Sight car le GIT a été crée avant que l'on change le nom du projet

## Fonctionnalités principales

- Recherche et filtrage d'objets trouvés par ville, catégorie, établissement, etc.
- Déclaration d'objets perdus via un formulaire.
- Visualisation des établissements partenaires sur une carte interactive.
- Gestion CRUD des objets (pour les administrateurs).
- Réservation et demande de restitution d'objet.

## Technologies utilisées

- **React** (v19) : Framework principal pour l'interface utilisateur.
- **Vite** : Outil de build et de développement rapide.
- **Supabase** : Backend as a Service (base de données, authentification).
- **Tailwind CSS** : Framework CSS utilitaire pour le style.
- **React Router** : Gestion de la navigation.
- **React Leaflet** & **Leaflet** : Affichage de la carte interactive.
- **ESLint** : Linting du code JavaScript/JSX.

## Lancer le projet en local

1. **Cloner le dépôt**  
   ```sh
   git clone <url-du-repo>
   cd sight
   ```

2. **Installer les dépendances**  
   ```sh
   npm install
   ```

3. **Configurer les variables d'environnement**  
   - Copier `.env.example` en `.env` et renseigner les valeurs :
     ```
     VITE_SUPABASE_URL=Your Supabase URL here
     VITE_SUPABASE_ANON_KEY=Your Supabase Anon Key here
     ```

4. **Démarrer le serveur de développement**  
   ```sh
   npm run dev
   ```
   L'application sera accessible sur [http://localhost:5173](http://localhost:5173) (ou le port indiqué par Vite).

## Arborescence du projet

```
.env
.env.example
.gitignore
eslint.config.js
index.html
package.json
README.md
vite.config.js
public/
  logo.png
src/
  App.css
  App.jsx
  index.css
  main.jsx
  assets/
    logo.png
    react.svg
  components/
    Footer.jsx
    Map.jsx
    Button/
    ItemManage/
      ItemCRUD.jsx
      ItemDetailModal.jsx
      ItemList.jsx
      SortableItemList.jsx
  layouts/
    GlobalLayout.jsx
  navigation/
    MainRouter.jsx
    Navbar.jsx
  pages/
    ContactPage.jsx
    HomePage.jsx
    ItemsPage.jsx
    LostItemForm.jsx
    MapPage.jsx
    ReservationPage.jsx
    RgpdPage.jsx
    SortableItemListPage.jsx
  utils/
    MapData.js
    supabase.js
```

## Scripts utiles

- `npm run dev` : Démarre le serveur de développement.
- `npm run build` : Génère la version de production.
- `npm run preview` : Prévisualise la version de production.
- `npm run lint` : Analyse le code avec ESLint.

---

Pour toute question, consulte la documentation ou contacte l'équipe projet.