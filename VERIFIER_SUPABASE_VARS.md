# 🔍 Vérifier les variables d'environnement Supabase

## ✅ Progrès
- ✅ La route API est maintenant reconnue (on reçoit du JSON)
- ❌ Erreur "fetch failed" - probablement problème avec Supabase

## 🧪 Vérifications à faire

L'erreur "fetch failed" suggère que Supabase ne peut pas se connecter. Cela peut être dû à :

1. **Variables d'environnement manquantes** dans Vercel
2. **Variables mal nommées** (avec ou sans préfixe `VITE_`)

### Variables nécessaires dans Vercel

Pour les **API routes** (backend), vous devez avoir :
- `SUPABASE_URL` (SANS préfixe `VITE_`)
- `SUPABASE_ANON_KEY` (SANS préfixe `VITE_`)

**Important** : Les variables d'environnement pour les API routes n'ont PAS le préfixe `VITE_`.

### Vérifier dans Vercel Dashboard

1. Allez sur https://vercel.com/dashboard
2. Sélectionnez votre projet
3. **Settings** → **Environment Variables**
4. Vérifiez que vous avez :
   - `SUPABASE_URL` (pour Production, Preview, Development)
   - `SUPABASE_ANON_KEY` (pour Production, Preview, Development)

**Attention** : Si vous avez seulement `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`, il faut aussi ajouter les versions SANS `VITE_` pour les API routes.

### Après avoir ajouté les variables

1. **Redéployez** le projet (les variables ne sont prises en compte qu'après un redéploiement)
2. Testez à nouveau : `https://sst-one-chi.vercel.app/api/progression?userId=user_test123`
