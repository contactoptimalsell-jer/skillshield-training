import React from 'react'
import { cn } from '../../lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  premium?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  premium = false
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-lg border border-gray-100',
        hover && 'hover:shadow-xl transition-all duration-300',
        premium && 'border-2 border-secondary-200 relative',
        className
      )}
    >
      {premium && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-secondary text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
            Plus populaire
          </span>
        </div>
      )}
      {children}
    </div>
  )
}

