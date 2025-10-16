-- Test Direct Supabase - Diagnostic Complet
-- À exécuter dans le SQL Editor de Supabase

-- 1. Vérifier l'état de la table
SELECT '=== ÉTAT DE LA TABLE ===' as info;
SELECT table_name, row_security, table_type
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'risk_assessments';

-- 2. Vérifier les politiques RLS
SELECT '=== POLITIQUES RLS ===' as info;
SELECT 
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'risk_assessments';

-- 3. Vérifier les permissions
SELECT '=== PERMISSIONS ===' as info;
SELECT 
  grantee,
  privilege_type,
  is_grantable
FROM information_schema.table_privileges 
WHERE table_name = 'risk_assessments';

-- 4. Vérifier les rôles
SELECT '=== RÔLES ===' as info;
SELECT rolname, rolsuper, rolinherit, rolcreaterole, rolcreatedb, rolcanlogin
FROM pg_roles 
WHERE rolname IN ('public', 'anon', 'authenticated');

-- 5. Test de désactivation RLS temporaire
SELECT '=== TEST SANS RLS ===' as info;

-- Désactiver RLS temporairement
ALTER TABLE risk_assessments DISABLE ROW LEVEL SECURITY;

-- Test d'insertion
INSERT INTO risk_assessments (
  email, first_name, score, risk_level, answers, breakdown
) VALUES (
  'test-no-rls@example.com', 'Test No RLS', 75, 'Élevé',
  '{"job": "Développeur"}'::jsonb,
  '{"automation": 30}'::jsonb
);

-- Vérifier l'insertion
SELECT 'Insertion sans RLS réussie:' as result, * FROM risk_assessments WHERE email = 'test-no-rls@example.com';

-- Nettoyer
DELETE FROM risk_assessments WHERE email = 'test-no-rls@example.com';

-- Réactiver RLS
ALTER TABLE risk_assessments ENABLE ROW LEVEL SECURITY;

-- 6. Recréer les politiques correctement
SELECT '=== RECRÉATION DES POLITIQUES ===' as info;

-- Supprimer toutes les politiques existantes
DROP POLICY IF EXISTS "Allow public insert" ON risk_assessments;
DROP POLICY IF EXISTS "Allow public read by id" ON risk_assessments;
DROP POLICY IF EXISTS "Allow authenticated read" ON risk_assessments;

-- Créer les politiques avec syntaxe complète
CREATE POLICY "Allow public insert" ON risk_assessments
  FOR INSERT
  TO public, anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public read by id" ON risk_assessments
  FOR SELECT
  TO public, anon, authenticated
  USING (true);

-- Donner les permissions explicites
GRANT ALL ON risk_assessments TO public;
GRANT ALL ON risk_assessments TO anon;
GRANT ALL ON risk_assessments TO authenticated;
GRANT USAGE ON SCHEMA public TO public;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;

-- 7. Test final avec RLS activé
SELECT '=== TEST FINAL AVEC RLS ===' as info;

-- Test d'insertion avec RLS
INSERT INTO risk_assessments (
  email, first_name, score, risk_level, answers, breakdown
) VALUES (
  'test-with-rls@example.com', 'Test With RLS', 85, 'Critique',
  '{"job": "Développeur", "experience": 10}'::jsonb,
  '{"automation": 40, "ai": 35, "experience": 10}'::jsonb
);

-- Vérifier l'insertion
SELECT 'Insertion avec RLS réussie:' as result, * FROM risk_assessments WHERE email = 'test-with-rls@example.com';

-- Nettoyer
DELETE FROM risk_assessments WHERE email = 'test-with-rls@example.com';

-- 8. Vérification finale des politiques
SELECT '=== VÉRIFICATION FINALE ===' as info;
SELECT 
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'risk_assessments';

SELECT 'Diagnostic terminé avec succès!' as message;

