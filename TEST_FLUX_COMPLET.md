# 🧪 **Test du Flux Complet - SkillShield**

## 🎯 **Objectif**

Tester le flux complet : **Questionnaire → Calcul → Sauvegarde → Email → Résultats**

---

## 🚀 **Étape 1 : Démarrer les Serveurs**

### **Terminal 1 : Backend ES Modules**
```bash
cd backend
npm start
```

**Résultat attendu :**
```
✅ Backend SkillShield running on http://localhost:3001
```

### **Terminal 2 : Frontend Vite**
```bash
cd ..  # Retour à la racine
npm run dev
```

**Résultat attendu :**
```
VITE v7.1.9  ready in 1391 ms
➜  Local:   http://localhost:5173/
```

---

## 🔧 **Étape 2 : Configuration Supabase (OBLIGATOIRE)**

### **2.1 Accéder au Dashboard**
1. **Ouvrez** : https://supabase.com/dashboard
2. **Projet** : `jkdsepbnigcztrfcwkpj`
3. **SQL Editor** → **New query**

### **2.2 Exécuter le Script SQL**
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

-- Politique : Tout le monde peut insérer (formulaire public)
CREATE POLICY IF NOT EXISTS "Allow public insert" ON risk_assessments
  FOR INSERT
  WITH CHECK (true);

-- Politique : Lecture publique pour les résultats
CREATE POLICY IF NOT EXISTS "Allow public read by id" ON risk_assessments
  FOR SELECT
  USING (true);

-- Message de confirmation
SELECT 'Table risk_assessments créée avec succès!' as message;
```

### **2.3 Vérifier la Configuration**
```sql
-- Test d'insertion
INSERT INTO risk_assessments (
  email, first_name, score, risk_level, answers, breakdown
) VALUES (
  'test@example.com', 'Test User', 75, 'Élevé',
  '{"job": "Développeur"}'::jsonb,
  '{"automation": 25}'::jsonb
);

-- Vérifier l'insertion
SELECT * FROM risk_assessments WHERE email = 'test@example.com';
```

---

## 🧪 **Étape 3 : Test de l'API**

### **3.1 Test avec curl**
```bash
curl -X POST http://localhost:3001/api/submit-assessment \
  -H "Content-Type: application/json" \
  -d '{
    "email": "tonvraiemail@example.com",
    "firstName": "Test",
    "score": 88,
    "riskLevel": "Critique",
    "answers": {"job": "Développeur"},
    "breakdown": {"automation": 25}
  }'
```

### **3.2 Résultat Attendu (APRÈS configuration Supabase)**
```json
{
  "success": true,
  "assessmentId": "xxx-xxx-xxx",
  "emailSent": true,
  "messageId": "resend-message-id"
}
```

### **3.3 Résultat Actuel (AVANT configuration Supabase)**
```json
{
  "error": "Erreur de sauvegarde",
  "details": "new row violates row-level security policy for table \"risk_assessments\""
}
```

---

## 🌐 **Étape 4 : Test Frontend Complet**

### **4.1 Ouvrir l'Application**
1. **Ouvrez** : http://localhost:5173/calculator
2. **Remplissez** le questionnaire
3. **Cliquez** sur "Calculer mon score"
4. **Entrez** votre email dans le modal
5. **Cliquez** sur "Envoyer mon rapport gratuit"

### **4.2 Vérifications**
- ✅ **Redirection** vers `/results?id=xxx`
- ✅ **Email reçu** avec PDF en pièce jointe
- ✅ **Données sauvegardées** dans Supabase

---

## 📧 **Étape 5 : Vérification Email**

### **5.1 Contenu de l'Email**
- ✅ **Sujet** : `🛡️ [Prénom], votre rapport SkillShield est prêt`
- ✅ **Score** : Mis en évidence (ex: 88%)
- ✅ **Pièce jointe** : PDF avec le rapport
- ✅ **CTA** : Lien vers la liste d'attente

### **5.2 Vérifier les Spams**
- 📧 **Gmail** : Vérifiez le dossier spam
- 📧 **Autres** : Vérifiez les filtres anti-spam

---

## 🔍 **Étape 6 : Vérification Base de Données**

### **6.1 Vérifier les Données**
```sql
-- Voir les dernières évaluations
SELECT 
  id,
  email,
  first_name,
  score,
  risk_level,
  email_sent,
  created_at
FROM risk_assessments 
ORDER BY created_at DESC 
LIMIT 5;
```

### **6.2 Vérifier les Statistiques**
```sql
-- Statistiques globales
SELECT 
  COUNT(*) as total_assessments,
  AVG(score) as avg_score,
  COUNT(CASE WHEN email_sent = true THEN 1 END) as emails_sent
FROM risk_assessments;
```

---

## 🚨 **Résolution des Problèmes**

### **Problème : "new row violates row-level security policy"**

**Solution :**
```sql
-- Recréer les politiques
ALTER TABLE risk_assessments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public insert" ON risk_assessments;
CREATE POLICY "Allow public insert" ON risk_assessments
  FOR INSERT
  WITH CHECK (true);
```

### **Problème : "Could not find the table"**

**Solution :**
```sql
-- Vérifier l'existence de la table
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'risk_assessments';
```

### **Problème : Email non reçu**

**Vérifications :**
1. **Spam** : Vérifiez votre dossier spam
2. **Adresse** : Utilisez une vraie adresse email
3. **Logs** : Vérifiez les logs du backend
4. **Resend** : Vérifiez la clé API

---

## ✅ **Checklist de Test**

### **Configuration**
- [ ] **Backend** : Démarré sur port 3001
- [ ] **Frontend** : Démarré sur port 5173
- [ ] **Supabase** : Script SQL exécuté
- [ ] **Politiques RLS** : Configurées

### **Test API**
- [ ] **curl** : Répond avec `success: true`
- [ ] **Email** : Reçu avec PDF
- [ ] **Base de données** : Données sauvegardées

### **Test Frontend**
- [ ] **Questionnaire** : Rempli et calculé
- [ ] **Modal email** : Affiché et soumis
- [ ] **Redirection** : Vers `/results?id=xxx`
- [ ] **Page résultats** : Affichée correctement

---

## 🎯 **Script de Test Automatisé**

```bash
#!/bin/bash
echo "🧪 Test du flux complet SkillShield"

# Test 1: Backend accessible
if curl -s http://localhost:3001 > /dev/null; then
    echo "✅ Backend accessible"
else
    echo "❌ Backend non accessible"
    exit 1
fi

# Test 2: API submit-assessment
RESPONSE=$(curl -s -X POST http://localhost:3001/api/submit-assessment \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "Test",
    "score": 88,
    "riskLevel": "Critique",
    "answers": {"job": "Développeur"},
    "breakdown": {"automation": 25}
  }')

if echo "$RESPONSE" | grep -q "success"; then
    echo "✅ API fonctionne correctement"
    echo "Réponse: $RESPONSE"
elif echo "$RESPONSE" | grep -q "row-level security"; then
    echo "⚠️  Erreur RLS - Configurez Supabase"
    echo "Réponse: $RESPONSE"
else
    echo "❌ API ne répond pas correctement"
    echo "Réponse: $RESPONSE"
fi

echo "🎯 Test terminé !"
```

---

## 🎉 **Résumé**

**Votre système SkillShield est prêt pour le test complet !**

### **Statut Actuel :**
- ✅ **Backend ES modules** : Opérationnel
- ✅ **Frontend Vite** : Opérationnel
- ✅ **API REST** : Fonctionnelle
- ⚠️ **Supabase** : À configurer (5 minutes)
- ✅ **Système d'email** : Configuré

### **Prochaines Étapes :**
1. **Configurer Supabase** (script SQL)
2. **Tester l'API** avec curl
3. **Tester le frontend** complet
4. **Vérifier l'email** reçu

🚀 **Une fois Supabase configuré, votre système sera 100% opérationnel !**

