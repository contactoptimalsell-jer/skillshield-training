/**
 * ============================================================================
 * API ROUTE : PROGRESSION UTILISATEUR
 * ============================================================================
 * 
 * Route : /api/progression/[userId]
 * Méthodes : GET, POST
 * 
 * Architecture :
 * - GET : Récupère la progression d'un utilisateur (calculée dynamiquement)
 * - POST : Ajoute une étape complétée à la progression
 * - Utilise Clerk pour l'authentification (user.id)
 * - Calcul déterministe côté backend
 * 
 * ============================================================================
 */

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

// Configuration de progression (identique au frontend)
const PROGRESSION_STEPS = {
  'onboarding_completed': { id: 'onboarding_completed', label: 'Onboarding complété', points: 10, category: 'onboarding' },
  'profile_created': { id: 'profile_created', label: 'Profil créé', points: 5, category: 'onboarding' },
  'first_formation_started': { id: 'first_formation_started', label: 'Première formation commencée', points: 15, category: 'formation' },
  'first_formation_completed': { id: 'first_formation_completed', label: 'Première formation terminée', points: 30, category: 'formation' },
  'formation_5_completed': { id: 'formation_5_completed', label: '5 formations complétées', points: 50, category: 'achievement' },
  'formation_10_completed': { id: 'formation_10_completed', label: '10 formations complétées', points: 100, category: 'achievement' },
  'score_calculated': { id: 'score_calculated', label: 'Score IA calculé', points: 10, category: 'action' },
  'first_alert_read': { id: 'first_alert_read', label: 'Première alerte lue', points: 5, category: 'action' },
  'plan_upgraded': { id: 'plan_upgraded', label: 'Abonnement amélioré', points: 25, category: 'action' },
  'streak_7_days': { id: 'streak_7_days', label: '7 jours consécutifs d\'activité', points: 20, category: 'achievement' },
  'streak_30_days': { id: 'streak_30_days', label: '30 jours consécutifs d\'activité', points: 50, category: 'achievement' }
}

const LEVEL_THRESHOLDS = [0, 50, 150, 300, 500, 750, 1000, 1500, 2000, 2500]

// Fonctions de calcul (déterministes)
function calculateTotalPoints(completedSteps) {
  return completedSteps.reduce((total, stepId) => {
    const step = PROGRESSION_STEPS[stepId]
    return total + (step?.points || 0)
  }, 0)
}

function calculateLevel(totalPoints) {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (totalPoints >= LEVEL_THRESHOLDS[i]) {
      return i + 1
    }
  }
  return 1
}

function calculatePercentage(totalPoints, currentLevel) {
  const levelStart = LEVEL_THRESHOLDS[currentLevel - 1] || 0
  const levelEnd = LEVEL_THRESHOLDS[currentLevel] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1]
  const levelRange = levelEnd - levelStart
  const pointsInLevel = totalPoints - levelStart
  
  if (levelRange === 0) return 100
  
  return Math.min(100, Math.max(0, Math.round((pointsInLevel / levelRange) * 100)))
}

function getNextRecommendedAction(completedSteps) {
  if (!completedSteps.includes('onboarding_completed')) {
    return {
      stepId: 'onboarding_completed',
      label: PROGRESSION_STEPS.onboarding_completed.label,
      reason: 'Complétez votre onboarding pour démarrer votre progression'
    }
  }
  
  if (!completedSteps.includes('profile_created')) {
    return {
      stepId: 'profile_created',
      label: PROGRESSION_STEPS.profile_created.label,
      reason: 'Créez votre profil pour personnaliser votre expérience'
    }
  }
  
  if (!completedSteps.includes('score_calculated')) {
    return {
      stepId: 'score_calculated',
      label: PROGRESSION_STEPS.score_calculated.label,
      reason: 'Calculez votre score IA pour connaître votre niveau de risque'
    }
  }
  
  if (!completedSteps.includes('first_formation_started')) {
    return {
      stepId: 'first_formation_started',
      label: PROGRESSION_STEPS.first_formation_started.label,
      reason: 'Commencez votre première formation pour développer vos compétences'
    }
  }
  
  if (!completedSteps.includes('first_formation_completed')) {
    return {
      stepId: 'first_formation_completed',
      label: PROGRESSION_STEPS.first_formation_completed.label,
      reason: 'Terminez votre première formation pour gagner des points'
    }
  }
  
  const missingAchievements = Object.values(PROGRESSION_STEPS)
    .filter(step => step.category === 'achievement' && !completedSteps.includes(step.id))
    .sort((a, b) => b.points - a.points)
  
  if (missingAchievements.length > 0) {
    const next = missingAchievements[0]
    return {
      stepId: next.id,
      label: next.label,
      reason: `Débloquez cet achievement pour gagner ${next.points} points`
    }
  }
  
  return {
    stepId: 'first_formation_started',
    label: 'Continuer les formations',
    reason: 'Continuez à vous former pour progresser'
  }
}

function calculateProgression(completedSteps) {
  const totalPoints = calculateTotalPoints(completedSteps)
  const currentLevel = calculateLevel(totalPoints)
  const percentage = calculatePercentage(totalPoints, currentLevel)
  const nextRecommendedAction = getNextRecommendedAction(completedSteps)
  
  return {
    totalPoints,
    currentLevel,
    percentage,
    nextRecommendedAction
  }
}

/**
 * GET /api/progression/[userId]
 * Récupère la progression d'un utilisateur
 */
async function getProgression(userId) {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('clerk_user_id', userId)
      .single()
    
    if (error) {
      if (error.code === 'PGRST116') {
        // Utilisateur n'existe pas encore, initialiser
        const { data: newData, error: insertError } = await supabase
          .from('user_progress')
          .insert({
            clerk_user_id: userId,
            completed_steps: [],
            current_level: 1,
            total_points: 0
          })
          .select()
          .single()
        
        if (insertError) throw insertError
        
        const calculation = calculateProgression([])
        return {
          clerkUserId: newData.clerk_user_id,
          completedSteps: [],
          totalPoints: calculation.totalPoints,
          currentLevel: calculation.currentLevel,
          percentage: calculation.percentage,
          lastActivityAt: newData.last_activity_at,
          nextRecommendedAction: calculation.nextRecommendedAction
        }
      }
      throw error
    }
    
    const calculation = calculateProgression(data.completed_steps || [])
    
    return {
      clerkUserId: data.clerk_user_id,
      completedSteps: data.completed_steps || [],
      totalPoints: calculation.totalPoints,
      currentLevel: calculation.currentLevel,
      percentage: calculation.percentage,
      lastActivityAt: data.last_activity_at,
      nextRecommendedAction: calculation.nextRecommendedAction
    }
  } catch (error) {
    console.error('Error fetching progression:', error)
    throw error
  }
}

/**
 * POST /api/progression/[userId]
 * Ajoute une étape complétée à la progression
 */
async function addCompletedStep(userId, stepId) {
  try {
    if (!PROGRESSION_STEPS[stepId]) {
      throw new Error(`Invalid step ID: ${stepId}`)
    }
    
    const { data: existing, error: fetchError } = await supabase
      .from('user_progress')
      .select('completed_steps')
      .eq('clerk_user_id', userId)
      .single()
    
    if (fetchError && fetchError.code !== 'PGRST116') {
      throw fetchError
    }
    
    const currentSteps = existing?.completed_steps || []
    
    if (currentSteps.includes(stepId)) {
      // Déjà complété, retourner la progression actuelle
      return await getProgression(userId)
    }
    
    const newSteps = [...currentSteps, stepId]
    const calculation = calculateProgression(newSteps)
    
    const { data, error } = await supabase
      .from('user_progress')
      .upsert({
        clerk_user_id: userId,
        completed_steps: newSteps,
        current_level: calculation.currentLevel,
        total_points: calculation.totalPoints,
        last_activity_at: new Date().toISOString()
      }, {
        onConflict: 'clerk_user_id'
      })
      .select()
      .single()
    
    if (error) throw error
    
    return {
      clerkUserId: data.clerk_user_id,
      completedSteps: data.completed_steps,
      totalPoints: calculation.totalPoints,
      currentLevel: calculation.currentLevel,
      percentage: calculation.percentage,
      lastActivityAt: data.last_activity_at,
      nextRecommendedAction: calculation.nextRecommendedAction
    }
  } catch (error) {
    console.error('Error adding completed step:', error)
    throw error
  }
}

/**
 * Handler principal (Vercel Serverless Function)
 */
export default async function handler(req, res) {
  // CORS headers (si nécessaire)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  
  try {
    // Récupérer l'ID utilisateur depuis les query params (Vercel)
    const { userId } = req.query
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' })
    }
    
    // Vérifier l'authentification (optionnel, selon votre configuration)
    // Pour Clerk, vous pouvez vérifier le token JWT ici
    // const authHeader = req.headers.authorization
    // if (!authHeader) {
    //   return res.status(401).json({ error: 'Unauthorized' })
    // }
    
    if (req.method === 'GET') {
      const progression = await getProgression(userId)
      return res.status(200).json(progression)
    }
    
    if (req.method === 'POST') {
      const { stepId } = req.body
      
      if (!stepId) {
        return res.status(400).json({ error: 'stepId is required' })
      }
      
      const progression = await addCompletedStep(userId, stepId)
      return res.status(200).json(progression)
    }
    
    return res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    console.error('API Error:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    })
  }
}
