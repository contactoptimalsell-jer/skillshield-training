import React from 'react'
import { motion } from 'framer-motion'
import { LegalPageHeader } from '../../components/legal/LegalPageHeader'
import { TableOfContents } from '../../components/legal/TableOfContents'
import { BackToTop } from '../../components/legal/BackToTop'

const sections = [
  { id: 'object', title: '1. Objet' },
  { id: 'description', title: '2. Description du Service' },
  { id: 'subscription', title: '3. Inscription et Compte Utilisateur' },
  { id: 'payment', title: '4. Abonnements et Paiements' },
  { id: 'intellectual', title: '5. Propriété Intellectuelle' },
  { id: 'privacy', title: '6. Données Personnelles' },
  { id: 'responsibilities', title: '7. Responsabilités' },
  { id: 'limitation', title: '8. Limitation de Responsabilité' },
  { id: 'modifications', title: '9. Modifications des CGU' },
  { id: 'law', title: '10. Droit Applicable et Juridiction' },
  { id: 'contact', title: '11. Contact' }
]

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LegalPageHeader 
        title="Conditions Générales d'Utilisation" 
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
              <section id="object" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Objet</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme SkillShield (ci-après "la Plateforme"), éditée par SkillShield (ci-après "SkillShield", "nous", "notre").
                </p>
                <p className="text-gray-600 leading-relaxed">
                  En accédant à la Plateforme, vous acceptez sans réserve les présentes CGU.
                </p>
              </section>

              <section id="description" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description du Service</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  SkillShield est une plateforme SaaS destinée aux professionnels souhaitant :
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Évaluer leur risque d'obsolescence face à l'IA</li>
                  <li>Accéder à des formations et reconversions professionnelles</li>
                  <li>Bénéficier d'un accompagnement personnalisé</li>
                  <li>Recevoir une veille sectorielle et technologique</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Offres disponibles</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Bouclier</h4>
                    <p className="text-blue-700 text-sm">Abonnement à 19€/mois pour maîtriser les compétences de demain</p>
                  </div>
                  <div className="bg-cyan-50 border-2 border-cyan-300 rounded-lg p-4 relative">
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      RECOMMANDÉ
                    </div>
                    <h4 className="font-semibold text-cyan-900 mb-2">Protection Complète</h4>
                    <p className="text-cyan-700 text-sm">Abonnement à 49€/mois pour anticiper et transformer votre carrière</p>
                  </div>
                </div>
              </section>

              <section id="subscription" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Inscription et Compte Utilisateur</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Conditions d'inscription</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Pour utiliser la Plateforme, vous devez :</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Avoir au moins 18 ans</li>
                  <li>Fournir des informations exactes et à jour</li>
                  <li>Créer un identifiant et un mot de passe sécurisé</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Sécurité du compte</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vous êtes responsable de la confidentialité de vos identifiants. Toute utilisation de votre compte est présumée être effectuée par vous.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Suspension ou suppression</h3>
                <p className="text-gray-600 leading-relaxed mb-4">SkillShield se réserve le droit de suspendre ou supprimer tout compte en cas de :</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Violation des présentes CGU</li>
                  <li>Utilisation frauduleuse de la Plateforme</li>
                  <li>Non-paiement des abonnements</li>
                </ul>
              </section>

              <section id="payment" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Abonnements et Paiements</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Modalités de paiement</h3>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Les abonnements sont mensuels et renouvelés automatiquement</li>
                  <li>Le paiement s'effectue par carte bancaire via notre prestataire sécurisé (Stripe)</li>
                  <li>La facturation intervient à la date anniversaire de souscription</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Résiliation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vous pouvez résilier votre abonnement à tout moment depuis votre espace personnel. La résiliation prend effet à la fin de la période en cours, sans remboursement au prorata.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Modification des tarifs</h3>
                <p className="text-gray-600 leading-relaxed">
                  SkillShield se réserve le droit de modifier ses tarifs avec un préavis de 30 jours. Les utilisateurs existants bénéficient de leurs conditions tarifaires pendant 12 mois.
                </p>
              </section>

              <section id="intellectual" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propriété Intellectuelle</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tous les contenus présents sur la Plateforme (textes, images, logos, vidéos, formations) sont protégés par les droits de propriété intellectuelle et appartiennent à SkillShield ou à ses partenaires.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Toute reproduction, représentation, modification ou exploitation non autorisée est strictement interdite.
                </p>
              </section>

              <section id="privacy" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Données Personnelles</h2>
                <p className="text-gray-600 leading-relaxed">
                  L'utilisation de vos données personnelles est régie par notre <a href="/legal/privacy" className="text-cyan-600 hover:text-cyan-700 underline">Politique de Confidentialité</a> et notre <a href="/legal/gdpr" className="text-cyan-600 hover:text-cyan-700 underline">Politique RGPD</a>.
                </p>
              </section>

              <section id="responsibilities" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Responsabilités</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Responsabilité de SkillShield</h3>
                <p className="text-gray-600 leading-relaxed mb-4">SkillShield s'engage à fournir un service de qualité mais ne garantit pas :</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>L'absence d'interruptions ou d'erreurs</li>
                  <li>La réussite de votre reconversion professionnelle</li>
                  <li>L'exactitude absolue des analyses et prédictions IA</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Responsabilité de l'Utilisateur</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Vous vous engagez à :</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Utiliser la Plateforme de manière licite</li>
                  <li>Ne pas perturber le fonctionnement de la Plateforme</li>
                  <li>Ne pas diffuser de contenu illégal ou offensant</li>
                </ul>
              </section>

              <section id="limitation" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation de Responsabilité</h2>
                <p className="text-gray-600 leading-relaxed">
                  SkillShield ne pourra être tenue responsable des dommages indirects (perte de données, manque à gagner, préjudice commercial) résultant de l'utilisation ou de l'impossibilité d'utiliser la Plateforme.
                </p>
              </section>

              <section id="modifications" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications des CGU</h2>
                <p className="text-gray-600 leading-relaxed">
                  SkillShield se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés par email de toute modification substantielle.
                </p>
              </section>

              <section id="law" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Droit Applicable et Juridiction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux de Paris seront seuls compétents.
                </p>
              </section>

              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Pour toute question concernant les CGU :</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-2"><strong>Email :</strong> general@skillshield-ai.com</p>
                  <p className="text-gray-700"><strong>Adresse :</strong> SkillShield, Juilly, France</p>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  )
}

