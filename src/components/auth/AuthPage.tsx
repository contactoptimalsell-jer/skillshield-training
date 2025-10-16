import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import { ForgotPasswordForm } from './ForgotPasswordForm'
import { EmotionalLoginPage } from './EmotionalLoginPage'

type AuthMode = 'login' | 'signup' | 'forgot-password'

export const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login')
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && user) {
      // Redirect to appropriate dashboard based on plan
      navigate('/sentinelle', { replace: true })
    }
  }, [user, loading, navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    )
  }

  const handleToggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login')
  }

  const handleForgotPassword = () => {
    setMode('forgot-password')
  }

  const handleBackToLogin = () => {
    setMode('login')
  }

  // Use emotional login page for login mode
  if (mode === 'login') {
    return <EmotionalLoginPage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-primary-900 mb-4">
                SkillShield
              </h1>
              <p className="text-2xl text-gray-600 mb-6">
                Votre carrière mérite une assurance face à l'IA
              </p>
              <p className="text-lg text-gray-500">
                Protégez votre avenir professionnel contre l'obsolescence des compétences causée par l'intelligence artificielle.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700">Analyse de votre risque IA</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700">Alertes personnalisées</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700">Plan de reconversion</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700">Communauté d'experts</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Auth Forms */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            {mode === 'signup' && (
              <SignupForm onToggleMode={handleToggleMode} />
            )}
            {mode === 'forgot-password' && (
              <ForgotPasswordForm onBack={handleBackToLogin} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
