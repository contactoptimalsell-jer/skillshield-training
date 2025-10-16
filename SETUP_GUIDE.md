# 🚀 Guide de Configuration - SkillShield MVP

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn
- Compte Supabase (gratuit)
- Compte Stripe (gratuit)
- Compte OpenAI (avec crédit)

## 🔧 Configuration Étape par Étape

### 1. Configuration Supabase

#### Créer le projet Supabase
1. Allez sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet
3. Attendez que le projet soit prêt (2-3 minutes)

#### Configurer la base de données
1. Dans votre projet Supabase, allez dans **SQL Editor**
2. Copiez le contenu de `supabase-setup.sql` 
3. Exécutez le script SQL
4. Vérifiez que toutes les tables sont créées dans **Table Editor**

#### Récupérer les clés Supabase
1. Allez dans **Settings** → **API**
2. Copiez :
   - `Project URL` (ex: `https://xxx.supabase.co`)
   - `anon public` key (clé publique)

### 2. Configuration Stripe

#### Créer les produits Stripe
1. Allez sur [stripe.com](https://stripe.com)
2. Connectez-vous ou créez un compte
3. Passez en **mode test** (bouton en haut à droite)

#### Créer les produits d'abonnement
1. Allez dans **Products** → **Add product**
2. Créez le produit **Bouclier** :
   - Name: `SkillShield Bouclier`
   - Description: `Plan Bouclier - Protection complète`
   - Pricing model: `Standard pricing`
   - Price: `49.00 EUR`
   - Billing period: `Monthly`
   - Copiez le **Price ID** (ex: `price_xxx`)

3. Créez le produit **Forteresse** :
   - Name: `SkillShield Forteresse`
   - Description: `Plan Forteresse - Protection maximale`
   - Price: `99.00 EUR`
   - Billing period: `Monthly`
   - Copiez le **Price ID**

#### Configurer les webhooks
1. Allez dans **Developers** → **Webhooks**
2. Cliquez **Add endpoint**
3. URL: `https://votre-domaine.com/api/stripe/webhook`
4. Sélectionnez ces événements :
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copiez le **Webhook signing secret** (ex: `whsec_xxx`)

#### Récupérer les clés Stripe
1. Allez dans **Developers** → **API keys**
2. Copiez :
   - **Publishable key** (ex: `pk_test_xxx`)
   - **Secret key** (ex: `sk_test_xxx`)

### 3. Configuration OpenAI

#### Créer une clé API
1. Allez sur [platform.openai.com](https://platform.openai.com)
2. Créez un compte ou connectez-vous
3. Allez dans **API keys** → **Create new secret key**
4. Copiez la clé (ex: `sk-xxx`)
5. Ajoutez du crédit à votre compte (minimum 5$)

### 4. Configuration de l'application

#### Créer le fichier .env
1. Copiez `env.example` vers `.env`
2. Remplissez les valeurs :

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-anon-key

# Stripe Configuration  
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_votre-publishable-key
STRIPE_SECRET_KEY=sk_test_votre-secret-key
STRIPE_WEBHOOK_SECRET=whsec_votre-webhook-secret

# OpenAI Configuration
OPENAI_API_KEY=sk-votre-openai-key

# App Configuration
VITE_APP_URL=http://localhost:5173

# Stripe Price IDs
STRIPE_BOUCLIER_PRICE_ID=price_votre-bouclier-price-id
STRIPE_FORTERESSE_PRICE_ID=price_votre-forteresse-price-id
```

#### Installer les dépendances
```bash
npm install
```

#### Démarrer l'application
```bash
npm run dev
```

## 🚀 Déploiement sur Vercel

### 1. Préparer le déploiement
```bash
# Build de test
npm run build

# Vérifier que tout fonctionne
npm run preview
```

### 2. Déployer sur Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Importez votre repository SkillShield
4. Vercel détecte automatiquement que c'est un projet Vite

### 3. Configurer les variables d'environnement sur Vercel
1. Dans votre projet Vercel, allez dans **Settings** → **Environment Variables**
2. Ajoutez toutes les variables de votre `.env`
3. **Important** : Changez `VITE_APP_URL` vers votre domaine Vercel

### 4. Mettre à jour Stripe
1. Dans Stripe, mettez à jour l'URL du webhook vers :
   `https://votre-projet.vercel.app/api/stripe/webhook`
2. Testez le webhook avec l'événement `checkout.session.completed`

## 🧪 Tests de Fonctionnement

### 1. Test d'inscription
1. Allez sur `http://localhost:5173/signup`
2. Créez un compte test
3. Vérifiez que l'email de confirmation arrive
4. Confirmez le compte

### 2. Test d'onboarding
1. Connectez-vous avec votre compte test
2. Complétez l'onboarding (4 étapes)
3. Vérifiez que le profil est sauvegardé
4. Vérifiez que le score IA est calculé

### 3. Test de paiement Stripe
1. Allez sur `/sentinelle/plans`
2. Cliquez sur "Passer à Bouclier"
3. Utilisez une carte test Stripe : `4242 4242 4242 4242`
4. Vérifiez que l'abonnement est créé
5. Vérifiez que l'utilisateur est mis à jour en base

### 4. Test du webhook Stripe
1. Dans Stripe Dashboard, allez dans **Webhooks**
2. Testez l'événement `checkout.session.completed`
3. Vérifiez que le webhook répond avec succès

## 🔍 Vérifications Importantes

### Base de données Supabase
- ✅ Tables créées (users, user_profiles, alerts, etc.)
- ✅ RLS policies activées
- ✅ Triggers fonctionnels

### Authentification
- ✅ Inscription fonctionne
- ✅ Connexion fonctionne
- ✅ Déconnexion fonctionne
- ✅ Protection des routes privées

### Paiements Stripe
- ✅ Produits créés
- ✅ Webhook configuré
- ✅ Checkout fonctionne
- ✅ Webhook reçoit les événements

### OpenAI
- ✅ Clé API valide
- ✅ Crédit disponible
- ✅ Calcul de score fonctionne

## 🚨 Dépannage

### Erreur Supabase
```
Error: Missing Supabase environment variables
```
**Solution** : Vérifiez que `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` sont corrects

### Erreur Stripe
```
Error: Invalid API key
```
**Solution** : Vérifiez que `STRIPE_SECRET_KEY` est correct et en mode test

### Erreur OpenAI
```
Error: Invalid API key
```
**Solution** : Vérifiez que `OPENAI_API_KEY` est correct et a du crédit

### Webhook Stripe ne fonctionne pas
**Solutions** :
1. Vérifiez l'URL du webhook
2. Vérifiez que `STRIPE_WEBHOOK_SECRET` est correct
3. Testez avec Stripe CLI : `stripe listen --forward-to localhost:3000/api/stripe/webhook`

## 📊 Monitoring

### Logs Vercel
1. Allez dans votre projet Vercel
2. Onglet **Functions** pour voir les logs des API routes
3. Onglet **Analytics** pour les métriques

### Logs Supabase
1. Dans votre projet Supabase
2. **Logs** → **API** pour voir les requêtes
3. **Database** → **Logs** pour les requêtes SQL

### Logs Stripe
1. Dans Stripe Dashboard
2. **Developers** → **Logs** pour voir les événements
3. **Webhooks** pour voir l'historique des webhooks

## 🎯 Prochaines Étapes

Une fois que tout fonctionne :

1. **Mode Production Stripe** : Passez en mode live
2. **Domaine personnalisé** : Configurez votre domaine
3. **Email transactionnel** : Configurez Supabase Auth emails
4. **Analytics** : Ajoutez Google Analytics
5. **Monitoring** : Configurez Sentry pour les erreurs
6. **SEO** : Optimisez les meta tags

## 📞 Support

Si vous rencontrez des problèmes :

1. Vérifiez les logs dans Vercel/Supabase/Stripe
2. Testez chaque composant individuellement
3. Vérifiez que toutes les variables d'environnement sont correctes
4. Assurez-vous que tous les services sont en mode test pour commencer

---

**🎉 Félicitations !** Votre SaaS SkillShield est maintenant prêt à recevoir ses premiers utilisateurs !

