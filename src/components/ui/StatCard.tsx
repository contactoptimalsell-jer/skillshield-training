import React from 'react'
import { motion } from 'framer-motion'

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
  delay?: number
  className?: string
  animated?: boolean
}

export const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  value, 
  label, 
  delay = 0,
  className = '',
  animated = true
}) => {
  const baseClasses = "backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 group w-64 mx-auto"
  
  const classes = `${baseClasses} ${className}`
  
  const content = (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="text-cyan-400 text-4xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="text-4xl font-bold text-white mb-2">{value}</div>
        <div className="text-gray-400 text-base leading-relaxed">{label}</div>
      </div>
    </div>
  )
  
  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 + delay, duration: 0.6 }}
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
