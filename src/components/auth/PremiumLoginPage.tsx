import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Shield, 
  Star,
  Users,
  TrendingUp,
  Award,
  Check,
  AlertCircle,
  ArrowRight
} from 'lucide-react'
import toast from 'react-hot-toast'
import { MobileBrandingHeader } from './MobileBrandingHeader'

// Types
interface LoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

interface FormErrors {
  email?: string
  password?: string
  general?: string
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const slideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const slideInFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

// Social proof data
const socialProof = [
  {
    icon: <Users className="w-6 h-6 text-cyan-400" />,
    number: "10+",
    text: "professionnels protégés",
    delay: 0.4
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    number: "92%",
    text: "de réduction des risques IA",
    delay: 0.5
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    number: "15 000+",
    text: "heures de formation suivies",
    delay: 0.6
  }
]

// Testimonials
const testimonials = [
  {
    text: "SkillShield m'a permis de pivoter avant que mon métier ne soit automatisé. Je suis serein aujourd'hui.",
    author: "Marie D.",
    role: "Graphiste → UX Designer",
    rating: 5
  },
  {
    text: "Grâce aux alertes personnalisées, j'ai anticipé les changements dans mon secteur.",
    author: "Richard C.",
    role: "Commerce → AI dans la musique",
    rating: 5
  },
  {
    text: "La formation continue m'a donné confiance pour l'avenir. Un investissement précieux.",
    author: "Milan Z.",
    role: "Ingénieur → Beta testeur",
    rating: 5
  }
]

export const PremiumLoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Password validation
  const validatePassword = (password: string): boolean => {
    return password.length >= 8
  }

  // Handle input changes
  const handleInputChange = (field: keyof LoginFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear errors when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }

    // Real-time validation
    if (field === 'email' && typeof value === 'string') {
      if (value.length > 0 && !validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Veuillez entrer une adresse email valide' }))
      }
    }

    if (field === 'password' && typeof value === 'string') {
      if (value.length > 0 && !validatePassword(value)) {
        setErrors(prev => ({ ...prev, password: 'Le mot de passe doit contenir au moins 8 caractères' }))
      }
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous errors
    setErrors({})

    // Validation
    const newErrors: FormErrors = {}
    
    if (!formData.email) {
      newErrors.email = 'L\'adresse email est requise'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide'
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis'
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate login success
      toast.success('Connexion réussie ! Redirection...', {
        duration: 2000,
        icon: '✅'
      })
      
      // Redirect to dashboard
      setTimeout(() => {
        navigate('/sentinelle')
      }, 2000)

    } catch (error) {
      setErrors({ general: 'Email ou mot de passe incorrect. Réessayez ou réinitialisez votre mot de passe.' })
      toast.error('Email ou mot de passe incorrect', {
        duration: 4000
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Handle social login
  const handleSocialLogin = (provider: string) => {
    toast.loading(`Connexion via ${provider}...`, {
      duration: 2000
    })
    
    setTimeout(() => {
      toast.success(`Connexion via ${provider} réussie !`, {
        duration: 2000
      })
      navigate('/sentinelle')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
      {/* Mobile Branding Header */}
      <MobileBrandingHeader 
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
      />
      
      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Section - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <motion.div 
          className="w-full max-w-md"
          {...slideInFromLeft}
        >
          {/* Header */}
          <motion.div className="text-center mb-8" {...fadeInUp}>
            <Link to="/" className="inline-block mb-6">
              <motion.div 
                className="flex items-center space-x-3 text-2xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-8 h-8 text-cyan-400" />
                <span>SkillShield</span>
              </motion.div>
            </Link>
            
            <h1 className="text-3xl font-bold text-white mb-2">
              Bon retour parmi nous ! 👋
            </h1>
            <p className="text-slate-300">
              Connectez-vous pour accéder à votre protection carrière
            </p>
          </motion.div>

          {/* Login Form */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 ${
                      errors.email ? 'border-red-400' : 'border-white/20'
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <motion.div 
                    className="flex items-center space-x-2 text-red-400 text-sm"
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
                <label className="text-sm font-medium text-white">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="••••••••"
                    className={`w-full pl-10 pr-12 py-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 ${
                      errors.password ? 'border-red-400' : 'border-white/20'
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <motion.div 
                    className="flex items-center space-x-2 text-red-400 text-sm"
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
                <label className="flex items-center space-x-2 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                    className="w-4 h-4 text-cyan-400 bg-white/10 border-white/20 rounded focus:ring-cyan-400"
                    disabled={isLoading}
                  />
                  <span>Se souvenir de moi</span>
                </label>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-cyan-400 hover:text-cyan-300 underline transition-colors"
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
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.general}</span>
                </motion.div>
              )}

              {/* Submit Button */}
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
                    <span>Connexion...</span>
                  </>
                ) : (
                  <>
                    <span>Se connecter</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
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
                onClick={() => handleSocialLogin('Google')}
                className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-white/20 rounded-lg text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continuer avec Google</span>
              </motion.button>

              <motion.button
                onClick={() => handleSocialLogin('LinkedIn')}
                className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-white/20 rounded-lg text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                <svg className="w-5 h-5" fill="#0077B5" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Continuer avec LinkedIn</span>
              </motion.button>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-slate-400">
              <p>
                En vous connectant, vous acceptez nos{' '}
                <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                  Conditions d'utilisation
                </Link>{' '}
                et{' '}
                <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                  Politique de confidentialité
                </Link>
              </p>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-slate-400">
                Pas encore membre ?{' '}
                <Link 
                  to="/signup" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium underline"
                >
                  Créer un compte
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Security Badge */}
          <motion.div 
            className="flex items-center justify-center space-x-2 mt-6 text-sm text-slate-400"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Lock className="w-4 h-4" />
            <span>🔒 Connexion sécurisée SSL</span>
          </motion.div>
        </motion.div>
        </div>

        {/* Right Section - Branding */}
        <div className="flex-1 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center text-center px-12"
          {...slideInFromRight}
        >
          {/* Logo */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Shield className="w-32 h-32 text-cyan-400 mx-auto" />
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.h2 
            className="text-5xl font-bold text-white mb-8 leading-tight"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Votre carrière mérite
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              une assurance face à l'IA
            </span>
          </motion.h2>

          {/* Social Proof Cards */}
          <motion.div 
            className="grid grid-cols-1 gap-4 mb-12"
            {...staggerContainer}
          >
            {socialProof.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {item.icon}
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{item.number}</div>
                  <div className="text-sm text-slate-300">{item.text}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-md"
            {...fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white italic mb-4">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-slate-300 text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                  <div className="flex space-x-1 ml-auto">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Mobile Login Form */}
      <div className="lg:hidden p-6">
        <motion.div 
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-6">
              <motion.div 
                className="flex items-center justify-center space-x-3 text-xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-6 h-6 text-cyan-400" />
                <span>SkillShield</span>
              </motion.div>
            </Link>
            
            <h1 className="text-2xl font-bold text-white mb-2">
              Bon retour parmi nous ! 👋
            </h1>
            <p className="text-slate-300 text-sm">
              Connectez-vous pour accéder à votre protection carrière
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-sm ${
                      errors.email ? 'border-red-400' : 'border-white/20'
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <motion.div 
                    className="flex items-center space-x-2 text-red-400 text-xs"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </motion.div>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="••••••••"
                    className={`w-full pl-10 pr-12 py-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-sm ${
                      errors.password ? 'border-red-400' : 'border-white/20'
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <motion.div 
                    className="flex items-center space-x-2 text-red-400 text-xs"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.password}</span>
                  </motion.div>
                )}
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 text-slate-300">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                    className="w-4 h-4 text-cyan-400 bg-white/10 border-white/20 rounded focus:ring-cyan-400"
                    disabled={isLoading}
                  />
                  <span>Se souvenir de moi</span>
                </label>
                <Link 
                  to="/forgot-password" 
                  className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              {/* General Error */}
              {errors.general && (
                <motion.div 
                  className="flex items-center space-x-2 text-red-400 text-xs bg-red-400/10 p-3 rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.general}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading || !!errors.email || !!errors.password}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Connexion...</span>
                  </>
                ) : (
                  <>
                    <span>Se connecter</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-5">
              <div className="flex-1 border-t border-white/20"></div>
              <span className="px-4 text-xs text-slate-400">ou</span>
              <div className="flex-1 border-t border-white/20"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <motion.button
                onClick={() => handleSocialLogin('Google')}
                className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-white/20 rounded-lg text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continuer avec Google</span>
              </motion.button>

              <motion.button
                onClick={() => handleSocialLogin('LinkedIn')}
                className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-white/20 rounded-lg text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                <svg className="w-4 h-4" fill="#0077B5" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Continuer avec LinkedIn</span>
              </motion.button>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-xs text-slate-400">
              <p>
                En vous connectant, vous acceptez nos{' '}
                <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                  Conditions d'utilisation
                </Link>{' '}
                et{' '}
                <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                  Politique de confidentialité
                </Link>
              </p>
            </div>

            {/* Sign Up Link */}
            <div className="mt-5 text-center">
              <p className="text-slate-400 text-sm">
                Pas encore membre ?{' '}
                <Link 
                  to="/signup" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium underline"
                >
                  Créer un compte
                </Link>
              </p>
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center space-x-2 mt-6 text-xs text-slate-400">
            <Lock className="w-3 h-3" />
            <span>🔒 Connexion sécurisée SSL</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
