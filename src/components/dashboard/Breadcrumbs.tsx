import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const routeNames: Record<string, string> = {
  '/dashboard': 'Tableau de bord',
  '/dashboard/score': 'Mon Score IA',
  '/dashboard/monitoring': 'Veille IA Temps Réel',
  '/dashboard/reconversion': 'Plan de Reconversion',
  '/dashboard/formations': 'Formations',
  '/dashboard/bootcamps': 'Bootcamps Express',
  '/dashboard/sector-analysis': 'Analyses Sectorielles',
  '/dashboard/support': 'Support Prioritaire',
  '/dashboard/settings': 'Paramètres',
  '/dashboard/profile': 'Mon Profil'
}

export const Breadcrumbs: React.FC = () => {
  const location = useLocation()
  
  const pathSegments = location.pathname.split('/').filter(segment => segment)
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/')
    const name = routeNames[path] || segment.charAt(0).toUpperCase() + segment.slice(1)
    
    return {
      path,
      name,
      isLast: index === pathSegments.length - 1
    }
  })

  // Don't show breadcrumbs on the main dashboard page
  if (location.pathname === '/dashboard') {
    return null
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link 
        to="/dashboard" 
        className="flex items-center hover:text-secondary-600 transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        Dashboard
      </Link>
      
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {breadcrumb.isLast ? (
            <span className="text-primary-900 font-medium">
              {breadcrumb.name}
            </span>
          ) : (
            <Link 
              to={breadcrumb.path}
              className="hover:text-secondary-600 transition-colors"
            >
              {breadcrumb.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

