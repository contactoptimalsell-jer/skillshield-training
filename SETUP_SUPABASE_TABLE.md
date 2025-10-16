# 🗄️ Configuration de la Table Supabase

## ⚠️ Action Requise

La table `risk_assessments` n'existe pas encore dans votre base de données Supabase. Voici comment la créer :

## 📋 Étapes à Suivre

### 1. **Accéder à Supabase**
- Allez sur [supabase.com](https://supabase.com)
- Connectez-vous à votre compte
- Sélectionnez votre projet : `jkdsepbnigcztrfcwkpj`

### 2. **Ouvrir le SQL Editor**
- Dans le menu de gauche, cliquez sur **"SQL Editor"**
- Cliquez sur **"New query"**

### 3. **Exécuter le Script SQL**
- Copiez tout le contenu du fichier `supabase-setup.sql`
- Collez-le dans l'éditeur SQL
- Cliquez sur **"Run"** (ou Ctrl+Enter)

### 4. **Vérifier la Création**
- Allez dans **"Table Editor"**
- Vous devriez voir la table `risk_assessments` dans la liste

## 🎯 Script SQL Complet

```sql
-- Créer la table risk_assessments
CREATE TABLE IF NOT EXISTS risk_assessments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Informations utilisateur
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  
  -- Score et résultats
  score INTEGER NOT NULL,
  risk_level TEXT NOT NULL,
  
  -- Réponses du questionnaire (JSON)
  answers JSONB NOT NULL,
  
  -- Décomposition du score (JSON)
  breakdown JSONB NOT NULL,
  
  -- Statut email
  email_sent BOOLEAN DEFAULT false,
  email_sent_at TIMESTAMP WITH TIME ZONE,
  resend_message_id TEXT,
  
  -- Métadonnées
  user_agent TEXT,
  ip_address TEXT
);

-- Index pour recherche rapide
CREATE INDEX IF NOT EXISTS idx_risk_assessments_email ON risk_assessments(email);
CREATE INDEX IF NOT EXISTS idx_risk_assessments_created_at ON risk_assessments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_risk_assessments_score ON risk_assessments(score);

-- RLS (Row Level Security)
ALTER TABLE risk_assessments ENABLE ROW LEVEL SECURITY;

-- Politiques de sécurité
CREATE POLICY IF NOT EXISTS "Allow public insert" ON risk_assessments
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow public read by id" ON risk_assessments
  FOR SELECT
  USING (true);
```

## ✅ Test de Validation

Une fois la table créée, testez avec cette commande :

```bash
curl -X POST http://localhost:3001/api/submit-assessment \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "firstName":"Test",
    "score":50,
    "riskLevel":"Modéré",
    "answers":{"firstName":"Test"},
    "breakdown":{"baseJob":20}
  }'
```

**Résultat attendu :**
```json
{
  "success": true,
  "assessmentId": "uuid-here",
  "emailSent": true,
  "messageId": "resend-message-id"
}
```

## 🚀 Une fois la table créée

Votre système sera **entièrement fonctionnel** :

1. ✅ **Frontend** : Calculatrice + Résultats
2. ✅ **API Backend** : Sauvegarde + Email
3. ✅ **Base de données** : Table Supabase
4. ✅ **Email** : PDF + HTML personnalisé

**Flux complet :** Questionnaire → Calcul → Sauvegarde Supabase → Email PDF → Page Résultats → CTA Conversion

---

## 🔧 Dépannage

### Erreur "Table does not exist"
- Vérifiez que le script SQL a bien été exécuté
- Rafraîchissez la page Supabase
- Vérifiez que vous êtes sur le bon projet

### Erreur "Permission denied"
- Vérifiez que les politiques RLS sont bien créées
- Vérifiez que la clé API est correcte

### Variables d'environnement
Assurez-vous que `.env.local` contient :
```env
VITE_SUPABASE_URL=https://jkdsepbnigcztrfcwkpj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
RESEND_API_KEY=re_E4Fj9Jkc_5qn9RY2v5cuAgUPd5aUXseUo
RESEND_FROM_EMAIL=onboarding@resend.dev
```

🎉 **Après ces étapes, votre système SkillShield sera opérationnel !**

