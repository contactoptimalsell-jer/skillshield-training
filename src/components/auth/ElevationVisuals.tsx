/**
 * Éléments Visuels d'Élévation Sociale
 * Compteurs temps réel, badges de potentialité, citations inspirantes
 */

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, DollarSign, Brain, Sparkles, Heart, Zap, Users, TrendingUp } from 'lucide-react'

interface Counter {
  value: number
  label: string
  suffix: string
  color: string
  icon: React.ReactNode
}

const counters: Counter[] = [
  { value: 17, label: "personnes sur la liste d'attente", suffix: "", color: "text-cyan-400", icon: <Users className="w-4 h-4" /> },
  { value: 3, label: "places restantes", suffix: "", color: "text-orange-400", icon: <Target className="w-4 h-4" /> },
  { value: 8, label: "inscrits aujourd'hui", suffix: "", color: "text-emerald-400", icon: <TrendingUp className="w-4 h-4" /> }
]

const inspirationalQuotes = [
  "Le meilleur moment pour se préparer au futur était hier. Le deuxième meilleur, c'est maintenant.",
  "Pendant que d'autres attendent, vous anticipez.",
  "L'IA ne remplacera pas ceux qui savent s'adapter.",
  "Votre carrière mérite mieux que l'incertitude.",
  "Ceux qui anticipent ne subissent jamais."
]

const potentialityItems = [
  { icon: <Target className="w-6 h-6 text-cyan-400" />, text: "Carrière maîtrisée (pas subie)" },
  { icon: <DollarSign className="w-6 h-6 text-emerald-400" />, text: "Revenus en croissance" },
  { icon: <Brain className="w-6 h-6 text-purple-400" />, text: "Sérénité face à l'IA" },
  { icon: <Sparkles className="w-6 h-6 text-pink-400" />, text: "Opportunités multiples" },
  { icon: <Zap className="w-6 h-6 text-yellow-400" />, text: "Liberté professionnelle" }
]

interface ElevationVisualsProps {
  scrollToEmail: () => void
}

export const ElevationVisuals: React.FC<ElevationVisualsProps> = ({ scrollToEmail }) => {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [animatedCounters, setAnimatedCounters] = useState(counters.map(c => ({ ...c, animatedValue: 0 })))

  // Quote rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  // Counter animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedCounters(counters.map(counter => ({
        ...counter,
        animatedValue: counter.value
      })))
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      {/* Live Counters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg 
          rounded-2xl p-6 border border-white/10 shadow-2xl shadow-cyan-500/10"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-400 font-semibold text-sm">🔥 En ce moment</span>
        </div>

        <div className="space-y-4">
          {animatedCounters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className={counter.color}>{counter.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5, type: "spring" }}
                    className={`${counter.color} font-bold text-2xl`}
                  >
                    {counter.animatedValue}
                  </motion.span>
                  <span className="text-gray-400 text-sm">{counter.label}</span>
                </div>
                {index === 1 && (
                  <span className="text-orange-400 text-xs bg-orange-500/20 px-2 py-1 rounded-full">
                    Phase 1 : Plus que 3 places (-50% à vie)
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-4 pt-4 border-t border-gray-700"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToEmail}
            className="w-full flex items-center justify-center gap-2 text-cyan-400 font-semibold 
              bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-md
              border border-cyan-500/30 rounded-xl py-3 px-4 hover:border-cyan-400/50 
              hover:bg-cyan-500/20 transition-all duration-300 group"
          >
            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            Rejoignez le mouvement ⚡
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Potentiality Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg 
          rounded-2xl p-6 border border-purple-500/30 shadow-2xl shadow-purple-500/10"
      >
        <div className="text-center mb-6">
          <h3 className="text-white font-bold text-xl mb-2">IMAGINEZ DEMAIN</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {potentialityItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-white font-medium group-hover:text-purple-100 transition-colors">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Breathing Animation */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl pointer-events-none"
        />
      </motion.div>

      {/* Inspirational Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg 
          rounded-2xl p-6 border border-white/10 shadow-2xl shadow-emerald-500/10"
      >
        <div className="text-center">
          <div className="text-emerald-400 text-4xl mb-4">"</div>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-white text-lg font-medium leading-relaxed mb-4"
            >
              {inspirationalQuotes[currentQuote]}
            </motion.p>
          </AnimatePresence>
          
          <div className="text-emerald-400 text-4xl">"</div>
          
          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {inspirationalQuotes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote 
                    ? 'bg-emerald-400 scale-125' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
