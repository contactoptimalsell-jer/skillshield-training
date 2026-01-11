/**
 * ============================================================================
 * API ROUTE : PROGRESSION UTILISATEUR (Alternative avec query parameter)
 * ============================================================================
 * 
 * Route : /api/progression?userId=xxx
 * Méthodes : GET, POST
 * 
 * Cette version utilise un query parameter au lieu d'une route dynamique
 * car Vercel a des problèmes avec les routes dynamiques [userId].js dans des sous-dossiers
 * 
 * ============================================================================
 */

import { createClient } from '@supabase/supabase-js'

// Initialiser Supabase - vérifier que les variables sont présentes
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('⚠️ Missing Supabase environment variables at initialization')
}

const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false
      }
    })
  : null

// Configuration de progression (identique à [userId].js)
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
  return Math.min(100, Math.round((pointsInLevel / levelRange) * 100))
}

function getNextRecommendedAction(completedSteps) {
  // Priorité 1 : Onboarding
  if (!completedSteps.includes('onboarding_completed')) {
    return {
      stepId: 'onboarding_completed',
      label: 'Compléter l\'onboarding',
      reason: 'Terminez votre onboarding pour débloquer toutes les fonctionnalités'
    }
  }
  
  // Priorité 2 : Formations
  if (!completedSteps.includes('first_formation_started')) {
    return {
      stepId: 'first_formation_started',
      label: 'Commencer votre première formation',
      reason: 'Démarrez une formation pour améliorer vos compétences'
    }
  }
  
  if (!completedSteps.includes('first_formation_completed')) {
    return {
      stepId: 'first_formation_completed',
      label: 'Terminer votre première formation',
      reason: 'Complétez une formation pour gagner des points'
    }
  }
  
  // Priorité 3 : Actions
  if (!completedSteps.includes('score_calculated')) {
    return {
      stepId: 'score_calculated',
      label: 'Calculer votre score IA',
      reason: 'Découvrez votre niveau de risque face à l\'IA'
    }
  }
  
  // Priorité 4 : Achievements
  return {
    stepId: 'formation_5_completed',
    label: 'Compléter 5 formations',
    reason: 'Continuez vos formations pour débloquer de nouveaux achievements'
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
 * GET /api/progression?userId=xxx
 * Récupère la progression d'un utilisateur
 */
async function getProgression(userId) {
  if (!supabase) {
    console.error('❌ Supabase client is null - environment variables may be missing')
    throw new Error('Supabase client not initialized - check environment variables')
  }
  
  try {
    console.log('✅ Fetching progression for userId:', userId)
    console.log('✅ Supabase client initialized, making query...')
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('clerk_user_id', userId)
      .single()
    
    if (error) {
      if (error.code === 'PGRST116') {
        // Utilisateur n'existe pas encore, initialiser
        console.log('User not found, creating initial record')
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
        
        if (insertError) {
          console.error('Error creating user progress:', insertError)
          throw insertError
        }
        
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
      console.error('Supabase query error:', error)
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
 * POST /api/progression?userId=xxx
 * Ajoute une étape complétée à la progression
 */
async function addCompletedStep(userId, stepId) {
  if (!supabase) {
    throw new Error('Supabase client not initialized - check environment variables')
  }
  
  try {
    // Récupérer la progression actuelle
    const { data: currentData, error: fetchError } = await supabase
      .from('user_progress')
      .select('*')
      .eq('clerk_user_id', userId)
      .single()
    
    if (fetchError && fetchError.code !== 'PGRST116') {
      throw fetchError
    }
    
    const currentSteps = currentData?.completed_steps || []
    
    // Vérifier si l'étape est déjà complétée
    if (currentSteps.includes(stepId)) {
      // Déjà complétée, retourner la progression actuelle
      const calculation = calculateProgression(currentSteps)
      return {
        clerkUserId: currentData.clerk_user_id,
        completedSteps: currentSteps,
        totalPoints: calculation.totalPoints,
        currentLevel: calculation.currentLevel,
        percentage: calculation.percentage,
        lastActivityAt: currentData.last_activity_at,
        nextRecommendedAction: calculation.nextRecommendedAction
      }
    }
    
    // Ajouter l'étape
    const newSteps = [...currentSteps, stepId]
    const calculation = calculateProgression(newSteps)
    
    // Mettre à jour ou créer
    const { data: updatedData, error: upsertError } = await supabase
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
    
    if (upsertError) throw upsertError
    
    return {
      clerkUserId: updatedData.clerk_user_id,
      completedSteps: newSteps,
      totalPoints: calculation.totalPoints,
      currentLevel: calculation.currentLevel,
      percentage: calculation.percentage,
      lastActivityAt: updatedData.last_activity_at,
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
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Content-Type', 'application/json')
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  
  try {
    // Vérifier que les variables d'environnement sont présentes
    const hasUrl = !!process.env.SUPABASE_URL
    const hasKey = !!process.env.SUPABASE_ANON_KEY
    
    if (!hasUrl || !hasKey) {
      console.error('❌ Missing environment variables')
      return res.status(500).json({ 
        error: 'Server configuration error',
        message: 'Missing Supabase environment variables',
        debug: {
          hasSupabaseUrl: hasUrl,
          hasSupabaseKey: hasKey,
          urlLength: process.env.SUPABASE_URL?.length || 0,
          keyLength: process.env.SUPABASE_ANON_KEY?.length || 0
        }
      })
    }
    
    console.error('✅ Env vars present:', { hasUrl, hasKey })
    
    // Vérifier que le client Supabase est initialisé
    if (!supabase) {
      return res.status(500).json({
        error: 'Server configuration error',
        message: 'Supabase client not initialized'
      })
    }
    
    // Log pour debug (sans exposer les valeurs complètes)
    console.log('🔍 Supabase config check:', {
      urlPresent: !!process.env.SUPABASE_URL,
      keyPresent: !!process.env.SUPABASE_ANON_KEY,
      urlPrefix: process.env.SUPABASE_URL?.substring(0, 30) || 'missing',
      urlLength: process.env.SUPABASE_URL?.length || 0,
      keyLength: process.env.SUPABASE_ANON_KEY?.length || 0,
      clientInitialized: !!supabase
    })
    
    // Récupérer l'ID utilisateur depuis les query params
    const { userId } = req.query
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required (use ?userId=xxx)' })
    }
    
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
    console.error('API Error:', {
      message: error.message,
      details: error.stack,
      hint: error.hint,
      code: error.code
    })
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    })
  }
}
