[![React logo](https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif)](https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif)
## Installation
***

- récupération du projet sur Github par HTTPS :

```shell script
$ git clone https://github.com/tony-dugue/kakaze.git
```

- installer les packages :

```shell script
$ yarn install
```

## Démarrer l'application
***

Pour ouvrir le Metro Bundler dans le navigateur :
```shell script
$ yarn start
```

ou directement :
```shell script
$ expo start
```


Expo CLI lancera Metro Bundler, qui est un serveur HTTP qui compile le code JavaScript de notre application à l'aide de Babel et le sert à l'application Expo

Et accéder à l'adresse [http://localhost:19002](http://localhost:19002)

## Autres scripts disponibles

#### `yarn android` ou `expo start --android`
Créez l'application iOS (nécessite un ordinateur MacOS).

#### `yarn ios` ou `expo start --ios`
Créez l'application Android.

#### `yarn web` ou `expo start --web`
Exécutez l'application dans le navigateur.

#### `yarn eject` ou `expo start --eject`
Ejecter l'application.

Si vous n'êtes pas satisfait de l'outil de construction et des choix de configuration, vous pouvez l'éjecter à tout moment. 
Cette commande supprimera la dépendance de construction unique du 
projet.

Au lieu de cela, il copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) dans le projet en tant que dépendances dans package.json.

Remarque : il s'agit d'une opération à sens unique. Une fois que vous eject, vous ne pouvez pas revenir en arrière!


