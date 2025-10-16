import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, X, Clock } from 'lucide-react'
import { Button } from './ui/Button'
import { calculateRiskScore, getRiskLevel } from '../lib/utils'
import { useApp } from '../context/AppContext'

interface CalculatorData {
  job: string
  sector: string
  experience: number
  repetitiveTasks: number
}

const sectors = [
  'Technologie & Digital',
  'Finance & Banque',
  'Santé & Médical',
  'Éducation & Formation',
  'Marketing & Communication',
  'Vente & Commerce',
  'Ressources Humaines',
  'Logistique & Transport',
  'Immobilier',
  'Conseil & Audit',
  'Médias & Création',
  'Autre'
]

const jobSuggestions = [
  'Développeur', 'Designer', 'Marketing Manager', 'Comptable',
  'Assistant', 'Analyste', 'Consultant', 'Chef de projet',
  'Traducteur', 'Rédacteur', 'Community Manager', 'Data Analyst'
]

export const RiskCalculatorModal: React.FC = () => {
  const { isCalculatorOpen, closeCalculator, showNotification } = useApp()
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<CalculatorData>({
    job: '',
    sector: '',
    experience: 5,
    repetitiveTasks: 5
  })
  const [result, setResult] = useState<{
    score: number
    level: ReturnType<typeof getRiskLevel>
  } | null>(null)

  const steps = [
    { title: 'Votre métier', description: 'Quel est votre poste actuel ?' },
    { title: 'Votre secteur', description: 'Dans quel secteur travaillez-vous ?' },
    { title: 'Votre expérience', description: 'Combien d\'années d\'expérience ?' },
    { title: 'Tâches répétitives', description: 'Niveau d\'exposition aux tâches répétitives' }
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Calculate result
      const score = calculateRiskScore(data.job, data.sector, data.experience, data.repetitiveTasks)
      const level = getRiskLevel(score)
      setResult({ score, level })
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetCalculator = () => {
    setCurrentStep(0)
    setData({
      job: '',
      sector: '',
      experience: 5,
      repetitiveTasks: 5
    })
    setResult(null)
  }

  const handleClose = () => {
    resetCalculator()
    closeCalculator()
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre métier actuel
              </label>
              <input
                type="text"
                value={data.job}
                onChange={(e) => setData({ ...data, job: e.target.value })}
                placeholder="Ex: Développeur, Marketing Manager..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                list="job-suggestions"
              />
              <datalist id="job-suggestions">
                {jobSuggestions.map((job) => (
                  <option key={job} value={job} />
                ))}
              </datalist>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre secteur d'activité
              </label>
              <select
                value={data.sector}
                onChange={(e) => setData({ ...data, sector: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              >
                <option value="">Sélectionnez votre secteur</option>
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Années d'expérience : {data.experience} ans
              </label>
              <input
                type="range"
                min="0"
                max="30"
                value={data.experience}
                onChange={(e) => setData({ ...data, experience: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Débutant</span>
                <span>Expert</span>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Niveau d'exposition aux tâches répétitives : {data.repetitiveTasks}/10
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={data.repetitiveTasks}
                onChange={(e) => setData({ ...data, repetitiveTasks: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Très créatif</span>
                <span>Très répétitif</span>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isCalculatorOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-secondary text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Calculateur de Risque IA</h2>
                  <p className="text-secondary-100 mt-1">
                    {result ? 'Votre analyse est prête' : `${steps[currentStep].title}`}
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Bar */}
              {!result && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-secondary-100 mb-2">
                    <span>Étape {currentStep + 1} sur {steps.length}</span>
                    <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center space-y-6"
                  >
                    {/* Risk Score */}
                    <div className="relative">
                      <div className="w-32 h-32 mx-auto relative">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-gray-200"
                          />
                          <motion.circle
                            cx="60"
                            cy="60"
                            r="50"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className={result.level.color}
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 50}`}
                            initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                            animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - result.score / 100) }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary-900">
                              {result.score}%
                            </div>
                            <div className="text-sm text-gray-500">Risque IA</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Risk Level */}
                    <div>
                      <h3 className={`text-2xl font-bold ${result.level.color} mb-2`}>
                        Risque {result.level.level}
                      </h3>
                      <p className="text-gray-600 mb-4">{result.level.description}</p>
                    </div>

                    {/* Timeline */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center justify-center gap-3">
                        <Clock className="w-5 h-5 text-secondary-500" />
                        <span className="font-medium">
                          Impact IA estimé dans : <span className="text-secondary-600">{result.level.timeline}</span>
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-center">
                      <Button variant="secondary" onClick={resetCalculator}>
                        Nouvelle analyse
                      </Button>
                      <Button variant="accent" onClick={() => {
                        showNotification('Redirection vers les offres...', 'info')
                        setTimeout(() => {
                          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                          handleClose()
                        }, 1000)
                      }}>
                        Voir les offres
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`step-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-primary-900 mb-2">
                        {steps[currentStep].title}
                      </h3>
                      <p className="text-gray-600">
                        {steps[currentStep].description}
                      </p>
                    </div>

                    {renderStep()}

                    {/* Navigation */}
                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                      >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Précédent
                      </Button>

                      <Button
                        variant="secondary"
                        onClick={handleNext}
                        disabled={
                          (currentStep === 0 && !data.job) ||
                          (currentStep === 1 && !data.sector)
                        }
                      >
                        {currentStep === steps.length - 1 ? 'Calculer' : 'Suivant'}
                        {currentStep < steps.length - 1 && <ChevronRight className="w-4 h-4 ml-2" />}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

