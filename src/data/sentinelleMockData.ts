// Mock data for SkillShield Sentinelle Plan (Free)

export interface SentinelleUser {
  id: string
  name: string
  email: string
  avatar: string
  job: string
  sector: string
  experience: number
  plan: 'Sentinelle'
  subscriptionDate: string
  nextAlertDate: string
}

export interface SentinelleRiskScore {
  current: number
  level: 'Faible' | 'Modéré' | 'Élevé' | 'Critique'
  timeline: string
  breakdown: {
    taskAutomation: number
    marketSaturation: number
    adaptiveSkills: number // Locked
    sectorExposure: number // Locked
  }
  evolution: Array<{
    month: string
    score: number
  }> // Locked for detailed view
}

export interface MonthlyAlert {
  id: string
  title: string
  summary: string
  date: string
  severity: 'low' | 'moderate' | 'high' | 'critical'
  category: string
  tags: string[]
  fullContent?: string // Locked for Sentinelle
}

export interface CommunityDiscussion {
  id: string
  title: string
  author: string
  authorAvatar: string
  replies: number
  views: number
  lastActivity: string
  excerpt: string
  isLocked: boolean // Sentinelle can only read
}

// Mock Sentinelle User
export const mockSentinelleUser: SentinelleUser = {
  id: 'sentinelle_user_123',
  name: 'Pierre Martin',
  email: 'pierre.martin@email.com',
  avatar: 'PM',
  job: 'Comptable',
  sector: 'Finance',
  experience: 8,
  plan: 'Sentinelle',
  subscriptionDate: '2024-10-01',
  nextAlertDate: '2024-11-15'
}

// Mock Risk Score (basic version)
export const mockSentinelleRiskScore: SentinelleRiskScore = {
  current: 67,
  level: 'Modéré',
  timeline: '~18 mois',
  breakdown: {
    taskAutomation: 75,
    marketSaturation: 60,
    adaptiveSkills: 45, // Will be locked
    sectorExposure: 70  // Will be locked
  },
  evolution: [
    { month: '2024-01', score: 62 },
    { month: '2024-02', score: 61 },
    { month: '2024-03', score: 63 },
    { month: '2024-04', score: 64 },
    { month: '2024-05', score: 65 },
    { month: '2024-06', score: 66 },
    { month: '2024-07', score: 67 },
    { month: '2024-08', score: 66 },
    { month: '2024-09', score: 67 },
    { month: '2024-10', score: 67 }
  ]
}

// Mock Monthly Alert (basée sur les vraies données d'actualité IA)
// Cette alerte est générée à partir des données du service aiNewsService
export const mockMonthlyAlert: MonthlyAlert = {
  id: 'sentinelle_alert_ai_news_1',
  title: 'L\'IA générative révolutionne le développement logiciel',
  summary: 'Selon nos analyses, une nouvelle importante impacte votre secteur : L\'IA générative révolutionne le développement logiciel. En résumé : Les nouveaux outils d\'IA générative transforment la façon dont les développeurs écrivent, testent et déploient le code, augmentant la productivité mais nécessitant de nouvelles compétences. Restez informé pour adapter votre stratégie.',
  date: '2024-10-01T10:00:00Z', // Date réelle de l'actualité
  severity: 'critical',
  category: 'Tech',
  tags: ['Développement', 'Productivité', 'Compétences', 'IA générative'],
  fullContent: `L'IA générative révolutionne le développement logiciel. Voici ce que vous devez savoir :

Nouvelles capacités :
- Génération automatique de code avec GitHub Copilot
- Tests automatisés et débogage intelligent
- Optimisation de performance assistée par IA
- Documentation automatique du code

Tâches automatisées :
- Écriture de code répétitif (réduction estimée : 40%)
- Génération de tests unitaires (réduction estimée : 60%)
- Documentation technique (réduction estimée : 70%)
- Code review automatisé (réduction estimée : 30%)

Impact estimé sur votre métier : Élevé à critique
Timeline d'adoption : 3-6 mois

Données clés :
- 67% des développeurs utilisent déjà des outils IA
- 35% d'augmentation de productivité observée
- Nouvelles opportunités dans la supervision IA et l'architecture

Ce que vous devriez faire :
1. Maîtriser les prompts pour l'IA générative
2. Développer des compétences en architecture logicielle
3. Explorer les métiers complémentaires comme DevOps ou Product Manager

Avec le plan Bouclier :
- Alertes en temps réel (pas 1x/mois)
- Plan d'action personnalisé automatique
- Formations adaptées incluses
- Coaching pour vous adapter`
}

// Mock Community Discussions
export const mockCommunityDiscussions: CommunityDiscussion[] = [
  {
    id: 'discussion_1',
    title: '🔥 [Témoignage] J\'ai réussi ma reconversion en 8 mois grâce à SkillShield',
    author: 'marie_dev',
    authorAvatar: 'MD',
    replies: 342,
    views: 25,
    lastActivity: 'il y a 2h',
    excerpt: 'Bonjour à tous ! Je voulais partager mon parcours. Il y a 8 mois, j\'étais comptable et mon score IA était à 82% (critique). Aujourd\'hui, je suis UX Designer et mon score est à 23%. Voici comment j\'ai fait...',
    isLocked: false
  },
  {
    id: 'discussion_2',
    title: '💡 Les 10 compétences IA-proof pour 2025-2027',
    author: 'expert_carriere',
    authorAvatar: 'EC',
    replies: 189,
    views: 1800,
    lastActivity: 'il y a 5h',
    excerpt: 'Après analyse de 10 000+ offres d\'emploi, voici les compétences qui resteront demandées malgré l\'IA. Cette liste est basée sur des données réelles du marché...',
    isLocked: false
  },
  {
    id: 'discussion_3',
    title: '📊 Retour d\'expérience : Ma formation DevOps en 6 mois',
    author: 'thomas_devops',
    authorAvatar: 'TD',
    replies: 156,
    views: 1200,
    lastActivity: 'il y a 1 jour',
    excerpt: 'Salut ! J\'ai suivi le parcours DevOps de SkillShield et je voulais partager mon expérience. En 6 mois, j\'ai pu changer de poste avec une augmentation de 35%...',
    isLocked: true
  },
  {
    id: 'discussion_4',
    title: '🤖 Comment j\'utilise l\'IA pour améliorer ma productivité',
    author: 'sarah_product',
    authorAvatar: 'SP',
    replies: 98,
    views: 890,
    lastActivity: 'il y a 1 jour',
    excerpt: 'L\'IA n\'est pas forcément une menace si on sait l\'utiliser. Voici mes outils et techniques pour rester productif et ajouter de la valeur...',
    isLocked: true
  },
  {
    id: 'discussion_5',
    title: '💼 Les métiers qui résistent le mieux à l\'IA en 2025',
    author: 'analyst_jobs',
    authorAvatar: 'AJ',
    replies: 234,
    views: 2100,
    lastActivity: 'il y a 2 jours',
    excerpt: 'Analyse basée sur 50 000 offres d\'emploi. Voici les métiers qui continuent de recruter malgré l\'arrivée de l\'IA...',
    isLocked: true
  }
]

// Mock Plans Comparison Data
export const plansComparison = {
  sentinelle: {
    name: 'Sentinelle',
    price: 'Gratuit',
    isCurrent: true,
    features: {
      'Score IA basique': true,
      'Analyse détaillée': false,
      'Alertes mensuelles': { value: true, limit: '1/mois' },
      'Veille temps réel': false,
      'Analyses sectorielles': false,
      'Plan reconversion': false,
      'Formations incluses': false,
      'Bootcamps express': false,
      'Certifications': false,
      'Garantie de revenu': false,
      'Assurance impact IA': false,
      'Support email': { value: true, limit: '72h' },
      'Coaching 1-to-1': false,
      'Jobs AI-proof': false,
      'Lecture discussions': true,
      'Participation active': false,
      'Messages privés': false,
      'Events exclusifs': false
    }
  },
  bouclier: {
    name: 'Bouclier',
    price: '49€/mois',
    isPopular: true,
    features: {
      'Score IA basique': true,
      'Analyse détaillée': true,
      'Alertes mensuelles': { value: true, limit: 'illimité' },
      'Veille temps réel': true,
      'Analyses sectorielles': true,
      'Plan reconversion': { value: true, type: 'Personnalisé' },
      'Formations incluses': { value: true, limit: '3 mois' },
      'Bootcamps express': true,
      'Certifications': false,
      'Garantie de revenu': false,
      'Assurance impact IA': false,
      'Support email': { value: true, type: 'Prioritaire' },
      'Coaching 1-to-1': false,
      'Jobs AI-proof': true,
      'Lecture discussions': true,
      'Participation active': true,
      'Messages privés': true,
      'Events exclusifs': false
    }
  },
  forteresse: {
    name: 'Forteresse',
    price: '99€/mois',
    isPremium: true,
    features: {
      'Score IA basique': true,
      'Analyse détaillée': true,
      'Alertes mensuelles': { value: true, limit: 'illimité' },
      'Veille temps réel': true,
      'Analyses sectorielles': { value: true, type: 'Premium' },
      'Plan reconversion': { value: true, type: 'Avancé' },
      'Formations incluses': { value: true, limit: 'Illimité' },
      'Bootcamps express': { value: true, type: 'Prioritaire' },
      'Certifications': true,
      'Garantie de revenu': { value: true, limit: '60% x 6 mois' },
      'Assurance impact IA': true,
      'Support email': { value: true, type: 'VIP' },
      'Coaching 1-to-1': { value: true, limit: 'Mensuel' },
      'Jobs AI-proof': { value: true, type: 'Prioritaire' },
      'Lecture discussions': true,
      'Participation active': true,
      'Messages privés': true,
      'Events exclusifs': true
    }
  }
}

// Mock testimonials
export const testimonials = [
  {
    id: 'testimonial_1',
    name: 'Thomas',
    role: 'ex-graphiste devenu UX Designer',
    avatar: 'T',
    rating: 5,
    text: 'J\'étais en Sentinelle pendant 2 mois. Dès que j\'ai vu mon score à 78%, j\'ai pris Bouclier. 6 mois plus tard, j\'ai changé de métier et je suis serein face à l\'IA.',
    plan: 'Bouclier'
  },
  {
    id: 'testimonial_2',
    name: 'Sarah',
    role: 'ex-comptable devenue analyste financière',
    avatar: 'S',
    rating: 5,
    text: 'Le plan Sentinelle m\'a fait prendre conscience du danger. Avec Bouclier, j\'ai eu un plan clair et les formations pour pivoter. Résultat : +40% de salaire !',
    plan: 'Forteresse'
  },
  {
    id: 'testimonial_3',
    name: 'Marc',
    role: 'ex-marketeur devenu data analyst',
    avatar: 'M',
    rating: 5,
    text: 'J\'ai hésité longtemps à passer de Sentinelle à Bouclier. Maintenant je regrette de ne pas l\'avoir fait plus tôt. Les alertes temps réel sont un game-changer.',
    plan: 'Bouclier'
  }
]

// Mock community stats
export const communityStats = {
  activeMembers: 2432,
  discussions: 3847,
  repliesThisWeek: 1293,
  successRate: 78
}

// Mock next alert info (basé sur les vraies données d'actualité IA)
export const nextAlertInfo = {
  daysLeft: 23,
  probableSubject: 'L\'automatisation par l\'IA menace 30% des emplois administratifs',
  estimatedDate: '2024-11-15'
}
