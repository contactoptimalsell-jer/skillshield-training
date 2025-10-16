import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, AlertTriangle, Clock } from 'lucide-react'
import { Card } from './ui/Card'
import { formatNumber } from '../lib/utils'
import { useApp } from '../context/AppContext'
import { IAImpactTimeline } from './IAImpactTimeline'

const stats = [
  {
    icon: TrendingUp,
    number: 77999,
    suffix: '',
    label: 'emplois tech éliminés par l\'IA en 2025',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    source: 'MIT Technology Review 2024'
  },
  {
    icon: Users,
    number: 39,
    suffix: '%',
    label: 'des compétences deviendront obsolètes d\'ici 2025',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    source: 'World Economic Forum 2024'
  },
  {
    icon: AlertTriangle,
    number: 50,
    suffix: '%',
    label: 'des métiers transformés d\'ici 2027',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    source: 'McKinsey Global Institute 2024'
  },
  {
    icon: Clock,
    number: 18,
    suffix: ' mois',
    label: 'temps moyen d\'adaptation aux changements IA',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    source: 'Harvard Business Review 2024'
  }
]

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2, 
  suffix = '', 
  className = '' 
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [end, duration, isVisible])

  return (
    <span
      className={className}
      onMouseEnter={() => setIsVisible(true)}
    >
      {formatNumber(count)}{suffix}
    </span>
  )
}

export const WhyNow: React.FC = () => {
  const { openCalculator, showNotification } = useApp()
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Pourquoi agir maintenant ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les données parlent d'elles-mêmes. L'impact de l'IA sur l'emploi s'accélère 
            et il est temps de se préparer.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:scale-105 transition-transform duration-300">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>

                {/* Number */}
                <div className="mb-2">
                  {inView ? (
                    <AnimatedCounter
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix}
                      className={`text-3xl font-bold ${stat.color}`}
                    />
                  ) : (
                    <span className={`text-3xl font-bold ${stat.color}`}>
                      0{stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  {stat.label}
                </p>

                {/* Source */}
                <p className="text-xs text-gray-500">
                  Source: {stat.source}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Ne laissez pas l'IA dicter votre avenir professionnel
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Chaque jour compte. Plus vous attendez, plus il sera difficile de vous adapter 
              aux changements qui s'accélèrent. Commencez votre analyse de risque dès maintenant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Rediriger vers le dashboard Sentinelle
                window.location.href = '/sentinelle'
              }}
              className="bg-gradient-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Découvrir SkillShield Gratuitement
            </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('testimonials')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="border-2 border-primary-900 text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-900 hover:text-white transition-all duration-200"
              >
                Voir les témoignages
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <IAImpactTimeline />
        </motion.div>
      </div>
    </section>
  )
}
