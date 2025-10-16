/**
 * Témoignages Émotionnels Phase Pré-inscription
 * Crée de l'aspiration et de la potentialité
 */

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, DollarSign, Sparkles } from 'lucide-react'

interface Testimonial {
  id: number
  text: string
  author: string
  role: string
  status: string
  icon: React.ReactNode
  highlight: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "J'ai calculé mon score de risque : 68%. Maintenant je sais exactement quoi faire pour protéger ma carrière.",
    author: "Milan Z.",
    role: "Graphiste",
    status: "💡 En attente du lancement",
    icon: <Target className="w-5 h-5 text-cyan-400" />,
    highlight: "68%"
  },
  {
    id: 2,
    text: "L'IA avance trop vite, j'avais besoin d'un plan clair. Hâte d'accéder aux formations et de reprendre le contrôle.",
    author: "Thomas E.",
    role: "Product Manager",
    status: "🎯 Sur la liste d'attente",
    icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
    highlight: "plan clair"
  },
  {
    id: 3,
    text: "Enfin une solution concrète pour anticiper au lieu de subir. J'ai rejoint la liste immédiatement.",
    author: "Richard C.",
    role: "Développeur",
    status: "✨ Early Bird inscrit",
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    highlight: "anticipé"
  }
]

export const EmotionalTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative h-64 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg 
              rounded-2xl p-6 border border-white/20 shadow-2xl shadow-cyan-500/10 relative z-10">
              
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-4">
                {currentTestimonial.icon}
                <span className="text-sm font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                  {currentTestimonial.status}
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-white text-lg leading-relaxed mb-4 relative z-10">
                {currentTestimonial.text.split(currentTestimonial.highlight).map((part, index, array) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <span className="text-cyan-400 font-semibold bg-cyan-500/20 px-1 rounded">
                        {currentTestimonial.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{currentTestimonial.author}</div>
                  <div className="text-gray-400 text-sm">{currentTestimonial.role}</div>
                </div>
                
                {/* Progress Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-cyan-400 scale-125' 
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-transparent to-emerald-500/3 
        rounded-2xl pointer-events-none z-0" />
    </div>
  )
}
