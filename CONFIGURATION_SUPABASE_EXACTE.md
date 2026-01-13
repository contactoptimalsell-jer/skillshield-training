# 🔧 Configuration Supabase exacte

## 📋 URL Supabase

L'URL Supabase doit être :
```
https://jkdsepbnigcztrfcwkpj.supabase.co
```

**Important** :
- ✅ Commence par `https://`
- ✅ Pas de `/` à la fin
- ✅ Format : `https://[PROJECT_ID].supabase.co`

## 🔑 Clé Supabase

La clé `SUPABASE_ANON_KEY` doit être la **clé anonyme** (anon key) de votre projet Supabase.

**Où la trouver** :
1. Allez sur https://supabase.com/dashboard
2. Sélectionnez votre projet
3. **Settings** → **API**
4. Copiez la clé **"anon public"** (pas la "service_role" key)

## 📊 Table user_progress

### ✅ Vous devez avoir UNE SEULE table `user_progress`

Cette table stocke la progression de TOUS les utilisateurs. Chaque utilisateur a une ligne avec son `clerk_user_id` unique.

### 🗄️ Créer la table dans Supabase

1. Allez sur https://supabase.com/dashboard
2. Sélectionnez votre projet
3. **SQL Editor** (dans le menu de gauche)
4. Collez le script SQL ci-dessous
5. Cliquez sur **Run**

### 📝 Script SQL à exécuter

```sql
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
```

### ✅ Vérifier que la table existe

Après avoir exécuté le script, vérifiez :

```sql
SELECT * FROM user_progress LIMIT 1;
```

Si la requête fonctionne (même si elle retourne 0 lignes), la table existe.

## 🔧 Variables d'environnement dans Vercel

Dans Vercel → Settings → Environment Variables, vous devez avoir :

1. **`SUPABASE_URL`** (sans préfixe `VITE_`)
   - Valeur : `https://jkdsepbnigcztrfcwkpj.supabase.co`
   - Scope : Production, Preview, Development

2. **`SUPABASE_ANON_KEY`** (sans préfixe `VITE_`)
   - Valeur : Votre clé anon (commence par `eyJ...`)
   - Scope : Production, Preview, Development

**Important** : Ces variables sont pour les **API routes** (backend). Le frontend utilise `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`.
