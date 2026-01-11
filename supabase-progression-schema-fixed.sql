-- ============================================================================
-- SCHÉMA DE BASE DE DONNÉES : SYSTÈME DE PROGRESSION UTILISATEUR
-- Version corrigée
-- ============================================================================

-- Table principale : Suivi de progression utilisateur
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_user_id TEXT NOT NULL UNIQUE,
  completed_steps JSONB NOT NULL DEFAULT '[]'::jsonb,
  current_level INTEGER NOT NULL DEFAULT 1,
  total_points INTEGER NOT NULL DEFAULT 0,
  last_activity_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index pour performances
CREATE INDEX IF NOT EXISTS idx_user_progress_clerk_user_id ON user_progress(clerk_user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_last_activity ON user_progress(last_activity_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_progress_completed_steps ON user_progress USING GIN (completed_steps);

-- Fonction : Mise à jour automatique de updated_at
CREATE OR REPLACE FUNCTION update_user_progress_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour updated_at
DROP TRIGGER IF EXISTS trigger_update_user_progress_updated_at ON user_progress;
CREATE TRIGGER trigger_update_user_progress_updated_at
  BEFORE UPDATE ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_user_progress_updated_at();

-- Fonction : Mise à jour automatique de last_activity_at
CREATE OR REPLACE FUNCTION update_user_progress_last_activity()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_activity_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour last_activity_at
DROP TRIGGER IF EXISTS trigger_update_user_progress_last_activity ON user_progress;
CREATE TRIGGER trigger_update_user_progress_last_activity
  BEFORE UPDATE ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_user_progress_last_activity();

-- Désactiver RLS (sécurité gérée côté API backend)
ALTER TABLE user_progress DISABLE ROW LEVEL SECURITY;
