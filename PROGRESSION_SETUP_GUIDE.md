# 🚀 Guide de Configuration - Système de Progression Utilisateur

## 📋 Résumé

Système de progression utilisateur intelligent lié à Clerk pour le suivi et l'encouragement de l'engagement utilisateur.

## ✅ Livrables Créés

### 1. Schéma de Base de Données

**Fichier :** `supabase-progression-schema.sql`

- Table `user_progress` avec lien `clerk_user_id`
- Index pour performances
- Triggers pour mise à jour automatique
- Politiques RLS (optionnel)

### 2. Service Backend de Calcul

**Fichier :** `api/progression/[userId].js`

- Route API Vercel Serverless Function
- GET : Récupère la progression (calculée dynamiquement)
- POST : Ajoute une étape complétée
- Calcul déterministe côté backend

### 3. Service Frontend

**Fichier :** `src/services/progressionService.ts`

- Fonctions pour appeler l'API backend
- Types TypeScript pour la progression
- Gestion d'erreurs

### 4. Hook React

**Fichier :** `src/hooks/useProgression.ts`

- Hook personnalisé `useProgression()`
- Intégration avec Clerk (user.id)
- Gestion du loading et des erreurs

### 5. Composant React

**Fichier :** `src/components/progression/ProgressionWidget.tsx`

- Widget d'affichage de la progression
- Barre de progression animée
- Affichage du niveau et de la prochaine action

### 6. Documentation

**Fichiers :**
- `PROGRESSION_SYSTEM.md` : Documentation complète du système
- `PROGRESSION_SETUP_GUIDE.md` : Ce guide de configuration

## 🔧 Configuration Requise

### 1. Variables d'Environnement

Les variables suivantes doivent être configurées (déjà configurées pour Clerk et Supabase) :

```env
# Supabase (déjà configuré)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk (déjà configuré)
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxx
```

### 2. Base de Données Supabase

**Étape 1 :** Accéder à Supabase

1. Allez sur https://supabase.com/dashboard
2. Connectez-vous à votre compte
3. Sélectionnez votre projet

**Étape 2 :** Exécuter le schéma SQL

1. Cliquez sur "SQL Editor" dans le menu de gauche
2. Cliquez sur "New Query"
3. Copiez-collez le contenu de `supabase-progression-schema.sql`
4. Cliquez sur "Run" pour exécuter

**Étape 3 :** Vérifier la création

```sql
-- Vérifier que la table existe
SELECT * FROM user_progress LIMIT 1;

-- Vérifier les index
SELECT indexname, indexdef 
FROM pg_indexes 
WHERE tablename = 'user_progress';
```

### 3. Configuration RLS (Optionnel)

Pour un environnement de production, vous pouvez configurer Row Level Security :

**Option A :** Désactiver RLS (plus simple pour Clerk)

```sql
ALTER TABLE user_progress DISABLE ROW LEVEL SECURITY;
```

**Option B :** Configurer RLS avec Clerk (nécessite configuration supplémentaire)

Voir la documentation dans `supabase-progression-schema.sql`

## 🧪 Tests

### Test 1 : Test de l'API Backend

```bash
# Tester GET (remplacer user_xxx par un ID utilisateur Clerk)
curl http://localhost:3000/api/progression/user_xxx

# Tester POST
curl -X POST http://localhost:3000/api/progression/user_xxx \
  -H "Content-Type: application/json" \
  -d '{"stepId": "onboarding_completed"}'
```

### Test 2 : Test Frontend

1. Démarrer le serveur de développement :
```bash
npm run dev
```

2. Se connecter avec Clerk
3. Utiliser le hook `useProgression()` dans un composant
4. Vérifier l'affichage de la progression

### Test 3 : Test du Composant

```typescript
import { ProgressionWidget } from '../components/progression/ProgressionWidget'

function TestPage() {
  return (
    <div>
      <ProgressionWidget showDetails={true} />
    </div>
  )
}
```

## 📝 Exemples d'Utilisation

### Exemple 1 : Marquer une étape complétée

```typescript
import { useProgression } from '../hooks/useProgression'

function OnboardingComplete() {
  const { addCompletedStep } = useProgression()
  
  const handleComplete = async () => {
    try {
      await addCompletedStep('onboarding_completed')
      console.log('Onboarding complété !')
    } catch (error) {
      console.error('Erreur :', error)
    }
  }
  
  return <button onClick={handleComplete}>Terminer l'onboarding</button>
}
```

### Exemple 2 : Afficher la progression dans le dashboard

```typescript
import { ProgressionWidget } from '../components/progression/ProgressionWidget'
import { useProgression } from '../hooks/useProgression'

function DashboardHome() {
  const { progression, loading } = useProgression()
  
  if (loading) return <div>Chargement...</div>
  
  return (
    <div>
      <ProgressionWidget showDetails={true} />
      
      {progression && (
        <div>
          <p>Points totaux : {progression.totalPoints}</p>
          <p>Niveau : {progression.currentLevel}</p>
          <p>Progression : {progression.percentage}%</p>
        </div>
      )}
    </div>
  )
}
```

## 🎯 Étapes de Progression Disponibles

### Onboarding
- `onboarding_completed` : 10 points
- `profile_created` : 5 points

### Formations
- `first_formation_started` : 15 points
- `first_formation_completed` : 30 points
- `formation_5_completed` : 50 points
- `formation_10_completed` : 100 points

### Actions
- `score_calculated` : 10 points
- `first_alert_read` : 5 points
- `plan_upgraded` : 25 points

### Achievements
- `streak_7_days` : 20 points
- `streak_30_days` : 50 points

## 🔄 Prochaines Étapes

1. ✅ Exécuter le schéma SQL dans Supabase
2. ✅ Tester l'API avec un utilisateur Clerk
3. ⏳ Intégrer le widget dans le dashboard
4. ⏳ Marquer les étapes lors des actions utilisateur
5. ⏳ Personnaliser les étapes et niveaux selon vos besoins

## 📚 Ressources

- [Documentation Complète](./PROGRESSION_SYSTEM.md)
- [Schéma SQL](./supabase-progression-schema.sql)
- [Service Frontend](./src/services/progressionService.ts)
- [API Backend](./api/progression/[userId].js)
- [Hook React](./src/hooks/useProgression.ts)
- [Composant React](./src/components/progression/ProgressionWidget.tsx)

## 🐛 Dépannage

### Erreur : "Table user_progress does not exist"

**Solution :** Exécuter le schéma SQL dans Supabase

### Erreur : "Failed to fetch progression"

**Solution :** Vérifier que l'API backend est accessible et que les variables d'environnement sont configurées

### Erreur : "User not authenticated"

**Solution :** Vérifier que l'utilisateur est bien connecté avec Clerk

### Erreur : "Invalid step ID"

**Solution :** Vérifier que l'ID de l'étape existe dans `PROGRESSION_STEPS`
