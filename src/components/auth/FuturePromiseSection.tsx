/**
 * Section "Ce qui vous attend" - Potentialité et Aspiration
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Shield, TrendingUp, Heart, Sparkles } from 'lucide-react'

interface PromiseItem {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  delay: number
}

const promises: PromiseItem[] = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Doubler vos opportunités professionnelles",
    description: "Des compétences qui ouvrent toutes les portes",
    color: "text-cyan-400",
    delay: 0.1
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Dormir tranquille face à l'évolution de l'IA",
    description: "Une protection proactive de votre carrière",
    color: "text-emerald-400",
    delay: 0.2
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Anticiper au lieu de subir votre carrière",
    description: "Prenez le contrôle de votre avenir",
    color: "text-purple-400",
    delay: 0.3
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Rejoindre une communauté de professionnels",
    description: "Entraide et networking de qualité",
    color: "text-pink-400",
    delay: 0.4
  }
]

export const FuturePromiseSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 text-cyan-400 font-semibold mb-2"
        >
          <Sparkles className="w-5 h-5" />
          Ce qui vous attend avec SkillShield
        </motion.div>
        <p className="text-gray-400 text-sm">Bientôt, vous pourrez :</p>
      </div>

      {/* Promise Cards */}
      <div className="space-y-4">
        {promises.map((promise, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: promise.delay, duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-lg 
              rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all duration-300 
              hover:shadow-lg hover:shadow-cyan-500/10 group"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`${promise.color} group-hover:scale-110 transition-transform duration-300`}>
                {promise.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-100 transition-colors">
                  {promise.title}
                </h3>
                <p className="text-gray-400 text-sm">{promise.description}</p>
              </div>

              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5 
                rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Accent */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      />
    </motion.div>
  )
}
