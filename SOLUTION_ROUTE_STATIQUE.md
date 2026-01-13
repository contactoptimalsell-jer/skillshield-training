# ✅ Solution : Route statique avec query parameter

## ❌ Problème identifié

Vercel ne reconnaît pas les routes dynamiques `[userId].js` dans des sous-dossiers comme `api/progression/[userId].js`.

Quand on teste `/api/progression/user_test123`, Vercel retourne la page d'accueil (type `document`) au lieu de JSON.

## ✅ Solution appliquée

Création d'une route statique `api/progression/index.js` qui utilise un query parameter :

- **Ancienne route** : `/api/progression/[userId]` (ne fonctionne pas)
- **Nouvelle route** : `/api/progression?userId=xxx` (fonctionne)

### Modifications

1. **Créé** `api/progression/index.js` avec la même logique que `[userId].js`
2. **Mis à jour** `src/services/progressionService.ts` pour utiliser le query parameter

### Test

Après déploiement, testez :
```
https://sst-one-chi.vercel.app/api/progression?userId=user_test123
```

Vous devriez voir du JSON au lieu de la page d'accueil.
