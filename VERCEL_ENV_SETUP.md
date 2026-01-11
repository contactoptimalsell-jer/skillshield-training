# 🔧 Configuration Variables d'Environnement Vercel

## ⚠️ IMPORTANT : Nom de la Variable

Ce projet utilise **Vite**, pas Next.js. Les variables d'environnement doivent commencer par **`VITE_`** et non `NEXT_PUBLIC_`.

## ✅ Variables à Configurer dans Vercel

### 1. Clerk (OBLIGATOIRE)

**Nom de la variable :** `VITE_CLERK_PUBLISHABLE_KEY`

**Valeur :** `pk_test_c3dlZXQtcmhpbm8tNC5jbGVyay5hY2NvdW50cy5kZXYk`

**Comment configurer :**
1. Allez dans Vercel Dashboard → Votre projet → Settings → Environment Variables
2. Cliquez sur "Add New"
3. **Nom :** `VITE_CLERK_PUBLISHABLE_KEY`
4. **Valeur :** `pk_test_c3dlZXQtcmhpbm8tNC5jbGVyay5hY2NvdW50cy5kZXYk`
5. Sélectionnez les environnements : Production, Preview, Development
6. Cliquez sur "Save"
7. **Redéployez** l'application

### 2. Supabase (OBLIGATOIRE pour la progression)

**Nom de la variable :** `VITE_SUPABASE_URL`

**Valeur :** Votre URL Supabase (ex: `https://jkdsepbnigcztrfcwkpj.supabase.co`)

**Nom de la variable :** `VITE_SUPABASE_ANON_KEY`

**Valeur :** Votre clé anonyme Supabase

### 3. Variables Backend (pour les API routes)

Ces variables sont utilisées par les serverless functions Vercel (dans `/api`).

**Nom :** `SUPABASE_URL` (sans VITE_)
**Nom :** `SUPABASE_ANON_KEY` (sans VITE_)

## 🔍 Vérification

Après configuration, vérifiez que :

1. Les variables sont bien nommées avec `VITE_` pour le frontend
2. Les variables backend (sans `VITE_`) sont aussi configurées
3. Tous les environnements sont sélectionnés
4. L'application a été redéployée

## 🐛 Erreur "Missing publishableKey"

Si vous voyez cette erreur :

```
@clerk/clerk-react: Missing publishableKey
```

**Causes possibles :**
1. ❌ Variable nommée `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` au lieu de `VITE_CLERK_PUBLISHABLE_KEY`
2. ❌ Variable non configurée dans Vercel
3. ❌ Application non redéployée après ajout de la variable

**Solution :**
1. Vérifiez le nom exact : `VITE_CLERK_PUBLISHABLE_KEY`
2. Ajoutez la variable dans Vercel
3. Redéployez manuellement ou attendez le prochain push

## 📋 Checklist Rapide

- [ ] Variable `VITE_CLERK_PUBLISHABLE_KEY` configurée dans Vercel
- [ ] Variable `VITE_SUPABASE_URL` configurée dans Vercel
- [ ] Variable `VITE_SUPABASE_ANON_KEY` configurée dans Vercel
- [ ] Variable `SUPABASE_URL` configurée dans Vercel (pour API)
- [ ] Variable `SUPABASE_ANON_KEY` configurée dans Vercel (pour API)
- [ ] Application redéployée après configuration
- [ ] Erreur "Missing publishableKey" disparue
