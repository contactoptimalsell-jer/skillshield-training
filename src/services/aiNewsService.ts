// Types
export interface AINews {
  id: string
  title: string
  originalUrl: string
  summary: string
  impactScore: number
  impactLevel: 'critical' | 'high' | 'medium' | 'low'
  category: string
  tags: string[]
  publishedDate: string
  paraphrasedContent?: string
}

// Mock data
const mockAINews: AINews[] = [
  {
    id: 'news_1',
    title: 'OpenAI lance GPT-5 avec des capacités révolutionnaires',
    originalUrl: 'https://example.com/gpt5-launch',
    summary: 'OpenAI a annoncé le lancement de GPT-5 avec des capacités de raisonnement avancées qui pourraient transformer de nombreux secteurs.',
    impactScore: 9,
    impactLevel: 'critical',
    category: 'Tech',
    tags: ['OpenAI', 'GPT-5', 'IA', 'Automatisation'],
    publishedDate: new Date().toISOString(),
    paraphrasedContent: 'Selon nos analyses, une nouvelle importante impacte votre secteur : OpenAI lance GPT-5 avec des capacités révolutionnaires. En résumé : OpenAI a annoncé le lancement de GPT-5 avec des capacités de raisonnement avancées qui pourraient transformer de nombreux secteurs. Restez informé pour adapter votre stratégie.'
  },
  {
    id: 'news_2',
    title: 'Microsoft intègre l\'IA dans Office 365',
    originalUrl: 'https://example.com/microsoft-office-ai',
    summary: 'Microsoft annonce l\'intégration de l\'IA dans Office 365, automatisant de nombreuses tâches administratives.',
    impactScore: 7,
    impactLevel: 'high',
    category: 'Business',
    tags: ['Microsoft', 'Office 365', 'IA', 'Productivité'],
    publishedDate: new Date(Date.now() - 3600000).toISOString(),
    paraphrasedContent: 'Selon nos analyses, une nouvelle importante impacte votre secteur : Microsoft intègre l\'IA dans Office 365. En résumé : Microsoft annonce l\'intégration de l\'IA dans Office 365, automatisant de nombreuses tâches administratives. Restez informé pour adapter votre stratégie.'
  },
  {
    id: 'news_3',
    title: 'L\'UE adopte de nouvelles réglementations sur l\'IA',
    originalUrl: 'https://example.com/eu-ai-regulations',
    summary: 'L\'Union Européenne a adopté de nouvelles réglementations strictes sur l\'utilisation de l\'IA dans les entreprises.',
    impactScore: 6,
    impactLevel: 'high',
    category: 'Policy',
    tags: ['UE', 'Réglementation', 'IA', 'Compliance'],
    publishedDate: new Date(Date.now() - 7200000).toISOString(),
    paraphrasedContent: 'Selon nos analyses, une nouvelle importante impacte votre secteur : L\'UE adopte de nouvelles réglementations sur l\'IA. En résumé : L\'Union Européenne a adopté de nouvelles réglementations strictes sur l\'utilisation de l\'IA dans les entreprises. Restez informé pour adapter votre stratégie.'
  }
]

// Service functions
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours

const getImpactLevel = (score: number): AINews['impactLevel'] => {
  if (score >= 8) return 'critical'
  if (score >= 6) return 'high'
  if (score >= 4) return 'medium'
  return 'low'
}

const paraphraseContent = (title: string, summary: string): string => {
  const intro = "Selon nos analyses, une nouvelle importante impacte votre secteur : "
  const conclusion = "Restez informé pour adapter votre stratégie."
  return `${intro}${title}. En résumé : ${summary.split('.')[0]}. ${conclusion}`
}

// Main service
export const aiNewsService = {
  getTopAINews: async (): Promise<AINews[]> => {
    const cachedNews = localStorage.getItem('aiNewsCache')
    if (cachedNews) {
      const parsedCache = JSON.parse(cachedNews)
      if (Date.now() - parsedCache.timestamp < CACHE_DURATION) {
        console.log('Returning cached AI news.')
        return parsedCache.news
      }
    }

    const news = mockAINews.map(item => ({
      ...item,
      impactLevel: getImpactLevel(item.impactScore),
      paraphrasedContent: paraphraseContent(item.title, item.summary),
    }))

    localStorage.setItem('aiNewsCache', JSON.stringify({ timestamp: Date.now(), news }))
    return news
  },

  forceUpdateNews: async (): Promise<AINews[]> => {
    console.log('Forcing AI news update...')
    const news = mockAINews.map(item => ({
      ...item,
      impactLevel: getImpactLevel(item.impactScore),
      paraphrasedContent: paraphraseContent(item.title, item.summary),
    }))
    localStorage.setItem('aiNewsCache', JSON.stringify({ timestamp: Date.now(), news }))
    window.dispatchEvent(new CustomEvent('aiNewsUpdated'))
    return news
  }
}