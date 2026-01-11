import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  AlertTriangle, 
  Clock, 
  Bell, 
  Lock, 
  ArrowRight,
  Calendar,
  TrendingUp,
  Users,
  Lightbulb,
  ExternalLink,
  Eye
} from 'lucide-react'
import { useProgression } from '../../hooks/useProgression'
import { SentinelleWidget } from './Widget'
import { UpgradeBanner, PlanBadge } from './UpgradeBanner'
import { Button } from '../ui/Button'
import { 
  mockSentinelleUser, 
  mockMonthlyAlert, 
  nextAlertInfo,
  plansComparison 
} from '../../data/sentinelleMockData'

export const SentinelleAlertsPage: React.FC = () => {
  const user = mockSentinelleUser
  const monthlyAlert = mockMonthlyAlert
  const { addCompletedStep } = useProgression()
  
  // Marquer first_alert_read quand on accède à la page des alertes pour la première fois
  useEffect(() => {
    addCompletedStep('first_alert_read').catch(error => {
      console.warn('Could not update progression:', error)
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <AlertTriangle className="w-5 h-5 text-red-600" />
      case 'high': return <AlertTriangle className="w-5 h-5 text-orange-600" />
      case 'moderate': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'low': return <AlertTriangle className="w-5 h-5 text-green-600" />
      default: return <AlertTriangle className="w-5 h-5 text-gray-600" />
    }
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
              <h1 className="text-2xl font-bold">Mes Alertes IA</h1>
              <PlanBadge plan="Sentinelle" isCurrent={true} />
            </div>
            <p className="text-primary-100">
              Recevez 1 alerte par mois sur les évolutions IA dans votre secteur
            </p>
          </div>
        </div>
      </div>

      {/* Plan Limitation Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Bell className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-blue-900">
              🔒 Alertes temps réel disponibles en plan Bouclier
            </h3>
            <p className="text-sm text-blue-800">
              Avec Bouclier, recevez des alertes immédiates dès qu'une nouvelle IA impacte votre métier.
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleUpgrade}
          >
            Découvrir Bouclier
          </Button>
        </div>
      </div>

      {/* Current Monthly Alert */}
      <SentinelleWidget
        title="Votre Alerte du Mois"
        icon={<AlertTriangle className="w-5 h-5 text-white" />}
      >
        <div className="space-y-6">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
            {/* Alert Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  {getSeverityIcon(monthlyAlert.severity)}
                </div>
                <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-bold text-gray-900">
                  📰 ALERTE {new Date(monthlyAlert.date).toLocaleDateString('fr-FR', { 
                    month: 'long', 
                    year: 'numeric' 
                  }).toUpperCase()}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(monthlyAlert.severity)}`}>
                  {monthlyAlert.severity === 'critical' ? '🚨 Critique' :
                   monthlyAlert.severity === 'high' ? '⚠️ Élevée' :
                   monthlyAlert.severity === 'moderate' ? '⚠️ Modérée' :
                   'ℹ️ Faible'}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Date de publication : {new Date(monthlyAlert.date).toLocaleDateString('fr-FR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
                </div>
              </div>
            </div>

            {/* Alert Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {monthlyAlert.title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {monthlyAlert.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-medium text-gray-900 mb-2">📝 Résumé complet :</h3>
              <p className="text-gray-700 leading-relaxed">
                {monthlyAlert.summary}
              </p>
            </div>

            {/* Locked Full Content Preview */}
            <div className="border border-dashed border-gray-300 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="font-medium text-gray-700">Contenu complet disponible avec Bouclier :</span>
              </div>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span>Nouvelles capacités : Traitement automatique de documents comptables</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span>Tâches automatisées : Saisie de factures (réduction estimée : 60%)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span>Impact estimé sur votre métier : Modéré à élevé</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span>Timeline d'adoption : 6-12 mois</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">💡 Ce que vous devriez faire :</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>1. Vous former aux prompts avancés pour superviser l'IA</li>
                  <li>2. Développer des compétences en analyse de données</li>
                  <li>3. Explorer les métiers complémentaires comme analyste financier</li>
                </ul>
              </div>
            </div>

            {/* Upgrade Notice */}
            <div className="bg-gradient-to-r from-secondary-50 to-accent-50 border border-secondary-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-medium text-gray-900">
                  🔒 Avec le plan Bouclier :
                </h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Alertes en temps réel (pas 1x/mois)</li>
                <li>• Plan d'action personnalisé automatique</li>
                <li>• Formations adaptées incluses</li>
                <li>• Coaching pour vous adapter</li>
              </ul>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleUpgrade}
                className="group"
              >
                Passer à Bouclier pour plus d'alertes
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </SentinelleWidget>

      {/* Next Alert */}
      <SentinelleWidget
        title="Prochaine Alerte"
        icon={<Clock className="w-5 h-5 text-white" />}
      >
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ⏳ PROCHAINE ALERTE
            </h3>
            <p className="text-gray-600 mb-4">
              Votre prochaine alerte mensuelle dans : <span className="font-bold text-blue-600">{nextAlertInfo.daysLeft} jours</span>
            </p>
            <p className="text-sm text-gray-500">
              Sujet probable : {nextAlertInfo.probableSubject}
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">
              🔒 En plan Bouclier, vous recevez :
            </h4>
            <ul className="text-sm text-blue-800 space-y-1 text-left">
              <li>• Alertes immédiates (pas d'attente)</li>
              <li>• Plusieurs alertes par semaine si nécessaire</li>
              <li>• Notifications push mobiles</li>
              <li>• Veille 24/7 sur votre métier</li>
            </ul>
          </div>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleUpgrade}
            className="group"
          >
            Activer les alertes temps réel
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </SentinelleWidget>

      {/* Alert History - Limited */}
      <SentinelleWidget
        title="Historique des Alertes"
        icon={<Eye className="w-5 h-5 text-white" />}
      >
        <div className="space-y-4">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">
              Archives limitées en plan Sentinelle
            </h3>
            <p className="text-gray-600 mb-4">
              Vous pouvez consulter vos 3 dernières alertes mensuelles
            </p>
          </div>

          {/* Mock Alert History */}
          <div className="space-y-3">
            {[
              {
                title: "L'automatisation par l'IA menace 30% des emplois administratifs",
                date: "2024-09-28T14:30:00Z",
                severity: "high"
              },
              {
                title: "Nouvelles avancées en IA éthique et responsable",
                date: "2024-09-25T09:15:00Z", 
                severity: "moderate"
              },
              {
                title: "L'IA dans la cybersécurité : nouveaux défis et opportunités",
                date: "2024-09-20T16:45:00Z",
                severity: "high"
              }
            ].map((alert, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">
                      {new Date(alert.date).toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(alert.severity)}`}>
                        {alert.severity === 'high' ? '⚠️ Élevée' :
                         alert.severity === 'moderate' ? '⚠️ Modérée' :
                         'ℹ️ Faible'}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(alert.date).toLocaleDateString('fr-FR', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm">{alert.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Lock className="w-4 h-4 text-gray-500" />
              <span className="font-medium text-gray-700">
                Archives complètes en plan Bouclier
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Accédez à tout votre historique d'alertes avec recherche et filtres avancés.
            </p>
          </div>
        </div>
      </SentinelleWidget>

      {/* Comparison Section */}
      <SentinelleWidget
        title="Comparaison : Sentinelle vs Bouclier"
        icon={<Users className="w-5 h-5 text-white" />}
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sentinelle Plan */}
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <div className="text-center mb-4">
                <PlanBadge plan="Sentinelle" isCurrent={true} className="mb-2" />
                <h3 className="font-bold text-gray-900">GRATUIT</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm">1 alerte par mois</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">❌</span>
                  <span className="text-sm">Pas de filtres</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">❌</span>
                  <span className="text-sm">Pas de notifications push</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">❌</span>
                  <span className="text-sm">Archives limitées</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">❌</span>
                  <span className="text-sm">Pas d'action automatique</span>
                </div>
              </div>
            </div>

            {/* Bouclier Plan */}
            <div className="border-2 border-secondary-500 rounded-lg p-4 bg-gradient-to-br from-secondary-50 to-accent-50">
              <div className="text-center mb-4">
                <PlanBadge plan="Bouclier" className="mb-2" />
                <h3 className="font-bold text-gray-900">49€/mois</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm">Alertes illimitées temps réel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm">Filtres avancés par gravité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm">Notifications push + email</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm">Archives complètes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm">Plan d'action personnalisé</span>
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleUpgrade}
            className="w-full group"
          >
            Débloquer les alertes temps réel
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </SentinelleWidget>

      {/* Upgrade Banner */}
      <UpgradeBanner
        variant="card"
        title="Ne restez pas dans l'incertitude"
        description="Avec Sentinelle, vous ne savez qu'une fois par mois ce qui se passe. Avec Bouclier, vous êtes alerté immédiatement et savez quoi faire."
        benefits={[
          'Alertes en temps réel',
          'Plan d\'action automatique',
          'Notifications push mobiles',
          'Veille 24/7 sur votre métier'
        ]}
        ctaText="Retrouvez votre sérénité avec Bouclier"
        onUpgrade={handleUpgrade}
      />
    </div>
  )
}
