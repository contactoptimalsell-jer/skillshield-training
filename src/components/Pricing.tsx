import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Shield, Zap, Crown, Building2 } from 'lucide-react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { formatCurrency } from '../lib/utils'
import { useApp } from '../context/AppContext'
import { EnterpriseContactModal } from './EnterpriseContactModal'

const plans = [
  {
    name: 'Sentinelle',
    description: 'Pour découvrir votre niveau de risque',
    price: 0,
    period: 'gratuit',
    icon: Shield,
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
    features: [
      'Calcul du score de risque IA',
      '1 alerte mensuelle sur votre secteur',
      'Accès communauté de base',
      'Rapport de base (PDF)',
      'Support par email'
    ],
    cta: 'Commencer gratuitement',
    ctaVariant: 'outline' as const,
    popular: false
  },
  {
    name: 'Bouclier',
    description: 'Protection proactive et formation',
    price: 49,
    period: '/mois',
    icon: Zap,
    color: 'text-secondary-600',
    bgColor: 'bg-secondary-100',
    features: [
      'Tout Sentinelle +',
      'Veille IA temps réel sur votre métier',
      'Plan de reconversion personnalisé',
      '3 mois de formation incluse',
      'Accès bootcamps express',
      'Support prioritaire',
      'Analyses sectorielles avancées'
    ],
    cta: 'Essayer Bouclier',
    ctaVariant: 'secondary' as const,
    popular: false
  },
  {
    name: 'Forteresse',
    description: 'Protection maximale avec garantie',
    price: 99,
    period: '/mois',
    icon: Crown,
    color: 'text-accent-600',
    bgColor: 'bg-accent-100',
    features: [
      'Tout Bouclier +',
      'Garantie de revenu : 60% du salaire pendant 6 mois',
      'Coaching carrière 1-to-1 mensuel',
      'Certifications professionnelles incluses',
      'Accès prioritaire aux jobs AI-proof',
      'Support 24/7',
      'Garantie satisfait ou remboursé'
    ],
    cta: 'Choisir Forteresse',
    ctaVariant: 'accent' as const,
    popular: true
  },
  {
    name: 'Rempart Entreprise',
    description: 'Protection collective et montée en compétences de vos équipes',
    price: null,
    period: 'Sur devis',
    priceSubtitle: 'À partir de 10 licences',
    icon: Building2,
    color: 'text-cyan-400',
    bgColor: 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10',
    features: [
      'Tout Forteresse +',
      'Dashboard RH centralisé avec analytics',
      'Suivi des scores de risque par équipe/département',
      'Rapports d\'impact IA personnalisés par service',
      'Cartographie des compétences en temps réel',
      'Licences de formation illimitées',
      'Parcours d\'upskilling sur-mesure par rôle',
      'Bootcamps privés en intra-entreprise',
      'Certifications professionnelles en volume',
      'Account Manager dédié',
      'Onboarding accompagné (1 mois)',
      'Coaching collectif mensuel',
      'Support 24/7 prioritaire avec SLA garanti',
      'Intégration SIRH (API)',
      'Conformité RGPD totale',
      'Contrat personnalisé',
      'Facturation annuelle avec remise',
      'ROI garanti ou remboursé sous 12 mois'
    ],
    cta: 'Demander une démo',
    ctaVariant: 'accent' as const,
    popular: false,
    enterprise: true
  }
]

export const Pricing: React.FC = () => {
  const { showNotification, openCalculator } = useApp()
  const [showEnterpriseModal, setShowEnterpriseModal] = useState(false)

  const handlePlanClick = (planName: string) => {
    if (planName === 'Sentinelle') {
      openCalculator()
      showNotification('Démarrage de l\'analyse gratuite !', 'success')
    } else if (planName === 'Bouclier') {
      showNotification('Redirection vers le dashboard Bouclier...', 'success')
      // Rediriger vers le dashboard après 1 seconde
      setTimeout(() => {
        window.location.href = '/welcome'
      }, 1000)
    } else if (planName === 'Forteresse') {
      showNotification(`Redirection vers l'inscription ${planName}...`, 'info')
      // Simuler une redirection après 2 secondes
      setTimeout(() => {
        showNotification('Fonctionnalité en cours de développement', 'info')
      }, 2000)
    } else if (planName === 'Rempart Entreprise') {
      setShowEnterpriseModal(true)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Choisissez votre niveau de protection
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Des solutions adaptées à votre situation professionnelle et à votre niveau de risque.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card 
              premium={plan.popular} 
              className={`h-full relative ${
                plan.enterprise 
                  ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10' 
                  : ''
              }`}
            >
              {/* Enterprise Badge */}
              {plan.enterprise && (
                <div className="absolute -top-3 right-4 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Entreprise
                  </span>
                </div>
              )}
              
              <div className="p-8 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${plan.bgColor} mb-4`}>
                    <plan.icon className={`w-8 h-8 ${plan.color}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.enterprise ? 'text-white' : 'text-primary-900'
                  }`}>
                    {plan.name}
                  </h3>
                  
                  <p className={`mb-4 ${
                    plan.enterprise ? 'text-slate-300' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    {plan.enterprise ? (
                      <div className="text-center">
                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          {plan.period}
                        </span>
                        <p className="text-sm text-slate-400 mt-1">
                          {plan.priceSubtitle}
                        </p>
                      </div>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-primary-900">
                          {plan.price === 0 ? 'Gratuit' : formatCurrency(plan.price)}
                        </span>
                        {plan.price > 0 && (
                          <span className="text-gray-500 ml-2">
                            {plan.period}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => {
                      const isBaseFeature = feature.includes('Tout') && feature.includes('+')
                      return (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            plan.enterprise 
                              ? (isBaseFeature ? 'text-slate-400' : 'text-cyan-400')
                              : 'text-accent-500'
                          }`} />
                          <span className={`text-sm ${
                            plan.enterprise 
                              ? (isBaseFeature ? 'text-slate-400' : 'text-slate-300')
                              : 'text-gray-700'
                          }`}>
                            {feature}
                          </span>
                        </motion.li>
                      )
                    })}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={plan.enterprise ? 'accent' : plan.ctaVariant}
                    className={`w-full ${
                      plan.enterprise 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 shadow-lg shadow-cyan-500/25' 
                        : ''
                    }`}
                    size="lg"
                    onClick={() => handlePlanClick(plan.name)}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 border border-white/20">
                      <Star className="w-3 h-3" />
                      Plus populaire
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
          ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-primary-900 mb-4">
            Garanties incluses dans tous les plans
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-accent-500" />
              <span>100% sécurisé</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-accent-500" />
              <span>Annulation à tout moment</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-accent-500" />
              <span>Satisfait ou remboursé</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Link */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <p className="text-gray-600">
          Des questions sur nos offres ?{' '}
          <a href="#faq" className="text-secondary-600 hover:text-secondary-700 font-medium">
            Consultez notre FAQ
          </a>
        </p>
      </motion.div>

      {/* Enterprise Contact Modal */}
      <EnterpriseContactModal 
        isOpen={showEnterpriseModal}
        onClose={() => setShowEnterpriseModal(false)}
      />
    </div>
  )
}
