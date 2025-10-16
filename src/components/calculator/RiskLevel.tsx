import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertCircle, AlertTriangle, XCircle } from 'lucide-react';
import { formatRiskLevel } from '../../utils/riskCalculator';

interface RiskLevelProps {
  score: number;
  level: 'low' | 'medium' | 'high' | 'critical';
}

export const RiskLevel: React.FC<RiskLevelProps> = ({ score, level }) => {
  const riskInfo = formatRiskLevel(level);

  const getIcon = (level: string) => {
    switch (level) {
      case 'low': return Shield;
      case 'medium': return AlertCircle;
      case 'high': return AlertTriangle;
      case 'critical': return XCircle;
      default: return AlertCircle;
    }
  };

  const getMessage = (level: string) => {
    switch (level) {
      case 'low': return "Votre métier est relativement protégé";
      case 'medium': return "Anticipez pour rester compétitif";
      case 'high': return "Action recommandée rapidement";
      case 'critical': return "Action urgente nécessaire";
      default: return "Analyse en cours";
    }
  };

  const getColorClasses = (level: string) => {
    switch (level) {
      case 'low': return {
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        text: 'text-green-400',
        icon: 'text-green-400'
      };
      case 'medium': return {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        icon: 'text-blue-400'
      };
      case 'high': return {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        icon: 'text-orange-400'
      };
      case 'critical': return {
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        text: 'text-red-400',
        icon: 'text-red-400'
      };
      default: return {
        bg: 'bg-gray-500/10',
        border: 'border-gray-500/30',
        text: 'text-gray-400',
        icon: 'text-gray-400'
      };
    }
  };

  const Icon = getIcon(level);
  const colors = getColorClasses(level);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 ${colors.bg} ${colors.border}`}
    >
      <Icon className={`w-6 h-6 ${colors.icon}`} />
      <div>
        <div className={`${colors.text} font-bold text-lg`}>
          {riskInfo.label}
        </div>
        <div className="text-sm text-gray-400">
          {getMessage(level)}
        </div>
      </div>
    </motion.div>
  );
};

