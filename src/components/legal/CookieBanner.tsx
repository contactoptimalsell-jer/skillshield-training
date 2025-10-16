import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings, Cookie, Shield, BarChart3, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CookieConsent {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieBannerProps {
  onConsentChange: (consent: CookieConsent | null) => void
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onConsentChange }) => {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true, // Toujours true car obligatoire
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Vérifier si le consentement existe déjà
    const savedConsent = localStorage.getItem('cookie-consent')
    if (!savedConsent) {
      setShowBanner(true)
    } else {
      const parsedConsent = JSON.parse(savedConsent)
      setConsent(parsedConsent)
      onConsentChange(parsedConsent)
    }
  }, [onConsentChange])

  const handleAcceptAll = () => {
    const newConsent = {
      essential: true,
      analytics: true,
      marketing: true
    }
    saveConsent(newConsent)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const newConsent = {
      essential: true,
      analytics: false,
      marketing: false
    }
    saveConsent(newConsent)
    setShowBanner(false)
  }

  const handleCustomSave = () => {
    saveConsent(consent)
    setShowModal(false)
    setShowBanner(false)
  }

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    setConsent(newConsent)
    onConsentChange(newConsent)
    
    // Charger les scripts selon le consentement
    loadScripts(newConsent)
  }

  const loadScripts = (consent: CookieConsent) => {
    if (consent.analytics) {
      // Charger Google Analytics
      loadGoogleAnalytics()
    }
    
    if (consent.marketing) {
      // Charger les pixels marketing
      loadMarketingScripts()
    }
  }

  const loadGoogleAnalytics = () => {
    // Simulation du chargement de Google Analytics
    console.log('Google Analytics chargé')
    // Dans un vrai projet, vous chargeriez ici le script GA
  }

  const loadMarketingScripts = () => {
    // Simulation du chargement des scripts marketing
    console.log('Scripts marketing chargés')
    // Dans un vrai projet, vous chargeriez ici les pixels Facebook, LinkedIn, etc.
  }

  if (!showBanner) return null

  return (
    <>
      {/* Bandeau principal */}
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl p-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                {/* Icône et texte */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <Cookie className="w-6 h-6 text-amber-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      🍪 Nous utilisons des cookies
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Nous utilisons des cookies pour améliorer votre expérience, 
                      analyser notre audience et personnaliser le contenu.
                    </p>
                    <Link 
                      to="/legal/cookies" 
                      className="text-cyan-600 hover:text-cyan-700 text-sm font-medium underline mt-1 inline-block"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                  >
                    <Settings className="w-4 h-4" />
                    Personnaliser
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRejectAll}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    Tout refuser
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAcceptAll}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm font-medium"
                  >
                    Tout accepter
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modal de personnalisation */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Cookie className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Gestion des Cookies
                  </h2>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Contenu */}
              <div className="p-6 space-y-6">
                <p className="text-gray-600">
                  Choisissez les types de cookies que vous acceptez. Les cookies essentiels 
                  sont nécessaires au fonctionnement du site.
                </p>

                {/* Cookies essentiels */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          ☑️ Cookies essentiels (obligatoires)
                        </h3>
                        <span className="text-sm text-green-600 font-medium">Toujours actifs</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Nécessaires au fonctionnement du site (connexion, sécurité, préférences)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cookies analytiques */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          ☐ Cookies analytiques
                        </h3>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={consent.analytics}
                            onChange={(e) => setConsent(prev => ({ ...prev, analytics: e.target.checked }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Nous aident à comprendre comment vous utilisez le site
                      </p>
                      <p className="text-xs text-gray-500">
                        Prestataire : Google Analytics
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cookies marketing */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Target className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          ☐ Cookies marketing
                        </h3>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={consent.marketing}
                            onChange={(e) => setConsent(prev => ({ ...prev, marketing: e.target.checked }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Personnalisent les publicités que vous voyez
                      </p>
                      <p className="text-xs text-gray-500">
                        Prestataires : Google Ads, LinkedIn, Facebook
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lien vers la politique */}
                <div className="text-center">
                  <Link 
                    to="/legal/cookies" 
                    className="text-cyan-600 hover:text-cyan-700 text-sm font-medium underline"
                  >
                    Consulter notre politique de cookies complète
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-medium"
                >
                  Tout accepter
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCustomSave}
                  className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Enregistrer mes choix
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

