# Configuration des Variables d'Environnement

## Variables Requises pour SkillShield

### Clerk (Authentification) - OBLIGATOIRE

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Où trouver cette clé :**
1. Connectez-vous à votre dashboard Clerk (https://dashboard.clerk.com)
2. Sélectionnez votre application
3. Allez dans "API Keys"
4. Copiez la "Publishable key" (commence par `pk_test_` ou `pk_live_`)

**Important :**
- Cette clé est publique et peut être exposée côté client
- Utilisez `pk_test_` pour le développement
- Utilisez `pk_live_` pour la production

### Supabase (Base de données et données utilisateur) - Optionnel

Si vous utilisez Supabase pour stocker les profils utilisateurs :

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Note :** Clerk gère l'authentification, Supabase est utilisé uniquement pour les données utilisateur supplémentaires (profil, scores, etc.)

### Stripe (Paiements) - Optionnel

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Resend (Emails) - Optionnel

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=onboarding@resend.dev
```

## Configuration dans Vercel

1. Allez dans votre projet Vercel
2. Sélectionnez "Settings" > "Environment Variables"
3. Ajoutez la variable `VITE_CLERK_PUBLISHABLE_KEY` avec votre clé Clerk
4. Redéployez l'application

## Configuration Locale

Créez un fichier `.env.local` à la racine du projet :

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Note :** Le fichier `.env.local` est ignoré par git (déjà dans .gitignore)

## Vérification

Après avoir configuré les variables, vérifiez que tout fonctionne :

1. Lancez `npm run dev`
2. Ouvrez la console du navigateur
3. Si vous voyez un avertissement "Missing Clerk Publishable Key", vérifiez que la variable est bien définie

## Migration depuis Supabase Auth

Si vous migrez depuis Supabase Auth vers Clerk :

1. Les utilisateurs existants devront se réinscrire avec Clerk
2. Les données utilisateur dans Supabase peuvent être migrées en liant l'ID Clerk aux anciens IDs
3. Les routes protégées fonctionnent automatiquement avec Clerk
