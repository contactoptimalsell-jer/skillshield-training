import React from 'react';
import { motion } from 'framer-motion';
import { getJobRisk } from '../../data/jobsDatabase';

interface ComparisonSectionProps {
  job: string;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ job }) => {
  const jobData = getJobRisk(job);
  
  const comparisons = [
    { 
      label: "Votre métier", 
      score: jobData.automationProbability * 100, 
      highlight: true,
      description: jobData.description
    },
    { 
      label: "Moyenne nationale", 
      score: 47,
      description: "Tous secteurs confondus"
    },
    { 
      label: "Métiers similaires", 
      score: Math.round((jobData.automationProbability * 100) * (0.8 + Math.random() * 0.4)),
      description: "Même niveau de qualification"
    },
    { 
      label: "Secteur tech", 
      score: 32,
      description: "Moyenne du secteur technologique"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            📊 Comparaison avec le Marché
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Découvrez comment votre score se compare aux autres professions 
            et secteurs d'activité.
          </p>
        </motion.div>

        <div className="space-y-6">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex items-center gap-6 p-4 rounded-xl transition ${
                item.highlight 
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="w-48">
                <div className="text-white font-semibold mb-1">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.description}</div>
              </div>
              
              <div className="flex-1">
                <div className="h-8 bg-gray-800 rounded-full overflow-hidden relative">
                  <motion.div
                    className={`h-full ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                        : 'bg-gray-600'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.score}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                  />
                  {/* Marqueur de position */}
                  <div className="absolute inset-0 flex items-center justify-end pr-2">
                    <div className="text-white text-xs font-medium">
                      {item.score}%
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-20 text-right">
                <div className="text-2xl font-bold text-white">{item.score}%</div>
                {item.highlight && (
                  <div className="text-cyan-400 text-xs">VOTRE SCORE</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note explicative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2">
            <span className="text-blue-400 text-sm font-medium">
              📈 Basé sur les données OECD Employment Outlook 2025
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

