# 🔍 **Vérification Supabase - Diagnostic Complet**

## ❌ **Problème Persistant**

Malgré la configuration, l'erreur RLS persiste :
```
"new row violates row-level security policy for table 'risk_assessments'"
```

## 🔧 **Script de Diagnostic et Correction**

### **Étape 1 : Vérifier l'État Actuel**

Exécutez ces requêtes dans le **SQL Editor** de Supabase :

```sql
-- 1. Vérifier que la table existe
SELECT table_name, row_security
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'risk_assessments';

-- 2. Vérifier les politiques RLS actuelles
SELECT 
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies 
WHERE tablename = 'risk_assessments';

-- 3. Vérifier les permissions de la table
SELECT 
  grantee,
  privilege_type
FROM information_schema.table_privileges 
WHERE table_name = 'risk_assessments';
```

### **Étape 2 : Script de Correction Complet**

Si les politiques ne sont pas correctes, exécutez ce script de correction :

```sql
-- Désactiver temporairement RLS
ALTER TABLE risk_assessments DISABLE ROW LEVEL SECURITY;

-- Supprimer TOUTES les politiques existantes
DROP POLICY IF EXISTS "Allow public insert" ON risk_assessments;
DROP POLICY IF EXISTS "Allow public read by id" ON risk_assessments;
DROP POLICY IF EXISTS "Allow authenticated read" ON risk_assessments;

-- Réactiver RLS
ALTER TABLE risk_assessments ENABLE ROW LEVEL SECURITY;

-- Créer les politiques avec les bonnes permissions
CREATE POLICY "Allow public insert" ON risk_assessments
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public read by id" ON risk_assessments
  FOR SELECT
  TO public
  USING (true);

-- Donner les permissions explicites à public
GRANT INSERT, SELECT ON risk_assessments TO public;
GRANT USAGE ON SCHEMA public TO public;

-- Test d'insertion immédiat
INSERT INTO risk_assessments (
  email, first_name, score, risk_level, answers, breakdown
) VALUES (
  'test-diagnostic@example.com', 'Test Diagnostic', 75, 'Élevé',
  '{"job": "Développeur"}'::jsonb,
  '{"automation": 30}'::jsonb
);

-- Vérifier l'insertion
SELECT * FROM risk_assessments WHERE email = 'test-diagnostic@example.com';

-- Nettoyer le test
DELETE FROM risk_assessments WHERE email = 'test-diagnostic@example.com';

-- Message de confirmation
SELECT 'Diagnostic et correction terminés!' as message;
```

### **Étape 3 : Script de Test Final**

Après la correction, testez avec ce script :

```sql
-- Test complet de l'insertion
DO $$
DECLARE
    test_id UUID;
BEGIN
    -- Insertion de test
    INSERT INTO risk_assessments (
        email, first_name, score, risk_level, answers, breakdown
    ) VALUES (
        'test-final@example.com', 'Test Final', 88, 'Critique',
        '{"job": "Développeur", "experience": 5}'::jsonb,
        '{"automation": 35, "ai": 30, "experience": 23}'::jsonb
    ) RETURNING id INTO test_id;
    
    -- Vérification
    IF test_id IS NOT NULL THEN
        RAISE NOTICE 'SUCCESS: Insertion réussie avec ID %', test_id;
        
        -- Nettoyage
        DELETE FROM risk_assessments WHERE id = test_id;
        RAISE NOTICE 'SUCCESS: Test terminé avec succès!';
    ELSE
        RAISE NOTICE 'ERROR: Échec de l''insertion';
    END IF;
END $$;
```

## 🧪 **Test de l'API Après Correction**

Une fois le script de correction exécuté, testez l'API :

```bash
curl -X POST http://localhost:3001/api/submit-assessment \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jerome.karr@gmail.com",
    "firstName": "Test Final",
    "score": 88,
    "riskLevel": "Critique",
    "answers": {"job": "Développeur", "experience": 5},
    "breakdown": {"automation": 35, "ai": 30, "experience": 23}
  }'
```

### **Résultat Attendu :**
```json
{
  "success": true,
  "assessmentId": "uuid-here",
  "emailSent": true,
  "messageId": "resend-message-id"
}
```

## 🚨 **Solutions Alternatives**

### **Option 1 : Désactiver Temporairement RLS**

Si les politiques ne fonctionnent toujours pas :

```sql
-- Désactiver RLS temporairement pour les tests
ALTER TABLE risk_assessments DISABLE ROW LEVEL SECURITY;

-- Tester l'insertion
INSERT INTO risk_assessments (
  email, first_name, score, risk_level, answers, breakdown
) VALUES (
  'test-no-rls@example.com', 'Test No RLS', 75, 'Élevé',
  '{"job": "Développeur"}'::jsonb,
  '{"automation": 30}'::jsonb
);

-- Vérifier
SELECT * FROM risk_assessments WHERE email = 'test-no-rls@example.com';

-- Nettoyer
DELETE FROM risk_assessments WHERE email = 'test-no-rls@example.com';
```

### **Option 2 : Utiliser un Utilisateur Authentifié**

```sql
-- Créer un utilisateur de service
INSERT INTO auth.users (
  instance_id, id, aud, role, email, encrypted_password,
  email_confirmed_at, recovery_sent_at, last_sign_in_at,
  raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
  confirmation_token, email_change, email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'service@skillshield.app',
  crypt('service_password', gen_salt('bf')),
  NOW(),
  NULL,
  NOW(),
  '{"provider": "email", "providers": ["email"]}',
  '{}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);
```

## 📊 **Vérification dans Table Editor**

Après avoir exécuté les scripts :

1. **Allez** dans Supabase Dashboard
2. **Cliquez** sur "Table Editor"
3. **Sélectionnez** la table `risk_assessments`
4. **Vérifiez** que les données sont bien insérées

## ✅ **Checklist de Vérification**

- [ ] **Table existe** : Vérifiée dans `information_schema.tables`
- [ ] **RLS activé** : `row_security = true`
- [ ] **Politiques créées** : Vérifiées dans `pg_policies`
- [ ] **Permissions accordées** : `GRANT` exécutés
- [ ] **Test d'insertion** : Réussi dans SQL Editor
- [ ] **Test API** : Réussi avec curl
- [ ] **Données visibles** : Dans Table Editor

## 🎯 **Prochaines Étapes**

1. **Exécuter** le script de diagnostic
2. **Corriger** les politiques si nécessaire
3. **Tester** l'API avec curl
4. **Tester** le frontend complet
5. **Vérifier** la réception d'emails

---

## 🚀 **Une Fois Corrigé**

Votre système sera **100% opérationnel** avec :
- ✅ **Sauvegarde** dans Supabase
- ✅ **Génération PDF** automatique
- ✅ **Envoi d'email** avec pièce jointe
- ✅ **Redirection** vers la page de résultats

