import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'
import { Button } from '../ui/Button'

interface UpgradeBannerProps {
  title: string
  description: string
  benefits: string[]
  ctaText?: string
  onUpgrade?: () => void
  variant?: 'subtle' | 'prominent' | 'card'
  className?: string
}

export const UpgradeBanner: React.FC<UpgradeBannerProps> = ({
  title,
  description,
  benefits,
  ctaText = "Passer à Bouclier",
  onUpgrade,
  variant = 'subtle',
  className = ''
}) => {
  if (variant === 'subtle') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-r from-secondary-50 to-accent-50 border border-secondary-200 rounded-lg p-4 ${className}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={onUpgrade}
            className="group"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    )
  }

  if (variant === 'card') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-br from-secondary-500 to-accent-500 text-white rounded-xl p-6 shadow-lg ${className}`}
      >
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/90 mb-4">{description}</p>
            
            <div className="space-y-2 mb-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-secondary-600 hover:bg-gray-100 border-white"
              onClick={onUpgrade}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  // Prominent variant
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-gradient-to-r from-secondary-500 to-accent-500 text-white rounded-xl p-8 shadow-xl ${className}`}
    >
      <div className="text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-white/90 mb-6 max-w-md mx-auto">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-3">
              <span className="text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="lg"
          className="bg-white text-secondary-600 hover:bg-gray-100 border-white font-semibold"
          onClick={onUpgrade}
        >
          {ctaText}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </motion.div>
  )
}

interface PlanBadgeProps {
  plan: 'Sentinelle' | 'Bouclier' | 'Forteresse'
  isCurrent?: boolean
  className?: string
}

export const PlanBadge: React.FC<PlanBadgeProps> = ({
  plan,
  isCurrent = false,
  className = ''
}) => {
  const getBadgeStyles = () => {
    switch (plan) {
      case 'Sentinelle':
        return 'bg-gray-500 text-white'
      case 'Bouclier':
        return 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white'
      case 'Forteresse':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getBadgeStyles()} ${className}`}>
      {isCurrent && '✓ '}
      {plan}
    </span>
  )
}

