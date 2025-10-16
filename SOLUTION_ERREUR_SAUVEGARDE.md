# 🚨 **Solution : Erreur de Sauvegarde**

## ❌ **Problème Identifié**

Quand vous essayez d'envoyer le rapport par email, vous obtenez :
```
Erreur de sauvegarde
details: "new row violates row-level security policy for table 'risk_assessments'"
```

## 🔍 **Cause du Problème**

Cette erreur indique que les **politiques RLS (Row Level Security)** de Supabase ne sont pas configurées. La table existe peut-être, mais les permissions pour insérer des données ne sont pas définies.

---

## ✅ **Solution en 5 Minutes**

### **Étape 1 : Accéder à Supabase**

1. **Ouvrez** : https://supabase.com/dashboard
2. **Connectez-vous** avec votre compte
3. **Sélectionnez** le projet : `jkdsepbnigcztrfcwkpj`

### **Étape 2 : Ouvrir le SQL Editor**

1. **Cliquez** sur "SQL Editor" dans le menu de gauche
2. **Cliquez** sur "New query"

### **Étape 3 : Exécuter le Script de Configuration**

**Copiez-collez** ce script dans l'éditeur :

```sql
-- Vérifier si la table existe
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'risk_assessments';

-- Créer la table si elle n'existe pas
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

-- Activer RLS
ALTER TABLE risk_assessments ENABLE ROW LEVEL SECURITY;

-- Supprimer les anciennes politiques si elles existent
DROP POLICY IF EXISTS "Allow public insert" ON risk_assessments;
DROP POLICY IF EXISTS "Allow public read by id" ON risk_assessments;

-- Créer les politiques RLS
CREATE POLICY "Allow public insert" ON risk_assessments
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public read by id" ON risk_assessments
  FOR SELECT
  USING (true);

-- Message de confirmation
SELECT 'Configuration terminée avec succès!' as message;
```

### **Étape 4 : Exécuter le Script**

1. **Cliquez** sur "Run" ou appuyez sur `Ctrl+Enter`
2. **Vérifiez** que vous voyez : `Configuration terminée avec succès!`

### **Étape 5 : Tester la Configuration**

**Exécutez** cette requête pour tester :

```sql
-- Test d'insertion
INSERT INTO risk_assessments (
  email, first_name, score, risk_level, answers, breakdown
) VALUES (
  'test@example.com', 'Test User', 75, 'Élevé',
  '{"job": "Développeur"}'::jsonb,
  '{"automation": 30}'::jsonb
);

-- Vérifier l'insertion
SELECT * FROM risk_assessments WHERE email = 'test@example.com';

-- Nettoyer le test
DELETE FROM risk_assessments WHERE email = 'test@example.com';
```

---

## 🧪 **Test de l'API Après Configuration**

Une fois le script exécuté, testez l'API :

```bash
curl -X POST http://localhost:3001/api/submit-assessment \
  -H "Content-Type: application/json" \
  -d '{
    "email": "votre@email.com",
    "firstName": "Test",
    "score": 75,
    "riskLevel": "Élevé",
    "answers": {"job": "Développeur"},
    "breakdown": {"automation": 30}
  }'
```

### **Résultat Attendu :**
```json
{
  "success": true,
  "assessmentId": "xxx-xxx-xxx",
  "emailSent": true,
  "messageId": "resend-message-id"
}
```

---

## 🚨 **Si le Problème Persiste**

### **Vérification 1 : Table Existe-t-elle ?**

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'risk_assessments';
```

### **Vérification 2 : Politiques RLS**

```sql
SELECT 
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies 
WHERE tablename = 'risk_assessments';
```

### **Vérification 3 : RLS Activé**

```sql
SELECT 
  table_name,
  row_security
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'risk_assessments';
```

### **Solution Alternative : Recréer les Politiques**

```sql
-- Désactiver temporairement RLS
ALTER TABLE risk_assessments DISABLE ROW LEVEL SECURITY;

-- Réactiver RLS
ALTER TABLE risk_assessments ENABLE ROW LEVEL SECURITY;

-- Recréer les politiques
CREATE POLICY "Allow public insert" ON risk_assessments
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public read by id" ON risk_assessments
  FOR SELECT
  USING (true);
```

---

## ✅ **Vérification Finale**

### **Test Complet :**

1. **Exécutez** le script SQL dans Supabase
2. **Testez** l'API avec curl
3. **Vérifiez** que vous recevez `"success": true`
4. **Vérifiez** votre email pour le rapport PDF

### **Script de Test Automatisé :**

```bash
./test-flux-complet.sh
```

---

## 🎉 **Résultat Final**

Une fois configuré, vous devriez voir :

- ✅ **API** : Répond avec `"success": true`
- ✅ **Email** : Reçu avec PDF en pièce jointe
- ✅ **Base de données** : Données sauvegardées
- ✅ **Redirection** : Vers la page de résultats

---

## 📚 **Documentation Complète**

- **`DEMARRAGE_RAPIDE.md`** - Configuration en 5 minutes
- **`SUPABASE_SETUP_FINAL.md`** - Guide détaillé Supabase
- **`TEST_FLUX_COMPLET.md`** - Test complet du système

🚀 **Une fois Supabase configuré, votre système sera 100% opérationnel !**

