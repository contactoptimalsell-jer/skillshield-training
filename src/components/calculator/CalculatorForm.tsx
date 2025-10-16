import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Building2, 
  ClipboardList, 
  Monitor, 
  Home, 
  TrendingUp, 
  GraduationCap, 
  Heart,
  ArrowRight,
  ArrowLeft,
  Check,
  Search,
  X
} from 'lucide-react';
import { getAllJobs, getAllSectors } from '../../data/jobsDatabase';

// Types pour les réponses
interface CalculatorAnswers {
  firstName: string;
  job: string;
  experience: number;
  sector: string;
  companySize: string;
  tasks: string[];
  digitalSkills: number;
  aiUsage: string;
  aiTools: string[];
  workMode: string;
  requiresPhysical: string[];
  regulated: string;
  jobDemand: string;
  recentChanges: string[];
  colleaguesReplaced: string;
  education: string;
  recentTraining: string;
  reconversionWillingness: number;
  trainingBudget: string;
  situation: string;
  age: string;
  familySituation: string;
  mobility: string;
}

interface CalculatorFormProps {
  onComplete: (answers: CalculatorAnswers) => void;
}

const initialAnswers: CalculatorAnswers = {
  firstName: '',
  job: '',
  experience: 0,
  sector: '',
  companySize: '',
  tasks: [],
  digitalSkills: 1,
  aiUsage: 'jamais',
  aiTools: [],
  workMode: '',
  requiresPhysical: [],
  regulated: 'non',
  jobDemand: '',
  recentChanges: [],
  colleaguesReplaced: 'non',
  education: '',
  recentTraining: 'non',
  reconversionWillingness: 3,
  trainingBudget: '0',
  situation: '',
  age: '',
  familySituation: '',
  mobility: ''
};

const steps = [
  { id: 1, title: "Informations de Base", icon: User, description: "Commençons par vous connaître" },
  { id: 2, title: "Secteur d'Activité", icon: Building2, description: "Votre environnement professionnel" },
  { id: 3, title: "Nature de vos Tâches", icon: ClipboardList, description: "Analysons votre quotidien" },
  { id: 4, title: "Compétences Numériques", icon: Monitor, description: "Votre maîtrise des outils numériques" },
  { id: 5, title: "Environnement de Travail", icon: Home, description: "Modalités et contexte" },
  { id: 6, title: "Marché de l'Emploi", icon: TrendingUp, description: "Dynamique de votre secteur" },
  { id: 7, title: "Formation et Adaptabilité", icon: GraduationCap, description: "Votre capacité d'évolution" },
  { id: 8, title: "Situation Personnelle", icon: Heart, description: "Votre contexte de vie" }
];

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<CalculatorAnswers>(initialAnswers);
  const [searchJob, setSearchJob] = useState('');
  const [isValid, setIsValid] = useState(false);

  const jobs = getAllJobs();
  const sectors = getAllSectors();

  // Validation à chaque étape
  useEffect(() => {
    setIsValid(validateStep(currentStep));
  }, [answers, currentStep]);

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return answers.firstName.length >= 2 && answers.job && answers.experience > 0;
      case 2:
        return answers.sector && answers.companySize;
      case 3:
        return answers.tasks.length > 0;
      case 4:
        return answers.digitalSkills > 0 && answers.aiUsage;
      case 5:
        return answers.workMode && answers.regulated;
      case 6:
        return answers.jobDemand;
      case 7:
        return answers.education && answers.recentTraining && answers.reconversionWillingness > 0;
      case 8:
        return answers.situation && answers.age && answers.familySituation && answers.mobility;
      default:
        return false;
    }
  };

  const updateAnswer = (field: keyof CalculatorAnswers, value: any) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (isValid && currentStep < 8) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (isValid) {
      onComplete(answers);
    }
  };

  const filteredJobs = jobs.filter(job => 
    job.description.toLowerCase().includes(searchJob.toLowerCase()) ||
    job.key.toLowerCase().includes(searchJob.toLowerCase())
  );

  // Métiers spéciaux à mettre en bas de la liste
  const specialJobs = ['développeur-web', 'développeur-full-stack'];
  const regularJobs = filteredJobs.filter(job => !specialJobs.includes(job.key));
  const bottomJobs = filteredJobs.filter(job => specialJobs.includes(job.key));
  
  // Combiner les listes : métiers normaux en haut, métiers spéciaux en bas
  const sortedFilteredJobs = [...regularJobs, ...bottomJobs];

  const progress = (currentStep / 8) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header avec progression */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-white">
              Calculateur de Risque IA
            </h1>
            <div className="text-white/70">
              Étape {currentStep}/8
            </div>
          </div>
          
          {/* Barre de progression */}
          <div className="w-full bg-white/20 rounded-full h-3 mb-4">
            <motion.div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Titre de l'étape */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-cyan-400 mb-2">
              {React.createElement(steps[currentStep - 1].icon, { className: "w-6 h-6" })}
              <span className="text-xl font-semibold">{steps[currentStep - 1].title}</span>
            </div>
            <p className="text-white/70">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Contenu du formulaire */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Étape 1: Informations de Base */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Quel est votre prénom et nom ?
                    </label>
                    <input
                      type="text"
                      value={answers.firstName}
                      onChange={(e) => updateAnswer('firstName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none"
                      placeholder="Jean"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Votre métier actuel ?
                    </label>
                    
                    {/* Métier sélectionné avec bouton de suppression */}
                    {answers.job && (
                      <div className="mb-3 p-3 bg-cyan-500/20 border border-cyan-400 rounded-lg flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-cyan-300 font-medium">
                            {jobs.find(job => job.key === answers.job)?.description || answers.job}
                          </span>
                          <span className="text-cyan-400/70 text-sm">
                            (Risque: {Math.round((jobs.find(job => job.key === answers.job)?.automationProbability || 0) * 100)}%)
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            updateAnswer('job', '');
                            setSearchJob('');
                          }}
                          className="text-red-400 hover:text-red-300 transition-colors p-1"
                          title="Changer de métier"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    )}

                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                      <input
                        type="text"
                        value={searchJob}
                        onChange={(e) => setSearchJob(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none"
                        placeholder="Rechercher votre métier..."
                      />
                    </div>
                    <div className="mt-3 max-h-48 overflow-y-auto space-y-2">
                      {sortedFilteredJobs.slice(0, 10).map((job) => (
                        <button
                          key={job.key}
                          onClick={() => {
                            updateAnswer('job', job.key);
                            setSearchJob(job.description);
                          }}
                          className={`w-full text-left px-4 py-2 rounded-lg transition ${
                            answers.job === job.key
                              ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300'
                              : 'bg-white/5 hover:bg-white/10 text-white/80'
                          }`}
                        >
                          <div className="font-medium">{job.description}</div>
                          <div className="text-sm opacity-70">
                            Risque: {Math.round(job.automationProbability * 100)}%
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Depuis combien d'années ? ({answers.experience} ans)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={answers.experience}
                      onChange={(e) => updateAnswer('experience', parseInt(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-white/60 text-sm mt-1">
                      <span>0</span>
                      <span>30+</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 2: Secteur d'Activité */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-4">
                      Dans quel secteur travaillez-vous ?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {sectors.map((sector) => (
                        <button
                          key={sector.key}
                          onClick={() => updateAnswer('sector', sector.key)}
                          className={`p-4 rounded-xl border transition ${
                            answers.sector === sector.key
                              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                              : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10'
                          }`}
                        >
                          <div className="font-medium">{sector.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-4">
                      Taille de votre entreprise ?
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { key: 'tpe', label: 'TPE (1-10 employés)' },
                        { key: 'pme', label: 'PME (11-250)' },
                        { key: 'eti', label: 'ETI (251-5000)' },
                        { key: 'grande', label: 'Grande entreprise (5000+)' }
                      ].map((size) => (
                        <button
                          key={size.key}
                          onClick={() => updateAnswer('companySize', size.key)}
                          className={`p-4 rounded-xl border transition ${
                            answers.companySize === size.key
                              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                              : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10'
                          }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 3: Nature des Tâches */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <p className="text-white/80 mb-6">
                    Cochez toutes les tâches que vous effectuez régulièrement :
                  </p>

                  {[
                    {
                      category: 'répétitives',
                      icon: '🤖',
                      title: 'Tâches Répétitives (Haut risque)',
                      tasks: [
                        'Saisie de données',
                        'Traitement de documents administratifs',
                        'Réponses aux emails types',
                        'Création de rapports standardisés',
                        'Suivi de commandes / inventaire',
                        'Traduction de textes'
                      ]
                    },
                    {
                      category: 'cognitives',
                      icon: '🧠',
                      title: 'Tâches Cognitives (Risque moyen)',
                      tasks: [
                        'Analyse de données',
                        'Rédaction de contenu',
                        'Planification de projets',
                        'Recherche d\'informations',
                        'Calculs et modélisations'
                      ]
                    },
                    {
                      category: 'relationnelles',
                      icon: '🤝',
                      title: 'Tâches Relationnelles (Faible risque)',
                      tasks: [
                        'Gestion d\'équipe',
                        'Négociation avec clients',
                        'Coaching / Mentorat',
                        'Prise de décisions stratégiques',
                        'Résolution de conflits',
                        'Créativité / Brainstorming'
                      ]
                    },
                    {
                      category: 'créatives',
                      icon: '🎨',
                      title: 'Tâches Créatives (Très faible risque)',
                      tasks: [
                        'Design / Direction artistique',
                        'Innovation produit',
                        'Stratégie créative',
                        'Performance artistique'
                      ]
                    },
                    {
                      category: 'manuelles',
                      icon: '🔧',
                      title: 'Tâches Manuelles (Risque variable)',
                      tasks: [
                        'Manipulation d\'objets physiques',
                        'Travaux de précision',
                        'Installation / Réparation',
                        'Conduite de véhicules'
                      ]
                    }
                  ].map((category) => (
                    <div key={category.category} className="border border-white/20 rounded-xl p-4">
                      <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span>{category.icon}</span>
                        {category.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {category.tasks.map((task) => (
                          <label key={task} className="flex items-center gap-2 text-white/80 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={answers.tasks.includes(task)}
                              onChange={(e) => {
                                const newTasks = e.target.checked
                                  ? [...answers.tasks, task]
                                  : answers.tasks.filter(t => t !== task);
                                updateAnswer('tasks', newTasks);
                              }}
                              className="w-4 h-4 text-cyan-500 bg-white/10 border-white/30 rounded focus:ring-cyan-400"
                            />
                            <span className="text-sm">{task}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Étape 4: Compétences Numériques */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-4">
                      Quel est votre niveau avec les outils informatiques ?
                    </label>
                    <div className="space-y-3">
                      {[
                        { value: 1, label: 'Débutant : Email et navigation web' },
                        { value: 2, label: 'Intermédiaire : Suite Office, outils collaboratifs' },
                        { value: 3, label: 'Avancé : Outils métier spécialisés, automatisation' },
                        { value: 4, label: 'Expert : Programmation, bases de données' },
                        { value: 5, label: 'Maître : Développement IA, architecture systèmes' }
                      ].map((level) => (
                        <label key={level.value} className="flex items-center gap-3 p-3 rounded-lg border border-white/20 cursor-pointer hover:bg-white/5">
                          <input
                            type="radio"
                            name="digitalSkills"
                            value={level.value}
                            checked={answers.digitalSkills === level.value}
                            onChange={(e) => updateAnswer('digitalSkills', parseInt(e.target.value))}
                            className="w-4 h-4 text-cyan-500"
                          />
                          <span className="text-white">{level.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-4">
                      Utilisez-vous déjà des outils IA dans votre travail ?
                    </label>
                    <div className="space-y-2">
                      {[
                        { key: 'jamais', label: 'Jamais' },
                        { key: 'rarement', label: 'Rarement (1-2 fois/mois)' },
                        { key: 'occasionnellement', label: 'Occasionnellement (1-2 fois/semaine)' },
                        { key: 'régulièrement', label: 'Régulièrement (quotidiennement)' },
                        { key: 'intensément', label: 'Intensément (plusieurs fois par jour)' }
                      ].map((usage) => (
                        <label key={usage.key} className="flex items-center gap-3 p-3 rounded-lg border border-white/20 cursor-pointer hover:bg-white/5">
                          <input
                            type="radio"
                            name="aiUsage"
                            value={usage.key}
                            checked={answers.aiUsage === usage.key}
                            onChange={(e) => updateAnswer('aiUsage', e.target.value)}
                            className="w-4 h-4 text-cyan-500"
                          />
                          <span className="text-white">{usage.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-4">
                      Quels outils IA utilisez-vous ? (optionnel)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'ChatGPT / Claude / Bard',
                        'IA qui génère des PowerPoint',
                        'Midjourney / DALL-E',
                        'Grammarly / Jasper',
                        'Outils IA métier spécialisés',
                        'Aucun'
                      ].map((tool) => (
                        <label key={tool} className="flex items-center gap-2 text-white/80 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={answers.aiTools.includes(tool)}
                            onChange={(e) => {
                              const newTools = e.target.checked
                                ? [...answers.aiTools, tool]
                                : answers.aiTools.filter(t => t !== tool);
                              updateAnswer('aiTools', newTools);
                            }}
                            className="w-4 h-4 text-cyan-500 bg-white/10 border-white/30 rounded"
                          />
                          <span className="text-sm">{tool}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Continuer avec les autres étapes... */}
              {/* Pour la démonstration, je vais créer les étapes restantes de manière simplifiée */}
              
              {/* Étape 5-8: Étapes simplifiées pour la démonstration */}
              {currentStep >= 5 && currentStep <= 8 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Étape {currentStep} - {steps[currentStep - 1].title}
                    </h3>
                    {/* Formulaires interactifs pour les étapes restantes */}
                    {currentStep === 5 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-white font-medium mb-3">
                            Mode de travail
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                              { value: 'presentiel', label: 'Présentiel', icon: '🏢' },
                              { value: 'hybride', label: 'Hybride', icon: '🏠🏢' },
                              { value: 'teletravail', label: 'Télétravail', icon: '🏠' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                onClick={() => updateAnswer('workMode', option.value)}
                                className={`p-4 rounded-lg border-2 transition-all ${
                                  answers.workMode === option.value
                                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 text-white/80'
                                }`}
                              >
                                <div className="text-2xl mb-2">{option.icon}</div>
                                <div className="font-medium">{option.label}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-3">
                            Votre métier est-il réglementé ?
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              { value: 'oui', label: 'Oui', description: 'Médecine, droit, comptabilité...' },
                              { value: 'non', label: 'Non', description: 'Libre d\'exercer' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                onClick={() => updateAnswer('regulated', option.value)}
                                className={`p-4 rounded-lg border-2 transition-all text-left ${
                                  answers.regulated === option.value
                                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 text-white/80'
                                }`}
                              >
                                <div className="font-medium mb-1">{option.label}</div>
                                <div className="text-sm opacity-70">{option.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 6 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-white font-medium mb-3">
                            Comment évaluez-vous la demande pour votre métier ?
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                              { value: 'croissance', label: 'En croissance', icon: '📈', description: 'Beaucoup d\'offres' },
                              { value: 'stable', label: 'Stable', icon: '➡️', description: 'Demande constante' },
                              { value: 'declin', label: 'En déclin', icon: '📉', description: 'Moins d\'offres' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                onClick={() => updateAnswer('jobDemand', option.value)}
                                className={`p-4 rounded-lg border-2 transition-all text-left ${
                                  answers.jobDemand === option.value
                                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 text-white/80'
                                }`}
                              >
                                <div className="text-2xl mb-2">{option.icon}</div>
                                <div className="font-medium mb-1">{option.label}</div>
                                <div className="text-sm opacity-70">{option.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-3">
                            Avez-vous observé des changements récents dans votre secteur ?
                          </label>
                          <div className="space-y-3">
                            {[
                              { value: 'automatisation', label: 'Automatisation accrue' },
                              { value: 'nouveaux_outils', label: 'Nouveaux outils IA' },
                              { value: 'restructuration', label: 'Restructuration d\'équipes' },
                              { value: 'nouveaux_metiers', label: 'Apparition de nouveaux métiers' },
                              { value: 'aucun', label: 'Aucun changement notable' }
                            ].map((option) => (
                              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={answers.recentChanges.includes(option.value)}
                                  onChange={(e) => {
                                    const current = answers.recentChanges;
                                    const updated = e.target.checked
                                      ? [...current, option.value]
                                      : current.filter(item => item !== option.value);
                                    updateAnswer('recentChanges', updated);
                                  }}
                                  className="w-4 h-4 text-cyan-400 bg-white/10 border-white/30 rounded focus:ring-cyan-400"
                                />
                                <span className="text-white/80">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 7 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-white font-medium mb-3">
                            Niveau d'éducation
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              { value: 'bac', label: 'Baccalauréat' },
                              { value: 'bac+2', label: 'Bac +2 (BTS, DUT)' },
                              { value: 'bac+3', label: 'Bac +3 (Licence)' },
                              { value: 'bac+5', label: 'Bac +5 (Master)' },
                              { value: 'bac+8', label: 'Bac +8 (Doctorat)' },
                              { value: 'autre', label: 'Autre formation' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                onClick={() => updateAnswer('education', option.value)}
                                className={`p-3 rounded-lg border-2 transition-all text-left ${
                                  answers.education === option.value
                                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 text-white/80'
                                }`}
                              >
                                <div className="font-medium">{option.label}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-3">
                            Avez-vous suivi une formation récente ?
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              { value: 'oui', label: 'Oui', description: 'Formation récente' },
                              { value: 'non', label: 'Non', description: 'Pas de formation récente' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                onClick={() => updateAnswer('recentTraining', option.value)}
                                className={`p-4 rounded-lg border-2 transition-all text-left ${
                                  answers.recentTraining === option.value
                                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 text-white/80'
                                }`}
                              >
                                <div className="font-medium mb-1">{option.label}</div>
                                <div className="text-sm opacity-70">{option.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-3">
                            Êtes-vous prêt à vous reconvertir ?
                          </label>
                          <div className="space-y-3">
                            {[
                              { value: 1, label: 'Pas du tout', description: 'Très attaché à mon métier actuel' },
                              { value: 2, label: 'Peu', description: 'Préfère rester dans mon domaine' },
                              { value: 3, label: 'Modérément', description: 'Ouvert à des évolutions' },
                              { value: 4, label: 'Assez', description: 'Prêt à changer de métier' },
                              { value: 5, label: 'Totalement', description: 'Très flexible et adaptable' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                onClick={() => updateAnswer('reconversionWillingness', option.value)}
                                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                                  answers.reconversionWillingness === option.value
                                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 text-white/80'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-medium mb-1">{option.label}</div>
                                    <div className="text-sm opacity-70">{option.description}</div>
                                  </div>
                                  <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <div
                                        key={star}
                                        className={`w-3 h-3 rounded-full ${
                                          star <= option.value ? 'bg-cyan-400' : 'bg-white/20'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentStep === 8 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-white font-medium mb-3">
                            Situation professionnelle actuelle
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              { value: 'salarie_cdi', label: 'Salarié CDI' },
                              { value: 'salarie_cdd', label: 'Salarié CDD' },
                              { value: 'freelance', label: 'Freelance/Indépendant' },
                              { value: 'chomage', label: 'En recherche d\'emploi' },
                              { value: 'etudiant', label: 'Étudiant' },
                              { value: 'retraite', label: 'Retraité' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                onClick={() => updateAnswer('situation', option.value)}
                                className={`p-3 rounded-lg border-2 transition-all text-left ${
                                  answers.situation === option.value
                                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 text-white/80'
                                }`}
                              >
                                <div className="font-medium">{option.label}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-3">
                            Tranche d'âge
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {[
                              { value: '18-24', label: '18-24 ans' },
                              { value: '25-34', label: '25-34 ans' },
                              { value: '35-44', label: '35-44 ans' },
                              { value: '45-54', label: '45-54 ans' },
                              { value: '55-64', label: '55-64 ans' },
                              { value: '65+', label: '65+ ans' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                onClick={() => updateAnswer('age', option.value)}
                                className={`p-3 rounded-lg border-2 transition-all text-center ${
                                  answers.age === option.value
                                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 text-white/80'
                                }`}
                              >
                                <div className="font-medium">{option.label}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-3">
                            Mobilité géographique
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                              { value: 'totale', label: 'Totale', description: 'Prêt à déménager' },
                              { value: 'regionale', label: 'Régionale', description: 'Même région' },
                              { value: 'limitee', label: 'Limitée', description: 'Même ville' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                onClick={() => updateAnswer('mobility', option.value)}
                                className={`p-4 rounded-lg border-2 transition-all text-left ${
                                  answers.mobility === option.value
                                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 text-white/80'
                                }`}
                              >
                                <div className="font-medium mb-1">{option.label}</div>
                                <div className="text-sm opacity-70">{option.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-3">
                            Situation familiale
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              { value: 'celibataire', label: 'Célibataire', description: 'Sans enfants' },
                              { value: 'celibataire_enfants', label: 'Célibataire avec enfants', description: 'Parent seul' },
                              { value: 'couple', label: 'En couple', description: 'Sans enfants' },
                              { value: 'couple_enfants', label: 'En couple avec enfants', description: 'Famille' },
                              { value: 'autre', label: 'Autre', description: 'Situation particulière' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                onClick={() => updateAnswer('familySituation', option.value)}
                                className={`p-4 rounded-lg border-2 transition-all text-left ${
                                  answers.familySituation === option.value
                                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                                    : 'border-white/20 bg-white/5 hover:border-white/40 text-white/80'
                                }`}
                              >
                                <div className="font-medium mb-1">{option.label}</div>
                                <div className="text-sm opacity-70">{option.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Précédent
            </button>

            {currentStep < 8 ? (
              <button
                onClick={nextStep}
                disabled={!isValid}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Suivant
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex flex-col items-end gap-2">
                {!isValid && (
                  <div className="text-sm text-orange-400">
                    ⚠️ Veuillez remplir tous les champs pour continuer
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={!isValid}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg hover:from-emerald-400 hover:to-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold"
                >
                  <Check className="w-4 h-4" />
                  Calculer mon score →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
