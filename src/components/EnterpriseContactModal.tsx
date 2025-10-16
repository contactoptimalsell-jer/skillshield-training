import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Building2, Users, Mail, MessageSquare, CheckCircle } from 'lucide-react'
import { Button } from './ui/Button'

interface EnterpriseContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export const EnterpriseContactModal: React.FC<EnterpriseContactModalProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    employeeCount: 50,
    sector: '',
    email: '',
    phone: '',
    message: '',
    gdprConsent: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sectors = [
    'Tech / IT',
    'Finance / Banque',
    'Santé / Médical',
    'Éducation',
    'Retail / Commerce',
    'Manufacturing',
    'Services',
    'Consulting',
    'Autre'
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulation d'envoi d'email (pour le MVP)
      console.log('📧 Email envoyé à contact@skillshield.com:', formData)
      
      // Attendre 2 secondes pour simuler l'envoi
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      companyName: '',
      employeeCount: 50,
      sector: '',
      email: '',
      phone: '',
      message: '',
      gdprConsent: false
    })
    setIsSubmitted(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (isSubmitted) {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleClose}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-slate-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 max-w-md w-full shadow-xl shadow-cyan-500/10"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Demande envoyée !
                </h3>
                
                <p className="text-slate-300 mb-6">
                  Notre équipe reviendra vers vous sous 24h pour organiser votre démonstration personnalisée.
                </p>
                
                <Button
                  onClick={handleClose}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
                >
                  Fermer
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-slate-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 max-w-2xl w-full shadow-xl shadow-cyan-500/10 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Demander une démo
                </h2>
                <p className="text-slate-300">
                  Protégez votre équipe avec SkillShield Entreprise
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <Building2 className="w-4 h-4 inline mr-2" />
                  Nom de l'entreprise *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              {/* Employee Count */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Nombre d'employés : {formData.employeeCount}
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={formData.employeeCount}
                  onChange={(e) => handleInputChange('employeeCount', parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>10</span>
                  <span>500+</span>
                </div>
              </div>

              {/* Sector */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Secteur d'activité *
                </label>
                <select
                  required
                  value={formData.sector}
                  onChange={(e) => handleInputChange('sector', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                >
                  <option value="">Sélectionner un secteur</option>
                  {sectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email professionnel *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                  placeholder="votre.email@entreprise.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Besoins spécifiques
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Décrivez vos besoins spécifiques, défis actuels, ou questions..."
                />
              </div>

              {/* GDPR Consent */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="gdpr"
                  required
                  checked={formData.gdprConsent}
                  onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                  className="mt-1 w-4 h-4 text-cyan-500 bg-slate-800 border-slate-600 rounded focus:ring-cyan-500/20 focus:ring-2"
                />
                <label htmlFor="gdpr" className="text-sm text-slate-300">
                  J'accepte que mes données soient traitées conformément à la{' '}
                  <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                    politique de confidentialité
                  </a>{' '}
                  et j'accepte d'être contacté par l'équipe SkillShield. *
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !formData.gdprConsent}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Envoi en cours...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Être rappelé sous 24h
                  </div>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
