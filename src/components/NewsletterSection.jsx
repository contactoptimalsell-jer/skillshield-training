import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export function NewsletterSection({ source = 'homepage' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Veuillez entrer votre email');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('http://localhost:3001/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage(data.error);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Erreur de connexion');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900/50 via-teal-900/40 to-slate-900/50 backdrop-blur-xl border-2 border-emerald-500/30 p-8 md:p-12">
          
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 pointer-events-none"></div>
          
          <div className="relative z-10">
            
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500/40">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 leading-tight">
              Restez informé des dernières évolutions IA
            </h3>

            <p className="text-lg text-gray-300 text-center mb-8 leading-relaxed">
              Recevez chaque semaine nos analyses sectorielles et conseils exclusifs pour protéger votre carrière.
            </p>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  disabled={status === 'loading' || status === 'success'}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50 transition-all"
                />

                <motion.button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  whileHover={{ scale: status === 'idle' || status === 'error' ? 1.05 : 1 }}
                  whileTap={{ scale: status === 'idle' || status === 'error' ? 0.95 : 1 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Inscription...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Inscrit !</span>
                    </>
                  ) : (
                    <span>S'inscrire</span>
                  )}
                </motion.button>
              </div>

              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${
                    status === 'success'
                      ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                      : 'bg-red-500/20 border border-red-500/30 text-red-300'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm">{message}</span>
                </motion.div>
              )}
            </form>

            <p className="mt-6 text-center text-sm text-cyan-300">
              Aucun spam. Respect de votre vie privée.
            </p>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
