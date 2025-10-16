import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'

interface WidgetProps {
  title: string
  children: React.ReactNode
  className?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export const Widget: React.FC<WidgetProps> = ({ title, children, className = '', action }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card className="h-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-primary-900">{title}</h3>
            {action && (
              <button
                onClick={action.onClick}
                className="text-sm text-secondary-600 hover:text-secondary-700 font-medium transition-colors"
              >
                {action.label}
              </button>
            )}
          </div>
          <div className="space-y-4">
            {children}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export const StatCard: React.FC<{
  label: string
  value: string | number
  trend?: {
    value: number
    isPositive: boolean
  }
  icon?: React.ReactNode
}> = ({ label, value, trend, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-2xl font-bold text-primary-900">{value}</p>
          {trend && (
            <div className="flex items-center mt-1">
              <span className={`text-xs font-medium ${trend.isPositive ? 'text-accent-600' : 'text-red-600'}`}>
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
              <span className="text-xs text-gray-500 ml-1">vs mois dernier</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="text-secondary-500">
            {icon}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export const ProgressBar: React.FC<{
  progress: number
  label: string
  className?: string
}> = ({ progress, label, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between text-sm">
        <span className="text-gray-700">{label}</span>
        <span className="text-gray-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-gradient-secondary h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export const Badge: React.FC<{
  children: React.ReactNode
  variant: 'success' | 'warning' | 'error' | 'info' | 'primary'
  size?: 'sm' | 'md' | 'lg'
}> = ({ children, variant, size = 'md' }) => {
  const variants = {
    success: 'bg-accent-100 text-accent-800 border-accent-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-secondary-100 text-secondary-800 border-secondary-200',
    primary: 'bg-primary-100 text-primary-800 border-primary-200'
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  return (
    <span className={`inline-flex items-center rounded-full border font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  )
}

export const MetricCard: React.FC<{
  title: string
  value: string | number
  subtitle?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  icon?: React.ReactNode
  onClick?: () => void
}> = ({ title, value, subtitle, trend, icon, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
          <p className="text-3xl font-bold text-primary-900 mb-1">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="text-secondary-500 ml-4">
            {icon}
          </div>
        )}
      </div>
      {trend && (
        <div className="flex items-center">
          <span className={`text-sm font-medium ${trend.isPositive ? 'text-accent-600' : 'text-red-600'}`}>
            {trend.isPositive ? '↗' : '↘'} {Math.abs(trend.value)}%
          </span>
          <span className="text-sm text-gray-500 ml-2">vs mois dernier</span>
        </div>
      )}
    </motion.div>
  )
}

