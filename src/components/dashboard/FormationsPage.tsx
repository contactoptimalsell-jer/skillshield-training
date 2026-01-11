import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  BookOpen, 
  Clock, 
  Star, 
  Play, 
  CheckCircle, 
  Lock,
  Filter,
  Search,
  Award,
  Users,
  Calendar,
  Plus
} from 'lucide-react'
import { Widget, Badge, ProgressBar } from './Widget'
import { useDashboard } from '../../context/DashboardContext'
import { useProgression } from '../../hooks/useProgression'
import { AddFormationModal } from './AddFormationModal'

export const FormationsPage: React.FC = () => {
  const { formations, updateFormationProgress } = useDashboard()
  const { addCompletedStep } = useProgression()
  const navigate = useNavigate()
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  
  // Handler pour commencer une formation
  const handleStartFormation = async (formationId: string) => {
    updateFormationProgress(formationId, 0) // Commence la formation
    
    // Marquer l'étape de progression
    try {
      await addCompletedStep('first_formation_started')
    } catch (error) {
      console.warn('Could not update progression:', error)
    }
    
    // Naviguer vers la page de détail
    navigate(`/dashboard/formations/${formationId}`)
  }
  
  // Handler pour continuer/compléter une formation
  const handleFormationProgress = async (formationId: string, progress: number) => {
    const newProgress = Math.min(progress + 10, 100)
    updateFormationProgress(formationId, newProgress)
    
    // Si la formation est terminée, marquer l'étape
    if (newProgress === 100) {
      try {
        await addCompletedStep('first_formation_completed')
        
        // Vérifier si c'est la 5ème ou 10ème formation complétée
        const completedCount = formations.filter(f => f.status === 'completed').length
        if (completedCount === 4) { // Cette formation va devenir la 5ème
          await addCompletedStep('formation_5_completed')
        } else if (completedCount === 9) { // Cette formation va devenir la 10ème
          await addCompletedStep('formation_10_completed')
        }
      } catch (error) {
        console.warn('Could not update progression:', error)
      }
    }
  }

  const filters = [
    { id: 'all', label: 'Toutes les formations', count: formations.length },
    { id: 'in_progress', label: 'En cours', count: formations.filter(f => f.status === 'in_progress').length },
    { id: 'completed', label: 'Terminées', count: formations.filter(f => f.status === 'completed').length },
    { id: 'not_started', label: 'Non commencées', count: formations.filter(f => f.status === 'not_started').length }
  ]

  const filteredFormations = formations.filter(formation => {
    const matchesFilter = selectedFilter === 'all' || formation.status === selectedFilter
    const matchesSearch = formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         formation.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success'
      case 'in_progress': return 'primary'
      case 'not_started': return 'info'
      default: return 'info'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Terminée'
      case 'in_progress': return 'En cours'
      case 'not_started': return 'Non commencée'
      default: return 'Non commencée'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary-900">Formations</h1>
          <p className="text-gray-600 mt-2">
            3 mois d'accès gratuit inclus dans votre plan Bouclier
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 bg-gradient-secondary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            <span className="font-medium">Ajouter une formation</span>
          </button>
          <div className="bg-gradient-secondary text-white px-4 py-2 rounded-lg">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">2 mois 12 jours restants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Widget title="Formations complétées" className="text-center">
          <div className="text-3xl font-bold text-accent-600 mb-2">0</div>
          <p className="text-sm text-gray-600">Sur {formations.length} disponibles</p>
        </Widget>
        
        <Widget title="En cours" className="text-center">
          <div className="text-3xl font-bold text-secondary-600 mb-2">1</div>
          <p className="text-sm text-gray-600">Formation active</p>
        </Widget>
        
        <Widget title="Heures investies" className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">12h</div>
          <p className="text-sm text-gray-600">Sur 180h disponibles</p>
        </Widget>
        
        <Widget title="Certifications" className="text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
          <p className="text-sm text-gray-600">Certificats obtenus</p>
        </Widget>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === filter.id
                  ? 'bg-gradient-secondary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
        
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une formation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Current Formation */}
      {formations.filter(f => f.status === 'in_progress').length > 0 && (
        <Widget title="Formation en cours">
          {formations
            .filter(f => f.status === 'in_progress')
            .map((formation) => (
              <div key={formation.id} className="bg-gradient-secondary/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-900">{formation.title}</h3>
                        <p className="text-sm text-gray-600">{formation.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {formation.duration}h
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {formation.rating}/5 ({formation.reviews} avis)
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {formation.certification ? 'Certifiante' : 'Non certifiante'}
                      </div>
                    </div>
                    
                    <ProgressBar 
                      progress={formation.progress || 0} 
                      label={`Progression: ${formation.progress}%`}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {formation.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleFormationProgress(formation.id, formation.progress || 0)}
                    className="bg-gradient-secondary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Continuer
                  </button>
                </div>
              </div>
            ))}
        </Widget>
      )}

      {/* All Formations */}
      <Widget title="Catalogue de formations">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFormations.map((formation) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/dashboard/formations/${formation.id}`)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-primary-900">{formation.title}</h3>
                    {formation.isIncluded && (
                      <Badge variant="success" size="sm">
                        Inclus
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{formation.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {formation.duration}h
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {formation.rating}/5
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {formation.reviews} avis
                    </div>
                    {formation.certification && (
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        Certifiante
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant={getStatusColor(formation.status)} size="sm">
                      {getStatusLabel(formation.status)}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {formation.level}
                    </span>
                  </div>
                  
                  {formation.status === 'in_progress' && formation.progress && (
                    <ProgressBar 
                      progress={formation.progress} 
                      label={`${formation.progress}% complété`}
                      className="mb-4"
                    />
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {formation.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {formation.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{formation.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {formation.isIncluded ? (
                    <span className="text-accent-600 font-medium">Gratuit avec votre plan</span>
                  ) : (
                    <span className="text-lg font-bold text-primary-900">{formation.price}€</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  {formation.status === 'completed' ? (
                    <div className="flex items-center text-accent-600">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">Terminée</span>
                    </div>
                  ) : formation.status === 'in_progress' ? (
                    <button
                      onClick={() => handleFormationProgress(formation.id, formation.progress || 0)}
                      className="bg-gradient-secondary text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Continuer
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleStartFormation(formation.id)}
                      className="bg-gradient-secondary text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Commencer
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Widget>

      {/* Message de synthèse */}
      <div className="mt-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-3">
                L'IA :
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• automatise,</li>
                <li>• accélère,</li>
                <li>• amplifie.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-3">
                Mais elle ne remplace jamais :
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• la responsabilité,</li>
                <li>• le discernement,</li>
                <li>• la relation,</li>
                <li>• le courage,</li>
                <li>• l'éthique.</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-primary-200">
            <p className="text-center text-primary-900 font-medium text-lg">
              👉 Tous les métiers que nous avons parcourus ne disparaissent pas.
            </p>
            <p className="text-center text-primary-900 font-semibold text-xl mt-2">
              Ils montent en responsabilité.
            </p>
          </div>
        </div>
      </div>

      {/* Add Formation Modal */}
      <AddFormationModal 
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </div>
  )
}

