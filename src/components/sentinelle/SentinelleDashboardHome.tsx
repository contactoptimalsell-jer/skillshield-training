import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Eye, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  Users, 
  MessageSquare,
  ArrowRight,
  Lock,
  Star,
  Zap,
  Target,
  BookOpen
} from 'lucide-react'
import { SentinelleWidget, StatCard, ProgressBar } from './Widget'
import { UpgradeBanner, PlanBadge } from './UpgradeBanner'
import { LockOverlay } from './LockOverlay'
import { SentinelleAINewsWidget } from './SentinelleAINewsWidget'
import { Button } from '../ui/Button'
import { 
  mockSentinelleUser, 
  mockSentinelleRiskScore, 
  mockMonthlyAlert,
  mockCommunityDiscussions,
  communityStats,
  nextAlertInfo
} from '../../data/sentinelleMockData'

export const SentinelleDashboardHome: React.FC = () => {
  const user = mockSentinelleUser
  const riskScore = mockSentinelleRiskScore
  const monthlyAlert = mockMonthlyAlert
  const discussions = mockCommunityDiscussions.slice(0, 3)
  const stats = communityStats

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
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[level as keyof typeof colors] || colors['Modéré']}`}>
        {level}
      </span>
    )
  }

  const handleUpgrade = () => {
    // Navigate to plans page
    window.location.href = '/sentinelle/plans'
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold">
                Bienvenue, {user.name.split(' ')[0]} ! 👋
              </h1>
              <PlanBadge plan="Sentinelle" isCurrent={true} />
            </div>
            <p className="text-primary-100">
              Vous êtes protégé avec le plan Sentinelle. Découvrez votre risque IA et explorez nos fonctionnalités premium.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Protection Status Widget */}
      <SentinelleWidget
        title="Votre Protection Sentinelle"
        icon={<Eye className="w-5 h-5 text-white" />}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <PlanBadge plan="Sentinelle" isCurrent={true} />
              <p className="text-sm text-gray-600 mt-2">
                Membre depuis le {new Date(user.subscriptionDate).toLocaleDateString('fr-FR')}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Prochaine alerte</p>
              <p className="font-medium text-gray-900">
                {nextAlertInfo.daysLeft} jours
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Ce que vous manquez :</h4>
            <div className="space-y-1 text-sm text-blue-800">
              <div className="flex items-center space-x-2">
                <span className="text-red-500">❌</span>
                <span>Veille IA temps réel</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">❌</span>
                <span>Plan de reconversion personnalisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">❌</span>
                <span>Formations incluses</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span>Score IA de base</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span>1 alerte mensuelle</span>
              </div>
            </div>
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={handleUpgrade}
            className="w-full group"
          >
            Protégez-vous davantage avec Bouclier
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </SentinelleWidget>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Risk Score Widget */}
        <SentinelleWidget
          title="Score de Risque IA"
          icon={<Target className="w-5 h-5 text-white" />}
          headerActions={
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '/sentinelle/score'}
            >
              Voir détails
            </Button>
          }
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="relative w-20 h-20">
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
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={`text-xl font-bold ${getRiskScoreColor(riskScore.current)}`}
                  >
                    {riskScore.current}%
                  </text>
                </svg>
              </div>
              <div className="flex-1 ml-4">
                <div className="flex items-center space-x-2 mb-1">
                  {getRiskLevelBadge(riskScore.level)}
                </div>
                <p className="text-sm text-gray-600">
                  Impact estimé dans {riskScore.timeline}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Automatisation des tâches</span>
                <span className="text-sm font-medium">{riskScore.breakdown.taskAutomation}%</span>
              </div>
              <ProgressBar progress={riskScore.breakdown.taskAutomation} color="warning" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Saturation du marché</span>
                <span className="text-sm font-medium">{riskScore.breakdown.marketSaturation}%</span>
              </div>
              <ProgressBar progress={riskScore.breakdown.marketSaturation} color="danger" />
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Analyse approfondie disponible en plan Bouclier
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleUpgrade}
                className="w-full"
              >
                Débloquer l'analyse complète
              </Button>
            </div>
          </div>
        </SentinelleWidget>

        {/* Monthly Alert Widget */}
        <SentinelleWidget
          title="Votre Alerte du Mois"
          icon={<AlertTriangle className="w-5 h-5 text-white" />}
        >
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs font-medium text-yellow-800 bg-yellow-200 px-2 py-1 rounded-full">
                  ALERTE DU MOIS
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(monthlyAlert.date).toLocaleDateString('fr-FR', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              
              <h4 className="font-medium text-gray-900 mb-2">
                {monthlyAlert.title}
              </h4>
              
              <p className="text-sm text-gray-700 mb-3">
                {monthlyAlert.summary}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {monthlyAlert.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="bg-white border border-yellow-300 rounded-lg p-3 mb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Lock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Alertes temps réel disponibles avec le plan Bouclier
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
              >
                Lire l'alerte complète
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Prochaine alerte dans {nextAlertInfo.daysLeft} jours
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleUpgrade}
                className="w-full group"
              >
                Passer à Bouclier pour les alertes temps réel
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </SentinelleWidget>

        {/* AI News Widget */}
        <SentinelleAINewsWidget />

        {/* Community Widget */}
        <SentinelleWidget
          title="Découvrez la Communauté"
          icon={<Users className="w-5 h-5 text-white" />}
        >
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {stats.activeMembers.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                professionnels protégés
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Discussions populaires :</h4>
              {discussions.map((discussion) => (
                <div key={discussion.id} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {discussion.authorAvatar}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900 text-sm mb-1">
                        {discussion.title}
                      </h5>
                      <p className="text-xs text-gray-600 mb-2">
                        Par @{discussion.author} • {discussion.replies} réponses • {discussion.views} vues
                      </p>
                      <p className="text-xs text-gray-500">
                        {discussion.lastActivity}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-700 line-clamp-2">
                      {discussion.excerpt}
                    </p>
                  </div>
                  {discussion.isLocked && (
                    <div className="mt-2 flex items-center space-x-2 text-xs text-gray-500">
                      <Lock className="w-3 h-3" />
                      <span>Répondre (Bouclier requis)</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '/sentinelle/communaute'}
              className="w-full"
            >
              Rejoindre les discussions
            </Button>
          </div>
        </SentinelleWidget>
      </div>

      {/* Upgrade Banner */}
      <UpgradeBanner
        variant="card"
        title="Débloquez tout le potentiel de SkillShield"
        description="Passez au plan Bouclier et obtenez une protection complète contre l'obsolescence IA"
        benefits={[
          'Veille IA temps réel',
          'Plan de reconversion personnalisé',
          '3 mois de formations incluses',
          'Support prioritaire'
        ]}
        ctaText="Comparer les plans en détail"
        onUpgrade={handleUpgrade}
      />

      {/* Quick Actions */}
      <SentinelleWidget
        title="Actions Rapides"
        icon={<Zap className="w-5 h-5 text-white" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-auto p-4 flex flex-col items-center space-y-2"
            onClick={() => window.location.href = '/sentinelle/score'}
          >
            <Target className="w-6 h-6 text-primary-600" />
            <span className="font-medium">Voir mon score IA</span>
            <span className="text-xs text-gray-500">Analyse détaillée</span>
          </Button>

          <Button
            variant="outline"
            className="h-auto p-4 flex flex-col items-center space-y-2"
            onClick={() => window.location.href = '/sentinelle/alertes'}
          >
            <AlertTriangle className="w-6 h-6 text-primary-600" />
            <span className="font-medium">Mes alertes</span>
            <span className="text-xs text-gray-500">Dernière alerte</span>
          </Button>

          <Button
            variant="outline"
            className="h-auto p-4 flex flex-col items-center space-y-2"
            onClick={() => window.location.href = '/sentinelle/communaute'}
          >
            <MessageSquare className="w-6 h-6 text-primary-600" />
            <span className="font-medium">Communauté</span>
            <span className="text-xs text-gray-500">Discussions</span>
          </Button>

          <Button
            variant="outline"
            className="h-auto p-4 flex flex-col items-center space-y-2"
            onClick={handleUpgrade}
          >
            <Star className="w-6 h-6 text-primary-600" />
            <span className="font-medium">Découvrir Bouclier</span>
            <span className="text-xs text-gray-500">Plans premium</span>
          </Button>
        </div>
      </SentinelleWidget>
    </div>
  )
}
