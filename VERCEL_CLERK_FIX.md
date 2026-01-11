# 🔧 Fix : Variables d'Environnement Clerk dans Vercel

## ⚠️ Problème

Erreur : `Missing Clerk Publishable Key` même si la variable est configurée dans Vercel.

## 🔍 Diagnostic

### 1. Vérifier dans Vercel Dashboard

1. Allez dans **Vercel Dashboard** → Votre projet → **Settings** → **Environment Variables**
2. Vérifiez que vous avez bien :
   - **Nom :** `VITE_CLERK_PUBLISHABLE_KEY` (avec `VITE_` au début)
   - **Valeur :** `pk_test_c3dlZXQtcmhpbm8tNC5jbGVyay5hY2NvdW50cy5kZXYk`
   - **Environnements :** Production, Preview, Development (tous cochés)

### 2. Problème Courant : Redéploiement Requis

**⚠️ IMPORTANT :** Après avoir ajouté/modifié une variable d'environnement dans Vercel, vous **DEVEZ** redéployer manuellement.

**Solution :**
1. Dans Vercel Dashboard → Votre projet → **Deployments**
2. Cliquez sur les **3 points** (⋯) du dernier déploiement
3. Cliquez sur **"Redeploy"**
4. Cochez **"Use existing Build Cache"** (optionnel)
5. Cliquez sur **"Redeploy"**

### 3. Vérifier le Build Log

Après redéploiement, vérifiez les logs de build :
1. Allez dans **Deployments** → Cliquez sur le dernier déploiement
2. Regardez les **Build Logs**
3. Cherchez les lignes avec `VITE_CLERK_PUBLISHABLE_KEY`
4. Vérifiez qu'elle n'est pas vide

## ✅ Solution Rapide

### Option 1 : Redéployer Manuellement (Recommandé)

1. Vercel Dashboard → Deployments
2. 3 points (⋯) → Redeploy
3. Attendre la fin du déploiement

### Option 2 : Push pour Déclencher un Nouveau Build

```bash
# Faire un petit changement pour déclencher un nouveau build
git commit --allow-empty -m "trigger: Redéploiement pour variables d'environnement"
git push origin main
```

### Option 3 : Vérifier le Nom Exact de la Variable

Dans Vercel, le nom doit être **EXACTEMENT** :
```
VITE_CLERK_PUBLISHABLE_KEY
```

**Pas :**
- ❌ `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- ❌ `CLERK_PUBLISHABLE_KEY`
- ❌ `VITE_CLERK_KEY`

## 🧪 Test Après Redéploiement

1. Ouvrez la console du navigateur (F12)
2. Regardez les logs au chargement
3. Vous devriez voir les variables disponibles si la clé est manquante
4. Si la clé est trouvée, l'erreur disparaît

## 📋 Checklist

- [ ] Variable `VITE_CLERK_PUBLISHABLE_KEY` existe dans Vercel
- [ ] Valeur correcte : `pk_test_c3dlZXQtcmhpbm8tNC5jbGVyay5hY2NvdW50cy5kZXYk`
- [ ] Tous les environnements sont sélectionnés (Production, Preview, Development)
- [ ] **Redéploiement manuel effectué** après ajout/modification
- [ ] Build logs montrent que la variable est disponible
- [ ] Erreur disparue dans la console navigateur

## 🐛 Si Ça Ne Marche Toujours Pas

1. **Vérifiez les Build Logs** dans Vercel
2. **Vérifiez la console navigateur** pour voir quelles variables sont disponibles
3. **Essayez de supprimer et recréer** la variable dans Vercel
4. **Vérifiez qu'il n'y a pas d'espaces** dans le nom ou la valeur

## 💡 Note Technique

Avec Vite, les variables d'environnement sont **injectées au build time**. Si vous ajoutez une variable après le build, elle ne sera pas disponible jusqu'au prochain build. C'est pourquoi un redéploiement est nécessaire.
