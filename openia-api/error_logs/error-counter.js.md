L'erreur "Unexpected token" sur la ligne 1 pourrait être liée à l'environnement dans lequel vous exécutez ce code. Le mot-clé `export` est utilisé pour exporter des modules en JavaScript, ce qui nécessite un environnement qui supporte les modules ES6. Si vous exécutez le code dans un navigateur sans module, ou dans un contexte qui ne prend pas en charge les modules, vous pourriez rencontrer cette erreur.

De plus, il y a une petite faute de frappe dans votre code dans la chaîne de formatage : vous avez écrit `cnter` au lieu de `counter`. Voici le code corrigé :

```javascript
export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}` // Correction de 'cnter' à 'counter'
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
```

### Conseils pour exécuter ce code :

1. **Modules ES6** :
    - Assurez-vous que votre fichier JavaScript est correctement chargé comme un module. Par exemple, dans votre fichier HTML, utilisez l'attribut `type="module"` :
    ```html
    <script type="module" src="your-script.js"></script>
    ```

2. **Vérifiez votre environnement** :
    - Si vous utilisez Node.js, vérifiez que vous utilisez une version qui supporte les modules ES6. Vous pouvez aussi ajouter `"type": "module"` dans votre fichier `package.json`.

3. **Transpilez si nécessaire** :
    - Si vous devez prendre en charge des environnements plus anciens qui ne supportent pas les modules ES6, envisagez d'utiliser un transpilateur comme Babel.

Assurez-vous également de tester le code en décrivant le bon contexte et la structure HTML où `setupCounter` sera appelé.