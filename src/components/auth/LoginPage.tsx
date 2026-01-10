import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import {
  Shield,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  AlertCircle
} from 'lucide-react'
import toast from 'react-hot-toast'

// Types
interface LoginFormData {
  email: string
  password: string
}

interface LoginErrors {
  email?: string
  password?: string
  general?: string
}


export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<LoginErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const validateField = (name: keyof LoginFormData, value: string) => {
    let error = ''
    if (name === 'email') {
      if (!value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        error = 'Veuillez entrer une adresse email valide.'
      }
    } else if (name === 'password') {
      if (!value) {
        error = 'Le mot de passe est requis.'
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }))
    return error
  }

  const handleInputChange = (name: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    const emailError = validateField('email', formData.email)
    const passwordError = validateField('password', formData.password)

    if (emailError || passwordError) {
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // En phase MVP : toujours succès et redirect
      toast.success("Connexion réussie !")
      navigate('/dashboard') // ou /waitlist/success si pas de dashboard
    } catch (error) {
      setErrors({ general: 'Email ou mot de passe incorrect' })
      toast.error("Email ou mot de passe incorrect")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider: string) => {
    toast.success(`Connexion via ${provider}...`)
    // Simulate social login
    await new Promise((resolve) => setTimeout(resolve, 1500))
    navigate('/dashboard')
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Centered Layout */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-6">
              <motion.div
                className="flex items-center justify-center space-x-3 text-3xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Shield className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <span>SkillShield</span>
              </motion.div>
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Bon retour parmi nous ! 👋
            </h1>
            <p className="text-slate-300 text-base sm:text-lg">
              Connectez-vous pour accéder à votre protection carrière
            </p>
          </motion.div>

          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl">
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="votre@email.com"
                      className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-base ${
                        errors.email ? 'border-red-400' : 'border-white/20'
                      }`}
                      disabled={isLoading}
                      aria-invalid={!!errors.email}
                      aria-describedby="email-error"
                    />
                  </div>
                  {errors.email && (
                    <motion.div
                      id="email-error"
                      className="flex items-center space-x-2 text-red-400 text-xs"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email}</span>
                    </motion.div>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-white">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="••••••••"
                      className={`w-full pl-12 pr-12 py-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-base ${
                        errors.password ? 'border-red-400' : 'border-white/20'
                      }`}
                      disabled={isLoading}
                      aria-invalid={!!errors.password}
                      aria-describedby="password-error"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <motion.div
                      id="password-error"
                      className="flex items-center space-x-2 text-red-400 text-xs"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.password}</span>
                    </motion.div>
                  )}
                </div>

                {/* Options */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-cyan-400 bg-white/10 border-white/20 rounded focus:ring-cyan-400 accent-cyan-500"
                      disabled={isLoading}
                    />
                    <span className="text-sm text-slate-300">Se souvenir de moi</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>

                {/* General Error */}
                {errors.general && (
                  <motion.div
                    className="flex items-center space-x-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{errors.general}</span>
                  </motion.div>
                )}

                {/* Login Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading || !!errors.email || !!errors.password}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Connexion en cours...</span>
                    </>
                  ) : (
                    <span>Se connecter</span>
                  )}
                </motion.button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-white/20"></div>
                <span className="px-4 text-sm text-slate-400">ou</span>
                <div className="flex-1 border-t border-white/20"></div>
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <motion.button
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  className="w-full flex items-center justify-center space-x-3 py-3 px-6 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continuer avec Google</span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => handleSocialLogin('LinkedIn')}
                  className="w-full flex items-center justify-center space-x-3 py-3 px-6 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>Continuer avec LinkedIn</span>
                </motion.button>
              </div>

              {/* Footer */}
              <div className="mt-8 text-center text-sm text-slate-400">
                <p className="mb-2">
                  Pas encore membre ?{' '}
                  <Link
                    to="/signup"
                    className="text-cyan-400 hover:text-cyan-300 font-medium underline"
                  >
                    Créer un compte →
                  </Link>
                </p>
                <p className="text-xs text-slate-500">
                  En vous connectant, vous acceptez nos{' '}
                  <Link to="/legal/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                    Conditions d'utilisation
                  </Link>
                  {' '}et{' '}
                  <Link to="/legal/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                    Politique de confidentialité
                  </Link>
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-slate-400">
              <div className="flex items-center space-x-1">
                <Lock className="w-4 h-4" />
                <span>🔒 SSL</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>🇪🇺</span>
                <span>RGPD</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4" />
                <span>0 spam</span>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}
