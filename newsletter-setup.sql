-- Création de la table newsletter_subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  source VARCHAR(100) DEFAULT 'homepage',
  subscribed BOOLEAN DEFAULT true,
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_source ON newsletter_subscribers(source);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_subscribed ON newsletter_subscribers(subscribed);

-- Activer RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Supprimer les anciennes politiques si elles existent
DROP POLICY IF EXISTS "Allow public insert" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow public read" ON newsletter_subscribers;

-- Politique pour permettre l'insertion publique
CREATE POLICY "Allow public insert" ON newsletter_subscribers
  FOR INSERT 
  WITH CHECK (true);

-- Politique pour permettre la lecture publique (optionnel, pour vérifications)
CREATE POLICY "Allow public read" ON newsletter_subscribers
  FOR SELECT 
  USING (true);

-- Politique pour permettre la mise à jour publique (réactivation)
CREATE POLICY "Allow public update" ON newsletter_subscribers
  FOR UPDATE 
  USING (true);

-- Message de confirmation
SELECT 'Table newsletter_subscribers créée avec succès!' as message;
