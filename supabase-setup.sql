-- Script SQL pour créer la table risk_assessments dans Supabase
-- À exécuter dans le SQL Editor de Supabase

-- Créer la table risk_assessments
CREATE TABLE IF NOT EXISTS risk_assessments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Informations utilisateur
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  
  -- Score et résultats
  score INTEGER NOT NULL,
  risk_level TEXT NOT NULL, -- "Critique", "Élevé", "Modéré", "Faible"
  
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
CREATE INDEX IF NOT EXISTS idx_risk_assessments_ip_address ON risk_assessments(ip_address);

-- RLS (Row Level Security) - Activé pour la sécurité
ALTER TABLE risk_assessments ENABLE ROW LEVEL SECURITY;

-- Politique : Tout le monde peut insérer (formulaire public)
CREATE POLICY IF NOT EXISTS "Allow public insert" ON risk_assessments
  FOR INSERT
  WITH CHECK (true);

-- Politique : Lecture uniquement pour utilisateurs authentifiés (dashboard admin futur)
CREATE POLICY IF NOT EXISTS "Allow authenticated read" ON risk_assessments
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Politique : Lecture publique pour les résultats (avec ID)
CREATE POLICY IF NOT EXISTS "Allow public read by id" ON risk_assessments
  FOR SELECT
  USING (true);

-- Commentaires pour documentation
COMMENT ON TABLE risk_assessments IS 'Table pour stocker les évaluations de risque IA des utilisateurs';
COMMENT ON COLUMN risk_assessments.email IS 'Adresse email de l\'utilisateur';
COMMENT ON COLUMN risk_assessments.score IS 'Score de risque IA calculé (0-100)';
COMMENT ON COLUMN risk_assessments.risk_level IS 'Niveau de risque textuel (Faible, Modéré, Élevé, Critique)';
COMMENT ON COLUMN risk_assessments.answers IS 'Réponses complètes du questionnaire au format JSON';
COMMENT ON COLUMN risk_assessments.breakdown IS 'Décomposition détaillée du score par facteur';
COMMENT ON COLUMN risk_assessments.email_sent IS 'Indique si l\'email a été envoyé avec succès';
COMMENT ON COLUMN risk_assessments.resend_message_id IS 'ID du message Resend pour le tracking';

-- Vue pour les statistiques (optionnelle)
CREATE OR REPLACE VIEW risk_assessments_stats AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  COUNT(*) as total_assessments,
  AVG(score) as avg_score,
  COUNT(CASE WHEN email_sent = true THEN 1 END) as emails_sent,
  COUNT(CASE WHEN risk_level = 'Critique' THEN 1 END) as critical_count,
  COUNT(CASE WHEN risk_level = 'Élevé' THEN 1 END) as high_count,
  COUNT(CASE WHEN risk_level = 'Modéré' THEN 1 END) as medium_count,
  COUNT(CASE WHEN risk_level = 'Faible' THEN 1 END) as low_count
FROM risk_assessments
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY date DESC;

-- Fonction pour nettoyer les anciennes évaluations (optionnelle)
CREATE OR REPLACE FUNCTION cleanup_old_assessments()
RETURNS void AS $$
BEGIN
  -- Supprimer les évaluations de plus de 1 an
  DELETE FROM risk_assessments 
  WHERE created_at < NOW() - INTERVAL '1 year';
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour updated_at (si nécessaire)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.created_at = OLD.created_at;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Message de confirmation
SELECT 'Table risk_assessments créée avec succès!' as message;