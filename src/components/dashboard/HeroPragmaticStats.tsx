/**
 * Composant de Statistiques Pragmatiques pour la Hero Section
 * Version simplifiée et intégrée au design existant
 */

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Newspaper, 
  TrendingUp, 
  Users,
  Zap
} from 'lucide-react'
import { StatCard } from '../ui/StatCard'
import { usePragmaticStats } from '../../hooks/usePragmaticStats'

interface HeroPragmaticStatsProps {
  className?: string
}

export const HeroPragmaticStats: React.FC<HeroPragmaticStatsProps> = ({ className = '' }) => {
  const { stats, loading } = usePragmaticStats()

  // Données par défaut si pas de stats disponibles
  const defaultStats = {
    activiteIA: 27,
    actualites: 18,
    tendance: 1
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
        value={`${displayStats.activiteIA}%`} 
        label="activité IA détectée" 
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
export const DashboardPragmaticPreview: React.FC = () => {
  const { stats, loading } = usePragmaticStats()

  const defaultStats = {
    activiteIA: 27,
    actualites: 18,
    tendance: 1
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
      {/* Activité IA Widget */}
      <div className="bg-gradient-to-br from-cyan-500/15 to-emerald-500/15 rounded-xl p-4 border border-cyan-500/15 text-center">
        <div className="flex items-center justify-center mb-3">
          <Activity className="w-5 h-5 text-cyan-400 mr-2" />
          <h3 className="text-white font-semibold text-sm">Activité IA</h3>
        </div>
        <div className="text-2xl font-bold text-white mb-1">{displayStats.activiteIA}%</div>
        <div className="text-xs text-gray-400">
          {displayStats.activiteIA < 30 ? 'Intensité faible' : 
           displayStats.activiteIA < 70 ? 'Intensité modérée' : 'Intensité élevée'}
        </div>
        <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
          <div 
            className={`h-1.5 rounded-full ${
              displayStats.activiteIA < 30 
                ? 'bg-gradient-to-r from-emerald-500 to-green-500'
                : displayStats.activiteIA < 70
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                : 'bg-gradient-to-r from-orange-500 to-red-500'
            }`}
            style={{ width: `${displayStats.activiteIA}%` }}
          />
        </div>
      </div>

      {/* Actualités Widget */}
      <div className="bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-xl p-4 border border-orange-500/15 text-center">
        <div className="flex items-center justify-center mb-3">
          <Newspaper className="w-5 h-5 text-orange-400 mr-2" />
          <h3 className="text-white font-semibold text-sm">Actualités</h3>
        </div>
        <div className="text-2xl font-bold text-white mb-1">{displayStats.actualites}</div>
        <div className="text-xs text-gray-400">Articles emploi & IA</div>
        <div className="flex justify-center space-x-1 mt-2">
          {Array.from({ length: Math.min(Math.floor(displayStats.actualites / 5), 3) }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          ))}
        </div>
      </div>

      {/* Tendance Widget */}
      <div className="bg-gradient-to-br from-emerald-500/15 to-green-500/15 rounded-xl p-4 border border-emerald-500/15 text-center">
        <div className="flex items-center justify-center mb-3">
          <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
          <h3 className="text-white font-semibold text-sm">Tendance</h3>
        </div>
        <div className="text-2xl font-bold text-white mb-1">
          {displayStats.tendance > 0 ? '+' : ''}{displayStats.tendance}%
        </div>
        <div className="text-xs text-gray-400">Cette semaine</div>
        <div className="flex items-center justify-center mt-2">
          <div className={`text-xs mr-1 ${
            displayStats.tendance > 0 ? 'text-emerald-400' : 
            displayStats.tendance < 0 ? 'text-red-400' : 'text-gray-400'
          }`}>
            {displayStats.tendance > 0 ? '↗' : 
             displayStats.tendance < 0 ? '↘' : '→'}
          </div>
          <div className="text-xs text-gray-400">
            {displayStats.tendance > 0 ? 'En hausse' : 
             displayStats.tendance < 0 ? 'En baisse' : 'Stable'}
          </div>
        </div>
      </div>
    </div>
  )
}

