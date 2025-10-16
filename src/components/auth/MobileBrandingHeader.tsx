import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Users, Award, Star } from 'lucide-react'

interface MobileBrandingHeaderProps {
  testimonials: Array<{
    text: string
    author: string
    role: string
    rating: number
  }>
  currentTestimonial: number
}

export const MobileBrandingHeader: React.FC<MobileBrandingHeaderProps> = ({
  testimonials,
  currentTestimonial
}) => {
  const socialProof = [
    {
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      number: "10+",
      text: "professionnels protégés"
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      number: "92%",
      text: "réduction risques IA"
    },
    {
      icon: <Award className="w-5 h-5 text-yellow-400" />,
      number: "15 000+",
      text: "heures formation"
    }
  ]

  return (
    <div className="lg:hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 text-white py-8 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        {/* Logo */}
        <motion.div 
          className="text-center mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 3, -3, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-2xl font-bold">SkillShield</h1>
        </motion.div>

        {/* Tagline */}
        <motion.h2 
          className="text-2xl font-bold text-center mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Votre carrière mérite
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            une assurance face à l'IA
          </span>
        </motion.h2>

        {/* Social Proof - Horizontal Scroll */}
        <motion.div 
          className="flex space-x-4 mb-6 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {socialProof.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20 flex-shrink-0 min-w-[140px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-2 mb-1">
                {item.icon}
                <span className="text-lg font-bold">{item.number}</span>
              </div>
              <div className="text-xs text-slate-300">{item.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-white italic text-sm mb-3">
            "{testimonials[currentTestimonial].text}"
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1">
              <div className="text-white font-medium text-sm">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-slate-300 text-xs">
                {testimonials[currentTestimonial].role}
              </div>
            </div>
            <div className="flex space-x-1">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
