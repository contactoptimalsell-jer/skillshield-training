import React from 'react'
import { motion } from 'framer-motion'
import { Search, Calculator, Shield, ArrowRight } from 'lucide-react'
import { Card } from './ui/Card'
import { useApp } from '../context/AppContext'

const steps = [
  {
    icon: Search,
    title: 'Analyse de ton profil professionnel',
    description: 'Nous analysons votre métier, secteur d\'activité et niveau d\'expérience pour évaluer votre exposition aux risques IA.',
    color: 'bg-secondary-500'
  },
  {
    icon: Calculator,
    title: 'Calcul de ton score de risque IA',
    description: 'Notre algorithme calcule un score de risque personnalisé basé sur les dernières données d\'automatisation.',
    color: 'bg-accent-500'
  },
  {
    icon: Shield,
    title: 'Plan de protection personnalisé',
    description: 'Recevez des recommandations concrètes et un plan d\'action pour sécuriser votre avenir professionnel.',
    color: 'bg-primary-500'
  }
]

export const HowItWorks: React.FC = () => {
  const { openCalculator } = useApp()

  return (
    <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Comment ça marche ?
        </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En 3 étapes simples, découvrez votre niveau de risque face à l'IA 
            et obtenez un plan de protection personnalisé.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary-200 via-accent-200 to-primary-200 transform -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <Card className="text-center p-8 h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-2xl font-bold text-primary-900 mb-6">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color} text-white mb-6`}
                >
                  <step.icon className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
              <button
                onClick={() => {
                  // Rediriger vers le dashboard Sentinelle
                  window.location.href = '/sentinelle'
                }}
                className="bg-gradient-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Découvrir SkillShield Gratuitement
              </button>
          </motion.div>
        </motion.div>
      </div>
    )
}
