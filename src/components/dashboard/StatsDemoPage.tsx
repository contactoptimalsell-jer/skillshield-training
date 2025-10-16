/**
 * Page de Démonstration des Statistiques Dynamiques
 * Accessible via /stats-demo pour tester le système
 */

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, RefreshCw, Database, Globe, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DynamicStatsWidget } from './DynamicStatsWidget'
import { useStats } from '../../hooks/useStats'
import '../../utils/testAPIs' // Charger les utilitaires de test

export const StatsDemoPage: React.FC = () => {
  const { stats, loading, refreshing, error, refresh, lastUpdate } = useStats(true, 60000) // Refresh chaque minute

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            📊 Statistiques Dynamiques SkillShield
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Données réelles collectées depuis arXiv, NewsAPI, GitHub et autres sources publiques
          </p>
        </motion.div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 mb-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  loading ? 'bg-yellow-500 animate-pulse' : 
                  error ? 'bg-red-500' : 'bg-emerald-500'
                }`} />
                <span className="text-white font-medium">
                  {loading ? 'Chargement...' : 
                   error ? 'Erreur' : 'Connecté'}
                </span>
              </div>
              
              {lastUpdate && (
                <div className="flex items-center gap-2 text-gray-400">
                  <RefreshCw className="w-4 h-4" />
                  <span>Dernière mise à jour: {lastUpdate.toLocaleTimeString('fr-FR')}</span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={refresh}
                disabled={refreshing}
                className="flex items-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 
                  text-cyan-400 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                Actualiser maintenant
              </button>
              
              <button
                onClick={() => {
                  console.log('🧪 Lancement des tests APIs...')
                  ;(window as any).testAPIs?.testAll()
                }}
                className="flex items-center gap-2 bg-purple-500/20 hover:bg-purple-500/30 
                  text-purple-400 px-4 py-2 rounded-lg transition-colors"
              >
                <Database className="w-4 h-4" />
                Tester APIs
              </button>
            </div>
          </div>
        </motion.div>

        {/* Widget Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <DynamicStatsWidget 
            className="max-w-4xl mx-auto"
            showRefresh={true}
            autoRefresh={true}
            refreshInterval={60000}
          />
        </motion.div>

        {/* Détails Techniques */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-cyan-400" />
              Détails Techniques
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">arXiv</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">{stats.rawData.arxiv}</div>
                <div className="text-sm text-gray-400">Publications IA</div>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">NewsAPI</span>
                </div>
                <div className="text-2xl font-bold text-green-400">{stats.rawData.news}</div>
                <div className="text-sm text-gray-400">Articles automation</div>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">GitHub</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">{stats.rawData.github}</div>
                <div className="text-sm text-gray-400">Repos IA</div>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-orange-400" />
                  <span className="text-white font-medium">Score IA</span>
                </div>
                <div className="text-2xl font-bold text-orange-400">{stats.scoreIA}%</div>
                <div className="text-sm text-gray-400">Risque calculé</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-600">
              <h4 className="text-lg font-semibold text-white mb-3">Formule de Calcul</h4>
              <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-300">
                  Score IA = (Publications × 0.4) + (Actualités × 0.3) + (GitHub × 0.3)
                </div>
                <div className="text-cyan-400 mt-2">
                  = ({stats.rawData.arxiv} × 0.4) + ({stats.rawData.news} × 0.3) + ({stats.rawData.github} × 0.3)
                </div>
                <div className="text-emerald-400 mt-1">
                  = {Math.round(stats.rawData.arxiv * 0.4)} + {Math.round(stats.rawData.news * 0.3)} + {Math.round(stats.rawData.github * 0.3)} = {stats.scoreIA}%
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Sources de Données */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700"
        >
          <h3 className="text-xl font-bold text-white mb-6">🔌 Sources de Données</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">📚 arXiv API</h4>
              <p className="text-sm text-gray-400 mb-2">Publications scientifiques IA</p>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-400">Gratuit & Illimité</span>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">📰 NewsAPI</h4>
              <p className="text-sm text-gray-400 mb-2">Actualités automation IA</p>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-400">100 req/jour gratuit</span>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">💻 GitHub API</h4>
              <p className="text-sm text-gray-400 mb-2">Repositories IA actifs</p>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-400">5000 req/h gratuit</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <span>✅</span>
              <span>Coût total: 0€/mois - 100% gratuit pour commencer !</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
