# 🗄️ Créer les Tables dans Supabase

## ❌ Erreur Actuelle

```
Could not find the table 'public.user_profiles' in the schema cache
```

Cette erreur signifie que la table `user_profiles` n'existe pas dans votre projet Supabase.

## ✅ Solution : Créer les Tables

### Étape 1 : Ouvrir le SQL Editor dans Supabase

1. Allez sur https://supabase.com/dashboard
2. Sélectionnez votre projet (celui avec l'ID `htqdjxsvuachcmhmymie`)
3. Cliquez sur **SQL Editor** dans le menu de gauche

### Étape 2 : Exécuter le Script SQL

1. Cliquez sur **New Query** (ou utilisez l'éditeur)
2. Copiez-collez le contenu du fichier `supabase-users-schema.sql`
3. Cliquez sur **Run** (ou appuyez sur `Ctrl+Enter` / `Cmd+Enter`)

### Étape 3 : Vérifier que les Tables sont Créées

1. Allez dans **Table Editor** (dans le menu de gauche)
2. Vous devriez voir les tables :
   - ✅ `users`
   - ✅ `user_profiles`

### Étape 4 : Vérifier aussi la Table `user_progress`

Assurez-vous que la table `user_progress` existe aussi (pour le système de progression). Si elle n'existe pas, exécutez aussi le script `supabase-progression-schema.sql`.

## 📋 Tables Requises

Votre projet Supabase doit avoir **3 tables principales** :

1. **`users`** : Informations de base des utilisateurs (Clerk ID, email, plan)
2. **`user_profiles`** : Détails du profil (métier, secteur, expérience, score IA)
3. **`user_profiles`** : Progression utilisateur (niveaux, points, étapes)

## ⚠️ Important

- Les tables sont créées avec **RLS désactivé** (sécurité gérée côté API)
- La table `user_profiles` a une **clé étrangère** vers `users` (ON DELETE CASCADE)
- Les triggers mettent à jour automatiquement `updated_at`

## 🧪 Après Création

1. Réessayez l'onboarding
2. L'erreur devrait disparaître
3. Vous devriez pouvoir accéder au dashboard après l'onboarding
