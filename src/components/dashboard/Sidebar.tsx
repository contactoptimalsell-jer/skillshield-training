import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { 
  Home, 
  Target, 
  Eye, 
  Map, 
  GraduationCap, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  User,
  Shield,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useDashboard } from '../../context/DashboardContext'

const navigationItems = [
  {
    name: 'Tableau de bord',
    href: '/dashboard',
    icon: Home,
    badge: null
  },
  {
    name: 'Mon Score IA',
    href: '/dashboard/score',
    icon: Target,
    badge: null
  },
  {
    name: 'Veille IA Temps Réel',
    href: '/dashboard/monitoring',
    icon: Eye,
    badge: '3'
  },
  {
    name: 'Plan de Reconversion',
    href: '/dashboard/reconversion',
    icon: Map,
    badge: null
  },
  {
    name: 'Formations',
    href: '/dashboard/formations',
    icon: GraduationCap,
    badge: null
  },
  {
    name: 'Bootcamps Express',
    href: '/dashboard/bootcamps',
    icon: Zap,
    badge: '2'
  },
  {
    name: 'Analyses Sectorielles',
    href: '/dashboard/sector-analysis',
    icon: BarChart3,
    badge: null
  },
  {
    name: 'Support Prioritaire',
    href: '/dashboard/support',
    icon: MessageSquare,
    badge: null
  },
  {
    name: 'Paramètres',
    href: '/dashboard/settings',
    icon: Settings,
    badge: null
  },
  {
    name: 'Mon Profil',
    href: '/dashboard/profile',
    icon: User,
    badge: null
  }
]

export const Sidebar: React.FC = () => {
  const { user, sidebarCollapsed, toggleSidebar } = useDashboard()

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-primary-900 text-white h-screen fixed left-0 top-0 z-40 transition-all duration-300 ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-primary-800">
        {!sidebarCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">SkillShield</h1>
              <p className="text-xs text-primary-300">Plan {user.plan}</p>
            </div>
          </motion.div>
        )}
        
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-primary-800 rounded-lg transition-colors"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* User Profile */}
      {!sidebarCollapsed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 border-b border-primary-800"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-semibold">
              {user.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user.name}</p>
              <p className="text-xs text-primary-300 truncate">{user.job}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center px-3 py-3 rounded-lg transition-all duration-200 group relative ${
                    isActive
                      ? 'bg-secondary-600 text-white shadow-lg'
                      : 'text-primary-200 hover:bg-primary-800 hover:text-white'
                  }`
                }
                title={sidebarCollapsed ? item.name : undefined}
              >
                <item.icon className={`w-5 h-5 ${sidebarCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
                {!sidebarCollapsed && (
                  <>
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto bg-accent-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                
                {/* Tooltip for collapsed state */}
                {sidebarCollapsed && (
                  <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.name}
                    {item.badge && (
                      <span className="ml-2 bg-accent-500 text-white text-xs rounded-full px-1.5 py-0.5">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      {!sidebarCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-4 border-t border-primary-800"
        >
          <div className="bg-gradient-secondary rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-white" />
              <div>
                <p className="text-sm font-semibold text-white">Protection Active</p>
                <p className="text-xs text-secondary-100">
                  Prochaine facturation: {new Date(user.nextBilling).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

