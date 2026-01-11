-- ============================================================================
-- TEST : Vérifier que les Tables Existent
-- ============================================================================
-- 
-- Exécutez ce script dans le SQL Editor de Supabase pour vérifier que les tables existent
--
-- ============================================================================

-- Vérifier si les tables existent
SELECT 
  table_name,
  table_schema
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('users', 'user_profiles', 'user_progress')
ORDER BY table_name;

-- Si cette requête retourne 3 lignes (users, user_profiles, user_progress), 
-- les tables existent. Sinon, elles doivent être créées.

-- Vérifier la structure de user_profiles
SELECT 
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
AND table_name = 'user_profiles'
ORDER BY ordinal_position;

-- Vérifier la structure de users
SELECT 
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
AND table_name = 'users'
ORDER BY ordinal_position;
