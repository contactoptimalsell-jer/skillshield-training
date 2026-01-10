// Mock data for SkillShield Dashboard

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  job: string
  sector: string
  experience: number
  plan: 'Sentinelle' | 'Bouclier' | 'Forteresse'
  subscriptionDate: string
  nextBilling: string
  skills: string[]
  reconversionGoal: string
}

export interface RiskScore {
  current: number
  previous: number
  trend: 'up' | 'down' | 'stable'
  level: 'Faible' | 'Modéré' | 'Élevé' | 'Critique'
  timeline: string
  breakdown: {
    taskAutomation: number
    marketSaturation: number
    adaptiveSkills: number
    sectorExposure: number
  }
  evolution: Array<{
    month: string
    score: number
    events?: string[]
  }>
}

export interface AIAlert {
  id: string
  type: 'critical' | 'warning' | 'info' | 'opportunity'
  title: string
  description: string
  source: string
  date: string
  impactScore: number
  isRead: boolean
  actions: string[]
  relatedFormation?: string
}

export interface Formation {
  id: string
  title: string
  description: string
  duration: number
  level: 'Débutant' | 'Intermédiaire' | 'Avancé'
  rating: number
  reviews: number
  price: number
  isIncluded: boolean
  progress?: number
  status: 'not_started' | 'in_progress' | 'completed'
  certification: boolean
  skills: string[]
}

export interface Bootcamp {
  id: string
  title: string
  startDate: string
  duration: number
  spotsLeft: number
  maxSpots: number
  level: 'Débutant' | 'Intermédiaire' | 'Avancé'
  description: string
  program: string[]
  prerequisites: string[]
  finalProject: string
  isReserved: boolean
}

export interface ReconversionPlan {
  id: string
  title: string
  targetJob: string
  duration: number
  successProbability: number
  totalHours: number
  completedHours: number
  phases: Array<{
    title: string
    duration: string
    skills: string[]
    status: 'completed' | 'in_progress' | 'upcoming'
    progress: number
  }>
  alternativeJobs: Array<{
    title: string
    similarity: number
    salary: number
  }>
}

export interface SectorReport {
  id: string
  title: string
  sector: string
  publishDate: string
  pages: number
  readTime: number
  summary: string
  content: string[]
  downloadUrl: string
}

// Mock User Data
export const mockUser: User = {
  id: 'user_123',
  name: 'Marie Dubois',
  email: 'marie.dubois@email.com',
  avatar: 'MD',
  job: 'Développeuse Frontend',
  sector: 'Technologie & Digital',
  experience: 5,
  plan: 'Bouclier',
  subscriptionDate: '2024-10-01',
  nextBilling: '2024-11-01',
  skills: ['React', 'JavaScript', 'CSS', 'TypeScript'],
  reconversionGoal: 'DevOps Engineer'
}

// Mock Risk Score Data
export const mockRiskScore: RiskScore = {
  current: 67,
  previous: 65,
  trend: 'up',
  level: 'Modéré',
  timeline: '18 mois',
  breakdown: {
    taskAutomation: 75,
    marketSaturation: 60,
    adaptiveSkills: 45,
    sectorExposure: 70
  },
  evolution: [
    { month: '2024-01', score: 62 },
    { month: '2024-02', score: 61 },
    { month: '2024-03', score: 63 },
    { month: '2024-04', score: 64 },
    { month: '2024-05', score: 65 },
    { month: '2024-06', score: 66, events: ['GPT-4.5 Release'] },
    { month: '2024-07', score: 67 },
    { month: '2024-08', score: 66 },
    { month: '2024-09', score: 67 },
    { month: '2024-10', score: 67, events: ['Formation React complétée'] }
  ]
}

// Mock AI Alerts
export const mockAIAlerts: AIAlert[] = [
  {
    id: 'alert_1',
    type: 'critical',
    title: 'ChatGPT Code Interpreter impacte 40% des tâches de développement frontend',
    description: 'L\'outil permet désormais d\'automatiser la génération de composants React et la correction de bugs CSS.',
    source: 'TechCrunch, OpenAI',
    date: '2024-10-09T10:30:00Z',
    impactScore: 8.5,
    isRead: false,
    actions: [
      'Suivre la formation "Prompt Engineering Avancé"',
      'Lire l\'analyse sectorielle complète',
      'Planifier un coaching pour adapter votre stratégie'
    ],
    relatedFormation: 'Prompt Engineering Avancé'
  },
  {
    id: 'alert_2',
    type: 'opportunity',
    title: 'Formation React avancé démarre dans 5 jours',
    description: 'Nouvelle session disponible pour React 18 et Concurrent Features.',
    source: 'SkillShield Formation',
    date: '2024-10-09T08:15:00Z',
    impactScore: 6.0,
    isRead: true,
    actions: [
      'Réserver votre place',
      'Voir le programme détaillé'
    ],
    relatedFormation: 'React 18 Avancé'
  },
  {
    id: 'alert_3',
    type: 'warning',
    title: 'Analyse sectorielle mise à jour : Technologie & Digital',
    description: 'Nouveau rapport disponible avec les dernières tendances du marché.',
    source: 'SkillShield Analytics',
    date: '2024-10-08T14:20:00Z',
    impactScore: 7.2,
    isRead: false,
    actions: [
      'Lire le rapport complet',
      'Télécharger en PDF'
    ]
  },
  {
    id: 'alert_4',
    type: 'info',
    title: 'Nouvelle IA dans votre secteur : GitHub Copilot X',
    description: 'Amélioration significative de l\'assistance au développement.',
    source: 'GitHub Blog',
    date: '2024-10-07T16:45:00Z',
    impactScore: 5.5,
    isRead: true,
    actions: [
      'Tester l\'outil',
      'Suivre la formation GitHub'
    ]
  }
]

// Mock Formations
export const mockFormations: Formation[] = [
  {
    id: 'formation_0',
    title: 'Formateur / Enseignant face à l\'IA',
    description: 'Reconstruire le métier, les pratiques et la valeur humaine à l\'ère de l\'intelligence artificielle. Redéfinir votre rôle de formateur dans un monde où l\'IA transforme l\'apprentissage.',
    duration: 24,
    level: 'Intermédiaire',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Pédagogie', 'IA', 'Formation', 'Transformation professionnelle', 'Design pédagogique']
  },
  {
    id: 'formation_journaliste',
    title: 'Journaliste / Rédacteur face à l\'IA',
    description: 'De producteur d\'articles à architecte de l\'information, du sens et de la crédibilité. Redéfinir votre rôle dans un monde où l\'IA produit du texte mais ne peut produire de la confiance.',
    duration: 20,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Journalisme', 'Rédaction', 'IA', 'Vérification des faits', 'Éthique', 'Analyse']
  },
  {
    id: 'formation_copywriter',
    title: 'Copywriter / Content Manager face à l\'IA',
    description: 'De producteur de textes à stratège de la persuasion, de l\'attention et de la valeur business. Redéfinir votre rôle dans un monde saturé de contenu où l\'attention devient la vraie monnaie.',
    duration: 22,
    level: 'Intermédiaire',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Copywriting', 'Content Marketing', 'IA', 'Stratégie', 'Conversion', 'Persuasion']
  },
  {
    id: 'formation_cm',
    title: 'Community Manager face à l\'IA',
    description: 'De simple animateur de réseaux à architecte de communautés, de relations et de valeur durable. Redéfinir votre rôle dans un monde où l\'IA publie mais ne peut créer de lien humain authentique.',
    duration: 18,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Community Management', 'Réseaux sociaux', 'IA', 'Relations', 'Stratégie', 'Engagement']
  },
  {
    id: 'formation_communication',
    title: 'Chargé de Communication face à l\'IA',
    description: 'De producteur de messages à stratège de cohérence, de réputation et de sens dans un monde saturé. Redéfinir votre rôle dans un monde où l\'IA produit mais où la cohérence devient un avantage concurrentiel.',
    duration: 21,
    level: 'Intermédiaire',
    rating: 4.7,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Communication', 'Stratégie', 'IA', 'Réputation', 'Cohérence', 'Crise']
  },
  {
    id: 'formation_traducteur',
    title: 'Traducteur / Rédacteur Multilingue face à l\'IA',
    description: 'De convertisseur de langues à expert du sens, du contexte culturel et de la crédibilité internationale. Redéfinir votre rôle dans un monde où l\'IA traduit mais où le sens devient plus précieux que jamais.',
    duration: 19,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Traduction', 'Localisation', 'IA', 'Culture', 'Rédaction multilingue', 'Post-édition']
  },
  {
    id: 'formation_developpeur',
    title: 'Développeur / Programmeur face à l\'IA',
    description: 'De producteur de code à architecte de systèmes, de décisions et de valeur logicielle. Redéfinir votre rôle dans un monde où l\'IA code mais où penser devient la compétence rare.',
    duration: 25,
    level: 'Intermédiaire',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Développement', 'Architecture', 'IA', 'Sécurité', 'Systèmes', 'Code']
  },
  {
    id: 'formation_chef_projet',
    title: 'Chef de Projet Digital / Product Manager face à l\'IA',
    description: 'De gestionnaire de tâches à architecte de décisions, de valeur et de coordination homme–machine. Redéfinir votre rôle dans un monde où l\'IA organise mais où la capacité à décider devient la compétence la plus rare.',
    duration: 23,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Gestion de projet', 'Product Management', 'IA', 'Leadership', 'Décisions', 'Stratégie']
  },
  {
    id: 'formation_ux_ui',
    title: 'UX / UI Designer face à l\'IA',
    description: 'De designer d\'écrans à architecte d\'expériences, de décisions et de confiance homme–machine. Redéfinir votre rôle dans un monde où l\'IA génère des interfaces mais où rendre le monde compréhensible devient essentiel.',
    duration: 22,
    level: 'Intermédiaire',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['UX Design', 'UI Design', 'IA', 'Expérience utilisateur', 'Accessibilité', 'Éthique']
  },
  {
    id: 'formation_data_analyst',
    title: 'Data Analyst / Business Analyst face à l\'IA',
    description: 'De producteur de tableaux à architecte de décisions, de sens et de responsabilité analytique. Redéfinir votre rôle dans un monde où l\'IA analyse mais où la lucidité devient une compétence stratégique rare.',
    duration: 21,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Analyse de données', 'Business Intelligence', 'IA', 'Stratégie', 'Storytelling', 'Éthique']
  },
  {
    id: 'formation_commercial',
    title: 'Commercial / Sales face à l\'IA',
    description: 'De vendeur de solutions à stratège de la relation, de la décision et de la confiance dans un monde automatisé. Redéfinir votre rôle dans un monde où l\'IA prospecte mais où l\'honnêteté devient un avantage concurrentiel.',
    duration: 20,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Vente', 'Prospection', 'IA', 'Relation client', 'Négociation', 'Stratégie']
  },
  {
    id: 'formation_marketing',
    title: 'Responsable Marketing face à l\'IA',
    description: 'De producteur de campagnes à architecte de croissance, de cohérence et de valeur durable. Redéfinir votre rôle dans un monde où l\'IA exécute mais où la stratégie redevient une compétence rare.',
    duration: 24,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Marketing', 'Stratégie', 'IA', 'Croissance', 'Brand', 'Performance']
  },
  {
    id: 'formation_dirigeant',
    title: 'Entrepreneur / Dirigeant de PME face à l\'IA',
    description: 'De décideur intuitif à architecte de systèmes, de culture et de survie stratégique à l\'ère de l\'IA. Redéfinir votre rôle dans un monde où l\'IA exécute mais où la lucidité devient la compétence la plus rare.',
    duration: 26,
    level: 'Avancé',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Leadership', 'Stratégie', 'IA', 'Gouvernance', 'Transformation', 'Éthique']
  },
  {
    id: 'formation_consultant',
    title: 'Consultant (Stratégie / Organisation / IT) face à l\'IA',
    description: 'De producteur de slides et de recommandations à architecte de transformation réelle, responsable et durable. Redéfinir votre rôle dans un monde où l\'IA structure mais où le discernement devient la vraie expertise.',
    duration: 27,
    level: 'Avancé',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Consulting', 'Stratégie', 'IA', 'Transformation', 'Organisation', 'Discernement']
  },
  {
    id: 'formation_avocat',
    title: 'Avocat / Juriste face à l\'IA',
    description: 'De producteur d\'actes et d\'analyses à architecte de sécurité juridique, de stratégie et de responsabilité humaine. Redéfinir votre rôle dans un monde où l\'IA analyse le droit mais où la responsabilité devient la vraie valeur.',
    duration: 23,
    level: 'Avancé',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Droit', 'Stratégie juridique', 'IA', 'Risques', 'Éthique', 'Responsabilité']
  },
  {
    id: 'formation_comptable',
    title: 'Comptable / Expert-Comptable face à l\'IA',
    description: 'De producteur de chiffres à architecte de fiabilité financière, de décision et de sécurité économique. Redéfinir votre rôle dans un monde où l\'IA produit des chiffres mais où la confiance devient la vraie valeur économique.',
    duration: 20,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Comptabilité', 'Finance', 'IA', 'Fiscalité', 'Conseil', 'Fiabilité']
  },
  {
    id: 'formation_rh',
    title: 'Ressources Humaines / Recruteur face à l\'IA',
    description: 'De gestionnaire de profils et de process à architecte de confiance, de talent et de responsabilité humaine. Redéfinir votre rôle dans un monde où l\'IA trie mais où la confiance devient l\'actif le plus fragile et le plus précieux.',
    duration: 22,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['RH', 'Recrutement', 'IA', 'Éthique', 'Confiance', 'Droit du travail']
  },
  {
    id: 'formation_medecin',
    title: 'Médecin / Professionnel de Santé face à l\'IA',
    description: 'De détenteur du savoir médical à chef d\'orchestre du soin, de la décision clinique et de la responsabilité humaine. Redéfinir votre rôle dans un monde où l\'IA calcule mais où l\'humanité du soin devient la compétence la plus précieuse.',
    duration: 25,
    level: 'Avancé',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Médecine', 'Santé', 'IA', 'Éthique médicale', 'Responsabilité', 'Relation patient']
  },
  {
    id: 'formation_coach',
    title: 'Coach / Thérapeute face à l\'IA',
    description: 'De détenteur de méthodes à gardien du cadre, du lien et de la transformation humaine authentique. Redéfinir votre rôle dans un monde où l\'IA simule l\'écoute mais où la présence humaine devient sacrée.',
    duration: 24,
    level: 'Avancé',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Coaching', 'Thérapie', 'IA', 'Relation humaine', 'Éthique', 'Cadre thérapeutique']
  },
  {
    id: 'formation_immobilier',
    title: 'Agent Immobilier face à l\'IA',
    description: 'De diffuseur d\'annonces à stratège de décision patrimoniale, de négociation humaine et de sécurisation émotionnelle. Redéfinir votre rôle dans un monde où l\'IA change l\'immobilier mais où la confiance devient la vraie rareté.',
    duration: 21,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['Immobilier', 'Négociation', 'IA', 'Conseil patrimonial', 'Relation client', 'Éthique']
  },
  {
    id: 'formation_ia_raisonnement',
    title: 'IA de Raisonnement - Secteur 1 : Compréhension et Dialogue',
    description: 'Maîtriser les outils IA de raisonnement (ChatGPT, Claude, Gemini) pour clarifier, structurer et challenger votre pensée professionnelle, sans jamais déléguer votre jugement.',
    duration: 18,
    level: 'Intermédiaire',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['IA', 'Raisonnement', 'Raisonnement critique', 'Prompting', 'Éthique', 'Responsabilité']
  },
  {
    id: 'formation_ia_redaction',
    title: 'IA de Production Rédactionnelle - Secteur 2 : Écriture et Documents',
    description: 'Maîtriser les outils IA de production rédactionnelle pour amplifier votre écriture professionnelle, sans jamais déléguer votre voix ou votre responsabilité de la parole.',
    duration: 16,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['IA', 'Rédaction', 'Communication', 'Écriture professionnelle', 'Éthique', 'Responsabilité']
  },
  {
    id: 'formation_ia_analyse',
    title: 'IA d\'Analyse et de Synthèse - Secteur 3 : Aide à la Décision',
    description: 'Maîtriser les outils IA d\'analyse et de synthèse pour éclairer vos décisions professionnelles, sans jamais déléguer votre jugement ou votre responsabilité de décider.',
    duration: 17,
    level: 'Intermédiaire',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['IA', 'Analyse de données', 'Business Intelligence', 'Aide à la décision', 'Éthique', 'Responsabilité']
  },
  {
    id: 'formation_ia_recherche',
    title: 'IA de Recherche et de Veille - Secteur 4 : Exploration',
    description: 'Maîtriser les outils IA de recherche et de veille pour explorer efficacement un sujet, sans jamais remplacer votre effort intellectuel ou votre responsabilité de vérifier.',
    duration: 15,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['IA', 'Recherche', 'Veille', 'Exploration', 'Éthique', 'Responsabilité intellectuelle']
  },
  {
    id: 'formation_ia_automatisation',
    title: 'IA d\'Automatisation et d\'Orchestration - Secteur 5 : Tâches',
    description: 'Maîtriser les outils IA d\'automatisation et d\'orchestration pour supprimer les répétitions inutiles et fiabiliser l\'exécution, sans jamais perdre le contrôle ou la responsabilité.',
    duration: 19,
    level: 'Intermédiaire',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['IA', 'Automatisation', 'Orchestration', 'Workflows', 'Éthique', 'Responsabilité']
  },
  {
    id: 'formation_ia_creative',
    title: 'IA Créative, Visuelle, Audio & Multimodale - Secteur 6 : Création',
    description: 'Maîtriser les outils IA créatifs (images, vidéo, audio) pour explorer et matérialiser des idées rapidement, sans jamais déléguer le goût, la direction artistique ou la responsabilité culturelle.',
    duration: 20,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['IA', 'Création', 'Design', 'Direction artistique', 'Éthique', 'Responsabilité culturelle']
  },
  {
    id: 'formation_ia_agentique',
    title: 'IA Agentique & Systèmes Autonomes - Secteur 7 : Autonomie',
    description: 'Maîtriser les systèmes IA agentiques et autonomes pour déléguer l\'exécution continue sans jamais perdre le contrôle, la gouvernance ou la responsabilité humaine.',
    duration: 22,
    level: 'Avancé',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['IA', 'Agents IA', 'Systèmes autonomes', 'Gouvernance', 'Éthique', 'Responsabilité']
  },
  {
    id: 'formation_ia_emploi',
    title: 'IA, Emploi & Transformation des Métiers - Secteur 8 : Compétences',
    description: 'Comprendre comment l\'IA transforme les métiers et les compétences, et développer une stratégie de requalification pour rester pertinent dans un monde où l\'exécution se déplace vers la responsabilité.',
    duration: 21,
    level: 'Intermédiaire',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['IA', 'Transformation', 'Compétences', 'Requalification', 'Éthique', 'Avenir du travail']
  },
  {
    id: 'formation_ia_gouvernance',
    title: 'IA, Gouvernance & Pouvoir Décisionnel - Secteur 9 : Droit',
    description: 'Comprendre comment l\'IA transforme le pouvoir décisionnel et mettre en place une gouvernance responsable pour maintenir la légitimité, la responsabilité et la transparence des décisions.',
    duration: 23,
    level: 'Avancé',
    rating: 4.9,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['IA', 'Gouvernance', 'Droit', 'Pouvoir décisionnel', 'Éthique', 'Responsabilité']
  },
  {
    id: 'formation_ia_humanite',
    title: 'IA, Humanité & Sens - Secteur 10 : Limites',
    description: 'Comprendre ce que l\'IA révèle de l\'humain, redéfinir la valeur humaine au-delà de la performance, et construire un futur désirable où l\'IA libère sans déshumaniser.',
    duration: 24,
    level: 'Avancé',
    rating: 5.0,
    reviews: 0,
    price: 0,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['IA', 'Humanité', 'Sens', 'Éthique', 'Responsabilité', 'Dignité']
  },
  {
    id: 'formation_1',
    title: 'Docker & Kubernetes Mastery',
    description: 'Apprenez à containeriser et orchestrer vos applications avec Docker et Kubernetes.',
    duration: 45,
    level: 'Intermédiaire',
    rating: 4.8,
    reviews: 2340,
    price: 299,
    isIncluded: true,
    progress: 23,
    status: 'in_progress',
    certification: true,
    skills: ['Docker', 'Kubernetes', 'DevOps', 'CI/CD']
  },
  {
    id: 'formation_2',
    title: 'React 18 Avancé',
    description: 'Maîtrisez les nouvelles fonctionnalités de React 18 et Concurrent Features.',
    duration: 32,
    level: 'Avancé',
    rating: 4.9,
    reviews: 1890,
    price: 199,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['React', 'JavaScript', 'Concurrent Features', 'Suspense']
  },
  {
    id: 'formation_3',
    title: 'Prompt Engineering Avancé',
    description: 'Optimisez vos interactions avec l\'IA pour maximiser la productivité.',
    duration: 18,
    level: 'Intermédiaire',
    rating: 4.7,
    reviews: 1567,
    price: 149,
    isIncluded: true,
    status: 'not_started',
    certification: false,
    skills: ['IA', 'Prompt Engineering', 'Productivité', 'Automatisation']
  },
  {
    id: 'formation_4',
    title: 'CI/CD avec GitHub Actions',
    description: 'Automatisez vos déploiements avec GitHub Actions.',
    duration: 20,
    level: 'Intermédiaire',
    rating: 4.6,
    reviews: 1234,
    price: 179,
    isIncluded: true,
    status: 'not_started',
    certification: true,
    skills: ['GitHub Actions', 'CI/CD', 'DevOps', 'Automatisation']
  }
]

// Mock Bootcamps
export const mockBootcamps: Bootcamp[] = [
  {
    id: 'bootcamp_1',
    title: 'API REST avec Node.js',
    startDate: '2024-10-15T09:00:00Z',
    duration: 5,
    spotsLeft: 12,
    maxSpots: 20,
    level: 'Intermédiaire',
    description: 'Builder une API complète en 5 jours intensifs',
    program: [
      'Jour 1 : Setup & Architecture',
      'Jour 2 : Routes & Middleware',
      'Jour 3 : Base de données',
      'Jour 4 : Authentification & Sécurité',
      'Jour 5 : Déploiement & Tests'
    ],
    prerequisites: ['JavaScript intermédiaire'],
    finalProject: 'API production-ready',
    isReserved: false
  },
  {
    id: 'bootcamp_2',
    title: 'DevOps avec AWS',
    startDate: '2024-10-22T09:00:00Z',
    duration: 7,
    spotsLeft: 8,
    maxSpots: 15,
    level: 'Avancé',
    description: 'Maîtrisez AWS pour le DevOps en une semaine',
    program: [
      'Jour 1-2 : Infrastructure AWS',
      'Jour 3-4 : Automatisation Terraform',
      'Jour 5-6 : Monitoring & Logs',
      'Jour 7 : Projet final'
    ],
    prerequisites: ['Docker', 'Linux', 'Networking'],
    finalProject: 'Infrastructure complète sur AWS',
    isReserved: true
  }
]

// Mock Reconversion Plan
export const mockReconversionPlan: ReconversionPlan = {
  id: 'plan_1',
  title: 'Transition vers DevOps Engineer',
  targetJob: 'DevOps Engineer',
  duration: 12,
  successProbability: 78,
  totalHours: 450,
  completedHours: 47,
  phases: [
    {
      title: 'Fondations (0-3 mois)',
      duration: '3 mois',
      skills: ['Docker', 'Kubernetes', 'CI/CD'],
      status: 'in_progress',
      progress: 23
    },
    {
      title: 'Spécialisation (3-6 mois)',
      duration: '3 mois',
      skills: ['Terraform', 'Monitoring', 'AWS'],
      status: 'upcoming',
      progress: 0
    },
    {
      title: 'Professionnalisation (6-12 mois)',
      duration: '6 mois',
      skills: ['Certifications', 'Portfolio', 'Networking'],
      status: 'upcoming',
      progress: 0
    }
  ],
  alternativeJobs: [
    {
      title: 'Site Reliability Engineer',
      similarity: 85,
      salary: 65000
    },
    {
      title: 'Cloud Architect',
      similarity: 72,
      salary: 75000
    },
    {
      title: 'Platform Engineer',
      similarity: 68,
      salary: 60000
    }
  ]
}

// Mock Sector Reports
export const mockSectorReports: SectorReport[] = [
  {
    id: 'report_1',
    title: 'Rapport Q4 2024 : Technologie & Digital',
    sector: 'Technologie & Digital',
    publishDate: '2024-10-04T00:00:00Z',
    pages: 42,
    readTime: 25,
    summary: 'Analyse complète du secteur technologique avec focus sur l\'impact de l\'IA.',
    content: [
      'État du marché et tendances',
      'Technologies émergentes impactantes',
      'Compétences les plus demandées',
      'Prévisions 2025-2027',
      'Opportunités de pivot'
    ],
    downloadUrl: '/reports/tech-digital-q4-2024.pdf'
  }
]

// Dashboard widgets data
export const dashboardWidgets = {
  protectionStatus: {
    plan: 'Bouclier',
    subscriptionDate: '2024-10-01',
    nextBilling: '2024-11-01',
    isActive: true
  },
  weeklyAlerts: mockAIAlerts.slice(0, 3),
  formationProgress: {
    current: 'Docker & Kubernetes Mastery',
    progress: 23,
    timeLeft: '2 mois 12 jours',
    nextCourse: 'Chapitre 4 : Services et Load Balancing'
  },
  recommendedActions: [
    {
      title: 'Compléter votre profil de compétences',
      progress: 70,
      priority: 'high'
    },
    {
      title: 'Réserver votre session de coaching mensuelle',
      progress: 0,
      priority: 'medium'
    },
    {
      title: 'Explorer les bootcamps disponibles',
      progress: 0,
      priority: 'low'
    }
  ]
}

