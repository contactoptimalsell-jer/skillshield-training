import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  MessageSquare, 
  Search, 
  Lock, 
  ArrowRight,
  Heart,
  Eye,
  TrendingUp,
  Clock,
  UserPlus,
  BookOpen,
  HelpCircle
} from 'lucide-react'
import { SentinelleWidget } from './Widget'
import { UpgradeBanner, PlanBadge } from './UpgradeBanner'
import { Button } from '../ui/Button'
import { 
  mockSentinelleUser,
  mockCommunityDiscussions,
  communityStats
} from '../../data/sentinelleMockData'

export const SentinelleCommunityPage: React.FC = () => {
  const user = mockSentinelleUser
  const discussions = mockCommunityDiscussions
  const stats = communityStats
  const [searchQuery, setSearchQuery] = useState('')

  const handleUpgrade = () => {
    window.location.href = '/sentinelle/plans'
  }

  const filteredDiscussions = discussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    discussion.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold">Communauté SkillShield</h1>
              <PlanBadge plan="Sentinelle" isCurrent={true} />
            </div>
            <p className="text-primary-100">
              Échangez avec {stats.activeMembers.toLocaleString()}+ professionnels qui se préparent à l'ère IA
            </p>
          </div>
        </div>
      </div>

      {/* Read-Only Mode Banner */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
            <Eye className="w-4 h-4 text-yellow-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-yellow-900">
              👁️ MODE LECTURE SEULE
            </h3>
            <p className="text-sm text-yellow-800">
              Vous êtes en plan Sentinelle et pouvez lire toutes les discussions.
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleUpgrade}
          >
            Débloquer la participation
          </Button>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {stats.activeMembers.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Membres actifs</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {stats.discussions.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Discussions</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {stats.repliesThisWeek.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Réponses cette semaine</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {stats.successRate}%
          </div>
          <div className="text-sm text-gray-600">Taux de réussite</div>
        </div>
      </div>

      {/* Search Bar */}
      <SentinelleWidget
        title="Rechercher dans la communauté"
        icon={<Search className="w-5 h-5 text-white" />}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher des discussions, membres, sujets..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {filteredDiscussions.length} résultat(s) trouvé(s)
        </p>
      </SentinelleWidget>

      {/* Popular Discussions */}
      <SentinelleWidget
        title="💬 Discussions Populaires"
        icon={<MessageSquare className="w-5 h-5 text-white" />}
      >
        <div className="space-y-4">
          {filteredDiscussions.map((discussion, index) => (
            <motion.div
              key={discussion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-medium">
                  {discussion.authorAvatar}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {index === 0 && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                        🔥 Populaire
                      </span>
                    )}
                    {index === 1 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        💡 Conseil
                      </span>
                    )}
                    {index === 2 && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        📚 Ressource
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {discussion.title}
                  </h3>
                  
                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                    {discussion.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Par @{discussion.author}</span>
                      <span>{discussion.replies} réponses</span>
                      <span>{discussion.views} vues</span>
                      <span>{discussion.lastActivity}</span>
                    </div>
                    
                    {discussion.isLocked ? (
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Lock className="w-3 h-3" />
                        <span>Répondre (Bouclier requis)</span>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="opacity-50 cursor-not-allowed"
                      >
                        Lire la suite
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.location.href = '/sentinelle/plans'}
            className="w-full group"
          >
            Débloquer la participation active
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </SentinelleWidget>

      {/* Community Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shared Resources */}
        <SentinelleWidget
          title="📚 Ressources Partagées"
          icon={<BookOpen className="w-5 h-5 text-white" />}
        >
          <div className="space-y-4">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">
                Ressources de la communauté
              </h3>
              <p className="text-gray-600 mb-4">
                Articles, vidéos, guides partagés par les membres
              </p>
            </div>

            {/* Mock Resources */}
            <div className="space-y-3">
              {[
                {
                  title: "Guide complet : Les 10 compétences IA-proof pour 2025",
                  author: "expert_carriere",
                  type: "PDF",
                  downloads: 1234
                },
                {
                  title: "Vidéo : Comment j'ai pivoté de comptable à data analyst",
                  author: "sarah_analyst",
                  type: "Vidéo",
                  downloads: 856
                },
                {
                  title: "Template : Plan de reconversion personnalisé",
                  author: "coach_pro",
                  type: "Template",
                  downloads: 2341
                }
              ].map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm mb-1">
                        {resource.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <span>Par @{resource.author}</span>
                        <span>•</span>
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.downloads} téléchargements</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center space-x-2 text-xs text-gray-500">
                    <Lock className="w-3 h-3" />
                    <span>Partager des ressources : Plan Bouclier requis</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="font-medium text-gray-700">
                  Partagez vos ressources avec Bouclier
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Contribuez à la communauté en partageant vos guides, templates et conseils.
              </p>
            </div>
          </div>
        </SentinelleWidget>

        {/* Help & Support */}
        <SentinelleWidget
          title="🤝 Entraide"
          icon={<HelpCircle className="w-5 h-5 text-white" />}
        >
          <div className="space-y-4">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">
                Section questions/réponses
              </h3>
              <p className="text-gray-600 mb-4">
                Posez vos questions et aidez les autres membres
              </p>
            </div>

            {/* Mock Q&A */}
            <div className="space-y-3">
              {[
                {
                  question: "Comment calculer mon score de risque IA ?",
                  answers: 12,
                  author: "marie_dev",
                  time: "il y a 2h"
                },
                {
                  question: "Quelles formations suivre pour devenir UX Designer ?",
                  answers: 8,
                  author: "thomas_ux",
                  time: "il y a 5h"
                },
                {
                  question: "L'IA va-t-elle vraiment remplacer les développeurs ?",
                  answers: 23,
                  author: "dev_experience",
                  time: "il y a 1 jour"
                }
              ].map((qa, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm font-medium">?</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm mb-1">
                        {qa.question}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <span>{qa.answers} réponses</span>
                        <span>•</span>
                        <span>Par @{qa.author}</span>
                        <span>•</span>
                        <span>{qa.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center space-x-2 text-xs text-gray-500">
                    <Lock className="w-3 h-3" />
                    <span>Posez vos questions avec le plan Bouclier</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="font-medium text-gray-700">
                  Participation active requise
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Sentinelle peut lire mais pas poster. Passez à Bouclier pour participer activement.
              </p>
            </div>
          </div>
        </SentinelleWidget>
      </div>

      {/* Upgrade Banner */}
      <UpgradeBanner
        variant="card"
        title="Pour participer activement :"
        description="Rejoignez la communauté active et contribuez aux discussions pour sécuriser votre avenir professionnel."
        benefits={[
          'Poster des questions et discussions',
          'Répondre et aider les autres',
          'Partager des ressources',
          'Messages privés avec autres membres'
        ]}
        ctaText="Passez au plan Bouclier (49€/mois)"
        onUpgrade={handleUpgrade}
      />

      {/* Success Stories */}
      <SentinelleWidget
        title="🎉 Histoires de Réussite"
        icon={<TrendingUp className="w-5 h-5 text-white" />}
      >
        <div className="space-y-4">
          <p className="text-gray-600 text-center mb-6">
            <span className="font-bold text-green-600">{stats.successRate}%</span> de réussite de reconversion parmi nos membres Bouclier et Forteresse
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Marie",
                role: "ex-comptable devenue UX Designer",
                avatar: "M",
                story: "Score IA de 82% → 23% en 8 mois",
                plan: "Bouclier"
              },
              {
                name: "Thomas",
                role: "ex-graphiste devenu Data Analyst",
                avatar: "T",
                story: "+40% de salaire en 6 mois",
                plan: "Forteresse"
              }
            ].map((member, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{member.name}</h4>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {member.plan}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                    <p className="text-sm font-medium text-green-600">{member.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleUpgrade}
              className="group"
            >
              Rejoindre les gagnants de l'ère IA
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </SentinelleWidget>
    </div>
  )
}

