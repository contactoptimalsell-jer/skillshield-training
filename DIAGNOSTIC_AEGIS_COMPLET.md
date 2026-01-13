# 🔍 Diagnostic Complet : API Aegis

## ✅ Vérifications à Faire

### 1. Vérifier les Logs Vercel de l'API Aegis

1. **Vercel Dashboard** → Votre projet
2. **Deployments** → Dernier déploiement
3. **Functions** → `/api/aegis`
4. **Logs**

Cherchez les erreurs récentes :
- `❌ Erreur Aegis:`
- `❌ Error creating Supabase client:`
- `❌ Error fetching user context:`
- `❌ Error in OpenAI API call:`

### 2. Tester l'API Directement

Ouvrez votre navigateur et testez avec cette URL (remplacez `USER_ID` par votre Clerk User ID) :

```
POST https://sst-one-chi.vercel.app/api/aegis
Content-Type: application/json

{
  "userId": "USER_ID",
  "message": "Bonjour, qui es-tu ?",
  "conversationHistory": []
}
```

Ou utilisez curl :
```bash
curl -X POST https://sst-one-chi.vercel.app/api/aegis \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "USER_ID",
    "message": "Bonjour, qui es-tu ?",
    "conversationHistory": []
  }'
```

### 3. Vérifier les Variables d'Environnement dans Vercel

Dans **Vercel Dashboard** → **Settings** → **Environment Variables**, vérifiez :

- ✅ `OPENAI_API_KEY` (commence par `sk-...`)
- ✅ `SUPABASE_URL` (sans `VITE_`)
- ✅ `SUPABASE_ANON_KEY` (sans `VITE_`)

Tous les environnements doivent être cochés (Production, Preview, Development).

### 4. Vérifier la Console du Navigateur

Ouvrez la console du navigateur (F12) et cherchez :
- Erreurs lors de l'appel à `/api/aegis`
- Messages d'erreur réseau
- Erreurs CORS

### 5. Vérifier que la Table `aegis_conversations` Existe (Optionnel)

Si vous voulez le logging des conversations :
1. **Supabase Dashboard** → **SQL Editor**
2. Exécutez `supabase-aegis-conversations-schema.sql`

## 🐛 Erreurs Courantes

### Erreur 500 : Server configuration error
- **Cause** : Variables d'environnement manquantes
- **Solution** : Vérifier `OPENAI_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY` dans Vercel

### Erreur 429 : Limite quotidienne atteinte
- **Cause** : L'utilisateur a dépassé 50 messages/jour
- **Solution** : Attendre 24h ou augmenter `RATE_LIMIT_PER_USER` dans le code

### Erreur : Utilisateur non authentifié
- **Cause** : `clerkUser.id` est null ou undefined
- **Solution** : Vérifier que l'utilisateur est bien connecté avec Clerk

### Erreur : Failed to fetch
- **Cause** : Problème réseau ou CORS
- **Solution** : Vérifier que l'API est bien déployée et accessible

## 📝 Partager les Informations

Pour diagnostiquer le problème, partagez :
1. Les logs Vercel de `/api/aegis` (les 20-30 dernières lignes)
2. Les erreurs de la console du navigateur
3. La réponse de l'API quand vous la testez directement
