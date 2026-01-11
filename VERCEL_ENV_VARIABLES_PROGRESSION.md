# 🔧 Variables d'Environnement pour l'API Progression

## ⚠️ Problème : "Impossible de charger la progression"

Si vous voyez ce message, c'est probablement parce que les variables d'environnement Supabase ne sont pas correctement configurées dans Vercel pour les **API backend**.

## 📋 Variables Requises

Pour que l'API `/api/progression/[userId]` fonctionne, vous devez avoir **2 variables d'environnement** dans Vercel :

### Variables Backend (API Routes)

```env
SUPABASE_URL=https://jkdsepbnigcztrfcwkpj.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZHNlcGJuaWdjenRyZmN3a3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMTMxNDIsImV4cCI6MjA3NTc4OTE0Mn0.BNJgx8nRWnYo8XxGV0pMYbm3bo7MK1AQEDlqC6RxnF0
```

**Important :** Ces variables sont **SANS** le préfixe `VITE_` car elles sont utilisées par les API serverless functions.

### Variables Frontend (optionnel)

Si vous utilisez Supabase côté frontend aussi :

```env
VITE_SUPABASE_URL=https://jkdsepbnigcztrfcwkpj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZHNlcGJuaWdjenRyZmN3a3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMTMxNDIsImV4cCI6MjA3NTc4OTE0Mn0.BNJgx8nRWnYo8XxGV0pMYbm3bo7MK1AQEDlqC6RxnF0
```

## 🔍 Vérification dans Vercel

1. **Allez dans votre projet Vercel**
   - https://vercel.com/dashboard
   - Sélectionnez votre projet SkillShield

2. **Ouvrez les Settings**
   - Cliquez sur **"Settings"** dans le menu
   - Cliquez sur **"Environment Variables"** dans le sous-menu

3. **Vérifiez les variables**

   Vous devez avoir **AU MINIMUM** :
   - ✅ `SUPABASE_URL` (sans `VITE_`)
   - ✅ `SUPABASE_ANON_KEY` (sans `VITE_`)
   - ✅ `VITE_CLERK_PUBLISHABLE_KEY` (avec `VITE_`)

4. **Si les variables n'existent pas, ajoutez-les :**
   - Cliquez sur **"Add New"**
   - Nom : `SUPABASE_URL`
   - Valeur : `https://jkdsepbnigcztrfcwkpj.supabase.co`
   - Environnements : Cochez **Production**, **Preview**, et **Development**
   - Cliquez sur **"Save"**
   
   Répétez pour `SUPABASE_ANON_KEY` avec votre clé anonyme Supabase.

## 🔄 Après avoir ajouté/modifié les variables

**IMPORTANT :** Vous devez **redéployer** l'application après avoir ajouté ou modifié des variables d'environnement.

1. Allez dans l'onglet **"Deployments"**
2. Cliquez sur les **3 points** (⋯) du dernier déploiement
3. Sélectionnez **"Redeploy"**
4. Ou simplement poussez un nouveau commit sur GitHub

## ✅ Vérification que ça fonctionne

Après le redéploiement :

1. Connectez-vous à votre application
2. Ouvrez la console du navigateur (F12)
3. Vérifiez s'il y a des erreurs dans la console
4. La progression devrait maintenant se charger correctement

## 🐛 Si ça ne fonctionne toujours pas

Vérifiez les logs Vercel :

1. Allez dans **"Deployments"**
2. Cliquez sur le dernier déploiement
3. Allez dans l'onglet **"Functions"**
4. Cherchez `/api/progression/[userId]`
5. Cliquez dessus pour voir les logs
6. Vérifiez s'il y a des erreurs (par exemple "Missing environment variable")

## 📝 Résumé

- **API Backend** (serverless functions) : Variables **SANS** préfixe `VITE_`
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  
- **Frontend** (code client) : Variables **AVEC** préfixe `VITE_`
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
  - `VITE_CLERK_PUBLISHABLE_KEY`
