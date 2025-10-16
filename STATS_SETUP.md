# 📊 Configuration des Statistiques Dynamiques SkillShield

## 🎯 Vue d'ensemble

Le système de statistiques dynamiques de SkillShield collecte des données réelles depuis plusieurs APIs publiques pour afficher des métriques crédibles sur l'impact de l'IA sur les métiers.

## 🔌 APIs Utilisées

### 1. arXiv API (Gratuite - Illimitée)
- **URL**: `http://export.arxiv.org/api/query`
- **Usage**: Compter les publications IA récentes
- **Configuration**: Aucune clé requise
- **Limite**: Aucune

### 2. NewsAPI (Gratuite - 100 req/jour)
- **URL**: `https://newsapi.org/v2`
- **Usage**: Récupérer les actualités sur l'automation IA
- **Configuration**: Clé API requise
- **Limite**: 100 requêtes/jour (plan gratuit)

### 3. GitHub API (Gratuite - 5000 req/h)
- **URL**: `https://api.github.com`
- **Usage**: Compter les repositories IA actifs
- **Configuration**: Token GitHub recommandé
- **Limite**: 5000 requêtes/heure (authentifié)

## 🛠️ Configuration

### Étape 1: Créer un compte NewsAPI
1. Aller sur [newsapi.org](https://newsapi.org)
2. Créer un compte gratuit
3. Récupérer votre clé API
4. Ajouter dans votre fichier `.env`:
```bash
VITE_NEWS_API_KEY=your_newsapi_key_here
```

### Étape 2: Créer un token GitHub (optionnel)
1. Aller sur GitHub → Settings → Developer settings → Personal access tokens
2. Générer un nouveau token (classic)
3. Sélectionner le scope `public_repo`
4. Ajouter dans votre fichier `.env`:
```bash
VITE_GITHUB_TOKEN=ghp_your_github_token_here
```

### Étape 3: Variables d'environnement
Créer un fichier `.env` à la racine du projet:
```bash
# APIs Externes pour les Statistiques Dynamiques
VITE_NEWS_API_KEY=your_newsapi_key_here
VITE_GITHUB_TOKEN=ghp_your_github_token_here

# Configuration de l'application
VITE_APP_NAME=SkillShield
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=development
```

## 📊 Formule de Calcul du Score IA

Le score IA (0-100%) est calculé selon cette formule pondérée:

```
Score IA = (Publications × 0.4) + (Actualités × 0.3) + (GitHub × 0.3)
```

### Composantes:
- **Publications arXiv (40%)**: Nombre de publications IA de la semaine
- **Actualités NewsAPI (30%)**: Nombre d'articles sur l'automation IA
- **Activité GitHub (30%)**: Nombre de repositories IA créés ce mois

### Interprétation:
- **0-40%**: Risque faible (stabilité sectorielle)
- **41-70%**: Risque modéré (transformation en cours)
- **71-100%**: Risque élevé (disruption importante)

## 🔄 Mise à Jour Automatique

### Cache Local
- Les données sont mises en cache pendant 1 heure
- Stockage dans `localStorage` pour les 30 derniers jours
- Mise à jour automatique si les données sont anciennes

### Auto-refresh
- Option d'actualisation automatique toutes les 5 minutes
- Bouton de rafraîchissement manuel disponible
- Indicateur visuel de dernière mise à jour

## 🎨 Composants Disponibles

### 1. `DynamicStatsWidget`
- Widget complet avec refresh et gestion d'erreurs
- Utilisé dans les pages de dashboard
- Affichage détaillé avec métriques techniques

### 2. `HeroStatsWidget`
- Version simplifiée pour la Hero Section
- Données en temps réel intégrées
- Compatible avec le design existant

### 3. `DashboardPreviewWidgets`
- Widgets miniatures pour le preview du dashboard
- Données dynamiques intégrées
- Animations et états de chargement

## 🚀 Utilisation

### Hook personnalisé `useStats`
```typescript
import { useStats } from '../hooks/useStats'

const { stats, loading, refresh, error } = useStats(true, 300000)
```

### Service direct `statsService`
```typescript
import { statsService } from '../services/statsService'

const stats = await statsService.collectAllStats()
await statsService.saveStats(stats)
```

## 🔧 Fallback et Gestion d'Erreurs

### Données par Défaut
Si les APIs ne répondent pas, le système utilise des valeurs par défaut:
- Score IA: 67%
- Alertes: 3
- Progression: +12%

### Gestion d'Erreurs
- Messages d'erreur utilisateur-friendly
- Fallback automatique sur les données en cache
- Retry automatique en cas d'échec temporaire

## 📈 Évolutions Futures

### Phase 2: Base de Données
- Migration vers Supabase pour stockage persistant
- Historique complet des statistiques
- Analytics et tendances

### Phase 3: Machine Learning
- Prédiction des tendances IA
- Score personnalisé par métier
- Recommandations intelligentes

### Phase 4: Plus de Sources
- LinkedIn Job Postings
- Google Trends
- Données gouvernementales (Pôle Emploi)

## 🎯 Coûts

| Service | Plan Gratuit | Limite |
|---------|--------------|--------|
| NewsAPI | Gratuit | 100 req/jour |
| GitHub API | Gratuit | 5000 req/h |
| arXiv API | Gratuit | Illimité |
| **Total** | **0€/mois** | **Largement suffisant** |

## ✅ Test du Système

1. Vérifier que les APIs répondent:
```bash
# Test arXiv
curl "http://export.arxiv.org/api/query?search_query=cat:cs.AI&max_results=1"

# Test NewsAPI (avec votre clé)
curl "https://newsapi.org/v2/everything?q=AI&apiKey=YOUR_KEY"

# Test GitHub
curl "https://api.github.com/search/repositories?q=artificial+intelligence"
```

2. Vérifier les logs dans la console du navigateur
3. Tester le bouton de refresh manuel
4. Vérifier le cache localStorage

Le système est maintenant prêt à afficher des statistiques dynamiques et crédibles ! 🎉

