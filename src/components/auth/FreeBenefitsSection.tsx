/**
 * Section Avantages Gratuits - Page Login
 * Montre la valeur offerte gratuitement par SkillShield
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Bot, Users, Sparkles } from 'lucide-react'

interface BenefitCard {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  badge: string
  highlight?: boolean
  color: string
  delay: number
}

const benefits: BenefitCard[] = [
  {
    id: 1,
    icon: <Target className="w-6 h-6" />,
    title: "Calculateur de Risque IA",
    description: "Découvrez votre score d'exposition à l'IA en moins de 2 minutes",
    badge: "GRATUIT • ILLIMITÉ",
    color: "from-cyan-500/10 to-cyan-600/5",
    delay: 0.1
  },
  {
    id: 2,
    icon: <Eye className="w-6 h-6" />,
    title: "Veille IA sur votre Secteur",
    description: "Recevez les alertes importantes qui impactent votre métier",
    badge: "GRATUIT • HEBDOMADAIRE",
    color: "from-emerald-500/10 to-emerald-600/5",
    delay: 0.2
  },
  {
    id: 3,
    icon: <Bot className="w-6 h-6" />,
    title: "Assistant IA Personnel",
    description: "Posez vos questions carrière 24/7 - Réponses instantanées et personnalisées",
    badge: "GRATUIT • 24/7",
    highlight: true,
    color: "from-purple-500/10 to-pink-500/5",
    delay: 0.3
  },
  {
    id: 4,
    icon: <Users className="w-6 h-6" />,
    title: "Communauté SkillShield",
    description: "Échangez avec des professionnels qui anticipent comme vous",
    badge: "GRATUIT • COMMUNAUTÉ",
    color: "from-blue-500/10 to-blue-600/5",
    delay: 0.4
  }
]

export const FreeBenefitsSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg 
        rounded-2xl p-8 border border-white/10 shadow-2xl shadow-cyan-500/10 mb-12"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.6 }}
          className="inline-flex items-center gap-2 text-cyan-400 font-semibold mb-4"
        >
          <Sparkles className="w-6 h-6" />
          Inclus avec votre compte SkillShield
        </motion.div>
        <p className="text-gray-400 text-lg">Accès immédiat et gratuit :</p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: benefit.delay, duration: 0.6 }}
            className={`bg-gradient-to-br ${benefit.color} backdrop-blur-md 
              rounded-xl p-6 border transition-all duration-200 hover:scale-102 hover:shadow-xl 
              ${benefit.highlight 
                ? 'border-2 border-cyan-400 shadow-cyan-500/20 hover:shadow-cyan-500/30' 
                : 'border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-cyan-500/10'
              } group relative overflow-hidden`}
          >
            {/* Special Glow for Chatbot */}
            {benefit.highlight && (
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl"
              />
            )}

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: benefit.highlight ? 5 : 0 }}
                transition={{ duration: 0.2 }}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 
                  ${benefit.highlight 
                    ? 'bg-gradient-to-br from-cyan-500 to-purple-500 text-white' 
                    : 'bg-white/10 text-cyan-400'
                  }`}
              >
                {benefit.icon}
              </motion.div>

              {/* Title */}
              <h3 className={`text-lg font-semibold mb-2 ${
                benefit.highlight ? 'text-cyan-400' : 'text-white'
              } group-hover:text-cyan-100 transition-colors`}>
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {benefit.description}
              </p>

              {/* Badge */}
              <div className="flex flex-col gap-2">
                <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-md w-fit">
                  ✅ GRATUIT
                </span>
                <span className="text-cyan-400 text-xs font-medium bg-cyan-500/10 px-2 py-1 rounded-md w-fit">
                  {benefit.badge.replace('GRATUIT • ', '')}
                </span>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
          </motion.div>
        ))}
      </div>

      {/* Bottom Accent */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      />
    </motion.div>
  )
}
