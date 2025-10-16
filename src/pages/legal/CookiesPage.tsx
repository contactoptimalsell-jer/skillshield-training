import React from 'react'
import { motion } from 'framer-motion'
import { LegalPageHeader } from '../../components/legal/LegalPageHeader'
import { TableOfContents } from '../../components/legal/TableOfContents'
import { BackToTop } from '../../components/legal/BackToTop'
import { Cookie, Shield, BarChart3, Target, Settings, X } from 'lucide-react'

const sections = [
  { id: 'what-is-cookie', title: '1. Qu\'est-ce qu\'un Cookie ?' },
  { id: 'types', title: '2. Types de Cookies Utilisés' },
  { id: 'management', title: '3. Gestion des Cookies' },
  { id: 'third-party', title: '4. Cookies Tiers' },
  { id: 'consequences', title: '5. Conséquences du Refus' },
  { id: 'retention', title: '6. Durée de Conservation' },
  { id: 'contact', title: '7. Contact' }
]

export const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LegalPageHeader 
        title="Politique de Cookies" 
        lastUpdated="11 octobre 2025" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table des matières - Desktop */}
          <div className="hidden lg:block">
            <TableOfContents sections={sections} />
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12"
            >
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  SkillShield utilise des cookies pour améliorer votre expérience sur la Plateforme.
                </p>
              </div>

              <section id="what-is-cookie" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Qu'est-ce qu'un Cookie ?</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Cookie className="w-8 h-8 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-600 leading-relaxed">
                        Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. 
                        Il permet de mémoriser des informations sur votre visite.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="types" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types de Cookies Utilisés</h2>
                
                {/* Cookies Essentiels */}
                <div className="mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Shield className="w-8 h-8 text-green-600 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-green-900 mb-2">
                          2.1 Cookies Essentiels (obligatoires)
                        </h3>
                        <p className="text-green-700 mb-4">
                          Ces cookies sont nécessaires au fonctionnement de la Plateforme :
                        </p>
                        <ul className="text-green-700 space-y-2 mb-4">
                          <li>• <strong>Session utilisateur</strong> : Maintenir votre connexion</li>
                          <li>• <strong>Sécurité</strong> : Protection contre les attaques CSRF</li>
                          <li>• <strong>Préférences</strong> : Langue, thème (clair/sombre)</li>
                        </ul>
                        <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                          <p className="text-green-800 text-sm">
                            <strong>Durée :</strong> Session ou 1 mois maximum<br />
                            <strong>Base légale :</strong> Intérêt légitime (fonctionnement du service)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies Analytiques */}
                <div className="mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <BarChart3 className="w-8 h-8 text-blue-600 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">
                          2.2 Cookies Analytiques (avec consentement)
                        </h3>
                        <p className="text-blue-700 mb-4">
                          Nous utilisons Google Analytics pour comprendre comment vous utilisez la Plateforme :
                        </p>
                        <ul className="text-blue-700 space-y-2 mb-4">
                          <li>• Pages visitées</li>
                          <li>• Temps passé sur le site</li>
                          <li>• Source de trafic (Google, réseaux sociaux, etc.)</li>
                          <li>• Comportement de navigation</li>
                        </ul>
                        <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
                          <p className="text-blue-800 text-sm">
                            <strong>Durée :</strong> 13 mois<br />
                            <strong>Base légale :</strong> Consentement<br />
                            <strong>Comment refuser :</strong> Paramètres des cookies ci-dessous
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies Marketing */}
                <div className="mb-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Target className="w-8 h-8 text-purple-600 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-purple-900 mb-2">
                          2.3 Cookies Marketing (avec consentement)
                        </h3>
                        <p className="text-purple-700 mb-4">
                          Si vous acceptez, nous utilisons des cookies pour :
                        </p>
                        <ul className="text-purple-700 space-y-2 mb-4">
                          <li>• Afficher des publicités pertinentes</li>
                          <li>• Mesurer l'efficacité de nos campagnes</li>
                          <li>• Retargeting (vous montrer nos annonces sur d'autres sites)</li>
                        </ul>
                        <div className="bg-purple-100 border border-purple-300 rounded-lg p-3">
                          <p className="text-purple-800 text-sm">
                            <strong>Prestataires :</strong> Google Ads, Facebook Pixel, LinkedIn Insight<br />
                            <strong>Durée :</strong> 13 mois<br />
                            <strong>Base légale :</strong> Consentement
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="management" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Gestion des Cookies</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Via notre bandeau */}
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="w-6 h-6 text-cyan-600" />
                      <h4 className="font-semibold text-cyan-900">3.1 Via notre bandeau</h4>
                    </div>
                    <p className="text-cyan-700 text-sm mb-3">
                      Lors de votre première visite, un bandeau vous permet de :
                    </p>
                    <ul className="text-cyan-700 text-sm space-y-1">
                      <li>• ✅ Tout accepter</li>
                      <li>• ❌ Tout refuser (sauf essentiels)</li>
                      <li>• ⚙️ Personnaliser vos choix</li>
                    </ul>
                  </div>

                  {/* Via votre navigateur */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <X className="w-6 h-6 text-orange-600" />
                      <h4 className="font-semibold text-orange-900">3.2 Via votre navigateur</h4>
                    </div>
                    <p className="text-orange-700 text-sm mb-3">
                      Vous pouvez également gérer les cookies directement :
                    </p>
                      <ul className="text-orange-700 text-sm space-y-1">
                        <li>• <strong>Chrome :</strong> Paramètres &gt; Confidentialité</li>
                        <li>• <strong>Firefox :</strong> Préférences &gt; Vie privée</li>
                        <li>• <strong>Safari :</strong> Préférences &gt; Confidentialité</li>
                      </ul>
                  </div>

                  {/* Modifier vos choix */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="w-6 h-6 text-green-600" />
                      <h4 className="font-semibold text-green-900">3.3 Modifier vos choix</h4>
                    </div>
                    <p className="text-green-700 text-sm">
                      Vous pouvez modifier vos préférences à tout moment en cliquant sur 
                      "Gérer les cookies" en bas de page.
                    </p>
                  </div>
                </div>
              </section>

              <section id="third-party" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies Tiers</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Certains cookies sont déposés par des services tiers :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'Stripe', purpose: 'Traitement des paiements sécurisés' },
                    { name: 'Google Analytics', purpose: 'Statistiques de visite' },
                    { name: 'Google Fonts', purpose: 'Polices de caractères' },
                    { name: 'Vercel', purpose: 'Hébergement et performance' }
                  ].map((service, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                      <p className="text-gray-600 text-sm">{service.purpose}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800">
                    Nous nous assurons que ces tiers respectent le RGPD.
                  </p>
                </div>
              </section>

              <section id="consequences" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conséquences du Refus</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si vous refusez les cookies non essentiels :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Ce qui fonctionne</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• La Plateforme fonctionnera normalement</li>
                      <li>• Toutes les fonctionnalités de base</li>
                      <li>• Navigation et utilisation complète</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">❌ Ce qui ne fonctionne pas</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Personnalisation de l'expérience</li>
                      <li>• Mesure de l'audience</li>
                      <li>• Publicités moins pertinentes</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="retention" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de Conservation</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Cookie className="w-6 h-6 text-amber-600" />
                    <h3 className="font-semibold text-amber-900">Durée maximale : 13 mois</h3>
                  </div>
                  <p className="text-amber-700">
                    Les cookies sont conservés pour une durée maximale de <strong>13 mois</strong> 
                    conformément aux recommandations de la CNIL.
                  </p>
                </div>
              </section>

              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Pour toute question sur les cookies :</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Email :</strong> privacy@skillshield.app
                  </p>
                </div>
              </section>

              {/* Bouton pour gérer les cookies */}
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Gérer vos préférences de cookies
                </h3>
                <p className="text-gray-600 mb-4">
                  Vous pouvez modifier vos choix de cookies à tout moment
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-medium">
                  Gérer les cookies
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
