import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Newspaper, Lock, ArrowRight, ExternalLink } from 'lucide-react'
import { SentinelleWidget } from './Widget'
import { UpgradeBanner } from './UpgradeBanner'
import { Button } from '../ui/Button'
import { aiNewsService } from '../../services/aiNewsService'

// Define the interface locally to avoid import issues
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

interface SentinelleAINewsWidgetProps {
  className?: string
}

export const SentinelleAINewsWidget: React.FC<SentinelleAINewsWidgetProps> = ({ className = '' }) => {
  const [news, setNews] = useState<AINews[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async () => {
    setLoading(true)
    try {
      const aiNews = await aiNewsService.getTopAINews()
      // Pour Sentinelle, on ne montre que la première actualité (version limitée)
      setNews(aiNews.slice(0, 1))
    } catch (error) {
      console.error('Failed to load AI news:', error)
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
      case 'critical': return '🚨'
      case 'high': return '⚠️'
      case 'medium': return 'ℹ️'
      case 'low': return 'ℹ️'
      default: return '📰'
    }
  }

  const handleUpgrade = () => {
    window.location.href = '/sentinelle/plans'
  }

  return (
    <SentinelleWidget
      title="Veille IA Actu"
      icon={<Newspaper className="w-5 h-5 text-white" />}
      className={className}
      headerActions={
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">1 actualité</span>
          <Lock className="w-4 h-4 text-gray-400" />
        </div>
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
              className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start space-x-3 mb-2">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white ${getImpactColor(item.impactLevel)}`}>
                  <span className="text-xs">{getImpactIcon(item.impactLevel)}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary-900 text-base">{item.title}</h4>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {item.category}
                      </span>
                      {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
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
              
              {/* Lock overlay pour le contenu complet */}
              <div className="mt-4 p-3 bg-white border border-dashed border-gray-300 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Lock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Analyse détaillée disponible avec Bouclier
                  </span>
                </div>
                <ul className="text-xs text-gray-600 space-y-1 mb-3">
                  <li>• Impact détaillé sur votre métier</li>
                  <li>• Recommandations personnalisées</li>
                  <li>• Plan d'action automatique</li>
                  <li>• Veille temps réel 24/7</li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleUpgrade}
                  className="w-full group"
                >
                  Débloquer l'analyse complète
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
          
          {/* Teaser pour les autres actualités */}
          <div className="bg-gradient-to-r from-secondary-50 to-accent-50 border border-secondary-200 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                <Newspaper className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">+2 autres actualités importantes</h4>
                <p className="text-sm text-gray-600">Disponibles avec le plan Bouclier</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Microsoft intègre l'IA dans Office 365</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>L'UE adopte de nouvelles réglementations sur l'IA</span>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleUpgrade}
              className="w-full mt-3 group"
            >
              Accéder à toutes les actualités
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Veille IA limitée en plan Sentinelle • Mise à jour mensuelle
        </p>
      </div>
    </SentinelleWidget>
  )
}
