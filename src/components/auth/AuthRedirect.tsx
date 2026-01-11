import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { useAuth as useLocalAuth } from '../../context/AuthContext'

export const AuthRedirect: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useLocalAuth()
  const plan = searchParams.get('plan')

  useEffect(() => {
    if (!isLoaded) {
      return
    }

    if (!isSignedIn || !user) {
      // Not authenticated, redirect to login
      navigate('/login', { replace: true })
      return
    }

    // Determine redirect based on plan or default dashboard
    if (plan) {
      // Redirect based on plan selection
      if (plan === 'bouclier') {
        navigate('/dashboard', { replace: true })
      } else if (plan === 'protection-complete') {
        navigate('/dashboard', { replace: true })
      } else {
        navigate('/dashboard', { replace: true })
      }
    } else {
      // Default redirect to main dashboard
      navigate('/dashboard', { replace: true })
    }
  }, [isSignedIn, isLoaded, user, navigate, plan])

  // Show loading while redirecting
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Redirection...</p>
      </div>
    </div>
  )
}
