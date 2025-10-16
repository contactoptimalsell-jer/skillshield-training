import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Info } from 'lucide-react';

interface BreakdownSectionProps {
  breakdown: {
    baseJob: number;
    taskAdjustment: number;
    digitalSkills: number;
    aiUsage: number;
    sector: number;
    market: number;
    environment: number;
    adaptability: number;
    demographics: number;
    regulation: number;
  };
}

const FactorBar: React.FC<{
  label: string;
  value: number;
  description: string;
  source?: string;
  delay: number;
}> = ({ label, value, description, source, delay }) => {
  const isPositive = value > 0;
  const isNegative = value < 0;
  const isNeutral = value === 0;

  const getColor = () => {
    if (isPositive) return 'from-red-500 to-red-400';
    if (isNegative) return 'from-green-500 to-green-400';
    return 'from-gray-500 to-gray-400';
  };

  const getIcon = () => {
    if (isPositive) return TrendingUp;
    if (isNegative) return TrendingDown;
    return Minus;
  };

  const Icon = getIcon();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${
            isPositive ? 'bg-red-500/20' : 
            isNegative ? 'bg-green-500/20' : 
            'bg-gray-500/20'
          }`}>
            <Icon className={`w-4 h-4 ${
              isPositive ? 'text-red-400' : 
              isNegative ? 'text-green-400' : 
              'text-gray-400'
            }`} />
          </div>
          <div>
            <h3 className="text-white font-semibold">{label}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
        <div className={`text-lg font-bold ${
          isPositive ? 'text-red-400' : 
          isNegative ? 'text-green-400' : 
          'text-gray-400'
        }`}>
          {isPositive ? '+' : ''}{value.toFixed(1)}%
        </div>
      </div>

      {/* Barre de progression */}
      <div className="relative">
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${getColor()}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${Math.min(Math.abs(value), 100)}%` }}
            transition={{ delay: delay / 1000 + 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              marginLeft: isNegative ? `${100 - Math.min(Math.abs(value), 100)}%` : '0%'
            }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {source && (
        <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
          <Info className="w-3 h-3" />
          <span>Source: {source}</span>
        </div>
      )}
    </motion.div>
  );
};

export const BreakdownSection: React.FC<BreakdownSectionProps> = ({ breakdown }) => {
  const factors = [
    {
      label: "Métier de base",
      value: breakdown.baseJob,
      description: "Probabilité d'automatisation intrinsèque à votre métier",
      source: "O*NET Database 2024",
      delay: 0
    },
    {
      label: "Nature de vos tâches",
      value: breakdown.taskAdjustment,
      description: "Impact des tâches répétitives vs créatives",
      delay: 100
    },
    {
      label: "Compétences numériques",
      value: breakdown.digitalSkills,
      description: "Votre maîtrise des outils technologiques",
      delay: 200
    },
    {
      label: "Utilisation actuelle IA",
      value: breakdown.aiUsage,
      description: "Votre familiarité avec les outils IA",
      delay: 300
    },
    {
      label: "Secteur d'activité",
      value: breakdown.sector,
      description: "Impact du secteur sur l'automatisation",
      delay: 400
    },
    {
      label: "Marché de l'emploi",
      value: breakdown.market,
      description: "Dynamique de la demande pour votre métier",
      delay: 500
    },
    {
      label: "Environnement de travail",
      value: breakdown.environment,
      description: "Modalités de travail et contraintes physiques",
      delay: 600
    },
    {
      label: "Adaptabilité",
      value: breakdown.adaptability,
      description: "Votre capacité d'évolution et de formation",
      delay: 700
    },
    {
      label: "Démographie",
      value: breakdown.demographics,
      description: "Âge et mobilité géographique",
      delay: 800
    },
    {
      label: "Régulation",
      value: breakdown.regulation,
      description: "Protection par la réglementation professionnelle",
      delay: 900
    }
  ];

  const totalAdjustment = Object.values(breakdown).slice(1).reduce((sum, value) => sum + value, 0);
  const finalScore = breakdown.baseJob + totalAdjustment;

  return (
    <section className="py-16 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            🔍 Analyse Détaillée de votre Score
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Votre score final est calculé à partir de 9 facteurs pondérés. 
            Voici la décomposition complète de votre analyse.
          </p>
        </motion.div>

        <div className="space-y-4">
          {factors.map((factor, index) => (
            <FactorBar
              key={index}
              label={factor.label}
              value={factor.value}
              description={factor.description}
              source={factor.source}
              delay={factor.delay}
            />
          ))}
        </div>

        {/* Résumé final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              📊 Calcul Final
            </h3>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Score de base :</span> {breakdown.baseJob.toFixed(1)}%
              <br />
              <span className="font-semibold">Ajustements :</span> {totalAdjustment > 0 ? '+' : ''}{totalAdjustment.toFixed(1)}%
              <br />
              <span className="font-semibold text-cyan-400">Score final :</span> {Math.round(Math.max(0, Math.min(100, finalScore)))}%
            </p>
            <div className="text-sm text-gray-400">
              💡 Calculé sur 9 facteurs pondérés avec données O*NET & OECD
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

