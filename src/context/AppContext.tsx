import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  isCalculatorOpen: boolean
  openCalculator: () => void
  closeCalculator: () => void
  showNotification: (message: string, type?: 'success' | 'error' | 'info') => void
  notification: { message: string; type: 'success' | 'error' | 'info' } | null
  clearNotification: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useApp = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null)

  const openCalculator = () => {
    setIsCalculatorOpen(true)
  }

  const closeCalculator = () => {
    setIsCalculatorOpen(false)
  }

  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 4000)
  }

  const clearNotification = () => {
    setNotification(null)
  }

  const value = {
    isCalculatorOpen,
    openCalculator,
    closeCalculator,
    showNotification,
    notification,
    clearNotification,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

