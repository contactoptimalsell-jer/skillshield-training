# 🔑 Mise à Jour des Clés Supabase

## ⚠️ IMPORTANT : Nouvelle Configuration Supabase

Vous avez fourni de nouvelles clés Supabase. Le Project ID a changé :

- **Ancien** : `jkdsepbnigcztrfcwkpj`
- **Nouveau** : `htqdjxsvuachcmhmymie`

## 📝 Clés à Mettre à Jour

### 1. **Variables d'Environnement Vercel**

Allez dans **Vercel Dashboard** → **Settings** → **Environment Variables** et mettez à jour :

#### `VITE_SUPABASE_URL`
```
https://htqdjxsvuachcmhmymie.supabase.co
```

#### `VITE_SUPABASE_ANON_KEY`
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0cWRqeHN2dWFjaGNtaG15bWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNzU1NDcsImV4cCI6MjA4MzY1MTU0N30._n3yH_DYp7stBQzykn5SVRIKO-iruipoCPVIyjVZnPI
```

#### `SUPABASE_URL` (pour les API backend)
```
https://htqdjxsvuachcmhmymie.supabase.co
```

#### `SUPABASE_ANON_KEY` (pour les API backend)
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0cWRqeHN2dWFjaGNtaG15bWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNzU1NDcsImV4cCI6MjA4MzY1MTU0N30._n3yH_DYp7stBQzykn5SVRIKO-iruipoCPVIyjVZnPI
```

### 2. **Fichier Local (Optionnel)**

Si vous avez un fichier `.env.local`, mettez à jour également :

```env
VITE_SUPABASE_URL=https://htqdjxsvuachcmhmymie.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0cWRqeHN2dWFjaGNtaG15bWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNzU1NDcsImV4cCI6MjA4MzY1MTU0N30._n3yH_DYp7stBQzykn5SVRIKO-iruipoCPVIyjVZnPI
```

## 🔍 Notes sur les Clés

- **ANON Key** : Clé publique, utilisée côté client (frontend)
- **Secret Key** : `sb_secret_U8_29EEq9D4Z2_XYpPnUww_vZoUMMkE` - À NE PAS utiliser côté client, uniquement pour les API backend si nécessaire
- **Publishable Key** : `sb_publishable_9gSK529G3e8ZlDECSe6VsA_jTuAxd88` - Format Supabase v2, peut-être pour une future migration

## ⚠️ Après Mise à Jour

1. **Redéployer** sur Vercel après modification des variables
2. **Vérifier** que les tables existent dans le nouveau projet Supabase :
   - `users`
   - `user_profiles`
   - `user_progress`
3. **Tester** l'onboarding pour vérifier que la sauvegarde fonctionne

## 🧪 Test

Après le redéploiement, testez :
- L'onboarding (sauvegarde du profil)
- Le chargement de la progression
- L'accès au dashboard
