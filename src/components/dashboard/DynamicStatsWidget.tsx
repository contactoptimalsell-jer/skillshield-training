/**
 * Widget de Statistiques Dynamiques SkillShield
 * Affiche des données réelles collectées depuis des APIs externes
 */

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, 
  Target, 
  TrendingUp, 
  Activity,
  AlertTriangle,
  RefreshCw,
  CheckCircle,
  Clock
} from 'lucide-react'
import { statsService, type StatsData } from '../../services/statsService'

interface DynamicStatsWidgetProps {
  className?: string
  showRefresh?: boolean
  autoRefresh?: boolean
  refreshInterval?: number // en millisecondes
}

export const DynamicStatsWidget: React.FC<DynamicStatsWidgetProps> = ({
  className = '',
  showRefresh = true,
  autoRefresh = false,
  refreshInterval = 300000 // 5 minutes par défaut
}) => {
  const [stats, setStats] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)
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
      
      // Vérifier d'abord si on a des stats récentes (moins de 1 heure)
      const latestStats = statsService.getLatestStats()
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
      
      if (latestStats && new Date(latestStats.date) > oneHourAgo) {
        console.log('📊 Utilisation des stats en cache')
        setStats(latestStats)
        setLastUpdate(new Date(latestStats.date))
        setLoading(false)
        setRefreshing(false)
        return
      }

      // Collecter de nouvelles statistiques
      console.log('🔄 Collecte de nouvelles statistiques...')
      const newStats = await statsService.collectAllStats()
      
      // Sauvegarder les nouvelles stats
      await statsService.saveStats(newStats)
      
      setStats(newStats)
      setLastUpdate(new Date())
      setLoading(false)
      
    } catch (err) {
      console.error('Erreur chargement stats:', err)
      setError('Erreur lors du chargement des statistiques')
      
      // Fallback sur les stats stockées
      const fallbackStats = statsService.getLatestStats()
      if (fallbackStats) {
        setStats(fallbackStats)
        setLastUpdate(new Date(fallbackStats.date))
      }
      
      setLoading(false)
    } finally {
      setRefreshing(false)
    }
  }

  const handleRefresh = () => {
    loadStats()
  }

  const getScoreLabel = (score: number): string => {
    if (score < 40) return 'Risque faible'
    if (score < 70) return 'Risque modéré'
    return 'Risque élevé'
  }

  const getScoreColor = (score: number): string => {
    if (score < 40) return 'text-emerald-400'
    if (score < 70) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getProgressionIcon = (progression: number) => {
    if (progression > 0) return <TrendingUp className="w-4 h-4 text-emerald-400" />
    if (progression < 0) return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />
    return <Activity className="w-4 h-4 text-gray-400" />
  }

  if (loading) {
    return (
      <div className={`flex flex-col space-y-4 ${className}`}>
        {/* Skeleton Loading */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-slate-800/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
              <div className="w-4 h-4 bg-slate-700 rounded"></div>
            </div>
            <div className="w-16 h-8 bg-slate-700 rounded mb-2"></div>
            <div className="w-24 h-4 bg-slate-700 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!stats) {
    return (
      <div className={`bg-slate-800/30 backdrop-blur-lg rounded-xl p-8 border border-red-500/30 ${className}`}>
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
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
    <div className={`flex flex-col space-y-4 ${className}`}>
      {/* Header avec refresh */}
      {showRefresh && (
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>
              Dernière mise à jour: {lastUpdate ? lastUpdate.toLocaleTimeString('fr-FR') : 'Inconnue'}
            </span>
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

      {/* Widget Score IA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-cyan-500/15 to-emerald-500/15 rounded-xl p-6 border border-cyan-500/15 hover:border-cyan-500/25 transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-cyan-400" />
            <h3 className="text-white font-semibold">Score IA</h3>
          </div>
          <AnimatePresence>
            {!refreshing && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-emerald-400">Live</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="text-center">
          <div className={`text-4xl font-bold mb-2 ${getScoreColor(stats.scoreIA)}`}>
            {stats.scoreIA}%
          </div>
          <div className="text-sm text-gray-400 mb-3">
            {getScoreLabel(stats.scoreIA)}
          </div>
          
          {/* Barre de progression */}
          <div className="w-full bg-slate-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.scoreIA}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`h-2 rounded-full ${
                stats.scoreIA < 40 
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500'
                  : stats.scoreIA < 70
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                  : 'bg-gradient-to-r from-orange-500 to-red-500'
              }`}
            />
          </div>
        </div>

        {/* Détails techniques */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
            <div className="text-center">
              <div className="font-semibold text-cyan-400">{stats.rawData.arxiv}</div>
              <div>Publications</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-orange-400">{stats.rawData.news}</div>
              <div>Articles</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-purple-400">{stats.rawData.github}</div>
              <div>Repos</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Widget Alertes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-xl p-6 border border-orange-500/15 hover:border-orange-500/25 transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-orange-400" />
            <h3 className="text-white font-semibold">Alertes</h3>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-2">
            {stats.alertes}
          </div>
          <div className="text-sm text-gray-400 mb-3">
            Nouvelles cette semaine
          </div>
          
          {/* Indicateurs visuels */}
          <div className="flex justify-center space-x-1">
            {Array.from({ length: Math.min(stats.alertes, 5) }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="w-2 h-2 bg-orange-500 rounded-full"
              />
            ))}
            {stats.alertes > 5 && (
              <span className="text-xs text-gray-400 ml-2">+{stats.alertes - 5}</span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Widget Progression */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-emerald-500/15 to-green-500/15 rounded-xl p-6 border border-emerald-500/15 hover:border-emerald-500/25 transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-emerald-400" />
            <h3 className="text-white font-semibold">Progression</h3>
          </div>
          <div className="flex items-center gap-1">
            {getProgressionIcon(stats.progression)}
            <span className={`text-sm font-medium ${
              stats.progression > 0 ? 'text-emerald-400' : 
              stats.progression < 0 ? 'text-red-400' : 'text-gray-400'
            }`}>
              {stats.progression > 0 ? 'En hausse' : 
               stats.progression < 0 ? 'En baisse' : 'Stable'}
            </span>
          </div>
        </div>
        
        <div className="text-center">
          <div className={`text-4xl font-bold mb-2 ${
            stats.progression > 0 ? 'text-emerald-400' : 
            stats.progression < 0 ? 'text-red-400' : 'text-gray-400'
          }`}>
            {stats.progression > 0 ? '+' : ''}{stats.progression}%
          </div>
          <div className="text-sm text-gray-400">
            Cette semaine
          </div>
        </div>
      </motion.div>

      {/* Message d'erreur */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/30 rounded-lg p-3"
        >
          <div className="flex items-center gap-2 text-red-400 text-sm">
            <AlertTriangle className="w-4 h-4" />
            {error}
          </div>
        </motion.div>
      )}
    </div>
  )
}

