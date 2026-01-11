/**
 * ============================================================================
 * SERVICE FRONTEND : PROGRESSION UTILISATEUR
 * ============================================================================
 * 
 * Architecture :
 * - Service frontend qui appelle l'API backend
 * - Garantit la cohérence avec le backend
 * - Fonctions de calcul disponibles pour les calculs côté client si nécessaire
 * 
 * ============================================================================
 */

// ============================================================================
// TYPES
// ============================================================================

export interface ProgressionStep {
  id: string
  label: string
  points: number
  category: 'onboarding' | 'formation' | 'action' | 'achievement'
}

export interface ProgressionData {
  clerkUserId: string
  completedSteps: string[]
  totalPoints: number
  currentLevel: number
  percentage: number
  lastActivityAt: string
  nextRecommendedAction: {
    stepId: string
    label: string
    reason: string
  }
}

// ============================================================================
// FONCTIONS DE BASE DE DONNÉES (via API)
// ============================================================================

/**
 * Récupère la progression d'un utilisateur depuis l'API backend
 * Utilise l'API /api/progression/[userId] pour garantir la cohérence avec le backend
 */
export async function getUserProgression(clerkUserId: string): Promise<ProgressionData | null> {
  try {
    // Appeler l'API backend pour récupérer la progression
    const response = await fetch(`/api/progression/${clerkUserId}`)
    
    if (!response.ok) {
      if (response.status === 404) {
        // Utilisateur n'existe pas encore, retourner null
        return null
      }
      throw new Error(`Failed to fetch progression: ${response.statusText}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching user progression:', error)
    throw error
  }
}

/**
 * Ajoute une étape complétée à la progression d'un utilisateur via l'API backend
 * Utilise l'API /api/progression/[userId] pour garantir la cohérence avec le backend
 */
export async function addCompletedStep(
  clerkUserId: string,
  stepId: string
): Promise<ProgressionData> {
  try {
    // Appeler l'API backend pour ajouter l'étape
    const response = await fetch(`/api/progression/${clerkUserId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ stepId })
    })
    
    if (!response.ok) {
      throw new Error(`Failed to add completed step: ${response.statusText}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error adding completed step:', error)
    throw error
  }
}
