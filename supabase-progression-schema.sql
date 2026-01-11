-- ============================================================================
-- SCHEMA SUPABASE : SYSTÈME DE PROGRESSION UTILISATEUR
-- ============================================================================
-- 
-- Ce fichier contient le schéma SQL pour créer la table user_progress
-- qui permet de suivre la progression des utilisateurs (niveaux, points, étapes)
--
-- ============================================================================

-- Nettoyer d'abord (si nécessaire)
DROP TABLE IF EXISTS user_progress CASCADE;

-- Table principale : Suivi de progression utilisateur
CREATE TABLE user_progress (
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
CREATE INDEX idx_user_progress_clerk_user_id ON user_progress(clerk_user_id);
CREATE INDEX idx_user_progress_last_activity ON user_progress(last_activity_at DESC);
CREATE INDEX idx_user_progress_completed_steps ON user_progress USING GIN (completed_steps);

-- Désactiver RLS (sécurité gérée côté API backend)
ALTER TABLE user_progress DISABLE ROW LEVEL SECURITY;

-- Trigger pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_progress_updated_at
  BEFORE UPDATE ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
