/**
 * Page de Login Émotionnelle - Phase Pré-inscription
 * Expérience puissante qui projette vers le futur
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EmotionalTestimonials } from './EmotionalTestimonials'
import { FuturePromiseSection } from './FuturePromiseSection'
import { FormationsPreviewSection } from './FormationsPreviewSection'
import { ElevationVisuals } from './ElevationVisuals'
import { PreLaunchCTA, ForgotPasswordLink } from './PreLaunchCTA'
import { FreeBenefitsSection } from './FreeBenefitsSection'

interface EmotionalLoginPageProps {
  emailInputRef?: React.RefObject<HTMLInputElement>
  scrollToEmail?: () => void
}

export const EmotionalLoginPage: React.FC<EmotionalLoginPageProps> = ({ 
  emailInputRef,
  scrollToEmail 
}) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleJoinWaitlist = async () => {
    setLoading(true)
    // Simuler l'inscription à la liste d'attente
    setTimeout(() => {
      setLoading(false)
      // Rediriger vers la page de succès
      window.location.href = '/waitlist/success'
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Form & Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour à l'accueil
              </Link>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Shield className="w-12 h-12 text-cyan-400" />
                </motion.div>
                <span className="text-white text-3xl font-bold">SkillShield</span>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-cyan-400 text-lg font-semibold"
              >
                Votre futur commence ici
              </motion.p>
            </motion.div>

            {/* Future Promise Section */}
            <FuturePromiseSection />

            {/* Main Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg 
                rounded-2xl p-8 border border-white/10 shadow-2xl shadow-cyan-500/10 mb-6"
            >
              <div className="text-center mb-6">
                <h1 className="text-white text-2xl font-bold mb-2">Bon retour ! 👋</h1>
                <p className="text-gray-400">
                  Rejoignez la communauté des professionnels qui anticipent l'avenir
                </p>
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Adresse email professionnelle
                </label>
                <input
                  ref={emailInputRef}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@entreprise.com"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl 
                    text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 
                    transition-all duration-300"
                />
              </div>

              {/* CTA Button */}
              <PreLaunchCTA 
                onJoinWaitlist={handleJoinWaitlist}
                loading={loading}
              />

              {/* Forgot Password Link */}
              <ForgotPasswordLink />
            </motion.div>

            {/* Testimonials */}
            <EmotionalTestimonials />

            {/* Free Benefits Section */}
            <div className="mt-8">
              <FreeBenefitsSection />
            </div>
          </div>
        </div>

        {/* Right Side - Elevation Visuals & Formations */}
        <div className="hidden lg:flex flex-1 p-8 overflow-y-auto">
          <div className="w-full max-w-lg mx-auto space-y-6">
            {/* Elevation Visuals */}
            <ElevationVisuals scrollToEmail={scrollToEmail || (() => {})} />

            {/* Formations Preview */}
            <FormationsPreviewSection />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Section */}
      <div className="lg:hidden p-8 bg-gradient-to-t from-slate-900/90 to-transparent">
        <div className="max-w-md mx-auto">
          <ElevationVisuals scrollToEmail={scrollToEmail || (() => {})} />
          <div className="mt-6">
            <FormationsPreviewSection />
          </div>
        </div>
      </div>
    </div>
  )
}
