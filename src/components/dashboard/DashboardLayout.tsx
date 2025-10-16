import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Breadcrumbs } from './Breadcrumbs'
import { useDashboard } from '../../context/DashboardContext'
import AegisChatbot from './AegisChatbot'

export const DashboardLayout: React.FC = () => {
  const { sidebarCollapsed } = useDashboard()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      }`}>
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <main className="p-6">
          <Breadcrumbs />
          <Outlet />
        </main>
      </div>
      
      {/* Aegis Chatbot - Accessible depuis toutes les pages du dashboard */}
      <AegisChatbot isDev={process.env.NODE_ENV === 'development'} />
    </div>
  )
}
