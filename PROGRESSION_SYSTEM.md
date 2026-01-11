# 🎯 Système de Progression Utilisateur - SkillShield

## 📋 Vue d'ensemble

Système de progression utilisateur intelligent lié à Clerk pour le suivi et l'encouragement de l'engagement utilisateur.

## 🏗️ Architecture

### Principe de conception

1. **Séparation des responsabilités**
   - Clerk gère l'authentification (user.id)
   - Supabase stocke les données de progression (clerk_user_id)
   - Le backend calcule la progression (déterministe)
   - Le frontend affiche la progression

2. **Système déterministe**
   - Pas d'IA ni d'API externes
   - Calcul basé sur des règles fixes
   - Même input = même output
   - Modifiable sans casser les données existantes

3. **Scalabilité**
   - Calcul côté backend pour garantir la cohérence
   - Cache côté client pour les performances
   - Indexation BDD pour les requêtes rapides

## 📊 Schéma de base de données

### Table : `user_progress`

```sql
CREATE TABLE user_progress (
  id UUID PRIMARY KEY,
  clerk_user_id TEXT NOT NULL UNIQUE,  -- Lien avec Clerk
  completed_steps JSONB DEFAULT '[]',   -- Étapes complétées
  current_level INTEGER DEFAULT 1,      -- Niveau actuel (cache)
  total_points INTEGER DEFAULT 0,       -- Points totaux (cache)
  last_activity_at TIMESTAMPTZ,         -- Dernière activité
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
);
```

**Pourquoi cette structure ?**

- **clerk_user_id** : Lien direct avec Clerk (pas de table users intermédiaire)
- **completed_steps (JSONB)** : Liste flexible des étapes complétées, facilement extensible
- **current_level & total_points (cache)** : Stockés pour performances, mais recalculés à chaque modification
- **last_activity_at** : Suivi de l'engagement utilisateur

## 🧮 Calcul de progression

### Étapes et points

Chaque étape complétée rapporte des points :

```typescript
const PROGRESSION_STEPS = {
  'onboarding_completed': { points: 10, category: 'onboarding' },
  'profile_created': { points: 5, category: 'onboarding' },
  'first_formation_started': { points: 15, category: 'formation' },
  'first_formation_completed': { points: 30, category: 'formation' },
  // ... etc
}
```

### Niveaux

Les niveaux sont calculés à partir des points totaux :

```
Niveau 1 : 0-50 points
Niveau 2 : 51-150 points
Niveau 3 : 151-300 points
...
Niveau 10 : 2500+ points
```

### Pourcentage de progression

Pourcentage de progression dans le niveau actuel :

```typescript
percentage = (pointsInLevel / levelRange) * 100
```

### Prochaine action recommandée

Déterminée par priorité :

1. Onboarding (priorité 1)
2. Formations (priorité 2)
3. Actions (priorité 3)
4. Achievements (priorité 4)

## 🔌 API Backend

### Route : `/api/progression/[userId]`

#### GET : Récupérer la progression

```bash
GET /api/progression/user_xxx
```

**Réponse :**

```json
{
  "clerkUserId": "user_xxx",
  "completedSteps": ["onboarding_completed", "profile_created"],
  "totalPoints": 15,
  "currentLevel": 1,
  "percentage": 30,
  "lastActivityAt": "2024-01-15T10:30:00Z",
  "nextRecommendedAction": {
    "stepId": "score_calculated",
    "label": "Score IA calculé",
    "reason": "Calculez votre score IA pour connaître votre niveau de risque"
  }
}
```

#### POST : Ajouter une étape complétée

```bash
POST /api/progression/user_xxx
Content-Type: application/json

{
  "stepId": "first_formation_completed"
}
```

**Réponse :** Même format que GET avec la progression mise à jour

## 💻 Utilisation Frontend

### Hook React : `useProgression`

```typescript
import { useProgression } from '../hooks/useProgression'

function MyComponent() {
  const { progression, loading, error, addCompletedStep } = useProgression()
  
  if (loading) return <div>Chargement...</div>
  if (error) return <div>Erreur : {error.message}</div>
  
  return (
    <div>
      <p>Niveau : {progression?.currentLevel}</p>
      <p>Progression : {progression?.percentage}%</p>
      <button onClick={() => addCompletedStep('onboarding_completed')}>
        Compléter onboarding
      </button>
    </div>
  )
}
```

### Composant : `ProgressionWidget`

```typescript
import { ProgressionWidget } from '../components/progression/ProgressionWidget'

function Dashboard() {
  return (
    <div>
      <ProgressionWidget showDetails={true} />
    </div>
  )
}
```

## 🔧 Configuration

### Variables d'environnement

```env
# Supabase (déjà configuré)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk (déjà configuré)
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxx
```

### Setup Supabase

1. **Exécuter le schéma SQL**

```bash
# Dans Supabase SQL Editor
# Copier-coller le contenu de supabase-progression-schema.sql
```

2. **Configurer RLS (optionnel)**

Pour un environnement de production, configurer Row Level Security :

```sql
-- Activer RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Politiques (exemple avec Clerk)
-- Note : Nécessite une configuration supplémentaire pour Clerk
```

**Alternative :** Désactiver RLS et gérer la sécurité côté API (plus simple pour Clerk)

## 📝 Exemples d'utilisation

### Exemple 1 : Marquer l'onboarding comme complété

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
  const { progression } = useProgression()
  
  return (
    <div>
      <ProgressionWidget />
      
      {progression && (
        <div>
          <p>Points totaux : {progression.totalPoints}</p>
          <p>Étapes complétées : {progression.completedSteps.length}</p>
        </div>
      )}
    </div>
  )
}
```

## 🔄 Flux de données

```
1. Utilisateur se connecte (Clerk)
   ↓
2. Frontend appelle useProgression()
   ↓
3. Hook appelle getUserProgression(user.id)
   ↓
4. Service appelle /api/progression/[userId]
   ↓
5. API récupère les données depuis Supabase
   ↓
6. API calcule la progression (déterministe)
   ↓
7. API retourne la progression au frontend
   ↓
8. Frontend affiche la progression
```

## 🎨 Personnalisation

### Modifier les étapes

Éditer `PROGRESSION_STEPS` dans :
- `src/services/progressionService.ts` (frontend)
- `api/progression/[userId].js` (backend)

**Important :** Modifier les deux fichiers pour garder la cohérence

### Modifier les niveaux

Éditer `LEVEL_THRESHOLDS` dans les mêmes fichiers

### Modifier la logique de recommandation

Éditer la fonction `getNextRecommendedAction()` dans les mêmes fichiers

## ✅ Avantages de cette architecture

1. **Simplicité**
   - Pas de dépendances externes complexes
   - Code clair et maintenable
   - Facile à comprendre et modifier

2. **Performance**
   - Calcul côté backend (cohérence garantie)
   - Cache côté client (expérience fluide)
   - Index BDD pour requêtes rapides

3. **Scalabilité**
   - Facilement extensible (ajouter des étapes)
   - Modifiable sans casser les données existantes
   - Compatible avec Clerk et Supabase

4. **Déterministe**
   - Pas d'IA (pas de coûts cachés)
   - Prévisible et testable
   - Même input = même output

## 🚀 Prochaines étapes

1. **Exécuter le schéma SQL** dans Supabase
2. **Tester l'API** avec un utilisateur Clerk
3. **Intégrer le widget** dans le dashboard
4. **Marquer les étapes** lors des actions utilisateur
5. **Personnaliser** les étapes et niveaux selon vos besoins

## 📚 Ressources

- [Documentation Supabase](https://supabase.com/docs)
- [Documentation Clerk](https://clerk.com/docs)
- [Schéma SQL](./supabase-progression-schema.sql)
- [Service Frontend](./src/services/progressionService.ts)
- [API Backend](./api/progression/[userId].js)
