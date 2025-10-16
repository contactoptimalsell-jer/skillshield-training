import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  TrendingUp, 
  TrendingDown, 
  Lock, 
  ArrowRight,
  Calendar,
  BarChart3,
  Users,
  Lightbulb,
  Clock
} from 'lucide-react'
import { SentinelleWidget, ProgressBar } from './Widget'
import { UpgradeBanner, PlanBadge } from './UpgradeBanner'
import { LockOverlay, FeatureLock } from './LockOverlay'
import { Button } from '../ui/Button'
import { mockSentinelleUser, mockSentinelleRiskScore } from '../../data/sentinelleMockData'

export const SentinelleScorePage: React.FC = () => {
  const user = mockSentinelleUser
  const riskScore = mockSentinelleRiskScore

  const getRiskScoreColor = (score: number) => {
    if (score > 70) return 'text-red-500'
    if (score > 50) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getRiskLevelBadge = (level: string) => {
    const colors = {
      'Faible': 'bg-green-100 text-green-800',
      'Modéré': 'bg-yellow-100 text-yellow-800',
      'Élevé': 'bg-orange-100 text-orange-800',
      'Critique': 'bg-red-100 text-red-800'
    }
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[level as keyof typeof colors] || colors['Modéré']}`}>
        {level}
      </span>
    )
  }

  const handleUpgrade = () => {
    window.location.href = '/sentinelle/plans'
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold">Mon Score IA</h1>
              <PlanBadge plan="Sentinelle" isCurrent={true} />
            </div>
            <p className="text-primary-100">
              Analyse de base de votre risque d'obsolescence IA
            </p>
          </div>
        </div>
      </div>

      {/* Main Score Display */}
      <SentinelleWidget
        title="Votre Score de Risque IA"
        icon={<Target className="w-5 h-5 text-white" />}
      >
        <div className="text-center space-y-6">
          {/* Large Gauge */}
          <div className="relative w-48 h-48 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 stroke-current"
                strokeWidth="8"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              />
              <motion.circle
                className={`${getRiskScoreColor(riskScore.current)} stroke-current`}
                strokeWidth="8"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (riskScore.current / 100) * 251.2}
                strokeLinecap="round"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (riskScore.current / 100) * 251.2 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                className={`text-3xl font-bold ${getRiskScoreColor(riskScore.current)}`}
              >
                {riskScore.current}%
              </text>
            </svg>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              {getRiskLevelBadge(riskScore.level)}
            </div>
            <p className="text-lg text-gray-600">
              Timeline prédictive : Impact IA estimé dans {riskScore.timeline}
            </p>
            <p className="text-gray-500">
              Votre métier de {user.job} dans le secteur {user.sector} est modérément exposé
            </p>
          </div>
        </div>
      </SentinelleWidget>

      {/* Limited Features Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-blue-900 mb-2">
              💡 Vous voyez la version de base de votre score
            </h3>
            <p className="text-blue-800 mb-4">
              Avec le plan Bouclier, débloquez une analyse complète et des recommandations personnalisées.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <h4 className="font-medium text-blue-900">Ce qui vous attend avec Bouclier :</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>✅ Graphique d'évolution sur 12 mois</li>
                  <li>✅ Décomposition détaillée par facteur</li>
                  <li>✅ Recommandations personnalisées</li>
                  <li>✅ Comparaison avec le marché</li>
                  <li>✅ Mises à jour en temps réel</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-blue-900">Analyse approfondie :</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>✅ Impact par type de tâche</li>
                  <li>✅ Tendances sectorielles</li>
                  <li>✅ Compétences à développer</li>
                  <li>✅ Opportunités de reconversion</li>
                  <li>✅ Roadmap personnalisée</li>
                </ul>
              </div>
            </div>

            <Button
              variant="secondary"
              size="lg"
              onClick={handleUpgrade}
              className="group"
            >
              Upgrader vers Bouclier
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Risk Factors - Basic Version */}
      <SentinelleWidget
        title="Facteurs de Risque"
        icon={<BarChart3 className="w-5 h-5 text-white" />}
      >
        <div className="space-y-6">
          {/* Available Factors */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Automatisation des tâches</span>
                <span className="text-sm font-bold text-gray-900">{riskScore.breakdown.taskAutomation}%</span>
              </div>
              <ProgressBar progress={riskScore.breakdown.taskAutomation} color="warning" />
              <p className="text-xs text-gray-600 mt-1">
                Vos tâches sont hautement automatisables
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Saturation du marché</span>
                <span className="text-sm font-bold text-gray-900">{riskScore.breakdown.marketSaturation}%</span>
              </div>
              <ProgressBar progress={riskScore.breakdown.marketSaturation} color="danger" />
              <p className="text-xs text-gray-600 mt-1">
                Votre secteur voit une augmentation des solutions IA
              </p>
            </div>
          </div>

          {/* Locked Factors */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-medium text-gray-900 mb-4">Facteurs avancés (Bouclier requis)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeatureLock
                title="Compétences adaptatives"
                description="Débloquer avec Bouclier"
                icon={<TrendingUp className="w-6 h-6 text-gray-500" />}
              />
              <FeatureLock
                title="Exposition sectorielle"
                description="Débloquer avec Bouclier"
                icon={<Users className="w-6 h-6 text-gray-500" />}
              />
            </div>
          </div>
        </div>
      </SentinelleWidget>

      {/* Evolution Graph - Locked */}
      <SentinelleWidget
        title="Évolution de votre Score"
        icon={<Calendar className="w-5 h-5 text-white" />}
        isLocked={true}
        lockTitle="Graphique d'évolution détaillé"
        lockDescription="Visualisez l'évolution de votre risque IA sur 12 mois avec des tendances et prédictions"
      >
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Graphique d'évolution</p>
          </div>
        </div>
      </SentinelleWidget>

      {/* Recommendations - Limited */}
      <SentinelleWidget
        title="Recommandations"
        icon={<Lightbulb className="w-5 h-5 text-white" />}
      >
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-medium text-yellow-900 mb-2">💡 Recommandations génériques</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-yellow-600 text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Développer des compétences complémentaires</p>
                  <p className="text-sm text-gray-600">
                    Explorez des domaines liés à votre métier qui sont moins automatisables
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-yellow-600 text-sm">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Se tenir informé des évolutions</p>
                  <p className="text-sm text-gray-600">
                    Suivez les tendances IA dans votre secteur pour anticiper les changements
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Lock className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-gray-700">
                Recommandations personnalisées disponibles en plan Bouclier
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Obtenez un plan d'action détaillé adapté à votre profil, avec des formations spécifiques et un roadmap de reconversion.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleUpgrade}
              className="w-full"
            >
              Débloquer les recommandations personnalisées
            </Button>
          </div>
        </div>
      </SentinelleWidget>

      {/* Upgrade CTA */}
      <UpgradeBanner
        variant="prominent"
        title="Obtenez votre plan d'action complet"
        description="Le plan Bouclier vous donne accès à une analyse détaillée et des recommandations personnalisées pour sécuriser votre avenir professionnel."
        benefits={[
          'Analyse détaillée de votre risque',
          'Roadmap de reconversion personnalisée',
          'Formations pour vous adapter',
          'Alertes temps réel sur votre secteur'
        ]}
        ctaText="Passer à Bouclier"
        onUpgrade={handleUpgrade}
      />

      {/* Quick Actions */}
      <SentinelleWidget
        title="Actions Rapides"
        icon={<Clock className="w-5 h-5 text-white" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            variant="outline"
            className="h-auto p-4 flex flex-col items-center space-y-2"
            onClick={() => window.location.href = '/sentinelle/alertes'}
          >
            <TrendingUp className="w-6 h-6 text-primary-600" />
            <span className="font-medium">Mes alertes</span>
            <span className="text-xs text-gray-500">Suivi mensuel</span>
          </Button>

          <Button
            variant="outline"
            className="h-auto p-4 flex flex-col items-center space-y-2"
            onClick={() => window.location.href = '/sentinelle/communaute'}
          >
            <Users className="w-6 h-6 text-primary-600" />
            <span className="font-medium">Communauté</span>
            <span className="text-xs text-gray-500">Conseils d'experts</span>
          </Button>

          <Button
            variant="outline"
            className="h-auto p-4 flex flex-col items-center space-y-2"
            onClick={handleUpgrade}
          >
            <Target className="w-6 h-6 text-primary-600" />
            <span className="font-medium">Plan Bouclier</span>
            <span className="text-xs text-gray-500">Analyse complète</span>
          </Button>
        </div>
      </SentinelleWidget>
    </div>
  )
}

