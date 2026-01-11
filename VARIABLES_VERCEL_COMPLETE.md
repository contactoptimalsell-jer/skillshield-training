# 🔑 Variables d'Environnement Vercel - Configuration Complète

## ⚠️ IMPORTANT : Vous devez avoir LES DEUX types de variables

Il faut **4 variables au total** dans Vercel :

### 📱 Variables FRONTEND (avec `VITE_`)
Ces variables sont utilisées par le code qui s'exécute dans le **navigateur** (frontend).

- ✅ `VITE_SUPABASE_URL`
- ✅ `VITE_SUPABASE_ANON_KEY`

### 🖥️ Variables BACKEND (SANS `VITE_`)
Ces variables sont utilisées par les **API serverless functions** (backend).

- ✅ `SUPABASE_URL`
- ✅ `SUPABASE_ANON_KEY`

## 📋 Configuration Complète dans Vercel

Dans **Vercel Dashboard** → **Settings** → **Environment Variables**, vous devez avoir :

| Nom de la Variable | Valeur | Scope |
|-------------------|--------|-------|
| `VITE_SUPABASE_URL` | `https://htqdjxsvuachcmhmymie.supabase.co` | Production, Preview, Development |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (votre clé) | Production, Preview, Development |
| `SUPABASE_URL` | `https://htqdjxsvuachcmhmymie.supabase.co` | Production, Preview, Development |
| `SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (votre clé) | Production, Preview, Development |

## 🔍 Pourquoi Deux Sets de Variables ?

### Variables `VITE_` (Frontend)
- Utilisées par : `src/lib/supabase.ts`, composants React, hooks
- Où : Code qui s'exécute dans le navigateur
- Exemple : Sauvegarde du profil utilisateur dans l'onboarding

### Variables sans `VITE_` (Backend)
- Utilisées par : `api/progression/index.js`, autres API routes
- Où : Code qui s'exécute sur le serveur Vercel
- Exemple : API `/api/progression` pour récupérer la progression

## ✅ Checklist

- [ ] `VITE_SUPABASE_URL` existe dans Vercel
- [ ] `VITE_SUPABASE_ANON_KEY` existe dans Vercel
- [ ] `SUPABASE_URL` existe dans Vercel (SANS `VITE_`)
- [ ] `SUPABASE_ANON_KEY` existe dans Vercel (SANS `VITE_`)
- [ ] Toutes les variables ont le bon projet ID (`htqdjxsvuachcmhmymie`)
- [ ] Toutes les variables sont cochées pour Production, Preview, Development
- [ ] J'ai redéployé après modification

## 🎯 Résumé

**Réponse courte** : **OUI, gardez les DEUX** ! Vous devez avoir 4 variables au total.

**Réponse longue** :
- Frontend utilise `VITE_*` → pour le code navigateur
- Backend utilise variables sans préfixe → pour les API serverless
- Les deux sont nécessaires pour que l'application fonctionne complètement
