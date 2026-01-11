# 🗄️ Configuration de la Base de Données - Système de Progression

## ⚠️ Action Requise : Exécuter le Schéma SQL

Le fichier `supabase-progression-schema.sql` a été créé mais **n'a PAS encore été exécuté** dans votre base de données Supabase.

## 📋 Instructions étape par étape

### Étape 1 : Accéder à Supabase

1. Allez sur https://supabase.com/dashboard
2. Connectez-vous à votre compte
3. Sélectionnez votre projet SkillShield

### Étape 2 : Ouvrir le SQL Editor

1. Dans le menu de gauche, cliquez sur **"SQL Editor"**
2. Cliquez sur **"New Query"** (ou le bouton "+")

### Étape 3 : Copier le Schéma SQL

1. Ouvrez le fichier `supabase-progression-schema.sql` dans votre éditeur
2. Sélectionnez **TOUT** le contenu (Cmd+A / Ctrl+A)
3. Copiez-le (Cmd+C / Ctrl+C)

### Étape 4 : Exécuter le Script

1. Collez le contenu dans l'éditeur SQL de Supabase (Cmd+V / Ctrl+V)
2. Cliquez sur **"Run"** (ou appuyez sur Cmd+Enter / Ctrl+Enter)
3. Attendez que le script s'exécute (quelques secondes)

### Étape 5 : Vérifier la Création

Une fois exécuté, vous devriez voir un message de succès. Pour vérifier que tout est bien créé, exécutez cette requête :

```sql
-- Vérifier que la table existe
SELECT * FROM user_progress LIMIT 1;

-- Vérifier les index
SELECT indexname, indexdef 
FROM pg_indexes 
WHERE tablename = 'user_progress';

-- Vérifier les triggers
SELECT trigger_name, event_manipulation, event_object_table
FROM information_schema.triggers
WHERE event_object_table = 'user_progress';
```

## ✅ Résultat Attendu

Après exécution, vous devriez avoir :

- ✅ Table `user_progress` créée
- ✅ Index créés (3 index)
- ✅ Triggers créés (2 triggers)
- ✅ Fonctions créées (2 fonctions)
- ✅ Commentaires ajoutés

## ⚠️ Note sur les Politiques RLS

Le schéma SQL inclut des politiques RLS (Row Level Security) qui utilisent `auth.jwt()`. 

**Pour Clerk :** Ces politiques nécessitent une configuration supplémentaire car Clerk n'utilise pas l'auth Supabase par défaut.

### Option A : Désactiver RLS (Recommandé pour l'instant)

Si vous voulez désactiver RLS temporairement (la sécurité sera gérée côté API), exécutez :

```sql
ALTER TABLE user_progress DISABLE ROW LEVEL SECURITY;
```

### Option B : Garder RLS activé

Si vous gardez RLS activé, vous devrez :
1. Configurer Clerk pour intégrer Supabase Auth, OU
2. Gérer l'authentification via l'API backend uniquement (ce qui est déjà le cas)

**Recommandation :** Pour l'instant, désactivez RLS et laissez la sécurité être gérée par votre API backend (qui vérifie l'ID utilisateur Clerk).

## 🧪 Test Rapide

Après avoir exécuté le schéma, testez avec cette requête :

```sql
-- Insérer un test (remplacez user_xxx par un vrai ID Clerk)
INSERT INTO user_progress (clerk_user_id, completed_steps, current_level, total_points)
VALUES ('user_test_123', '[]'::jsonb, 1, 0)
ON CONFLICT (clerk_user_id) DO NOTHING;

-- Vérifier l'insertion
SELECT * FROM user_progress WHERE clerk_user_id = 'user_test_123';

-- Nettoyer le test
DELETE FROM user_progress WHERE clerk_user_id = 'user_test_123';
```

## 🐛 Dépannage

### Erreur : "relation user_progress does not exist"

**Cause :** Le schéma n'a pas été exécuté ou a échoué.

**Solution :** Vérifiez les erreurs dans le SQL Editor et réessayez.

### Erreur : "permission denied"

**Cause :** Vous n'avez pas les permissions nécessaires.

**Solution :** Utilisez un compte avec les permissions admin sur le projet Supabase.

### Erreur : "duplicate key value violates unique constraint"

**Cause :** La table existe déjà.

**Solution :** Vérifiez si la table existe avec :
```sql
SELECT * FROM information_schema.tables WHERE table_name = 'user_progress';
```

Si elle existe, vous pouvez soit la supprimer et recréer, soit vérifier qu'elle a la bonne structure.

## 📚 Fichier à Exécuter

Le fichier complet se trouve dans : `supabase-progression-schema.sql`

## ✅ Checklist

- [ ] Accédé au dashboard Supabase
- [ ] Ouvert le SQL Editor
- [ ] Copié le contenu de `supabase-progression-schema.sql`
- [ ] Exécuté le script
- [ ] Vérifié que la table existe
- [ ] (Optionnel) Désactivé RLS si nécessaire
- [ ] Testé avec une requête INSERT/SELECT

Une fois ces étapes complétées, le système de progression sera prêt à fonctionner ! 🚀
