import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, CheckCircle, Mail, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

// Interface pour les données Supabase
interface RiskAssessment {
  id: string;
  created_at: string;
  email: string;
  first_name: string;
  score: number;
  risk_level: string;
  answers: any;
  breakdown: any;
  email_sent: boolean;
  email_sent_at?: string;
  resend_message_id?: string;
  user_agent?: string;
  ip_address?: string;
}
import { TimelineCtaBox } from '../components/calculator/TimelineCtaBox';
import { CircularGauge } from '../components/calculator/CircularGauge';
import { RiskLevel } from '../components/calculator/RiskLevel';
import { TimelineSection } from '../components/calculator/TimelineSection';
import { BreakdownSection } from '../components/calculator/BreakdownSection';
import { RecommendationsSection } from '../components/calculator/RecommendationsSection';
import { SocialShareButtons } from '../components/SocialShareButtons';
import { NewsletterSection } from '../components/NewsletterSection';

export const ResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState<RiskAssessment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const assessmentId = searchParams.get('id');
  const dataParam = searchParams.get('data');

  useEffect(() => {
    // Si on a des données directement dans l'URL (cas de récupération d'erreur)
    if (dataParam) {
      try {
        const { answers, result } = JSON.parse(decodeURIComponent(dataParam));
        // Créer un objet assessment à partir des données
        const mockAssessment: RiskAssessment = {
          id: 'recovery-' + Date.now(),
          created_at: new Date().toISOString(),
          email: '',
          first_name: answers.firstName,
          score: result.score,
          risk_level: result.level,
          answers: answers,
          breakdown: result.breakdown,
          email_sent: false,
        };
        setAssessment(mockAssessment);
        setLoading(false);
        return;
      } catch (err) {
        console.error('Erreur lors du parsing des données:', err);
        setError('Données corrompues');
        setLoading(false);
        return;
      }
    }

    // Cas normal : récupération depuis Supabase
    if (!assessmentId) {
      setError('ID d\'évaluation manquant');
      setLoading(false);
      return;
    }

    const fetchAssessment = async () => {
      try {
        const { data, error } = await supabase
          .from('risk_assessments')
          .select('*')
          .eq('id', assessmentId)
          .single();

        if (error) {
          console.error('Erreur Supabase:', error);
          setError('Évaluation introuvable');
        } else {
          setAssessment(data);
        }
      } catch (err) {
        console.error('Erreur lors de la récupération:', err);
        setError('Erreur lors du chargement');
      } finally {
        setLoading(false);
      }
    };

    fetchAssessment();
  }, [assessmentId, dataParam]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Chargement de vos résultats...</p>
        </div>
      </div>
    );
  }

  if (error || !assessment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Résultats introuvables</h1>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => navigate('/calculator')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition"
          >
            Faire une nouvelle évaluation
          </button>
        </div>
      </div>
    );
  }

  // Reconstituer l'objet result pour la compatibilité avec les composants existants
  const result = {
    score: assessment.score,
    level: assessment.risk_level.toLowerCase() as 'low' | 'medium' | 'high' | 'critical',
    breakdown: assessment.breakdown,
    timeline: {
      immediate: "Votre situation actuelle face à l'IA",
      oneYear: "Évolution prévue dans 12 mois",
      threeYears: "Transformation anticipée à long terme"
    },
    recommendations: [
      "Développer vos compétences digitales",
      "Élargir votre réseau professionnel",
      "Anticiper les changements de votre secteur"
    ],
    alternativeJobs: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 py-6 px-4 flex justify-between items-center container mx-auto max-w-7xl"
      >
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-cyan-400" />
          <h1 className="text-2xl font-bold text-white">SkillShield</h1>
        </div>
        <button
          onClick={() => navigate('/calculator')}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Nouvelle évaluation
        </button>
      </motion.header>

      <main className="relative z-10 container mx-auto max-w-7xl px-4 pb-16">
        {/* Score principal */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center py-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Votre Score de Risque IA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {assessment.first_name}, voici votre analyse personnalisée face à l'impact de l'Intelligence Artificielle sur votre carrière.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <CircularGauge score={assessment.score} />
            <div className="text-left">
              <RiskLevel level={result.level} />
              <p className="text-lg text-gray-300 mt-4 max-w-md">
                Votre métier présente un <strong className="text-cyan-400">{assessment.risk_level.toLowerCase()}</strong> face à l'automatisation et aux transformations de l'IA.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Confirmation d'envoi email */}
        {assessment.email_sent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                ✅ Rapport envoyé avec succès !
              </h3>
              <p className="text-gray-300 mb-4">
                Votre rapport détaillé a été envoyé à <strong className="text-green-400">{assessment.email}</strong>
              </p>
              <p className="text-sm text-gray-400">
                Vérifiez votre boîte mail dans quelques minutes (et vos spams si nécessaire)
              </p>
              {assessment.resend_message_id && (
                <p className="text-xs text-gray-500 mt-2">
                  ID de suivi: {assessment.resend_message_id}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Timeline de Risque */}
        <TimelineSection score={assessment.score} job="votre métier" timeline={result.timeline} />

        {/* Décomposition du Score */}
        <BreakdownSection breakdown={assessment.breakdown} />

        {/* Recommandations Personnalisées */}
        <RecommendationsSection
          answers={assessment.answers}
          score={assessment.score}
          recommendations={result.recommendations}
          alternativeJobs={result.alternativeJobs}
        />

        {/* Section Partage Social */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <SocialShareButtons
                score={assessment.score}
                firstName={assessment.first_name}
                job="votre métier"
                sector="votre secteur"
              />
            </div>
          </div>
        </motion.section>

        {/* CTA Final Émotionnel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <TimelineCtaBox score={assessment.score} />
        </motion.div>

        {/* Newsletter Section */}
        <NewsletterSection source="results_page" />
      </main>
    </div>
  );
};
