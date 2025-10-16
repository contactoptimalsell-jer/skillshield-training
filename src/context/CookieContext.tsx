import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface CookieConsent {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieContextType {
  consent: CookieConsent | null
  updateConsent: (consent: CookieConsent) => void
  showBanner: boolean
  setShowBanner: (show: boolean) => void
}

const CookieContext = createContext<CookieContextType | undefined>(undefined)

export const useCookie = () => {
  const context = useContext(CookieContext)
  if (context === undefined) {
    throw new Error('useCookie must be used within a CookieProvider')
  }
  return context
}

interface CookieProviderProps {
  children: ReactNode
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Vérifier si le consentement existe déjà
    const savedConsent = localStorage.getItem('cookie-consent')
    if (savedConsent) {
      const parsedConsent = JSON.parse(savedConsent)
      setConsent(parsedConsent)
    } else {
      // Afficher le bandeau si aucun consentement n'est trouvé
      setShowBanner(true)
    }
  }, [])

  const updateConsent = (newConsent: CookieConsent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    setConsent(newConsent)
    setShowBanner(false)
    
    // Charger les scripts selon le consentement
    loadScripts(newConsent)
  }

  const loadScripts = (consent: CookieConsent) => {
    if (consent.analytics) {
      loadGoogleAnalytics()
    }
    
    if (consent.marketing) {
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

  const value: CookieContextType = {
    consent,
    updateConsent,
    showBanner,
    setShowBanner
  }

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  )
}

