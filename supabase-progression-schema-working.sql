-- ============================================================================
-- SCHÉMA DE BASE DE DONNÉES : SYSTÈME DE PROGRESSION UTILISATEUR
-- Version simplifiée fonctionnelle
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

-- Désactiver RLS (sécurité gérée côté API backend)
ALTER TABLE user_progress DISABLE ROW LEVEL SECURITY;
