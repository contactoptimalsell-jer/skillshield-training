import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, BookOpen, Clock, Star, Award, DollarSign, Tag } from 'lucide-react'
import { useDashboard } from '../../context/DashboardContext'
import { Formation } from '../../data/mockData'

interface AddFormationModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AddFormationModal: React.FC<AddFormationModalProps> = ({ isOpen, onClose }) => {
  const { addFormation, addNotification } = useDashboard()
  const [formData, setFormData] = useState<Partial<Formation>>({
    title: '',
    description: '',
    duration: 0,
    level: 'Intermédiaire',
    rating: 0,
    reviews: 0,
    price: 0,
    isIncluded: false,
    certification: false,
    skills: [],
    status: 'not_started',
    progress: 0
  })
  const [skillInput, setSkillInput] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: keyof Formation, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleAddSkill = () => {
    if (skillInput.trim() && !formData.skills?.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...(prev.skills || []), skillInput.trim()]
      }))
      setSkillInput('')
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills?.filter(s => s !== skill) || []
    }))
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.title?.trim()) {
      newErrors.title = 'Le titre est requis'
    }
    if (!formData.description?.trim()) {
      newErrors.description = 'La description est requise'
    }
    if (!formData.duration || formData.duration <= 0) {
      newErrors.duration = 'La durée doit être supérieure à 0'
    }
    if (formData.rating !== undefined && (formData.rating < 0 || formData.rating > 5)) {
      newErrors.rating = 'La note doit être entre 0 et 5'
    }
    if (formData.price !== undefined && formData.price < 0) {
      newErrors.price = 'Le prix doit être positif'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Add the formation
    addFormation({
      title: formData.title!,
      description: formData.description!,
      duration: formData.duration!,
      level: formData.level!,
      rating: formData.rating || 0,
      reviews: formData.reviews || 0,
      price: formData.price || 0,
      isIncluded: formData.isIncluded || false,
      certification: formData.certification || false,
      skills: formData.skills || [],
      status: formData.status || 'not_started',
      progress: formData.progress || 0
    })

    // Show success notification
    addNotification({
      type: 'success',
      message: `Formation "${formData.title}" ajoutée avec succès !`
    })

    // Reset form and close
    setFormData({
      title: '',
      description: '',
      duration: 0,
      level: 'Intermédiaire',
      rating: 0,
      reviews: 0,
      price: 0,
      isIncluded: false,
      certification: false,
      skills: [],
      status: 'not_started',
      progress: 0
    })
    setSkillInput('')
    setErrors({})
    onClose()
  }

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      action()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <Upload className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-900">Ajouter une formation</h2>
                <p className="text-sm text-gray-600">Remplissez les informations de la formation</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre de la formation *
                </label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ex: React 18 Avancé"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent resize-none ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Décrivez le contenu et les objectifs de la formation..."
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              {/* Duration and Level */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Durée (heures) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.duration || 0}
                    onChange={(e) => handleInputChange('duration', parseInt(e.target.value) || 0)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${
                      errors.duration ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.duration && (
                    <p className="mt-1 text-sm text-red-600">{errors.duration}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <BookOpen className="w-4 h-4 inline mr-1" />
                    Niveau *
                  </label>
                  <select
                    value={formData.level || 'Intermédiaire'}
                    onChange={(e) => handleInputChange('level', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  >
                    <option value="Débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Avancé">Avancé</option>
                  </select>
                </div>
              </div>

              {/* Rating and Reviews */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Star className="w-4 h-4 inline mr-1" />
                    Note (0-5)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    value={formData.rating || 0}
                    onChange={(e) => handleInputChange('rating', parseFloat(e.target.value) || 0)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${
                      errors.rating ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.rating && (
                    <p className="mt-1 text-sm text-red-600">{errors.rating}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre d'avis
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.reviews || 0}
                    onChange={(e) => handleInputChange('reviews', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Price and Included */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    Prix (€)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.price || 0}
                    onChange={(e) => handleInputChange('price', parseInt(e.target.value) || 0)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent ${
                      errors.price ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                  )}
                </div>

                <div className="flex items-end">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isIncluded || false}
                      onChange={(e) => handleInputChange('isIncluded', e.target.checked)}
                      className="w-4 h-4 text-secondary-600 border-gray-300 rounded focus:ring-secondary-500"
                    />
                    <span className="text-sm text-gray-700">Inclus dans le plan</span>
                  </label>
                </div>
              </div>

              {/* Certification */}
              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.certification || false}
                    onChange={(e) => handleInputChange('certification', e.target.checked)}
                    className="w-4 h-4 text-secondary-600 border-gray-300 rounded focus:ring-secondary-500"
                  />
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1 text-gray-700" />
                    <span className="text-sm text-gray-700">Formation certifiante</span>
                  </div>
                </label>
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Tag className="w-4 h-4 inline mr-1" />
                  Compétences
                </label>
                <div className="flex space-x-2 mb-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, handleAddSkill)}
                    placeholder="Ajouter une compétence..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors"
                  >
                    Ajouter
                  </button>
                </div>
                {formData.skills && formData.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(skill)}
                          className="ml-2 text-secondary-600 hover:text-secondary-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-secondary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Ajouter la formation
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
