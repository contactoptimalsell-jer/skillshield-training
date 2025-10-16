import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  TrendingUp, 
  Check, 
  ArrowDown,
  Users,
  Target,
  Zap
} from 'lucide-react'
import { Badge } from './ui/Badge'
import { StatCard } from './ui/StatCard'
import { HeroButton } from './ui/HeroButton'
import { DashboardPragmaticPreview, HeroPragmaticStats } from './dashboard/HeroPragmaticStats'

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-gradient-shift" />
      
      {/* Mesh overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />

      {/* Content Centré - Une Seule Colonne */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <Badge variant="default" size="md">
            Lancé en bêta · 17 pionniers déjà inscrits
          </Badge>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-12 bg-gradient-to-r from-white via-cyan-400 to-white 
            bg-clip-text text-transparent leading-tight"
        >
          Votre carrière mérite<br />
          une assurance face à l'IA
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Protégez votre avenir professionnel contre l'obsolescence 
          des compétences causée par l'intelligence artificielle.
        </motion.p>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16 flex justify-center"
        >
          <HeroButton href="/calculator" target="_blank" variant="primary" size="lg" className="w-full max-w-lg px-8">
            Calculer mon risque IA gratuitement
          </HeroButton>
        </motion.div>

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 text-sm text-gray-400 mb-16"
        >
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500" /> Gratuit
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500" /> Sans carte bancaire
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500" /> Accès immédiat
          </span>
        </motion.div>

        {/* CTA Secondaire */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={() => scrollToSection('how-it-works')}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 
            transition-colors group cursor-pointer mb-16"
        >
          Comment ça marche ?
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.a>

        {/* Dashboard Preview Centré */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-16 flex justify-center"
        >
          <div className="w-full max-w-2xl">
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-lg 
              rounded-2xl shadow-2xl shadow-cyan-500/10 border border-white/10 p-6">
              
              {/* Mockup du dashboard avec statistiques pragmatiques */}
              <DashboardPragmaticPreview />
            </div>
          </div>
        </motion.div>

        {/* Stats Bar Centrée avec Statistiques Pragmatiques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <HeroPragmaticStats />
        </motion.div>
      </div>
    </section>
  )
}