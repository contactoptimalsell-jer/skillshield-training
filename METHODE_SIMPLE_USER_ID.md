# 🔍 Méthode Simple : Trouver votre User ID

## ✅ Méthode la plus simple : Onglet Network

1. **Ouvrez les DevTools** (F12)
2. **Onglet Network**
3. **Rechargez la page** du dashboard
4. **Filtrez** par "progression" dans la barre de recherche
5. **Cherchez** une requête vers `/api/progression/...`
6. **Cliquez** sur la requête
7. Dans **Headers** → **Request URL**, vous verrez :
   ```
   /api/progression/user_xxxxxxxxxxxxx
   ```
8. **Copiez** la partie après `/api/progression/` (l'ID utilisateur)

## 🧪 Ou testez directement avec un ID de test

Pour voir si l'API fonctionne, testez :
```
https://sst-one-chi.vercel.app/api/progression/user_test123
```

**Résultat attendu** :
- ✅ JSON (même avec erreur) → L'API fonctionne
- ❌ Page d'accueil → L'API n'est pas reconnue
