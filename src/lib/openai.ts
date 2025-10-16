import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for development, use server-side in production
})

export interface ScoreCalculationResult {
  score: number
  timeline: string
  factors: {
    automationExposure: number
    sectorRisk: number
    experienceBuffer: number
    adaptabilityScore: number
  }
  recommendations: string[]
  explanation: string
}

export interface ReconversionPlan {
  phases: {
    name: string
    duration: string
    skills: string[]
    projects: string[]
    resources: string[]
  }[]
  timeline: string
  successProbability: number
  keyMilestones: string[]
}

export const openaiService = {
  // Calculate AI risk score using OpenAI
  async calculateAIRiskScore(profile: {
    jobTitle: string
    sector: string
    yearsExperience: number
    automationExposure: number
  }): Promise<ScoreCalculationResult> {
    try {
      const prompt = `
Tu es un expert en analyse de risque d'obsolescence professionnelle face à l'IA.

Analyse ce profil professionnel :
- Métier : ${profile.jobTitle}
- Secteur : ${profile.sector}
- Années d'expérience : ${profile.yearsExperience}
- Niveau d'exposition à l'automatisation (1-10) : ${profile.automationExposure}

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

      const result = JSON.parse(response.choices[0].message.content || '{}')
      return result as ScoreCalculationResult
    } catch (error) {
      console.error('Error calculating AI risk score:', error)
      // Fallback to basic calculation
      return this.calculateBasicScore(profile)
    }
  },

  // Fallback basic calculation
  calculateBasicScore(profile: {
    jobTitle: string
    sector: string
    yearsExperience: number
    automationExposure: number
  }): ScoreCalculationResult {
    const factors = {
      automationExposure: profile.automationExposure * 10,
      sectorRisk: this.getSectorRiskScore(profile.sector),
      experienceBuffer: Math.max(0, 20 - profile.yearsExperience * 2),
      adaptabilityScore: 30
    }
    
    const weighted = 
      (factors.automationExposure * 0.4) +
      (factors.sectorRisk * 0.3) +
      (factors.experienceBuffer * 0.2) +
      (factors.adaptabilityScore * 0.1)
    
    const score = Math.min(100, Math.max(0, Math.round(weighted)))
    
    return {
      score,
      timeline: this.getTimelineFromScore(score),
      factors,
      recommendations: this.getBasicRecommendations(profile),
      explanation: `Votre métier de ${profile.jobTitle} dans le secteur ${profile.sector} présente un risque d'automatisation de ${score}%.`
    }
  },

  getSectorRiskScore(sector: string): number {
    const sectorRisks: Record<string, number> = {
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
  },

  getTimelineFromScore(score: number): string {
    if (score >= 80) return '3-6 mois'
    if (score >= 60) return '6-12 mois'
    if (score >= 40) return '1-2 ans'
    return '2-5 ans'
  },

  getBasicRecommendations(profile: any): string[] {
    return [
      'Développer des compétences complémentaires',
      'Se tenir informé des évolutions de votre secteur',
      'Explorer des métiers moins exposés à l\'automatisation'
    ]
  },

  // Generate reconversion plan using OpenAI
  async generateReconversionPlan(
    currentProfile: {
      jobTitle: string
      sector: string
      yearsExperience: number
      aiRiskScore: number
    },
    targetJob: string
  ): Promise<ReconversionPlan> {
    try {
      const prompt = `
Tu es un conseiller en reconversion professionnelle expert.

Profil actuel :
- Métier : ${currentProfile.jobTitle}
- Secteur : ${currentProfile.sector}
- Expérience : ${currentProfile.yearsExperience} ans
- Score risque IA : ${currentProfile.aiRiskScore}%

Objectif : Devenir ${targetJob}

Crée un plan de reconversion détaillé sur 12 mois avec 3 phases.

Réponds UNIQUEMENT en JSON avec cette structure :
{
  "phases": [
    {
      "name": "Phase 1 : Fondations",
      "duration": "3 mois",
      "skills": ["Compétence 1", "Compétence 2"],
      "projects": ["Projet 1", "Projet 2"],
      "resources": ["Ressource 1", "Ressource 2"]
    }
  ],
  "timeline": "12 mois",
  "successProbability": 85,
  "keyMilestones": ["Milestone 1", "Milestone 2"]
}
`

      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 1500
      })

      const result = JSON.parse(response.choices[0].message.content || '{}')
      return result as ReconversionPlan
    } catch (error) {
      console.error('Error generating reconversion plan:', error)
      // Fallback plan
      return this.getBasicReconversionPlan(currentProfile, targetJob)
    }
  },

  getBasicReconversionPlan(currentProfile: any, targetJob: string): ReconversionPlan {
    return {
      phases: [
        {
          name: "Phase 1 : Fondations",
          duration: "3 mois",
          skills: ["Bases du nouveau métier", "Outils essentiels"],
          projects: ["Projet d'apprentissage", "Portfolio de base"],
          resources: ["Formations en ligne", "Documentation officielle"]
        },
        {
          name: "Phase 2 : Spécialisation",
          duration: "6 mois",
          skills: ["Compétences avancées", "Expertise métier"],
          projects: ["Projets concrets", "Collaborations"],
          resources: ["Mentorat", "Communauté professionnelle"]
        },
        {
          name: "Phase 3 : Professionnalisation",
          duration: "3 mois",
          skills: ["Maîtrise complète", "Soft skills"],
          projects: ["Projets clients", "Certifications"],
          resources: ["Réseau professionnel", "Opportunités d'emploi"]
        }
      ],
      timeline: "12 mois",
      successProbability: 70,
      keyMilestones: [
        "Maîtrise des bases",
        "Premier projet réussi",
        "Intégration dans la communauté",
        "Première opportunité professionnelle"
      ]
    }
  }
}

export default openai

