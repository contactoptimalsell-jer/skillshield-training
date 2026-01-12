-- ============================================================================
-- SCHEMA SUPABASE : TABLE AEGIS_CONVERSATIONS (Optionnel)
-- ============================================================================
-- 
-- Cette table permet de logger les conversations avec Aegis pour améliorer
-- le chatbot et analyser les besoins des utilisateurs
-- À exécuter dans le SQL Editor de Supabase (optionnel)
--
-- ============================================================================

-- Table : Conversations Aegis
CREATE TABLE IF NOT EXISTS aegis_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL, -- Clerk User ID (référence users.id qui est TEXT)
  user_message TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  tokens_used INTEGER
);

-- Index pour performances
CREATE INDEX IF NOT EXISTS idx_aegis_conversations_user_id ON aegis_conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_aegis_conversations_timestamp ON aegis_conversations(timestamp DESC);

-- Désactiver RLS (sécurité gérée côté API)
ALTER TABLE aegis_conversations DISABLE ROW LEVEL SECURITY;

-- Message de confirmation
SELECT 'Table aegis_conversations créée avec succès!' as message;
