import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, User, Building2, Calendar, Target } from 'lucide-react'
import { useUser } from '@clerk/clerk-react'
import { useAuth } from '../../context/AuthContext'
import { userService } from '../../services/userService'
import { useProgression } from '../../hooks/useProgression'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import toast from 'react-hot-toast'

interface OnboardingData {
  jobTitle: string
  sector: string
  yearsExperience: number
  automationExposure: number
}

export const OnboardingFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<OnboardingData>({
    jobTitle: '',
    sector: '',
    yearsExperience: 0,
    automationExposure: 5
  })
  const { user: clerkUser } = useUser()
  const { user } = useAuth()
  const { addCompletedStep } = useProgression()

  const steps = [
    {
      title: "Quel est votre métier ?",
      description: "Cela nous aide à évaluer votre exposition à l'IA",
      icon: <User className="w-8 h-8 text-cyan-600" />,
      fields: ['jobTitle']
    },
    {
      title: "Dans quel secteur travaillez-vous ?",
      description: "Chaque secteur a un niveau de risque différent",
      icon: <Building2 className="w-8 h-8 text-cyan-600" />,
      fields: ['sector']
    },
    {
      title: "Combien d'années d'expérience ?",
      description: "L'expérience peut réduire votre risque d'obsolescence",
      icon: <Calendar className="w-8 h-8 text-cyan-600" />,
      fields: ['yearsExperience']
    },
    {
      title: "Votre exposition à l'automatisation",
      description: "Évaluez de 1 à 10 votre exposition actuelle à l'automatisation",
      icon: <Target className="w-8 h-8 text-cyan-600" />,
      fields: ['automationExposure']
    }
  ]

  const sectors = [
    'Tech', 'Finance', 'Santé', 'Marketing', 'Retail', 
    'Manufacturing', 'Education', 'Legal', 'Consulting', 'Autre'
  ]

  const jobTitles = [
    'Développeur', 'Designer', 'Marketing Manager', 'Comptable', 
    'Commercial', 'RH', 'Data Analyst', 'Project Manager', 'Autre'
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = async () => {
    if (!clerkUser?.id) {
      toast.error('Erreur : utilisateur non authentifié')
      return
    }

    setLoading(true)
    try {
      // Save profile data with Clerk user ID
      const { error } = await userService.updateProfile({
        job_title: data.jobTitle,
        sector: data.sector,
        years_experience: data.yearsExperience,
        automation_exposure: data.automationExposure
      }, clerkUser.id)

      if (error) {
        toast.error('Erreur lors de la sauvegarde du profil')
        return
      }

      // Calculate initial AI risk score
      const { error: scoreError } = await userService.calculateAndSaveScore(clerkUser.id)
      
      if (scoreError) {
        console.warn('Could not calculate score:', scoreError)
      }

      // Marquer les étapes de progression
      try {
        await addCompletedStep('profile_created')
        await addCompletedStep('onboarding_completed')
        if (!scoreError) {
          await addCompletedStep('score_calculated')
        }
      } catch (progressionError) {
        console.warn('Could not update progression:', progressionError)
        // Ne pas bloquer le flux si la progression échoue
      }

      toast.success('Profil créé avec succès !')
      
      // Redirect to Sentinelle dashboard
      window.location.href = '/sentinelle'
    } catch (error) {
      console.error('Error completing onboarding:', error)
      toast.error('Erreur lors de la finalisation')
    } finally {
      setLoading(false)
    }
  }

  const canProceed = () => {
    const currentStepData = steps[currentStep]
    return currentStepData.fields.every(field => {
      const value = data[field as keyof OnboardingData]
      return value !== '' && value !== 0
    })
  }

  const renderStepContent = () => {
    const step = steps[currentStep]

    switch (currentStep) {
      case 0: // Job Title
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              {jobTitles.map((title) => (
                <button
                  key={title}
                  onClick={() => setData({ ...data, jobTitle: title })}
                  className={`p-4 text-left rounded-lg border transition-colors ${
                    data.jobTitle === title
                      ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Autre métier..."
                value={data.jobTitle}
                onChange={(e) => setData({ ...data, jobTitle: e.target.value })}
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        )

      case 1: // Sector
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setData({ ...data, sector })}
                  className={`p-4 text-center rounded-lg border transition-colors ${
                    data.sector === sector
                      ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>
        )

      case 2: // Years Experience
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">
                {data.yearsExperience}
              </div>
              <div className="text-gray-600">
                {data.yearsExperience === 0 ? 'Débutant' :
                 data.yearsExperience < 3 ? 'Junior' :
                 data.yearsExperience < 7 ? 'Intermédiaire' :
                 data.yearsExperience < 15 ? 'Senior' : 'Expert'}
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              value={data.yearsExperience}
              onChange={(e) => setData({ ...data, yearsExperience: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>0 ans</span>
              <span>30+ ans</span>
            </div>
          </div>
        )

      case 3: // Automation Exposure
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">
                {data.automationExposure}/10
              </div>
              <div className="text-gray-600">
                {data.automationExposure <= 3 ? 'Faible exposition' :
                 data.automationExposure <= 6 ? 'Exposition modérée' :
                 data.automationExposure <= 8 ? 'Forte exposition' : 'Exposition très forte'}
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={data.automationExposure}
              onChange={(e) => setData({ ...data, automationExposure: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Très faible (1)</span>
              <span>Très forte (10)</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Exemples :</strong><br/>
                1-3 : Métiers créatifs, relationnels<br/>
                4-6 : Métiers mixtes (créatif + technique)<br/>
                7-10 : Métiers répétitifs, data-intensive
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Étape {currentStep + 1} sur {steps.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((currentStep + 1) / steps.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {steps[currentStep].icon}
                </div>
                <h2 className="text-2xl font-bold text-primary-900 mb-2">
                  {steps[currentStep].title}
                </h2>
                <p className="text-gray-600">
                  {steps[currentStep].description}
                </p>
              </div>

              <div className="mb-8">
                {renderStepContent()}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Précédent</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canProceed() || loading}
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700"
            >
              <span>
                {loading ? 'Finalisation...' : 
                 currentStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
              </span>
              {!loading && <ArrowRight className="w-4 h-4" />}
              {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

