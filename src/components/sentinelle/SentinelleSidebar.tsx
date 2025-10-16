import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Target, 
  Bell, 
  Users, 
  Zap, 
  Settings, 
  User,
  Eye
} from 'lucide-react'
import { mockSentinelleUser } from '../../data/sentinelleMockData'

const navigationItems = [
  {
    name: 'Tableau de bord',
    href: '/sentinelle',
    icon: LayoutDashboard,
    current: true
  },
  {
    name: 'Mon Score IA',
    href: '/sentinelle/score',
    icon: Target,
    current: false
  },
  {
    name: 'Alertes Mensuelles',
    href: '/sentinelle/alertes',
    icon: Bell,
    current: false
  },
  {
    name: 'Communauté',
    href: '/sentinelle/communaute',
    icon: Users,
    current: false
  },
  {
    name: 'Découvrir les Plans',
    href: '/sentinelle/plans',
    icon: Zap,
    current: false,
    highlight: true
  },
  {
    name: 'Paramètres',
    href: '/sentinelle/parametres',
    icon: Settings,
    current: false
  },
  {
    name: 'Mon Profil',
    href: '/sentinelle/profil',
    icon: User,
    current: false
  }
]

export const SentinelleSidebar: React.FC = () => {
  const user = mockSentinelleUser

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <Eye className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">SkillShield</h1>
            <p className="text-xs text-gray-500">Plan Sentinelle</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary-100 text-primary-900 border border-primary-200'
                  : item.highlight
                  ? 'bg-gradient-to-r from-secondary-50 to-accent-50 text-secondary-700 border border-secondary-200 hover:from-secondary-100 hover:to-accent-100'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={`mr-3 h-5 w-5 ${
                    isActive
                      ? 'text-primary-600'
                      : item.highlight
                      ? 'text-secondary-600'
                      : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                />
                <span className="flex-1">{item.name}</span>
                {item.highlight && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-500 text-white"
                  >
                    Nouveau
                  </motion.span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
            {user.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user.name}
            </p>
            <p className="text-xs text-gray-500">
              Plan Sentinelle
            </p>
          </div>
        </div>
      </div>

      {/* Upgrade Banner */}
      <div className="p-4 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-secondary-500 to-accent-500 text-white rounded-lg p-3 text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Débloquez Bouclier</span>
          </div>
          <p className="text-xs text-white/90 mb-2">
            Veille IA temps réel + formations
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/sentinelle/plans'}
            className="w-full bg-white text-secondary-600 text-xs font-medium py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Découvrir
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

