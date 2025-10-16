import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Mail, Linkedin, Heart, Check } from 'lucide-react'
import { Button } from './ui/Button'
import { useApp } from '../context/AppContext'
import { Link } from 'react-router-dom'

const footerLinks = {
  product: [
    { name: 'Calculateur de risque', href: '#calculator' },
    { name: 'Nos offres', href: '#pricing' },
    { name: 'Comment ça marche', href: '#features' },
    { name: 'Témoignages', href: '#testimonials' }
  ],
  company: [
    { name: 'À propos', href: '#about' },
    { name: 'Notre équipe', href: '#team' },
    { name: 'Carrières', href: '#careers' },
    { name: 'Presse', href: '#press' }
  ],
  support: [
    { name: 'FAQ', href: '#faq' },
    { name: 'Centre d\'aide', href: '#help' },
    { name: 'Contact', href: '#contact' },
    { name: 'Statut', href: '#status' }
  ],
  legal: [
    { name: 'CGU', href: '/legal/terms' },
    { name: 'Confidentialité', href: '/legal/privacy' },
    { name: 'Cookies', href: '/legal/cookies' },
    { name: 'RGPD', href: '/legal/gdpr' }
  ]
}

export const Footer: React.FC = () => {
  const { showNotification } = useApp()

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      showNotification('Redirection vers ' + href, 'info')
    }
  }

  return (
    <footer className="bg-slate-900 text-white mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-secondary rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SkillShield</span>
              </div>
              
              <p className="text-primary-200 mb-6 max-w-sm">
                L'assurance-vie de votre carrière à l'ère de l'IA. 
                Protégez votre avenir professionnel contre l'obsolescence des compétences.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-secondary-500 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([section, links], index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 capitalize">
                {section === 'product' ? 'Produit' :
                 section === 'company' ? 'Entreprise' :
                 section === 'support' ? 'Support' : 'Légal'}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-primary-200 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-primary-200 hover:text-white transition-colors duration-200 text-sm text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary-200 text-sm"
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for workers facing AI disruption</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-sm text-primary-200"
            >
              <span>© 2024 SkillShield. Tous droits réservés.</span>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-accent-500" />
                <span>Certifié RGPD</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 text-xs text-primary-300"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent-500" />
              <span>Sécurité bancaire</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent-500" />
              <span>RGPD conforme</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent-500" />
              <span>Support 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>100% français</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
