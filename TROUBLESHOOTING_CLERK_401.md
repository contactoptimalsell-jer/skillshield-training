# 🔧 Dépannage : Erreur 401 Clerk "Unable to complete action"

## ⚠️ Problème

Erreur : **"Unable to complete action at this time. If the problem persists please contact support."**
Console : Erreurs **401 (Unauthorized)**

## 🔍 Diagnostic

Les erreurs **401** indiquent un problème d'authentification avec Clerk. Cela signifie que :
- Clerk ne peut pas authentifier la requête
- Les clés API ne sont pas valides
- La configuration est incorrecte

## ✅ Solutions

### Solution 1 : Vérifier les Variables d'Environnement dans Vercel

**⚠️ CRITIQUE :** Vérifiez que `VITE_CLERK_PUBLISHABLE_KEY` est bien configurée dans Vercel.

1. Allez dans **Vercel Dashboard** → Votre projet → **Settings** → **Environment Variables**
2. Vérifiez que vous avez :
   - **Nom :** `VITE_CLERK_PUBLISHABLE_KEY`
   - **Valeur :** `pk_test_c3dlZXQtcmhpbm8tNC5jbGVyay5hY2NvdW50cy5kZXYk`
   - **Environnements :** Production, Preview, Development (tous cochés)
3. Si la variable n'existe pas ou est incorrecte :
   - Cliquez sur **"Add New"**
   - Ajoutez `VITE_CLERK_PUBLISHABLE_KEY`
   - Collez votre clé (commence par `pk_test_` ou `pk_live_`)
   - Cochez tous les environnements
   - Cliquez sur **"Save"**
4. **Redéployez** l'application après modification

### Solution 2 : Vérifier la Clé dans Clerk Dashboard

1. Allez sur https://dashboard.clerk.com
2. Sélectionnez votre application
3. Allez dans **API Keys**
4. Vérifiez que votre **Publishable Key** est active
5. Si nécessaire, créez une nouvelle clé :
   - Cliquez sur **"Create Key"**
   - Sélectionnez **"Publishable"**
   - Copiez la nouvelle clé
   - Mettez à jour dans Vercel (Solution 1)

### Solution 3 : Vérifier que la Clé est Correcte

**Format d'une clé Clerk :**
- **Test :** `pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- **Production :** `pk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

**Vérifications :**
- ✅ Commence par `pk_test_` ou `pk_live_`
- ✅ Pas d'espaces avant/après
- ✅ Pas de caractères manquants
- ✅ Clé correspond à l'environnement (test vs production)

### Solution 4 : Vider le Cache et Redéployer

1. **Vercel Dashboard** → **Deployments**
2. Cliquez sur les **3 points** (⋯) du dernier déploiement
3. Cliquez sur **"Redeploy"**
4. Attendez la fin du déploiement (2-3 minutes)
5. **Videz le cache du navigateur** (Hard Refresh : `Ctrl + Shift + R` ou `Cmd + Shift + R`)

### Solution 5 : Vérifier l'URL de l'Application

L'erreur 401 peut aussi venir d'une URL incorrecte dans la configuration Clerk.

1. **Clerk Dashboard** → **Configure** → **Domains**
2. Vérifiez que votre domaine Vercel est dans la liste :
   - Exemple : `sst-6crqsaczu-optimal-sell.vercel.app`
3. Si le domaine n'est pas là, ajoutez-le :
   - Cliquez sur **"Add Domain"**
   - Ajoutez votre domaine Vercel
   - Cliquez sur **"Save"**

## 🐛 Vérifications Supplémentaires

### Vérifier les Logs Vercel

1. **Vercel Dashboard** → Votre projet → **Deployments**
2. Cliquez sur le dernier déploiement
3. Regardez les **Build Logs**
4. Cherchez des erreurs liées à `VITE_CLERK_PUBLISHABLE_KEY`
5. Vérifiez qu'il n'y a pas d'erreur "Missing" ou "undefined"

### Vérifier la Console Navigateur

1. Ouvrez les **DevTools** (F12)
2. Allez dans l'onglet **Console**
3. Cherchez des erreurs spécifiques à Clerk :
   - "Missing publishableKey"
   - "Invalid API key"
   - "Unauthorized"
4. Si vous voyez "Missing publishableKey" → Variable d'environnement manquante

### Tester en Local (Optionnel)

Pour vérifier si le problème vient de Vercel ou du code :

1. Créez un fichier `.env.local` à la racine :
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_c3dlZXQtcmhpbm8tNC5jbGVyay5hY2NvdW50cy5kZXYk
   ```
2. Lancez l'application :
   ```bash
   npm run dev
   ```
3. Testez la connexion
4. Si ça fonctionne en local → Problème de configuration Vercel
5. Si ça ne fonctionne pas → Problème de clé ou configuration Clerk

## 📋 Checklist de Diagnostic

- [ ] Variable `VITE_CLERK_PUBLISHABLE_KEY` existe dans Vercel
- [ ] Clé commence par `pk_test_` ou `pk_live_`
- [ ] Tous les environnements sont cochés (Production, Preview, Development)
- [ ] Application redéployée après modification
- [ ] Domaine Vercel ajouté dans Clerk Dashboard (Domains)
- [ ] Clé active dans Clerk Dashboard (API Keys)
- [ ] Pas d'erreur "Missing publishableKey" dans la console
- [ ] Cache du navigateur vidé (Hard Refresh)

## ✅ Action Immédiate Recommandée

1. **Vérifier Vercel Environment Variables** (Solution 1)
2. **Redéployer l'application** (Solution 4)
3. **Vider le cache du navigateur** (Hard Refresh)
4. **Réessayer la connexion**

## 📝 Note sur les Erreurs Cloudflare

Les erreurs Cloudflare dans la console (`challenges.cloudflare.com`) sont **non critiques** et ne bloquent pas l'authentification. Vous pouvez les ignorer (voir `CLOUDFLARE_ERROR_EXPLANATION.md`).

## 🆘 Si le Problème Persiste

1. Vérifiez les **logs Vercel** pour plus de détails
2. Vérifiez les **logs Clerk Dashboard** (s'il y a)
3. Contactez le support Clerk si nécessaire :
   - https://clerk.com/support
   - Fournissez votre domaine Vercel et les erreurs
