import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Crown, 
  Check, 
  X, 
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Clock,
  Target,
  BookOpen,
  MessageSquare,
  Bell,
  Heart,
  BarChart3
} from 'lucide-react'
import { SentinelleWidget } from './Widget'
import { PlanBadge } from './UpgradeBanner'
import { Button } from '../ui/Button'
import { 
  mockSentinelleUser,
  plansComparison,
  testimonials
} from '../../data/sentinelleMockData'

export const SentinellePlansPage: React.FC = () => {
  const user = mockSentinelleUser
  const plans = plansComparison

  const handleSelectPlan = (planName: string) => {
    if (planName === 'Bouclier') {
      // Simulate upgrade to Bouclier
      window.location.href = '/dashboard' // Redirect to Bouclier dashboard
    } else if (planName === 'Forteresse') {
      // Simulate upgrade to Forteresse
      window.location.href = '/dashboard' // Redirect to Forteresse dashboard
    }
  }

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <X className="w-5 h-5 text-gray-400" />
      )
    }
    
    if (typeof value === 'object' && value.value) {
      return (
        <div className="text-center">
          <Check className="w-5 h-5 text-green-500 mx-auto mb-1" />
          <span className="text-xs text-gray-600">{value.limit || value.type || ''}</span>
        </div>
      )
    }
    
    return <X className="w-5 h-5 text-gray-400" />
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">
            Choisissez votre niveau de protection
          </h1>
          <p className="text-xl text-primary-100 mb-6">
            Investissez dans votre avenir professionnel face à l'IA
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Annulable à tout moment</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Support 24/7</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Plans Comparison Table */}
      <SentinelleWidget
        title="Comparaison des Plans"
        icon={<Shield className="w-5 h-5 text-white" />}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-medium text-gray-900">
                  Fonctionnalités
                </th>
                <th className="text-center py-4 px-4">
                  <div className="space-y-2">
                    <PlanBadge plan="Sentinelle" isCurrent={true} />
                    <div className="font-bold text-gray-900">GRATUIT</div>
                  </div>
                </th>
                <th className="text-center py-4 px-4 bg-gradient-to-br from-secondary-50 to-accent-50">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-xs font-medium bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                        Populaire
                      </span>
                    </div>
                    <PlanBadge plan="Bouclier" />
                    <div className="font-bold text-gray-900">49€/mois</div>
                  </div>
                </th>
                <th className="text-center py-4 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                        Premium
                      </span>
                    </div>
                    <PlanBadge plan="Forteresse" />
                    <div className="font-bold text-gray-900">99€/mois</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Analysis & Monitoring */}
              <tr className="border-b border-gray-100">
                <td colSpan={4} className="py-3 px-4">
                  <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>📊 ANALYSE & VEILLE</span>
                  </h3>
                </td>
              </tr>
              {[
                'Score IA basique',
                'Analyse détaillée',
                'Alertes mensuelles',
                'Veille temps réel',
                'Analyses sectorielles'
              ].map((feature) => (
                <tr key={feature} className="border-b border-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-700">{feature}</td>
                  <td className="py-3 px-4 text-center">
                    {renderFeatureValue(plans.sentinelle.features[feature])}
                  </td>
                  <td className="py-3 px-4 text-center bg-gradient-to-br from-secondary-50/50 to-accent-50/50">
                    {renderFeatureValue(plans.bouclier.features[feature])}
                  </td>
                  <td className="py-3 px-4 text-center bg-gradient-to-br from-yellow-50/50 to-orange-50/50">
                    {renderFeatureValue(plans.forteresse.features[feature])}
                  </td>
                </tr>
              ))}

              {/* Training & Reconversion */}
              <tr className="border-b border-gray-100">
                <td colSpan={4} className="py-3 px-4">
                  <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>🎓 FORMATION & RECONVERSION</span>
                  </h3>
                </td>
              </tr>
              {[
                'Plan reconversion',
                'Formations incluses',
                'Bootcamps express',
                'Certifications'
              ].map((feature) => (
                <tr key={feature} className="border-b border-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-700">{feature}</td>
                  <td className="py-3 px-4 text-center">
                    {renderFeatureValue(plans.sentinelle.features[feature])}
                  </td>
                  <td className="py-3 px-4 text-center bg-gradient-to-br from-secondary-50/50 to-accent-50/50">
                    {renderFeatureValue(plans.bouclier.features[feature])}
                  </td>
                  <td className="py-3 px-4 text-center bg-gradient-to-br from-yellow-50/50 to-orange-50/50">
                    {renderFeatureValue(plans.forteresse.features[feature])}
                  </td>
                </tr>
              ))}

              {/* Financial Protection */}
              <tr className="border-b border-gray-100">
                <td colSpan={4} className="py-3 px-4">
                  <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>💰 PROTECTION FINANCIÈRE</span>
                  </h3>
                </td>
              </tr>
              {[
                'Garantie de revenu',
                'Assurance impact IA'
              ].map((feature) => (
                <tr key={feature} className="border-b border-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-700">{feature}</td>
                  <td className="py-3 px-4 text-center">
                    {renderFeatureValue(plans.sentinelle.features[feature])}
                  </td>
                  <td className="py-3 px-4 text-center bg-gradient-to-br from-secondary-50/50 to-accent-50/50">
                    {renderFeatureValue(plans.bouclier.features[feature])}
                  </td>
                  <td className="py-3 px-4 text-center bg-gradient-to-br from-yellow-50/50 to-orange-50/50">
                    {renderFeatureValue(plans.forteresse.features[feature])}
                  </td>
                </tr>
              ))}

              {/* Support */}
              <tr className="border-b border-gray-100">
                <td colSpan={4} className="py-3 px-4">
                  <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>🤝 ACCOMPAGNEMENT</span>
                  </h3>
                </td>
              </tr>
              {[
                'Support email',
                'Coaching 1-to-1',
                'Jobs AI-proof'
              ].map((feature) => (
                <tr key={feature} className="border-b border-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-700">{feature}</td>
                  <td className="py-3 px-4 text-center">
                    {renderFeatureValue(plans.sentinelle.features[feature])}
                  </td>
                  <td className="py-3 px-4 text-center bg-gradient-to-br from-secondary-50/50 to-accent-50/50">
                    {renderFeatureValue(plans.bouclier.features[feature])}
                  </td>
                  <td className="py-3 px-4 text-center bg-gradient-to-br from-yellow-50/50 to-orange-50/50">
                    {renderFeatureValue(plans.forteresse.features[feature])}
                  </td>
                </tr>
              ))}

              {/* Community */}
              <tr className="border-b border-gray-100">
                <td colSpan={4} className="py-3 px-4">
                  <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>👥 COMMUNAUTÉ</span>
                  </h3>
                </td>
              </tr>
              {[
                'Lecture discussions',
                'Participation active',
                'Messages privés',
                'Events exclusifs'
              ].map((feature) => (
                <tr key={feature} className="border-b border-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-700">{feature}</td>
                  <td className="py-3 px-4 text-center">
                    {renderFeatureValue(plans.sentinelle.features[feature])}
                  </td>
                  <td className="py-3 px-4 text-center bg-gradient-to-br from-secondary-50/50 to-accent-50/50">
                    {renderFeatureValue(plans.bouclier.features[feature])}
                  </td>
                  <td className="py-3 px-4 text-center bg-gradient-to-br from-yellow-50/50 to-orange-50/50">
                    {renderFeatureValue(plans.forteresse.features[feature])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Button
            variant="outline"
            size="lg"
            className="h-auto p-6 flex flex-col items-center space-y-2"
          >
            <Shield className="w-8 h-8 text-gray-600" />
            <span className="font-medium">Rester Gratuit</span>
            <span className="text-xs text-gray-500">Continuer en Sentinelle</span>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => handleSelectPlan('Bouclier')}
            className="h-auto p-6 flex flex-col items-center space-y-2 group relative"
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Populaire
              </span>
            </div>
            <Zap className="w-8 h-8 text-white" />
            <span className="font-medium">CHOISIR - 49€</span>
            <span className="text-xs text-white/80">Plan Bouclier</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => handleSelectPlan('Forteresse')}
            className="h-auto p-6 flex flex-col items-center space-y-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50"
          >
            <Crown className="w-8 h-8 text-yellow-600" />
            <span className="font-medium">CHOISIR - 99€</span>
            <span className="text-xs text-gray-500">Plan Forteresse</span>
          </Button>
        </div>
      </SentinelleWidget>

      {/* Why Upgrade Now Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SentinelleWidget
          title="😰 Ne restez pas dans l'incertitude"
          icon={<Clock className="w-5 h-5 text-white" />}
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-gray-700">
              Avec Sentinelle, vous ne savez qu'une fois par mois ce qui se passe.
              Avec Bouclier, vous êtes alerté immédiatement et savez quoi faire.
            </p>
            <div className="text-center">
              <span className="text-sm font-medium text-blue-600">→ Retrouvez votre sérénité</span>
            </div>
          </div>
        </SentinelleWidget>

        <SentinelleWidget
          title="🎯 Passez à l'action concrètement"
          icon={<Target className="w-5 h-5 text-white" />}
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-gray-700">
              Avec Sentinelle, vous savez que vous êtes à risque.
              Avec Bouclier, vous avez un plan clair et les formations pour vous adapter.
            </p>
            <div className="text-center">
              <span className="text-sm font-medium text-blue-600">→ Prenez le contrôle de votre avenir</span>
            </div>
          </div>
        </SentinelleWidget>

        <SentinelleWidget
          title="💪 Rejoignez ceux qui réussissent"
          icon={<TrendingUp className="w-5 h-5 text-white" />}
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-700">
              78% des membres Bouclier/Forteresse réussissent leur transition.
              Ils avaient votre profil il y a quelques mois.
            </p>
            <div className="text-center">
              <span className="text-sm font-medium text-blue-600">→ Faites partie des gagnants de l'ère IA</span>
            </div>
          </div>
        </SentinelleWidget>
      </div>

      {/* Testimonials */}
      <SentinelleWidget
        title="Témoignages de membres upgradés"
        icon={<Star className="w-5 h-5 text-white" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mt-1">
                    {testimonial.plan}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SentinelleWidget>

      {/* FAQ */}
      <SentinelleWidget
        title="Questions Fréquentes"
        icon={<MessageSquare className="w-5 h-5 text-white" />}
      >
        <div className="space-y-6">
          {[
            {
              question: "Puis-je annuler à tout moment ?",
              answer: "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre tableau de bord. Aucun engagement, aucune question posée."
            },
            {
              question: "Y a-t-il un engagement ?",
              answer: "Non, tous nos plans sont sans engagement. Vous payez mois par mois et pouvez arrêter quand vous voulez."
            },
            {
              question: "Que se passe-t-il si je downgrade ?",
              answer: "Vous gardez l'accès à votre plan payant jusqu'à la fin du mois en cours, puis vous passez automatiquement au plan Sentinelle gratuit."
            },
            {
              question: "Y a-t-il une offre d'essai ?",
              answer: "Oui ! Première semaine Bouclier à 1€ seulement, puis 49€/mois. Annulable à tout moment."
            }
          ].map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
              <p className="text-gray-700 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </SentinelleWidget>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-secondary-500 to-accent-500 text-white rounded-2xl p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            🚀 Prêt à protéger votre carrière ?
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Offre limitée : Première semaine Bouclier à 1€ seulement
          </p>
          <p className="text-white/80 mb-8">
            Puis 49€/mois, annulable à tout moment
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleSelectPlan('Bouclier')}
              className="bg-white text-secondary-600 hover:bg-gray-100 border-white font-semibold group"
            >
              Essayer Bouclier pour 1€
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/sentinelle'}
            >
              Non merci, je reste en Sentinelle
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
