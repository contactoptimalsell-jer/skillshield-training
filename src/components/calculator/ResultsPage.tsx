import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  XCircle, 
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Share2,
  Mail
} from 'lucide-react';
// Interface pour le résultat du calcul
interface RiskCalculationResult {
  score: number;
  level: 'low' | 'medium' | 'high' | 'critical';
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
  timeline: {
    immediate: string;
    oneYear: string;
    threeYears: string;
  };
  recommendations: string[];
  alternativeJobs: string[];
}

import { formatRiskLevel, getScoreColor } from '../../utils/riskCalculator';
import { CircularGauge } from './CircularGauge';
import { RiskLevel } from './RiskLevel';
import { TimelineSection } from './TimelineSection';
import { BreakdownSection } from './BreakdownSection';
import { ComparisonSection } from './ComparisonSection';
import { RecommendationsSection } from './RecommendationsSection';
import { EmailCaptureModal } from './EmailCaptureModal';
import { SocialShareButtons } from '../SocialShareButtons';
import { X } from 'lucide-react';

interface ResultsPageProps {
  result: RiskCalculationResult;
  answers: any;
  onBack: () => void;
  onSubmitToSupabase?: (email: string) => Promise<any>;
  assessmentId?: string | null;
  submitting?: boolean;
  submitted?: boolean;
  error?: string | null;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ 
  result, 
  answers, 
  onBack, 
  onSubmitToSupabase,
  assessmentId,
  submitting,
  submitted,
  error
}) => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const riskInfo = formatRiskLevel(result.level);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero avec Score Principal */}
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Animation d'entrée spectaculaire */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            {/* Gauge circulaire animée */}
            <CircularGauge value={result.score} size={300} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Votre Score de Risque IA : {result.score}%
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-6"
          >
            <RiskLevel score={result.score} level={result.level} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl text-gray-300 mt-6"
          >
            Bonjour <span className="text-cyan-400 font-semibold">{answers.firstName}</span>, voici une analyse complète 
            de votre exposition à l'automatisation IA.
          </motion.p>

          {/* Actions rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <button
              onClick={() => setShowEmailModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white hover:bg-white/20 transition"
            >
              <Mail className="w-5 h-5" />
              Recevoir par email
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white hover:bg-white/20 transition"
            >
              <Share2 className="w-5 h-5" />
              Partager
            </button>
          </motion.div>
        </div>
      </section>

      {/* Timeline de Risque */}
      <TimelineSection 
        score={result.score} 
        job={answers.job}
        timeline={result.timeline}
      />

      {/* Décomposition Détaillée */}
      <BreakdownSection breakdown={result.breakdown} />

      {/* Comparaison Métiers */}
      <ComparisonSection job={answers.job} />

      {/* Recommandations Personnalisées */}
      <RecommendationsSection 
        answers={answers} 
        score={result.score}
        recommendations={result.recommendations}
        alternativeJobs={result.alternativeJobs}
      />

      {/* Section Partage Social */}
      <SocialShareSection 
        score={result.score} 
        firstName={answers.firstName}
        job={answers.job}
        sector={answers.sector}
      />

      {/* CTA Final Émotionnel */}
      <CtaSection score={result.score} answers={answers} />

                {/* Modal de capture d'email */}
                {showEmailModal && (
                  <EmailCaptureModal
                    score={result.score}
                    answers={answers}
                    breakdown={result.breakdown}
                    onClose={() => setShowEmailModal(false)}
                    onSuccess={() => setEmailSent(true)}
                    onSubmitToSupabase={onSubmitToSupabase}
                    submitting={submitting}
                    submitted={submitted}
                    error={error}
                  />
                )}

      {/* Modal de partage social */}
      {showShareModal && (
        <ShareModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          score={result.score}
          firstName={answers?.firstName}
          job={answers?.job}
          sector={answers?.sector}
        />
      )}
    </div>
  );
};

// Section CTA émotionnel
const CtaSection: React.FC<{ score: number; answers: any }> = ({ score, answers }) => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background dramatique */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Titre émotionnel personnalisé selon le score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {score >= 70 ? (
            <>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {answers.firstName}, votre carrière 
                <span className="block text-yellow-300">mérite mieux que l'incertitude</span>
              </h2>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Votre score de <strong>{score}%</strong> indique un risque élevé.
                <br />
                Mais vous avez le <strong>pouvoir de changer ça</strong>.
              </p>
            </>
          ) : score >= 50 ? (
            <>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {answers.firstName}, anticipez 
                <span className="block text-cyan-300">pendant qu'il est encore temps</span>
              </h2>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Votre score de <strong>{score}%</strong> vous place dans la zone d'alerte.
                <br />
                Ceux qui agissent <strong>maintenant</strong> seront les gagnants de demain.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {answers.firstName}, gardez 
                <span className="block text-green-300">votre avance précieuse</span>
              </h2>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Votre score de <strong>{score}%</strong> est bon, mais ne vous endormez pas.
                <br />
                Restez <strong>toujours un coup d'avance</strong>.
              </p>
            </>
          )}
        </motion.div>

        {/* Stats choc en overlay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-yellow-300 mb-2">6 mois</div>
            <div className="text-white/80">Temps moyen avant impact IA</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-yellow-300 mb-2">78%</div>
            <div className="text-white/80">de nos membres se sentent protégés</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-yellow-300 mb-2">+47%</div>
            <div className="text-white/80">de salaire moyen post-reconversion</div>
          </div>
        </div>

        {/* Message émotionnel fort */}
        <div className="bg-white/20 backdrop-blur-xl border-2 border-white/40 rounded-2xl p-8 mb-12">
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
            <strong className="text-yellow-300">Imaginez dans 6 mois :</strong>
            <br />
            Pendant que vos collègues paniquent face aux changements,
            <br />
            <strong>vous avez déjà pris les devants.</strong>
            <br /><br />
            Vous maîtrisez les outils IA. Vous êtes formé. Vous êtes serein.
            <br />
            <strong className="text-cyan-300">Vous avez repris le contrôle.</strong>
          </p>
        </div>

        {/* Double CTA avec urgence */}
        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-12 py-6 bg-white text-blue-600 font-bold text-xl rounded-xl shadow-2xl hover:shadow-white/50 transition-all"
          >
            🚀 Oui, je veux être protégé - Rejoindre SkillShield
          </motion.button>

          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Clock className="w-4 h-4" />
            <span>Les 20 premiers inscrits : -50% à vie</span>
          </div>
        </div>

        {/* Social proof final */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span>Données sécurisées</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span>17 déjà inscrits aujourd'hui</span>
          </div>
        </div>

        {/* Citation finale puissante */}
        <div className="mt-16 border-t border-white/20 pt-8">
          <blockquote className="text-2xl text-white/90 italic font-light">
            "Le meilleur moment pour se préparer au futur était hier.
            <br />
            Le deuxième meilleur moment, c'est <strong className="text-yellow-300">maintenant</strong>."
          </blockquote>
        </div>

        {/* Dernier rappel visuel */}
        <div className="mt-8 inline-flex items-center gap-3 bg-red-500/20 border border-red-500/50 rounded-full px-6 py-3">
          <AlertTriangle className="w-5 h-5 text-red-300 animate-pulse" />
          <span className="text-white font-semibold">
            Votre score : {score}% - Ne laissez pas passer cette chance
          </span>
        </div>
      </div>
    </section>
  );
};

// Section Partage Social
const SocialShareSection: React.FC<{ 
  score: number; 
  firstName?: string;
  job?: string;
  sector?: string;
}> = ({ score, firstName, job, sector }) => {
  return (
    <section className="relative py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        
        {/* Card de partage */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 md:p-12">
          
          {/* Titre section */}
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Partagez votre démarche 🚀
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Vous avez pris conscience de l'impact de l'IA. 
              <br className="hidden md:block" />
              Aidez vos proches à faire de même !
            </motion.p>
          </div>

          {/* Stats motivationnelles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-cyan-400 mb-1">87%</div>
              <div className="text-xs text-gray-400">découvrent via un proche</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-green-400 mb-1">2min</div>
              <div className="text-xs text-gray-400">pour faire le test</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
              <div className="text-xs text-gray-400">gratuit et sans engagement</div>
            </div>
          </motion.div>

          {/* Composant boutons de partage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SocialShareButtons 
              score={score} 
              firstName={firstName}
              job={job}
              sector={sector}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Modal de partage social
const ShareModal: React.FC<{ 
  isOpen: boolean;
  onClose: () => void;
  score: number;
  firstName?: string;
  job?: string;
  sector?: string;
}> = ({ isOpen, onClose, score, firstName, job, sector }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative border border-cyan-500/30"
      >
        
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Titre */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4">
            <Share2 className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Partagez vos résultats
          </h3>
          <p className="text-gray-400 text-sm">
            Aidez vos proches à découvrir leur risque IA
          </p>
        </div>

        {/* Boutons de partage */}
        <SocialShareButtons 
          score={score} 
          firstName={firstName}
          job={job}
          sector={sector}
        />
      </motion.div>
    </div>
  );
};
