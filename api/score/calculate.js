import OpenAI from 'openai'
import { createClient } from '@supabase/supabase-js'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get the authorization header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization header required' })
    }

    const token = authHeader.split(' ')[1]

    // Verify the JWT token with Supabase
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError || !user) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    // Get user profile
    const { data: profile, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profileError || !profile) {
      return res.status(404).json({ error: 'User profile not found' })
    }

    if (!profile.job_title || !profile.sector || !profile.years_experience || !profile.automation_exposure) {
      return res.status(400).json({ error: 'Profile incomplete - missing required fields' })
    }

    // Calculate score using OpenAI
    const prompt = `
Tu es un expert en analyse de risque d'obsolescence professionnelle face à l'IA.

Analyse ce profil professionnel :
- Métier : ${profile.job_title}
- Secteur : ${profile.sector}
- Années d'expérience : ${profile.years_experience}
- Niveau d'exposition à l'automatisation (1-10) : ${profile.automation_exposure}

Calcule un score de risque de 0 à 100 et fournis une analyse détaillée.

Réponds UNIQUEMENT en JSON avec cette structure :
{
  "score": 75,
  "timeline": "6-12 mois",
  "factors": {
    "automationExposure": 80,
    "sectorRisk": 70,
    "experienceBuffer": 20,
    "adaptabilityScore": 30
  },
  "recommendations": [
    "Développer des compétences en supervision IA",
    "Se former aux outils de collaboration homme-IA",
    "Explorer des métiers complémentaires"
  ],
  "explanation": "Votre métier présente un risque élevé car..."
}
`

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 1000
    })

    const scoreResult = JSON.parse(response.choices[0].message.content || '{}')

    // Save score to database
    const { error: updateError } = await supabase
      .from('user_profiles')
      .update({
        ai_risk_score: scoreResult.score,
        last_score_calculation: new Date().toISOString()
      })
      .eq('id', user.id)

    if (updateError) {
      console.error('Error saving score:', updateError)
      return res.status(500).json({ error: 'Failed to save score' })
    }

    res.status(200).json({ score: scoreResult })
  } catch (error) {
    console.error('Error calculating score:', error)
    
    // Fallback to basic calculation
    try {
      const { data: { user } } = await supabase.auth.getUser(req.headers.authorization?.split(' ')[1])
      
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      const factors = {
        automationExposure: profile.automation_exposure * 10,
        sectorRisk: getSectorRiskScore(profile.sector),
        experienceBuffer: Math.max(0, 20 - profile.years_experience * 2),
        adaptabilityScore: 30
      }
      
      const weighted = 
        (factors.automationExposure * 0.4) +
        (factors.sectorRisk * 0.3) +
        (factors.experienceBuffer * 0.2) +
        (factors.adaptabilityScore * 0.1)
      
      const score = Math.min(100, Math.max(0, Math.round(weighted)))
      
      const scoreResult = {
        score,
        timeline: getTimelineFromScore(score),
        factors,
        recommendations: getBasicRecommendations(profile),
        explanation: `Votre métier de ${profile.job_title} dans le secteur ${profile.sector} présente un risque d'automatisation de ${score}%.`
      }

      // Save fallback score
      await supabase
        .from('user_profiles')
        .update({
          ai_risk_score: scoreResult.score,
          last_score_calculation: new Date().toISOString()
        })
        .eq('id', user.id)

      res.status(200).json({ score: scoreResult })
    } catch (fallbackError) {
      console.error('Fallback calculation failed:', fallbackError)
      res.status(500).json({ error: 'Failed to calculate score' })
    }
  }
}

function getSectorRiskScore(sector) {
  const sectorRisks = {
    'Tech': 45,
    'Finance': 70,
    'Santé': 35,
    'Marketing': 60,
    'Retail': 75,
    'Manufacturing': 80,
    'Education': 40,
    'Legal': 55,
    'Consulting': 50,
    'default': 50
  }
  return sectorRisks[sector] || sectorRisks.default
}

function getTimelineFromScore(score) {
  if (score >= 80) return '3-6 mois'
  if (score >= 60) return '6-12 mois'
  if (score >= 40) return '1-2 ans'
  return '2-5 ans'
}

function getBasicRecommendations(profile) {
  return [
    'Développer des compétences complémentaires',
    'Se tenir informé des évolutions de votre secteur',
    'Explorer des métiers moins exposés à l\'automatisation'
  ]
}

