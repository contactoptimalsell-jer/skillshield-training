/**
 * Widget de Statistiques Simplifié pour la Hero Section
 * Version allégée du DynamicStatsWidget pour l'affichage principal
 */

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Target, 
  TrendingUp, 
  Users,
  Zap
} from 'lucide-react'
import { StatCard } from '../ui/StatCard'
import { useStats } from '../../hooks/useStats'

interface HeroStatsWidgetProps {
  className?: string
}

export const HeroStatsWidget: React.FC<HeroStatsWidgetProps> = ({ className = '' }) => {
  const { stats, loading } = useStats()

  // Données par défaut si pas de stats disponibles
  const defaultStats = {
    scoreIA: 67,
    alertes: 3,
    progression: 12
  }

  const displayStats = stats || defaultStats

  if (loading) {
    return (
      <div className={`flex flex-col space-y-6 items-center justify-center ${className}`}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-64 h-24 bg-slate-800/30 rounded-xl animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className={`flex flex-col space-y-6 items-center justify-center ${className}`}>
      <StatCard 
        icon={<Users />} 
        value="17" 
        label="professionnels protégés" 
        delay={0}
        animated={true}
      />
      
      <StatCard 
        icon={<TrendingUp />} 
        value={`${displayStats.scoreIA}%`} 
        label="risque IA moyen détecté" 
        delay={0.1}
        animated={true}
      />
      
      <StatCard 
        icon={<Zap />} 
        value="3min" 
        label="pour votre score gratuit" 
        delay={0.2}
        animated={true}
      />
    </div>
  )
}

// Composant pour les widgets du dashboard preview dans la Hero
export const DashboardPreviewWidgets: React.FC = () => {
  const { stats, loading } = useStats()

  const defaultStats = {
    scoreIA: 67,
    alertes: 3,
    progression: 12
  }

  const displayStats = stats || defaultStats

  if (loading) {
    return (
      <div className="flex flex-col space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-slate-700/50 rounded-xl p-4 h-24 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-4">
      {/* Score Widget */}
      <div className="bg-gradient-to-br from-cyan-500/15 to-emerald-500/15 rounded-xl p-4 border border-cyan-500/15 text-center">
        <div className="flex items-center justify-center mb-3">
          <Shield className="w-5 h-5 text-cyan-400 mr-2" />
          <h3 className="text-white font-semibold text-sm">Score IA</h3>
        </div>
        <div className="text-2xl font-bold text-white mb-1">{displayStats.scoreIA}%</div>
        <div className="text-xs text-gray-400">
          {displayStats.scoreIA < 40 ? 'Risque faible' : 
           displayStats.scoreIA < 70 ? 'Risque modéré' : 'Risque élevé'}
        </div>
        <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
          <div 
            className={`h-1.5 rounded-full ${
              displayStats.scoreIA < 40 
                ? 'bg-gradient-to-r from-emerald-500 to-green-500'
                : displayStats.scoreIA < 70
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                : 'bg-gradient-to-r from-orange-500 to-red-500'
            }`}
            style={{ width: `${displayStats.scoreIA}%` }}
          />
        </div>
      </div>

      {/* Alertes Widget */}
      <div className="bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-xl p-4 border border-orange-500/15 text-center">
        <div className="flex items-center justify-center mb-3">
          <Target className="w-5 h-5 text-orange-400 mr-2" />
          <h3 className="text-white font-semibold text-sm">Alertes</h3>
        </div>
        <div className="text-2xl font-bold text-white mb-1">{displayStats.alertes}</div>
        <div className="text-xs text-gray-400">Nouvelles cette semaine</div>
        <div className="flex justify-center space-x-1 mt-2">
          {Array.from({ length: Math.min(displayStats.alertes, 3) }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          ))}
        </div>
      </div>

      {/* Progression Widget */}
      <div className="bg-gradient-to-br from-emerald-500/15 to-green-500/15 rounded-xl p-4 border border-emerald-500/15 text-center">
        <div className="flex items-center justify-center mb-3">
          <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
          <h3 className="text-white font-semibold text-sm">Progression</h3>
        </div>
        <div className="text-2xl font-bold text-white mb-1">
          {displayStats.progression > 0 ? '+' : ''}{displayStats.progression}%
        </div>
        <div className="text-xs text-gray-400">Cette semaine</div>
        <div className="flex items-center justify-center mt-2">
          <div className={`text-xs mr-1 ${
            displayStats.progression > 0 ? 'text-emerald-400' : 
            displayStats.progression < 0 ? 'text-red-400' : 'text-gray-400'
          }`}>
            {displayStats.progression > 0 ? '↗' : 
             displayStats.progression < 0 ? '↘' : '→'}
          </div>
          <div className="text-xs text-gray-400">
            {displayStats.progression > 0 ? 'En amélioration' : 
             displayStats.progression < 0 ? 'En baisse' : 'Stable'}
          </div>
        </div>
      </div>
    </div>
  )
}

