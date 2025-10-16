// Service pour les alertes mensuelles Sentinelle
// Utilise les mêmes données d'actualité IA que Bouclier mais avec une approche mensuelle

import { AINews } from './aiNewsService'

export interface SentinelleAlert {
  id: string
  title: string
  summary: string
  date: string
  severity: 'low' | 'moderate' | 'high' | 'critical'
  category: string
  tags: string[]
  fullContent?: string // Locked for Sentinelle
  sourceData: AINews // Données source de l'actualité
}

// Fonction pour créer une alerte Sentinelle à partir d'une actualité IA
export const createSentinelleAlert = (aiNews: AINews, userSector: string, userJob: string): SentinelleAlert => {
  // Adapter le contenu selon le secteur et métier de l'utilisateur
  const adaptedTitle = adaptTitleForUser(aiNews.title, userSector, userJob)
  const adaptedSummary = adaptSummaryForUser(aiNews.summary, userSector, userJob)
  
  return {
    id: `sentinelle_alert_${aiNews.id}`,
    title: adaptedTitle,
    summary: adaptedSummary,
    date: aiNews.publishedDate,
    severity: mapImpactLevelToSeverity(aiNews.impactLevel),
    category: aiNews.category,
    tags: aiNews.tags,
    fullContent: generateFullContent(aiNews, userSector, userJob),
    sourceData: aiNews
  }
}

// Adapter le titre selon le secteur de l'utilisateur
const adaptTitleForUser = (originalTitle: string, userSector: string, userJob: string): string => {
  const sectorMappings: Record<string, string> = {
    'Finance': 'du secteur financier',
    'Technologie': 'du développement logiciel',
    'Santé': 'du secteur médical',
    'Éducation': 'de l\'éducation',
    'Commerce': 'du commerce et retail',
    'Industrie': 'de l\'industrie'
  }
  
  const jobMappings: Record<string, string> = {
    'Comptable': 'comptabilité',
    'Développeur': 'développement',
    'Médecin': 'pratique médicale',
    'Enseignant': 'enseignement',
    'Commercial': 'vente',
    'Ingénieur': 'ingénierie'
  }
  
  const sector = sectorMappings[userSector] || 'de votre secteur'
  const job = jobMappings[userJob] || 'votre métier'
  
  // Adapter le titre selon le contexte
  if (originalTitle.includes('GPT-5')) {
    return `GPT-5 et l'automatisation de la ${job}`
  } else if (originalTitle.includes('Microsoft')) {
    return `L'IA Microsoft transforme la ${job}`
  } else if (originalTitle.includes('réglementations')) {
    return `Nouvelles réglementations IA impactant la ${job}`
  } else if (originalTitle.includes('développement')) {
    return `L'IA générative révolutionne la ${job}`
  }
  
  return `${originalTitle} - Impact sur la ${job}`
}

// Adapter le résumé selon le secteur de l'utilisateur
const adaptSummaryForUser = (originalSummary: string, userSector: string, userJob: string): string => {
  const intro = "Selon nos analyses, une nouvelle importante impacte votre secteur : "
  
  // Extraire la partie principale du résumé
  const mainContent = originalSummary.split('.')[0] || originalSummary
  
  // Adapter selon le métier
  const adaptedContent = mainContent.replace('développeurs', userSector === 'Technologie' ? 'développeurs' : 'professionnels')
    .replace('secteurs', 'votre secteur d\'activité')
  
  return `${intro}${adaptedContent}. Restez informé pour adapter votre stratégie.`
}

// Mapper les niveaux d'impact aux niveaux de sévérité
const mapImpactLevelToSeverity = (impactLevel: string): SentinelleAlert['severity'] => {
  switch (impactLevel) {
    case 'critical': return 'critical'
    case 'high': return 'high'
    case 'medium': return 'moderate'
    case 'low': return 'low'
    default: return 'moderate'
  }
}

// Générer le contenu complet (verrouillé pour Sentinelle)
const generateFullContent = (aiNews: AINews, userSector: string, userJob: string): string => {
  const baseContent = aiNews.paraphrasedContent || aiNews.summary
  
  return `${baseContent}

Impact détaillé sur votre métier :

Nouvelles capacités :
- Automatisation des tâches répétitives
- Amélioration de la productivité
- Nouvelles compétences requises
- Transformation des processus métier

Recommandations :
1. Se former aux nouveaux outils IA
2. Développer des compétences complémentaires
3. Anticiper les évolutions du marché

Avec le plan Bouclier :
- Analyse détaillée personnalisée
- Plan d'action sur mesure
- Formations adaptées incluses
- Coaching pour la transition`
}

// Service principal
export const sentinelleAlertService = {
  // Générer l'alerte mensuelle actuelle
  getCurrentMonthlyAlert: async (userSector: string, userJob: string): Promise<SentinelleAlert> => {
    // Pour la démo, utiliser la première actualité IA comme alerte mensuelle
    const mockNews: AINews = {
      id: 'ai_news_1',
      title: 'L\'IA générative révolutionne le développement logiciel',
      originalUrl: 'https://actu-ia.com/news/generative-ai-software-dev',
      summary: 'Les nouveaux outils d\'IA générative transforment la façon dont les développeurs écrivent, testent et déploient le code, augmentant la productivité mais nécessitant de nouvelles compétences.',
      impactScore: 9,
      impactLevel: 'critical',
      category: 'Tech',
      tags: ['Développement', 'Productivité', 'Compétences'],
      publishedDate: '2024-10-01T10:00:00Z',
      paraphrasedContent: 'Selon nos analyses, une nouvelle importante impacte votre secteur : L\'IA générative révolutionne le développement logiciel. En résumé : Les nouveaux outils d\'IA générative transforment la façon dont les développeurs écrivent, testent et déploient le code, augmentant la productivité mais nécessitant de nouvelles compétences. Restez informé pour adapter votre stratégie.'
    }
    
    return createSentinelleAlert(mockNews, userSector, userJob)
  },

  // Générer l'alerte pour le mois suivant
  getNextMonthlyAlert: async (userSector: string, userJob: string): Promise<SentinelleAlert> => {
    // Pour la démo, utiliser la deuxième actualité IA
    const mockNews: AINews = {
      id: 'ai_news_2',
      title: 'L\'automatisation par l\'IA menace 30% des emplois administratifs',
      originalUrl: 'https://actu-ia.com/news/automation-admin-jobs',
      summary: 'Une étude récente montre que près d\'un tiers des postes administratifs pourraient être automatisés par l\'IA dans les 5 prochaines années, soulignant l\'urgence de la reconversion.',
      impactScore: 8,
      impactLevel: 'high',
      category: 'Business',
      tags: ['Emploi', 'Automatisation', 'Reconversion'],
      publishedDate: '2024-09-28T14:30:00Z',
      paraphrasedContent: 'Selon nos analyses, une nouvelle importante impacte votre secteur : L\'automatisation par l\'IA menace 30% des emplois administratifs. En résumé : Une étude récente montre que près d\'un tiers des postes administratifs pourraient être automatisés par l\'IA dans les 5 prochaines années, soulignant l\'urgence de la reconversion. Restez informé pour adapter votre stratégie.'
    }
    
    return createSentinelleAlert(mockNews, userSector, userJob)
  },

  // Obtenir l'historique des alertes (limité pour Sentinelle)
  getAlertHistory: async (userSector: string, userJob: string, limit: number = 3): Promise<SentinelleAlert[]> => {
    const mockNewsHistory: AINews[] = [
      {
        id: 'ai_news_3',
        title: 'Nouvelles avancées en IA éthique et responsable',
        originalUrl: 'https://actu-ia.com/news/ethical-ai-advances',
        summary: 'Des chercheurs proposent de nouveaux cadres pour le développement d\'IA plus éthiques, avec un focus sur la transparence et la réduction des biais algorithmiques.',
        impactScore: 6,
        impactLevel: 'medium',
        category: 'Research',
        tags: ['Éthique', 'Recherche', 'Réglementation'],
        publishedDate: '2024-09-25T09:15:00Z',
        paraphrasedContent: 'Selon nos analyses, une nouvelle importante impacte votre secteur : Nouvelles avancées en IA éthique et responsable. En résumé : Des chercheurs proposent de nouveaux cadres pour le développement d\'IA plus éthiques, avec un focus sur la transparence et la réduction des biais algorithmiques. Restez informé pour adapter votre stratégie.'
      },
      {
        id: 'ai_news_4',
        title: 'L\'IA dans la cybersécurité : nouveaux défis et opportunités',
        originalUrl: 'https://actu-ia.com/news/ai-cybersecurity',
        summary: 'L\'intelligence artificielle transforme la cybersécurité avec de nouveaux outils de détection de menaces, mais crée aussi de nouveaux vecteurs d\'attaque.',
        impactScore: 7,
        impactLevel: 'high',
        category: 'Security',
        tags: ['Cybersécurité', 'IA', 'Sécurité'],
        publishedDate: '2024-09-20T16:45:00Z',
        paraphrasedContent: 'Selon nos analyses, une nouvelle importante impacte votre secteur : L\'IA dans la cybersécurité : nouveaux défis et opportunités. En résumé : L\'intelligence artificielle transforme la cybersécurité avec de nouveaux outils de détection de menaces, mais crée aussi de nouveaux vecteurs d\'attaque. Restez informé pour adapter votre stratégie.'
      },
      {
        id: 'ai_news_5',
        title: 'L\'impact de l\'IA sur les ressources humaines',
        originalUrl: 'https://actu-ia.com/news/ai-hr-impact',
        summary: 'Les départements RH adoptent massivement l\'IA pour le recrutement, l\'évaluation des performances et la formation, transformant les pratiques traditionnelles.',
        impactScore: 6,
        impactLevel: 'medium',
        category: 'HR',
        tags: ['RH', 'Recrutement', 'Formation'],
        publishedDate: '2024-09-15T11:20:00Z',
        paraphrasedContent: 'Selon nos analyses, une nouvelle importante impacte votre secteur : L\'impact de l\'IA sur les ressources humaines. En résumé : Les départements RH adoptent massivement l\'IA pour le recrutement, l\'évaluation des performances et la formation, transformant les pratiques traditionnelles. Restez informé pour adapter votre stratégie.'
      }
    ]
    
    return mockNewsHistory.slice(0, limit).map(news => createSentinelleAlert(news, userSector, userJob))
  }
}

