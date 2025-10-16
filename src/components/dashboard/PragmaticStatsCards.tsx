/**
 * Composant de Cartes de Statistiques Pragmatiques SkillShield
 * 3 métriques claires avec explications en une phrase
 */

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Activity, 
  Newspaper, 
  TrendingUp, 
  RefreshCw,
  Clock,
  Info
} from 'lucide-react'
import { pragmaticStatsService, type PragmaticStats } from '../../services/pragmaticStatsService'

interface PragmaticStatsCardsProps {
  className?: string
  showRefresh?: boolean
  autoRefresh?: boolean
  refreshInterval?: number
}

export const PragmaticStatsCards: React.FC<PragmaticStatsCardsProps> = ({
  className = '',
  showRefresh = true,
  autoRefresh = false,
  refreshInterval = 300000 // 5 minutes
}) => {
  const [stats, setStats] = useState<PragmaticStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Charger les statistiques au montage du composant
  useEffect(() => {
    loadStats()
    
    if (autoRefresh) {
      const interval = setInterval(loadStats, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [autoRefresh, refreshInterval])

  const loadStats = async () => {
    try {
      setRefreshing(true)
      setError(null)
      
      // Vérifier d'abord si on a des stats récentes (moins de 2 heures)
      const latestStats = pragmaticStatsService.getLatestPragmaticStats()
      const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000)
      
      if (latestStats && new Date(latestStats.date + ' ' + latestStats.lastUpdate) > twoHoursAgo) {
        console.log('📊 Utilisation des stats pragmatiques en cache')
        setStats(latestStats)
        setLoading(false)
        setRefreshing(false)
        return
      }

      // Collecter de nouvelles statistiques
      console.log('🔄 Collecte de nouvelles statistiques pragmatiques...')
      const newStats = await pragmaticStatsService.collectPragmaticStats()
      
      // Sauvegarder les nouvelles stats
      await pragmaticStatsService.savePragmaticStats(newStats)
      
      setStats(newStats)
      setLoading(false)
      
    } catch (err) {
      console.error('Erreur chargement stats pragmatiques:', err)
      setError('Erreur lors du chargement des statistiques')
      
      // Fallback sur les stats stockées
      const fallbackStats = pragmaticStatsService.getLatestPragmaticStats()
      if (fallbackStats) {
        setStats(fallbackStats)
      }
      
      setLoading(false)
    } finally {
      setRefreshing(false)
    }
  }

  const handleRefresh = () => {
    loadStats()
  }

  const explanations = pragmaticStatsService.getPragmaticExplanations()
  const nextUpdate = pragmaticStatsService.getNextUpdateTime()

  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
            <div className="flex items-start justify-between mb-4">
              <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
              <div className="w-6 h-6 bg-slate-700 rounded"></div>
            </div>
            <div className="w-20 h-8 bg-slate-700 rounded mb-2"></div>
            <div className="w-32 h-4 bg-slate-700 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!stats) {
    return (
      <div className={`bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30 ${className}`}>
        <div className="text-center">
          <Info className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2">Erreur de chargement</h3>
          <p className="text-gray-400 mb-4">Impossible de charger les statistiques</p>
          <button
            onClick={handleRefresh}
            className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors"
          >
            Réessayer
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header avec refresh */}
      {showRefresh && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Dernière mise à jour : {stats.lastUpdate}</span>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            Actualiser
          </button>
        </div>
      )}

      {/* Cartes de Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Activité IA Globale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700 
            rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <Activity className="w-8 h-8 text-cyan-400" />
            <AnimatePresence>
              {!refreshing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs text-emerald-400">Live</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="text-gray-400 text-sm mb-1">Activité IA</div>
          <div className="text-4xl font-bold text-white mb-2">{stats.activiteIA}%</div>
          
          {/* Barre de progression */}
          <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.activiteIA}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`h-2 rounded-full ${
                stats.activiteIA < 30 
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500'
                  : stats.activiteIA < 70
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                  : 'bg-gradient-to-r from-orange-500 to-red-500'
              }`}
            />
          </div>
          
          {/* Tooltip explicatif */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 
            text-xs text-gray-400 italic">
            {explanations.activiteIA}
          </div>
        </motion.div>

        {/* Actualités Emploi & IA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700 
            rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <Newspaper className="w-8 h-8 text-orange-400" />
          </div>
          
          <div className="text-gray-400 text-sm mb-1">Actualités</div>
          <div className="text-4xl font-bold text-white mb-2">{stats.actualites}</div>
          
          {/* Indicateurs visuels */}
          <div className="flex justify-start space-x-1 mb-4">
            {Array.from({ length: Math.min(Math.floor(stats.actualites / 5), 5) }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="w-2 h-2 bg-orange-500 rounded-full"
              />
            ))}
          </div>
          
          {/* Tooltip explicatif */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 
            text-xs text-gray-400 italic">
            {explanations.actualites}
          </div>
        </motion.div>

        {/* Évolution Hebdomadaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700 
            rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-emerald-400" />
            <span className={`text-2xl ${
              stats.tendance > 0 ? 'text-emerald-400' : 
              stats.tendance < 0 ? 'text-red-400' : 'text-gray-400'
            }`}>
              {stats.tendance > 0 ? '↗' : stats.tendance < 0 ? '↘' : '→'}
            </span>
          </div>
          
          <div className="text-gray-400 text-sm mb-1">Tendance</div>
          <div className={`text-4xl font-bold mb-2 ${
            stats.tendance > 0 ? 'text-emerald-400' : 
            stats.tendance < 0 ? 'text-red-400' : 'text-gray-400'
          }`}>
            {stats.tendance > 0 ? '+' : ''}{stats.tendance}%
          </div>
          
          {/* Indicateur de tendance */}
          <div className={`text-xs mb-4 ${
            stats.tendance > 0 ? 'text-emerald-400' : 
            stats.tendance < 0 ? 'text-red-400' : 'text-gray-400'
          }`}>
            {stats.tendance > 0 ? 'En hausse cette semaine' : 
             stats.tendance < 0 ? 'En baisse cette semaine' : 'Stable cette semaine'}
          </div>
          
          {/* Tooltip explicatif */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 
            text-xs text-gray-400 italic">
            {explanations.tendance}
          </div>
        </motion.div>
      </div>

      {/* Footer avec informations de mise à jour */}
      <div className="text-center">
        <p className="text-xs text-gray-500">
          Dernière mise à jour : {stats.date} • Prochaine actualisation : {nextUpdate}
        </p>
      </div>

      {/* Message d'erreur */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/30 rounded-lg p-3"
        >
          <div className="flex items-center gap-2 text-red-400 text-sm">
            <Info className="w-4 h-4" />
            {error}
          </div>
        </motion.div>
      )}
    </div>
  )
}

