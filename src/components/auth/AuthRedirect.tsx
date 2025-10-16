import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { userService } from '../../services/userService'
import { useNavigate } from 'react-router-dom'

export const AuthRedirect: React.FC = () => {
  const { user, loading } = useAuth()
  const [profileLoading, setProfileLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const checkUserProfile = async () => {
      if (!loading && user) {
        try {
          const userData = await userService.getCurrentUser()
          
          if (userData?.profile) {
            // User has completed onboarding, redirect to appropriate dashboard
            const plan = userData.current_plan
            
            if (plan === 'sentinelle') {
              navigate('/sentinelle', { replace: true })
            } else {
              navigate('/dashboard', { replace: true })
            }
          } else {
            // User hasn't completed onboarding
            navigate('/onboarding', { replace: true })
          }
        } catch (error) {
          console.error('Error checking user profile:', error)
          navigate('/onboarding', { replace: true })
        } finally {
          setProfileLoading(false)
        }
      } else if (!loading && !user) {
        // No user, redirect to login
        navigate('/login', { replace: true })
      }
    }

    checkUserProfile()
  }, [user, loading, navigate])

  // Show loading while checking profile
  if (loading || profileLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    )
  }

  return null
}

