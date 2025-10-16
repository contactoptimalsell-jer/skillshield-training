# 🚀 SkillShield Backend

Serveur Express pour l'application SkillShield - Plateforme d'évaluation du risque IA.

## 📋 Fonctionnalités

- ✅ **API d'évaluation** : Soumission et sauvegarde des questionnaires
- ✅ **Génération PDF** : Rapports personnalisés avec analyse détaillée
- ✅ **Envoi d'emails** : Via Resend avec PDF en pièce jointe
- ✅ **Base de données** : Intégration Supabase avec RLS
- ✅ **Rate limiting** : Protection contre les abus
- ✅ **Validation** : Vérification des données d'entrée

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur
npm start

# Mode développement (avec nodemon)
npm run dev
```

## 🔧 Configuration

Le serveur utilise les variables d'environnement du fichier `.env.local` à la racine du projet :

```env
# Supabase
VITE_SUPABASE_URL=https://jkdsepbnigcztrfcwkpj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Resend
RESEND_API_KEY=re_E4Fj9Jkc_5qn9RY2v5cuAgUPd5aUXseUo
RESEND_FROM_EMAIL=onboarding@resend.dev
```

## 📡 API Endpoints

### `POST /api/submit-assessment`

Soumission d'une évaluation complète avec sauvegarde et envoi d'email.

**Body :**
```json
{
  "email": "user@example.com",
  "firstName": "Jean",
  "score": 65,
  "riskLevel": "Élevé",
  "answers": { /* réponses du questionnaire */ },
  "breakdown": { /* décomposition du score */ }
}
```

**Response :**
```json
{
  "success": true,
  "assessmentId": "uuid-here",
  "emailSent": true,
  "messageId": "resend-message-id"
}
```

### `POST /api/send-report-with-pdf`

Envoi d'un rapport par email (version simplifiée).

### `GET /health`

Vérification de l'état du serveur.

## 🗄️ Base de Données

### Table `risk_assessments`

```sql
CREATE TABLE risk_assessments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  score INTEGER NOT NULL,
  risk_level TEXT NOT NULL,
  answers JSONB NOT NULL,
  breakdown JSONB NOT NULL,
  email_sent BOOLEAN DEFAULT false,
  email_sent_at TIMESTAMP WITH TIME ZONE,
  resend_message_id TEXT,
  user_agent TEXT,
  ip_address TEXT
);
```

## 📧 Système d'Email

### Génération PDF
- 6 pages de rapport détaillé
- Analyse personnalisée selon le score
- Recommandations adaptées
- Timeline d'impact IA

### Email HTML
- Design responsive et professionnel
- Messages personnalisés selon le score
- CTA vers la liste d'attente
- Pièce jointe PDF

## 🔒 Sécurité

- **Rate limiting** : 3 soumissions/heure par IP
- **Validation** : Vérification des données d'entrée
- **RLS** : Politiques de sécurité Supabase
- **CORS** : Configuration pour le frontend

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Variables d'environnement** : Configurer dans Vercel Dashboard
2. **Build command** : `npm install`
3. **Output directory** : `/`
4. **Install command** : `npm install`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

## 🧪 Tests

```bash
# Test de santé
curl http://localhost:3001/health

# Test d'évaluation
curl -X POST http://localhost:3001/api/submit-assessment \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","firstName":"Test","score":50,"riskLevel":"Modéré","answers":{},"breakdown":{}}'
```

## 📊 Monitoring

- **Logs** : Console avec timestamps
- **Métriques** : Nombre de soumissions, taux de réussite
- **Erreurs** : Capture et logging des erreurs

## 🔄 Intégration Frontend

Le frontend utilise ce backend via l'API client `src/api/sendReport.ts` qui détecte automatiquement l'environnement :

- **Développement** : `http://localhost:3001`
- **Production** : Vercel serverless functions

## 🎯 Prochaines Étapes

- [ ] Dashboard admin pour visualiser les évaluations
- [ ] Analytics avancées
- [ ] Webhooks pour intégrations tierces
- [ ] Cache Redis pour les performances
- [ ] Tests automatisés

---

**🚀 Backend SkillShield - Prêt pour la production !**

