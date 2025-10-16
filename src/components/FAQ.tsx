import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { useApp } from '../context/AppContext'

const faqs = [
  {
    question: 'Comment est calculé mon score de risque IA ?',
    answer: 'Notre algorithme analyse plusieurs facteurs : votre métier, votre secteur d\'activité, votre niveau d\'expérience et l\'exposition aux tâches répétitives. Nous utilisons les dernières données d\'automatisation et d\'IA pour fournir une évaluation précise et personnalisée.'
  },
  {
    question: 'Que se passe-t-il si mon métier est impacté par l\'IA ?',
    answer: 'Si vous êtes membre Bouclier ou Forteresse, nous vous alertons en temps réel des changements dans votre secteur. Nous vous proposons un plan de reconversion personnalisé, des formations adaptées et, pour les membres Forteresse, une garantie de revenu de 60% pendant 6 mois si l\'impact est prouvé.'
  },
  {
    question: 'Puis-je annuler mon abonnement à tout moment ?',
    answer: 'Oui, vous pouvez annuler votre abonnement à tout moment depuis votre tableau de bord. Aucun engagement, aucune pénalité. Nous croyons que vous devez être satisfait de notre service pour continuer à l\'utiliser.'
  },
  {
    question: 'La garantie de revenu, comment ça fonctionne ?',
    answer: 'La garantie Forteresse couvre 60% de votre salaire actuel pendant 6 mois maximum si votre emploi est directement impacté par l\'automatisation IA. Nous vérifions l\'impact, vous accompagnons dans votre recherche d\'emploi et vous formons aux nouvelles compétences demandées.'
  },
  {
    question: 'Mes données personnelles sont-elles sécurisées ?',
    answer: 'Absolument. Nous utilisons un chiffrement de niveau bancaire et respectons le RGPD. Vos données ne sont jamais partagées avec des tiers. Nous stockons uniquement les informations nécessaires pour vous fournir nos services.'
  },
  {
    question: 'Comment puis-je être sûr que les prévisions sont fiables ?',
    answer: 'Nos analyses s\'appuient sur des sources reconnues (MIT, McKinsey, WEF) et sont mises à jour en temps réel. Nous avons un taux de précision de 87% sur les prédictions à 18 mois. De plus, notre équipe d\'experts en IA et en marché du travail valide régulièrement nos algorithmes.'
  },
  {
    question: 'Que comprend exactement la formation incluse ?',
    answer: 'Les membres Bouclier reçoivent 3 mois de formation, les membres Forteresse ont accès à un catalogue complet. Formations en ligne, bootcamps express, certifications professionnelles, coaching 1-to-1... Tout est adapté à votre profil et à vos objectifs de reconversion.'
  },
  {
    question: 'Y a-t-il un essai gratuit ?',
    answer: 'Le plan Sentinelle est entièrement gratuit et vous donne accès au calculateur de risque et aux alertes de base. Pour Bouclier et Forteresse, nous offrons 14 jours d\'essai gratuit sans engagement, vous permettant de découvrir tous les avantages.'
  }
]

interface FAQItemProps {
  faq: typeof faqs[0]
  isOpen: boolean
  onToggle: () => void
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
      >
        <span className="font-semibold text-primary-900 pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-secondary-500" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export const FAQ: React.FC = () => {
  const { showNotification } = useApp()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }


  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Questions fréquentes
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Vous avez des questions ?
          </h2>
          <p className="text-xl text-gray-600">
            Trouvez les réponses aux questions les plus fréquentes sur SkillShield.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
