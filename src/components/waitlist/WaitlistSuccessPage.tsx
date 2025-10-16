import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Shield,
  Check,
  Mail,
  Target,
  Share2,
  Copy,
  ArrowLeft,
  Sparkles,
  Gift,
  Users,
  TrendingUp,
  Star,
  Linkedin,
  Twitter,
  Facebook,
  ExternalLink
} from 'lucide-react'
import toast from 'react-hot-toast'

interface LocationState {
  number: number
  email: string
  firstName: string
}

export const WaitlistSuccessPage: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state as LocationState
  
  const [referralLink] = useState(`https://skillshield.app/join/ABC${Math.random().toString(36).substr(2, 9)}`)
  const [invitationsCount, setInvitationsCount] = useState(0)
  const [copied, setCopied] = useState(false)

  // If no state, redirect to waitlist
  useEffect(() => {
    if (!state) {
      navigate('/login')
    }
  }, [state, navigate])

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      toast.success('Lien copié !')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('Erreur lors de la copie')
    }
  }

  const handleShare = (platform: string) => {
    const text = `Je viens de rejoindre la liste d'attente de SkillShield, la première assurance carrière face à l'IA. Rejoignez-moi ! 🚀`
    const url = referralLink

    let shareUrl = ''
    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  if (!state) {
    return null
  }

  const isTopFivePercent = state.number <= 20 // Top 5% if in first 20

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 pt-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-block mb-6">
            <motion.div
              className="flex items-center justify-center space-x-3 text-3xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="w-8 h-8 text-cyan-400" />
              <span>SkillShield</span>
            </motion.div>
          </Link>

          <motion.div
            className="inline-block p-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Check className="w-12 h-12 text-emerald-400" />
          </motion.div>

          <h1 className="text-4xl font-bold text-white mb-4">
            🎉 Bienvenue dans la famille SkillShield !
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            Votre place sur la liste d'attente est confirmée.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-2xl font-bold text-cyan-400">
              Vous êtes le {state.number.toLocaleString()}ème inscrit
            </span>
            {isTopFivePercent && (
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Top 5% 🏆
              </span>
            )}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Step 1: Email Verification */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center">
              <div className="inline-block p-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-4">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">📧 Étape 1</h3>
              <h4 className="text-lg font-medium text-white mb-3">Vérifiez votre email</h4>
              <p className="text-slate-300 text-sm mb-4">
                Un email de confirmation vous a été envoyé à <strong>{state.email}</strong>
              </p>
              <p className="text-slate-400 text-xs">
                Pensez à vérifier vos spams !
              </p>
            </div>
          </motion.div>

          {/* Step 2: Calculate Score */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <div className="inline-block p-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-4">
                <Target className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">🎯 Étape 2</h3>
              <h4 className="text-lg font-medium text-white mb-3">Calculez votre score IA</h4>
              <p className="text-slate-300 text-sm mb-4">
                Profitez-en pour découvrir votre niveau de risque dès maintenant.
              </p>
              <Link
                to="/risk-calculator"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-emerald-400 transition-all duration-200"
              >
                <span>Calculer mon score</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Step 3: Share and Earn */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center">
              <div className="inline-block p-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                <Share2 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">🚀 Étape 3</h3>
              <h4 className="text-lg font-medium text-white mb-3">Partagez et gagnez</h4>
              <p className="text-slate-300 text-sm mb-4">
                Invitez 3 amis et gagnez 1 mois gratuit au lancement !
              </p>
              <button className="inline-flex items-center space-x-2 border border-purple-400 text-purple-400 py-2 px-4 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-200">
                <span>Partager</span>
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Referral Program */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-center mb-6">
            <div className="inline-block p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500/20 border border-yellow-400/30 mb-4">
              <Gift className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">🎁 Programme de parrainage</h2>
            <p className="text-slate-300">
              Votre lien unique pour inviter vos amis et gagner des avantages exclusifs
            </p>
          </div>

          {/* Referral Link */}
          <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
            <label className="block text-sm font-medium text-white mb-2">
              Votre lien unique :
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm font-mono"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-cyan-500 text-white hover:bg-cyan-400'
                }`}
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? 'Copié !' : 'Copier'}</span>
              </button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-800/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span>Pour chaque ami inscrit :</span>
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <span>+2 semaines d'accès anticipé (max 2 mois)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <span>+10% de réduction supplémentaire (max -75%)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <span>Badge "Ambassadeur SkillShield"</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Vos invitations :</span>
              </h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">Progression</span>
                <span className="text-sm font-semibold text-white">{invitationsCount}/3</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(invitationsCount / 3) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-400">
                {invitationsCount >= 3 ? '🎉 Objectif atteint !' : `${3 - invitationsCount} invitations restantes`}
              </p>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="text-center">
            <p className="text-white font-semibold mb-4">
              Aidez-nous à protéger plus de carrières :
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                onClick={() => handleShare('linkedin')}
                className="flex items-center space-x-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.button>
              <motion.button
                onClick={() => handleShare('twitter')}
                className="flex items-center space-x-2 bg-sky-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-sky-400 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </motion.button>
              <motion.button
                onClick={() => handleShare('facebook')}
                className="flex items-center space-x-2 bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>← Retour à l'accueil</span>
          </Link>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 hidden lg:block"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-8 h-8 text-yellow-400 opacity-60" />
        </motion.div>

        <motion.div
          className="absolute top-20 right-20 hidden lg:block"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Star className="w-6 h-6 text-emerald-400 opacity-60" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Gift className="w-7 h-7 text-purple-400 opacity-60" />
        </motion.div>
      </div>
    </div>
  )
}
