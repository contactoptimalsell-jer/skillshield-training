import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, Mail, Share2, AlertCircle } from 'lucide-react';
import { SocialShareButtons } from '../SocialShareButtons';

interface EmailCaptureModalProps {
  score: number;
  answers: any;
  breakdown?: any;
  onClose: () => void;
  onSuccess: () => void;
  onSubmitToSupabase?: (email: string) => Promise<any>;
  submitting?: boolean;
  submitted?: boolean;
  error?: string | null;
}

export const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({
  score,
  answers,
  breakdown,
  onClose,
  onSuccess,
  onSubmitToSupabase,
  submitting = false,
  submitted = false,
  error = null
}) => {
  const [email, setEmail] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);

  const handleSend = async () => {
    if (!email || !email.includes('@') || !onSubmitToSupabase) return;

    try {
      await onSubmitToSupabase(email);
      onSuccess();
    } catch (err) {
      console.error('Erreur lors de l\'envoi:', err);
      // L'erreur est gérée par le composant parent
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 max-w-md w-full border border-white/20 shadow-2xl"
        >
          {/* Bouton de fermeture */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>

          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  📧 Recevez votre rapport complet
                </h3>
                <p className="text-gray-400">
                  Votre analyse détaillée + plan d'action personnalisé par email
                </p>
              </div>

              {/* Score highlight */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {score}%
                  </div>
                  <div className="text-white font-semibold">
                    Votre Score de Risque IA
                  </div>
                  <div className="text-gray-400 text-sm">
                    {answers.firstName}, voici votre analyse complète
                  </div>
                </div>
              </div>

              {/* Formulaire email */}
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Votre adresse email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                        <button
                          onClick={handleSend}
                          disabled={!email || submitting}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                        >
                          {submitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Mail className="w-5 h-5" />
                              Envoyer mon rapport gratuit
                            </>
                          )}
                        </button>

                {/* Affichage des erreurs */}
                {error && (
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 text-sm">{error}</span>
                  </div>
                )}
              </div>

              {/* Garanties */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Pas de spam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Données sécurisées</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Désinscription facile</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Success state */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  ✅ Rapport envoyé !
                </h3>
                <p className="text-gray-400 mb-6">
                  Consultez votre boîte mail dans quelques minutes
                  <br />
                  <span className="text-sm">(vérifiez vos spams si nécessaire)</span>
                </p>

                {/* Actions supplémentaires */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowShareModal(true)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition"
                  >
                    <Share2 className="w-4 h-4" />
                    Partager mes résultats
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/* Modal de partage social */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative border border-cyan-500/30"
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setShowShareModal(false)}
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
              firstName={answers?.firstName}
              job={answers?.job}
              sector={answers?.sector}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
