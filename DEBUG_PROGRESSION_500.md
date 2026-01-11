# 🔍 Debug : Erreur 500 sur /api/progression

## ❌ Problème Actuel

L'API `/api/progression` retourne une erreur 500, ce qui signifie qu'il y a un problème côté serveur.

## 🔍 Étape 1 : Vérifier les Logs Vercel

1. Allez sur https://vercel.com/dashboard
2. Sélectionnez votre projet **SkillShield**
3. Allez dans **Deployments**
4. Cliquez sur le dernier déploiement
5. Allez dans l'onglet **Functions**
6. Cliquez sur `/api/progression`
7. Allez dans l'onglet **Logs**

**Cherchez les erreurs récentes** - vous devriez voir des messages comme :
- `❌ API Error:`
- `❌ Error creating Supabase client:`
- `❌ Error in getProgression:`

**Copiez-collez ces logs ici** pour que je puisse identifier le problème exact.

## 🔍 Étape 2 : Vérifier que la Table `user_progress` Existe

La table `user_progress` est nécessaire pour le système de progression.

1. Dans Supabase, allez dans **Table Editor**
2. Vérifiez que vous voyez la table `user_progress`
3. Si elle n'existe pas, exécutez le script `supabase-progression-schema.sql` dans le **SQL Editor**

## 🔍 Étape 3 : Vérifier les Variables d'Environnement Backend dans Vercel

L'API backend utilise des variables **SANS** le préfixe `VITE_` :

1. Dans Vercel, allez dans **Settings** → **Environment Variables**
2. Vérifiez que vous avez :
   - ✅ `SUPABASE_URL` = `https://htqdjxsvuachcmhmymie.supabase.co`
   - ✅ `SUPABASE_ANON_KEY` = Votre clé anon (commence par `eyJ...`)

**Important** : Ces variables doivent être **sans** le préfixe `VITE_` car elles sont utilisées par les API serverless functions (backend).

## 🔍 Étape 4 : Tester l'API Directement

1. Ouvrez cette URL dans votre navigateur :
   ```
   https://sst-one-chi.vercel.app/api/progression?userId=test123
   ```

2. Vous devriez voir :
   - ✅ Du JSON avec les données de progression (si ça marche)
   - ❌ Du JSON avec un message d'erreur (si ça ne marche pas)

**Copiez-collez la réponse** pour que je puisse voir le message d'erreur exact.

## 🎯 Causes Probables

1. **Table `user_progress` n'existe pas** dans Supabase
2. **Variables d'environnement backend manquantes** dans Vercel (`SUPABASE_URL` et `SUPABASE_ANON_KEY` sans `VITE_`)
3. **Variables d'environnement incorrectes** (mauvais projet ID ou clé)
4. **Problème de connexion** à Supabase depuis l'API

## ✅ Solution Rapide

1. Vérifiez les logs Vercel (Étape 1)
2. Vérifiez que `user_progress` existe (Étape 2)
3. Vérifiez les variables backend (Étape 3)
4. Testez l'API directement (Étape 4)
5. Partagez les résultats avec moi
