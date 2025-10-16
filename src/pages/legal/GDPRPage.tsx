import React from 'react'
import { motion } from 'framer-motion'
import { LegalPageHeader } from '../../components/legal/LegalPageHeader'
import { TableOfContents } from '../../components/legal/TableOfContents'
import { BackToTop } from '../../components/legal/BackToTop'
import { Shield, Users, Lock, FileText, AlertTriangle, CheckCircle } from 'lucide-react'

const sections = [
  { id: 'commitment', title: '1. Notre Engagement' },
  { id: 'rights', title: '2. Vos Droits RGPD' },
  { id: 'legal-basis', title: '3. Base Légale des Traitements' },
  { id: 'subcontractors', title: '4. Sous-traitants et Transferts' },
  { id: 'retention', title: '5. Durée de Conservation' },
  { id: 'security', title: '6. Sécurité des Données' },
  { id: 'breach', title: '7. Violation de Données' },
  { id: 'dpo', title: '8. Délégué à la Protection des Données' },
  { id: 'minors', title: '9. Mineurs' },
  { id: 'modifications', title: '10. Modifications' },
  { id: 'complaint', title: '11. Réclamation' },
  { id: 'contact', title: '12. Contact' }
]

export const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LegalPageHeader 
        title="Conformité RGPD" 
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
                  SkillShield est pleinement conforme au Règlement Général sur la Protection des Données (RGPD).
                </p>
              </div>

              <section id="commitment" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Notre Engagement</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Nous nous engageons à :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Traiter vos données de manière licite, loyale et transparente',
                    'Ne collecter que les données nécessaires',
                    'Garantir l\'exactitude de vos données',
                    'Limiter la durée de conservation',
                    'Assurer la sécurité de vos données',
                    'Respecter vos droits'
                  ].map((commitment, index) => (
                    <div key={index} className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">{commitment}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="rights" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Vos Droits RGPD</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      id: 'access',
                      title: 'Droit d\'Accès (Art. 15 RGPD)',
                      description: 'Vous pouvez demander une copie de toutes vos données personnelles.',
                      howTo: 'Via votre espace personnel : Paramètres &gt; Mes données &gt; Télécharger mes données ou par email : privacy@skillshield.app',
                      delay: '1 mois'
                    },
                    {
                      id: 'rectification',
                      title: 'Droit de Rectification (Art. 16 RGPD)',
                      description: 'Vous pouvez corriger vos données inexactes.',
                      howTo: 'Via votre profil : Paramètres &gt; Informations personnelles &gt; Modifier ou par email : privacy@skillshield.app',
                      delay: '1 mois'
                    },
                    {
                      id: 'erasure',
                      title: 'Droit à l\'Effacement / "Droit à l\'oubli" (Art. 17 RGPD)',
                      description: 'Vous pouvez demander la suppression de vos données dans les cas suivants :',
                      cases: ['Les données ne sont plus nécessaires', 'Vous retirez votre consentement', 'Vous vous opposez au traitement', 'Les données ont été traitées illicitement'],
                      exception: 'Nous devons conserver certaines données pour obligations légales (facturation : 10 ans).',
                      howTo: 'Via votre compte : Paramètres &gt; Supprimer mon compte ou par email : privacy@skillshield.app'
                    },
                    {
                      id: 'limitation',
                      title: 'Droit à la Limitation du Traitement (Art. 18 RGPD)',
                      description: 'Vous pouvez demander de "geler" le traitement de vos données dans certains cas.'
                    },
                    {
                      id: 'portability',
                      title: 'Droit à la Portabilité (Art. 20 RGPD)',
                      description: 'Vous pouvez récupérer vos données dans un format structuré (JSON, CSV) pour les transférer à un autre service.',
                      howTo: 'Via votre compte : Paramètres &gt; Exporter mes données (JSON/CSV)'
                    },
                    {
                      id: 'opposition',
                      title: 'Droit d\'Opposition (Art. 21 RGPD)',
                      description: 'Vous pouvez vous opposer au traitement de vos données, notamment pour :',
                      cases: ['Marketing direct', 'Profilage', 'Intérêts légitimes'],
                      howTo: 'Newsletter : Cliquer sur "Se désinscrire" dans chaque email | Profilage : Paramètres &gt; Confidentialité &gt; Désactiver la personnalisation'
                    },
                    {
                      id: 'consent',
                      title: 'Droit de Retirer votre Consentement (Art. 7 RGPD)',
                      description: 'Pour les traitements basés sur le consentement (cookies, newsletter), vous pouvez le retirer à tout moment.'
                    },
                    {
                      id: 'automated',
                      title: 'Droit de ne pas faire l\'objet d\'une Décision Automatisée (Art. 22 RGPD)',
                      description: 'Notre calcul de score de risque IA est transparent et explicable. Vous pouvez demander une révision humaine.'
                    }
                  ].map((right, index) => (
                    <div key={right.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{right.title}</h3>
                      <p className="text-gray-600 mb-4">{right.description}</p>
                      
                      {right.cases && (
                        <div className="mb-4">
                          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                            {right.cases.map((caseItem, caseIndex) => (
                              <li key={caseIndex}>{caseItem}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {right.exception && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                          <p className="text-amber-800 text-sm">
                            <strong>Exception :</strong> {right.exception}
                          </p>
                        </div>
                      )}
                      
                      {right.howTo && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-2">
                          <p className="text-blue-800 text-sm">
                            <strong>Comment l'exercer :</strong> {right.howTo}
                          </p>
                        </div>
                      )}
                      
                      {right.delay && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <p className="text-green-800 text-sm">
                            <strong>Délai de réponse :</strong> {right.delay}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section id="legal-basis" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Base Légale des Traitements</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Traitement</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Base légale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { treatment: 'Création de compte', basis: 'Exécution du contrat' },
                        { treatment: 'Calcul du score IA', basis: 'Exécution du contrat' },
                        { treatment: 'Formations', basis: 'Exécution du contrat' },
                        { treatment: 'Facturation', basis: 'Obligation légale' },
                        { treatment: 'Newsletter', basis: 'Consentement' },
                        { treatment: 'Cookies analytiques', basis: 'Consentement' },
                        { treatment: 'Amélioration du service', basis: 'Intérêt légitime' },
                        { treatment: 'Sécurité', basis: 'Intérêt légitime' }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.treatment}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="subcontractors" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sous-traitants et Transferts</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Nous travaillons avec des sous-traitants conformes RGPD :</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Sous-traitant</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Fonction</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Localisation</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Garanties</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Vercel', function: 'Hébergement', location: 'USA', guarantees: 'Clauses types' },
                        { name: 'Stripe', function: 'Paiements', location: 'USA/EU', guarantees: 'PCI-DSS, Clauses types' },
                        { name: 'SendGrid', function: 'Emails', location: 'USA', guarantees: 'Clauses types' },
                        { name: 'Google Analytics', function: 'Statistiques', location: 'USA', guarantees: 'Anonymisation IP' }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">{row.name}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.function}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.location}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.guarantees}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="retention" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Durée de Conservation</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { data: 'Compte actif', duration: 'Durée de l\'abonnement + 3 ans' },
                    { data: 'Compte inactif', duration: '3 ans puis suppression' },
                    { data: 'Facturation', duration: '10 ans (obligation légale)' },
                    { data: 'Logs de connexion', duration: '12 mois' },
                    { data: 'Cookies', duration: '13 mois maximum' },
                    { data: 'Liste d\'attente (non-clients)', duration: '3 ans ou jusqu\'au retrait du consentement' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.data}</h4>
                      <p className="text-gray-600 text-sm">{item.duration}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="security" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sécurité des Données</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Nous mettons en œuvre des mesures techniques et organisationnelles :</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-blue-600" />
                      Techniques
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Chiffrement SSL/TLS (HTTPS)',
                        'Chiffrement des données sensibles en base',
                        'Pare-feu et protection DDoS',
                        'Sauvegardes quotidiennes chiffrées',
                        'Authentification forte (2FA disponible)'
                      ].map((measure, index) => (
                        <div key={index} className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">{measure}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      Organisationnelles
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Accès aux données limité et tracé',
                        'Formation du personnel à la sécurité',
                        'Procédures de gestion des incidents',
                        'Audits de sécurité réguliers'
                      ].map((measure, index) => (
                        <div key={index} className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-green-800 text-sm">{measure}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section id="breach" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Violation de Données</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900 mb-3">En cas de violation de données personnelles :</h3>
                      <ul className="text-red-700 space-y-2">
                        <li>• Nous notifions la CNIL sous 72h</li>
                        <li>• Nous vous informons si le risque est élevé</li>
                        <li>• Nous prenons des mesures correctives immédiates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="dpo" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Délégué à la Protection des Données (DPO)</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Nous avons désigné un DPO :</h3>
                      <p className="text-blue-700 mb-2"><strong>Email :</strong> dpo@skillshield.app</p>
                      <p className="text-blue-700"><strong>Mission :</strong> Veiller au respect du RGPD et être votre interlocuteur</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="minors" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Mineurs</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800">
                    SkillShield est réservé aux personnes de 18 ans et plus. Nous ne collectons pas sciemment de données de mineurs.
                  </p>
                </div>
              </section>

              <section id="modifications" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications</h2>
                <p className="text-gray-600 leading-relaxed">
                  Toute modification substantielle de nos pratiques sera communiquée par email et nécessitera votre consentement si applicable.
                </p>
              </section>

              <section id="complaint" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Réclamation</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si vous estimez que vos droits RGPD ne sont pas respectés :
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">1. Contactez-nous d'abord :</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Email : privacy@skillshield.app</li>
                      <li>• DPO : dpo@skillshield.app</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">2. Réclamation auprès de l'autorité :</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• <strong>France :</strong> CNIL - www.cnil.fr</li>
                      <li>• <strong>Europe :</strong> Autorité de protection de votre pays</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Pour toute question RGPD :</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="text-gray-700 space-y-1">
                    <li><strong>Email général :</strong> privacy@skillshield.app</li>
                    <li><strong>DPO :</strong> dpo@skillshield.app</li>
                    <li><strong>Courrier :</strong> SkillShield, Paris, France</li>
                  </ul>
                </div>
              </section>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Informations du document</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Dernière révision :</strong> 11 octobre 2025<br />
                  <strong>Version :</strong> 1.0
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}
