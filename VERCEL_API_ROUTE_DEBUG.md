# 🔍 Debug : Route API non reconnue

## ✅ Corrections appliquées

1. **Suppression du rewrite `/api/(.*)`** : Vercel détecte automatiquement les routes API
2. **Ajout de la config `functions`** : Configuration explicite du runtime Node.js pour les fichiers `.js` dans `api/`

## 📋 Configuration actuelle

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "functions": {
    "api/**/*.js": {
      "runtime": "nodejs20.x"
    }
  }
}
```

## 🧪 Tests à effectuer

### 1. Vérifier que le déploiement est terminé
- Attendre 1-2 minutes après le push
- Vérifier dans Vercel Dashboard que le déploiement est "Ready"

### 2. Tester une route API simple
Tester une route API qui fonctionne déjà :
```
https://sst-one-chi.vercel.app/api/arxiv-proxy?search_query=test
```

Si cette route fonctionne → Le problème est spécifique à `api/progression/[userId].js`
Si cette route ne fonctionne pas → Problème général avec les routes API

### 3. Tester la route progression
```
https://sst-one-chi.vercel.app/api/progression/test-user-123
```

**Attendu** : JSON (même si c'est une erreur)
**Si HTML** : Route non reconnue par Vercel

## 🔍 Vérifications dans Vercel Dashboard

1. **Deployments** → Dernier déploiement → **Functions**
2. Chercher `/api/progression/[userId]` dans la liste
3. Si la fonction n'apparaît pas → Problème de détection
4. Si la fonction apparaît → Regarder les logs d'erreur

## 🐛 Si ça ne fonctionne toujours pas

### Option A : Vérifier la structure du fichier
- Le fichier doit être dans `api/progression/[userId].js` (avec les crochets)
- Le fichier doit exporter `export default async function handler(req, res)`
- Le fichier doit utiliser ES modules (`import/export`)

### Option B : Vérifier les logs Vercel
- Dashboard → Deployments → Function Logs
- Chercher les erreurs lors du chargement de la fonction

### Option C : Test local avec Vercel CLI
```bash
npm install -g vercel
vercel dev
```
Tester `http://localhost:3000/api/progression/test-user-123`
