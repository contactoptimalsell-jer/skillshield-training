import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { mockUser, mockRiskScore, mockAIAlerts, mockFormations, mockBootcamps, mockReconversionPlan, mockSectorReports, dashboardWidgets } from '../data/mockData'
import type { User } from '../data/mockData'

interface DashboardContextType {
  // User data
  user: typeof mockUser
  updateUser: (updates: Partial<typeof mockUser>) => void
  
  // Risk score data
  riskScore: typeof mockRiskScore
  updateRiskScore: (updates: Partial<typeof mockRiskScore>) => void
  
  // AI alerts
  alerts: typeof mockAIAlerts
  markAlertAsRead: (alertId: string) => void
  addAlert: (alert: typeof mockAIAlerts[0]) => void
  
  // Formations
  formations: typeof mockFormations
  updateFormationProgress: (formationId: string, progress: number) => void
  addFormation: (formation: Omit<typeof mockFormations[0], 'id'>) => void
  
  // Bootcamps
  bootcamps: typeof mockBootcamps
  reserveBootcamp: (bootcampId: string) => void
  
  // Reconversion plan
  reconversionPlan: typeof mockReconversionPlan
  updatePlanProgress: (phaseIndex: number, progress: number) => void
  
  // Sector reports
  reports: typeof mockSectorReports
  
  // Dashboard widgets
  widgets: typeof dashboardWidgets
  
  // UI state
  sidebarCollapsed: boolean
  toggleSidebar: () => void
  
  // Notifications
  notifications: Array<{
    id: string
    type: 'success' | 'error' | 'info' | 'warning'
    message: string
    timestamp: string
    isRead: boolean
  }>
  addNotification: (notification: Omit<DashboardContextType['notifications'][0], 'id' | 'timestamp'>) => void
  markNotificationAsRead: (notificationId: string) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export const useDashboard = () => {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }
  return context
}

interface DashboardProviderProps {
  children: ReactNode
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const { user: clerkUser } = useUser()
  const [user, setUser] = useState(mockUser)
  const [riskScore, setRiskScore] = useState(mockRiskScore)
  
  // Synchroniser les données utilisateur avec Clerk
  useEffect(() => {
    if (clerkUser) {
      // Construire le nom depuis Clerk (firstName + lastName ou email/username)
      const firstName = clerkUser.firstName || ''
      const lastName = clerkUser.lastName || ''
      const fullName = firstName && lastName 
        ? `${firstName} ${lastName}`
        : firstName || clerkUser.username || clerkUser.emailAddresses[0]?.emailAddress || 'Utilisateur'
      
      // Construire les initiales pour l'avatar
      const initials = firstName && lastName
        ? `${firstName[0]}${lastName[0]}`.toUpperCase()
        : firstName
        ? firstName[0].toUpperCase()
        : fullName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
      
      // Mettre à jour l'utilisateur avec les données Clerk
      setUser(prev => ({
        ...prev,
        id: clerkUser.id,
        name: fullName,
        email: clerkUser.emailAddresses[0]?.emailAddress || prev.email,
        avatar: initials
      }))
    }
  }, [clerkUser])
  const [alerts, setAlerts] = useState(mockAIAlerts)
  const [formations, setFormations] = useState(mockFormations)
  const [bootcamps, setBootcamps] = useState(mockBootcamps)
  const [reconversionPlan, setReconversionPlan] = useState(mockReconversionPlan)
  const [reports] = useState(mockSectorReports)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [notifications, setNotifications] = useState<DashboardContextType['notifications']>([
    {
      id: 'notif_1',
      type: 'success',
      message: 'Bienvenue dans SkillShield Bouclier ! Votre protection est active.',
      timestamp: new Date().toISOString(),
      isRead: false
    },
    {
      id: 'notif_2',
      type: 'info',
      message: 'Nouvelle alerte IA critique disponible dans votre feed.',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      isRead: false
    }
  ])

  const updateUser = (updates: Partial<typeof mockUser>) => {
    setUser(prev => ({ ...prev, ...updates }))
  }

  const updateRiskScore = (updates: Partial<typeof mockRiskScore>) => {
    setRiskScore(prev => ({ ...prev, ...updates }))
  }

  const markAlertAsRead = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, isRead: true } : alert
    ))
  }

  const addAlert = (alert: typeof mockAIAlerts[0]) => {
    setAlerts(prev => [alert, ...prev])
  }

  const updateFormationProgress = (formationId: string, progress: number) => {
    setFormations(prev => prev.map(formation => 
      formation.id === formationId 
        ? { ...formation, progress, status: progress === 100 ? 'completed' : 'in_progress' }
        : formation
    ))
  }

  const addFormation = (formation: Omit<typeof mockFormations[0], 'id'>) => {
    const newFormation: typeof mockFormations[0] = {
      ...formation,
      id: `formation_${Date.now()}`,
      status: formation.status || 'not_started',
      progress: formation.progress || 0
    }
    setFormations(prev => [newFormation, ...prev])
  }

  const reserveBootcamp = (bootcampId: string) => {
    setBootcamps(prev => prev.map(bootcamp => 
      bootcamp.id === bootcampId 
        ? { ...bootcamp, isReserved: true, spotsLeft: bootcamp.spotsLeft - 1 }
        : bootcamp
    ))
  }

  const updatePlanProgress = (phaseIndex: number, progress: number) => {
    setReconversionPlan(prev => ({
      ...prev,
      phases: prev.phases.map((phase, index) => 
        index === phaseIndex 
          ? { ...phase, progress, status: progress === 100 ? 'completed' : 'in_progress' }
          : phase
      )
    }))
  }

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev)
  }

  const addNotification = (notification: Omit<DashboardContextType['notifications'][0], 'id' | 'timestamp'>) => {
    const newNotification = {
      ...notification,
      id: `notif_${Date.now()}`,
      timestamp: new Date().toISOString(),
      isRead: false
    }
    setNotifications(prev => [newNotification, ...prev])
  }

  const markNotificationAsRead = (notificationId: string) => {
    setNotifications(prev => prev.map(notification => 
      notification.id === notificationId ? { ...notification, isRead: true } : notification
    ))
  }

  const value = {
    user,
    updateUser,
    riskScore,
    updateRiskScore,
    alerts,
    markAlertAsRead,
    addAlert,
    formations,
    updateFormationProgress,
    addFormation,
    bootcamps,
    reserveBootcamp,
    reconversionPlan,
    updatePlanProgress,
    reports,
    widgets: dashboardWidgets,
    sidebarCollapsed,
    toggleSidebar,
    notifications,
    addNotification,
    markNotificationAsRead
  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}

