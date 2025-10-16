import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  TrendingUp, 
  TrendingDown, 
  Star, 
  Plus, 
  X, 
  Target,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react'
import { Widget, Badge } from './Widget'
import { useDashboard } from '../../context/DashboardContext'

interface SkillCategory {
  name: string
  skills: string[]
  trend: 'up' | 'down' | 'stable'
  demand: 'high' | 'medium' | 'low'
  recommendation: string
}

export const SkillsWidget: React.FC = () => {
  const { user, updateUser, addNotification } = useDashboard()
  const [isEditing, setIsEditing] = useState(false)

  // Catégoriser les compétences de l'utilisateur
  const categorizeSkills = (skills: string[]): SkillCategory[] => {
    const categories: { [key: string]: SkillCategory } = {}

    skills.forEach(skill => {
      let category = 'Autres'
      
      if (['React', 'Vue.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass', 'Tailwind CSS'].includes(skill)) {
        category = 'Frontend'
      } else if (['Node.js', 'Python', 'Java', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'Scala'].includes(skill)) {
        category = 'Backend'
      } else if (['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'Jenkins', 'GitLab CI'].includes(skill)) {
        category = 'DevOps & Cloud'
      } else if (['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'].includes(skill)) {
        category = 'Database'
      } else if (['Machine Learning', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'R', 'Data Science'].includes(skill)) {
        category = 'AI & Data'
      }

      if (!categories[category]) {
        categories[category] = {
          name: category,
          skills: [],
          trend: 'stable',
          demand: 'medium',
          recommendation: ''
        }
      }
      categories[category].skills.push(skill)
    })

    // Ajouter des recommandations et tendances
    Object.values(categories).forEach(category => {
      if (category.name === 'DevOps & Cloud') {
        category.trend = 'up'
        category.demand = 'high'
        category.recommendation = 'Secteur en forte croissance'
      } else if (category.name === 'AI & Data') {
        category.trend = 'up'
        category.demand = 'high'
        category.recommendation = 'Compétences très demandées'
      } else if (category.name === 'Frontend') {
        category.trend = 'stable'
        category.demand = 'medium'
        category.recommendation = 'Marché mature mais stable'
      }
    })

    return Object.values(categories)
  }

  const skillCategories = categorizeSkills(user.skills)

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />
      default: return <div className="w-4 h-4 bg-gray-400 rounded-full" />
    }
  }

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRecommendationIcon = (trend: string, demand: string) => {
    if (trend === 'up' && demand === 'high') {
      return <CheckCircle className="w-4 h-4 text-green-500" />
    } else if (trend === 'down' || demand === 'low') {
      return <AlertTriangle className="w-4 h-4 text-red-500" />
    } else {
      return <Clock className="w-4 h-4 text-yellow-500" />
    }
  }

  const addSkill = (skill: string) => {
    if (!user.skills.includes(skill)) {
      updateUser({
        skills: [...user.skills, skill]
      })
      addNotification({
        type: 'success',
        message: `Compétence "${skill}" ajoutée à votre profil`
      })
    }
  }

  const removeSkill = (skill: string) => {
    updateUser({
      skills: user.skills.filter(s => s !== skill)
    })
    addNotification({
      type: 'info',
      message: `Compétence "${skill}" supprimée de votre profil`
    })
  }

  const suggestedSkills = [
    'Docker', 'Kubernetes', 'AWS', 'Python', 'Machine Learning', 'TensorFlow',
    'GraphQL', 'Microservices', 'Terraform', 'Jenkins', 'Elasticsearch', 'Redis'
  ].filter(skill => !user.skills.includes(skill))

  return (
    <Widget
      title="Mes Compétences"
      icon={<Code className="w-5 h-5 text-primary-900" />}
      headerActions={
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          title={isEditing ? "Terminer l'édition" : "Modifier les compétences"}
        >
          <Plus className={`w-5 h-5 text-gray-500 ${isEditing ? 'rotate-45' : ''} transition-transform`} />
        </button>
      }
    >
      {/* Statistiques globales */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-900">{user.skills.length}</div>
          <div className="text-sm text-gray-600">Compétences</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            {skillCategories.filter(c => c.trend === 'up').length}
          </div>
          <div className="text-sm text-gray-600">En croissance</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            {skillCategories.filter(c => c.demand === 'high').length}
          </div>
          <div className="text-sm text-gray-600">Très demandées</div>
        </div>
      </div>

      {/* Catégories de compétences */}
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-primary-900">{category.name}</h4>
                {getTrendIcon(category.trend)}
                <Badge variant="info" className={getDemandColor(category.demand)}>
                  {category.demand === 'high' ? 'Très demandé' : 
                   category.demand === 'medium' ? 'Modérément demandé' : 'Peu demandé'}
                </Badge>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                {getRecommendationIcon(category.trend, category.demand)}
                <span>{category.recommendation}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center space-x-1 px-3 py-1 bg-white rounded-full border border-gray-200"
                >
                  <span className="text-sm font-medium text-gray-700">{skill}</span>
                  {isEditing && (
                    <button
                      onClick={() => removeSkill(skill)}
                      className="hover:bg-red-100 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3 text-red-500" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compétences suggérées */}
      {isEditing && suggestedSkills.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-6 pt-4 border-t border-gray-200"
        >
          <h4 className="font-semibold text-primary-900 mb-3 flex items-center">
            <Target className="w-4 h-4 mr-2" />
            Compétences suggérées
          </h4>
          <div className="flex flex-wrap gap-2">
            {suggestedSkills.slice(0, 8).map((skill) => (
              <button
                key={skill}
                onClick={() => addSkill(skill)}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors flex items-center space-x-1"
              >
                <span>{skill}</span>
                <Plus className="w-3 h-3" />
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Recommandations d'action */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h4 className="font-semibold text-primary-900 mb-2 flex items-center">
          <Star className="w-4 h-4 mr-2 text-yellow-500" />
          Recommandations
        </h4>
        <div className="space-y-2 text-sm text-gray-700">
          {skillCategories.filter(c => c.trend === 'up' && c.demand === 'high').length > 0 ? (
            <p>✅ Excellente stratégie ! Vous avez des compétences dans des domaines en forte croissance.</p>
          ) : (
            <p>💡 Considérez ajouter des compétences DevOps ou IA pour améliorer votre employabilité.</p>
          )}
          {user.skills.length < 5 && (
            <p>📈 Ajoutez plus de compétences pour une analyse plus précise de votre profil.</p>
          )}
        </div>
      </div>
    </Widget>
  )
}

