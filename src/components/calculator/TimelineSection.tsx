import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { TimelineCtaBox } from './TimelineCtaBox';

interface TimelineSectionProps {
  score: number;
  job: string;
  timeline: {
    immediate: string;
    oneYear: string;
    threeYears: string;
  };
}

const TimelineCard: React.FC<{
  period: string;
  status: string;
  description: string;
  color: string;
  delay: number;
}> = ({ period, status, description, color, delay }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan': return {
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/30',
        text: 'text-cyan-400',
        icon: 'text-cyan-400'
      };
      case 'blue': return {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        icon: 'text-blue-400'
      };
      case 'purple': return {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        icon: 'text-purple-400'
      };
      default: return {
        bg: 'bg-gray-500/10',
        border: 'border-gray-500/30',
        text: 'text-gray-400',
        icon: 'text-gray-400'
      };
    }
  };

  const colors = getColorClasses(color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      viewport={{ once: true }}
      className={`p-6 rounded-xl border backdrop-blur-lg ${colors.bg} ${colors.border}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Calendar className={`w-6 h-6 ${colors.icon}`} />
        <h3 className={`text-lg font-semibold ${colors.text}`}>
          {period}
        </h3>
      </div>
      
      <div className="mb-3">
        <h4 className="text-xl font-bold text-white mb-2">
          {status}
        </h4>
        <p className="text-gray-300 text-sm">
          {description}
        </p>
      </div>

      {/* Indicateur de risque */}
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${colors.bg} border ${colors.border}`}></div>
        <span className="text-xs text-gray-400">
          {period === 'Maintenant' ? 'Situation actuelle' :
           period === 'Dans 1 an' ? 'Court terme' : 'Long terme'}
        </span>
      </div>
    </motion.div>
  );
};

export const TimelineSection: React.FC<TimelineSectionProps> = ({ score, job, timeline }) => {
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
            📅 Timeline d'Impact Prévisionnelle
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Basé sur votre profil et les tendances actuelles du marché, 
            voici l'évolution probable de votre exposition au risque IA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TimelineCard
            period="Maintenant"
            status={timeline.immediate}
            description="Situation actuelle de votre métier"
            color="cyan"
            delay={0}
          />
          <TimelineCard
            period="Dans 1 an"
            status={timeline.oneYear}
            description="Évolution probable à court terme"
            color="blue"
            delay={200}
          />
          <TimelineCard
            period="Dans 3 ans"
            status={timeline.threeYears}
            description="Transformation anticipée"
            color="purple"
            delay={400}
          />
        </div>

        {/* Connecteurs entre les cartes */}
        <div className="hidden md:flex items-center justify-center mt-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </div>
        </div>

        {/* Note explicative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">
              Projections basées sur OECD Employment Outlook 2025 & WEF Future of Jobs
            </span>
          </div>
        </motion.div>

        {/* ⭐ NOUVEAU : CTA Émotionnel ⭐ */}
        <TimelineCtaBox score={score} />
      </div>
    </section>
  );
};
