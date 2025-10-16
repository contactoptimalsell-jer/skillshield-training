import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Clock, 
  ArrowRight,
  Star,
  CheckCircle,
  Target,
  BookOpen,
  Users,
  Calendar
} from 'lucide-react'
import { Widget, StatCard, ProgressBar, Badge, MetricCard } from './Widget'
import { AINewsWidget } from './AINewsWidget'
import { SkillsWidget } from './SkillsWidget' // Added import
import { useDashboard } from '../../context/DashboardContext'

export const DashboardHome: React.FC = () => {
  const { user, riskScore, widgets, alerts } = useDashboard()

  const protectionStatus = widgets.protectionStatus
  const weeklyAlerts = widgets.weeklyAlerts
  const formationProgress = widgets.formationProgress
  const recommendedActions = widgets.recommendedActions

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

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-secondary rounded-2xl p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2 text-slate-800">
              Bonjour {user.name.split(' ')[0]} ! 👋
            </h1>
            <p className="text-slate-600">
              Votre protection SkillShield est active. Voici un aperçu de votre situation.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-slate-600" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Score de Risque IA"
          value={`${riskScore.current}%`}
          subtitle={riskScore.level}
          trend={{
            value: Math.abs(riskScore.current - riskScore.previous),
            isPositive: riskScore.trend === 'down'
          }}
          icon={<Target className="w-6 h-6" />}
        />
        
        <MetricCard
          title="Alertes Cette Semaine"
          value={weeklyAlerts.length}
          subtitle={`${weeklyAlerts.filter(a => !a.isRead).length} non lues`}
          icon={<AlertTriangle className="w-6 h-6" />}
        />
        
        <MetricCard
          title="Formations Actives"
          value="1"
          subtitle={`${formationProgress.progress}% complété`}
          icon={<BookOpen className="w-6 h-6" />}
        />
        
        <MetricCard
          title="Temps Restant"
          value="2 mois 12 jours"
          subtitle="Formations incluses"
          icon={<Clock className="w-6 h-6" />}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Protection Status Widget */}
          <Widget
            title="Votre Protection Active"
            action={{ label: 'Voir détails', onClick: () => {} }}
          >
            <div className="flex items-center justify-between p-4 bg-gradient-secondary/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">Plan {protectionStatus.plan}</h4>
                  <p className="text-sm text-gray-600">
                    Actif depuis le {new Date(protectionStatus.subscriptionDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
              <Badge variant="success" size="md">
                Actif
              </Badge>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Prochaine facturation :</span>
              <span className="font-medium text-primary-900">
                {new Date(protectionStatus.nextBilling).toLocaleDateString('fr-FR')}
              </span>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <button className="w-full bg-gradient-secondary text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center">
                Passer à Forteresse
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </Widget>

          {/* Risk Score Widget */}
          <Widget
            title="Score de Risque IA Actuel"
            action={{ label: 'Analyse détaillée', onClick: () => {} }}
          >
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className={getRiskColor(riskScore.level)}
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - riskScore.current / 100) }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-900">
                      {riskScore.current}%
                    </div>
                    <div className="text-sm text-gray-500">Risque IA</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <Badge variant={getRiskBadgeColor(riskScore.level)} size="lg">
                  Risque {riskScore.level}
                </Badge>
              </div>
              
              <p className="text-gray-600 mb-4">
                Votre métier est modérément exposé à l'automatisation IA.
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
          </Widget>

          {/* Formation Progress Widget */}
          <Widget
            title="Progression Formation"
            action={{ label: 'Continuer', onClick: () => {} }}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-primary-900">{formationProgress.current}</h4>
                <span className="text-sm text-gray-600">{formationProgress.progress}%</span>
              </div>
              
              <ProgressBar progress={formationProgress.progress} label="Progression globale" />
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Temps restant inclus :</span>
                <span className="font-medium text-primary-900">{formationProgress.timeLeft}</span>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Prochain cours recommandé :</p>
                <p className="font-medium text-primary-900">{formationProgress.nextCourse}</p>
              </div>
            </div>
          </Widget>

          {/* AI News Widget */}
          <AINewsWidget />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Weekly Alerts Widget */}
          <Widget
            title="Alertes de la Semaine"
            action={{ label: 'Voir toutes', onClick: () => {} }}
          >
            <div className="space-y-4">
              {weeklyAlerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border-l-4 ${
                    alert.type === 'critical' ? 'border-red-500 bg-red-50' :
                    alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                    alert.type === 'opportunity' ? 'border-accent-500 bg-accent-50' :
                    'border-secondary-500 bg-secondary-50'
                  } ${!alert.isRead ? 'ring-2 ring-blue-200' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {alert.type === 'critical' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                      {alert.type === 'opportunity' && <Star className="w-4 h-4 text-accent-500" />}
                      {alert.type === 'warning' && <Clock className="w-4 h-4 text-yellow-500" />}
                      <span className={`text-xs font-medium ${
                        alert.type === 'critical' ? 'text-red-700' :
                        alert.type === 'warning' ? 'text-yellow-700' :
                        alert.type === 'opportunity' ? 'text-accent-700' :
                        'text-secondary-700'
                      }`}>
                        {alert.type.toUpperCase()}
                      </span>
                    </div>
                    {!alert.isRead && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                  </div>
                  <h4 className="font-medium text-primary-900 text-sm mb-1">
                    {alert.title}
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">
                    {alert.description}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">
                      {new Date(alert.date).toLocaleDateString('fr-FR')}
                    </span>
                    <span className="font-medium text-primary-900">
                      Impact: {alert.impactScore}/10
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Widget>

          {/* Recommended Actions Widget */}
          <Widget
            title="Actions Recommandées"
            action={{ label: 'Voir tout', onClick: () => {} }}
          >
            <div className="space-y-4">
              {recommendedActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    action.priority === 'high' ? 'bg-red-100 text-red-600' :
                    action.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {action.priority === 'high' ? (
                      <AlertTriangle className="w-4 h-4" />
                    ) : action.priority === 'medium' ? (
                      <Clock className="w-4 h-4" />
                    ) : (
                      <CheckCircle className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-primary-900 text-sm">
                      {action.title}
                    </h4>
                    <ProgressBar 
                      progress={action.progress} 
                      label="" 
                      className="mt-1"
                    />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </motion.div>
              ))}
            </div>
          </Widget>

          {/* Quick Actions */}
          <Widget title="Actions Rapides">
            <div className="space-y-3">
              <button className="w-full bg-gradient-secondary text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Continuer ma formation
              </button>
              <button className="w-full border border-secondary-300 text-secondary-600 py-3 px-4 rounded-lg font-medium hover:bg-secondary-50 transition-colors flex items-center justify-center">
                <Users className="w-4 h-4 mr-2" />
                Réserver un coaching
              </button>
              <button className="w-full border border-gray-300 text-gray-600 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Voir mon planning
              </button>
            </div>
          </Widget>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <SkillsWidget />
        </div>
      </div>
    </div>
  )
}
