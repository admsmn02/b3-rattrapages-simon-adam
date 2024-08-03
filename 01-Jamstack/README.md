# Guide d'installation du projet Picard Jamstack (rattrapage 01)

## Pré-requis :

- Node.js (v.16 >)
- npm ou yarn

### Etape 1 : Cloner le repo

Dans votre CMD, écrivez cette commande :

```bash
git clone git@github.com:admsmn02/b3-rattrapages-simon-adam.git
```

Pour faciliter l'installation du projet, le backend utilisé a été déployé via Render :
https://b3-rattrapages-simon-adam.onrender.com/

Vous n'aurez donc qu'à configurer le frontend pour faire fonctionner le projet localement.

### Configuration du FrontEnd

Rendez-vous dans le dossier frontend avec cette commande :

```bash
cd b3-rattrapages-simon-adam/01-Jamstack/frontend/
```

#### Installer les dépendances :

Vous devez installer les dépendences nécessaires avec cette commande :

```bash
npm install
# ou
yarn install
```

#### Variables Environnementales :

Pour ajouter les variables nécessaires, créez un fichier .env.local à la racine du projet et mettez-y ceci :

```js
NEXT_PUBLIC_STRAPI_API_URL=https://b3-rattrapages-simon-adam.onrender.com/
```

#### Lancement du projet :

Vous n'avez plus qu'à lancer le projet avec cette commande :

```bash
npm run dev
# ou
yarn dev
```
