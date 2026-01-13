# 🔍 Comment trouver votre Clerk User ID

## Méthode 1 : Onglet Network (RECOMMANDÉ)

1. Ouvrez les DevTools (F12)
2. Allez dans l'onglet **Network**
3. Rechargez la page du dashboard
4. Cherchez une requête vers `/api/progression/`
5. Regardez l'URL complète - elle contient votre User ID :
   ```
   /api/progression/user_xxxxxxxxxxxxx
   ```

Copiez l'ID après `/api/progression/` (format : `user_xxxxx`)

## Méthode 2 : Console avec React DevTools

Si vous avez React DevTools installé :
1. Ouvrez les DevTools
2. Allez dans l'onglet **React** (si disponible)
3. Cherchez le composant qui utilise `useUser()`
4. Inspectez les props pour trouver `user.id`

## Méthode 3 : Tester avec un ID de test

Pour voir si l'API fonctionne, testez avec un ID de test :
```
https://sst-one-chi.vercel.app/api/progression/user_test123
```

Si vous voyez du JSON (même une erreur), l'API fonctionne.
Si vous voyez la page d'accueil, l'API n'est pas reconnue.

## Méthode 4 : Vérifier les logs de la console

Dans la console, cherchez les logs qui contiennent :
- "Error fetching user progression"
- L'URL complète de la requête avec l'ID utilisateur
