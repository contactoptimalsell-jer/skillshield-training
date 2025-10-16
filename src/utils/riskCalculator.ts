import { getJobRisk, getSectorRisk } from '../data/jobsDatabase';

// Interface pour les réponses du formulaire
export interface CalculatorAnswers {
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

// Interface pour le résultat du calcul
export interface RiskCalculationResult {
  score: number;
  level: 'low' | 'medium' | 'high' | 'critical';
  breakdown: {
    baseJob: number;
    taskAdjustment: number;
    digitalSkills: number;
    aiUsage: number;
    sector: number;
    market: number;
    environment: number;
    adaptability: number;
    demographics: number;
    regulation: number;
  };
  timeline: {
    immediate: string;
    oneYear: string;
    threeYears: string;
  };
  recommendations: string[];
  alternativeJobs: string[];
}

// Fonction principale de calcul du score de risque
export function calculateRiskScore(answers: CalculatorAnswers): RiskCalculationResult {
  // Base : Probabilité d'automatisation du métier (0-100)
  const jobData = getJobRisk(answers.job);
  let baseScore = jobData.automationProbability * 100;

  // Facteur 1 : Nature des tâches (-30 à +30 points)
  const taskScore = calculateTaskRisk(answers.tasks);
  baseScore += taskScore;

  // Facteur 2 : Compétences numériques (-20 à +10)
  const digitalScore = (5 - answers.digitalSkills) * 4; // Plus on maîtrise, moins de risque
  baseScore += digitalScore;

  // Facteur 3 : Utilisation actuelle IA (-15 à 0)
  const aiUsageBonus = getAiUsageBonus(answers.aiUsage);
  baseScore += aiUsageBonus;

  // Facteur 4 : Secteur d'activité (multiplicateur 0.75 à 1.35)
  const sectorData = getSectorRisk(answers.sector);
  baseScore *= sectorData.riskMultiplier;

  // Facteur 5 : Marché de l'emploi (-15 à +20)
  const marketScore = getMarketScore(answers.jobDemand);
  baseScore += marketScore;

  // Facteur 6 : Environnement de travail (-10 à +10)
  const environmentScore = getEnvironmentScore(answers);
  baseScore += environmentScore;

  // Facteur 7 : Adaptabilité (-20 à 0)
  const adaptabilityBonus = getAdaptabilityBonus(answers);
  baseScore += adaptabilityBonus;

  // Facteur 8 : Âge et mobilité (-10 à +15)
  const demographicsScore = getDemographicsScore(answers);
  baseScore += demographicsScore;

  // Facteur 9 : Régulation (-15 à 0)
  const regulationBonus = getRegulationBonus(answers.regulated);
  baseScore += regulationBonus;

  // Clamper entre 0 et 100
  const finalScore = Math.max(0, Math.min(100, Math.round(baseScore)));

  // Déterminer le niveau de risque
  const level = getRiskLevel(finalScore);

  // Générer la timeline
  const timeline = getTimeline(finalScore);

  // Générer les recommandations
  const recommendations = generateRecommendations(answers, finalScore);

  // Suggérer des métiers alternatifs
  const alternativeJobs = suggestAlternativeJobs(answers.job, finalScore);

  return {
    score: finalScore,
    level,
    breakdown: {
      baseJob: jobData.automationProbability * 100,
      taskAdjustment: taskScore,
      digitalSkills: digitalScore,
      aiUsage: aiUsageBonus,
      sector: (sectorData.riskMultiplier - 1) * 50, // Normaliser pour l'affichage
      market: marketScore,
      environment: environmentScore,
      adaptability: adaptabilityBonus,
      demographics: demographicsScore,
      regulation: regulationBonus
    },
    timeline,
    recommendations,
    alternativeJobs
  };
}

// Calcul du risque basé sur les tâches
function calculateTaskRisk(tasks: string[]): number {
  let risk = 0;
  
  // Tâches répétitives : +3 points par tâche
  const repetitiveTasks = tasks.filter(task => 
    task.includes('Saisie') || 
    task.includes('Traitement') || 
    task.includes('Réponses aux emails') ||
    task.includes('Création de rapports') ||
    task.includes('Suivi de commandes') ||
    task.includes('Traduction')
  );
  risk += repetitiveTasks.length * 3;

  // Tâches cognitives : +1 point par tâche
  const cognitiveTasks = tasks.filter(task => 
    task.includes('Analyse') || 
    task.includes('Rédaction') || 
    task.includes('Planification') ||
    task.includes('Recherche') ||
    task.includes('Calculs')
  );
  risk += cognitiveTasks.length * 1;

  // Tâches relationnelles : -2 points par tâche
  const relationalTasks = tasks.filter(task => 
    task.includes('Gestion d\'équipe') || 
    task.includes('Négociation') || 
    task.includes('Coaching') ||
    task.includes('Prise de décisions') ||
    task.includes('Résolution de conflits') ||
    task.includes('Brainstorming')
  );
  risk -= relationalTasks.length * 2;

  // Tâches créatives : -3 points par tâche
  const creativeTasks = tasks.filter(task => 
    task.includes('Design') || 
    task.includes('Innovation') || 
    task.includes('Stratégie créative') ||
    task.includes('Performance artistique')
  );
  risk -= creativeTasks.length * 3;

  return Math.max(-30, Math.min(30, risk));
}

// Bonus pour l'utilisation d'IA
function getAiUsageBonus(aiUsage: string): number {
  switch (aiUsage) {
    case 'intensément': return -15;
    case 'régulièrement': return -10;
    case 'occasionnellement': return -5;
    case 'rarement': return -2;
    default: return 0;
  }
}

// Score du marché de l'emploi
function getMarketScore(jobDemand: string): number {
  switch (jobDemand) {
    case 'décroissante': return 20;
    case 'stable': return 5;
    case 'croissance': return -10;
    case 'forte-croissance': return -15;
    default: return 0;
  }
}

// Score de l'environnement de travail
function getEnvironmentScore(answers: CalculatorAnswers): number {
  let score = 0;
  
  // Mode de travail
  switch (answers.workMode) {
    case '100%-remote': score += 10; break;
    case 'hybride': score += 5; break;
    case 'principalement-télétravail': score += 8; break;
  }
  
  // Exigences physiques (réduit le risque)
  if (answers.requiresPhysical && answers.requiresPhysical.length > 0) {
    score -= 10;
  }
  
  return score;
}

// Bonus d'adaptabilité
function getAdaptabilityBonus(answers: CalculatorAnswers): number {
  let bonus = 0;
  
  // Volonté de reconversion
  bonus += (answers.reconversionWillingness - 1) * -5;
  
  // Formation récente
  if (answers.recentTraining === 'oui') {
    bonus -= 10;
  }
  
  return bonus;
}

// Score démographique
function getDemographicsScore(answers: CalculatorAnswers): number {
  let score = 0;
  
  // Âge
  switch (answers.age) {
    case '55-64':
    case '65+':
      score += 15;
      break;
    case '45-54':
      score += 10;
      break;
    case '35-44':
      score += 5;
      break;
  }
  
  // Mobilité
  switch (answers.mobility) {
    case 'très-mobile':
      score -= 10;
      break;
    case 'mobile-régionalement':
      score -= 5;
      break;
  }
  
  return score;
}

// Bonus de régulation
function getRegulationBonus(regulated: string): number {
  switch (regulated) {
    case 'fortement': return -15;
    case 'partiellement': return -8;
    default: return 0;
  }
}

// Déterminer le niveau de risque
function getRiskLevel(score: number): 'low' | 'medium' | 'high' | 'critical' {
  if (score < 30) return 'low';
  if (score < 50) return 'medium';
  if (score < 70) return 'high';
  return 'critical';
}

// Générer la timeline prédictive
function getTimeline(score: number) {
  if (score < 30) {
    return {
      immediate: "Stable",
      oneYear: "Stable",
      threeYears: "Légère évolution"
    };
  } else if (score < 50) {
    return {
      immediate: "Stable",
      oneYear: "Changements mineurs",
      threeYears: "Adaptation nécessaire"
    };
  } else if (score < 70) {
    return {
      immediate: "Premiers signaux",
      oneYear: "Impact notable",
      threeYears: "Transformation majeure"
    };
  } else {
    return {
      immediate: "Déjà en cours",
      oneYear: "Impact fort",
      threeYears: "Remplacement probable"
    };
  }
}

// Générer des recommandations personnalisées
function generateRecommendations(answers: CalculatorAnswers, score: number): string[] {
  const recommendations = [];

  // Recommandation 1 : Urgence selon score
  if (score >= 70) {
    recommendations.push("Reconversion immédiate recommandée - Explorez les métiers AI-proof dans votre secteur");
    recommendations.push("Commencez une formation dès maintenant - Ne perdez pas de temps");
    recommendations.push("Mettez à jour votre CV avec des compétences transférables");
  } else if (score >= 50) {
    recommendations.push("Anticipez les changements en vous formant dès maintenant");
    recommendations.push("Maîtrisez les outils IA de votre secteur");
    recommendations.push("Développez des compétences complémentaires");
  } else {
    recommendations.push("Maintenez votre avantage en continuant à vous former");
    recommendations.push("Suivez les tendances IA dans votre domaine");
    recommendations.push("Renforcez vos compétences uniques");
  }

  // Recommandation 2 : Compétences numériques
  if (answers.digitalSkills < 3) {
    recommendations.push("Formation urgente en compétences numériques requise");
  }

  // Recommandation 3 : Adaptabilité
  if (answers.reconversionWillingness < 3) {
    recommendations.push("Cultivez votre adaptabilité et ouverture au changement");
  }

  return recommendations.slice(0, 5); // Max 5 recommandations
}

// Suggérer des métiers alternatifs
function suggestAlternativeJobs(currentJob: string, _score: number): string[] {
  // Métiers AI-proof par catégorie
  const aiProofJobs = {
    tech: ['Product Manager', 'UX Researcher', 'DevOps Engineer', 'Cybersecurity Specialist'],
    creative: ['Creative Director', 'Brand Strategist', 'Content Creator', 'Art Director'],
    healthcare: ['Physician', 'Nurse', 'Physical Therapist', 'Mental Health Counselor'],
    education: ['Teacher', 'Educational Designer', 'Training Specialist', 'Curriculum Developer'],
    business: ['Business Consultant', 'Strategy Consultant', 'Executive Coach', 'Change Management Specialist'],
    services: ['Event Planner', 'Personal Trainer', 'Life Coach', 'Real Estate Agent']
  };

  // Métiers par secteur
  const sectorJobs: { [key: string]: string[] } = {
    'technologie': aiProofJobs.tech,
    'création': aiProofJobs.creative,
    'santé': aiProofJobs.healthcare,
    'éducation': aiProofJobs.education,
    'services': aiProofJobs.business
  };

  // Retourner des suggestions basées sur le secteur actuel
  const suggestions = sectorJobs[currentJob] || aiProofJobs.tech;
  return suggestions.slice(0, 3);
}

// Fonction utilitaire pour formater les résultats
export function formatRiskLevel(level: string): { label: string; color: string; icon: string } {
  const levels: { [key: string]: { label: string; color: string; icon: string } } = {
    low: { label: "Faible Risque", color: "green", icon: "Shield" },
    medium: { label: "Risque Modéré", color: "blue", icon: "AlertCircle" },
    high: { label: "Risque Élevé", color: "orange", icon: "AlertTriangle" },
    critical: { label: "Risque Critique", color: "red", icon: "XCircle" }
  };
  
  return levels[level] || levels.medium;
}

// Fonction pour obtenir la couleur du score
export function getScoreColor(score: number): string {
  if (score < 30) return '#10B981'; // Vert
  if (score < 50) return '#3B82F6'; // Bleu
  if (score < 70) return '#F59E0B'; // Orange
  return '#EF4444'; // Rouge
}
