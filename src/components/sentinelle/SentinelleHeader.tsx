import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Menu, 
  X, 
  LayoutDashboard, 
  Settings, 
  LogOut,
  Sun,
  Moon,
  Eye
} from 'lucide-react'
import { PlanBadge } from './UpgradeBanner'
import { mockSentinelleUser } from '../../data/sentinelleMockData'

// Mock notifications for Sentinelle
const mockNotifications = [
  {
    id: '1',
    message: 'Votre prochaine alerte mensuelle dans 5 jours',
    type: 'info',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    isRead: false
  },
  {
    id: '2',
    message: 'Nouvelle discussion dans la communauté',
    type: 'info',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    isRead: true
  },
  {
    id: '3',
    message: 'Découvrez les fonctionnalités Bouclier',
    type: 'upgrade',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    isRead: false
  }
]

export const SentinelleHeader: React.FC = () => {
  const user = mockSentinelleUser
  const [searchQuery, setSearchQuery] = useState('')
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const unreadNotifications = mockNotifications.filter(n => !n.isRead).length

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffSeconds < 60) return `${diffSeconds}s`
    const diffMinutes = Math.floor(diffSeconds / 60)
    if (diffMinutes < 60) return `${diffMinutes}m`
    const diffHours = Math.floor(diffMinutes / 60)
    if (diffHours < 24) return `${diffHours}h`
    const diffDays = Math.floor(diffHours / 24)
    if (diffDays < 7) return `${diffDays}j`
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
  }

  const handleUpgrade = () => {
    window.location.href = '/sentinelle/plans'
  }

  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-primary-900 hidden lg:block">
          Dashboard Sentinelle
        </h1>
      </div>

      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Plan Badge */}
        <PlanBadge plan="Sentinelle" isCurrent={true} />

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
        >
          {darkMode ? <Sun className="w-6 h-6 text-gray-600" /> : <Moon className="w-6 h-6 text-gray-600" />}
        </button>

        {/* Notifications dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
          >
            <Bell className="w-6 h-6 text-gray-600" />
            {unreadNotifications > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </button>

          <AnimatePresence>
            {isNotificationsOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-40"
                  onClick={() => setIsNotificationsOpen(false)}
                />
                
                {/* Notifications Panel */}
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                        <p className="text-sm text-gray-500">{unreadNotifications} non lues</p>
                      </div>
                      <button
                        onClick={() => setIsNotificationsOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {mockNotifications.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">
                        Aucune notification
                      </div>
                    ) : (
                      mockNotifications.slice(0, 5).map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${
                            !notification.isRead ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === 'upgrade' ? 'bg-secondary-500' :
                              notification.type === 'info' ? 'bg-blue-500' :
                              'bg-gray-500'
                            }`}></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-800">{notification.message}</p>
                              <p className="text-xs text-gray-500 mt-1">{formatTime(notification.timestamp)}</p>
                              {notification.type === 'upgrade' && (
                                <button
                                  onClick={handleUpgrade}
                                  className="text-xs text-secondary-600 hover:text-secondary-700 font-medium mt-1"
                                >
                                  Découvrir Bouclier →
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <button className="text-sm text-secondary-600 hover:text-secondary-700 font-medium">
                      Voir toutes les notifications
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Profile dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {user.avatar}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">Plan Sentinelle</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-40"
                  onClick={() => setIsProfileOpen(false)}
                />
                
                {/* Profile Panel */}
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">Plan Sentinelle</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      <LayoutDashboard className="w-4 h-4 mr-3" />
                      Mon Dashboard
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      <Settings className="w-4 h-4 mr-3" />
                      Paramètres
                    </button>
                    <button 
                      onClick={handleUpgrade}
                      className="flex items-center w-full px-4 py-2 text-sm text-secondary-600 hover:bg-secondary-50 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-3" />
                      Passer à Bouclier
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-100 py-2">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                      <LogOut className="w-4 h-4 mr-3" />
                      Déconnexion
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

