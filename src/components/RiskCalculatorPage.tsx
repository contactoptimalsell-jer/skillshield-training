import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield,
  ArrowLeft,
  Briefcase,
  Building,
  TrendingUp,
  Users,
  AlertCircle,
  CheckCircle,
  Star
} from 'lucide-react'

export const RiskCalculatorPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    job: '',
    sector: '',
    experience: '',
    skills: [] as string[],
    automationExposure: 0
  })
  const [riskScore, setRiskScore] = useState<number | null>(null)

  const jobOptions = [
    'Développeur',
    'Designer',
    'Manager',
    'Marketing',
    'Commercial',
    'RH',
    'Finance',
    'Consultant',
    'Analyste'
  ]

  const sectorOptions = [
    'Tech',
    'Finance',
    'Santé',
    'Éducation',
    'Commerce',
    'Industrie',
    'Services'
  ]

  const experienceOptions = [
    '0-2 ans',
    '3-5 ans',
    '6-10 ans',
    '11-15 ans',
    '16+ ans'
  ]

  const skillOptions = [
    'Programmation',
    'Design',
    'Management',
    'Analyse de données',
    'Communication',
    'Vente',
    'Marketing digital',
    'Gestion de projet'
  ]

  const calculateRisk = () => {
    // Simple risk calculation algorithm
    let score = 50 // Base score

    // Job impact
    const jobRiskMap: { [key: string]: number } = {
      'Développeur': 30,
      'Designer': 40,
      'Manager': 60,
      'Marketing': 55,
      'Commercial': 45,
      'RH': 65,
      'Finance': 70,
      'Consultant': 50,
      'Analyste': 35
    }
    score += jobRiskMap[formData.job] || 50

    // Sector impact
    const sectorRiskMap: { [key: string]: number } = {
      'Tech': 35,
      'Finance': 60,
      'Santé': 40,
      'Éducation': 55,
      'Commerce': 50,
      'Industrie': 45,
      'Services': 50
    }
    score += sectorRiskMap[formData.sector] || 50

    // Experience impact (more experience = lower risk)
    const experienceMap: { [key: string]: number } = {
      '0-2 ans': 20,
      '3-5 ans': 10,
      '6-10 ans': -5,
      '11-15 ans': -15,
      '16+ ans': -25
    }
    score += experienceMap[formData.experience] || 0

    // Skills impact (more skills = lower risk)
    score -= formData.skills.length * 5

    // Automation exposure
    score += formData.automationExposure * 10

    // Clamp between 0 and 100
    score = Math.max(0, Math.min(100, score))

    setRiskScore(score)
    setCurrentStep(4)
  }

  const getRiskLevel = (score: number) => {
    if (score < 30) return { level: 'Faible', color: 'text-emerald-400', bgColor: 'bg-emerald-400/20' }
    if (score < 60) return { level: 'Modéré', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20' }
    if (score < 80) return { level: 'Élevé', color: 'text-orange-400', bgColor: 'bg-orange-400/20' }
    return { level: 'Critique', color: 'text-red-400', bgColor: 'bg-red-400/20' }
  }

  const getRecommendations = (score: number) => {
    const recommendations = []
    
    if (score > 70) {
      recommendations.push('Développez des compétences en supervision IA')
      recommendations.push('Explorez des métiers complémentaires')
      recommendations.push('Formez-vous aux outils de collaboration homme-IA')
    } else if (score > 50) {
      recommendations.push('Renforcez vos compétences techniques')
      recommendations.push('Développez votre expertise métier')
      recommendations.push('Restez informé des évolutions IA')
    } else {
      recommendations.push('Continuez à développer vos compétences')
      recommendations.push('Mentorez d\'autres professionnels')
      recommendations.push('Explorez de nouvelles technologies')
    }

    return recommendations
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/login"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour à la liste d'attente</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-white">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="font-bold">SkillShield</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Calculateur de Risque IA
          </h1>
          <p className="text-xl text-slate-300">
            Découvrez votre niveau d'exposition à l'automatisation par l'IA
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= step
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-cyan-500' : 'bg-slate-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-slate-400">
            Étape {currentStep} sur 4
          </div>
        </div>

        {/* Form Steps */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Briefcase className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Quel est votre métier ?
                </h2>
                <p className="text-slate-300">
                  Cela nous aide à évaluer votre exposition à l'automatisation
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {jobOptions.map((job) => (
                  <button
                    key={job}
                    onClick={() => {
                      setFormData({ ...formData, job })
                      setCurrentStep(2)
                    }}
                    className="p-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-200"
                  >
                    {job}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Building className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Dans quel secteur travaillez-vous ?
                </h2>
                <p className="text-slate-300">
                  Certains secteurs sont plus exposés que d'autres
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {sectorOptions.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => {
                      setFormData({ ...formData, sector })
                      setCurrentStep(3)
                    }}
                    className="p-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-200"
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Quelques questions finales
                </h2>
                <p className="text-slate-300">
                  Pour affiner notre analyse de votre profil
                </p>
              </div>

              <div className="space-y-6">
                {/* Experience */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Votre niveau d'expérience
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {experienceOptions.map((exp) => (
                      <button
                        key={exp}
                        onClick={() => setFormData({ ...formData, experience: exp })}
                        className={`p-3 rounded-lg text-sm transition-all duration-200 ${
                          formData.experience === exp
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800/50 border border-slate-600 text-white hover:border-cyan-400'
                        }`}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Vos compétences principales (sélectionnez toutes celles qui s'appliquent)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {skillOptions.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => {
                          const skills = formData.skills.includes(skill)
                            ? formData.skills.filter(s => s !== skill)
                            : [...formData.skills, skill]
                          setFormData({ ...formData, skills })
                        }}
                        className={`p-3 rounded-lg text-sm transition-all duration-200 ${
                          formData.skills.includes(skill)
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800/50 border border-slate-600 text-white hover:border-cyan-400'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Automation Exposure */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    À quel point votre travail actuel est-il automatisé ? (0 = pas du tout, 10 = très automatisé)
                  </label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-slate-400">0</span>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={formData.automationExposure}
                      onChange={(e) => setFormData({ ...formData, automationExposure: parseInt(e.target.value) })}
                      className="flex-1"
                    />
                    <span className="text-sm text-slate-400">10</span>
                    <span className="text-white font-semibold w-8 text-center">
                      {formData.automationExposure}
                    </span>
                  </div>
                </div>

                <button
                  onClick={calculateRisk}
                  disabled={!formData.experience}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculer mon score de risque
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && riskScore !== null && (
            <div className="text-center space-y-6">
              <div className="text-6xl font-bold text-white mb-4">
                {riskScore}%
              </div>
              
              <div className={`inline-block px-6 py-3 rounded-full ${getRiskLevel(riskScore).bgColor}`}>
                <span className={`text-lg font-semibold ${getRiskLevel(riskScore).color}`}>
                  Risque {getRiskLevel(riskScore).level}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Recommandations personnalisées
                </h3>
                <div className="space-y-2">
                  {getRecommendations(riskScore).map((rec, index) => (
                    <div key={index} className="flex items-center space-x-3 text-left">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Pourquoi rejoindre SkillShield ?
                </h4>
                <p className="text-slate-300 mb-4">
                  Notre plateforme vous aide à anticiper les changements et à développer les compétences de demain.
                </p>
                <Link
                  to="/login"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200"
                >
                  <span>Rejoindre la liste d'attente</span>
                  <Star className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
