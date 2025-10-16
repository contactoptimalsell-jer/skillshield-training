/**
 * Hook personnalisé pour la gestion des statistiques dynamiques
 */

import { useState, useEffect, useCallback } from 'react'
import { statsService, type StatsData } from '../services/statsService'

interface UseStatsReturn {
  stats: StatsData | null
  loading: boolean
  refreshing: boolean
  error: string | null
  lastUpdate: Date | null
  refresh: () => Promise<void>
  clearError: () => void
}

export const useStats = (autoRefresh: boolean = false, refreshInterval: number = 300000): UseStatsReturn => {
  const [stats, setStats] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const loadStats = useCallback(async (force: boolean = false) => {
    try {
      setRefreshing(true)
      setError(null)
      
      // Vérifier le cache si pas de force refresh
      if (!force) {
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
  }, [])

  const refresh = useCallback(async () => {
    await loadStats(true)
  }, [loadStats])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  // Chargement initial
  useEffect(() => {
    loadStats()
  }, [loadStats])

  // Auto-refresh
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      loadStats()
    }, refreshInterval)

    return () => clearInterval(interval)
  }, [autoRefresh, refreshInterval, loadStats])

  return {
    stats,
    loading,
    refreshing,
    error,
    lastUpdate,
    refresh,
    clearError
  }
}

// Hook pour l'historique des statistiques
export const useStatsHistory = (days: number = 7) => {
  const [history, setHistory] = useState<StatsData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadHistory = () => {
      try {
        const allStats = statsService.getStoredStats()
        const recentStats = allStats.slice(-days)
        setHistory(recentStats)
      } catch (error) {
        console.error('Erreur chargement historique:', error)
      } finally {
        setLoading(false)
      }
    }

    loadHistory()
  }, [days])

  const progressionHistory = statsService.getProgressionHistory(days)

  return {
    history,
    progressionHistory,
    loading
  }
}

