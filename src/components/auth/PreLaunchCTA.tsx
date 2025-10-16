/**
 * CTA Phase Pré-inscription avec Urgence et Élévation
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Clock, Users, Star } from 'lucide-react'

interface PreLaunchCTAProps {
  onJoinWaitlist: () => void
  loading?: boolean
}

export const PreLaunchCTA: React.FC<PreLaunchCTAProps> = ({ 
  onJoinWaitlist, 
  loading = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="space-y-4"
    >
      {/* Main CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onJoinWaitlist}
        disabled={loading}
        className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 
          text-white font-bold text-lg py-4 px-8 rounded-xl shadow-2xl shadow-cyan-500/50 
          hover:shadow-cyan-500/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
          relative overflow-hidden group"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
        
        <div className="relative flex items-center justify-center gap-3">
          <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span>🚀 Oui, je veux être protégé - Rejoindre SkillShield</span>
        </div>
      </motion.button>

      {/* Urgency Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-orange-400 text-sm font-semibold">
          <Clock className="w-4 h-4" />
          <span>⏱️ Les 20 premiers bénéficient de -50% à vie.</span>
        </div>
        <div className="text-gray-400 text-sm">
          Plus que quelques places.
        </div>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex items-center justify-center gap-6 pt-4"
      >
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Users className="w-4 h-4" />
          <span>17 personnes déjà inscrites</span>
        </div>
        
        <div className="w-px h-6 bg-gray-600" />
        
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>Accès gratuit</span>
        </div>
      </motion.div>

      {/* Subtle Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10 
          rounded-xl pointer-events-none"
      />
    </motion.div>
  )
}

// CTA pour le lien "Mot de passe oublié"
export const ForgotPasswordLink: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="text-center pt-4"
    >
      <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm underline">
        Mot de passe oublié ?
      </button>
    </motion.div>
  )
}
