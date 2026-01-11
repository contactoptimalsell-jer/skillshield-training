# ✅ Checklist : Résoudre Tous les Problèmes

## 📋 Problèmes à Résoudre

### 1. ✅ Onboarding : Table `user_profiles` manquante
- [x] Script SQL créé : `supabase-users-schema-force.sql`
- [ ] Tables créées dans Supabase (vérifier dans Table Editor)
- [ ] Onboarding fonctionne

### 2. ⚠️ Progression : Erreur 500 sur `/api/progression`
- [ ] Vérifier les logs Vercel pour l'erreur exacte
- [ ] Vérifier que la table `user_progress` existe dans Supabase
- [ ] Vérifier les variables backend dans Vercel (`SUPABASE_URL` et `SUPABASE_ANON_KEY` sans `VITE_`)
- [ ] Tester l'API directement : `https://sst-one-chi.vercel.app/api/progression?userId=test123`

## 🔍 Actions Immédiates

### Dans Supabase :
1. **Table Editor** → Vérifier que ces tables existent :
   - ✅ `users`
   - ✅ `user_profiles`
   - ✅ `user_progress`

2. Si une table manque :
   - **SQL Editor** → Exécuter le script correspondant :
     - `supabase-users-schema-force.sql` pour `users` et `user_profiles`
     - `supabase-progression-schema.sql` pour `user_progress`

### Dans Vercel :
1. **Settings** → **Environment Variables** → Vérifier :
   - `VITE_SUPABASE_URL` = `https://htqdjxsvuachcmhmymie.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = Clé anon (avec `VITE_`)
   - `SUPABASE_URL` = `https://htqdjxsvuachcmhmymie.supabase.co` (SANS `VITE_`)
   - `SUPABASE_ANON_KEY` = Clé anon (SANS `VITE_`)

2. **Deployments** → Dernier déploiement → **Functions** → `/api/progression` → **Logs**
   - Copier les erreurs récentes

### Test Direct :
1. Ouvrir : `https://sst-one-chi.vercel.app/api/progression?userId=test123`
2. Voir la réponse JSON

## 📝 Après Vérifications

Partagez avec moi :
1. Les logs Vercel de `/api/progression`
2. La réponse de l'URL de test
3. Les tables qui apparaissent dans Table Editor Supabase
