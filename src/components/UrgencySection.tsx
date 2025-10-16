import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Users } from 'lucide-react';
import { UrgencyStatCard } from './UrgencyStatCard';
import { useUrgencyStats } from '../hooks/useUrgencyStats';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

const UrgencySkeleton = () => (
  <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="container mx-auto max-w-6xl relative z-10">
      {/* Header Skeleton */}
      <div className="text-center mb-16">
        <div className="h-12 bg-slate-700/50 rounded-lg mb-4 max-w-2xl mx-auto animate-pulse"></div>
        <div className="h-6 bg-slate-700/30 rounded-lg max-w-3xl mx-auto animate-pulse"></div>
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 rounded-xl border border-slate-700/30 bg-slate-800/30 backdrop-blur-lg animate-pulse">
            <div className="w-8 h-8 bg-slate-700/50 rounded mb-4"></div>
            <div className="h-12 bg-slate-700/50 rounded mb-3"></div>
            <div className="h-4 bg-slate-700/30 rounded mb-2"></div>
            <div className="h-4 bg-slate-700/30 rounded w-3/4 mb-4"></div>
            <div className="h-3 bg-slate-700/30 rounded w-1/2"></div>
          </div>
        ))}
      </div>

      {/* CTA Skeleton */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 bg-slate-700/30 border border-slate-600/30 rounded-full px-6 py-3 mb-6 animate-pulse">
          <div className="w-5 h-5 bg-slate-600/50 rounded"></div>
          <div className="h-4 bg-slate-600/50 rounded w-48"></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="px-8 py-4 bg-slate-700/30 rounded-lg animate-pulse h-12 w-48"></div>
          <div className="px-8 py-4 bg-slate-700/30 rounded-lg animate-pulse h-12 w-48"></div>
        </div>
      </div>
    </div>
  </section>
);

export const UrgencySection: React.FC = () => {
  const { stats, loading } = useUrgencyStats();
  const { openCalculator } = useApp();

  if (loading) return <UrgencySkeleton />;

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background pattern subtil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Gradient overlay pour effet de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pourquoi agir maintenant ?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Les données parlent d'elles-mêmes. L'impact de l'IA sur l'emploi{' '}
            <span className="text-red-400 font-semibold">s'accélère</span> et il est temps de se préparer.
          </p>
        </motion.div>

        {/* Grid de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.stats.map((stat, index) => (
            <UrgencyStatCard 
              key={stat.id} 
              stat={stat} 
              delay={index * 100} 
            />
          ))}
        </div>

        {/* CTA d'urgence */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-semibold">
              Ne subissez pas ces changements, anticipez-les
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openCalculator}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70"
            >
              <Shield className="w-5 h-5 inline mr-2" />
              Calculer mon score de risque →
            </button>
            <Link 
              to="/waitinglist"
              className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center justify-center"
            >
              <Users className="w-5 h-5 inline mr-2" />
              Rejoindre la liste d'attente
            </Link>
          </div>
        </motion.div>

        {/* Sources en bas */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 mb-2">Sources vérifiables :</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
            {stats?.stats.map(stat => (
              <a
                key={stat.id}
                href={stat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition underline"
              >
                {stat.source} ({stat.year})
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Dernière mise à jour : {stats?.lastUpdate ? new Date(stats.lastUpdate).toLocaleDateString('fr-FR') : 'N/A'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

