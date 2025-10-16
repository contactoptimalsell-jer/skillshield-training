import React from 'react'
import { motion } from 'framer-motion'
import { LegalPageHeader } from '../../components/legal/LegalPageHeader'
import { TableOfContents } from '../../components/legal/TableOfContents'
import { BackToTop } from '../../components/legal/BackToTop'

const sections = [
  { id: 'controller', title: '1. Responsable du Traitement' },
  { id: 'data-collected', title: '2. Données Collectées' },
  { id: 'purposes', title: '3. Finalités du Traitement' },
  { id: 'legal-basis', title: '4. Base Légale' },
  { id: 'recipients', title: '5. Destinataires des Données' },
  { id: 'transfers', title: '6. Transferts de Données' },
  { id: 'retention', title: '7. Durée de Conservation' },
  { id: 'rights', title: '8. Vos Droits' },
  { id: 'security', title: '9. Sécurité' },
  { id: 'cookies', title: '10. Cookies' },
  { id: 'modifications', title: '11. Modifications' },
  { id: 'contact', title: '12. Contact' },
  { id: 'complaint', title: '13. Réclamation' }
]

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LegalPageHeader 
        title="Politique de Confidentialité" 
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
                  Chez SkillShield, la protection de vos données personnelles est une priorité. Cette politique explique quelles données nous collectons, pourquoi et comment nous les utilisons.
                </p>
              </div>

              <section id="controller" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable du Traitement</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-900 font-semibold mb-2">SkillShield</p>
                  <p className="text-blue-700">Paris, France</p>
                  <p className="text-blue-700">Email : privacy@skillshield.app</p>
                </div>
              </section>

              <section id="data-collected" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données Collectées</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-3">2.1 Données d'identification</h3>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Nom et prénom</li>
                      <li>• Adresse email</li>
                      <li>• Métier et secteur d'activité</li>
                      <li>• Années d'expérience</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-3">2.2 Données de connexion</h3>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Adresse IP</li>
                      <li>• Type de navigateur</li>
                      <li>• Pages consultées</li>
                      <li>• Durée des visites</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-900 mb-3">2.3 Données de paiement</h3>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Informations bancaires (Stripe)</li>
                      <li>• Historique de facturation</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-900 mb-3">2.4 Données d'utilisation</h3>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Scores de risque IA</li>
                      <li>• Formations suivies</li>
                      <li>• Progression</li>
                      <li>• Interactions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="purposes" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du Traitement</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Nous utilisons vos données pour :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: '🔧', title: 'Fourniture du service', desc: 'Créer et gérer votre compte, calculer votre score IA' },
                    { icon: '🎯', title: 'Personnalisation', desc: 'Recommander des formations et contenus pertinents' },
                    { icon: '📧', title: 'Communication', desc: 'Envoyer des notifications, alertes et newsletters' },
                    { icon: '💳', title: 'Facturation', desc: 'Gérer vos abonnements et paiements' },
                    { icon: '📈', title: 'Amélioration', desc: 'Analyser l\'utilisation pour améliorer la Plateforme' },
                    { icon: '🛡️', title: 'Sécurité', desc: 'Prévenir la fraude et protéger la Plateforme' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="legal-basis" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Légale</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Nous traitons vos données sur la base :</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold text-gray-900">De votre consentement</span>
                        <span className="text-gray-600 ml-2">(newsletter, cookies)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold text-gray-900">De l'exécution du contrat</span>
                        <span className="text-gray-600 ml-2">(fourniture du service)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold text-gray-900">De notre intérêt légitime</span>
                        <span className="text-gray-600 ml-2">(amélioration du service, sécurité)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold text-gray-900">D'obligations légales</span>
                        <span className="text-gray-600 ml-2">(facturation, comptabilité)</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="recipients" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Destinataires des Données</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Vos données peuvent être partagées avec :</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Prestataires techniques</h4>
                    <p className="text-blue-700 text-sm">Hébergement (Vercel), paiements (Stripe), emails (SendGrid)</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Partenaires de formation</h4>
                    <p className="text-green-700 text-sm">Si vous suivez une formation d'un partenaire externe</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Autorités</h4>
                    <p className="text-red-700 text-sm">En cas d'obligation légale</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    🚫 Nous ne vendons jamais vos données à des tiers
                  </p>
                </div>
              </section>

              <section id="transfers" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Transferts de Données</h2>
                <p className="text-gray-600 leading-relaxed">
                  Certains de nos prestataires sont situés hors de l'Union Européenne (notamment aux États-Unis). 
                  Nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, Privacy Shield).
                </p>
              </section>

              <section id="retention" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Durée de Conservation</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { type: 'Données de compte actif', duration: 'Durée de votre abonnement + 3 ans' },
                    { type: 'Données de facturation', duration: '10 ans (obligation légale)' },
                    { type: 'Données de connexion', duration: '12 mois' },
                    { type: 'Cookies', duration: '13 mois maximum' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.type}</h4>
                      <p className="text-gray-600 text-sm">{item.duration}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="rights" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Vos Droits</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                
                <div className="space-y-4">
                  {[
                    { id: 'access', title: 'Droit d\'accès', desc: 'Vous pouvez demander une copie de toutes vos données personnelles.' },
                    { id: 'rectification', title: 'Droit de rectification', desc: 'Vous pouvez corriger vos données inexactes ou incomplètes.' },
                    { id: 'erasure', title: 'Droit à l\'effacement', desc: 'Vous pouvez demander la suppression de vos données dans certains cas.' },
                    { id: 'limitation', title: 'Droit à la limitation', desc: 'Vous pouvez demander de limiter le traitement de vos données.' },
                    { id: 'portability', title: 'Droit à la portabilité', desc: 'Vous pouvez récupérer vos données dans un format structuré.' },
                    { id: 'opposition', title: 'Droit d\'opposition', desc: 'Vous pouvez vous opposer au traitement de vos données pour certaines finalités.' },
                    { id: 'consent', title: 'Droit de retirer votre consentement', desc: 'Pour les traitements basés sur le consentement (newsletter, cookies).' }
                  ].map((right, index) => (
                    <div key={right.id} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{right.title}</h4>
                      <p className="text-gray-600 text-sm">{right.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-900 font-semibold mb-2">Pour exercer vos droits :</p>
                  <p className="text-blue-700">Envoyez un email à <strong>privacy@skillshield.app</strong> avec une preuve d'identité.</p>
                </div>
              </section>

              <section id="security" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sécurité</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Chiffrement SSL/TLS',
                    'Authentification sécurisée',
                    'Sauvegardes régulières',
                    'Accès restreints aux données'
                  ].map((measure, index) => (
                    <div key={index} className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-green-800">{measure}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="cookies" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Consultez notre <a href="/legal/cookies" className="text-cyan-600 hover:text-cyan-700 underline">Politique de Cookies</a> pour plus d'informations.
                </p>
              </section>

              <section id="modifications" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications</h2>
                <p className="text-gray-600 leading-relaxed">
                  Nous pouvons mettre à jour cette politique. Vous serez informé par email de tout changement substantiel.
                </p>
              </section>

              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Pour toute question sur vos données personnelles :</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-2"><strong>Email :</strong> privacy@skillshield.app</p>
                  <p className="text-gray-700"><strong>DPO :</strong> dpo@skillshield.app</p>
                </div>
              </section>

              <section id="complaint" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Réclamation</h2>
                <p className="text-gray-600 leading-relaxed">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" className="text-cyan-600 hover:text-cyan-700 underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
                </p>
              </section>
            </motion.div>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}

