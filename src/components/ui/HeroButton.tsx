import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Rocket } from 'lucide-react'

interface HeroButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  target?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animated?: boolean
  icon?: React.ReactNode
}

export const HeroButton: React.FC<HeroButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  target,
  variant = 'primary',
  size = 'md',
  className = '',
  animated = true,
  icon
}) => {
  const baseClasses = "group rounded-lg font-semibold shadow-2xl transition-all duration-300 flex items-center justify-center"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-cyan-500/50 hover:scale-105 hover:shadow-cyan-500/70",
    secondary: "border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400",
    ghost: "text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
  }
  
  const sizeClasses = {
    sm: "px-6 py-3 text-sm h-12",
    md: "px-8 py-4 text-lg h-12",
    lg: "px-10 py-5 text-xl h-12"
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  const content = (
    <span className="flex items-center gap-2">
      {icon || <Rocket className="group-hover:rotate-12 transition-transform" />}
      {children}
    </span>
  )
  
  if (href) {
    const link = target === '_blank' ? (
      <a href={href} target={target} rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    ) : (
      <Link to={href} className={classes}>
        {content}
      </Link>
    )
    
    if (animated) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {link}
        </motion.div>
      )
    }
    
    return link
  }
  
  const button = (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  )
  
  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {button}
      </motion.div>
    )
  }
  
  return button
}
