/**
 * ============================================================================
 * API ROUTE : AEGIS CHATBOT - Consultant Carrière IA
 * ============================================================================
 * 
 * Route : /api/aegis
 * Méthode : POST
 * 
 * Utilise OpenAI GPT-4o Mini pour répondre aux questions des utilisateurs
 * avec le contexte de leur profil, score IA et progression
 * 
 * ============================================================================
 */

import OpenAI from 'openai'
import { createClient } from '@supabase/supabase-js'

// Constantes de limitation
const MAX_TOKENS_PER_RESPONSE = 800 // Limite stricte
const RATE_LIMIT_PER_USER = 50 // Messages/jour par user

// Initialiser OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Fonction helper pour créer le client Supabase
function getSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL?.trim()
  const supabaseKey = process.env.SUPABASE_ANON_KEY?.trim()
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables')
  }
  
  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false
    }
  })
}

/**
 * Récupère le contexte utilisateur depuis Supabase
 */
async function getUserContext(userId, supabase) {
  try {
    // Récupérer l'utilisateur avec son profil
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select(`
        *,
        profile:user_profiles(*)
      `)
      .eq('id', userId)
      .single()

    if (userError || !userData) {
      return {
        hasProfile: false,
        score: null,
        job: null,
        sector: null,
        formations: []
      }
    }

    const profile = userData.profile || {}
    
    // Récupérer la progression
    const { data: progressData } = await supabase
      .from('user_progress')
      .select('completed_steps')
      .eq('clerk_user_id', userId)
      .single()

    // Extraire le prénom de l'email si pas de first_name
    const emailPrefix = userData.email?.split('@')[0] || ''
    const firstName = emailPrefix.split('.')[0] || emailPrefix || 'Utilisateur'

    // Déterminer les formations complétées depuis completed_steps
    const completedSteps = progressData?.completed_steps || []
    const completedFormations = completedSteps.filter(step => 
      step.includes('formation') || step.includes('formation_completed')
    )

    return {
      hasProfile: !!profile.job_title,
      firstName: firstName,
      email: userData.email,
      score: profile.ai_risk_score || null,
      riskLevel: profile.ai_risk_score 
        ? (profile.ai_risk_score >= 70 ? 'Critique' : profile.ai_risk_score >= 50 ? 'Élevé' : 'Modéré')
        : null,
      job: profile.job_title || null,
      sector: profile.sector || null,
      yearsExperience: profile.years_experience || null,
      automationExposure: profile.automation_exposure || null,
      plan: userData.current_plan || 'sentinelle',
      formations: completedSteps,
      completedFormations: completedFormations,
      currentFormation: null, // À implémenter si vous avez une table formations
      lastActive: userData.updated_at
    }
  } catch (error) {
    console.error('Error fetching user context:', error)
    return {
      hasProfile: false,
      score: null,
      job: null,
      sector: null,
      formations: []
    }
  }
}

/**
 * Construit le system prompt personnalisé
 */
function buildSystemPrompt(context) {
  const basePrompt = `Tu es Aegis, le consultant carrière IA de SkillShield Education.

## Ta Mission
Accompagner l'utilisateur dans sa transformation professionnelle face à l'IA avec honnêteté, expertise et bienveillance.

## Tes Principes Absolus
1. **JAMAIS de mensonges** : Si tu ne sais pas, tu le dis clairement
2. **Pas d'inventions** : Ne crée pas de formations, de statistiques ou de faits inexistants
3. **Honnêteté radicale** : Si une reconversion est difficile, tu le dis (mais avec empathie)
4. **Evidence-based** : Tes conseils sont basés sur des données réelles (O*NET, OECD, WEF)
5. **Pas de faux espoirs** : Tu es réaliste tout en étant encourageant

## Ton Style
- Expert bienveillant et rassurant
- Direct mais empathique
- Pédagogue sans être condescendant
- Concis (3-5 phrases maximum par réponse)
- Tutoiement naturel

## Ce Que Tu Ne Fais PAS
- ❌ Promettre des résultats garantis
- ❌ Donner des conseils juridiques ou médicaux
- ❌ Critiquer d'autres formations ou concurrents
- ❌ Faire de la vente agressive
- ❌ Inventer des statistiques
- ❌ Dire "je pense que" ou "il me semble" (tu sais ou tu ne sais pas)

## Formations Disponibles (VRAIES)
1. Prompt Engineering & IA Générative
2. Développement Web Full-Stack 2025
3. Data Science & Machine Learning
4. Métiers du Futur (2025-2030)
5. Reconversion Digitale (+45 ans)

(15 autres arrivent bientôt mais ne sont PAS encore disponibles)`

  // Personnalisation selon le contexte
  if (!context.hasProfile) {
    return basePrompt + `\n\n## Contexte Utilisateur
L'utilisateur n'a pas encore complété son profil.
Encourage-le à le faire pour obtenir des conseils personnalisés.`
  }

  return basePrompt + `\n\n## Contexte Utilisateur Actuel
- Prénom : ${context.firstName || 'Utilisateur'}
- Score de risque IA : ${context.score !== null ? `${context.score}%` : 'Non calculé'} (${context.riskLevel || 'Non calculé'})
- Métier : ${context.job || 'Non renseigné'}
- Secteur : ${context.sector || 'Non renseigné'}
- Plan : ${context.plan}
- Formation en cours : ${context.currentFormation || 'Aucune'}
- Formations complétées : ${context.completedFormations.length}

## Instructions Spécifiques
${getSpecificInstructions(context)}

Adapte tes réponses à ce profil. Sois précis et référence son score/métier quand c'est pertinent.`
}

/**
 * Récupère le nombre de messages de l'utilisateur dans les dernières 24h
 */
async function getUserDailyMessageCount(userId, supabase) {
  try {
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    
    const { count, error } = await supabase
      .from('aegis_conversations')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .gte('timestamp', oneDayAgo)
    
    if (error && error.code !== '42P01') { // 42P01 = table does not exist
      console.warn('Error counting user messages:', error)
      return 0
    }
    
    return count || 0
  } catch (error) {
    console.warn('Error getting user message count:', error)
    return 0
  }
}

/**
 * Instructions spécifiques selon le profil
 */
function getSpecificInstructions(context) {
  const instructions = []

  // Selon le score
  if (context.score >= 70) {
    instructions.push("- L'utilisateur a un score CRITIQUE. Privilégie les conseils d'action immédiate et de reconversion.")
  } else if (context.score >= 50) {
    instructions.push("- L'utilisateur a un risque ÉLEVÉ. Encourage la montée en compétences proactive.")
  } else if (context.score !== null) {
    instructions.push("- L'utilisateur a un risque MODÉRÉ/FAIBLE. Focus sur le maintien de l'avance.")
  }

  // Selon le plan
  if (context.plan === 'sentinelle' || context.plan === 'gratuit') {
    instructions.push("- L'utilisateur est en plan gratuit/Sentinelle. Tu peux mentionner les avantages des plans payants SANS être insistant.")
  }

  // Selon la progression
  if (context.completedFormations.length === 0) {
    instructions.push("- L'utilisateur n'a pas encore complété de formations. Encourage-le à démarrer.")
  } else {
    instructions.push(`- L'utilisateur a complété ${context.completedFormations.length} formation(s). Félicite ses progrès.`)
  }

  return instructions.join('\n') || "- Pas d'instructions spécifiques."
}

/**
 * Handler principal
 */
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message, userId, conversationHistory = [] } = req.body

    if (!message || !userId) {
      return res.status(400).json({ error: 'message and userId are required' })
    }

    // Initialiser Supabase
    let supabase
    try {
      supabase = getSupabaseClient()
    } catch (error) {
      console.error('Error creating Supabase client:', error)
      return res.status(500).json({
        error: 'Server configuration error',
        message: error.message
      })
    }

    // Vérifier le rate limiting
    const userMessageCount = await getUserDailyMessageCount(userId, supabase)
    if (userMessageCount >= RATE_LIMIT_PER_USER) {
      return res.status(429).json({ 
        error: 'Limite quotidienne atteinte. Réessaye demain ou passe au plan supérieur.' 
      })
    }

    // 1. Récupérer le contexte utilisateur
    const userContext = await getUserContext(userId, supabase)

    // 2. Construire le system prompt personnalisé
    const systemPrompt = buildSystemPrompt(userContext)

    // 3. Appeler OpenAI GPT-4o Mini
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...(Array.isArray(conversationHistory) ? conversationHistory.map(msg => ({
          role: msg.role || (msg.isUser ? "user" : "assistant"),
          content: msg.content || msg.text || msg.message || ''
        })).filter(msg => msg.content && msg.content.trim() !== '') : []),
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: MAX_TOKENS_PER_RESPONSE,
      presence_penalty: 0.6,
      frequency_penalty: 0.3
    })

    const response = completion.choices[0].message.content

    const tokensUsed = completion.usage.total_tokens

    // 4. Logger la conversation (optionnel - table à créer si nécessaire)
    await logConversation(userId, message, response, tokensUsed, supabase)

    return res.status(200).json({ 
      response,
      tokensUsed 
    })

  } catch (error) {
    console.error('Erreur Aegis:', error)
    return res.status(500).json({ 
      error: 'Désolé, je rencontre un problème technique. Réessayez dans un instant.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

/**
 * Logger la conversation (optionnel - nécessite table aegis_conversations)
 */
async function logConversation(userId, userMessage, botResponse, tokensUsed, supabase) {
  try {
    const { error } = await supabase
      .from('aegis_conversations')
      .insert({
        user_id: userId,
        user_message: userMessage,
        bot_response: botResponse,
        timestamp: new Date().toISOString(),
        tokens_used: tokensUsed
      })
    
    if (error && error.code !== '42P01') { // 42P01 = table does not exist
      console.warn('Could not log conversation:', error)
    }
  } catch (error) {
    // Ne pas bloquer si le logging échoue
    console.warn('Could not log conversation:', error)
  }
}
