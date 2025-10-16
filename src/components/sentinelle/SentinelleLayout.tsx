import React from 'react'
import { Outlet } from 'react-router-dom'
import { SentinelleSidebar } from './SentinelleSidebar'
import { SentinelleHeader } from './SentinelleHeader'

export const SentinelleLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SentinelleSidebar />
      <div className="flex-1 flex flex-col">
        <SentinelleHeader />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

