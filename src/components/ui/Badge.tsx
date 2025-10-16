import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animated?: boolean
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  animated = true
}) => {
  const baseClasses = "inline-flex items-center gap-2 font-medium rounded-full border"
  
  const variantClasses = {
    default: "bg-white/5 backdrop-blur-md border-cyan-500/30 text-cyan-400",
    success: "bg-emerald-500/10 backdrop-blur-md border-emerald-500/30 text-emerald-400",
    warning: "bg-yellow-500/10 backdrop-blur-md border-yellow-500/30 text-yellow-400",
    error: "bg-red-500/10 backdrop-blur-md border-red-500/30 text-red-400"
  }
  
  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  const content = (
    <>
      <Sparkles className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`} />
      {children}
    </>
  )
  
  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={classes}
      >
        {content}
      </motion.div>
    )
  }
  
  return (
    <div className={classes}>
      {content}
    </div>
  )
}

