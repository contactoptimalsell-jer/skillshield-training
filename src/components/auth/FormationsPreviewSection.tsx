/**
 * Section Formations - 5 disponibles + 15 à venir
 * Crée de l'anticipation et de la valeur perçue
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Check, Clock, Star } from 'lucide-react'

interface Formation {
  id: number
  title: string
  description: string
  emoji: string
  status: 'available' | 'coming'
  category?: string
}

const availableFormations: Formation[] = [
  {
    id: 1,
    title: "Prompt Engineering & IA Générative",
    description: "Maîtrisez l'outil qui change tout",
    emoji: "🤖",
    status: 'available'
  },
  {
    id: 2,
    title: "Développement Web Full-Stack 2025",
    description: "Le métier le plus demandé cette année",
    emoji: "💻",
    status: 'available'
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    description: "Transformez les données en décisions",
    emoji: "📊",
    status: 'available'
  },
  {
    id: 4,
    title: "Métiers du Futur (2025-2030)",
    description: "Anticipez les besoins de demain",
    emoji: "🔮",
    status: 'available'
  },
  {
    id: 5,
    title: "Reconversion Digitale (+45 ans)",
    description: "Il n'est jamais trop tard",
    emoji: "🌍",
    status: 'available'
  }
]

const comingFormations: Formation[] = [
  {
    id: 6,
    title: "Cloud Engineering (AWS/Azure)",
    description: "L'infrastructure du futur",
    emoji: "☁️",
    status: 'coming'
  },
  {
    id: 7,
    title: "UX/UI Design & Figma Mastery",
    description: "Créez des expériences inoubliables",
    emoji: "🎨",
    status: 'coming'
  },
  {
    id: 8,
    title: "Cybersécurité & Ethical Hacking",
    description: "Protégez l'économie numérique",
    emoji: "🔐",
    status: 'coming'
  },
  {
    id: 9,
    title: "Développement Mobile (React Native)",
    description: "Une app, deux plateformes",
    emoji: "📱",
    status: 'coming'
  },
  {
    id: 10,
    title: "Product Management & Growth",
    description: "Devenez celui qui décide",
    emoji: "🚀",
    status: 'coming'
  },
  {
    id: 11,
    title: "Blockchain & Web3 Development",
    description: "Construisez le futur décentralisé",
    emoji: "💰",
    status: 'coming'
  },
  {
    id: 12,
    title: "Digital Marketing & SEO Advanced",
    description: "Attirez votre audience idéale",
    emoji: "🎯",
    status: 'coming'
  },
  {
    id: 13,
    title: "Business Intelligence & Power BI",
    description: "Les données parlent, écoutez-les",
    emoji: "📈",
    status: 'coming'
  },
  {
    id: 14,
    title: "DevOps & Infrastructure as Code",
    description: "Automatisez, libérez-vous",
    emoji: "🏗️",
    status: 'coming'
  },
  {
    id: 15,
    title: "IA & Automatisation No-Code",
    description: "Gagnez des heures chaque jour",
    emoji: "🧠",
    status: 'coming'
  },
  {
    id: 16,
    title: "Community Management & Social Media",
    description: "Créez une communauté engagée",
    emoji: "💬",
    status: 'coming'
  },
  {
    id: 17,
    title: "Content Creation & Personal Branding",
    description: "Devenez visible, devenez incontournable",
    emoji: "🎤",
    status: 'coming'
  },
  {
    id: 18,
    title: "Copywriting & Storytelling IA-Proof",
    description: "Les mots qui vendent et touchent",
    emoji: "📝",
    status: 'coming'
  },
  {
    id: 19,
    title: "Montage Vidéo & Motion Design",
    description: "Donnez vie à vos idées",
    emoji: "🎬",
    status: 'coming'
  },
  {
    id: 20,
    title: "Transition vers le Freelancing",
    description: "La liberté professionnelle en 90 jours",
    emoji: "🏢",
    status: 'coming'
  }
]

export const FormationsPreviewSection: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg 
        rounded-2xl p-6 border border-white/10 shadow-2xl shadow-cyan-500/10"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-2xl">🎓</div>
        <div>
          <h3 className="text-white font-bold text-lg">Formations auxquelles vous aurez accès</h3>
          <p className="text-gray-400 text-sm">Disponibles au lancement :</p>
        </div>
      </div>

      {/* Available Formations */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 font-semibold text-sm">Les 5 Formations Prioritaires</span>
        </div>
        
        {availableFormations.map((formation, index) => (
          <motion.div
            key={formation.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-md 
              rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 group"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">{formation.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-white font-semibold group-hover:text-cyan-100 transition-colors">
                    {formation.id}. {formation.title}
                  </h4>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-500/30">
                    ✅ DISPONIBLE
                  </span>
                </div>
                <p className="text-gray-400 text-sm italic">"{formation.description}"</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        <div className="text-gray-500 text-xs">🚀 15 formations supplémentaires arrivent bientôt</div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      </div>

      {/* Coming Soon Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowComingSoon(!showComingSoon)}
        className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md 
          border border-purple-500/30 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 
          group mb-4"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="text-purple-400 font-semibold">
            {showComingSoon ? 'Masquer' : 'Découvrir'} les 15 Formations à Venir
          </span>
          {showComingSoon ? <ChevronUp className="w-5 h-5 text-purple-400" /> : <ChevronDown className="w-5 h-5 text-purple-400" />}
        </div>
      </motion.button>

      {/* Coming Soon Formations */}
      <motion.div
        initial={false}
        animate={{ height: showComingSoon ? 'auto' : 0, opacity: showComingSoon ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm">Les 15 Formations à Venir</span>
          </div>
          
          {comingFormations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: showComingSoon ? 0.7 : 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 backdrop-blur-md 
                rounded-xl p-4 border border-gray-600/30 hover:border-gray-600/50 transition-all duration-300 
                group opacity-70"
            >
              <div className="flex items-start gap-4">
                <div className="text-xl">{formation.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-gray-300 font-semibold group-hover:text-gray-200 transition-colors">
                      {formation.id}. {formation.title}
                    </h4>
                    <span className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded-full border border-purple-500/30">
                      🔜 BIENTÔT
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm italic">"{formation.description}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

