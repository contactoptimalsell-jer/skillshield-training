# 📋 Comment Consulter les Logs Vercel pour /api/progression

## 🔍 Étapes pour voir les logs détaillés

### 1. Allez dans Vercel Dashboard

1. Ouvrez https://vercel.com/dashboard
2. Sélectionnez votre projet **SkillShield**

### 2. Accédez aux logs

**Option A : Via Deployments**
1. Cliquez sur **Deployments** dans le menu
2. Cliquez sur le **dernier déploiement** (le plus récent en haut)
3. Cliquez sur l'onglet **Functions**
4. Cherchez `/api/progression` dans la liste
5. Cliquez dessus
6. Cliquez sur l'onglet **Logs**

**Option B : Via Runtime Logs**
1. Dans votre projet, allez dans l'onglet **Logs**
2. Filtrez par fonction : `/api/progression`
3. Ou cherchez les logs récents

### 3. Ce que vous devriez voir

Après avoir testé l'API (rechargez la page du dashboard), vous devriez voir dans les logs :

**Si les variables sont correctes :**
```
🚀 API handler called: GET /api/progression?userId=xxx
🔍 Creating Supabase client...
✅ Supabase client created
🔍 Querying user_progress for userId: xxx
```

**Si les variables sont manquantes :**
```
🚀 API handler called: GET /api/progression?userId=xxx
🔍 Creating Supabase client...
❌ Error creating Supabase client: Missing Supabase environment variables: SUPABASE_URL, SUPABASE_ANON_KEY
```

**Si l'URL est incorrecte :**
```
❌ Error creating Supabase client: Invalid SUPABASE_URL: must start with https://
```

**Si la connexion échoue :**
```
✅ Supabase client created
🔍 Querying user_progress for userId: xxx
❌ API Error: TypeError: fetch failed
```

### 4. Copiez-collez les logs

Copiez tous les logs qui apparaissent pour `/api/progression` et partagez-les avec moi.

## 🧪 Test rapide

Pour déclencher des logs, rechargez simplement la page du dashboard. L'API sera appelée automatiquement.
