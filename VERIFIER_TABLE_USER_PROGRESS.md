# ✅ Vérifier si la Table `user_progress` Existe dans Supabase

## 📋 Étapes Simples

### Étape 1 : Ouvrir Supabase Dashboard

1. Allez sur **https://supabase.com/dashboard**
2. **Connectez-vous** si nécessaire
3. Sélectionnez votre projet (celui avec l'ID `htqdjxsvuachcmhmymie`)

### Étape 2 : Aller dans Table Editor

1. Dans le **menu de gauche**, cherchez **"Table Editor"**
2. Cliquez sur **"Table Editor"**

### Étape 3 : Vérifier si la Table `user_progress` Apparaît

Dans la liste des tables à gauche, cherchez :

- ✅ **`user_progress`** - Si vous la voyez, la table existe !
- ✅ **`users`** - Devrait aussi exister
- ✅ **`user_profiles`** - Devrait aussi exister

### 📸 Que Devriez-Vous Voir ?

**Si la table existe :**
- Vous verrez `user_progress` dans la liste à gauche
- Quand vous cliquez dessus, vous verrez les colonnes : `id`, `clerk_user_id`, `completed_steps`, `current_level`, `total_points`, etc.

**Si la table N'EXISTE PAS :**
- Vous ne verrez pas `user_progress` dans la liste
- Dans ce cas, vous devez la créer (voir ci-dessous)

## ❌ Si la Table N'Existe Pas : La Créer

### Option 1 : Via SQL Editor (Recommandé)

1. Dans le menu de gauche, cliquez sur **"SQL Editor"**
2. Cliquez sur **"New Query"** (ou utilisez l'éditeur vide)
3. Ouvrez le fichier `supabase-progression-schema.sql` dans votre projet
4. **Copiez tout le contenu** du fichier
5. **Collez-le** dans l'éditeur SQL
6. Cliquez sur **"Run"** (ou appuyez sur `Ctrl+Enter` / `Cmd+Enter`)
7. Vous devriez voir un message de succès

### Option 2 : Via Table Editor (Manuel)

1. Dans **Table Editor**, cliquez sur **"New Table"**
2. Nom de la table : `user_progress`
3. Ajoutez les colonnes suivantes :
   - `id` : UUID, Primary Key, Default: `gen_random_uuid()`
   - `clerk_user_id` : TEXT, NOT NULL, Unique
   - `completed_steps` : JSONB, Default: `[]`
   - `current_level` : INTEGER, Default: `1`
   - `total_points` : INTEGER, Default: `0`
   - `last_activity_at` : TIMESTAMPTZ, Default: `NOW()`
   - `created_at` : TIMESTAMPTZ, Default: `NOW()`
   - `updated_at` : TIMESTAMPTZ, Default: `NOW()`
4. Cliquez sur **"Save"**

**⚠️ Note** : L'option 1 (SQL Editor) est plus simple et plus rapide car le script SQL crée aussi les index et triggers nécessaires.

## ✅ Après Création

1. Retournez dans **Table Editor**
2. Vous devriez maintenant voir `user_progress` dans la liste
3. Si vous la voyez, la table est créée ! ✅

## 🎯 Résumé

**Pour vérifier :**
- Table Editor → Cherchez `user_progress` dans la liste

**Si elle n'existe pas :**
- SQL Editor → Copiez-collez `supabase-progression-schema.sql` → Run
- OU Table Editor → New Table → Créez-la manuellement
