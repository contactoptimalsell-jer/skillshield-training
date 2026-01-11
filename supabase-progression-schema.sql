-- ============================================================================
-- SCHÉMA DE BASE DE DONNÉES : SYSTÈME DE PROGRESSION UTILISATEUR
-- ============================================================================
-- 
-- Architecture :
-- - Table principale : user_progress (suivi des étapes complétées)
-- - Progression calculée dynamiquement (pas stockée en dur)
-- - Lien avec Clerk via clerk_user_id
-- - Système déterministe basé sur les actions utilisateur
--
-- ============================================================================

-- Table principale : Suivi de progression utilisateur
-- Cette table stocke uniquement les événements/étapes complétées
-- Le score et le niveau sont calculés dynamiquement
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Lien avec Clerk (OBLIGATOIRE)
  clerk_user_id TEXT NOT NULL UNIQUE,
  
  -- Données de progression (stockage des événements)
  -- JSONB pour flexibilité et performances
  completed_steps JSONB NOT NULL DEFAULT '[]'::jsonb,
  -- Format : ["onboarding", "first_formation", "score_calculated", ...]
  
  -- Métadonnées de progression
  current_level INTEGER NOT NULL DEFAULT 1, -- Niveau actuel (calculé, mais stocké pour performance)
  total_points INTEGER NOT NULL DEFAULT 0, -- Points totaux (calculé, mais stocké pour performance)
  
  -- Timestamps
  last_activity_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index pour performances (requêtes fréquentes)
CREATE INDEX IF NOT EXISTS idx_user_progress_clerk_user_id ON user_progress(clerk_user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_last_activity ON user_progress(last_activity_at DESC);

-- Index GIN pour recherches JSONB efficaces
CREATE INDEX IF NOT EXISTS idx_user_progress_completed_steps ON user_progress USING GIN (completed_steps);

-- ============================================================================
-- FONCTION : Mise à jour automatique de updated_at
-- ============================================================================
CREATE OR REPLACE FUNCTION update_user_progress_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour updated_at automatiquement
CREATE TRIGGER trigger_update_user_progress_updated_at
  BEFORE UPDATE ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_user_progress_updated_at();

-- ============================================================================
-- FONCTION : Mise à jour automatique de last_activity_at
-- ============================================================================
CREATE OR REPLACE FUNCTION update_user_progress_last_activity()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_activity_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour last_activity_at automatiquement
CREATE TRIGGER trigger_update_user_progress_last_activity
  BEFORE UPDATE ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_user_progress_last_activity();

-- ============================================================================
-- POLITIQUES RLS (Row Level Security)
-- ============================================================================
-- Activer RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Politique : Les utilisateurs ne peuvent lire que leur propre progression
CREATE POLICY "Users can read their own progress"
  ON user_progress
  FOR SELECT
  USING (auth.jwt() ->> 'sub' = clerk_user_id);

-- Politique : Les utilisateurs peuvent insérer leur propre progression
CREATE POLICY "Users can insert their own progress"
  ON user_progress
  FOR INSERT
  WITH CHECK (auth.jwt() ->> 'sub' = clerk_user_id);

-- Politique : Les utilisateurs peuvent mettre à jour leur propre progression
CREATE POLICY "Users can update their own progress"
  ON user_progress
  FOR UPDATE
  USING (auth.jwt() ->> 'sub' = clerk_user_id);

-- NOTE : Pour Clerk, les politiques RLS ci-dessus nécessitent une configuration
-- supplémentaire. Pour l'instant, nous utiliserons une politique publique avec
-- vérification côté backend, ou désactiverons RLS et gérerons la sécurité côté API.
--
-- Pour un environnement de production, voir : 
-- https://supabase.com/docs/guides/auth/row-level-security

-- Alternative : Politique publique avec vérification côté backend (plus simple pour Clerk)
-- DROP POLICY IF EXISTS "Users can read their own progress" ON user_progress;
-- DROP POLICY IF EXISTS "Users can insert their own progress" ON user_progress;
-- DROP POLICY IF EXISTS "Users can update their own progress" ON user_progress;
-- 
-- ALTER TABLE user_progress DISABLE ROW LEVEL SECURITY;
--
-- OU créer des politiques avec service_role pour les requêtes côté backend

-- ============================================================================
-- COMMENTAIRES SUR LE SCHÉMA
-- ============================================================================
COMMENT ON TABLE user_progress IS 'Suivi de progression utilisateur lié à Clerk via clerk_user_id. Les scores et niveaux sont calculés dynamiquement.';
COMMENT ON COLUMN user_progress.clerk_user_id IS 'ID utilisateur Clerk (obligatoire, unique)';
COMMENT ON COLUMN user_progress.completed_steps IS 'Liste JSONB des étapes complétées (format: ["step1", "step2", ...])';
COMMENT ON COLUMN user_progress.current_level IS 'Niveau actuel (mis à jour après calcul, pour performance)';
COMMENT ON COLUMN user_progress.total_points IS 'Points totaux (mis à jour après calcul, pour performance)';
COMMENT ON COLUMN user_progress.last_activity_at IS 'Dernière activité utilisateur (mis à jour automatiquement)';

-- ============================================================================
-- VÉRIFICATION
-- ============================================================================
-- Pour vérifier que la table a été créée correctement :
-- SELECT * FROM user_progress LIMIT 1;
--
-- Pour vérifier les index :
-- SELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'user_progress';
