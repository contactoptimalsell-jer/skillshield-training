/**
 * Page de Démonstration des Statistiques Pragmatiques SkillShield
 * Accessible via /pragmatic-stats-demo pour tester le système simplifié
 */

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, RefreshCw, Database, Globe, TrendingUp, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PragmaticStatsCards } from './PragmaticStatsCards'
import { usePragmaticStats } from '../../hooks/usePragmaticStats'

export const PragmaticStatsDemoPage: React.FC = () => {
  const { stats, loading, refreshing, error, refresh, nextUpdate } = usePragmaticStats(true, 60000) // Refresh chaque minute

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
            📊 Statistiques Pragmatiques SkillShield
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            3 métriques claires avec explications en une phrase. Simple, pragmatique, fonctionnel.
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
              
              {stats && (
                <div className="flex items-center gap-2 text-gray-400">
                  <RefreshCw className="w-4 h-4" />
                  <span>Dernière mise à jour: {stats.lastUpdate}</span>
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
          <PragmaticStatsCards 
            className="max-w-4xl mx-auto"
            showRefresh={true}
            autoRefresh={true}
            refreshInterval={60000}
          />
        </motion.div>

        {/* Explications Pragmatiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Info className="w-6 h-6 text-cyan-400" />
            Explications Pragmatiques
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-semibold">Activité IA</span>
              </div>
              <div className="text-sm text-gray-300 mb-3">
                Mesure l'intensité des développements IA cette semaine basée sur les publications scientifiques et actualités tech.
              </div>
              <div className="text-xs text-gray-400">
                <strong>Sources :</strong> arXiv API (publications IA) + NewsAPI (articles tech)
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Newspaper className="w-6 h-6 text-orange-400" />
                <span className="text-white font-semibold">Actualités</span>
              </div>
              <div className="text-sm text-gray-300 mb-3">
                Nombre d'articles publiés cette semaine sur l'impact de l'IA sur les métiers et l'emploi.
              </div>
              <div className="text-xs text-gray-400">
                <strong>Sources :</strong> NewsAPI avec mots-clés "AI jobs", "automation employment"
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
                <span className="text-white font-semibold">Tendance</span>
              </div>
              <div className="text-sm text-gray-300 mb-3">
                Évolution de l'activité IA par rapport à la semaine dernière (+ = hausse, - = baisse).
              </div>
              <div className="text-xs text-gray-400">
                <strong>Sources :</strong> Comparaison des données semaine N vs semaine N-1
              </div>
            </div>
          </div>
        </motion.div>

        {/* Avantages Pragmatiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700"
        >
          <h3 className="text-xl font-bold text-white mb-6">🎯 Pourquoi Pragmatique ?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Simple à Comprendre</h4>
                  <p className="text-sm text-gray-400">3 métriques claires avec explications en une phrase. Pas de jargon technique.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Mise à Jour Automatique</h4>
                  <p className="text-sm text-gray-400">Actualisation quotidienne à 6h du matin. Données toujours fraîches.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Sources Fiables</h4>
                  <p className="text-sm text-gray-400">arXiv (publications scientifiques) + NewsAPI (actualités tech). Données réelles.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Zéro Coût</h4>
                  <p className="text-sm text-gray-400">APIs gratuites uniquement. 0€/mois pour commencer.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Interface Intuitive</h4>
                  <p className="text-sm text-gray-400">Tooltips explicatifs au survol. Design cohérent avec SkillShield.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Performance Optimale</h4>
                  <p className="text-sm text-gray-400">Cache intelligent, fallback automatique, chargement rapide.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <span>✅</span>
              <span>Résultat : 3 stats claires, actualisées automatiquement chaque matin, avec explications intelligibles en une phrase.</span>
            </div>
            <div className="text-sm text-emerald-300 mt-2">
              Simple. Pragmatique. Fonctionnel.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

