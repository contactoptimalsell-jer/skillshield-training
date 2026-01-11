import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { isSignedIn } = useAuth()

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard', { replace: true })
    } else {
      navigate('/auth?mode=signin', { replace: true })
    }
  }, [isSignedIn, navigate])

  // Show loading while redirecting
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 text-white">Redirection...</p>
      </div>
    </div>
  )
}
