# ⏱️ FitnessHub Tracker - TP12 : React `useEffect` & Nettoyage

Application React (Vite) dédiée à la maîtrise du hook `useEffect`, de son cycle de vie (montage, mise à jour, démontage) et de ses fonctions de nettoyage (*cleanups*).

## 📌 Fonctionnalités

1. **Chronomètre d'effort (HIIT) :**
   - Utilisation de `setInterval` synchronisé avec l'état actif.
   - Nettoyage automatique (`clearInterval`) à la mise en pause et au démontage du composant.
2. **Moniteur d'affichage de salle (Resize Listener) :**
   - Écoute en temps réel du redimensionnement de la fenêtre (`window.innerWidth`).
   - Détection automatique du mode (Smartphone Coach vs Écran Salle / Tablette).
   - Désinscription de l'écouteur global (`window.removeEventListener`) au démontage.
3. **Météo des clubs (Requêtes asynchrones) :**
   - Simulation de requêtes avec sélection de ville (Casablanca, Rabat, Marrakech).
   - Gestion de l'annulation de requêtes en vol avec `AbortController` pour éviter les *race conditions*.
4. **Contrôle du cycle de vie :**
   - Bouton de basculement pour monter/démonter le chronomètre et observer l'exécution des fonctions de retour du hook `useEffect`.

## 🛠️ Technologies

- **React 18**
- **Vite**
- **CSS3** (Design épuré en mode clair, responsive, sans dépendances superflues)

## 🚀 Installation et Lancement

```bash
# Cloner le dépôt
git clone https://github.com/salouaulk3/TP12-react-useeffect.git

# Accéder au dossier
cd TP12-react-useeffect

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

---
*Projet réalisé dans le cadre du TP12 sur les Hooks React.*
