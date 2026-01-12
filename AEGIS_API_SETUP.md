# 🤖 Configuration API Aegis Chatbot

## ✅ Fichier Créé

Le fichier `api/aegis/index.js` a été créé avec l'intégration OpenAI GPT-4o Mini.

## 📋 Prérequis

### 1. Variable d'Environnement OpenAI

Ajoutez dans **Vercel Dashboard** → **Settings** → **Environment Variables** :

- `OPENAI_API_KEY` = Votre clé API OpenAI (commence par `sk-...`)

**Où la trouver :**
1. Allez sur https://platform.openai.com/api-keys
2. Créez une nouvelle clé API
3. Copiez-la

### 2. Variables Supabase Backend (déjà configurées normalement)

- `SUPABASE_URL` = `https://htqdjxsvuachcmhmymie.supabase.co`
- `SUPABASE_ANON_KEY` = Votre clé anon

## 🧪 Tester l'API

### Test avec curl :

```bash
curl -X POST https://sst-one-chi.vercel.app/api/aegis \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "test123",
    "message": "Bonjour, quel est mon risque IA ?",
    "conversationHistory": []
  }'
```

### Test depuis le Frontend :

```javascript
const response = await fetch('/api/aegis', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: clerkUser.id,
    message: userMessage,
    conversationHistory: messages.slice(-10) // 10 derniers messages
  })
})

const data = await response.json()
console.log(data.response) // Réponse d'Aegis
```

## 📊 Coût Estimé

- **GPT-4o Mini** : 0.15$/M tokens input, 0.60$/M tokens output
- **Conversation moyenne** (20 messages) : ~0.02€
- **100 conversations/jour** : ~2€/jour = 60€/mois

## 🔧 Intégration dans le Frontend

Pour intégrer cette API dans le composant `AegisChatbot.tsx`, modifiez la fonction `handleSendMessage` pour appeler cette API au lieu des réponses locales.

## 📝 Table de Logging (Optionnel)

Si vous voulez logger les conversations, créez la table `aegis_conversations` dans Supabase :

```sql
CREATE TABLE IF NOT EXISTS aegis_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  user_message TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_aegis_conversations_user_id ON aegis_conversations(user_id);
CREATE INDEX idx_aegis_conversations_created_at ON aegis_conversations(created_at DESC);
```

Puis décommentez la ligne `await logConversation(...)` dans le code.
