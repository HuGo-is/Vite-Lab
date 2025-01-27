L'erreur que vous rencontrez, "Unexpected token", est souvent liée à la manière dont le code JavaScript est interprété. Dans ce cas, l'importation de modules (avec `import`) pourrait ne pas être supportée dans votre environnement JavaScript actuel.

Voici quelques points à vérifier et des solutions potentielles :

1. **Support des Modules ES6** :
   - Assurez-vous que vous exécutez votre code dans un environnement qui prend en charge les modules ES6. Si vous exécutez le code dans un navigateur, assurez-vous que vous utilisez le type de script approprié. Par exemple, vous devez spécifier `type="module"` dans votre balise `<script>` dans le fichier HTML :
     ```html
     <script type="module" src="your-script.js"></script>
     ```

2. **Contexte d'exécution** :
   - Si vous exécutez ce code dans un environnement Node.js sans transpilation (e.g., Babel), assurez-vous que vous utilisez une version de Node.js qui prend en charge les modules ES. Sinon, envisagez d'utiliser `require` pour importer des modules.

3. **Fichier HTML et Structure** :
   - Vérifiez que votre fichier `index.html` inclut le script correctement, ainsi que le bon chemin vers les modules que vous importez.

4. **Transpilation avec Outils de Construction** :
   - Si vous utilisez des outils comme Vite, Webpack ou Babel, assurez-vous que votre configuration est correcte et que les fichiers sont bien traités pour votre environnement de déploiement.

Voici un exemple complet d'un fichier `index.html` pour l'exécution de votre code :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Application</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="app"></div>
    <script type="module" src="main.js"></script> <!-- Changez le nom de votre fichier JS ici -->
</body>
</html>
```

Assurez-vous que `style.css` et `counter.js` sont dans le même répertoire ou mettez à jour les chemins d'importation en conséquence.

Après avoir vérifié ces points, votre code devrait fonctionner sans l'erreur "Unexpected token". Si vous avez encore des problèmes, fournissez plus d'informations sur l'environnement dans lequel vous exécutez le code.