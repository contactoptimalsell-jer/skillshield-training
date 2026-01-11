import React, { useEffect } from 'react'
import { SignIn, SignUp } from '@clerk/clerk-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import { Shield, Sparkles } from 'lucide-react'

export const ClerkAuthPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { isSignedIn } = useAuth()
  const mode = searchParams.get('mode') || 'signin'
  const plan = searchParams.get('plan')

  // Redirect if already signed in
  useEffect(() => {
    if (isSignedIn) {
      const redirectTo = plan ? `/auth/redirect?plan=${plan}` : '/sentinelle'
      navigate(redirectTo, { replace: true })
    }
  }, [isSignedIn, navigate, plan])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative">
                <Shield className="w-10 h-10 text-cyan-400" />
                <Sparkles className="w-5 h-5 text-cyan-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <h1 className="text-3xl font-bold text-white">SkillShield</h1>
            </div>
            <p className="text-slate-300 text-sm">
              {mode === 'signin' ? 'Connectez-vous à votre compte' : 'Créez votre compte'}
            </p>
          </motion.div>

          {/* Clerk Components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl"
          >
            {mode === 'signin' ? (
              <SignIn
                routing="path"
                path="/auth"
                signUpUrl="/auth?mode=signup"
                afterSignInUrl={plan ? `/auth/redirect?plan=${plan}` : '/dashboard'}
                appearance={{
                  elements: {
                    rootBox: 'mx-auto',
                    card: 'bg-transparent shadow-none',
                    headerTitle: 'text-white',
                    headerSubtitle: 'text-slate-300',
                    socialButtonsBlockButton: 'bg-white/10 hover:bg-white/20 text-white border-white/20',
                    formButtonPrimary: 'bg-cyan-500 hover:bg-cyan-600 text-white',
                    formFieldLabel: 'text-slate-300',
                    formFieldInput: 'bg-white/10 border-white/20 text-white placeholder:text-slate-400',
                    footerActionLink: 'text-cyan-400 hover:text-cyan-300',
                    identityPreviewText: 'text-white',
                    identityPreviewEditButton: 'text-cyan-400',
                  }
                }}
              />
            ) : (
              <SignUp
                routing="path"
                path="/auth"
                signInUrl="/auth?mode=signin"
                afterSignUpUrl={plan ? `/auth/redirect?plan=${plan}` : '/sentinelle'}
                appearance={{
                  elements: {
                    rootBox: 'mx-auto',
                    card: 'bg-transparent shadow-none',
                    headerTitle: 'text-white',
                    headerSubtitle: 'text-slate-300',
                    socialButtonsBlockButton: 'bg-white/10 hover:bg-white/20 text-white border-white/20',
                    formButtonPrimary: 'bg-cyan-500 hover:bg-cyan-600 text-white',
                    formFieldLabel: 'text-slate-300',
                    formFieldInput: 'bg-white/10 border-white/20 text-white placeholder:text-slate-400',
                    footerActionLink: 'text-cyan-400 hover:text-cyan-300',
                  }
                }}
              />
            )}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-6 text-sm text-slate-400"
          >
            <p>
              En continuant, vous acceptez nos{' '}
              <a href="/legal/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                Conditions d'utilisation
              </a>
              {' '}et notre{' '}
              <a href="/legal/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                Politique de confidentialité
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
