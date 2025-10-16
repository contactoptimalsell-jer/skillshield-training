import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'

interface SentinelleWidgetProps {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
  headerActions?: React.ReactNode
  isLocked?: boolean
  lockTitle?: string
  lockDescription?: string
}

export const SentinelleWidget: React.FC<SentinelleWidgetProps> = ({
  title,
  icon,
  children,
  className = '',
  headerActions,
  isLocked = false,
  lockTitle,
  lockDescription
}) => {
  return (
    <Card className={`p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {headerActions && (
          <div className="flex items-center space-x-2">
            {headerActions}
          </div>
        )}
      </div>

      {/* Content */}
      {isLocked ? (
        <div className="relative">
          <div className="filter blur-sm pointer-events-none">
            {children}
          </div>
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center p-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">
                {lockTitle || 'Fonctionnalité Premium'}
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                {lockDescription || 'Débloquez cette fonctionnalité avec le plan Bouclier'}
              </p>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </Card>
  )
}

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon?: React.ReactNode
  className?: string
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  className = ''
}) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive': return 'text-green-600'
      case 'negative': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg border border-gray-200 p-4 ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm ${getChangeColor()}`}>
              {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </motion.div>
  )
}

interface ProgressBarProps {
  progress: number
  label?: string
  className?: string
  color?: 'primary' | 'secondary' | 'accent' | 'danger' | 'warning'
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  className = '',
  color = 'primary'
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'secondary': return 'bg-gradient-to-r from-secondary-500 to-secondary-600'
      case 'accent': return 'bg-gradient-to-r from-accent-500 to-accent-600'
      case 'danger': return 'bg-gradient-to-r from-red-500 to-red-600'
      case 'warning': return 'bg-gradient-to-r from-yellow-500 to-yellow-600'
      default: return 'bg-gradient-to-r from-primary-500 to-primary-600'
    }
  }

  return (
    <div className={className}>
      {label && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">{label}</span>
          <span className="font-medium text-gray-900">{progress}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full ${getColorClasses()}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

