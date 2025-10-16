import { Shield, TrendingUp, Heart, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineCtaBoxWithTestimonialProps {
  score: number;
}

export function TimelineCtaBoxWithTestimonial({ score }: TimelineCtaBoxWithTestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-12 max-w-3xl mx-auto"
    >
      {/* Card principale */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 via-slate-800/40 to-slate-900/40 backdrop-blur-xl border-2 border-cyan-500/30 p-8 md:p-10">
        
        {/* Glow effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
        
        {/* Contenu */}
        <div className="relative z-10">
          
          {/* Icon central */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500/40">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          {/* Message émotionnel personnalisé selon score */}
          {score >= 70 ? (
            <>
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 leading-tight">
                Vous n'êtes pas condamné à subir ces changements
              </h3>
              <p className="text-lg text-gray-300 text-center mb-6 leading-relaxed">
                Avec <span className="text-cyan-400 font-semibold">SkillShield</span>, transformez ce risque élevé en opportunité. 
                <br className="hidden md:block" />
                Des milliers ont déjà pris les devants. <span className="text-white font-semibold">Pourquoi pas vous ?</span>
              </p>
            </>
          ) : score >= 50 ? (
            <>
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 leading-tight">
                Anticipez pendant qu'il est encore temps
              </h3>
              <p className="text-lg text-gray-300 text-center mb-6 leading-relaxed">
                <span className="text-cyan-400 font-semibold">SkillShield</span> vous donne les outils pour rester compétitif.
                <br className="hidden md:block" />
                Ceux qui agissent <span className="text-white font-semibold">maintenant</span> sont ceux qui réussiront demain.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 leading-tight">
                Gardez votre avance précieuse
              </h3>
              <p className="text-lg text-gray-300 text-center mb-6 leading-relaxed">
                Avec <span className="text-cyan-400 font-semibold">SkillShield</span>, restez toujours un coup d'avance.
                <br className="hidden md:block" />
                Les leaders de demain <span className="text-white font-semibold">ne cessent jamais d'apprendre</span>.
              </p>
            </>
          )}

          {/* Avantages en grille */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            
            {/* Avantage 1 */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <span className="text-lg">🔔</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Alertes mensuelles</div>
                <div className="text-xs text-gray-400">sur votre secteur</div>
              </div>
            </div>

            {/* Avantage 2 */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <span className="text-lg">🗺️</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Plan de reconversion</div>
                <div className="text-xs text-gray-400">personnalisé</div>
              </div>
            </div>

            {/* Avantage 3 */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <span className="text-lg">📊</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Analyses sectorielles</div>
                <div className="text-xs text-gray-400">avancées</div>
              </div>
            </div>

            {/* Avantage 4 */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Chatbot IA 24/7</div>
                <div className="text-xs text-gray-400">questions carrière</div>
              </div>
            </div>

            {/* Avantage 5 */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
                <span className="text-lg">👨‍🏫</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Coaching mensuel</div>
                <div className="text-xs text-gray-400">avec professionnels</div>
              </div>
            </div>

            {/* Avantage 6 */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <span className="text-lg">🎓</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Formation 360°</div>
                <div className="text-xs text-gray-400">20+ au lancement</div>
              </div>
            </div>

          </div>

          {/* Badge "Et bien plus" */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium">
              <span>✨</span>
              Et beaucoup d'autres avantages
            </span>
          </div>

          {/* Micro-témoignage */}
          <div className="mb-6 p-4 bg-white/5 rounded-lg border-l-4 border-cyan-400">
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300 text-sm italic mb-2">
                  "En 6 mois, j'ai pivoté de comptable à Data Analyst. SkillShield m'a accompagné à chaque étape."
                </p>
                <p className="text-gray-500 text-xs">
                  — Marie, membre Bouclier
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.3)',
                  '0 0 40px rgba(6, 182, 212, 0.5)',
                  '0 0 20px rgba(6, 182, 212, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => window.location.href = 'http://localhost:5173/waitinglist'}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center gap-3"
            >
              <span>Rejoindre SkillShield</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Urgence subtile */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-gray-400">
                Les 20 premiers : <span className="text-white font-semibold">-50% à vie</span>
              </span>
            </div>
          </div>

          {/* Rassurance */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="text-green-400">✓</span> Sans engagement
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-400">✓</span> Annulation simple
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-400">✓</span> Support prioritaire
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
