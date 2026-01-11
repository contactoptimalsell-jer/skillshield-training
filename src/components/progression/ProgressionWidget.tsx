/**
 * ============================================================================
 * COMPOSANT REACT : WIDGET DE PROGRESSION UTILISATEUR
 * ============================================================================
 * 
 * Composant pour afficher la progression utilisateur :
 * - Barre de progression
 * - Niveau actuel
 * - Prochaine action recommandée
 * 
 * ============================================================================
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Target, ArrowRight, Sparkles, TrendingUp } from 'lucide-react'
import { useProgression } from '../../hooks/useProgression'

interface ProgressionWidgetProps {
  className?: string
  showDetails?: boolean
}

/**
 * Composant widget de progression utilisateur
 */
export const ProgressionWidget: React.FC<ProgressionWidgetProps> = ({ 
  className = '',
  showDetails = true 
}) => {
  const { progression, loading, error } = useProgression()

  if (loading) {
    return (
      <div className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    )
  }

  if (error) {
    console.error('Progression error:', error)
    return (
      <div className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}>
        <p className="text-sm text-gray-500">Impossible de charger la progression</p>
        <p className="text-xs text-gray-400 mt-1">Erreur: {error.message}</p>
      </div>
    )
  }
  
  if (!progression) {
    // Progression n'existe pas encore (utilisateur nouveau) - afficher progression à 0
    return (
      <div className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Votre Progression</h3>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full border border-gray-200">
            Niveau 1
          </span>
        </div>
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-cyan-400 h-3 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-600">0 points</span>
            <span className="text-sm text-gray-600">0%</span>
          </div>
        </div>
        <div className="mt-4 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
          <p className="text-sm font-medium text-cyan-900 mb-1">Prochaine action recommandée</p>
          <p className="text-sm text-cyan-700">Complétez votre onboarding pour démarrer votre progression</p>
        </div>
      </div>
    )
  }

  const { currentLevel, percentage, totalPoints, nextRecommendedAction } = progression

  // Couleur de la barre de progression selon le niveau
  const getProgressColor = (level: number) => {
    if (level >= 7) return 'bg-purple-500'
    if (level >= 5) return 'bg-blue-500'
    if (level >= 3) return 'bg-cyan-500'
    return 'bg-cyan-400'
  }

  // Couleur du badge niveau
  const getLevelBadgeColor = (level: number) => {
    if (level >= 7) return 'bg-purple-100 text-purple-800 border-purple-200'
    if (level >= 5) return 'bg-blue-100 text-blue-800 border-blue-200'
    if (level >= 3) return 'bg-cyan-100 text-cyan-800 border-cyan-200'
    return 'bg-gray-100 text-gray-800 border-gray-200'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-sm p-6 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-cyan-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-cyan-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Ma Progression</h3>
            <p className="text-sm text-gray-500">Niveau {currentLevel}</p>
          </div>
        </div>
        
        {/* Badge Niveau */}
        <div className={`px-3 py-1 rounded-full border ${getLevelBadgeColor(currentLevel)}`}>
          <div className="flex items-center space-x-1">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold">Niveau {currentLevel}</span>
          </div>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progression</span>
          <span className="text-sm font-semibold text-gray-900">{percentage}%</span>
        </div>
        
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`h-full ${getProgressColor(currentLevel)} rounded-full`}
          />
        </div>
        
        {showDetails && (
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-gray-500">{totalPoints} points</span>
            <span className="text-xs text-gray-500">Niveau {currentLevel + 1}</span>
          </div>
        )}
      </div>

      {/* Prochaine action recommandée */}
      {nextRecommendedAction && showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-cyan-50 border border-cyan-200 rounded-lg p-4"
        >
          <div className="flex items-start space-x-3">
            <div className="p-1.5 bg-cyan-100 rounded-lg mt-0.5">
              <Target className="w-4 h-4 text-cyan-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Prochaine action
              </p>
              <p className="text-sm text-gray-700 mb-2">
                {nextRecommendedAction.label}
              </p>
              <p className="text-xs text-gray-500">
                {nextRecommendedAction.reason}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-cyan-600 mt-1" />
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
