import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Clock, Star, Award, Users } from 'lucide-react'
import { useDashboard } from '../../context/DashboardContext'
import { useProgression } from '../../hooks/useProgression'
import { formationContentMap, FormationContent } from '../../data/formationContent'
import { Widget, Badge } from './Widget'

export const FormationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { formations, updateFormationProgress } = useDashboard()
  const { addCompletedStep } = useProgression()
  
  const formation = formations.find(f => f.id === id)
  const content = id ? formationContentMap[id] : null
  
  // Marquer first_formation_started quand on accède à une formation pour la première fois
  useEffect(() => {
    if (formation && formation.status === 'not_started') {
      updateFormationProgress(formation.id, 0) // Commence la formation
      
      // Marquer l'étape de progression (une seule fois)
      addCompletedStep('first_formation_started').catch(error => {
        console.warn('Could not update progression:', error)
      })
    }
  }, [formation?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!formation) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600">Formation introuvable</p>
        <button
          onClick={() => navigate('/dashboard/formations')}
          className="mt-4 text-cyan-600 hover:text-cyan-700"
        >
          Retour aux formations
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/dashboard/formations')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </button>
      </div>

      {/* Formation Header Card */}
      <Widget className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{formation.title}</h1>
                {formation.isIncluded && (
                  <Badge variant="success" size="sm" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                    Inclus dans votre plan
                  </Badge>
                )}
              </div>
            </div>
            
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">{formation.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>{formation.duration}h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>{formation.rating}/5</span>
              </div>
              {formation.reviews > 0 && (
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>{formation.reviews} avis</span>
                </div>
              )}
              {formation.certification && (
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>Certifiante</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Skills */}
        {formation.skills.length > 0 && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {formation.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </Widget>

      {/* Content */}
      {content && (
        <div className="space-y-8">
          {/* Introduction */}
          {content.introduction && (
            <Widget>
              <div className="prose prose-slate max-w-none">
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {content.introduction.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < content.introduction!.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </Widget>
          )}

          {/* Parts */}
          {content.parts.map((part, partIndex) => (
            <motion.div
              key={partIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: partIndex * 0.1 }}
            >
              <Widget>
                <h2 className="text-2xl font-bold text-primary-900 mb-6 pb-4 border-b border-gray-200">
                  {part.title}
                </h2>
                
                <div className="space-y-8">
                  {part.sections.map((section, sectionIndex) => (
                    <motion.div
                      key={sectionIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: partIndex * 0.1 + sectionIndex * 0.05 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-semibold text-primary-900 flex items-start">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {section.title}
                      </h3>
                      
                      <div className="pl-5 space-y-3">
                        {section.content.map((paragraph, pIndex) => {
                          // Check if paragraph starts with bullet points
                          if (paragraph.trim().startsWith('•')) {
                            return (
                              <div key={pIndex} className="flex items-start space-x-2">
                                <span className="text-cyan-600 mt-1">•</span>
                                <span className="text-gray-700 flex-1">{paragraph.substring(1).trim()}</span>
                              </div>
                            )
                          }
                          // Check if paragraph starts with arrow
                          if (paragraph.trim().startsWith('👉')) {
                            return (
                              <div key={pIndex} className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg my-3">
                                <p className="text-gray-800 font-medium">{paragraph}</p>
                              </div>
                            )
                          }
                          // Regular paragraph
                          if (paragraph.trim()) {
                            return (
                              <p key={pIndex} className="text-gray-700 leading-relaxed">
                                {paragraph}
                              </p>
                            )
                          }
                          // Empty line
                          return <br key={pIndex} />
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Widget>
            </motion.div>
          ))}

          {/* Conclusion */}
          {content.conclusion && (
            <Widget className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-primary-900 mb-4">Conclusion</h2>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {content.conclusion.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < content.conclusion!.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </Widget>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <Widget>
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/dashboard/formations')}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Retour au catalogue
          </button>
          <button
            onClick={() => {
              // TODO: Start formation logic
              navigate('/dashboard/formations')
            }}
            className="px-6 py-3 bg-gradient-secondary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Commencer la formation
          </button>
        </div>
      </Widget>
    </div>
  )
}
