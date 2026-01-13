# 🔧 Fix : Rewrite API avant catch-all

## ❌ Problème identifié

Le catch-all `/(.*)` dans `vercel.json` capturait **toutes** les requêtes, y compris `/api/*`, avant que Vercel ne puisse traiter les routes API.

## ✅ Solution

Ajouter le rewrite `/api/(.*)` **avant** le catch-all pour que les routes API soient traitées en premier :

```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Important** : L'ordre est crucial. Le rewrite API doit être en premier.

## 🧪 Après déploiement

1. Vérifier dans Vercel Dashboard → Functions que `/api/progression/[userId]` apparaît
2. Tester l'URL : `https://sst-one-chi.vercel.app/api/progression/test-user-123`
3. Vous devriez voir du JSON au lieu de la page d'accueil
