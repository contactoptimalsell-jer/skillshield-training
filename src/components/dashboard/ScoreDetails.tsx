import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  BarChart3
} from 'lucide-react'
import { Widget, ProgressBar, Badge, MetricCard } from './Widget'
import { useDashboard } from '../../context/DashboardContext'

export const ScoreDetails: React.FC = () => {
  const { riskScore } = useDashboard()

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Faible': return 'text-accent-600'
      case 'Modéré': return 'text-yellow-600'
      case 'Élevé': return 'text-orange-600'
      case 'Critique': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case 'Faible': return 'success'
      case 'Modéré': return 'warning'
      case 'Élevé': return 'error'
      case 'Critique': return 'error'
      default: return 'info'
    }
  }

  const recommendations = [
    {
      priority: 'urgent',
      title: 'Commencer la formation en DevOps dans les 30 jours',
      description: 'Les compétences DevOps sont de plus en plus demandées et offrent une meilleure protection contre l\'automatisation.',
      action: 'Commencer maintenant'
    },
    {
      priority: 'important',
      title: 'Développer des compétences en gestion d\'équipe',
      description: 'Les soft skills et la gestion d\'équipe sont moins susceptibles d\'être automatisées.',
      action: 'Voir les formations'
    },
    {
      priority: 'opportunity',
      title: 'Pivoter vers Site Reliability Engineer',
      description: 'Ce métier adjacent offre 85% de transfert de compétences avec votre profil actuel.',
      action: 'Explorer le plan'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-900">Mon Score IA</h1>
          <p className="text-gray-600 mt-2">
            Analyse approfondie de votre exposition à l'automatisation IA
          </p>
        </div>
        <Badge variant={getRiskBadgeColor(riskScore.level)} size="lg">
          Risque {riskScore.level}
        </Badge>
      </div>

      {/* Main Score Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score Overview */}
        <div className="lg:col-span-2">
          <Widget title="Vue d'ensemble du risque">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 180 180">
                  <circle
                    cx="90"
                    cy="90"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-gray-200"
                  />
                  <motion.circle
                    cx="90"
                    cy="90"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className={getRiskColor(riskScore.level)}
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 70 * (1 - riskScore.current / 100) }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary-900">
                      {riskScore.current}%
                    </div>
                    <div className="text-lg text-gray-500">Score de risque</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <Badge variant={getRiskBadgeColor(riskScore.level)} size="lg">
                    Risque {riskScore.level}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    Impact estimé dans {riskScore.timeline}
                  </div>
                </div>
                
                <p className="text-gray-600 max-w-md mx-auto">
                  Votre métier présente un niveau de risque modéré face à l'automatisation IA. 
                  Il est temps d'agir pour sécuriser votre avenir professionnel.
                </p>
                
                <div className="flex items-center justify-center text-sm">
                  {riskScore.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-accent-500 mr-1" />
                  )}
                  <span className="text-gray-600">
                    {riskScore.trend === 'up' ? '+' : '-'}{Math.abs(riskScore.current - riskScore.previous)}% vs mois dernier
                  </span>
                </div>
              </div>
            </div>
          </Widget>
        </div>

        {/* Timeline & Evolution */}
        <div className="space-y-6">
          <Widget title="Timeline prédictive">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-primary-900">Maintenant</p>
                  <p className="text-sm text-gray-600">Score actuel: {riskScore.current}%</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-primary-900">Dans 6 mois</p>
                  <p className="text-sm text-gray-600">Estimation: {riskScore.current + 5}%</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-primary-900">Dans 12 mois</p>
                  <p className="text-sm text-gray-600">Estimation: {riskScore.current + 12}%</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-primary-900">Dans {riskScore.timeline}</p>
                  <p className="text-sm text-gray-600">Impact critique prévu</p>
                </div>
              </div>
            </div>
          </Widget>

          <Widget title="Positionnement marché">
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-primary-900">Top 35%</div>
              <p className="text-gray-600">
                Vous êtes dans le top 35% des professionnels de votre métier en termes de préparation à l'IA.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-secondary h-3 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <p className="text-sm text-gray-500">
                Moyenne du secteur: 65%
              </p>
            </div>
          </Widget>
        </div>
      </div>

      {/* Score Breakdown */}
      <Widget title="Décomposition du score">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
                <circle
                  cx="48"
                  cy="48"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-gray-200"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-red-500"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 36 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 36 * (1 - riskScore.breakdown.taskAutomation / 100) }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary-900">
                    {riskScore.breakdown.taskAutomation}%
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-primary-900 mb-2">Automatisation des tâches</h3>
            <p className="text-sm text-gray-600">
              Vos tâches principales sont hautement automatisables
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
                <circle
                  cx="48"
                  cy="48"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-gray-200"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-orange-500"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 36 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 36 * (1 - riskScore.breakdown.marketSaturation / 100) }}
                  transition={{ duration: 2, delay: 0.7 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary-900">
                    {riskScore.breakdown.marketSaturation}%
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-primary-900 mb-2">Saturation du marché</h3>
            <p className="text-sm text-gray-600">
              Votre secteur voit une augmentation des solutions IA
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
                <circle
                  cx="48"
                  cy="48"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-gray-200"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-accent-500"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 36 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 36 * (1 - riskScore.breakdown.adaptiveSkills / 100) }}
                  transition={{ duration: 2, delay: 0.9 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary-900">
                    {riskScore.breakdown.adaptiveSkills}%
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-primary-900 mb-2">Compétences adaptatives</h3>
            <p className="text-sm text-gray-600">
              Vous avez développé des compétences transférables
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
                <circle
                  cx="48"
                  cy="48"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-gray-200"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-red-500"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 36 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 36 * (1 - riskScore.breakdown.sectorExposure / 100) }}
                  transition={{ duration: 2, delay: 1.1 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary-900">
                    {riskScore.breakdown.sectorExposure}%
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-primary-900 mb-2">Exposition sectorielle</h3>
            <p className="text-sm text-gray-600">
              Votre industrie est fortement impactée
            </p>
          </div>
        </div>
      </Widget>

      {/* Recommendations */}
      <Widget title="Recommandations personnalisées">
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg border-l-4 ${
                rec.priority === 'urgent' ? 'border-red-500 bg-red-50' :
                rec.priority === 'important' ? 'border-orange-500 bg-orange-50' :
                'border-accent-500 bg-accent-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {rec.priority === 'urgent' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                    {rec.priority === 'important' && <TrendingUp className="w-5 h-5 text-orange-500" />}
                    {rec.priority === 'opportunity' && <CheckCircle className="w-5 h-5 text-accent-500" />}
                    <span className={`font-semibold ${
                      rec.priority === 'urgent' ? 'text-red-700' :
                      rec.priority === 'important' ? 'text-orange-700' :
                      'text-accent-700'
                    }`}>
                      {rec.priority === 'urgent' ? 'URGENT' :
                       rec.priority === 'important' ? 'IMPORTANT' :
                       'OPPORTUNITÉ'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">{rec.title}</h3>
                  <p className="text-gray-600 mb-4">{rec.description}</p>
                </div>
                <button className="ml-4 bg-gradient-secondary text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center">
                  {rec.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Widget>
    </div>
  )
}

