import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Info, AlertCircle } from 'lucide-react'
import { useApp } from '../context/AppContext'

interface NotificationProps {
  message: string
  type: 'success' | 'error' | 'info'
  onClose: () => void
}

const icons = {
  success: Check,
  error: AlertCircle,
  info: Info,
}

const colors = {
  success: 'bg-accent-500',
  error: 'bg-red-500',
  info: 'bg-secondary-500',
}

export const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  const Icon = icons[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 right-4 z-50 max-w-sm w-full"
    >
      <div className={`${colors[type]} text-white rounded-lg shadow-lg p-4 flex items-center gap-3`}>
        <Icon className="w-5 h-5 flex-shrink-0" />
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 hover:bg-white/20 rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}

export const NotificationContainer: React.FC = () => {
  const { notification, clearNotification } = useApp()

  return (
    <AnimatePresence>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={clearNotification}
        />
      )}
    </AnimatePresence>
  )
}
