-- ============================================================================
-- SCHEMA SUPABASE : TABLES USERS ET USER_PROFILES (VERSION FORCE)
-- ============================================================================
-- 
-- Ce script crée les tables nécessaires pour l'authentification et les profils utilisateur
-- À exécuter dans le SQL Editor de Supabase
-- Cette version force la création même si les tables existent
--
-- ============================================================================

-- Supprimer les tables si elles existent (ATTENTION : cela supprime les données)
DROP TABLE IF EXISTS user_profiles CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Table : Utilisateurs (correspond aux utilisateurs Clerk)
CREATE TABLE users (
  id TEXT PRIMARY KEY, -- Clerk User ID
  email TEXT NOT NULL,
  current_plan TEXT NOT NULL DEFAULT 'sentinelle',
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table : Profils utilisateur (détails du profil + scores IA)
CREATE TABLE user_profiles (
  id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  job_title TEXT,
  sector TEXT,
  years_experience INTEGER,
  automation_exposure INTEGER,
  ai_risk_score INTEGER,
  last_score_calculation TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index pour performances
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_stripe_customer ON users(stripe_customer_id);
CREATE INDEX idx_user_profiles_sector ON user_profiles(sector);
CREATE INDEX idx_user_profiles_ai_risk_score ON user_profiles(ai_risk_score);

-- Désactiver RLS pour ces tables (sécurité gérée côté API)
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;

-- Trigger pour mettre à jour updated_at automatiquement (users)
CREATE OR REPLACE FUNCTION update_users_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_users_updated_at ON users;
CREATE TRIGGER trigger_update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_users_updated_at();

-- Trigger pour mettre à jour updated_at automatiquement (user_profiles)
CREATE OR REPLACE FUNCTION update_user_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_user_profiles_updated_at ON user_profiles;
CREATE TRIGGER trigger_update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_user_profiles_updated_at();

-- Forcer le rafraîchissement du cache du schéma
NOTIFY pgrst, 'reload schema';

-- Message de confirmation
SELECT 'Tables users et user_profiles créées avec succès!' as message;
