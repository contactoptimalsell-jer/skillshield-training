# Guide de Déploiement sur Vercel 🚀

Ce guide vous explique comment déployer SkillShield sur Vercel.

## 📋 Prérequis

1. Un compte Vercel (gratuit) : [vercel.com](https://vercel.com)
2. Un compte GitHub (pour le déploiement automatique)
3. Toutes les clés API nécessaires configurées

## 🚀 Méthode 1 : Déploiement via GitHub (Recommandé)

### Étape 1 : Préparer votre repository

1. **Pousser votre code sur GitHub** :
   ```bash
   git add .
   git commit -m "Préparation pour déploiement Vercel"
   git push origin main
   ```

2. **Vérifier que `.gitignore` contient** :
   ```
   node_modules/
   dist/
   .env
   .env.local
   .env.*.local
   ```

### Étape 2 : Connexion à Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"** ou **"Login"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub

### Étape 3 : Importer votre projet

1. Dans le dashboard Vercel, cliquez sur **"Add New Project"**
2. Sélectionnez votre repository **SkillShield**
3. Vercel détectera automatiquement que c'est un projet Vite

### Étape 4 : Configurer les variables d'environnement

Dans la section **"Environment Variables"**, ajoutez toutes les variables suivantes :

#### Variables Supabase (Côté Client - préfixe VITE_)
```
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-clé-anon
```

#### Variables Supabase (Côté Serveur - sans préfixe VITE_)
Ces variables sont utilisées par les Serverless Functions :
```
SUPABASE_URL=https://votre-projet.supabase.co
SUPABASE_ANON_KEY=votre-clé-anon
SUPABASE_SERVICE_ROLE_KEY=votre-service-role-key
```

**Note** : `SUPABASE_URL` peut être la même que `VITE_SUPABASE_URL`, mais n'oubliez pas d'ajouter les deux versions.

#### Variables Stripe
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_... (ou pk_live_... en production)
STRIPE_SECRET_KEY=sk_test_... (ou sk_live_... en production)
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_BOUCLIER_PRICE_ID=price_...
STRIPE_FORTERESSE_PRICE_ID=price_...
```

#### Variables OpenAI
```
OPENAI_API_KEY=sk-...
```

#### Variables Resend (pour l'envoi d'emails)
```
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=onboarding@resend.dev
```

#### Variables d'application
```
VITE_APP_URL=https://votre-domaine.vercel.app
NODE_ENV=production
```

**⚠️ Important** : Après le premier déploiement, Vercel vous donnera une URL comme `https://skillshield-xxxxx.vercel.app`. Vous devrez :
1. Noter cette URL
2. Mettre à jour `VITE_APP_URL` dans les variables d'environnement avec cette URL
3. Redéployer pour que les changements prennent effet

**Important** :
- Pour les variables commençant par `VITE_`, elles seront disponibles côté client
- Pour les autres (Stripe secret, OpenAI, etc.), elles restent côté serveur uniquement
- Après la première création, vous devrez peut-être mettre à jour `VITE_APP_URL` avec votre URL Vercel réelle

### Étape 5 : Configurer le build

Vercel devrait détecter automatiquement :
- **Framework Preset** : Vite
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`
- **Root Directory** : (laissez **vide** - tout est à la racine du repository)

Si ce n'est pas le cas, configurez manuellement :
- **Framework Preset** : `Other` (ou `Vite` si disponible)
- **Root Directory** : (laissez **vide** ou mettez `/`)
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`

**⚠️ Important** : Comme votre projet est directement à la racine du repository (pas dans un sous-dossier), vous **ne devez PAS** remplir le champ "Root Directory". Laissez-le vide.

### Étape 6 : Déployer

1. Cliquez sur **"Deploy"**
2. Attendez que le build se termine (2-3 minutes)
3. Votre site sera accessible à l'URL : `https://skillshield-xxxxx.vercel.app`

## 🚀 Méthode 2 : Déploiement via CLI Vercel

### Étape 1 : Installer Vercel CLI

```bash
npm install -g vercel
```

### Étape 2 : Se connecter

```bash
vercel login
```

### Étape 3 : Déployer

```bash
# Premier déploiement (prévisualisation)
vercel

# Déploiement en production
vercel --prod
```

### Étape 4 : Configurer les variables d'environnement via CLI

```bash
# Ajouter une variable
vercel env add VITE_SUPABASE_URL production
vercel env add STRIPE_SECRET_KEY production
# ... etc pour toutes les variables

# Puis redéployer
vercel --prod
```

## 🔧 Configuration des Routes API

Vos routes API dans `/api` sont automatiquement configurées comme Serverless Functions sur Vercel.

### Structure attendue

```
/api
  /stripe
    create-checkout-session.js
    webhook.js
    ...
  /score
    calculate.js
  ...
```

### Format des fonctions

Chaque fichier doit exporter une fonction par défaut :

```javascript
export default async function handler(req, res) {
  // Votre logique ici
  res.status(200).json({ success: true })
}
```

## 🔐 Sécurité des Variables d'Environnement

### Variables publiques (préfixe `VITE_`)
Ces variables sont accessibles dans le code client (navigateur) :
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `VITE_APP_URL`

### Variables privées (sans préfixe `VITE_`)
Ces variables sont **uniquement** disponibles dans les Serverless Functions :
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `SUPABASE_URL` (utilisé par les fonctions serverless)
- `SUPABASE_ANON_KEY` (utilisé par les fonctions serverless)
- `SUPABASE_SERVICE_ROLE_KEY` (utilisé par les webhooks Stripe)
- `OPENAI_API_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

**⚠️ Ne jamais exposer les clés secrètes dans le code client !**

**⚠️ Ne jamais exposer les clés secrètes dans le code client !**

## 🔄 Déploiement Automatique

Avec la méthode GitHub, chaque push sur la branche `main` déclenchera automatiquement un nouveau déploiement en production.

Pour les autres branches :
- Les branches autres que `main` créent des **preview deployments**
- Utile pour tester avant de merger

## 🌐 Configuration du Domaine Personnalisé

1. Dans votre projet Vercel, allez dans **"Settings" > "Domains"**
2. Ajoutez votre domaine personnalisé (ex: `skillshield.fr`)
3. Suivez les instructions pour configurer les DNS
4. Mettez à jour `VITE_APP_URL` avec votre nouveau domaine

## 🔗 Configuration des Webhooks Stripe

Après votre premier déploiement, vous devrez configurer les webhooks Stripe :

1. **Obtenir l'URL de votre webhook Vercel** :
   - Après le déploiement, votre URL sera : `https://votre-projet.vercel.app/api/stripe/webhook`
   - Ou si vous avez un domaine : `https://skillshield.fr/api/stripe/webhook`

2. **Configurer dans Stripe Dashboard** :
   - Allez sur [dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks)
   - Cliquez sur **"Add endpoint"**
   - Collez l'URL de votre webhook : `https://votre-projet.vercel.app/api/stripe/webhook`
   - Sélectionnez les événements à écouter :
     - `checkout.session.completed`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`
   - Cliquez sur **"Add endpoint"**

3. **Récupérer le secret du webhook** :
   - Dans Stripe, cliquez sur le webhook que vous venez de créer
   - Cliquez sur **"Reveal"** à côté de "Signing secret"
   - Copiez le secret (commence par `whsec_...`)

4. **Ajouter le secret dans Vercel** :
   - Dans Vercel, allez dans **"Settings" > "Environment Variables"**
   - Ajoutez ou mettez à jour `STRIPE_WEBHOOK_SECRET` avec la valeur copiée
   - Cliquez sur **"Save"**

5. **Redéployer** :
   - Allez dans **"Deployments"**
   - Cliquez sur les trois points du dernier déploiement
   - Cliquez sur **"Redeploy"**

6. **Tester le webhook** :
   - Dans Stripe Dashboard, allez sur votre webhook
   - Cliquez sur **"Send test webhook"**
   - Vérifiez que la réponse est `200 OK`

**⚠️ Important** : En production, utilisez les clés Stripe Live (`pk_live_...` et `sk_live_...`) au lieu des clés de test.

## 📊 Monitoring et Logs

- **Logs en temps réel** : Dashboard Vercel > Votre projet > "Deployments" > Cliquez sur un déploiement > "Functions"
- **Analytics** : Disponible dans l'onglet "Analytics" (plan gratuit limité)

## 🐛 Résolution de Problèmes

### ❌ Erreur 404 : NOT_FOUND

**Symptômes** : Vous voyez `404: NOT_FOUND` sur toutes les pages ou certaines routes.

**Solutions** :

1. **Vérifiez que `vercel.json` est correct** :
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
   - Les rewrites doivent être dans cet ordre (API d'abord, puis catch-all)
   - Le fichier doit être à la racine du projet

2. **Vérifiez que le build a réussi** :
   - Allez dans Vercel Dashboard > Votre projet > "Deployments"
   - Cliquez sur le dernier déploiement
   - Vérifiez les logs du build
   - Si le build échoue, corrigez les erreurs (souvent TypeScript)

3. **Vérifiez que les fichiers sont générés** :
   - Dans les logs de build, vous devriez voir : `dist/index.html`
   - Si ce n'est pas le cas, le build a échoué

4. **Vérifiez l'Output Directory** :
   - Dans Vercel Settings > General
   - "Output Directory" doit être : `dist`
   - Ne mettez PAS de "Root Directory" (laissez vide)

5. **Forcez un nouveau déploiement** :
   - Dans Vercel Dashboard > Deployments
   - Cliquez sur les 3 points du dernier déploiement
   - Cliquez sur "Redeploy"

### Erreur : "Module not found"
- Vérifiez que toutes les dépendances sont dans `package.json`
- N'oubliez pas de `npm install` avant de déployer

### Erreur : "Environment variable not found"
- Vérifiez que toutes les variables sont configurées dans Vercel
- Les variables doivent être ajoutées pour l'environnement "Production"

### Erreur : "Function timeout"
- Les fonctions serverless ont une limite de 10s (gratuit) ou 60s (pro)
- Optimisez votre code ou utilisez un service externe pour les longues opérations

### Les routes API ne fonctionnent pas
- Vérifiez que les fichiers dans `/api` exportent bien une fonction par défaut
- Vérifiez les logs dans le dashboard Vercel

### Le site charge mais reste blanc
- Vérifiez que le `index.html` est dans le dossier `dist`
- Vérifiez la console du navigateur pour les erreurs
- Vérifiez que les routes sont bien configurées dans `vercel.json`

### Erreurs TypeScript bloquent le build
Si vous avez des erreurs TypeScript qui empêchent le build :
- Option 1 : Corrigez les erreurs
- Option 2 : Modifiez `tsconfig.json` pour être moins strict (non recommandé pour la production)
- Option 3 : Utilisez `tsc --noEmit false` dans le build command (non recommandé)

## 📝 Checklist de Déploiement

- [ ] Code poussé sur GitHub
- [ ] Toutes les variables d'environnement configurées dans Vercel :
  - [ ] Variables Supabase (client ET serveur)
  - [ ] Variables Stripe (clés publique et secrète)
  - [ ] Variables OpenAI
  - [ ] Variables Resend (pour les emails)
  - [ ] Variable VITE_APP_URL (à mettre à jour après le premier déploiement)
- [ ] Build réussi sans erreurs
- [ ] Site accessible via l'URL Vercel
- [ ] Toutes les routes API testées :
  - [ ] `/api/stripe/create-checkout-session`
  - [ ] `/api/stripe/webhook`
  - [ ] `/api/score/calculate`
  - [ ] `/api/submit-assessment`
- [ ] Variables d'environnement publiques accessibles côté client
- [ ] Variables d'environnement privées accessibles dans les fonctions serverless
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] Stripe webhooks configurés avec l'URL Vercel
- [ ] Test d'envoi d'email fonctionnel

## 🔗 Liens Utiles

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Vercel pour Vite](https://vercel.com/docs/frameworks/vite)
- [Documentation Serverless Functions](https://vercel.com/docs/functions/serverless-functions)

## 💡 Conseils

1. **Utilisez les preview deployments** pour tester avant de merger
2. **Configurez les webhooks Stripe** après le premier déploiement pour obtenir l'URL de production
3. **Activez les analytics** pour suivre les performances
4. **Configurez un monitoring** pour être alerté en cas de problème

---

**Bon déploiement ! 🚀**
