import React from 'react';
import { motion } from 'framer-motion';
import { Target, BookOpen, Users, TrendingUp, Clock } from 'lucide-react';

interface RecommendationsSectionProps {
  answers: any;
  score: number;
  recommendations: string[];
  alternativeJobs: string[];
}

const ActionCard: React.FC<{
  priority: 'URGENT' | 'IMPORTANT' | 'PRÉVENTIF' | 'ESSENTIEL' | 'MINDSET';
  title: string;
  description: string;
  actions: string[];
  delay: number;
}> = ({ priority, title, description, actions, delay }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'URGENT': return 'border-red-500/30 bg-red-500/10 text-red-400';
      case 'IMPORTANT': return 'border-orange-500/30 bg-orange-500/10 text-orange-400';
      case 'ESSENTIEL': return 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400';
      case 'MINDSET': return 'border-purple-500/30 bg-purple-500/10 text-purple-400';
      default: return 'border-blue-500/30 bg-blue-500/10 text-blue-400';
    }
  };

  const colors = getPriorityColor(priority);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      viewport={{ once: true }}
      className={`p-6 rounded-xl border backdrop-blur-lg ${colors}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Target className="w-6 h-6" />
        <span className="text-sm font-bold uppercase tracking-wide">
          {priority}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-300 mb-4">
        {description}
      </p>

      <div className="space-y-2">
        {actions.map((action, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-300 text-sm">{action}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ 
  answers, 
  score, 
  recommendations,
  alternativeJobs 
}) => {
  const actionCards = [
    // Recommandation principale basée sur le score
    {
      priority: score >= 70 ? 'URGENT' : score >= 50 ? 'IMPORTANT' : 'PRÉVENTIF' as const,
      title: score >= 70 ? 'Reconversion immédiate' : score >= 50 ? 'Montée en compétences' : 'Restez à jour',
      description: score >= 70 
        ? 'Votre métier est à haut risque. Une action rapide est cruciale.'
        : score >= 50 
        ? 'Anticipez les changements en vous formant dès maintenant.'
        : 'Maintenez votre avantage en continuant à vous former.',
      actions: recommendations.slice(0, 3),
      delay: 0
    },
    // Recommandation sur les compétences numériques
    {
      priority: answers.digitalSkills < 3 ? 'ESSENTIEL' : 'IMPORTANT' as const,
      title: 'Maîtriser le numérique',
      description: 'Vos compétences digitales sont votre meilleur bouclier.',
      actions: [
        'Formation outils IA (ChatGPT, Midjourney)',
        'Automatisation de vos tâches répétitives',
        'Certification en compétences numériques'
      ],
      delay: 200
    },
    // Recommandation sur l'adaptabilité
    {
      priority: answers.reconversionWillingness < 3 ? 'MINDSET' : 'PRÉVENTIF' as const,
      title: 'Cultiver l\'adaptabilité',
      description: 'L\'ouverture au changement est votre meilleur atout.',
      actions: [
        'Explorer d\'autres métiers proches',
        'Rejoindre une communauté d\'entraide',
        'Travailler sur votre flexibilité mentale'
      ],
      delay: 400
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-900/30 to-slate-900">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            🎯 Votre Plan d'Action Personnalisé
          </h2>
          <p className="text-gray-400 mb-4">
            Basé sur votre profil et votre score de <span className="text-cyan-400 font-semibold">{score}%</span>
          </p>
          <p className="text-gray-500 text-sm">
            Ces recommandations sont générées en fonction de votre situation spécifique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {actionCards.map((card, i) => (
            <ActionCard
              key={i}
              priority={card.priority}
              title={card.title}
              description={card.description}
              actions={card.actions}
              delay={card.delay}
            />
          ))}
        </div>

        {/* Métiers alternatifs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              💼 Métiers Alternatifs Recommandés
            </h3>
            <p className="text-gray-400">
              Explorez ces professions moins exposées au risque IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {alternativeJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl hover:scale-105 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{job}</h4>
                    <p className="text-gray-400 text-sm">Risque IA faible</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition font-semibold">
              Explorer ces métiers →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

