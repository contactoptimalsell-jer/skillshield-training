import React from 'react'
import { motion } from 'framer-motion'
import { Check, Shield, Zap } from 'lucide-react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { formatCurrency } from '../lib/utils'
import { useApp } from '../context/AppContext'

const plans = [
  {
    name: 'Formation',
    tagline: 'Pour maîtriser les compétences de demain',
    price: 29,
    period: '/mois',
    icon: Zap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-500',
    glassmorphism: 'bg-blue-500/5 backdrop-blur-sm',
    features: [
      'Calculateur de risque IA complet',
      'Rapport détaillé en PDF',
      'Accès à 20 formations au lancement',
      'Plan de reconversion personnalisé',
      'Support par email'
    ],
    cta: 'Commencer la formation →',
    ctaMessage: 'Idéal pour monter en compétences rapidement',
    ctaVariant: 'secondary' as const,
    recommended: false
  },
  {
    name: 'Protection Complète',
    tagline: 'Pour anticiper et transformer votre carrière',
    price: 49,
    period: '/mois',
    icon: Shield,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
    borderColor: 'border-cyan-500',
    glassmorphism: 'bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm',
    features: [
      'Tout Formation +',
      'Veille IA temps réel sur votre métier',
      'Chatbot IA 24/7 pour questions carrière',
      'Analyses sectorielles avancées',
      'Coaching mensuel avec professionnels',
      'Alertes critiques instantanées',
      'Support prioritaire'
    ],
    cta: 'Essayer 7 jours gratuits →',
    ctaMessage: 'Pour une protection totale de votre carrière',
    ctaVariant: 'accent' as const,
    recommended: true
  }
]

export const Pricing: React.FC = () => {
  const { showNotification } = useApp()

  const handlePlanClick = (planName: string) => {
    if (planName === 'Formation') {
      showNotification('Redirection vers l\'inscription Formation...', 'success')
      // TODO: Rediriger vers Stripe checkout pour Formation (29€)
      setTimeout(() => {
        window.location.href = '/auth?plan=formation'
      }, 500)
    } else if (planName === 'Protection Complète') {
      showNotification('Redirection vers l\'essai gratuit Protection Complète...', 'success')
      // TODO: Rediriger vers Stripe checkout pour Protection Complète (49€) avec essai gratuit
      setTimeout(() => {
        window.location.href = '/auth?plan=protection-complete'
      }, 500)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Pricing Cards - 2 columns desktop, stacked mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative ${plan.recommended ? 'md:scale-105 md:-mt-4' : ''}`}
          >
            {/* Recommended Badge */}
            {plan.recommended && (
              <div className="absolute -top-3 -right-3 z-10">
                <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  RECOMMANDÉ
                </span>
              </div>
            )}

            <Card 
              className={`h-full relative ${plan.recommended ? 'border-[3px]' : 'border-2'} ${plan.borderColor} ${
                plan.recommended 
                  ? 'bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 backdrop-blur-sm shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20' 
                  : `${plan.glassmorphism}`
              } hover:shadow-lg transition-all duration-300`}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${plan.bgColor} mb-4`}>
                    <plan.icon className={`w-8 h-8 ${plan.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-primary-900">
                    {plan.name}
                  </h3>
                  
                  <p className="mb-4 text-gray-600 text-sm">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary-900">
                      {formatCurrency(plan.price)}
                    </span>
                    <span className="text-gray-500 ml-2 text-xl">
                      {plan.period}
                    </span>
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
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.recommended 
                              ? (isBaseFeature ? 'text-gray-400' : 'text-cyan-500')
                              : 'text-emerald-500'
                          }`} />
                          <span className={`text-sm ${
                            isBaseFeature ? 'font-semibold text-gray-600' : 'text-gray-700'
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
                  className="mb-3"
                >
                  <Button
                    variant={plan.ctaVariant}
                    className="w-full"
                    size="lg"
                    onClick={() => handlePlanClick(plan.name)}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>

                {/* CTA Message */}
                <p className="text-xs text-gray-500 text-center">
                  {plan.ctaMessage}
                </p>
              </div>
            </Card>
          </motion.div>
          ))}
      </div>

      {/* Cancellation Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <p className="text-sm text-gray-500">
          💡 Annulation simple à tout moment
        </p>
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

    </div>
  )
}
