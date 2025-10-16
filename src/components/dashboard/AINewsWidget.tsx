import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Newspaper, RefreshCw, AlertTriangle, TrendingUp, Info } from 'lucide-react'
import { Widget, Badge } from './Widget'

interface AINews {
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

interface AINewsWidgetProps {
  className?: string
}

// Mock data directly in the component
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

export const AINewsWidget: React.FC<AINewsWidgetProps> = ({ className = '' }) => {
  const [news, setNews] = useState<AINews[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async () => {
    setLoading(true)
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      setNews(mockAINews)
      setLastUpdate(new Date())
    } catch (error) {
      console.error('Failed to load AI news:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = async () => {
    setLoading(true)
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      setNews(mockAINews)
      setLastUpdate(new Date())
    } catch (error) {
      console.error('Failed to refresh AI news:', error)
    } finally {
      setLoading(false)
    }
  }

  const getImpactColor = (level: AINews['impactLevel']) => {
    switch (level) {
      case 'critical': return 'bg-red-500'
      case 'high': return 'bg-orange-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getImpactIcon = (level: AINews['impactLevel']) => {
    switch (level) {
      case 'critical': return <AlertTriangle className="w-4 h-4" />
      case 'high': return <TrendingUp className="w-4 h-4" />
      case 'medium': return <Info className="w-4 h-4" />
      case 'low': return <Info className="w-4 h-4" />
      default: return <Newspaper className="w-4 h-4" />
    }
  }

  return (
    <Widget
      title="Veille IA Actu"
      icon={<Newspaper className="w-5 h-5 text-primary-900" />}
      className={className}
      headerActions={
        <motion.button
          onClick={handleRefresh}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          whileTap={{ scale: 0.95 }}
          title="Actualiser les nouvelles"
        >
          <RefreshCw className={`w-5 h-5 text-gray-500 ${loading ? 'animate-spin' : ''}`} />
        </motion.button>
      }
    >
      {loading ? (
        <div className="text-center py-8 text-gray-500">Chargement des nouvelles IA...</div>
      ) : news.length === 0 ? (
        <div className="text-center py-8 text-gray-500">Aucune nouvelle IA pertinente pour le moment.</div>
      ) : (
        <div className="space-y-4">
          {news.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start space-x-3 mb-2">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white ${getImpactColor(item.impactLevel)}`}>
                  {getImpactIcon(item.impactLevel)}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary-900 text-base">{item.title}</h4>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="info">{item.category}</Badge>
                      {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(item.publishedDate).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700">{item.paraphrasedContent}</p>
            </motion.div>
          ))}
        </div>
      )}
      {lastUpdate && (
        <p className="text-xs text-gray-500 mt-4 text-right">Dernière mise à jour: {lastUpdate.toLocaleTimeString('fr-FR')}</p>
      )}
    </Widget>
  )
}