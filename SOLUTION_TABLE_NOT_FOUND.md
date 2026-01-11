# 🔧 Solution : Table 'user_profiles' Not Found

## ❌ Erreur

```
Could not find the table 'public.user_profiles' in the schema cache
```

## ✅ Solution en 3 Étapes

### Étape 1 : Vérifier que vous êtes dans le BON projet Supabase

**CRUCIAL** : Vérifiez que vous êtes dans le projet avec l'ID `htqdjxsvuachcmhmymie`

1. Allez sur https://supabase.com/dashboard
2. Vérifiez l'URL dans la barre d'adresse : elle doit contenir `htqdjxsvuachcmhmymie`
3. Si vous avez plusieurs projets, assurez-vous de sélectionner le BON projet

### Étape 2 : Vérifier que les Tables Existent

1. Dans Supabase Dashboard, allez dans **Table Editor** (menu de gauche)
2. Vous devriez voir :
   - ✅ `users`
   - ✅ `user_profiles`

**Si les tables n'apparaissent PAS :**

1. Allez dans **SQL Editor**
2. Copiez-collez le contenu de `supabase-users-schema-force.sql`
3. Cliquez sur **Run**
4. Vérifiez qu'il n'y a pas d'erreur
5. Retournez dans **Table Editor** pour confirmer

### Étape 3 : Tester que les Tables Existent Vraiment

1. Dans **SQL Editor**, exécutez le script `TEST_TABLES_EXIST.sql`
2. Vous devriez voir 3 tables listées : `users`, `user_profiles`, `user_progress`

Si vous ne voyez QUE `user_progress` mais pas `users` et `user_profiles`, alors les tables n'ont pas été créées correctement.

## 🔍 Vérifications Supplémentaires

### Vérifier les Variables d'Environnement Vercel

Assurez-vous que dans Vercel (Settings → Environment Variables) :

- `VITE_SUPABASE_URL` = `https://htqdjxsvuachcmhmymie.supabase.co`
- `VITE_SUPABASE_ANON_KEY` = Votre clé anon (commence par `eyJ...`)

**ET AUSSI :**

- `SUPABASE_URL` = `https://htqdjxsvuachcmhmymie.supabase.co`
- `SUPABASE_ANON_KEY` = Votre clé anon (commence par `eyJ...`)

### Redéployer Après Création des Tables

1. Après avoir créé les tables dans Supabase
2. **Redéployez** votre application sur Vercel (même si vous n'avez pas changé le code)
3. Cela permet de rafraîchir les connexions

## 📋 Checklist Complète

- [ ] Je suis dans le BON projet Supabase (ID: `htqdjxsvuachcmhmymie`)
- [ ] Les tables `users` et `user_profiles` apparaissent dans Table Editor
- [ ] Le script SQL a été exécuté sans erreur
- [ ] Les variables d'environnement Vercel pointent vers le bon projet
- [ ] J'ai redéployé l'application sur Vercel après création des tables
- [ ] J'ai testé avec `TEST_TABLES_EXIST.sql` et les tables apparaissent

## 🆘 Si Rien ne Fonctionne

Si après toutes ces étapes l'erreur persiste :

1. **Créez les tables manuellement** via Table Editor dans Supabase :
   - Cliquez sur "New Table"
   - Nom : `users`
   - Colonnes : id (TEXT, Primary Key), email (TEXT), current_plan (TEXT), etc.
   - Répétez pour `user_profiles`

2. **Ou contactez-moi** avec :
   - Les résultats de `TEST_TABLES_EXIST.sql`
   - Un screenshot de Table Editor
   - Les logs d'erreur complets
