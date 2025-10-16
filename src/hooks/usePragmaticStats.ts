/**
 * Hook personnalisé pour les Statistiques Pragmatiques
 */

import { useState, useEffect, useCallback } from 'react'
import { pragmaticStatsService, type PragmaticStats } from '../services/pragmaticStatsService'

interface UsePragmaticStatsReturn {
  stats: PragmaticStats | null
  loading: boolean
  refreshing: boolean
  error: string | null
  refresh: () => Promise<void>
  clearError: () => void
  explanations: Record<string, string>
  nextUpdate: string
}

export const usePragmaticStats = (autoRefresh: boolean = false, refreshInterval: number = 300000): UsePragmaticStatsReturn => {
  const [stats, setStats] = useState<PragmaticStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadStats = useCallback(async (force: boolean = false) => {
    try {
      setRefreshing(true)
      setError(null)
      
      // Vérifier le cache si pas de force refresh
      if (!force) {
        const latestStats = pragmaticStatsService.getLatestPragmaticStats()
        const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000)
        
        if (latestStats && new Date(latestStats.date + ' ' + latestStats.lastUpdate) > twoHoursAgo) {
          console.log('📊 Utilisation des stats pragmatiques en cache')
          setStats(latestStats)
          setLoading(false)
          setRefreshing(false)
          return
        }
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

  const explanations = pragmaticStatsService.getPragmaticExplanations()
  const nextUpdate = pragmaticStatsService.getNextUpdateTime()

  return {
    stats,
    loading,
    refreshing,
    error,
    refresh,
    clearError,
    explanations,
    nextUpdate
  }
}

