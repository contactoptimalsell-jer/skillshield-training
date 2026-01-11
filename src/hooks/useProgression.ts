/**
 * ============================================================================
 * HOOK REACT : PROGRESSION UTILISATEUR
 * ============================================================================
 * 
 * Hook personnalisé pour récupérer et gérer la progression utilisateur
 * Utilise Clerk pour l'authentification (user.id)
 * 
 * ============================================================================
 */

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { getUserProgression, addCompletedStep as addStep, type ProgressionData } from '../services/progressionService'

interface UseProgressionReturn {
  progression: ProgressionData | null
  loading: boolean
  error: Error | null
  refresh: () => Promise<void>
  addCompletedStep: (stepId: string) => Promise<void>
}

/**
 * Hook pour récupérer et gérer la progression utilisateur
 * 
 * @returns {UseProgressionReturn} Objet contenant la progression, le loading, l'error et les fonctions
 */
export function useProgression(): UseProgressionReturn {
  const { user } = useUser()
  const [progression, setProgression] = useState<ProgressionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  /**
   * Récupère la progression depuis l'API
   */
  const fetchProgression = async () => {
    if (!user?.id) {
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)
      
      // Utiliser le service frontend qui appelle l'API
      const data = await getUserProgression(user.id)
      setProgression(data)
    } catch (err) {
      console.error('Error fetching progression:', err)
      setError(err instanceof Error ? err : new Error('Failed to fetch progression'))
    } finally {
      setLoading(false)
    }
  }

  /**
   * Ajoute une étape complétée
   */
  const addCompletedStep = async (stepId: string) => {
    if (!user?.id) {
      throw new Error('User not authenticated')
    }

    try {
      setError(null)
      
      // Utiliser le service frontend qui appelle l'API
      const updated = await addStep(user.id, stepId)
      setProgression(updated)
    } catch (err) {
      console.error('Error adding completed step:', err)
      setError(err instanceof Error ? err : new Error('Failed to add completed step'))
      throw err
    }
  }

  /**
   * Rafraîchit la progression
   */
  const refresh = async () => {
    await fetchProgression()
  }

  // Charger la progression au montage et quand l'utilisateur change
  useEffect(() => {
    fetchProgression()
  }, [user?.id])

  return {
    progression,
    loading,
    error,
    refresh,
    addCompletedStep
  }
}
