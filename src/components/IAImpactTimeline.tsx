import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, BarChart, Bar } from 'recharts'
import { TrendingUp, TrendingDown, Users, AlertTriangle, Calendar, Target } from 'lucide-react'
import { Card } from './ui/Card'

// Données pour le graphique d'impact IA sur l'emploi
const impactData = [
  { 
    year: '2023', 
    jobsLost: 0, 
    jobsCreated: 0, 
    transformationRate: 5,
    automationRate: 12,
    period: 'Pré-accélération'
  },
  { 
    year: '2024', 
    jobsLost: 25000, 
    jobsCreated: 15000, 
    transformationRate: 15,
    automationRate: 18,
    period: 'Accélération'
  },
  { 
    year: '2025', 
    jobsLost: 77000, 
    jobsCreated: 35000, 
    transformationRate: 25,
    automationRate: 28,
    period: 'Première vague'
  },
  { 
    year: '2026', 
    jobsLost: 120000, 
    jobsCreated: 45000, 
    transformationRate: 35,
    automationRate: 35,
    period: 'Expansion'
  },
  { 
    year: '2027', 
    jobsLost: 180000, 
    jobsCreated: 60000, 
    transformationRate: 50,
    automationRate: 42,
    period: 'Transformation massive'
  },
  { 
    year: '2028', 
    jobsLost: 250000, 
    jobsCreated: 85000, 
    transformationRate: 65,
    automationRate: 48,
    period: 'Stabilisation'
  }
]

// Données pour les métiers les plus impactés
const jobsImpactData = [
  { job: 'Développeur', automationRisk: 75, timeline: '2025-2026' },
  { job: 'Comptable', automationRisk: 85, timeline: '2024-2025' },
  { job: 'Assistant administratif', automationRisk: 90, timeline: '2024-2025' },
  { job: 'Télévendeur', automationRisk: 95, timeline: '2024' },
  { job: 'Traducteur', automationRisk: 80, timeline: '2025-2026' },
  { job: 'Analyste financier', automationRisk: 70, timeline: '2026-2027' },
  { job: 'Designer graphique', automationRisk: 60, timeline: '2026-2027' },
  { job: 'Journaliste', automationRisk: 55, timeline: '2027-2028' }
]

// Données pour les secteurs
const sectorData = [
  { sector: 'Tech', impact: 85, timeline: '2025-2026', jobs: 'Développeurs, QA, DevOps' },
  { sector: 'Finance', impact: 75, timeline: '2024-2025', jobs: 'Comptables, Analystes, Traders' },
  { sector: 'Marketing', impact: 65, timeline: '2025-2026', jobs: 'Community managers, Copywriters' },
  { sector: 'Santé', impact: 40, timeline: '2027-2028', jobs: 'Diagnostic, Radiologie' },
  { sector: 'Éducation', impact: 35, timeline: '2028-2030', jobs: 'Tuteurs, Évaluateurs' },
  { sector: 'Juridique', impact: 45, timeline: '2026-2027', jobs: 'Paralégaux, Recherche' }
]

interface IAImpactTimelineProps {
  className?: string
}

export const IAImpactTimeline: React.FC<IAImpactTimelineProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'jobs' | 'sectors'>('overview')
  const [animatedData, setAnimatedData] = useState(impactData.map(d => ({ ...d, jobsLost: 0, jobsCreated: 0, transformationRate: 0, automationRate: 0 })))
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('ia-impact-timeline')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedData(impactData)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
              {entry.name.includes('Rate') ? '%' : ''}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: TrendingUp },
    { id: 'jobs', label: 'Métiers impactés', icon: Users },
    { id: 'sectors', label: 'Secteurs', icon: AlertTriangle }
  ]

  return (
    <div id="ia-impact-timeline" className={`bg-white rounded-2xl p-8 shadow-lg ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <Calendar className="w-8 h-8 text-primary-500" />
          <h3 className="text-2xl font-bold text-primary-900">
            Timeline d'impact IA sur l'emploi
          </h3>
        </motion.div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Visualisez l'évolution prévue de l'impact de l'IA sur le marché de l'emploi
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Graphique principal */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Évolution de l'impact IA (2023-2028)
                </h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={animatedData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis 
                        dataKey="year" 
                        stroke="#6b7280"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="#6b7280"
                        fontSize={12}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="transformationRate"
                        stackId="1"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.6}
                        name="Taux de transformation"
                      />
                      <Area
                        type="monotone"
                        dataKey="automationRate"
                        stackId="2"
                        stroke="#ef4444"
                        fill="#ef4444"
                        fillOpacity={0.6}
                        name="Taux d'automatisation"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Métriques clés */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Métriques clés 2025
                </h4>
                
                {[
                  { 
                    label: 'Emplois supprimés', 
                    value: '77 000', 
                    icon: TrendingDown, 
                    color: 'text-red-500',
                    bgColor: 'bg-red-50',
                    description: 'Première vague d\'automatisation'
                  },
                  { 
                    label: 'Emplois créés', 
                    value: '35 000', 
                    icon: TrendingUp, 
                    color: 'text-green-500',
                    bgColor: 'bg-green-50',
                    description: 'Nouveaux métiers IA'
                  },
                  { 
                    label: 'Taux de transformation', 
                    value: '25%', 
                    icon: Target, 
                    color: 'text-blue-500',
                    bgColor: 'bg-blue-50',
                    description: 'Métiers transformés'
                  }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className={`p-3 rounded-full ${metric.bgColor}`}>
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                        <span className="text-sm text-gray-600">{metric.label}</span>
                      </div>
                      <p className="text-xs text-gray-500">{metric.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'jobs' && (
          <motion.div
            key="jobs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Graphique des métiers */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Métiers les plus à risque d'automatisation
                </h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={jobsImpactData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis type="number" domain={[0, 100]} stroke="#6b7280" fontSize={12} />
                      <YAxis dataKey="job" type="category" stroke="#6b7280" fontSize={12} width={120} />
                      <Tooltip 
                        formatter={(value: any) => [`${value}%`, 'Risque d\'automatisation']}
                        labelFormatter={(label: any) => `Métier: ${label}`}
                      />
                      <Bar dataKey="automationRisk" fill="#ef4444" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Liste des métiers */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Timeline d'impact par métier
                </h4>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {jobsImpactData.map((job, index) => (
                    <motion.div
                      key={job.job}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{job.job}</div>
                        <div className="text-sm text-gray-600">Impact prévu: {job.timeline}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          job.automationRisk > 80 ? 'text-red-500' :
                          job.automationRisk > 60 ? 'text-orange-500' :
                          'text-yellow-500'
                        }`}>
                          {job.automationRisk}%
                        </div>
                        <div className="text-xs text-gray-500">Risque</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'sectors' && (
          <motion.div
            key="sectors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Graphique des secteurs */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Impact par secteur d'activité
                </h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sectorData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="sector" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(value) => `${value}%`} />
                      <Tooltip 
                        formatter={(value: any) => [`${value}%`, 'Impact IA']}
                        labelFormatter={(label: any) => `Secteur: ${label}`}
                      />
                      <Bar dataKey="impact" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Détails des secteurs */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Détails par secteur
                </h4>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {sectorData.map((sector, index) => (
                    <motion.div
                      key={sector.sector}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{sector.sector}</span>
                        <span className={`text-lg font-bold ${
                          sector.impact > 70 ? 'text-red-500' :
                          sector.impact > 50 ? 'text-orange-500' :
                          'text-green-500'
                        }`}>
                          {sector.impact}%
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        Timeline: {sector.timeline}
                      </div>
                      <div className="text-xs text-gray-500">
                        Métiers concernés: {sector.jobs}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Votre métier est-il à risque ?
          </h4>
          <p className="text-gray-600 mb-4">
            Calculez votre score de risque IA et découvrez comment vous préparer
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open('/calculator', '_blank', 'noopener,noreferrer')
            }}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200"
          >
            Calculer mon risque IA
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

