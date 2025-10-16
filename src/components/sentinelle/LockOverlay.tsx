import React from 'react'
import { motion } from 'framer-motion'
import { Lock, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

interface LockOverlayProps {
  children: React.ReactNode
  title: string
  description: string
  ctaText?: string
  onUpgrade?: () => void
  className?: string
}

export const LockOverlay: React.FC<LockOverlayProps> = ({
  children,
  title,
  description,
  ctaText = "Débloquer avec Bouclier",
  onUpgrade,
  className = ''
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Blurred content */}
      <div className="filter blur-sm pointer-events-none">
        {children}
      </div>
      
      {/* Lock overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {title}
          </h3>
          
          <p className="text-sm text-gray-600 mb-4 max-w-xs">
            {description}
          </p>
          
          <Button
            variant="secondary"
            size="sm"
            onClick={onUpgrade}
            className="group"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

interface FeatureLockProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export const FeatureLock: React.FC<FeatureLockProps> = ({
  title,
  description,
  icon,
  className = ''
}) => {
  return (
    <div className={`bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center ${className}`}>
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
        {icon || <Lock className="w-6 h-6 text-gray-500" />}
      </div>
      
      <h4 className="font-medium text-gray-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      
      <Button
        variant="outline"
        size="sm"
        className="text-xs"
      >
        Débloquer avec Bouclier
      </Button>
    </div>
  )
}

