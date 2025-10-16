import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { userService } from '../../services/userService'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredPlan?: 'sentinelle' | 'bouclier' | 'forteresse'
  fallbackPath?: string
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredPlan,
  fallbackPath 
}) => {
  const { user, loading } = useAuth()
  const [userData, setUserData] = React.useState<any>(null)
  const [userLoading, setUserLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchUserData = async () => {
      if (!loading && user) {
        try {
          const data = await userService.getCurrentUser()
          setUserData(data)
        } catch (error) {
          console.error('Error fetching user data:', error)
        } finally {
          setUserLoading(false)
        }
      } else if (!loading && !user) {
        setUserLoading(false)
      }
    }

    fetchUserData()
  }, [user, loading])

  // Show loading while checking authentication
  if (loading || userLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Vérification de l'authentification...</p>
        </div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // Check if user has completed onboarding
  if (!userData?.profile) {
    return <Navigate to="/onboarding" replace />
  }

  // Check plan requirements
  if (requiredPlan) {
    const planHierarchy = {
      sentinelle: 0,
      bouclier: 1,
      forteresse: 2
    }

    const userPlanLevel = planHierarchy[userData.current_plan as keyof typeof planHierarchy] || 0
    const requiredPlanLevel = planHierarchy[requiredPlan]

    if (userPlanLevel < requiredPlanLevel) {
      // User doesn't have the required plan, redirect to upgrade page
      return <Navigate to={fallbackPath || '/sentinelle/plans'} replace />
    }
  }

  return <>{children}</>
}

