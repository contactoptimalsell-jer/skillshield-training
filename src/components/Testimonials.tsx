import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Shield } from 'lucide-react'
import { Card } from './ui/Card'

const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'Développeuse Frontend',
    company: 'TechCorp',
    plan: 'Beta Testeur',
    avatar: 'MD',
    quote: 'J\'ai eu la chance de tester SkillShield en avant-première. Le concept est révolutionnaire ! Mon score IA était à 78% - ça m\'a ouvert les yeux. J\'anticipe déjà ma reconversion vers l\'IA prompt engineering.',
    rating: 5,
    verified: true
  },
  {
    name: 'Thomas Martin',
    role: 'Marketing Manager',
    company: 'Digital Agency',
    plan: 'Early Adopter',
    avatar: 'TM',
    quote: 'En tant qu\'early adopter, j\'ai pu découvrir les alertes sectorielles avant le lancement. La précision est impressionnante ! Je vais être prêt quand mon secteur sera impacté par l\'IA.',
    rating: 5,
    verified: true
  },
  {
    name: 'Sophie Chen',
    role: 'Comptable',
    company: 'Cabinet d\'expertise',
    plan: 'Beta Testeur',
    avatar: 'SC',
    quote: 'Le concept de garantie de revenu pendant la transition est génial ! Mon score IA est critique (85%), mais je me prépare déjà à devenir consultante en automatisation comptable.',
    rating: 5,
    verified: true
  },
  {
    name: 'Alexandre Moreau',
    role: 'Chef de Projet IT',
    company: 'StartupTech',
    plan: 'Early Adopter',
    avatar: 'AM',
    quote: 'Les formations bootcamp prévues sont exactement ce dont j\'ai besoin ! En 3 mois, je vais acquérir toutes les compétences pour devenir Product Owner IA. L\'avenir commence maintenant !',
    rating: 5,
    verified: true
  },
  {
    name: 'Camille Rousseau',
    role: 'Designer UX/UI',
    company: 'Creative Studio',
    plan: 'Beta Testeur',
    avatar: 'CR',
    quote: 'Le coaching personnalisé promis va m\'aider à créer mon agence spécialisée en design IA. Je vais travailler avec des clients internationaux et vivre ma passion. Le futur est là !',
    rating: 5,
    verified: true
  }
]

const getAvatarColor = (initials: string) => {
  const colors = [
    'bg-secondary-500',
    'bg-accent-500', 
    'bg-primary-500'
  ]
  const index = initials.charCodeAt(0) % colors.length
  return colors[index]
}

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Ils préparent déjà leur avenir
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos beta-testeurs et early adopters anticipent 
            leur transformation carrière avec SkillShield.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <Quote className="w-8 h-8 text-secondary-300" />
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full ${getAvatarColor(testimonial.avatar)} flex items-center justify-center text-white font-semibold`}>
                    {testimonial.avatar}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-primary-900">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    
                    <p className="text-xs text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Plan Badge */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-gray-500">
                      {testimonial.plan === 'Beta Testeur' ? 'Privilégié' : 'Pionnier'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      testimonial.plan === 'Beta Testeur' 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    }`}>
                      {testimonial.plan}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-primary-900 mb-4">
              Rejoignez plus de 20+ professionnels protégés
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium">4.9/5</span>
                <span className="text-gray-600">satisfaction client</span>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-accent-500" />
                <span className="font-medium">98%</span>
                <span className="text-gray-600">taux de réussite</span>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Quote className="w-5 h-5 text-secondary-500" />
                <span className="font-medium">5</span>
                <span className="text-gray-600">témoignages vérifiés</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Rejoindre la liste d'attente
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
