# 🔧 Instructions : Résoudre les erreurs CORS ArXiv

## ⚠️ Problème

Vous voyez toujours les erreurs CORS car le **navigateur utilise une version en cache** de l'application.

L'erreur montre encore :
```
http://export.arxiv.org/api/query
```

Au lieu de :
```
/api/arxiv-proxy
```

## ✅ Solution : Vider le cache du navigateur

Le code a été corrigé et poussé, mais votre navigateur utilise encore l'ancienne version en cache.

### Option 1 : Hard Refresh (Recommandé - Rapide)

**Chrome/Edge (Windows/Linux) :**
- `Ctrl + Shift + R` ou `Ctrl + F5`

**Chrome/Edge (Mac) :**
- `Cmd + Shift + R`

**Firefox (Tous systèmes) :**
- `Ctrl + Shift + R` (Windows/Linux)
- `Cmd + Shift + R` (Mac)

**Safari (Mac) :**
- `Cmd + Option + R`

### Option 2 : Vider le cache via les DevTools

1. Ouvrez les DevTools (F12)
2. Clic droit sur le bouton de rafraîchissement
3. Sélectionnez "Vider le cache et effectuer une actualisation forcée" (Empty Cache and Hard Reload)

### Option 3 : Navigation privée

1. Ouvrez une fenêtre de navigation privée (Incognito)
2. Testez l'application
3. Si ça fonctionne → c'est bien un problème de cache

### Option 4 : Attendre le redéploiement Vercel

Si vous venez de pousser le code :
1. Vérifiez dans Vercel Dashboard que le déploiement est terminé
2. Attendez 2-3 minutes
3. Faites un hard refresh

## 🎯 Vérification

Après avoir vidé le cache, vous devriez voir dans la console du navigateur :
- ✅ Plus d'erreurs `http://export.arxiv.org`
- ✅ Les requêtes vont maintenant vers `/api/arxiv-proxy`
- ✅ Les erreurs CORS disparaissent

Si vous voyez encore `http://export.arxiv.org`, c'est que le cache n'a pas été vidé correctement.

## 📝 Note Technique

Le code source a bien été corrigé. Le problème vient uniquement du cache du navigateur qui conserve l'ancienne version JavaScript compilée.
