import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Target, 
  BookOpen, 
  Users,
  Star,
  Sparkles,
  Plus,
  X
} from 'lucide-react'
import { Button } from '../ui/Button'
import { useDashboard } from '../../context/DashboardContext'

// Liste complète des compétences de programmation
const PROGRAMMING_SKILLS = [
  // Frontend
  'React', 'Vue.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass', 'Tailwind CSS',
  // Backend
  'Node.js', 'Python', 'Java', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'Scala',
  // Mobile
  'React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin',
  // Database
  'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch',
  // DevOps & Cloud
  'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'Jenkins', 'GitLab CI',
  // AI & Data
  'Machine Learning', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'R', 'Data Science',
  // Other
  'Git', 'Linux', 'Bash', 'GraphQL', 'REST API', 'Microservices', 'Blockchain'
]

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate()
  const { updateUser, addNotification } = useDashboard()
  const [currentStep, setCurrentStep] = useState(0)
  
  // État pour les données du formulaire
  const [formData, setFormData] = useState({
    job: '',
    sector: '',
    selectedSkills: [] as string[],
    goal: '',
    specificGoal: ''
  })

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skill)
        ? prev.selectedSkills.filter(s => s !== skill)
        : [...prev.selectedSkills, skill]
    }))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleGoalSelect = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goal
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Sauvegarder les données dans le contexte
      updateUser({
        job: formData.job,
        sector: formData.sector,
        skills: formData.selectedSkills,
        reconversionGoal: formData.specificGoal
      })
      
      addNotification({
        type: 'success',
        message: `Profil complété ! ${formData.selectedSkills.length} compétences ajoutées.`
      })
      
      navigate('/dashboard')
    }
  }

  const steps = [
    {
      title: 'Compléter votre profil',
      description: 'Aidez-nous à personnaliser votre expérience',
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre métier actuel
              </label>
              <input
                type="text"
                placeholder="Ex: Développeur Frontend"
                value={formData.job}
                onChange={(e) => handleInputChange('job', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secteur d'activité
              </label>
              <select 
                value={formData.sector}
                onChange={(e) => handleInputChange('sector', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              >
                <option value="">Sélectionnez votre secteur</option>
                <option value="tech">Technologie & Digital</option>
                <option value="finance">Finance & Banque</option>
                <option value="health">Santé & Médical</option>
                <option value="education">Éducation & Formation</option>
                <option value="retail">Commerce & Retail</option>
                <option value="manufacturing">Industrie & Manufacturing</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vos compétences de programmation
            </label>
            <p className="text-sm text-gray-500 mb-4">
              Sélectionnez vos compétences actuelles ({formData.selectedSkills.length} sélectionnées)
            </p>
            
            {/* Compétences sélectionnées */}
            {formData.selectedSkills.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Compétences sélectionnées :</p>
                <div className="flex flex-wrap gap-2">
                  {formData.selectedSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary-500 text-white rounded-full text-sm flex items-center gap-2"
                    >
                      {skill}
                      <button
                        onClick={() => handleSkillToggle(skill)}
                        className="hover:bg-secondary-600 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Liste des compétences disponibles */}
            <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {PROGRAMMING_SKILLS.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 ${
                      formData.selectedSkills.includes(skill)
                        ? 'bg-secondary-500 text-white border-secondary-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-secondary-300 hover:bg-secondary-50'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
            
            {formData.selectedSkills.length === 0 && (
              <p className="text-sm text-gray-500 mt-2">
                💡 Sélectionnez au moins 3 compétences pour une analyse personnalisée
              </p>
            )}
          </div>
        </div>
      )
    },
    {
      title: 'Définir votre objectif',
      description: 'Où souhaitez-vous être dans 12 mois ?',
      icon: Target,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                formData.goal === 'reconversion' 
                  ? 'border-secondary-500 bg-secondary-50' 
                  : 'border-gray-200 hover:border-secondary-300'
              }`}
              onClick={() => handleGoalSelect('reconversion')}
            >
              <div className="text-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                  formData.goal === 'reconversion' ? 'bg-secondary-500' : 'bg-secondary-100'
                }`}>
                  <Target className={`w-6 h-6 ${
                    formData.goal === 'reconversion' ? 'text-white' : 'text-secondary-600'
                  }`} />
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Reconversion complète</h3>
                <p className="text-sm text-gray-600">Changer de métier vers un domaine plus sûr</p>
              </div>
            </div>
            
            <div 
              className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                formData.goal === 'evolution' 
                  ? 'border-secondary-500 bg-secondary-50' 
                  : 'border-gray-200 hover:border-secondary-300'
              }`}
              onClick={() => handleGoalSelect('evolution')}
            >
              <div className="text-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                  formData.goal === 'evolution' ? 'bg-secondary-500' : 'bg-secondary-100'
                }`}>
                  <Target className={`w-6 h-6 ${
                    formData.goal === 'evolution' ? 'text-white' : 'text-secondary-600'
                  }`} />
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Évolution de carrière</h3>
                <p className="text-sm text-gray-600">Développer mes compétences dans mon domaine</p>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Objectif spécifique (optionnel)
            </label>
            <input
              type="text"
              placeholder="Ex: Devenir DevOps Engineer"
              value={formData.specificGoal}
              onChange={(e) => handleInputChange('specificGoal', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Découvrir votre dashboard',
      description: 'Voici ce qui vous attend',
      icon: Sparkles,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-secondary/10 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900">Score de Risque IA</h3>
                  <p className="text-sm text-gray-600">Analyse personnalisée</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Suivez votre exposition à l'automatisation avec des recommandations personnalisées.
              </p>
            </div>

            <div className="p-6 bg-gradient-accent/10 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900">Formations Incluses</h3>
                  <p className="text-sm text-gray-600">3 mois d'accès gratuit</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Accédez à notre catalogue de formations premium pour développer vos compétences.
              </p>
            </div>

            <div className="p-6 bg-yellow-50 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900">Support Prioritaire</h3>
                  <p className="text-sm text-gray-600">Réponse sous 2h</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Bénéficiez d'un support dédié et de sessions de coaching personnalisées.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900">Veille IA Temps Réel</h3>
                  <p className="text-sm text-gray-600">Alertes personnalisées</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Recevez des alertes en temps réel sur les développements IA qui vous concernent.
              </p>
            </div>
          </div>
          
          {/* Résumé des compétences sélectionnées */}
          {formData.selectedSkills.length > 0 && (
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-primary-900 mb-3">Vos compétences enregistrées</h3>
              <div className="flex flex-wrap gap-2">
                {formData.selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-blue-600 mt-3">
                Ces compétences seront utilisées pour personnaliser votre expérience dans le dashboard.
              </p>
            </div>
          )}
        </div>
      )
    }
  ]

  const handleSkip = () => {
    navigate('/dashboard')
  }

  const canProceed = () => {
    if (currentStep === 0) {
      return formData.job && formData.sector && formData.selectedSkills.length >= 3
    }
    if (currentStep === 1) {
      return formData.goal
    }
    return true
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-primary-900 mb-4"
          >
            Bienvenue dans SkillShield ! 🎉
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-6"
          >
            Votre protection contre l'obsolescence IA est maintenant active
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center space-x-4 text-sm text-gray-500"
          >
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
              Plan Bouclier activé
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
              3 mois de formations incluses
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
              Support prioritaire
            </div>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Étape {currentStep + 1} sur {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-secondary h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              {React.createElement(steps[currentStep].icon, { className: "w-8 h-8 text-white" })}
            </div>
            <h2 className="text-2xl font-bold text-primary-900 mb-2">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-600">
              {steps[currentStep].description}
            </p>
          </div>

          {steps[currentStep].content}
        </motion.div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleSkip}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            Passer cette étape
          </button>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center"
          >
            {currentStep === steps.length - 1 ? 'Accéder au dashboard' : 'Continuer'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
