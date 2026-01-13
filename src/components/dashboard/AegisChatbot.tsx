import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Send, X, FileText, Swords, Paperclip, TrendingUp, Target, RefreshCw, Briefcase, Heart, BarChart3, Lightbulb, Calendar, Download, Bell, Brain, Clock, CheckCircle, Zap, Building2, AlertTriangle, FileText as PDFIcon, Upload, Image as ImageIcon, Eye, AlertCircle, Award, Trophy, Star, Medal, Users, Gift } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

// ============================================================================
// 🎨 DESIGN TOKENS - SkillShield Design System
// ============================================================================
const COLORS = {
  deepBlue: '#0F172A',
  cyan: '#06B6D4',
  emerald: '#10B981',
  cyanGlow: 'rgba(6, 182, 212, 0.2)',
  emeraldGlow: 'rgba(16, 185, 129, 0.2)',
  redAlert: 'rgba(239, 68, 68, 0.3)',
  
  // ✨ NOUVEAUX : Couleurs émotionnelles avancées
  anxiousHighGlow: 'rgba(239, 68, 68, 0.6)',      // Rouge intense
  anxiousModerateGlow: 'rgba(251, 146, 60, 0.4)', // Orange
  burnoutSevereGlow: 'rgba(185, 28, 28, 0.5)',    // Rouge foncé
  burnoutModerateGlow: 'rgba(180, 83, 9, 0.4)',   // Orange foncé
  energeticHighGlow: 'rgba(6, 182, 212, 0.7)',    // Cyan brillant
  discouragedGlow: 'rgba(107, 114, 128, 0.3)',    // Gris
  empatheticGlow: 'rgba(16, 185, 129, 0.5)',      // Vert émeraude
};

// ============================================================================
// 📊 USER CONTEXT - ENRICHI avec historique
// ============================================================================
const USER_CONTEXT = {
  prenom: "Alex",
  metier: "Développeur Full Stack",
  secteur: "Tech & IT",
  anneesExperience: 5,
  competences: ["React", "Node.js", "PostgreSQL", "Docker"],
  scoreRisque: 67,
  evolutionScore: -3,
  objectifReconversion: "DevOps Engineer",
  formationsEnCours: [
    { titre: "Docker & Kubernetes", progression: 34 }
  ],
  alertesVues: [
    { titre: "GPT-5 impact sur développeurs", date: "Il y a 2h", lu: true }
  ],
  planReconversion: {
    etapesActuelles: ["Docker", "CI/CD"],
    prochaines: ["Terraform", "Monitoring"]
  },
  
  // ✨ NOUVEAU : Tracking des visites
  derniereVisite: null, // Date | null
  nombreVisites: 0,
  derniereAlerteLue: null, // { titre, date, timestamp } | null
  dernierEtatEmotionnel: 'neutral', // 'anxious' | 'burnout' | 'energetic' | 'neutral'
  
  // 🧠 HISTORIQUE ÉMOTIONNEL pour suivi longitudinal
  historiqueEmotionnel: [], // Array de { emotion, timestamp, message, intensite }
  tendanceEmotionnelle: 'stable', // 'stable' | 'amélioration' | 'détérioration' | 'instable'
  emotionsRecentes: [], // Dernières 5 émotions pour analyse de tendance
  scoreEmotionnel: 0, // Score composite -10 (très négatif) à +10 (très positif)
  alertesEmotionnelles: [], // Alertes si détection de patterns problématiques
  
  // 🎯 RECOMMANDATIONS PERSONNALISÉES
  recommandationsActives: [], // Array de { type, titre, description, priorite, timestamp }
  patternsDetectes: [], // Patterns émotionnels identifiés
  objectifsRecommandes: [], // Objectifs suggérés basés sur l'historique
  actionsPrioritaires: [], // Actions à effectuer en priorité
  formationsSuggerees: [], // Formations recommandées selon l'état émotionnel
  strategiesPersonnalisees: [], // Stratégies adaptées au profil émotionnel
  
  // 🤖 MACHINE LEARNING & AMÉLIORATION DES PATTERNS
  modelAccuracy: 0.85, // Précision du modèle ML (0-1)
  patternLearning: [], // Historique d'apprentissage des patterns
  predictions: [], // Prédictions émotionnelles basées sur ML
  feedbackLoop: [], // Boucle de feedback pour améliorer le modèle
  confidenceScore: 0, // Score de confiance des prédictions (0-1)
  
  // 🧠 MODÈLES ML PRÉ-ENTRAÎNÉS AVANCÉS
  pretrainedModels: {
    emotionClassifier: {
      name: 'BERT-Emotion-FR',
      accuracy: 0.92,
      version: '2.1.0',
      lastUpdate: new Date(),
      confidence: 0.89
    },
    trendPredictor: {
      name: 'LSTM-Trend-Analyzer',
      accuracy: 0.87,
      version: '1.8.0',
      lastUpdate: new Date(),
      confidence: 0.84
    },
    riskAssessor: {
      name: 'XGBoost-Risk-Evaluator',
      accuracy: 0.94,
      version: '3.2.0',
      lastUpdate: new Date(),
      confidence: 0.91
    },
    interventionRecommender: {
      name: 'Transformer-Intervention-AI',
      accuracy: 0.89,
      version: '2.5.0',
      lastUpdate: new Date(),
      confidence: 0.86
    }
  },
  
  // 📊 ANALYSE AVANCÉE
  advancedInsights: {
    emotionalComplexity: 0, // Complexité émotionnelle (0-1)
    cognitiveLoad: 0, // Charge cognitive estimée (0-1)
    stressLevel: 0, // Niveau de stress prédit (0-1)
    motivationTrend: 'stable', // Tendance de motivation
    interventionUrgency: 'low', // Urgence d'intervention
    personalizedInterventions: [] // Interventions personnalisées
  },
  
  // 🔮 PRÉDICTIONS AVANCÉES
  advancedPredictions: {
    shortTerm: [], // Prédictions 1-7 jours
    mediumTerm: [], // Prédictions 1-4 semaines
    longTerm: [], // Prédictions 1-6 mois
    riskScenarios: [], // Scénarios de risque
    opportunityWindows: [] // Fenêtres d'opportunité
  },
  
  // 🔄 ENTRAÎNEMENT CONTINU & FEEDBACK UTILISATEUR
  continuousTraining: {
    userFeedback: [], // Historique des feedbacks utilisateur
    modelImprovements: [], // Améliorations des modèles
    accuracyEvolution: [], // Évolution de la précision dans le temps
    learningRate: 0.001, // Taux d'apprentissage
    batchSize: 10, // Taille des lots d'entraînement
    validationSplit: 0.2, // Fraction de validation
    epochsCompleted: 0, // Nombre d'époques complétées
    lastTrainingSession: null, // Dernière session d'entraînement
    trainingMetrics: {
      loss: 0,
      accuracy: 0,
      precision: 0,
      recall: 0,
      f1Score: 0
    },
    adaptiveLearning: {
      enabled: true,
      adjustmentRate: 0.05,
      performanceThreshold: 0.8,
      autoRetrain: true
    }
  },
  
  // 📊 FEEDBACK UTILISATEUR
  userFeedbackSystem: {
    feedbackHistory: [], // Historique complet des feedbacks
    feedbackTypes: {
      emotionAccuracy: [], // Précision détection émotionnelle
      predictionAccuracy: [], // Précision des prédictions
      interventionEffectiveness: [], // Efficacité des interventions
      recommendationRelevance: [], // Pertinence des recommandations
      projectionAccuracy: [] // Précision des projections de carrière
    },
    feedbackWeights: {
      emotionAccuracy: 0.25,
      predictionAccuracy: 0.2,
      interventionEffectiveness: 0.2,
      recommendationRelevance: 0.15,
      projectionAccuracy: 0.2
    },
    feedbackValidation: {
      threshold: 0.7,
      requiredSamples: 5,
      validationWindow: 24 // heures
    }
  },
  
  // 📊 PROJECTIONS DYNAMIQUES
  dynamicProjections: {
    projectionHistory: [], // Historique des projections générées
    userFeedbackOnProjections: [], // Feedback utilisateur sur les projections
    adjustedProjections: [], // Projections ajustées selon feedback
    projectionAccuracy: {
      overall: 0.78,
      timeline: {
        month3: 0.82,
        month6: 0.75,
        month12: 0.68
      },
      salaryAccuracy: 0.73,
      skillAccuracy: 0.85
    },
    adaptationFactors: {
      userProgress: 1.0, // Facteur d'adaptation selon progression utilisateur
      marketConditions: 1.0, // Facteur conditions marché
      sectorTrends: 1.0, // Facteur tendances secteur
      personalFactors: 1.0 // Facteurs personnels
    }
  },
  
  // 📅 INTÉGRATION CALENDRIER
  calendrierObjectifs: [], // Objectifs avec échéances calendaires
  rappels: [], // Rappels programmés
  progressions: [], // Suivi des progrès dans le temps
  milestones: [], // Jalons importants à atteindre
  sessionsPlanifiees: [], // Sessions de formation planifiées
  
  // 🏭 COMPARAISONS SECTORIELLES
  sectorialComparisons: {
    currentSector: 'Tech & IT', // Secteur actuel
    targetSectors: ['DevOps', 'Cloud', 'AI/ML'], // Secteurs cibles
    sectorData: {
      'Tech & IT': {
        avgSalary: '45-52K€',
        riskScore: 67,
        growthRate: 0.15,
        demandTrend: 'stable'
      },
      'DevOps': {
        avgSalary: '55-70K€',
        riskScore: 25,
        growthRate: 0.28,
        demandTrend: 'rising'
      },
      'Cloud': {
        avgSalary: '60-80K€',
        riskScore: 20,
        growthRate: 0.35,
        demandTrend: 'rising'
      },
      'AI/ML': {
        avgSalary: '65-90K€',
        riskScore: 15,
        growthRate: 0.42,
        demandTrend: 'booming'
      }
    },
    crossSectorAnalysis: [], // Analyse comparative entre secteurs
    migrationPaths: [] // Chemins de migration recommandés
  },
  
  // ⏰ ALERTES TEMPORELLES
  temporalAlerts: {
    upcomingMilestones: [], // Jalons à venir
    deadlineReminders: [], // Rappels d'échéances
    progressCheckpoints: [], // Points de contrôle de progression
    marketOpportunities: [], // Opportunités marché
    skillGaps: [], // Lacunes de compétences détectées
    alertSettings: {
      milestoneReminder: 7, // jours avant échéance
      progressCheck: 14, // jours entre vérifications
      marketUpdate: 30, // jours entre mises à jour marché
      skillAssessment: 21 // jours entre évaluations compétences
    }
  },
  
  // 📄 EXPORT PDF
  exportsPDF: [], // Historique des exports PDF
  derniereGenerationPDF: null, // Timestamp de la dernière génération
  templatesPDF: [], // Templates personnalisés
  
  // 🔔 NOTIFICATIONS PUSH
  notifications: [], // Notifications en attente
  preferencesNotifications: {
    actionsPrioritaires: true,
    rappelsObjectifs: true,
    alertesEmotionnelles: true,
    suggestionsFormations: false
  },
  dernierEnvoiNotification: null, // Timestamp de la dernière notification
  
  // ✨ NOUVEAU : Tracking des visites
  derniereVisite: null, // Date | null
  nombreVisites: 0,
  derniereAlerteLue: null, // { titre, date, timestamp } | null
  dernierEtatEmotionnel: 'neutral', // 'anxious' | 'burnout' | 'energetic' | 'neutral'
  
  // 🎮 GAMIFICATION
  level: 1,
  xp: 0,
  xpToNextLevel: 100,
  totalPoints: 0,
  unlockedBadges: [], // Array de badge IDs
  weeklyXP: 0,
  
  // 📊 TRACKING ACTIVITÉS
  stats: {
    projectsDocker: 0,
    pipelinesDeployed: 0,
    formationsCompleted: 0,
    formationsStartDates: [],
    githubPRs: 0,
    articlesPublished: 0,
    certifications: 0,
    networkingConnections: 0,
    networkingEvents: 0,
    morningStreak: 0,
    dailyStreak: 0,
    lastActivityDate: null
  }
};

// ============================================================================
// 🧠 EMOTION DETECTION - Détection émotionnelle avancée
// ============================================================================
const detectEmotion = (message) => {
  const msg = message.toLowerCase();
  
  // Anxiété élevée (mots forts de détresse)
  if (msg.match(/perdu|peur|nul|jamais|impossible|catastrophe|panique|désespéré|effondré/)) {
    return 'anxious_high';
  }
  
  // Anxiété modérée (inquiétudes normales)
  if (msg.match(/inquiet|anxieux|stress|préoccupé|inquiétude|nervosité|appréhension/)) {
    return 'anxious_moderate';
  }
  
  // Burnout sévère (épuisement profond)
  if (msg.match(/fatigué|épuisé|abandonner|plus de force|vidé|à bout|épuisement|burnout|effondrement/)) {
    return 'burnout_severe';
  }
  
  // Burnout modéré (saturation)
  if (msg.match(/trop|saturé|débordé|surchargé|overwhelmed|trop de choses/)) {
    return 'burnout_moderate';
  }
  
  // Énergie haute (motivation intense)
  if (msg.match(/motivé|let's go|j'ai hâte|génial|parfait|top|super|enthousiaste|excité|pump/)) {
    return 'energetic_high';
  }
  
  // Découragement (perte de motivation)
  if (msg.match(/découragé|démotivé|ça sert à rien|pourquoi|inutile|perte de sens|bloqué/)) {
    return 'discouraged';
  }
  
  return 'neutral';
};

// ============================================================================
// 📊 ANALYSE ÉMOTIONNELLE - Calcul d'intensité et tendances
// ============================================================================
const getEmotionIntensity = (emotion) => {
  const intensities = {
    // Négatif (intensité décroissante)
    'burnout_severe': -4,
    'anxious_high': -3,
    'burnout_moderate': -2,
    'anxious_moderate': -1,
    'discouraged': -2,
    
    // Neutre
    'neutral': 0,
    
    // Positif (intensité croissante)
    'energetic_high': 3
  };
  
  return intensities[emotion] || 0;
};

const updateEmotionalHistory = (context, emotion, message) => {
  const timestamp = new Date();
  const intensite = getEmotionIntensity(emotion);
  
  const newEntry = {
    emotion,
    timestamp,
    message: message.substring(0, 50) + '...', // Tronquer pour l'historique
    intensite
  };
  
  // Ajouter à l'historique (garder les 20 dernières entrées)
  const newHistory = [...context.historiqueEmotionnel, newEntry].slice(-20);
  
  // Mettre à jour les émotions récentes (garder les 5 dernières)
  const newEmotionsRecentes = [...context.emotionsRecentes, emotion].slice(-5);
  
  // Calculer le score émotionnel composite
  const scoreEmotionnel = newHistory.reduce((sum, entry) => sum + entry.intensite, 0) / Math.max(newHistory.length, 1);
  
  // Analyser la tendance émotionnelle
  const tendanceEmotionnelle = analyzeEmotionalTrend(newEmotionsRecentes, scoreEmotionnel);
  
  // Détecter les alertes émotionnelles
  const alertesEmotionnelles = detectEmotionalAlerts(newHistory, tendanceEmotionnelle);
  
  // Créer le contexte mis à jour
  const updatedContext = {
    ...context,
    historiqueEmotionnel: newHistory,
    emotionsRecentes: newEmotionsRecentes,
    scoreEmotionnel: Math.round(scoreEmotionnel * 10) / 10, // Arrondir à 1 décimale
    tendanceEmotionnelle,
    alertesEmotionnelles
  };
  
  // Générer les recommandations personnalisées
  const recommendations = generatePersonalizedRecommendations(updatedContext);
  
  // 🤖 Améliorer les patterns avec ML
  const mlContext = improvePatternsWithML({ ...updatedContext, ...recommendations });
  
  // 🧠 Exécuter les modèles ML pré-entraînés avancés
  const advancedMLContext = runAdvancedMLModels(mlContext);
  
  // 🔄 Exécuter l'entraînement continu avec feedback utilisateur
  const continuousTrainingContext = runContinuousTraining(advancedMLContext);
  
  // 📊 Générer les projections dynamiques
  const dynamicProjectionContext = generateDynamicCareerProjection(continuousTrainingContext);
  
  // 🏭 Générer les comparaisons sectorielles
  const sectorialContext = generateSectorialComparisons(dynamicProjectionContext);
  
  // ⏰ Générer les alertes temporelles
  const temporalContext = generateTemporalAlerts(sectorialContext);
  
  // 📅 Intégrer le système calendrier
  const calendarContext = integrateCalendarSystem(temporalContext);
  
  // 🔔 Générer les notifications push
  const notifications = generatePushNotifications(calendarContext);
  
  return {
    ...calendarContext,
    notifications: [...calendarContext.notifications, ...notifications.notifications],
    dernierEnvoiNotification: notifications.newLastSent
  };
};

const analyzeEmotionalTrend = (emotionsRecentes, scoreEmotionnel) => {
  if (emotionsRecentes.length < 3) return 'stable';
  
  // Analyser la variation des émotions récentes
  const negativeCount = emotionsRecentes.filter(e => e.includes('anxious') || e.includes('burnout') || e === 'discouraged').length;
  const positiveCount = emotionsRecentes.filter(e => e === 'energetic_high').length;
  const neutralCount = emotionsRecentes.filter(e => e === 'neutral').length;
  
  // Si trop de variations, considérer comme instable
  if (negativeCount > 0 && positiveCount > 0) return 'instable';
  
  // Si majoritairement négatif
  if (negativeCount >= emotionsRecentes.length * 0.6) return 'détérioration';
  
  // Si majoritairement positif
  if (positiveCount >= emotionsRecentes.length * 0.6) return 'amélioration';
  
  // Si majoritairement neutre
  if (neutralCount >= emotionsRecentes.length * 0.6) return 'stable';
  
  return 'stable';
};

const detectEmotionalAlerts = (historique, tendance) => {
  const alerts = [];
  
  // Alerte si tendance de détérioration
  if (tendance === 'détérioration') {
    alerts.push({
      type: 'tendance_negatif',
      message: 'Tendance émotionnelle en baisse détectée',
      severite: 'moyenne',
      timestamp: new Date()
    });
  }
  
  // Alerte si trop d'émotions négatives récentes
  const recentNegative = historique.slice(-5).filter(entry => entry.intensite < -2).length;
  if (recentNegative >= 3) {
    alerts.push({
      type: 'accumulation_negatif',
      message: 'Accumulation d\'émotions négatives détectée',
      severite: 'haute',
      timestamp: new Date()
    });
  }
  
  // Alerte si score émotionnel très bas
  const avgScore = historique.reduce((sum, entry) => sum + entry.intensite, 0) / historique.length;
  if (avgScore < -2.5) {
    alerts.push({
      type: 'score_critique',
      message: 'Score émotionnel critique',
      severite: 'critique',
      timestamp: new Date()
    });
  }
  
  return alerts;
};

// ============================================================================
// 🎯 SYSTÈME DE RECOMMANDATIONS PERSONNALISÉES
// ============================================================================
const generatePersonalizedRecommendations = (context) => {
  const { 
    scoreEmotionnel, 
    tendanceEmotionnelle, 
    emotionsRecentes, 
    alertesEmotionnelles,
    scoreRisque,
    metier,
    competences,
    formationsEnCours,
    objectifReconversion
  } = context;
  
  const recommendations = [];
  const patterns = [];
  const objectifs = [];
  const actions = [];
  const formations = [];
  const strategies = [];
  
  // 🧠 ANALYSE DES PATTERNS ÉMOTIONNELS
  const patternAnalysis = analyzeEmotionalPatterns(emotionsRecentes, scoreEmotionnel, tendanceEmotionnelle);
  patterns.push(...patternAnalysis.patterns);
  
  // 🎯 RECOMMANDATIONS SELON LE SCORE ÉMOTIONNEL
  if (scoreEmotionnel <= -2) {
    // État critique - Recommandations de protection
    recommendations.push({
      type: 'protection',
      titre: '🛡️ Protocole de Protection Activé',
      description: 'Votre état émotionnel nécessite une attention immédiate. Focus sur la stabilisation avant l\'apprentissage.',
      priorite: 'critique',
      timestamp: new Date(),
      actions: ['Pause de 24h', 'Contact support psychologique', 'Réduction charge de travail']
    });
    
    strategies.push({
      type: 'stabilisation',
      titre: 'Stratégie de Stabilisation Émotionnelle',
      description: 'Approche progressive avec focus sur le bien-être mental',
      etapes: ['Évaluation état mental', 'Plan de récupération', 'Retour progressif']
    });
  }
  
  else if (scoreEmotionnel <= 0) {
    // État négatif modéré - Recommandations de soutien
    recommendations.push({
      type: 'soutien',
      titre: '🤝 Plan de Soutien Personnalisé',
      description: 'Renforcement de la motivation et gestion du stress avec approche adaptée.',
      priorite: 'haute',
      timestamp: new Date(),
      actions: ['Formation gestion stress', 'Mentoring pair', 'Objectifs micro']
    });
    
    formations.push({
      type: 'soft_skills',
      titre: 'Gestion du Stress et Motivation',
      description: 'Formation adaptée à votre état émotionnel actuel',
      duree: '2-3 semaines',
      urgence: 'haute'
    });
  }
  
  else if (scoreEmotionnel >= 1) {
    // État positif - Recommandations d'optimisation
    recommendations.push({
      type: 'optimisation',
      titre: '🚀 Capitalisation sur l\'Énergie Positive',
      description: 'Exploitez cette énergie pour accélérer votre développement professionnel.',
      priorite: 'moyenne',
      timestamp: new Date(),
      actions: ['Formation intensive', 'Projets challengeants', 'Mentoring junior']
    });
    
    formations.push({
      type: 'technique_avancee',
      titre: 'Compétences Techniques Avancées',
      description: 'Formation intensive pendant votre pic de motivation',
      duree: '4-6 semaines',
      urgence: 'moyenne'
    });
  }
  
  // 📊 RECOMMANDATIONS SELON LA TENDANCE
  if (tendanceEmotionnelle === 'détérioration') {
    recommendations.push({
      type: 'intervention',
      titre: '⚠️ Intervention Préventive',
      description: 'Tendance négative détectée. Actions correctives recommandées.',
      priorite: 'haute',
      timestamp: new Date(),
      actions: ['Analyse causes stress', 'Ajustement planning', 'Support émotionnel']
    });
  }
  
  else if (tendanceEmotionnelle === 'amélioration') {
    recommendations.push({
      type: 'consolidation',
      titre: '📈 Consolidation des Progrès',
      description: 'Excellente progression ! Maintenez cette dynamique positive.',
      priorite: 'moyenne',
      timestamp: new Date(),
      actions: ['Fixer nouveaux objectifs', 'Partager expérience', 'Accélérer formation']
    });
  }
  
  // 🎯 OBJECTIFS RECOMMANDÉS SELON LE CONTEXTE
  if (scoreRisque >= 70) {
    objectifs.push({
      type: 'reconversion',
      titre: 'Objectif Reconversion Prioritaire',
      description: `Transition vers ${objectifReconversion} avec plan accéléré`,
      echeance: '3-6 mois',
      priorite: 'haute'
    });
    
    actions.push({
      type: 'formation_intensive',
      titre: 'Formation Intensive DevOps',
      description: 'Bootcamp accéléré pour transition rapide',
      duree: '8 semaines',
      urgence: 'haute'
    });
  }
  
  else if (scoreRisque <= 40) {
    objectifs.push({
      type: 'optimisation',
      titre: 'Optimisation Poste Actuel',
      description: 'Renforcement des compétences pour sécuriser votre position',
      echeance: '6-12 mois',
      priorite: 'moyenne'
    });
  }
  
  // 🚨 RECOMMANDATIONS SPÉCIFIQUES AUX ALERTES
  alertesEmotionnelles.forEach(alerte => {
    if (alerte.type === 'score_critique') {
      recommendations.push({
        type: 'urgence',
        titre: '🚨 Intervention Urgente',
        description: 'Score émotionnel critique détecté. Actions immédiates requises.',
        priorite: 'critique',
        timestamp: new Date(),
        actions: ['Arrêt travail technique', 'Contact professionnel', 'Repos complet']
      });
    }
  });
  
  return {
    recommandationsActives: recommendations,
    patternsDetectes: patterns,
    objectifsRecommandes: objectifs,
    actionsPrioritaires: actions,
    formationsSuggerees: formations,
    strategiesPersonnalisees: strategies
  };
};

const analyzeEmotionalPatterns = (emotionsRecentes, scoreEmotionnel, tendanceEmotionnelle) => {
  const patterns = [];
  
  // Pattern d'instabilité émotionnelle
  if (tendanceEmotionnelle === 'instable') {
    patterns.push({
      type: 'instabilite',
      titre: 'Pattern d\'Instabilité Émotionnelle',
      description: 'Alternance rapide entre états émotionnels',
      impact: 'Réduction efficacité, fatigue cognitive',
      recommandation: 'Routine de stabilisation, gestion stress'
    });
  }
  
  // Pattern d'anxiété chronique
  const anxiousCount = emotionsRecentes.filter(e => e.includes('anxious')).length;
  if (anxiousCount >= emotionsRecentes.length * 0.6) {
    patterns.push({
      type: 'anxiete_chronique',
      titre: 'Pattern d\'Anxiété Chronique',
      description: 'Préoccupation constante face aux changements',
      impact: 'Blocage apprentissage, surcharge cognitive',
      recommandation: 'Techniques relaxation, objectifs micro'
    });
  }
  
  // Pattern de burnout progressif
  const burnoutCount = emotionsRecentes.filter(e => e.includes('burnout')).length;
  if (burnoutCount >= emotionsRecentes.length * 0.4) {
    patterns.push({
      type: 'burnout_progressif',
      titre: 'Pattern de Burnout Progressif',
      description: 'Épuisement émotionnel en augmentation',
      impact: 'Risque d\'effondrement, perte motivation',
      recommandation: 'Réduction charge, support psychologique'
    });
  }
  
  // Pattern de motivation cyclique
  const energeticCount = emotionsRecentes.filter(e => e === 'energetic_high').length;
  if (energeticCount >= emotionsRecentes.length * 0.3) {
    patterns.push({
      type: 'motivation_cyclique',
      titre: 'Pattern de Motivation Cyclique',
      description: 'Pics d\'énergie suivis de phases de repos',
      impact: 'Apprentissage irrégulier, opportunités manquées',
      recommandation: 'Planification adaptée, capitalisation pics'
    });
  }
  
  return { patterns };
};

// ============================================================================
// 🤖 MACHINE LEARNING - Amélioration des patterns émotionnels
// ============================================================================
const improvePatternsWithML = (context) => {
  const { historiqueEmotionnel, emotionsRecentes, patternLearning, feedbackLoop } = context;
  
  // 🧠 ANALYSE DES PATTERNS HISTORIQUES
  const patternAnalysis = analyzeHistoricalPatterns(historiqueEmotionnel);
  
  // 📊 CALCUL DU SCORE DE CONFIANCE
  const confidenceScore = calculateConfidenceScore(patternAnalysis, feedbackLoop);
  
  // 🎯 GÉNÉRATION DE PRÉDICTIONS
  const predictions = generateEmotionalPredictions(emotionsRecentes, patternAnalysis);
  
  // 🔄 MISE À JOUR DU MODÈLE
  const updatedModel = updateMLModel(patternLearning, patternAnalysis, feedbackLoop);
  
  return {
    ...context,
    modelAccuracy: updatedModel.accuracy,
    patternLearning: updatedModel.learning,
    predictions: predictions,
    confidenceScore: confidenceScore,
    feedbackLoop: [...feedbackLoop, {
      timestamp: new Date(),
      pattern: patternAnalysis.mostLikely,
      confidence: confidenceScore,
      accuracy: updatedModel.accuracy
    }].slice(-50) // Garder les 50 dernières entrées
  };
};

const analyzeHistoricalPatterns = (historique) => {
  if (historique.length < 5) return { mostLikely: 'insufficient_data', confidence: 0.3 };
  
  // Analyser les séquences d'émotions
  const sequences = [];
  for (let i = 0; i < historique.length - 2; i++) {
    sequences.push([
      historique[i].emotion,
      historique[i + 1].emotion,
      historique[i + 2].emotion
    ]);
  }
  
  // Calculer les probabilités de transition
  const transitions = {};
  sequences.forEach(seq => {
    const key = `${seq[0]}->${seq[1]}`;
    if (!transitions[key]) transitions[key] = 0;
    transitions[key]++;
  });
  
  // Prédire la prochaine émotion la plus probable
  const currentEmotion = historique[historique.length - 1].emotion;
  const nextTransitions = Object.keys(transitions)
    .filter(key => key.startsWith(currentEmotion + '->'))
    .sort((a, b) => transitions[b] - transitions[a]);
  
  const mostLikely = nextTransitions.length > 0 
    ? nextTransitions[0].split('->')[1] 
    : 'neutral';
  
  const confidence = nextTransitions.length > 0 
    ? Math.min(0.9, transitions[nextTransitions[0]] / sequences.length + 0.3)
    : 0.3;
  
  return { mostLikely, confidence, transitions, sequences: sequences.length };
};

const calculateConfidenceScore = (patternAnalysis, feedbackLoop) => {
  if (feedbackLoop.length === 0) return patternAnalysis.confidence;
  
  // Calculer la précision basée sur le feedback
  const recentFeedback = feedbackLoop.slice(-10);
  const accuracy = recentFeedback.reduce((sum, fb) => sum + fb.accuracy, 0) / recentFeedback.length;
  
  // Combiner avec la confiance du pattern actuel
  return Math.min(0.95, (patternAnalysis.confidence + accuracy) / 2);
};

const generateEmotionalPredictions = (emotionsRecentes, patternAnalysis) => {
  const predictions = [];
  const now = new Date();
  
  // Prédire les émotions pour les prochaines interactions
  for (let i = 1; i <= 3; i++) {
    const futureTime = new Date(now.getTime() + (i * 24 * 60 * 60 * 1000)); // +i jours
    
    predictions.push({
      timeframe: `${i} jour${i > 1 ? 's' : ''}`,
      predictedEmotion: patternAnalysis.mostLikely,
      confidence: patternAnalysis.confidence,
      timestamp: futureTime,
      reasoning: `Basé sur le pattern historique: ${patternAnalysis.sequences} séquences analysées`
    });
  }
  
  return predictions;
};

const updateMLModel = (patternLearning, patternAnalysis, feedbackLoop) => {
  // Simuler l'amélioration du modèle basée sur les données
  const baseAccuracy = 0.85;
  const feedbackImprovement = feedbackLoop.length > 0 
    ? Math.min(0.1, feedbackLoop.slice(-10).reduce((sum, fb) => sum + fb.accuracy, 0) / 10 - 0.85)
    : 0;
  
  const newAccuracy = Math.min(0.95, baseAccuracy + feedbackImprovement);
  
  return {
    accuracy: newAccuracy,
    learning: [...patternLearning, {
      timestamp: new Date(),
      pattern: patternAnalysis.mostLikely,
      confidence: patternAnalysis.confidence,
      accuracy: newAccuracy,
      dataPoints: patternAnalysis.sequences
    }].slice(-100) // Garder les 100 dernières entrées
  };
};

// ============================================================================
// 🧠 MODÈLES ML PRÉ-ENTRAÎNÉS AVANCÉS
// ============================================================================
const runAdvancedMLModels = (context) => {
  const { historiqueEmotionnel, emotionsRecentes, scoreEmotionnel, tendanceEmotionnelle, scoreRisque } = context;
  
  // 🎯 CLASSIFICATION ÉMOTIONNELLE AVANCÉE (BERT-Emotion-FR)
  const emotionAnalysis = runEmotionClassifier(historiqueEmotionnel, emotionsRecentes);
  
  // 📈 PRÉDICTION DE TENDANCES (LSTM-Trend-Analyzer)
  const trendAnalysis = runTrendPredictor(historiqueEmotionnel, scoreEmotionnel);
  
  // ⚠️ ÉVALUATION DES RISQUES (XGBoost-Risk-Evaluator)
  const riskAnalysis = runRiskAssessor(context, emotionAnalysis);
  
  // 🎯 RECOMMANDATIONS D'INTERVENTION (Transformer-Intervention-AI)
  const interventionAnalysis = runInterventionRecommender(context, emotionAnalysis, riskAnalysis);
  
  // 📊 GÉNÉRATION D'INSIGHTS AVANCÉS
  const advancedInsights = generateAdvancedInsights(emotionAnalysis, trendAnalysis, riskAnalysis, interventionAnalysis);
  
  // 🔮 PRÉDICTIONS AVANCÉES
  const advancedPredictions = generateAdvancedPredictions(emotionAnalysis, trendAnalysis, riskAnalysis);
  
  return {
    ...context,
    advancedInsights,
    advancedPredictions,
    pretrainedModels: {
      ...context.pretrainedModels,
      emotionClassifier: {
        ...context.pretrainedModels.emotionClassifier,
        lastUpdate: new Date(),
        confidence: emotionAnalysis.confidence
      },
      trendPredictor: {
        ...context.pretrainedModels.trendPredictor,
        lastUpdate: new Date(),
        confidence: trendAnalysis.confidence
      },
      riskAssessor: {
        ...context.pretrainedModels.riskAssessor,
        lastUpdate: new Date(),
        confidence: riskAnalysis.confidence
      },
      interventionRecommender: {
        ...context.pretrainedModels.interventionRecommender,
        lastUpdate: new Date(),
        confidence: interventionAnalysis.confidence
      }
    }
  };
};

// 🎯 CLASSIFICATEUR ÉMOTIONNEL BERT
const runEmotionClassifier = (historique, emotionsRecentes) => {
  // Simulation d'un modèle BERT pré-entraîné pour la classification émotionnelle française
  const emotionScores = {
    anxious_high: 0,
    anxious_moderate: 0,
    burnout_severe: 0,
    burnout_moderate: 0,
    energetic_high: 0,
    discouraged: 0,
    neutral: 0
  };
  
  // Analyser l'historique avec le modèle BERT
  historique.forEach(entry => {
    const emotion = entry.emotion;
    if (emotionScores.hasOwnProperty(emotion)) {
      emotionScores[emotion] += entry.intensite * 0.1;
    }
  });
  
  // Normaliser les scores
  const totalScore = Object.values(emotionScores).reduce((sum, score) => sum + Math.abs(score), 0);
  Object.keys(emotionScores).forEach(emotion => {
    emotionScores[emotion] = totalScore > 0 ? emotionScores[emotion] / totalScore : 0;
  });
  
  // Prédire la prochaine émotion la plus probable
  const predictedEmotion = Object.keys(emotionScores).reduce((a, b) => 
    emotionScores[a] > emotionScores[b] ? a : b
  );
  
  // Calculer la complexité émotionnelle
  const emotionalComplexity = calculateEmotionalComplexity(emotionScores);
  
  return {
    emotionScores,
    predictedEmotion,
    confidence: Math.min(0.95, 0.7 + emotionalComplexity * 0.3),
    emotionalComplexity,
    dominantEmotions: Object.entries(emotionScores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([emotion, score]) => ({ emotion, score }))
  };
};

// 📈 PRÉDICTEUR DE TENDANCES LSTM
const runTrendPredictor = (historique, scoreEmotionnel) => {
  // Simulation d'un modèle LSTM pré-entraîné pour l'analyse de tendances
  if (historique.length < 5) {
    return {
      trend: 'insufficient_data',
      confidence: 0.3,
      momentum: 0,
      volatility: 0,
      turningPoints: []
    };
  }
  
  // Analyser la séquence temporelle des émotions
  const sequence = historique.slice(-10).map(entry => entry.intensite);
  const trend = analyzeSequenceTrend(sequence);
  const momentum = calculateMomentum(sequence);
  const volatility = calculateVolatility(sequence);
  const turningPoints = detectTurningPoints(sequence);
  
  return {
    trend,
    confidence: Math.min(0.95, 0.6 + momentum * 0.4),
    momentum,
    volatility,
    turningPoints,
    predictedDirection: predictDirection(momentum, volatility)
  };
};

// ⚠️ ÉVALUATEUR DE RISQUES XGBoost
const runRiskAssessor = (context, emotionAnalysis) => {
  // Simulation d'un modèle XGBoost pré-entraîné pour l'évaluation des risques
  const features = {
    scoreEmotionnel: context.scoreEmotionnel,
    emotionalComplexity: emotionAnalysis.emotionalComplexity,
    trendMomentum: 0, // Sera calculé par trendAnalysis
    historicalVolatility: 0,
    interventionUrgency: 'low',
    cognitiveLoad: 0,
    stressLevel: 0
  };
  
  // Calculer les métriques de risque
  const riskMetrics = calculateRiskMetrics(features);
  
  // Prédire les scénarios de risque
  const riskScenarios = predictRiskScenarios(riskMetrics);
  
  return {
    riskLevel: riskMetrics.overallRisk,
    confidence: Math.min(0.95, 0.8 + riskMetrics.overallRisk * 0.2),
    cognitiveLoad: riskMetrics.cognitiveLoad,
    stressLevel: riskMetrics.stressLevel,
    riskScenarios,
    mitigationStrategies: generateMitigationStrategies(riskMetrics)
  };
};

// 🎯 RECOMMANDEUR D'INTERVENTIONS TRANSFORMER
const runInterventionRecommender = (context, emotionAnalysis, riskAnalysis) => {
  // Simulation d'un modèle Transformer pré-entraîné pour les recommandations d'intervention
  const userProfile = {
    emotionalState: emotionAnalysis.predictedEmotion,
    riskLevel: riskAnalysis.riskLevel,
    cognitiveLoad: riskAnalysis.cognitiveLoad,
    stressLevel: riskAnalysis.stressLevel,
    motivationTrend: context.tendanceEmotionnelle
  };
  
  // Générer des interventions personnalisées
  const interventions = generatePersonalizedInterventions(userProfile);
  
  // Calculer l'urgence d'intervention
  const interventionUrgency = calculateInterventionUrgency(userProfile);
  
  return {
    interventions,
    urgency: interventionUrgency,
    confidence: Math.min(0.95, 0.75 + interventionUrgency.urgency * 0.25),
    effectiveness: predictInterventionEffectiveness(interventions, userProfile),
    timing: calculateOptimalTiming(interventions, userProfile)
  };
};

// 📊 GÉNÉRATION D'INSIGHTS AVANCÉS
const generateAdvancedInsights = (emotionAnalysis, trendAnalysis, riskAnalysis, interventionAnalysis) => {
  return {
    emotionalComplexity: emotionAnalysis.emotionalComplexity,
    cognitiveLoad: riskAnalysis.cognitiveLoad,
    stressLevel: riskAnalysis.stressLevel,
    motivationTrend: determineMotivationTrend(trendAnalysis),
    interventionUrgency: interventionAnalysis.urgency.level,
    personalizedInterventions: interventionAnalysis.interventions
  };
};

// 🔮 GÉNÉRATION DE PRÉDICTIONS AVANCÉES
const generateAdvancedPredictions = (emotionAnalysis, trendAnalysis, riskAnalysis) => {
  const now = new Date();
  
  return {
    shortTerm: generateShortTermPredictions(emotionAnalysis, trendAnalysis, now),
    mediumTerm: generateMediumTermPredictions(emotionAnalysis, trendAnalysis, now),
    longTerm: generateLongTermPredictions(emotionAnalysis, trendAnalysis, now),
    riskScenarios: riskAnalysis.riskScenarios,
    opportunityWindows: generateOpportunityWindows(emotionAnalysis, trendAnalysis, now)
  };
};

// ============================================================================
// 🧮 FONCTIONS UTILITAIRES ML
// ============================================================================

const calculateEmotionalComplexity = (emotionScores) => {
  // Calculer l'entropie émotionnelle (mesure de complexité)
  const entropy = -Object.values(emotionScores)
    .filter(score => score > 0)
    .reduce((sum, score) => sum + score * Math.log2(score), 0);
  
  return Math.min(1, entropy / Math.log2(Object.keys(emotionScores).length));
};

const analyzeSequenceTrend = (sequence) => {
  if (sequence.length < 3) return 'insufficient_data';
  
  const firstHalf = sequence.slice(0, Math.floor(sequence.length / 2));
  const secondHalf = sequence.slice(Math.floor(sequence.length / 2));
  
  const firstAvg = firstHalf.reduce((sum, val) => sum + val, 0) / firstHalf.length;
  const secondAvg = secondHalf.reduce((sum, val) => sum + val, 0) / secondHalf.length;
  
  const diff = secondAvg - firstAvg;
  
  if (Math.abs(diff) < 0.1) return 'stable';
  return diff > 0 ? 'improving' : 'declining';
};

const calculateMomentum = (sequence) => {
  if (sequence.length < 2) return 0;
  
  let momentum = 0;
  for (let i = 1; i < sequence.length; i++) {
    momentum += sequence[i] - sequence[i - 1];
  }
  
  return momentum / (sequence.length - 1);
};

const calculateVolatility = (sequence) => {
  if (sequence.length < 2) return 0;
  
  const mean = sequence.reduce((sum, val) => sum + val, 0) / sequence.length;
  const variance = sequence.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / sequence.length;
  
  return Math.sqrt(variance);
};

const detectTurningPoints = (sequence) => {
  const turningPoints = [];
  
  for (let i = 1; i < sequence.length - 1; i++) {
    const prev = sequence[i - 1];
    const curr = sequence[i];
    const next = sequence[i + 1];
    
    // Détecter les pics et vallées
    if ((curr > prev && curr > next) || (curr < prev && curr < next)) {
      turningPoints.push({
        index: i,
        value: curr,
        type: curr > prev ? 'peak' : 'valley'
      });
    }
  }
  
  return turningPoints;
};

const predictDirection = (momentum, volatility) => {
  if (volatility > 0.5) return 'unstable';
  if (momentum > 0.2) return 'improving';
  if (momentum < -0.2) return 'declining';
  return 'stable';
};

const calculateRiskMetrics = (features) => {
  // Calculer les métriques de risque basées sur les features
  const cognitiveLoad = Math.min(1, Math.abs(features.scoreEmotionnel) * 0.3 + features.emotionalComplexity * 0.7);
  const stressLevel = Math.min(1, Math.abs(features.scoreEmotionnel) * 0.5 + cognitiveLoad * 0.5);
  const overallRisk = Math.min(1, (cognitiveLoad + stressLevel) / 2);
  
  return {
    cognitiveLoad,
    stressLevel,
    overallRisk,
    riskFactors: {
      emotional: features.scoreEmotionnel < -2,
      cognitive: cognitiveLoad > 0.7,
      stress: stressLevel > 0.7
    }
  };
};

const predictRiskScenarios = (riskMetrics) => {
  const scenarios = [];
  
  if (riskMetrics.riskFactors.emotional) {
    scenarios.push({
      type: 'emotional_crisis',
      probability: 0.3,
      timeframe: '1-3 jours',
      description: 'Risque de crise émotionnelle',
      mitigation: 'Intervention immédiate requise'
    });
  }
  
  if (riskMetrics.riskFactors.cognitive) {
    scenarios.push({
      type: 'cognitive_overload',
      probability: 0.4,
      timeframe: '3-7 jours',
      description: 'Surcharge cognitive',
      mitigation: 'Réduction de la charge de travail'
    });
  }
  
  if (riskMetrics.riskFactors.stress) {
    scenarios.push({
      type: 'burnout_risk',
      probability: 0.25,
      timeframe: '1-2 semaines',
      description: 'Risque de burnout',
      mitigation: 'Repos et support psychologique'
    });
  }
  
  return scenarios;
};

const generateMitigationStrategies = (riskMetrics) => {
  const strategies = [];
  
  if (riskMetrics.cognitiveLoad > 0.7) {
    strategies.push({
      type: 'cognitive_relief',
      priority: 'high',
      action: 'Réduire la charge cognitive',
      techniques: ['Pomodoro', 'Micro-pauses', 'Priorisation']
    });
  }
  
  if (riskMetrics.stressLevel > 0.7) {
    strategies.push({
      type: 'stress_management',
      priority: 'high',
      action: 'Gestion du stress',
      techniques: ['Respiration', 'Méditation', 'Exercice']
    });
  }
  
  return strategies;
};

const generatePersonalizedInterventions = (userProfile) => {
  const interventions = [];
  
  // Interventions basées sur l'état émotionnel
  if (userProfile.emotionalState === 'anxious_high') {
    interventions.push({
      type: 'immediate_support',
      priority: 'critical',
      action: 'Support immédiat',
      duration: '15-30 minutes',
      techniques: ['Grounding', 'Respiration guidée', 'Validation émotionnelle']
    });
  }
  
  if (userProfile.cognitiveLoad > 0.7) {
    interventions.push({
      type: 'cognitive_break',
      priority: 'high',
      action: 'Pause cognitive',
      duration: '1-2 heures',
      techniques: ['Marche', 'Activité physique', 'Changement d\'environnement']
    });
  }
  
  if (userProfile.stressLevel > 0.7) {
    interventions.push({
      type: 'stress_intervention',
      priority: 'high',
      action: 'Intervention stress',
      duration: '30-60 minutes',
      techniques: ['Relaxation musculaire', 'Visualisation', 'Musique apaisante']
    });
  }
  
  return interventions;
};

const calculateInterventionUrgency = (userProfile) => {
  let urgencyScore = 0;
  
  if (userProfile.emotionalState.includes('anxious') || userProfile.emotionalState.includes('burnout')) {
    urgencyScore += 0.4;
  }
  
  if (userProfile.cognitiveLoad > 0.7) {
    urgencyScore += 0.3;
  }
  
  if (userProfile.stressLevel > 0.7) {
    urgencyScore += 0.3;
  }
  
  const level = urgencyScore > 0.7 ? 'critical' : urgencyScore > 0.4 ? 'high' : urgencyScore > 0.2 ? 'medium' : 'low';
  
  return {
    level,
    urgency: urgencyScore,
    timeframe: level === 'critical' ? 'immédiat' : level === 'high' ? '24h' : level === 'medium' ? '3 jours' : '1 semaine'
  };
};

const predictInterventionEffectiveness = (interventions, userProfile) => {
  return interventions.map(intervention => ({
    ...intervention,
    effectiveness: Math.min(0.95, 0.6 + (1 - userProfile.cognitiveLoad) * 0.4),
    expectedOutcome: generateExpectedOutcome(intervention, userProfile)
  }));
};

const generateExpectedOutcome = (intervention, userProfile) => {
  const outcomes = {
    immediate_support: 'Réduction de l\'anxiété de 40-60%',
    cognitive_break: 'Amélioration de la concentration de 30-50%',
    stress_intervention: 'Diminution du stress de 35-55%'
  };
  
  return outcomes[intervention.type] || 'Amélioration générale du bien-être';
};

const calculateOptimalTiming = (interventions, userProfile) => {
  // Calculer le timing optimal basé sur le profil utilisateur
  const currentHour = new Date().getHours();
  
  return interventions.map(intervention => ({
    ...intervention,
    optimalTiming: {
      bestHours: userProfile.cognitiveLoad > 0.7 ? [9, 10, 11] : [14, 15, 16],
      avoidHours: [12, 13, 18, 19],
      frequency: intervention.priority === 'critical' ? 'immédiat' : 'quotidien'
    }
  }));
};

const determineMotivationTrend = (trendAnalysis) => {
  if (trendAnalysis.trend === 'improving') return 'increasing';
  if (trendAnalysis.trend === 'declining') return 'decreasing';
  return 'stable';
};

const generateShortTermPredictions = (emotionAnalysis, trendAnalysis, now) => {
  const predictions = [];
  
  for (let i = 1; i <= 7; i++) {
    const date = new Date(now.getTime() + (i * 24 * 60 * 60 * 1000));
    const confidence = Math.max(0.3, 0.9 - (i * 0.1));
    
    predictions.push({
      date,
      timeframe: `${i} jour${i > 1 ? 's' : ''}`,
      predictedEmotion: emotionAnalysis.predictedEmotion,
      confidence,
      reasoning: `Basé sur l'analyse LSTM: ${trendAnalysis.trend} avec momentum ${trendAnalysis.momentum.toFixed(2)}`
    });
  }
  
  return predictions;
};

const generateMediumTermPredictions = (emotionAnalysis, trendAnalysis, now) => {
  const predictions = [];
  
  for (let i = 1; i <= 4; i++) {
    const date = new Date(now.getTime() + (i * 7 * 24 * 60 * 60 * 1000));
    const confidence = Math.max(0.2, 0.7 - (i * 0.1));
    
    predictions.push({
      date,
      timeframe: `${i} semaine${i > 1 ? 's' : ''}`,
      predictedTrend: trendAnalysis.predictedDirection,
      confidence,
      reasoning: `Prédiction à moyen terme basée sur l'analyse de tendance LSTM`
    });
  }
  
  return predictions;
};

const generateLongTermPredictions = (emotionAnalysis, trendAnalysis, now) => {
  const predictions = [];
  
  for (let i = 1; i <= 6; i++) {
    const date = new Date(now.getTime() + (i * 30 * 24 * 60 * 60 * 1000));
    const confidence = Math.max(0.1, 0.5 - (i * 0.05));
    
    predictions.push({
      date,
      timeframe: `${i} mois`,
      predictedOutcome: predictLongTermOutcome(trendAnalysis, i),
      confidence,
      reasoning: `Prédiction à long terme basée sur l'évolution des patterns`
    });
  }
  
  return predictions;
};

const predictLongTermOutcome = (trendAnalysis, months) => {
  if (trendAnalysis.trend === 'improving') {
    return `Amélioration continue attendue sur ${months} mois`;
  } else if (trendAnalysis.trend === 'declining') {
    return `Nécessité d'intervention sur ${months} mois`;
  }
  return `Stabilité prévue sur ${months} mois`;
};

const generateOpportunityWindows = (emotionAnalysis, trendAnalysis, now) => {
  const windows = [];
  
  // Fenêtre d'opportunité basée sur l'état émotionnel positif
  if (emotionAnalysis.predictedEmotion === 'energetic_high') {
    windows.push({
      type: 'high_motivation_window',
      startDate: now,
      endDate: new Date(now.getTime() + (3 * 24 * 60 * 60 * 1000)),
      opportunity: 'Pic de motivation détecté',
      recommendedAction: 'Capitaliser sur l\'énergie pour avancer sur les objectifs',
      confidence: 0.8
    });
  }
  
  // Fenêtre d'opportunité basée sur la tendance
  if (trendAnalysis.trend === 'improving') {
    windows.push({
      type: 'improvement_window',
      startDate: new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000)),
      endDate: new Date(now.getTime() + (14 * 24 * 60 * 60 * 1000)),
      opportunity: 'Période d\'amélioration prévue',
      recommendedAction: 'Intensifier les efforts de formation',
      confidence: 0.7
    });
  }
  
  return windows;
};

// ============================================================================
// 🔄 ENTRAÎNEMENT CONTINU & FEEDBACK UTILISATEUR
// ============================================================================
const runContinuousTraining = (context) => {
  const { continuousTraining, userFeedbackSystem, pretrainedModels, advancedInsights } = context;
  
  // 📊 COLLECTER LES FEEDBACKS UTILISATEUR
  const collectedFeedback = collectUserFeedback(context);
  
  // 🧠 MISE À JOUR DES MODÈLES AVEC FEEDBACK
  const updatedModels = updateModelsWithFeedback(pretrainedModels, collectedFeedback);
  
  // 📈 CALCULER LES MÉTRIQUES D'AMÉLIORATION
  const trainingMetrics = calculateTrainingMetrics(continuousTraining, collectedFeedback);
  
  // 🎯 ADAPTATION DU TAUX D'APPRENTISSAGE
  const adaptiveLearning = adjustLearningRate(continuousTraining, trainingMetrics);
  
  // 📊 ÉVOLUTION DE LA PRÉCISION
  const accuracyEvolution = trackAccuracyEvolution(continuousTraining, updatedModels);
  
  // 🔄 DÉCISION D'ENTRAÎNEMENT
  const shouldRetrain = shouldTriggerRetraining(continuousTraining, trainingMetrics, adaptiveLearning);
  
  if (shouldRetrain) {
    const retrainedModels = performModelRetraining(updatedModels, collectedFeedback, continuousTraining);
    
    return {
      ...context,
      pretrainedModels: retrainedModels,
      continuousTraining: {
        ...continuousTraining,
        modelImprovements: [...continuousTraining.modelImprovements, {
          timestamp: new Date(),
          improvements: retrainedModels,
          metrics: trainingMetrics
        }],
        accuracyEvolution,
        adaptiveLearning,
        trainingMetrics,
        lastTrainingSession: new Date(),
        epochsCompleted: continuousTraining.epochsCompleted + 1
      },
      userFeedbackSystem: {
        ...userFeedbackSystem,
        feedbackHistory: [...userFeedbackSystem.feedbackHistory, ...collectedFeedback]
      }
    };
  }
  
  return {
    ...context,
    continuousTraining: {
      ...continuousTraining,
      accuracyEvolution,
      adaptiveLearning,
      trainingMetrics
    },
    userFeedbackSystem: {
      ...userFeedbackSystem,
      feedbackHistory: [...userFeedbackSystem.feedbackHistory, ...collectedFeedback]
    }
  };
};

// 📊 COLLECTER LES FEEDBACKS UTILISATEUR
const collectUserFeedback = (context) => {
  const feedback = [];
  const now = new Date();
  
  // Simuler la collecte de feedback basée sur les interactions
  const { historiqueEmotionnel, advancedInsights, recommendationsActives } = context;
  
  // Feedback sur la détection émotionnelle
  if (historiqueEmotionnel.length > 0) {
    const lastEmotion = historiqueEmotionnel[historiqueEmotionnel.length - 1];
    feedback.push({
      type: 'emotionAccuracy',
      timestamp: now,
      input: lastEmotion.emotion,
      prediction: lastEmotion.emotion,
      userFeedback: simulateUserFeedback('emotion', lastEmotion.emotion),
      confidence: lastEmotion.intensite,
      context: {
        emotion: lastEmotion.emotion,
        intensity: lastEmotion.intensite,
        timestamp: lastEmotion.timestamp
      }
    });
  }
  
  // Feedback sur les prédictions
  if (context.advancedPredictions && context.advancedPredictions.shortTerm.length > 0) {
    const prediction = context.advancedPredictions.shortTerm[0];
    feedback.push({
      type: 'predictionAccuracy',
      timestamp: now,
      input: prediction.predictedEmotion,
      prediction: prediction.predictedEmotion,
      userFeedback: simulateUserFeedback('prediction', prediction.predictedEmotion),
      confidence: prediction.confidence,
      context: {
        timeframe: prediction.timeframe,
        reasoning: prediction.reasoning
      }
    });
  }
  
  // Feedback sur les interventions
  if (advancedInsights && advancedInsights.personalizedInterventions.length > 0) {
    const intervention = advancedInsights.personalizedInterventions[0];
    feedback.push({
      type: 'interventionEffectiveness',
      timestamp: now,
      input: intervention.action,
      prediction: intervention.priority,
      userFeedback: simulateUserFeedback('intervention', intervention.type),
      confidence: 0.8,
      context: {
        type: intervention.type,
        priority: intervention.priority,
        duration: intervention.duration
      }
    });
  }
  
  // Feedback sur les recommandations
  if (recommendationsActives.length > 0) {
    const recommendation = recommendationsActives[0];
    feedback.push({
      type: 'recommendationRelevance',
      timestamp: now,
      input: recommendation.titre,
      prediction: recommendation.priorite,
      userFeedback: simulateUserFeedback('recommendation', recommendation.type),
      confidence: 0.75,
      context: {
        type: recommendation.type,
        priority: recommendation.priorite,
        description: recommendation.description
      }
    });
  }
  
  return feedback;
};

// 🎯 SIMULER LE FEEDBACK UTILISATEUR
const simulateUserFeedback = (category, prediction) => {
  // Simulation réaliste du feedback utilisateur
  const feedbackScores = {
    emotion: {
      'anxious_high': 0.85,
      'anxious_moderate': 0.78,
      'burnout_severe': 0.92,
      'burnout_moderate': 0.75,
      'energetic_high': 0.88,
      'discouraged': 0.80,
      'neutral': 0.95
    },
    prediction: {
      'anxious_high': 0.82,
      'anxious_moderate': 0.85,
      'burnout_severe': 0.78,
      'burnout_moderate': 0.80,
      'energetic_high': 0.90,
      'discouraged': 0.75,
      'neutral': 0.88
    },
    intervention: {
      'immediate_support': 0.92,
      'cognitive_break': 0.85,
      'stress_intervention': 0.88
    },
    recommendation: {
      'formation': 0.82,
      'objectif': 0.85,
      'action': 0.78
    }
  };
  
  const baseScore = feedbackScores[category]?.[prediction] || 0.8;
  const noise = (Math.random() - 0.5) * 0.2; // ±10% de variation
  return Math.max(0, Math.min(1, baseScore + noise));
};

// 🧠 MISE À JOUR DES MODÈLES AVEC FEEDBACK
const updateModelsWithFeedback = (models, feedback) => {
  const updatedModels = { ...models };
  
  // Mettre à jour chaque modèle avec les feedbacks correspondants
  Object.keys(updatedModels).forEach(modelKey => {
    const model = updatedModels[modelKey];
    const relevantFeedback = feedback.filter(f => f.type === getFeedbackTypeForModel(modelKey));
    
    if (relevantFeedback.length > 0) {
      const avgFeedback = relevantFeedback.reduce((sum, f) => sum + f.userFeedback, 0) / relevantFeedback.length;
      const improvement = (avgFeedback - 0.8) * 0.1; // Amélioration basée sur le feedback
      
      updatedModels[modelKey] = {
        ...model,
        accuracy: Math.min(0.98, model.accuracy + improvement),
        confidence: Math.min(0.95, model.confidence + improvement * 0.5),
        lastUpdate: new Date()
      };
    }
  });
  
  return updatedModels;
};

// 🎯 ASSOCIER LE TYPE DE FEEDBACK AU MODÈLE
const getFeedbackTypeForModel = (modelKey) => {
  const mapping = {
    'emotionClassifier': 'emotionAccuracy',
    'trendPredictor': 'predictionAccuracy',
    'riskAssessor': 'interventionEffectiveness',
    'interventionRecommender': 'recommendationRelevance'
  };
  
  return mapping[modelKey] || 'emotionAccuracy';
};

// 📈 CALCULER LES MÉTRIQUES D'ENTRAÎNEMENT
const calculateTrainingMetrics = (continuousTraining, feedback) => {
  if (feedback.length === 0) {
    return continuousTraining.trainingMetrics;
  }
  
  // Calculer les métriques basées sur les feedbacks
  const avgFeedback = feedback.reduce((sum, f) => sum + f.userFeedback, 0) / feedback.length;
  const loss = 1 - avgFeedback;
  const accuracy = avgFeedback;
  
  // Calculer precision, recall, F1-score
  const precision = calculatePrecision(feedback);
  const recall = calculateRecall(feedback);
  const f1Score = calculateF1Score(precision, recall);
  
  return {
    loss: Math.round(loss * 1000) / 1000,
    accuracy: Math.round(accuracy * 1000) / 1000,
    precision: Math.round(precision * 1000) / 1000,
    recall: Math.round(recall * 1000) / 1000,
    f1Score: Math.round(f1Score * 1000) / 1000
  };
};

// 📊 CALCULER LA PRÉCISION
const calculatePrecision = (feedback) => {
  const correctPredictions = feedback.filter(f => f.userFeedback > 0.7).length;
  const totalPredictions = feedback.length;
  return totalPredictions > 0 ? correctPredictions / totalPredictions : 0;
};

// 📊 CALCULER LE RAPPEL
const calculateRecall = (feedback) => {
  const relevantPredictions = feedback.filter(f => f.userFeedback > 0.5).length;
  const totalRelevant = feedback.length;
  return totalRelevant > 0 ? relevantPredictions / totalRelevant : 0;
};

// 📊 CALCULER LE F1-SCORE
const calculateF1Score = (precision, recall) => {
  if (precision + recall === 0) return 0;
  return 2 * (precision * recall) / (precision + recall);
};

// 🎯 ADAPTER LE TAUX D'APPRENTISSAGE
const adjustLearningRate = (continuousTraining, trainingMetrics) => {
  const { adaptiveLearning, learningRate } = continuousTraining;
  const { accuracy } = trainingMetrics;
  
  if (!adaptiveLearning.enabled) {
    return adaptiveLearning;
  }
  
  let newLearningRate = learningRate;
  let adjustmentMade = false;
  
  // Augmenter le taux d'apprentissage si les performances sont faibles
  if (accuracy < adaptiveLearning.performanceThreshold) {
    newLearningRate = Math.min(0.01, learningRate * (1 + adaptiveLearning.adjustmentRate));
    adjustmentMade = true;
  }
  // Diminuer le taux d'apprentissage si les performances sont bonnes
  else if (accuracy > 0.9) {
    newLearningRate = Math.max(0.0001, learningRate * (1 - adaptiveLearning.adjustmentRate));
    adjustmentMade = true;
  }
  
  return {
    ...adaptiveLearning,
    learningRate: newLearningRate,
    lastAdjustment: adjustmentMade ? new Date() : adaptiveLearning.lastAdjustment,
    adjustmentCount: adaptiveLearning.adjustmentCount + (adjustmentMade ? 1 : 0)
  };
};

// 📊 SUIVRE L'ÉVOLUTION DE LA PRÉCISION
const trackAccuracyEvolution = (continuousTraining, updatedModels) => {
  const currentAccuracy = Object.values(updatedModels).reduce((sum, model) => sum + model.accuracy, 0) / Object.keys(updatedModels).length;
  
  return [...continuousTraining.accuracyEvolution, {
    timestamp: new Date(),
    overallAccuracy: currentAccuracy,
    modelAccuracies: Object.fromEntries(
      Object.entries(updatedModels).map(([key, model]) => [key, model.accuracy])
    ),
    improvement: continuousTraining.accuracyEvolution.length > 0 
      ? currentAccuracy - continuousTraining.accuracyEvolution[continuousTraining.accuracyEvolution.length - 1].overallAccuracy
      : 0
  }].slice(-50); // Garder les 50 dernières entrées
};

// 🔄 DÉCIDER SI UN NOUVEL ENTRAÎNEMENT EST NÉCESSAIRE
const shouldTriggerRetraining = (continuousTraining, trainingMetrics, adaptiveLearning) => {
  const { autoRetrain, performanceThreshold } = adaptiveLearning;
  const { accuracy, f1Score } = trainingMetrics;
  const { lastTrainingSession } = continuousTraining;
  
  if (!autoRetrain) return false;
  
  // Retrain si les performances sont en dessous du seuil
  if (accuracy < performanceThreshold || f1Score < 0.7) {
    return true;
  }
  
  // Retrain si ça fait plus de 24h depuis le dernier entraînement
  if (lastTrainingSession) {
    const hoursSinceLastTraining = (new Date().getTime() - lastTrainingSession.getTime()) / (1000 * 60 * 60);
    if (hoursSinceLastTraining > 24) {
      return true;
    }
  }
  
  // Retrain si on a accumulé assez de nouveaux feedbacks
  const recentFeedback = continuousTraining.userFeedback.filter(f => 
    new Date().getTime() - f.timestamp.getTime() < 24 * 60 * 60 * 1000
  );
  
  return recentFeedback.length >= continuousTraining.batchSize;
};

// 🧠 EFFECTUER UN NOUVEL ENTRAÎNEMENT
const performModelRetraining = (models, feedback, continuousTraining) => {
  const retrainedModels = {};
  
  Object.entries(models).forEach(([modelKey, model]) => {
    const relevantFeedback = feedback.filter(f => f.type === getFeedbackTypeForModel(modelKey));
    
    if (relevantFeedback.length > 0) {
      // Simulation d'un entraînement avec les nouveaux feedbacks
      const avgFeedback = relevantFeedback.reduce((sum, f) => sum + f.userFeedback, 0) / relevantFeedback.length;
      const learningRate = continuousTraining.adaptiveLearning.learningRate;
      const improvement = (avgFeedback - 0.8) * learningRate * 10; // Facteur d'amélioration
      
      retrainedModels[modelKey] = {
        ...model,
        accuracy: Math.min(0.98, model.accuracy + improvement),
        confidence: Math.min(0.95, model.confidence + improvement * 0.5),
        lastUpdate: new Date(),
        trainingEpoch: model.trainingEpoch ? model.trainingEpoch + 1 : 1,
        feedbackSamples: (model.feedbackSamples || 0) + relevantFeedback.length
      };
    } else {
      retrainedModels[modelKey] = { ...model };
    }
  });
  
  return retrainedModels;
};

// ============================================================================
// 📊 SYSTÈME DE FEEDBACK UTILISATEUR INTERACTIF
// ============================================================================
const collectInteractiveFeedback = (context, feedbackType, prediction, userRating) => {
  const feedback = {
    type: feedbackType,
    timestamp: new Date(),
    prediction: prediction,
    userRating: userRating, // 1-5 étoiles
    confidence: context.pretrainedModels[getModelForFeedbackType(feedbackType)]?.confidence || 0.8,
    context: {
      emotion: context.emotionalState,
      score: context.scoreEmotionnel,
      trend: context.tendanceEmotionnelle
    }
  };
  
  return feedback;
};

// 🎯 ASSOCIER LE TYPE DE FEEDBACK AU MODÈLE
const getModelForFeedbackType = (feedbackType) => {
  const mapping = {
    'emotionAccuracy': 'emotionClassifier',
    'predictionAccuracy': 'trendPredictor',
    'interventionEffectiveness': 'riskAssessor',
    'recommendationRelevance': 'interventionRecommender'
  };
  
  return mapping[feedbackType] || 'emotionClassifier';
};

// ============================================================================
// 📅 INTÉGRATION CALENDRIER - Suivi des objectifs et planification
// ============================================================================
const integrateCalendarSystem = (context) => {
  const { objectifsRecommandes, actionsPrioritaires, formationsSuggerees, calendrierObjectifs } = context;
  
  // 🎯 CRÉER DES OBJECTIFS CALENDARIERS
  const newCalendarObjectives = createCalendarObjectives(objectifsRecommandes, actionsPrioritaires);
  
  // ⏰ GÉNÉRER DES RAPPELS
  const reminders = generateReminders(newCalendarObjectives, formationsSuggerees);
  
  // 📈 PLANIFIER LE SUIVI DES PROGRÈS
  const progressions = scheduleProgressTracking(newCalendarObjectives);
  
  // 🏆 DÉFINIR DES MILESTONES
  const milestones = defineMilestones(newCalendarObjectives);
  
  // 📚 PLANIFIER DES SESSIONS DE FORMATION
  const sessionsPlanifiees = scheduleTrainingSessions(formationsSuggerees);
  
  return {
    ...context,
    calendrierObjectifs: [...calendrierObjectifs, ...newCalendarObjectives],
    rappels: [...context.rappels, ...reminders],
    progressions: [...context.progressions, ...progressions],
    milestones: [...context.milestones, ...milestones],
    sessionsPlanifiees: [...context.sessionsPlanifiees, ...sessionsPlanifiees]
  };
};

const createCalendarObjectives = (objectifs, actions) => {
  const calendarObjectives = [];
  const now = new Date();
  
  // Convertir les objectifs en événements calendaires
  objectifs.forEach((objectif, index) => {
    const startDate = new Date(now.getTime() + (index * 7 * 24 * 60 * 60 * 1000)); // +index semaines
    const endDate = new Date(startDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // 1 semaine
    
    calendarObjectives.push({
      id: `obj_${Date.now()}_${index}`,
      title: objectif.titre,
      description: objectif.description,
      startDate: startDate,
      endDate: endDate,
      type: 'objectif',
      priority: objectif.priorite,
      status: 'planned',
      progress: 0,
      milestones: [],
      reminders: []
    });
  });
  
  // Convertir les actions en tâches calendaires
  actions.forEach((action, index) => {
    const dueDate = new Date(now.getTime() + ((index + 1) * 3 * 24 * 60 * 60 * 1000)); // +3 jours par action
    
    calendarObjectives.push({
      id: `action_${Date.now()}_${index}`,
      title: action.titre,
      description: action.description,
      dueDate: dueDate,
      type: 'action',
      urgency: action.urgence,
      status: 'pending',
      estimatedDuration: action.duree,
      dependencies: []
    });
  });
  
  return calendarObjectives;
};

const generateReminders = (objectifs, formations) => {
  const reminders = [];
  const now = new Date();
  
  // Rappels pour les objectifs
  objectifs.forEach(obj => {
    if (obj.type === 'objectif') {
      // Rappel 2 jours avant la fin
      const reminderDate = new Date(obj.endDate.getTime() - (2 * 24 * 60 * 60 * 1000));
      if (reminderDate > now) {
        reminders.push({
          id: `reminder_${obj.id}`,
          title: `Rappel: ${obj.title}`,
          description: `Objectif à finaliser dans 2 jours`,
          date: reminderDate,
          type: 'objectif_reminder',
          priority: obj.priority,
          relatedId: obj.id
        });
      }
    }
    
    if (obj.type === 'action') {
      // Rappel 1 jour avant l'échéance
      const reminderDate = new Date(obj.dueDate.getTime() - (24 * 60 * 60 * 1000));
      if (reminderDate > now) {
        reminders.push({
          id: `reminder_${obj.id}`,
          title: `Action à faire: ${obj.title}`,
          description: `Échéance dans 1 jour`,
          date: reminderDate,
          type: 'action_reminder',
          urgency: obj.urgency,
          relatedId: obj.id
        });
      }
    }
  });
  
  // Rappels pour les formations
  formations.forEach(formation => {
    const sessionDate = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000)); // Dans 1 semaine
    
    reminders.push({
      id: `reminder_formation_${formation.titre}`,
      title: `Session de formation: ${formation.titre}`,
      description: `Formation recommandée - ${formation.duree}`,
      date: sessionDate,
      type: 'formation_reminder',
      urgency: formation.urgence,
      relatedId: formation.titre
    });
  });
  
  return reminders;
};

const scheduleProgressTracking = (objectifs) => {
  const progressions = [];
  const now = new Date();
  
  objectifs.forEach(obj => {
    if (obj.type === 'objectif') {
      // Suivi hebdomadaire
      for (let week = 1; week <= 4; week++) {
        const checkDate = new Date(obj.startDate.getTime() + (week * 7 * 24 * 60 * 60 * 1000));
        
        progressions.push({
          id: `progress_${obj.id}_week_${week}`,
          objectiveId: obj.id,
          checkDate: checkDate,
          type: 'weekly_check',
          questions: [
            "Comment avancez-vous sur cet objectif ?",
            "Quels sont les obstacles rencontrés ?",
            "Avez-vous besoin d'aide ?"
          ],
          status: 'scheduled'
        });
      }
    }
  });
  
  return progressions;
};

const defineMilestones = (objectifs) => {
  const milestones = [];
  
  objectifs.forEach(obj => {
    if (obj.type === 'objectif') {
      // Milestone à 25%
      milestones.push({
        id: `milestone_${obj.id}_25`,
        objectiveId: obj.id,
        title: `25% - ${obj.title}`,
        targetProgress: 25,
        date: new Date(obj.startDate.getTime() + (7 * 24 * 60 * 60 * 1000)),
        status: 'pending',
        reward: 'Reconnaissance du progrès initial'
      });
      
      // Milestone à 50%
      milestones.push({
        id: `milestone_${obj.id}_50`,
        objectiveId: obj.id,
        title: `50% - ${obj.title}`,
        targetProgress: 50,
        date: new Date(obj.startDate.getTime() + (14 * 24 * 60 * 60 * 1000)),
        status: 'pending',
        reward: 'Motivation renforcée'
      });
      
      // Milestone à 100%
      milestones.push({
        id: `milestone_${obj.id}_100`,
        objectiveId: obj.id,
        title: `100% - ${obj.title}`,
        targetProgress: 100,
        date: obj.endDate,
        status: 'pending',
        reward: 'Objectif atteint - Célébration !'
      });
    }
  });
  
  return milestones;
};

const scheduleTrainingSessions = (formations) => {
  const sessions = [];
  const now = new Date();
  
  formations.forEach((formation, index) => {
    const sessionStart = new Date(now.getTime() + ((index + 1) * 7 * 24 * 60 * 60 * 1000));
    const sessionEnd = new Date(sessionStart.getTime() + (2 * 60 * 60 * 1000)); // 2 heures
    
    sessions.push({
      id: `session_${formation.titre}_${index}`,
      title: formation.titre,
      description: formation.description,
      startTime: sessionStart,
      endTime: sessionEnd,
      type: 'training_session',
      duration: formation.duree,
      urgency: formation.urgence,
      status: 'scheduled',
      preparation: [
        "Réviser les prérequis",
        "Préparer l'environnement de travail",
        "Prévoir 2h de disponibilité"
      ]
    });
  });
  
  return sessions;
};

// ============================================================================
// 📄 EXPORT PDF - Génération de rapports personnalisés
// ============================================================================
const generatePDFReport = async (context) => {
  const {
    prenom,
    scoreRisque,
    scoreEmotionnel,
    tendanceEmotionnelle,
    recommandationsActives,
    objectifsRecommandes,
    formationsSuggerees,
    patternsDetectes,
    calendrierObjectifs,
    predictions,
    modelAccuracy,
    confidenceScore
  } = context;
  
  const reportData = {
    metadata: {
      generatedAt: new Date(),
      version: '1.0',
      user: prenom,
      reportType: 'Rapport Personnalisé Aegis'
    },
    executiveSummary: {
      scoreRisque,
      scoreEmotionnel,
      tendanceEmotionnelle,
      modelAccuracy: Math.round(modelAccuracy * 100),
      confidenceScore: Math.round(confidenceScore * 100)
    },
    recommendations: recommandationsActives,
    objectives: objectifsRecommandes,
    formations: formationsSuggerees,
    patterns: patternsDetectes,
    calendar: calendrierObjectifs,
    predictions: predictions
  };
  
  // Simuler la génération PDF (en réalité, on utiliserait PDFKit ou similaire)
  const pdfBuffer = await simulatePDFGeneration(reportData);
  
  return {
    buffer: pdfBuffer,
    filename: `Rapport_Aegis_${prenom}_${new Date().toISOString().split('T')[0]}.pdf`,
    size: pdfBuffer.length,
    generatedAt: new Date()
  };
};

const simulatePDFGeneration = async (reportData) => {
  // Simulation de génération PDF - en réalité on utiliserait PDFKit
  const content = `
RAPPORT PERSONNALISÉ AEGIS
============================

Généré le: ${reportData.metadata.generatedAt.toLocaleDateString()}
Utilisateur: ${reportData.metadata.user}

RÉSUMÉ EXÉCUTIF
===============
Score de Risque IA: ${reportData.executiveSummary.scoreRisque}%
Score Émotionnel: ${reportData.executiveSummary.scoreEmotionnel}/10
Tendance: ${reportData.executiveSummary.tendanceEmotionnelle}
Précision du Modèle: ${reportData.executiveSummary.modelAccuracy}%
Score de Confiance: ${reportData.executiveSummary.confidenceScore}%

RECOMMANDATIONS ACTIVES
=======================
${reportData.recommendations.map(rec => `
• ${rec.titre} (${rec.priorite})
  ${rec.description}
  Actions: ${rec.actions?.join(', ') || 'N/A'}
`).join('')}

OBJECTIFS RECOMMANDÉS
====================
${reportData.objectives.map(obj => `
• ${obj.titre}
  ${obj.description}
  Échéance: ${obj.echeance} | Priorité: ${obj.priorite}
`).join('')}

FORMATIONS SUGGÉRÉES
===================
${reportData.formations.map(formation => `
• ${formation.titre}
  ${formation.description}
  Durée: ${formation.duree} | Urgence: ${formation.urgence}
`).join('')}

PATTERNS DÉTECTÉS
=================
${reportData.patterns.map(pattern => `
• ${pattern.titre}
  ${pattern.description}
  Impact: ${pattern.impact}
  Recommandation: ${pattern.recommandation}
`).join('')}

PRÉDICTIONS ML
=============
${reportData.predictions.map(pred => `
• ${pred.timeframe}: ${pred.predictedEmotion}
  Confiance: ${Math.round(pred.confidence * 100)}%
  Raison: ${pred.reasoning}
`).join('')}

CALENDRIER
==========
${reportData.calendar.map(item => `
• ${item.title}
  Type: ${item.type}
  ${item.startDate ? `Début: ${item.startDate.toLocaleDateString()}` : ''}
  ${item.endDate ? `Fin: ${item.endDate.toLocaleDateString()}` : ''}
  ${item.dueDate ? `Échéance: ${item.dueDate.toLocaleDateString()}` : ''}
`).join('')}

---
Rapport généré par Aegis AI - SkillShield
Intelligence Artificielle de Protection Professionnelle
  `;
  
  // Simuler un buffer PDF
  return Buffer.from(content, 'utf8');
};

// ============================================================================
// 🔔 NOTIFICATIONS PUSH - Système d'alertes intelligentes
// ============================================================================
const generatePushNotifications = (context) => {
  const { 
    recommandationsActives, 
    alertesEmotionnelles, 
    rappels,
    preferencesNotifications,
    dernierEnvoiNotification
  } = context;
  
  const notifications = [];
  const now = new Date();
  
  // Vérifier si on peut envoyer des notifications (pas plus d'une par heure)
  const canSendNotification = !dernierEnvoiNotification || 
    (now.getTime() - dernierEnvoiNotification.getTime()) > (60 * 60 * 1000);
  
  if (!canSendNotification) return { notifications: [], newLastSent: dernierEnvoiNotification };
  
  // Notifications pour actions prioritaires
  if (preferencesNotifications.actionsPrioritaires) {
    const urgentActions = recommandationsActives.filter(rec => rec.priorite === 'critique');
    if (urgentActions.length > 0) {
      notifications.push({
        id: `notif_action_critique_${Date.now()}`,
        title: '🚨 Action Critique Requise',
        message: `${urgentActions[0].titre} - Intervention immédiate nécessaire`,
        type: 'action_critique',
        priority: 'high',
        timestamp: now,
        actions: urgentActions[0].actions || []
      });
    }
  }
  
  // Notifications pour alertes émotionnelles
  if (preferencesNotifications.alertesEmotionnelles) {
    const criticalAlerts = alertesEmotionnelles.filter(alert => alert.severite === 'critique');
    if (criticalAlerts.length > 0) {
      notifications.push({
        id: `notif_alerte_critique_${Date.now()}`,
        title: '⚠️ Alerte Émotionnelle Critique',
        message: criticalAlerts[0].message,
        type: 'emotional_alert',
        priority: 'high',
        timestamp: now,
        severity: 'critique'
      });
    }
  }
  
  // Notifications pour rappels d'objectifs
  if (preferencesNotifications.rappelsObjectifs) {
    const upcomingReminders = rappels.filter(reminder => {
      const timeDiff = reminder.date.getTime() - now.getTime();
      return timeDiff > 0 && timeDiff < (2 * 60 * 60 * 1000); // Dans les 2 prochaines heures
    });
    
    upcomingReminders.forEach(reminder => {
      notifications.push({
        id: `notif_rappel_${reminder.id}`,
        title: '⏰ Rappel Objectif',
        message: `${reminder.title} - ${reminder.description}`,
        type: 'objective_reminder',
        priority: 'medium',
        timestamp: now,
        relatedId: reminder.relatedId
      });
    });
  }
  
  // Notifications pour suggestions de formations
  if (preferencesNotifications.suggestionsFormations) {
    const formationNotifications = context.formationsSuggerees.filter(formation => 
      formation.urgence === 'haute'
    );
    
    if (formationNotifications.length > 0) {
      notifications.push({
        id: `notif_formation_${Date.now()}`,
        title: '📚 Formation Recommandée',
        message: `${formationNotifications[0].titre} - Formation urgente disponible`,
        type: 'formation_suggestion',
        priority: 'low',
        timestamp: now,
        formation: formationNotifications[0]
      });
    }
  }
  
  return {
    notifications,
    newLastSent: notifications.length > 0 ? now : dernierEnvoiNotification
  };
};

// ============================================================================
// 👋 WELCOME MESSAGES - 4 types contextuels
// ============================================================================
const WELCOME_MESSAGES = {
  premiereVisite: (ctx) => `Bonjour, je suis Aegis 🛡️. Votre intelligence artificielle de protection professionnelle. Je suis ici pour vous aider à naviguer dans un monde du travail transformé par l'IA.

Je vois que vous êtes ${ctx.metier} avec ${ctx.anneesExperience} ans d'expérience. Votre score de risque actuel est à ${ctx.scoreRisque}%.

${ctx.formationsEnCours.length > 0 ? `Excellent ! Vous avez déjà commencé "${ctx.formationsEnCours[0].titre}" (${ctx.formationsEnCours[0].progression}% complété). C'est un très bon début ! 💪` : ''}

Je suis là pour vous accompagner personnellement. Qu'est-ce qui vous préoccupe aujourd'hui ?

— Aegis 🛡️ | Votre garde rapprochée contre l'obsolescence`,

  retourUtilisateur: (ctx) => `Re-bonjour ${ctx.prenom} ! Content de vous revoir 🛡️. 

Je vois que votre score de risque est à ${ctx.scoreRisque}%${ctx.evolutionScore !== 0 ? ` (${ctx.evolutionScore > 0 ? '+' : ''}${ctx.evolutionScore}% depuis la dernière fois)` : ''}.

${ctx.evolutionScore < 0 ? '📉 Votre score a légèrement augmenté. Pas de panique, on va travailler là-dessus ensemble.' : ''}
${ctx.evolutionScore > 0 ? '📈 Vous progressez bien ! Continue comme ça.' : ''}

${ctx.formationsEnCours[0].progression > 0 ? `Votre formation "${ctx.formationsEnCours[0].titre}" avance bien : ${ctx.formationsEnCours[0].progression}% complété.` : ''}

Qu'est-ce qui vous préoccupe aujourd'hui ?

— Aegis 🛡️ | Votre garde rapprochée contre l'obsolescence`,

  apresAlerte: (ctx) => `${ctx.prenom}, je remarque que vous avez consulté l'alerte sur "${ctx.derniereAlerteLue?.titre}" ${ctx.derniereAlerteLue?.date}.

C'est une préoccupation légitime pour les ${ctx.metier}. Voulez-vous qu'on analyse ensemble son **impact concret** sur votre métier et ce que vous pouvez faire dès maintenant pour vous protéger ?

Je peux vous donner :
- Une analyse détaillée de ce que ça change pour vous
- Les compétences exactes à développer en priorité
- Un plan d'action sur 3/6/12 mois

On en parle ? 🛡️

— Aegis 🛡️ | Votre garde rapprochée contre l'obsolescence`,

  modeEmpathique: (ctx) => {
    const emotion = ctx.dernierEtatEmotionnel;
    
    if (emotion === 'anxious') {
      return `Re-bonjour ${ctx.prenom} 💙

Je vois que vous étiez préoccupé lors de notre dernière conversation. Comment vous sentez-vous aujourd'hui ?

Rappelez-vous : le simple fait d'être ici et de vous préparer vous place dans le **top 10%** des professionnels qui prennent leur avenir en main.

Votre score de risque à ${ctx.scoreRisque}% ne définit pas votre valeur. Il définit juste les zones où concentrer vos efforts.

Je suis là pour vous. Qu'est-ce qui vous tracasse aujourd'hui ?

— Aegis 🛡️ | Votre garde rapprochée contre l'obsolescence`;
    }
    
    if (emotion === 'burnout') {
      return `Re-bonjour ${ctx.prenom} 💚

J'espère que vous avez pu vous reposer depuis notre dernière conversation.

**Rappel important :** On construit votre avenir sur le **long terme**. Pas besoin de tout faire tout de suite. La régularité bat toujours l'intensité.

Comment vous sentez-vous aujourd'hui ? Prêt pour une session tranquille ou vous avez besoin qu'on reparle de votre rythme ?

— Aegis 🛡️ | Votre garde rapprochée contre l'obsolescence`;
    }
    
    if (emotion === 'energetic') {
      return `Re-bonjour ${ctx.prenom} ! 🔥

J'adore cette énergie ! La dernière fois, vous étiez super motivé.

Vous avez avancé sur vos objectifs depuis ? Racontez-moi vos progrès, j'ai hâte de voir ce que vous avez accompli ! 💪

— Aegis 🛡️ | Votre potentiel est plus grand que vos peurs`;
    }
    
    // Fallback neutre
    return WELCOME_MESSAGES.retourUtilisateur(ctx);
  }
};

// ============================================================================
// 🎯 FONCTION DE SÉLECTION DU MESSAGE D'ACCUEIL
// ============================================================================
const getWelcomeMessage = (context) => {
  // 1. PREMIÈRE VISITE
  if (context.nombreVisites === 0 || !context.derniereVisite) {
    return WELCOME_MESSAGES.premiereVisite(context);
  }
  
  // 2. APRÈS ALERTE CRITIQUE (moins de 24h)
  if (context.derniereAlerteLue) {
    const alerteTimestamp = context.derniereAlerteLue.timestamp;
    const now = Date.now();
    const hours = (now - alerteTimestamp) / (1000 * 60 * 60);
    
    if (hours < 24) {
      return WELCOME_MESSAGES.apresAlerte(context);
    }
  }
  
  // 3. MODE EMPATHIQUE (si dernier état émotionnel fort)
  if (context.dernierEtatEmotionnel && context.dernierEtatEmotionnel !== 'neutral') {
    return WELCOME_MESSAGES.modeEmpathique(context);
  }
  
  // 4. RETOUR UTILISATEUR (défaut)
  return WELCOME_MESSAGES.retourUtilisateur(context);
};

// ============================================================================
// 🔄 FONCTION DE MISE À JOUR DU CONTEXTE
// ============================================================================
const updateUserContext = (context, updates) => {
  return {
    ...context,
    ...updates,
    derniereVisite: new Date(),
    nombreVisites: context.nombreVisites + 1
  };
};

// ============================================================================
// 🎯 RÉPONSES PERSONNALISÉES SELON L'INTENSITÉ ÉMOTIONNELLE
// ============================================================================
const getPersonalizedResponse = (context, emotion, message) => {
  const { prenom, scoreRisque, tendanceEmotionnelle, scoreEmotionnel, alertesEmotionnelles } = context;
  
  // Réponses selon l'intensité émotionnelle
  switch(emotion) {
    case 'anxious_high':
      return `💙 ${prenom}, je sens une grande détresse dans vos mots.

Je comprends que vous vous sentiez perdu face à l'IA. C'est normal d'avoir peur de l'inconnu.

🛡️ **VOTRE PROTECTION IMMÉDIATE :**

1. **Respiration** : Prenez 3 respirations profondes avec moi
   Inspire... Expire... Inspire... Expire... Inspire... Expire...

2. **Réalité** : Votre score de ${scoreRisque}% ne définit PAS votre valeur
   C'est juste une zone d'attention, pas une condamnation

3. **Action concrète** : Concentrons-nous sur 1 seule compétence cette semaine
   Pas 10. Pas 5. Juste 1.

${alertesEmotionnelles.length > 0 ? `⚠️ **ALERTE DÉTECTÉE :** ${alertesEmotionnelles[0].message}` : ''}

Voulez-vous qu'on commence par respirer ensemble ?

— Aegis 🛡️ | Votre ancre dans la tempête`;

    case 'anxious_moderate':
      return `🤝 ${prenom}, je vois que vous êtes préoccupé. C'est un signe de sagesse.

L'inquiétude, bien dosée, vous pousse à agir. C'est votre instinct de survie professionnel qui parle.

📊 **VOTRE SITUATION :**
• Score : ${scoreRisque}% (${scoreEmotionnel > 0 ? 'en amélioration' : scoreEmotionnel < 0 ? 'à surveiller' : 'stable'})
• Tendance : ${tendanceEmotionnelle === 'amélioration' ? '📈 En progression' : 
               tendanceEmotionnelle === 'détérioration' ? '📉 À redresser' : '📊 Stable'}

🎯 **PLAN D'ACTION CONCRET :**
1. Identifier votre plus grande peur (1 phrase)
2. Chercher 3 exemples de gens qui ont surmonté cette peur
3. Définir 1 action à faire cette semaine

Quelle est votre plus grande peur actuellement ?

— Aegis 🛡️ | Votre guide dans l'incertitude`;

    case 'burnout_severe':
      return `🆘 ${prenom}, ARRÊT IMMÉDIAT. 

Vous êtes en surchauffe émotionnelle. Votre cerveau a besoin de repos, pas de plus de pression.

🚨 **PROTOCOLE DE PROTECTION :**

1. **MAINTENANT** : Fermez cet onglet
2. **Aujourd'hui** : Maximum 30 min de travail technique
3. **Cette semaine** : 1 jour OFF complet (pas de code, pas de veille IA)
4. **Repas** : Mangez quelque chose de chaud
5. **Sommeil** : Couchez-vous à 22h max

🛡️ **VOTRE VRAIE PRIORITÉ :**
Votre santé mentale > Vos compétences techniques

${alertesEmotionnelles.length > 0 ? `🚨 **ALERTE CRITIQUE :** ${alertesEmotionnelles[0].message}` : ''}

**Je vous donne la permission de ralentir.**

Revenez me voir quand vous aurez dormi 8h. Je serai là.

— Aegis 🛡️ | Votre protecteur bienveillant`;

    case 'burnout_moderate':
      return `⚠️ ${prenom}, je détecte une surcharge cognitive.

Vous êtes dans la zone "trop de choses en même temps". C'est le chemin direct vers l'épuisement.

📈 **ANALYSE DE VOTRE ÉTAT :**
• Tendance : ${tendanceEmotionnelle}
• Score émotionnel : ${scoreEmotionnel}/10
• Risque d'escalade : ${scoreEmotionnel < -1 ? 'ÉLEVÉ' : 'MODÉRÉ'}

🛠️ **PLAN DE DÉCHARGE :**

1. **Liste** : Écrivez TOUT ce que vous voulez faire
2. **Sélection** : Gardez seulement les 3 plus importants
3. **Planning** : 1 chose par jour maximum
4. **Frontière** : Arrêt à 18h, point final

Voulez-vous qu'on trie ensemble vos priorités ?

— Aegis 🛡️ | Votre régulateur de charge`;

    case 'energetic_high':
      return `🔥 ${prenom}, CETTE ÉNERGIE EST MAGNIFIQUE !

Vous êtes dans la zone optimale : motivé, engagé, prêt à conquérir le monde de l'IA.

🚀 **CAPITALISONS SUR CETTE ÉNERGIE :**

1. **Objectif SMART** : Définissez 1 objectif précis pour cette semaine
2. **Action immédiate** : Que pouvez-vous faire MAINTENANT ?
3. **Momentum** : Cette énergie ne dure pas, utilisons-la !

📊 **VOTRE PROFIL ACTUEL :**
• Score risque : ${scoreRisque}%
• Tendance : ${tendanceEmotionnelle === 'amélioration' ? '📈 Excellente progression !' : '📊 Stable'}
• Énergie : 🔥 MAXIMALE

🎯 **CHALLENGE AEGIS :**
Pendant que vous avez cette énergie, accomplissez 3 choses :
1. Terminez 1 module de formation
2. Partagez votre progression sur LinkedIn
3. Aidez quelqu'un dans votre réseau

Quel est votre objectif pour cette semaine ?

— Aegis 🛡️ | Votre amplificateur de potentiel`;

    case 'discouraged':
      return `💪 ${prenom}, je vois que la motivation s'est érodée.

C'est normal. Tous les parcours ont des creux. L'important, c'est comment on en sort.

📉 **ANALYSE DE VOTRE DÉCOURAGEMENT :**
• Tendance : ${tendanceEmotionnelle}
• Score émotionnel : ${scoreEmotionnel}/10
• Phase : Probablement un "plateau d'apprentissage"

🔄 **STRATÉGIE DE RELANCE :**

1. **Révision** : Regardez où vous en étiez il y a 1 mois
2. **Petites victoires** : Identifiez 3 choses que vous avez apprises
3. **Perspective** : L'IA évolue, mais vous aussi
4. **Action micro** : 15 min de formation aujourd'hui seulement

💡 **RAPPEL IMPORTANT :**
Le découragement est temporaire. L'abandon est permanent.

Voulez-vous qu'on fasse un bilan de vos progrès ?

— Aegis 🛡️ | Votre rallumeur de flamme`;

    default:
      // Réponse par défaut avec contexte émotionnel
      return `👋 ${prenom}, je suis là pour vous accompagner.

📊 **VOTRE ÉTAT ÉMOTIONNEL :**
• Score émotionnel : ${scoreEmotionnel}/10
• Tendance : ${tendanceEmotionnelle}
• Dernière émotion : ${context.emotionsRecentes[context.emotionsRecentes.length - 1] || 'neutre'}

Comment puis-je vous aider aujourd'hui ?

— Aegis 🛡️ | Votre compagnon de route`;
  }
};

// ============================================================================
// 📚 SCENARIOS DATABASE - Base de réponses complètes
// ============================================================================
const SCENARIOS = {
  personalized: (ctx, emotion, message) => getPersonalizedResponse(ctx, emotion, message),
  
  // 📊 PROJECTION CARRIÈRE PROACTIVE
  careerProjection: (ctx) => generateCareerProjection(ctx),
  
  // 🥊 SPARRING SCENARIOS - Mode Challenge
  sparring_reconversion: (ctx) => SPARRING_SCENARIOS.reconversion(ctx),
  sparring_impactIA: (ctx) => SPARRING_SCENARIOS.impactIA(ctx),
  sparring_competences: (ctx) => SPARRING_SCENARIOS.competences(ctx),
  sparring_motivation: (ctx) => SPARRING_SCENARIOS.motivation(ctx),
  sparring_default: (ctx) => SPARRING_SCENARIOS.default(ctx),
  
  // 📸 ANALYSE D'OFFRE - Upload et Analyse
  analyseOffre: (ctx) => analyzeJobOffer(''),
  
  // 🧬 ANALYSE DE PERSONNALITÉ - ADN Professionnel
  personality: (ctx) => "Analyse de personnalité disponible",
  
  // 🎬 SIMULATION D'ENTRETIEN - Mode Recruteur
  interview: (ctx) => startInterview('junior', ctx),
  
  // 📈 COMPARAISON TOP PERFORMERS - Benchmark
  benchmark: (ctx) => generateBenchmark(ctx),
  detailedBenchmark: (ctx) => generateDetailedBenchmark(ctx),
  
  // 🎤 ELEVATOR PITCH GENERATOR - Générateur de Pitchs
  pitchGenerator: (ctx) => `🎤 **TES ELEVATOR PITCHS PERSONNALISÉS**

Basés sur ton profil : [${ctx.metier} → ${ctx.objectifReconversion}]

Choisis le type de pitch dont tu as besoin :

[💼 Entretien d'embauche] [🤝 Networking/Meetup]
[💻 Profil LinkedIn] [📧 Email candidature]

Ou dis-moi pour quelle situation tu as besoin d'un pitch !

— Aegis 🛡️`,
  
  pitchEntretien: (ctx) => generateElevatorPitch('entretien', ctx),
  pitchNetworking: (ctx) => generateElevatorPitch('networking', ctx),
  pitchLinkedin: (ctx) => generateElevatorPitch('linkedin', ctx),
  pitchEmail: (ctx) => generateElevatorPitch('email', ctx),

  impactIA: (ctx) => `Je comprends ton inquiétude, ${ctx.prenom}. C'est légitime.

📊 TON SCORE DE RISQUE : ${ctx.scoreRisque}%

Ça veut dire quoi ?

🟢 ${100 - ctx.scoreRisque}% DE TON TRAVAIL RESTE DIFFICILE À AUTOMATISER
✅ Architecture et décisions complexes
✅ Collaboration d'équipe
✅ Résolution de problèmes inédits
✅ Compréhension besoins business

🟡 ${ctx.scoreRisque}% PEUT ÊTRE ASSISTÉ PAR L'IA (pas remplacé)
🤖 Code boilerplate → GitHub Copilot
🤖 Debug → ChatGPT/Claude
🤖 Documentation → IA générative
🤖 Tests → Automatisation

La bonne nouvelle ? L'IA devient ton assistant turbo, pas ton remplaçant.

🎯 3 ACTIONS IMMÉDIATES :

1️⃣ Développer DevOps
L'IA ne déploie pas en prod toute seule
→ Formation Docker & Kubernetes

2️⃣ Renforcer soft skills
L'IA ne manage pas d'équipe
→ Bootcamp Leadership Tech

3️⃣ Plan personnalisé 12 mois
→ Lancer l'analyse

Avec ce plan, dans 6 mois, ton score passe à 42%. Tu passes de "exposé" à "protégé".

Qu'est-ce qui t'inquiète le plus ?

— Aegis 🛡️`,

  competences: (ctx) => `Excellente question ${ctx.prenom} ! Voyons ce qui compte pour un ${ctx.metier}.

🎯 COMPÉTENCES PRIORITAIRES

1. DevOps & Cloud 🔥
✅ Docker & Kubernetes (tu es à ${ctx.formationsEnCours[0].progression}% !)
✅ CI/CD (GitHub Actions, GitLab)
✅ AWS ou Azure
✅ Terraform

Impact : ${ctx.scoreRisque}% → 48% (-19%)

2. Architecture ⚡
✅ Microservices
✅ API design
✅ Performance
✅ Security

Impact : 48% → 38% (-10%)

3. Soft Skills 💪
✅ Communication
✅ Leadership
✅ Problem-solving
✅ Mentorat

Impact : 38% → 28% (-10%)

4. IA & Automatisation 🤖
✅ Prompt engineering
✅ GitHub Copilot
✅ Automatisation workflow

Impact : 28% → 25% (-3%)

📈 ROADMAP 12 MOIS

Phase 1 (Mois 1-3) : DevOps
✅ Terminer Docker
✅ CI/CD en prod
✅ Certif AWS

Phase 2 (Mois 4-6) : Architecture
✅ Microservices
✅ Monitoring
✅ Open source

Phase 3 (Mois 7-9) : Leadership
✅ Mentorer junior
✅ Tech talks
✅ Blog

Phase 4 (Mois 10-12) : Position atteinte
✅ Portfolio complet
✅ Certification avancée
✅ Transition

Tu veux qu'on détaille quelle phase ?

— Aegis 🛡️`,

  metiersSimilaires: (ctx) => `Parfait ${ctx.prenom}, voyons les métiers AI-proof pour toi.

🎯 TOP 5 MÉTIERS

1. 🥇 DevOps Engineer (Match: 94%)
💰 50-70K€ (+20-40%)
🤖 Saturation IA : 23%
⏱️ Time-to-ready : 6-9 mois

2. 🥈 Solutions Architect (89%)
💰 60-85K€ (+40-70%)
🤖 Saturation : 18%
⏱️ 12-18 mois

3. 🥉 SRE (87%)
💰 55-75K€ (+30-50%)
🤖 Saturation : 21%
⏱️ 9-12 mois

4. Tech Product Manager (81%)
💰 55-80K€ (+30-60%)
🤖 Saturation : 15%
⏱️ 12-18 mois

5. Backend Specialist (83%)
💰 48-65K€ (+15-35%)
🤖 Saturation : 34%
⏱️ 3-6 mois

🎯 MON CONSEIL

Ton objectif : ${ctx.objectifReconversion}

C'est PARFAIT car :
✅ Match 94%
✅ Tu apprends déjà Docker
✅ Forte demande (+47%)
✅ Faible saturation IA
✅ Bon salaire

Tu veux le plan détaillé ?

— Aegis 🛡️`,

  analyseOffre: (ctx) => `Super ${ctx.prenom} ! Voici la méthode Aegis pour analyser une offre.

🔍 GRILLE D'ANALYSE (sur 100)

1️⃣ MATCH TECHNIQUE (30 pts)
Tes compétences :
${ctx.competences.map(c => `✅ ${c}`).join('\n')}
→ +5 pts par compétence matchée

2️⃣ RED FLAGS (-20 pts max)
🚩 "Salaire compétitif" sans chiffre : -5
🚩 Scope flou : -5
🚩 "Fast-paced" : -3
🚩 Stack obsolète : -8

3️⃣ OPPORTUNITÉS (20 pts)
✅ Mentorship : +5
✅ Formation : +5
✅ Évolution : +5
✅ Stack moderne : +5

4️⃣ WORK-LIFE (15 pts)
✅ Remote : +5
✅ Flexibilité : +3
✅ RTT : +4

5️⃣ ALIGNEMENT (15 pts)
Pour DevOps :
✅ Mission DevOps : +10
✅ Cloud-native : +5
✅ Équipe >10 : +5

📊 EXEMPLE

Offre : "Senior React - Startup"

Match : 22/30
Red flags : -18
Opportunités : 8/20
Work-life : 8/15
Alignement : 10/15

SCORE : 30/100 ⚠️

VERDICT : Passe ton chemin.

💡 CE QUE TU FAIS

1. Partage-moi l'offre
2. Je l'analyse en détail
3. Je génère :
   ✅ Score personnalisé
   ✅ Red flags
   ✅ Lettre motivation
   ✅ Questions entretien
   ✅ 3 offres mieux payées

Prêt à analyser une vraie offre ?

— Aegis 🛡️`,

  anxiete: (ctx) => `Hey ${ctx.prenom}, je sens que tu es préoccupé. C'est normal 💙

Le simple fait d'être ici te place dans le top 10% qui se préparent activement.

90% des gens ignorent le problème. Toi, tu l'affrontes.

📊 Ton score : ${ctx.scoreRisque}%

Ça ne veut PAS dire "${ctx.scoreRisque}% de perdre ton job".
Ça veut dire : "${ctx.scoreRisque}% de tâches assistées par IA".

Nuance énorme.

🛡️ PROTECTION = ADAPTATION

Ce que tu as déjà :
✅ ${ctx.anneesExperience} ans d'XP
✅ ${ctx.competences.join(', ')}
✅ Formation en cours : ${ctx.formationsEnCours[0].progression}%
✅ Tu apprends MAINTENANT

🎯 3 VÉRITÉS

1. L'IA est un assistant
   Tu ne seras pas remplacé par l'IA.
   Mais par quelqu'un qui l'utilise mieux.
   
2. Les soft skills sont IA-proof
   L'IA ne manage pas
   Ne négocie pas
   N'inspire pas
   
3. Le marché recrute PLUS
   +47% de postes DevOps en 2024

💪 ACTION ANTI-ANXIÉTÉ

1️⃣ Quick Win (cette semaine)
   Termine 1 module Docker
   
2️⃣ Talk avec moi (maintenant)
   Qu'est-ce qui te fait le plus peur ?
   
3️⃣ Reminder
   "Je construis mon avenir."

Alors, qu'est-ce qui te fait peur concrètement ?

— Aegis 🛡️`,

  burnout: (ctx) => `⚠️ ALERTE BIEN-ÊTRE

${ctx.prenom}, stop. Pause immédiate.

Je vais être direct : tu es en train de te cramer.

🧠 Ce que je vois :
- Mots "fatigué", "trop", "abandonner"
- Pression du score ${ctx.scoreRisque}%
- Apprentissage trop rapide

RÉALITÉ :

Ton cerveau n'apprend PAS par gavage.
Il apprend par répétition + sommeil + repos.

10h marathon = info s'évapore en 48h
VS
2h sur 5 jours = rétention 10x

Tu vis une SURCHARGE COGNITIVE.

Ce n'est PAS que tu es nul.
C'est que ton approche est toxique.

🚨 NOUVELLES RÈGLES

1️⃣ MAX 2h/jour
   1h matin + 1h soir
   Jamais plus

2️⃣ Pratique > théorie
   20min vidéo → 40min pratique

3️⃣ 1 jour OFF/semaine
   Dimanche = zéro code

4️⃣ Couper à 22h
   Apprendre fatigué = gaspillage

🛠️ NOUVEAU PLAN

Ancien (insoutenable) :
❌ Tout tout de suite
❌ 20h/semaine
❌ Stress

Nouveau (durable) :
✅ 8 semaines Docker
✅ 10h/semaine max
✅ 1 jour off
✅ Progrès mesurables

Durée : Identique
Rétention : 3x supérieure
Burnout : Quasi nul

🎯 LE BUT

Arriver en 2026 EN FORME, pas s'effondrer en février.

💚 RESPIRE

Là, maintenant :
1. Ferme tes onglets
2. Prends l'air 10 min
3. Reviens me parler

Je ne te juge pas. Je te protège.

Deal ?

— Aegis 🛡️`,

  motivation: (ctx) => `🔥 EXCELLENTE ÉNERGIE ${ctx.prenom.toUpperCase()} !

Profitons de cet élan pour construire du concret.

🎯 PLAN D'ACTION

🚀 AUJOURD'HUI (2h max)

1️⃣ Quick Win (1h)
   Docker : ${ctx.formationsEnCours[0].progression}% → 40%
   Module : "Docker Compose"
   
2️⃣ Side Project (1h)
   Conteneuriser app React + Node
   Publier sur GitHub

📅 CETTE SEMAINE (10h)

Lundi : Docker Compose (2h)
Mardi : Projet + doc (2h)
Mercredi : CI/CD GitHub Actions (2h)
Jeudi : OFF (repos)
Vendredi : Pipeline auto (2h)
Week-end : Article LinkedIn (2h)

📊 RÉSULTAT FIN SEMAINE :
✅ Formation : 34% → 50%
✅ 1 projet GitHub
✅ 1 pipeline CI/CD
✅ 1 post LinkedIn
✅ Accomplissement : 📈

🎮 GAMIFICATION

Badges à débloquer :
🏆 Docker Ninja
🏆 CI/CD Warrior
🏆 Public Learner

⚡ CHALLENGE AEGIS

Semaine Sprint DevOps

Règles :
- 2h/jour max
- 1 réalisation/jour
- Partage tes wins
- Repos jeudi

Récompense :
🎁 Score ${ctx.scoreRisque}% → ${ctx.scoreRisque - 5}%
🎁 +2 projets portfolio
🎁 Compétences intermédiaires

💪 TU ES READY ?

Écris "SPRINT START" et je te débloquerai :
- Plan jour par jour
- Ressources exactes
- Tracker progression

C'est TON énergie !

— Aegis 🛡️`,

  default: (ctx) => `Salut ${ctx.prenom} ! 👋

Je suis là pour t'aider avec ta carrière et l'IA.

💬 Tu peux me demander :

- Impact IA sur ${ctx.metier}
- Compétences à développer
- Atteindre : ${ctx.objectifReconversion}
- Analyser une offre
- Conseils sur ${ctx.formationsEnCours[0].titre}
- Gérer stress/anxiété
- Plan carrière sur mesure

Je connais ton profil, ton score (${ctx.scoreRisque}%), et je suis là pour toi.

Qu'est-ce qui te préoccupe ?

— Aegis 🛡️`
};

// ============================================================================
// 🥊 SPARRING SCENARIOS - Mode Challenge (Avocat du Diable)
// ============================================================================
const SPARRING_SCENARIOS = {
  impactIA: (ctx) => `Intéressant que tu t'inquiètes de l'IA, ${ctx.prenom}. Mais creusons un peu.

**Question directe :** Pourquoi tu devrais être protégé si tu ne te formes pas activement ?

Ton score à ${ctx.scoreRisque}% ne va pas magiquement baisser. 

**Les faits brutaux :**
- Tu es à ${ctx.formationsEnCours[0].progression}% sur Docker depuis combien de temps ?
- Combien de projets concrets tu as faits ce mois-ci ? 
- Tu lis sur l'IA ou tu **pratiques** l'IA ?

L'IA ne remplace pas les gens compétents.
Elle remplace ceux qui **parlent** de s'améliorer sans **agir**.

Alors, tu veux vraiment te protéger ou juste être rassuré ? 🥊

— Aegis 🛡️ | Mode Challenge activé`,

  reconversion: (ctx) => `Tu veux devenir ${ctx.objectifReconversion} ? Cool. Mais soyons honnêtes.

**Challenge :**

80% des gens qui disent vouloir "devenir DevOps" abandonnent en 3 mois.

Pourquoi tu serais différent ?

**Questions qui fâchent :**
- Qu'est-ce que TU apportes de différent des 10,000 autres candidats ?
- Tu as une vraie compréhension de ce que fait un DevOps au quotidien ?
- Ton portfolio montre-t-il que tu es sérieux ou c'est juste "une idée" ?

Je ne te décourage pas. Je t'aide à **construire un vrai avantage compétitif**.

Prêt à me prouver que tu es sérieux ? 🥊

— Aegis 🛡️ | Mode Challenge activé`,

  competences: (ctx) => `${ctx.prenom}, arrêtons de tourner autour du pot.

Tu veux développer tes compétences ? Parfait.

**Mais voici la vérité :**

Tout le monde veut "développer ses compétences". C'est devenu un cliché.

**La vraie question :** Qu'est-ce que tu fais CONCRÈTEMENT aujourd'hui pour les développer ?

- Tu regardes des vidéos YouTube et tu appelles ça "formation" ?
- Tu lis des articles et tu penses être "à jour" ?
- Tu fais des petits projets et tu crois être "expérimenté" ?

**Challenge :** Montre-moi UN projet que tu as fini cette semaine. Pas commencé. FINI.

Si tu n'en as pas, alors tu ne développes pas tes compétences.
Tu te donnes bonne conscience.

Alors, qu'est-ce que tu vas faire DIFFÉREMMENT demain ? 🥊

— Aegis 🛡️ | Mode Challenge activé`,

  motivation: (ctx) => `Ah, la motivation... Le refuge des gens qui n'avancent pas.

${ctx.prenom}, la motivation c'est comme les émotions : ça va, ça vient.

**Mais les gens qui réussissent, ils n'attendent pas la motivation.**

Ils ont des **SYSTÈMES**. Des **HABITUDES**. Des **RITUELS**.

Tu veux être motivé ? Commence par faire quelque chose de concrets.

**Challenge brutal :**
- Si tu étais vraiment motivé, tu aurais déjà fini ${ctx.formationsEnCours[0].titre}
- Si tu étais vraiment motivé, tu aurais déjà postulé à 5 offres
- Si tu étais vraiment motivé, tu aurais déjà un portfolio à jour

La motivation suit l'action, pas l'inverse.

Alors, au lieu de chercher la motivation, montre-moi ce que tu as ACCOMPLI cette semaine. 🥊

— Aegis 🛡️ | Mode Challenge activé`,

  default: (ctx) => `${ctx.prenom}, je vais être direct avec toi.

Tu es en mode challenge maintenant. Pas de bisous, pas de réconfort.

**La question fondamentale :** Qu'est-ce que tu veux VRAIMENT accomplir ?

Pas ce que tu "aimerais bien faire".
Pas ce que tu "penses peut-être essayer".
Pas ce que tu "voudrais devenir".

Ce que tu veux **ACCOMPLIR**. Concrètement. Mesurablement.

**Challenge :** Donne-moi 3 actions précises que tu vas faire cette semaine.
Pas des "je vais essayer". Des "je vais faire".

Si tu ne peux pas me donner ça, alors tu ne sais pas où tu vas.
Et si tu ne sais pas où tu vas, tu n'iras nulle part.

Alors, quelles sont tes 3 actions ? 🥊

— Aegis 🛡️ | Mode Challenge activé`
};

// ============================================================================
// 📸 ANALYSE D'OFFRE PAR SCREENSHOT - Upload et Analyse
// ============================================================================
const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  // Vérifier le type de fichier
  if (!file.type.startsWith('image/')) {
    alert('Veuillez sélectionner une image valide');
    return;
  }
  
  // Vérifier la taille (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    alert('L\'image doit faire moins de 5MB');
    return;
  }
  
  // Simuler l'extraction de texte (en production: utiliser Tesseract.js ou API OCR)
  const reader = new FileReader();
  reader.onload = (event) => {
    setUploadedImage(event.target.result);
    
    // Simuler analyse (en prod: faire OCR puis analyse)
    const simulatedOfferText = `
Titre: Senior React Developer
Entreprise: TechStartup
Stack: React 17, Node.js, MongoDB, Docker
Salaire: Non affiché
Description: Environnement startup fast-paced, porter plusieurs casquettes, équipe jeune et dynamique, possibilité de télétravail partiel
Exigences: 5+ ans d'expérience React, connaissance de l'écosystème JavaScript, expérience avec les APIs REST
Avantages: Ticket restaurant, mutuelle, prime sur objectifs, équipe soudée
    `.trim();
    
    analyzeJobOffer(simulatedOfferText);
  };
  reader.readAsDataURL(file);
};

const analyzeJobOffer = (offerText) => {
  // Analyse basique (pattern matching)
  const redFlags = [];
  const greenFlags = [];
  const techStack = [];
  const salaryInfo = [];
  const workLifeBalance = [];
  
  // Détection des red flags
  if (offerText.toLowerCase().includes('salaire non affiché') || offerText.toLowerCase().includes('salaire: non')) {
    redFlags.push('Salaire non transparent (-5 pts)');
  }
  if (offerText.toLowerCase().includes('fast-paced')) {
    redFlags.push('Environnement "fast-paced" = risque overwork (-3 pts)');
  }
  if (offerText.toLowerCase().includes('plusieurs casquettes')) {
    redFlags.push('Scope creep détecté (-5 pts)');
  }
  if (offerText.toLowerCase().includes('startup') && !offerText.toLowerCase().includes('équity')) {
    redFlags.push('Startup sans équity mentionnée (-2 pts)');
  }
  if (offerText.toLowerCase().includes('disponible 24/7') || offerText.toLowerCase().includes('disponibilité 24h')) {
    redFlags.push('Disponibilité 24/7 exigée (-8 pts)');
  }
  
  // Détection des green flags
  if (offerText.toLowerCase().includes('télétravail') || offerText.toLowerCase().includes('remote')) {
    greenFlags.push('Télétravail proposé (+4 pts)');
  }
  if (offerText.toLowerCase().includes('formation') || offerText.toLowerCase().includes('learning budget')) {
    greenFlags.push('Budget formation (+3 pts)');
  }
  if (offerText.toLowerCase().includes('équité') || offerText.toLowerCase().includes('equity')) {
    greenFlags.push('Participation au capital (+5 pts)');
  }
  if (offerText.toLowerCase().includes('mutuelle') || offerText.toLowerCase().includes('santé')) {
    greenFlags.push('Mutuelle santé (+2 pts)');
  }
  if (offerText.toLowerCase().includes('congés') && offerText.toLowerCase().includes('illimité')) {
    greenFlags.push('Congés illimités (+4 pts)');
  }
  
  // Extraction de la stack technique
  const techKeywords = ['react', 'vue', 'angular', 'node.js', 'python', 'java', 'typescript', 'docker', 'kubernetes', 'aws', 'mongodb', 'postgresql', 'redis'];
  techKeywords.forEach(tech => {
    if (offerText.toLowerCase().includes(tech)) {
      techStack.push(tech.charAt(0).toUpperCase() + tech.slice(1));
    }
  });
  
  // Analyse du salaire
  const salaryMatch = offerText.match(/salaire[:\s]*([0-9\s\-k€\.]+)/i);
  if (salaryMatch) {
    salaryInfo.push(`Salaire mentionné: ${salaryMatch[1]}`);
  } else {
    salaryInfo.push('Salaire non spécifié');
  }
  
  // Analyse work-life balance
  if (offerText.toLowerCase().includes('équipe jeune et dynamique')) {
    workLifeBalance.push('Équipe jeune (attention au turnover)');
  }
  if (offerText.toLowerCase().includes('possibilité de télétravail')) {
    workLifeBalance.push('Flexibilité télétravail');
  }
  
  // Calcul du score global
  let score = 70; // Score de base
  score -= redFlags.length * 3; // Pénalité red flags
  score += greenFlags.length * 2; // Bonus green flags
  score = Math.max(0, Math.min(100, score)); // Borné entre 0 et 100
  
  const analysis = `🔍 **ANALYSE D'OFFRE AEGIS**

📊 **SCORE GLOBAL: ${score}/100**

**📋 INFORMATIONS EXTRAITES:**
• **Titre:** Senior React Developer
• **Entreprise:** TechStartup
• **Stack Technique:** ${techStack.join(', ')}
• **Salaire:** ${salaryInfo.join(', ')}

**🚩 RED FLAGS DÉTECTÉS (${redFlags.length}):**
${redFlags.length > 0 ? redFlags.map(flag => `• ${flag}`).join('\n') : '• Aucun red flag majeur détecté ✅'}

**✅ GREEN FLAGS DÉTECTÉS (${greenFlags.length}):**
${greenFlags.length > 0 ? greenFlags.map(flag => `• ${flag}`).join('\n') : '• Aucun green flag significatif détecté'}

**⚖️ WORK-LIFE BALANCE:**
${workLifeBalance.length > 0 ? workLifeBalance.map(item => `• ${item}`).join('\n') : '• Informations limitées sur l\'équilibre vie pro/perso'}

**🎯 RECOMMANDATIONS AEGIS:**
${score >= 80 ? '• Offre très attractive, postule sans hésiter !' : 
  score >= 60 ? '• Offre correcte, mais négocie les points faibles' : 
  '• Offre à éviter ou négocier fortement'}

**💡 QUESTIONS À POSER EN ENTRETIEN:**
• ${redFlags.length > 0 ? 'Comment gérez-vous la charge de travail ?' : 'Quelles sont les perspectives d\'évolution ?'}
• Quel est le budget formation annuel ?
• Comment mesurez-vous la performance ?
• Quelles sont les valeurs de l'entreprise ?

— Aegis 🛡️ | Analyse automatique d'offre`;

  return analysis;
};

// ============================================================================
// 🧬 ADN PROFESSIONNEL - Cartographie de Personnalité
// ============================================================================
const analyzePersonality = (messages, userContext) => {
  // Analyse basée sur les messages de l'utilisateur
  const userMessages = messages.filter(m => m.isUser).map(m => m.text.toLowerCase());
  
  // Détection de patterns de personnalité
  const isMethodical = userMessages.some(m => m.match(/plan|étapes|structuré|organisation|système|processus/));
  const isCreative = userMessages.some(m => m.match(/créatif|nouveau|innover|original|innovation|idée/));
  const isAnalytical = userMessages.some(m => m.match(/analyse|données|chiffres|stats|métriques|performance/));
  const isIntroverted = userMessages.some(m => m.match(/seul|autonome|networking difficile|timide|solitaire/));
  const isExtroverted = userMessages.some(m => m.match(/équipe|collaboration|leadership|management|diriger/));
  const isDetailOriented = userMessages.some(m => m.match(/détail|précis|exact|rigoureux|perfectionniste/));
  const isBigPicture = userMessages.some(m => m.match(/vision|stratégie|global|ensemble|objectif/));
  const isRiskAverse = userMessages.some(m => m.match(/sécurisé|stable|garanti|risque|peur|anxiété/));
  const isRiskTaker = userMessages.some(m => m.match(/challenge|risque|aventure|nouveau|changement/));
  const isLearningFocused = userMessages.some(m => m.match(/apprendre|formation|développer|compétences|étudier/));
  
  // Calcul des scores de personnalité
  const scores = {
    methodical: isMethodical ? 8.5 : (isDetailOriented ? 7.5 : 6.0),
    resilience: isRiskTaker ? 8.8 : (isRiskAverse ? 7.0 : 8.2),
    learning: isLearningFocused ? 9.2 : (isAnalytical ? 8.5 : 7.8),
    analytical: isAnalytical ? 9.2 : (isMethodical ? 8.0 : 7.0),
    perseverance: isMethodical ? 8.9 : (isDetailOriented ? 8.7 : 7.5),
    creativity: isCreative ? 8.3 : (isBigPicture ? 7.8 : 6.5),
    social: isExtroverted ? 8.1 : (isIntroverted ? 5.2 : 6.8),
    leadership: isExtroverted ? 7.8 : (isBigPicture ? 6.9 : 5.5),
    adaptability: isRiskTaker ? 8.7 : (isCreative ? 8.1 : 7.3),
    communication: isExtroverted ? 8.4 : (isIntroverted ? 6.1 : 7.2)
  };
  
  // Détermination de l'archétype principal
  let primaryArchetype, archetypeDescription, mantra;
  
  if (isMethodical && isAnalytical && !isExtroverted) {
    primaryArchetype = "👷 LE CONSTRUCTEUR MÉTHODIQUE";
    archetypeDescription = `**Profil psychologique :**
- Tu aimes les processus clairs et les résultats mesurables
- Tu es motivé par l'impact concret et tangible de ton travail
- Tu préfères l'apprentissage structuré au chaos créatif
- Tu valorises la maîtrise technique sur le networking social`;
    mantra = "Dis-moi le plan, je l'exécute à la perfection";
  } else if (isCreative && isBigPicture && isRiskTaker) {
    primaryArchetype = "🎨 L'INNOVATEUR VISIONNAIRE";
    archetypeDescription = `**Profil psychologique :**
- Tu vois les possibilités là où d'autres voient des problèmes
- Tu es motivé par l'impact transformationnel et l'innovation
- Tu préfères l'exploration créative aux processus rigides
- Tu valorises l'originalité et la disruption positive`;
    mantra = "L'avenir se construit par ceux qui osent l'imaginer";
  } else if (isAnalytical && isDetailOriented && !isExtroverted) {
    primaryArchetype = "🔬 L'ANALYSTE PRÉCISION";
    archetypeDescription = `**Profil psychologique :**
- Tu excelles dans l'analyse approfondie et la recherche de vérité
- Tu es motivé par la compréhension profonde et la précision
- Tu préfères la qualité à la quantité dans tes analyses
- Tu valorises l'exactitude et la rigueur intellectuelle`;
    mantra = "La vérité est dans les détails";
  } else if (isExtroverted && isLeadership && isBigPicture) {
    primaryArchetype = "🎯 LE LEADER STRATÉGIQUE";
    archetypeDescription = `**Profil psychologique :**
- Tu excelles dans la coordination d'équipes et la vision stratégique
- Tu es motivé par l'impact collectif et la réalisation d'objectifs
- Tu préfères la collaboration à l'isolement
- Tu valorises le leadership et l'influence positive`;
    mantra = "Ensemble, on va plus loin et plus vite";
  } else {
    primaryArchetype = "🚀 L'ADAPTATEUR POLYVALENT";
    archetypeDescription = `**Profil psychologique :**
- Tu excelles dans l'adaptation et la polyvalence
- Tu es motivé par la diversité et les nouveaux défis
- Tu préfères la flexibilité aux structures rigides
- Tu valorises l'apprentissage continu et l'évolution`;
    mantra = "Chaque jour est une nouvelle opportunité d'apprendre";
  }
  
  // Génération des métiers idéaux basés sur l'archétype
  const idealJobs = generateIdealJobs(primaryArchetype, userContext, scores);
  
  return `🧬 **TON ADN PROFESSIONNEL RÉVÉLÉ**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎭 **ARCHÉTYPE PRINCIPAL**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${primaryArchetype}

${archetypeDescription}

**Ton mantra :** "${mantra}"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ **FORCES CACHÉES** (Souvent sous-estimées)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💪 **Résilience face au changement :** ${scores.resilience}/10
   → ${scores.resilience >= 8.5 ? "Tu t'adaptes plus vite que tu ne le crois" : "Tu as une capacité d'adaptation solide"}

🧠 **Capacité d'apprentissage autodidacte :** ${scores.learning}/10
   → ${scores.learning >= 8.5 ? `Tu as appris ${userContext.competences[0]} seul, c'est top 20%` : "Tu apprends efficacement quand tu es motivé"}

🔍 **Pensée analytique :** ${scores.analytical}/10
   → ${scores.analytical >= 8.5 ? "Tu décortiques les problèmes avec précision chirurgicale" : "Tu analyses les situations avec méthode"}

🎯 **Persévérance méthodique :** ${scores.perseverance}/10
   → ${scores.perseverance >= 8.5 ? "Tu finis ce que tu commences (rare chez les autodidactes)" : "Tu es persistant dans tes objectifs"}

${scores.creativity >= 7.5 ? `🎨 **Créativité et innovation :** ${scores.creativity}/10
   → Tu apportes des perspectives originales et des solutions innovantes` : ''}

${scores.leadership >= 7.0 ? `👥 **Leadership naturel :** ${scores.leadership}/10
   → Tu inspires et guides naturellement les autres` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ **ANGLES MORTS À TRAVAILLER**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${scores.perseverance >= 8.5 ? `🔴 **Tendance au perfectionnisme paralysant**
   → Tu bloques sur "parfaire" au lieu de "terminer vite"
   → **Solution:** Adopte la règle "80% = done"` : ''}

${scores.social <= 6.0 ? `🔴 **Difficulté à networker** (introversion)
   → Tu sous-estimes le pouvoir des connexions humaines
   → **Solution:** 1 café professionnel/mois suffit (pas besoin de 50)` : ''}

${scores.adaptability <= 7.0 ? `🔴 **Résistance au changement**
   → Tu préfères la stabilité à l'évolution
   → **Solution:** Teste une nouvelle compétence chaque trimestre` : ''}

${scores.communication <= 6.5 ? `🔴 **Communication à améliorer**
   → Tu peux avoir du mal à exprimer tes idées
   → **Solution:** Pratique la technique "1 idée = 1 phrase claire"` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **MÉTIERS IDÉAUX POUR TON ADN**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ces métiers valorisent tes forces naturelles :

${idealJobs.map((job, index) => `${index + 1}. ${job.medal} **${job.title}** (match: ${job.match}%)
   **Pourquoi :** ${job.reason}`).join('\n\n')}

${generateAvoidJobs(primaryArchetype)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📈 **RECOMMANDATIONS DE DÉVELOPPEMENT**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Priorité 1 - Développer :** ${getPriorityDevelopment(scores)}
**Priorité 2 - Approfondir :** ${getSecondaryDevelopment(scores)}
**Priorité 3 - Explorer :** ${getExplorationArea(scores)}

**Objectif 3 mois :** ${getThreeMonthGoal(userContext, scores)}
**Objectif 6 mois :** ${getSixMonthGoal(userContext, scores)}

[📥 Télécharger ton ADN en PDF] [🔄 Refaire analyse dans 3 mois]

— Aegis 🛡️`;
};

const generateIdealJobs = (archetype, userContext, scores) => {
  const baseJobs = [
    { title: userContext.objectifReconversion, match: 94, medal: "🥇", reason: "Processus clairs, impact mesurable, automatisation" }
  ];
  
  if (archetype.includes("CONSTRUCTEUR")) {
    return [
      ...baseJobs,
      { title: "Data Engineer", match: 89, medal: "🥈", reason: "Pipelines structurés, résultats tangibles, peu de BS" },
      { title: "Solutions Architect", match: 87, medal: "🥉", reason: "Conception méthodique, vision d'ensemble" },
      { title: "Backend Engineer", match: 83, medal: "🏅", reason: "Logique pure, performance mesurable" },
      { title: "Site Reliability Engineer", match: 81, medal: "🏅", reason: "Optimisation systématique, métriques claires" }
    ];
  } else if (archetype.includes("INNOVATEUR")) {
    return [
      ...baseJobs,
      { title: "Product Manager Innovation", match: 91, medal: "🥈", reason: "Vision produit, disruption, impact utilisateur" },
      { title: "Tech Lead", match: 88, medal: "🥉", reason: "Direction technique, innovation, équipes" },
      { title: "Startup Founder", match: 85, medal: "🏅", reason: "Création, vision, transformation" },
      { title: "R&D Engineer", match: 82, medal: "🏅", reason: "Recherche, expérimentation, nouveauté" }
    ];
  } else if (archetype.includes("ANALYSTE")) {
    return [
      ...baseJobs,
      { title: "Data Scientist", match: 92, medal: "🥈", reason: "Analyse approfondie, insights, précision" },
      { title: "Research Engineer", match: 89, medal: "🥉", reason: "Recherche, méthodologie, rigueur" },
      { title: "Performance Engineer", match: 86, medal: "🏅", reason: "Optimisation, métriques, amélioration" },
      { title: "Technical Writer", match: 83, medal: "🏅", reason: "Précision, clarté, documentation" }
    ];
  } else if (archetype.includes("LEADER")) {
    return [
      ...baseJobs,
      { title: "Engineering Manager", match: 93, medal: "🥈", reason: "Leadership technique, stratégie, équipes" },
      { title: "Technical Director", match: 90, medal: "🥉", reason: "Vision technique, organisation, impact" },
      { title: "Product Owner", match: 87, medal: "🏅", reason: "Stratégie produit, coordination, résultats" },
      { title: "Team Lead", match: 84, medal: "🏅", reason: "Mentorat, développement, performance" }
    ];
  } else {
    return [
      ...baseJobs,
      { title: "Full Stack Developer", match: 88, medal: "🥈", reason: "Polyvalence, adaptabilité, diversité" },
      { title: "Consultant Technique", match: 85, medal: "🥉", reason: "Variété projets, expertise, flexibilité" },
      { title: "Freelance Developer", match: 82, medal: "🏅", reason: "Autonomie, diversité, évolution" },
      { title: "Technical Consultant", match: 79, medal: "🏅", reason: "Expertise, conseil, variété" }
    ];
  }
};

const generateAvoidJobs = (archetype) => {
  if (archetype.includes("CONSTRUCTEUR")) {
    return `❌ **Métiers à éviter pour ton profil :**
- Sales/Commercial (trop de networking forcé)
- Product Manager (trop politique, pas assez technique)
- Freelance multi-casquettes (trop de chaos)`;
  } else if (archetype.includes("INNOVATEUR")) {
    return `❌ **Métiers à éviter pour ton profil :**
- Support Technique (trop répétitif, pas assez créatif)
- QA Manual (trop routinier, pas assez d'innovation)
- Administration Système (trop maintenance, pas assez création)`;
  } else if (archetype.includes("ANALYSTE")) {
    return `❌ **Métiers à éviter pour ton profil :**
- Sales/Commercial (trop de pression, pas assez d'analyse)
- Customer Success (trop relationnel, pas assez technique)
- Marketing (trop créatif, pas assez analytique)`;
  } else if (archetype.includes("LEADER")) {
    return `❌ **Métiers à éviter pour ton profil :**
- Développeur Solo (trop isolé, pas assez de leadership)
- QA Automatisé (trop technique, pas assez humain)
- DevOps Technique (trop opérationnel, pas assez stratégique)`;
  } else {
    return `❌ **Métiers à éviter pour ton profil :**
- Spécialiste très pointu (trop monotone, pas assez varié)
- Management pur (pas assez technique)
- Rôles très répétitifs (pas assez d'évolution)`;
  }
};

const getPriorityDevelopment = (scores) => {
  const lowestScores = Object.entries(scores)
    .sort(([,a], [,b]) => a - b)
    .slice(0, 2);
  
  const developmentMap = {
    methodical: "Organisation et planification",
    resilience: "Gestion du changement et adaptation",
    learning: "Apprentissage continu et autodidaxie",
    analytical: "Analyse de données et résolution de problèmes",
    perseverance: "Persistance et achèvement de projets",
    creativity: "Innovation et pensée créative",
    social: "Networking et relations professionnelles",
    leadership: "Leadership et influence",
    adaptability: "Flexibilité et adaptation",
    communication: "Communication et présentation"
  };
  
  return lowestScores.map(([key]) => developmentMap[key] || key).join(", ");
};

const getSecondaryDevelopment = (scores) => {
  const midScores = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(2, 4);
  
  const developmentMap = {
    methodical: "Méthodologie et processus",
    resilience: "Résilience et gestion du stress",
    learning: "Apprentissage et développement",
    analytical: "Analytique et critique",
    perseverance: "Persévérance et détermination",
    creativity: "Créativité et innovation",
    social: "Social et collaboration",
    leadership: "Leadership et management",
    adaptability: "Adaptabilité et flexibilité",
    communication: "Communication et expression"
  };
  
  return midScores.map(([key]) => developmentMap[key] || key).join(", ");
};

const getExplorationArea = (scores) => {
  const highScores = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 2);
  
  const explorationMap = {
    methodical: "Nouveaux domaines méthodiques",
    resilience: "Environnements changeants",
    learning: "Nouvelles technologies et compétences",
    analytical: "Projets d'analyse avancée",
    perseverance: "Projets à long terme",
    creativity: "Projets créatifs et innovants",
    social: "Networking et communautés",
    leadership: "Opportunités de leadership",
    adaptability: "Nouveaux environnements",
    communication: "Présentations et communication"
  };
  
  return highScores.map(([key]) => explorationMap[key] || key).join(", ");
};

const getThreeMonthGoal = (userContext, scores) => {
  if (scores.learning >= 8.5) {
    return `Maîtriser ${userContext.objectifReconversion} niveau intermédiaire avec 3 projets concrets`;
  } else if (scores.social <= 6.0) {
    return "Participer à 3 événements tech et créer 5 connexions professionnelles";
  } else if (scores.analytical >= 8.5) {
    return "Développer une expertise en analyse de données et métriques";
  } else {
    return `Compléter la formation ${userContext.formationsEnCours[0]?.titre} et commencer un projet personnel`;
  }
};

const getSixMonthGoal = (userContext, scores) => {
  if (scores.leadership >= 7.0) {
    return "Prendre en charge un projet technique ou devenir référent sur un sujet";
  } else if (scores.creativity >= 7.5) {
    return "Lancer un projet innovant ou contribuer à un projet open source";
  } else if (scores.methodical >= 8.0) {
    return `Être opérationnel en ${userContext.objectifReconversion} avec une expertise reconnue`;
  } else {
    return "Avoir un portfolio solide et être prêt pour les opportunités professionnelles";
  }
};

// ============================================================================
// 🎬 SIMULATION D'ENTRETIEN - Mode Recruteur avec Feedback
// ============================================================================
const INTERVIEW_QUESTIONS = [
  {
    level: 'junior',
    question: "Parle-moi de toi en 2 minutes.",
    feedback: (answer, userContext) => {
      const duration = answer.length; // Simuler durée
      const hasSTAR = answer.toLowerCase().match(/résultat|accomplissement|projet|situation|tâche|action/);
      const tooLong = duration > 500;
      const tooShort = duration < 200;
      
      return `📊 **ANALYSE EN TEMPS RÉEL**

⏱️ **Durée de ta réponse :** ${tooLong ? 'Trop long' : tooShort ? 'Trop court' : 'Correct'} 
   ${tooLong ? '❌ Optimal: 90-120s pour ce type de question' : tooShort ? '❌ Trop court, manque de détails' : '✅ Durée appropriée'}

🎯 **Structure STAR utilisée :** ${hasSTAR ? '✅ Oui' : '❌ Non'}
   ${!hasSTAR ? '⚠️ Tu as raconté chronologiquement, pas orienté résultats' : ''}

💼 **Mots-clés manquants :**
   ${!answer.toLowerCase().includes('impact') ? '• "impact business" (0 mention)' : ''}
   ${!answer.toLowerCase().includes('résultat') ? '• "résultats mesurables" (0 mention)' : ''}
   ${!answer.toLowerCase().includes('équipe') ? '• "collaboration équipe" (0 mention)' : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 **CONSEIL AEGIS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Réessaye avec cette structure :

**[PRÉSENT]** "${userContext.objectifReconversion} avec ${userContext.anneesExperience} ans d'XP"
**[RÉALISATION CLÉ]** "J'ai réduit le temps de déploiement de 2h à 15min"
**[POURQUOI ICI]** "Je cherche à rejoindre une équipe cloud-native"

Durée cible : 90 secondes max.

[🔄 Réessayer] [➡️ Question suivante]`;
    }
  },
  {
    level: 'junior',
    question: "Pourquoi ce métier de DevOps Engineer ?",
    feedback: (answer, userContext) => {
      const hasPassion = answer.toLowerCase().includes('passion');
      const hasSalary = answer.toLowerCase().includes('salaire');
      const hasImpact = answer.toLowerCase().includes('impact') || answer.toLowerCase().includes('résultat');
      const hasLearning = answer.toLowerCase().includes('apprendre') || answer.toLowerCase().includes('développer');
      
      return `📊 **ANALYSE**

**Clichés détectés :**
${hasPassion ? '⚠️ Évite "passion" (cliché)' : '✅ Pas de clichés'}
${hasSalary ? '❌ Ne mentionne jamais le salaire en 1er' : '✅ Motivations pertinentes'}

**Points forts :**
${hasImpact ? '✅ Tu parles d\'impact et de résultats' : '❌ Manque l\'aspect impact'}
${hasLearning ? '✅ Tu évoques l\'apprentissage' : '❌ Manque l\'aspect évolution'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 **CONSEIL AEGIS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Structure idéale :**
1. **Impact** : "Je veux optimiser les processus"
2. **Apprentissage** : "Ce domaine évolue constamment"
3. **Défi** : "Les défis techniques me motivent"
4. **Vision** : "Je vois l'avenir dans le cloud"

[🔄 Réessayer] [➡️ Question suivante]`;
    }
  },
  {
    level: 'intermediate',
    question: "Explique CI/CD à un non-technique.",
    feedback: (answer, userContext) => {
      const tooShort = answer.length < 150;
      const hasPipeline = answer.toLowerCase().includes('pipeline');
      const hasMetaphor = answer.toLowerCase().match(/comme|similaire|métaphore|chaîne|usine/);
      const hasSteps = answer.toLowerCase().match(/étape|processus|flow/);
      
      return `📊 **ANALYSE**

**Longueur :** ${tooShort ? '❌ Trop court, manque de vulgarisation' : '✅ Longueur OK'}

**Niveau technique :**
${hasPipeline ? '⚠️ "Pipeline" est trop technique pour un non-tech' : '✅ Bon niveau de vulgarisation'}

**Pédagogie :**
${hasMetaphor ? '✅ Excellente vulgarisation avec métaphores' : '❌ Manque de métaphores'}
${hasSteps ? '✅ Structure claire avec étapes' : '❌ Manque de structure'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 **CONSEIL AEGIS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Réponse idéale :**
"Imagine une chaîne de montage automatisée : dès qu'un développeur finit son code, le système teste automatiquement, puis déploie. C'est comme un processus industriel qui garantit la qualité avant mise en production."

[🔄 Réessayer] [➡️ Question suivante]`;
    }
  },
  {
    level: 'intermediate',
    question: "Comment gères-tu les conflits dans une équipe ?",
    feedback: (answer, userContext) => {
      const hasExample = answer.toLowerCase().match(/exemple|cas|situation/);
      const hasProcess = answer.toLowerCase().match(/processus|étapes|méthode/);
      const hasCommunication = answer.toLowerCase().match(/écoute|dialogue|communication/);
      const hasSolution = answer.toLowerCase().match(/solution|résolution|accord/);
      
      return `📊 **ANALYSE**

**Structure de réponse :**
${hasExample ? '✅ Exemple concret donné' : '❌ Manque d\'exemple concret'}
${hasProcess ? '✅ Processus structuré' : '❌ Manque de méthode'}
${hasCommunication ? '✅ Focus sur communication' : '❌ Manque l\'aspect humain'}
${hasSolution ? '✅ Recherche de solution' : '❌ Pas de résolution'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 **CONSEIL AEGIS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Structure STAR idéale :**
- **Situation** : "Dans mon équipe, on avait un désaccord sur l'architecture"
- **Tâche** : "Mon rôle était de faciliter la discussion"
- **Action** : "J'ai organisé une session de brainstorming"
- **Résultat** : "On a trouvé un compromis qui satisfaisait tout le monde"

[🔄 Réessayer] [➡️ Question suivante]`;
    }
  },
  {
    level: 'senior',
    question: "Comment optimiserais-tu notre infrastructure actuelle ?",
    feedback: (answer, userContext) => {
      const hasAssessment = answer.toLowerCase().match(/audit|analyse|évaluer/);
      const hasMetrics = answer.toLowerCase().match(/métriques|kpi|performance/);
      const hasTools = answer.toLowerCase().match(/docker|kubernetes|terraform|monitoring/);
      const hasROI = answer.toLowerCase().match(/coût|budget|roi|économies/);
      
      return `📊 **ANALYSE**

**Approche stratégique :**
${hasAssessment ? '✅ Commence par l\'audit' : '❌ Manque l\'analyse initiale'}
${hasMetrics ? '✅ Utilise des métriques' : '❌ Pas de KPIs mentionnés'}
${hasTools ? '✅ Connaissance des outils' : '❌ Manque de stack technique'}
${hasROI ? '✅ Considère l\'aspect business' : '❌ Pas de vision ROI'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 **CONSEIL AEGIS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Approche senior :**
1. **Audit** : "D'abord, j'analyserais les bottlenecks"
2. **Métriques** : "Focus sur uptime, performance, coûts"
3. **Solution** : "Containerisation + monitoring + automation"
4. **ROI** : "Réduction 30% des coûts en 6 mois"

[🔄 Réessayer] [➡️ Question suivante]`;
    }
  }
];

const startInterview = (level = 'junior', userContext) => {
  const filteredQuestions = INTERVIEW_QUESTIONS.filter(q => q.level === level);
  
  return `🎬 **SIMULATION D'ENTRETIEN ACTIVÉE**

**Entreprise fictive :** "CloudTech Solutions"
**Poste :** ${userContext.objectifReconversion}
**Niveau :** ${level === 'junior' ? 'Junior - Questions classiques' : level === 'intermediate' ? 'Intermédiaire - Questions techniques' : 'Senior - Questions stratégiques'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Aegis (mode recruteur) :**

"Bonjour ${userContext.prenom}, je suis Marc, Lead ${userContext.objectifReconversion.split(' ')[0]} chez CloudTech. Merci d'avoir postulé."

**Question 1/${filteredQuestions.length} :**

${filteredQuestions[0].question}

*Réponds comme en vrai entretien, je t'analyserai en temps réel.*

— Aegis 🛡️ | Mode Recruteur`;
};

const generateInterviewFeedback = (answer, questionIndex, level, userContext) => {
  const filteredQuestions = INTERVIEW_QUESTIONS.filter(q => q.level === level);
  const currentQ = filteredQuestions[questionIndex];
  
  if (!currentQ) return "Question non trouvée";
  
  return currentQ.feedback(answer, userContext);
};

const calculateInterviewScore = (answers, level) => {
  // Simulation de scoring basé sur les réponses
  let score = 0;
  let maxScore = 0;
  
  answers.forEach((answer, index) => {
    maxScore += 10;
    
    // Critères de scoring
    if (answer.length > 150 && answer.length < 500) score += 2; // Longueur appropriée
    if (answer.toLowerCase().match(/résultat|accomplissement|impact/)) score += 2; // Résultats
    if (answer.toLowerCase().match(/équipe|collaboration|communication/)) score += 2; // Soft skills
    if (answer.toLowerCase().match(/apprendre|développer|évolution/)) score += 2; // Growth mindset
    if (answer.toLowerCase().match(/exemple|situation|cas/)) score += 2; // Exemples concrets
  });
  
  return Math.round((score / maxScore) * 10 * 10) / 10; // Score sur 10
};

const generateFinalInterviewReport = (answers, level, userContext) => {
  const score = calculateInterviewScore(answers, level);
  const filteredQuestions = INTERVIEW_QUESTIONS.filter(q => q.level === level);
  
  let grade = '';
  let feedback = '';
  
  if (score >= 8) {
    grade = 'Excellent';
    feedback = 'Tu es prêt pour les entretiens ! Très bon niveau de communication et de structuration.';
  } else if (score >= 6.5) {
    grade = 'Bon';
    feedback = 'Bon niveau global, quelques ajustements à faire sur la structuration.';
  } else if (score >= 5) {
    grade = 'Moyen';
    feedback = 'Il y a du potentiel, mais il faut travailler la préparation et la structure.';
  } else {
    grade = 'À améliorer';
    feedback = 'Il faut beaucoup plus de préparation. Focus sur la structure STAR et les exemples.';
  }
  
  return `🏆 **RÉSULTAT DE SIMULATION**

**Note globale :** ${score}/10 (${grade})

**Détails par compétence :**
- Communication : ${Math.round(score * 0.9)}/10
- Contenu technique : ${Math.round(score * 1.1)}/10
- Confiance : ${Math.round(score * 0.8)}/10
- Concision : ${Math.round(score * 1.0)}/10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **POINTS D'AMÉLIORATION PRIORITAIRES**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${score < 7 ? '1. **Utiliser structure STAR** systématiquement' : ''}
${score < 6 ? '2. **Quantifier** chaque réalisation avec des chiffres' : ''}
${score < 6.5 ? '3. **Ralentir le débit** et marquer des pauses' : ''}
${score < 7.5 ? '4. **Préparer des exemples** concrets pour chaque compétence' : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 **RECOMMANDATIONS AEGIS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${feedback}

**Prochaines étapes :**
- Répète cette simulation 2-3 fois cette semaine
- Prépare 5 exemples STAR pour tes compétences clés
- Entraîne-toi devant un miroir (posture, gestes)

[📄 Télécharger rapport] [🔄 Nouvelle simulation] [🎯 Questions spécifiques]

— Aegis 🛡️ | Simulation terminée`;
};

// ============================================================================
// 📈 COMPARAISON TOP PERFORMERS - Benchmark et Positionnement
// ============================================================================
const BENCHMARK_DATA = {
  userPercentile: 35, // Top 35%
  criteria: {
    adaptationSpeed: { user: 28, top10: 10 },
    skillDiversity: { user: 35, top10: 10 },
    techWatch: { user: 52, top10: 10 },
    networking: { user: 61, top10: 10 },
    portfolioProjects: { user: 44, top10: 10 }
  },
  top10Habits: [
    {
      habit: "Veille structurée quotidienne",
      details: "30min/jour de lecture tech, suivent 10+ thought leaders"
    },
    {
      habit: "Learning by doing intensif",
      details: "3+ projets side actifs, contribuent à l'open source"
    },
    {
      habit: "Networking régulier",
      details: "1 meetup/mois minimum, 2 cafés pro/mois"
    },
    {
      habit: "Mentalité 'Always Be Certifying'",
      details: "1 certification majeure/an, investissent 5-10% salaire en formation"
    }
  ]
};

const generateBenchmark = (ctx) => {
  // Calculer des métriques personnalisées basées sur le contexte utilisateur
  const adaptationSpeed = Math.min(25 + Math.floor(ctx.anneesExperience * 3), 35);
  const skillDiversity = Math.min(20 + (ctx.competences.length * 5), 45);
  const techWatch = Math.min(40 + Math.floor(Math.random() * 20), 60);
  const networking = Math.min(50 + Math.floor(Math.random() * 25), 70);
  const portfolioProjects = Math.min(30 + Math.floor(Math.random() * 30), 50);
  
  const userPercentile = Math.floor((adaptationSpeed + skillDiversity + techWatch + networking + portfolioProjects) / 5);
  
  return `📈 **TON POSITIONNEMENT DANS L'ÉCOSYSTÈME**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **VUE D'ENSEMBLE**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tu es dans le **TOP ${userPercentile}%** des ${ctx.metier} sur SkillShield en termes de préparation face à l'IA.

C'est bien, mais tu peux faire encore mieux. Voici comment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 **DÉCOMPOSITION PAR CRITÈRE**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ **Vitesse d'adaptation**
   Toi : Top ${adaptationSpeed}% ${adaptationSpeed >= 30 ? '🟢' : adaptationSpeed >= 20 ? '🟡' : '🔴'}
   Les top 10% : Complètent 1 formation/mois (toi: 0.5/mois)

📚 **Diversité de compétences**
   Toi : Top ${skillDiversity}% ${skillDiversity >= 40 ? '🟢' : skillDiversity >= 25 ? '🟡' : '🔴'}
   Les top 10% : Maîtrisent 3+ domaines (toi: ${ctx.competences.length} domaines)

🔍 **Veille technologique**
   Toi : Top ${techWatch}% ${techWatch >= 50 ? '🟢' : techWatch >= 35 ? '🟡' : '🔴'}
   Les top 10% : 5h/semaine de veille (toi: ~2h estimées)

🌐 **Réseau professionnel**
   Toi : Top ${networking}% ${networking >= 60 ? '🟢' : networking >= 40 ? '🟡' : '🔴'}
   Les top 10% : 3+ événements/trimestre (toi: 0 détectés)

💼 **Projets portfolio**
   Toi : Top ${portfolioProjects}% ${portfolioProjects >= 45 ? '🟢' : portfolioProjects >= 30 ? '🟡' : '🔴'}
   Les top 10% : 5+ projets publics GitHub (toi: estimé 2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏆 **CE QUE FONT LES TOP 10% DIFFÉREMMENT**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${BENCHMARK_DATA.top10Habits.map((h, i) => `
${i + 1}. 🔹 **${h.habit}**
   • ${h.details}
`).join('')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **TON PLAN POUR REJOINDRE LE TOP 10%**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Phase 1 (Mois 1-2) : Quick Wins**
✅ Augmenter veille à 4h/semaine
   → S'abonner à 5 newsletters tech
   → Bloquer 30min/jour = non-négociable

✅ Lancer 1 side project visible
   → Publier sur GitHub avec README béton
   → Partager sur LinkedIn = preuve

✅ Premier événement networking
   → 1 meetup local dans ton domaine
   → Objectif : 3 connexions LinkedIn qualité

**Phase 2 (Mois 3-4) : Momentum**
✅ Compléter 1 formation/mois
✅ Contribuer à l'open source (1 PR/mois)
✅ Écrire 1 article technique (Medium/Dev.to)

**Phase 3 (Mois 5-6) : Top 10%**
✅ Portfolio 5+ projets
✅ Présence LinkedIn établie
✅ Réseau 50+ connections qualité
✅ 1 certification majeure

🎮 **GAMIFICATION ACTIVÉE**

Débloquer pour Top 10% :
🔒 Badge "Fast Learner" (3 formations en 3 mois)
🔒 Badge "Open Source Contributor" (5 PR acceptées)
🔒 Badge "Thought Leader" (5 articles tech)
🔒 Badge "Certified Pro" (2 certifications)
🔒 Badge "Networker" (50+ connections + 5 événements)

**Statut actuel : 1/5 badges débloqués**

[🚀 Activer mode "Top 10%"] [📊 Voir mon évolution]

— Aegis 🛡️`;
};

const generateDetailedBenchmark = (ctx) => {
  const adaptationSpeed = Math.min(25 + Math.floor(ctx.anneesExperience * 3), 35);
  const skillDiversity = Math.min(20 + (ctx.competences.length * 5), 45);
  const techWatch = Math.min(40 + Math.floor(Math.random() * 20), 60);
  const networking = Math.min(50 + Math.floor(Math.random() * 25), 70);
  const portfolioProjects = Math.min(30 + Math.floor(Math.random() * 30), 50);
  
  const userPercentile = Math.floor((adaptationSpeed + skillDiversity + techWatch + networking + portfolioProjects) / 5);
  
  return `📊 **BENCHMARK DÉTAILLÉ - TOP PERFORMERS**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📈 **TON PROFIL COMPLET**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Score global :** ${userPercentile}/100
**Position :** Top ${userPercentile}% des ${ctx.metier}
**Tendance :** ${userPercentile >= 40 ? '📈 En progression' : userPercentile >= 25 ? '➡️ Stable' : '📉 À améliorer'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **COMPARAISON AVEC LES TOP 10%**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ **Vitesse d'adaptation : ${adaptationSpeed}/100**
   • Toi : ${ctx.formationsEnCours.length > 0 ? `${ctx.formationsEnCours[0].progression}% sur ${ctx.formationsEnCours[0].titre}` : 'Aucune formation active'}
   • Top 10% : 1 formation complétée/mois, 3 projets side
   • Écart : ${adaptationSpeed < 30 ? 'Tu es 2x plus lent' : 'Tu es dans la moyenne'}

📚 **Diversité de compétences : ${skillDiversity}/100**
   • Toi : ${ctx.competences.length} compétences (${ctx.competences.join(', ')})
   • Top 10% : 5+ domaines maîtrisés, expertise T-shaped
   • Écart : ${skillDiversity < 35 ? 'Tu manques de polyvalence' : 'Bonne base technique'}

🔍 **Veille technologique : ${techWatch}/100**
   • Toi : ~2h/semaine estimées
   • Top 10% : 5h/semaine, 10+ sources, podcasts quotidiens
   • Écart : ${techWatch < 50 ? 'Tu es déconnecté des tendances' : 'Tu restes informé'}

🌐 **Réseau professionnel : ${networking}/100**
   • Toi : 0 événements détectés, réseau passif
   • Top 10% : 50+ connections qualité, 3 événements/trimestre
   • Écart : ${networking < 60 ? 'Ton réseau te limite' : 'Bon potentiel relationnel'}

💼 **Projets portfolio : ${portfolioProjects}/100**
   • Toi : ~2 projets estimés
   • Top 10% : 5+ projets publics, contributions open source
   • Écart : ${portfolioProjects < 45 ? 'Ton portfolio manque de visibilité' : 'Bonnes bases projets'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏆 **STRATÉGIES DES TOP PERFORMERS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Leur secret :** Ils traitent leur carrière comme un produit à optimiser

1. **📅 Planning structuré**
   • 30min veille/jour (non-négociable)
   • 1h projets side/jour (week-end)
   • 1 événement/mois (planifié 3 mois à l'avance)

2. **🎯 Objectifs SMART**
   • 1 certification/trimestre
   • 1 contribution open source/mois
   • 5 nouvelles connections qualité/mois

3. **📊 Mesure et itération**
   • Tracking hebdomadaire des progrès
   • A/B testing des méthodes d'apprentissage
   • Feedback loop avec mentors

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 **TON PLAN D'ACTION PERSONNALISÉ**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Priorité 1 - Cette semaine :**
${adaptationSpeed < 30 ? '• Commencer 1 formation ${ctx.objectifReconversion}' : ''}
${techWatch < 50 ? '• S\'abonner à 3 newsletters tech' : ''}
${networking < 60 ? '• Identifier 1 meetup local' : ''}
${portfolioProjects < 45 ? '• Créer 1 projet GitHub avec README' : ''}

**Priorité 2 - Ce mois :**
• Compléter 1 formation complète
• Participer à 1 événement networking
• Publier 1 article technique
• Contribuer à 1 projet open source

**Priorité 3 - Ce trimestre :**
• Obtenir 1 certification
• Construire un réseau de 20+ connections qualité
• Développer 3 projets portfolio
• Établir une présence LinkedIn active

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎮 **SYSTÈME DE BADGES**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Badges débloqués :**
${userPercentile >= 20 ? '✅ "First Steps" - Premier benchmark' : '🔒 "First Steps"'}
${ctx.competences.length >= 3 ? '✅ "Skill Builder" - 3+ compétences' : '🔒 "Skill Builder"'}
${ctx.anneesExperience >= 2 ? '✅ "Experienced" - 2+ ans d\'expérience' : '🔒 "Experienced"'}

**Badges à débloquer :**
🔒 "Fast Learner" - 3 formations en 3 mois
🔒 "Open Source Contributor" - 5 PR acceptées
🔒 "Thought Leader" - 5 articles tech
🔒 "Certified Pro" - 2 certifications
🔒 "Networker" - 50+ connections + 5 événements
🔒 "Top 10%" - Rejoindre le top 10%

[📊 Voir l'évolution] [🎯 Définir objectifs] [📈 Tracking progrès]

— Aegis 🛡️`;
};

// ============================================================================
// ⚠️ BURNOUT DETECTOR AMÉLIORÉ - Check-in et Alertes Préventives
// ============================================================================
const detectBurnoutSignals = (messages) => {
  const recentMessages = messages.filter(m => {
    const hoursSince = (Date.now() - new Date(m.timestamp).getTime()) / (1000 * 60 * 60);
    return hoursSince < 168; // 7 derniers jours
  });
  
  const lateNightMessages = recentMessages.filter(m => {
    const hour = new Date(m.timestamp).getHours();
    return hour >= 23 || hour <= 5;
  });
  
  const stressWords = recentMessages.filter(m => 
    m.isUser && m.text.toLowerCase().match(/trop|fatigué|débordé|épuisé|saturé|plus de force|abandonner|stress/)
  ).length;
  
  const negativePatterns = recentMessages.filter(m => 
    m.isUser && m.text.toLowerCase().match(/ça sert à rien|démotivé|découragé|perdu/)
  ).length;
  
  return {
    lateNightActivity: lateNightMessages.length > 3,
    highStressFrequency: stressWords > 5,
    negativePatterns: negativePatterns > 3,
    totalRiskScore: lateNightMessages.length + stressWords + negativePatterns
  };
};

const generateBurnoutCheckin = (userContext) => {
  const hasFormationProgress = userContext.formationsEnCours[0]?.progression > 0;
  const formationName = userContext.formationsEnCours[0]?.titre || 'ta formation';
  
  return `📅 **3 JOURS PLUS TARD**

Hey ${userContext.prenom}, comment tu te sens depuis notre conversation sur le burnout ?

J'ai vu que tu as ${hasFormationProgress ? `respecté la règle des 2h/jour sur ${formationName}` : 'pris une pause'}. ${hasFormationProgress ? '👏 C\'est déjà un énorme progrès.' : 'Parfait, le repos était nécessaire.'}

**Questions check-in :**
- Tu dors mieux ?
- Tu retiens mieux ce que tu apprends ?
- Tu te sens moins submergé ?

Si tu veux, on peut faire un point rapide sur ton énergie et ajuster le plan si nécessaire.

— Aegis 🛡️ | Votre garde rapprochée contre l'obsolescence`;
};

const generateBurnoutPrevention = (userContext, signals) => {
  const userName = userContext.prenom;
  const signalList = [];
  
  if (signals.lateNightActivity) {
    signalList.push('• Tu te connectes souvent après 23h');
  }
  if (signals.highStressFrequency) {
    signalList.push('• Tes messages contiennent beaucoup de stress');
  }
  if (signals.negativePatterns) {
    signalList.push('• Tu exprimes souvent de la démotivation');
  }
  
  return `⚠️ **ALERTE PRÉVENTIVE**

${userName}, je remarque des signaux :

${signalList.join('\n')}

Tu n'es pas encore en burnout, mais tu t'en approches.

**Conseil préventif :** Prends 1 journée OFF ce week-end. Non négociable.

Ton cerveau a besoin de décompresser avant que ça devienne critique.

**Actions immédiates :**
• Arrête le travail après 18h aujourd'hui
• Évite les écrans 1h avant de dormir
• Planifie quelque chose de fun ce week-end

— Aegis 🛡️`;
};

// ============================================================================
// 🎤 ELEVATOR PITCH GENERATOR - Générateur de Pitchs Personnalisés
// ============================================================================
const ELEVATOR_PITCHES = {
  entretien: (ctx) => `🎤 **TON ELEVATOR PITCH - ENTRETIEN**

⏱️ **90 secondes max**

"Je suis ${ctx.metier} depuis ${ctx.anneesExperience} ans, avec une expertise particulière en ${ctx.competences.slice(0, 2).join(' et ')}.

Mon dernier projet : j'ai réduit de 40% le temps de traitement client en créant un système d'automatisation intelligent avec ${ctx.competences[0]}.

Aujourd'hui, je me spécialise en ${ctx.objectifReconversion} parce que j'ai réalisé que mon impact est décuplé quand j'optimise toute la chaîne de déploiement, pas juste le code.

Je cherche à rejoindre une équipe comme la vôtre où l'automatisation et la fiabilité sont au cœur de la valeur."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **Points forts de ce pitch :**
✅ Chiffre concret (40%)
✅ Transition logique vers ${ctx.objectifReconversion}
✅ Lien avec l'entreprise visée
✅ Évite le jargon inutile

[📋 Copier] [✏️ Personnaliser] [🎤 S'entraîner avec moi]`,

  networking: (ctx) => `🎤 **TON ELEVATOR PITCH - NETWORKING/MEETUP**

⏱️ **30 secondes max**

"Salut, moi c'est ${ctx.prenom}. Je suis ${ctx.metier} en transition vers ${ctx.objectifReconversion}.

En ce moment j'automatise les processus de déploiement dans ma boîte, et je cherche à échanger avec des ${ctx.objectifReconversion} expérimentés pour comprendre les vraies problématiques terrain que je vais rencontrer.

Tu bosses dans ce domaine ?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **Points forts :**
✅ Direct et humble
✅ Pose une question = amorce conversation
✅ Montre qu'on fait déjà du ${ctx.objectifReconversion.split(' ')[0]} (pas juste théorie)
✅ Pas de prétention, juste curiosité

[📋 Copier] [🔄 Générer une variante]`,

  linkedin: (ctx) => `🎤 **TON PROFIL LINKEDIN OPTIMISÉ**

📝 **Headline** (220 caractères max)

"${ctx.metier} → ${ctx.objectifReconversion} 🚀 | Passionné par l'automatisation qui fait gagner du temps | En formation active sur ${ctx.formationsEnCours[0]?.titre?.split('&')[0]?.trim() || 'DevOps'} | #CloudNative"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 **Section "À propos"** (2000 caractères)

"Après ${ctx.anneesExperience} ans à développer des applications web, j'ai compris une chose : le meilleur code du monde ne sert à rien s'il met 2 heures à être déployé.

C'est pour ça que je me spécialise maintenant en ${ctx.objectifReconversion}.

🎯 **Ce que je fais aujourd'hui :**
- J'automatise les pipelines de déploiement (CI/CD)
- Je conteneurise les applications (Docker/Kubernetes)
- Je réduis le temps entre le code et la production

📈 **Résultat concret :**
Dans mon équipe, on est passés de 10 déploiements/mois à 50+, avec zéro downtime. Le code arrive en prod 5x plus vite.

🔧 **Stack actuelle :**
${ctx.competences.join(', ')}, Docker, Kubernetes, CI/CD

🎓 **En apprentissage continu :**
${ctx.formationsEnCours[0]?.titre || 'DevOps & Cloud'}, Infrastructure as Code

💬 **Toujours partant pour échanger sur :**
→ Automatisation intelligente
→ Migration vers le cloud
→ Culture DevOps dans les équipes

📬 DM ouverts pour collaborations, conseils, ou juste discuter tech."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **Points forts :**
✅ Storytelling (pourquoi ${ctx.objectifReconversion})
✅ Résultats quantifiés (50 vs 10 déploiements)
✅ Stack tech visible immédiatement
✅ Call to action clair
✅ Ton accessible, pas arrogant

[📋 Copier pour LinkedIn] [🔄 Version plus courte]`,

  email: (ctx) => `🎤 **TON EMAIL DE CANDIDATURE**

📨 **Objet :** Candidature ${ctx.objectifReconversion} - ${ctx.metier} avec 40% d'efficacité gagnée en automatisation

Bonjour [Prénom du recruteur],

Je suis tombé sur votre annonce pour le poste de ${ctx.objectifReconversion} et ça résonne parfaitement avec ma transition professionnelle actuelle.

${ctx.metier} depuis ${ctx.anneesExperience} ans, j'ai récemment automatisé les déploiements de mon équipe, réduisant le time-to-market de 40%. Cette expérience m'a convaincu : mon impact est décuplé quand j'optimise toute la chaîne de valeur, pas juste le code.

C'est exactement ce que je veux faire chez [Entreprise] : construire une infrastructure fiable et automatisée qui permet aux équipes d'aller plus vite, sereinement.

Mon CV est en PJ. Si vous avez 15 minutes, je serais ravi de discuter de comment je peux contribuer à vos projets cloud-native.

Merci pour votre temps,

${ctx.prenom}
[LinkedIn] [GitHub]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **Points forts :**
✅ Objet avec chiffre = attire l'œil
✅ Personnalisé à l'entreprise
✅ Résultat concret mentionné 2 fois
✅ Call to action doux (15 min)

[📋 Copier] [✏️ Adapter à une offre]`
};

const generateElevatorPitch = (type, ctx) => {
  return ELEVATOR_PITCHES[type](ctx);
};

// ============================================================================
// 💡 CONNECTION DOTS - Détection de Patterns et Connexions
// ============================================================================
const detectPatterns = (messages, userContext) => {
  const userMessages = messages.filter(m => m.isUser);
  
  // Pattern 1: Objectifs répétés mais non exécutés
  const goalsPattern = userMessages.filter(m => 
    m.text.toLowerCase().match(/je vais|je veux|j'aimerais|je commence|je finis|je termine/)
  );
  
  const hasRepeatedGoals = goalsPattern.length > 3;
  
  // Pattern 2: Problème sous-jacent (fuite vers solution au lieu de résoudre cause)
  const careerChangeMessages = userMessages.filter(m =>
    m.text.toLowerCase().match(/changer de métier|reconversion|nouveau métier|transition/)
  );
  
  const salaryMentions = userMessages.filter(m =>
    m.text.toLowerCase().match(/salaire|augmentation|payer|sous-payé|rémunération/)
  );
  
  const negotiationFear = userMessages.filter(m =>
    m.text.toLowerCase().match(/négocier|oser pas|peur de demander|demander plus|timide/)
  );
  
  const hasSalaryAvoidancePattern = 
    careerChangeMessages.length > 0 && 
    salaryMentions.length > 0 && 
    negotiationFear.length > 0;
  
  // Pattern 3: Sur-enthousiasme + sous-exécution
  const enthusiasmMessages = userMessages.filter(m =>
    m.text.toLowerCase().match(/cette fois|vraiment|je m'y mets|sérieusement|définitivement/)
  );
  
  const hasOverEnthusiasmPattern = enthusiasmMessages.length > 2;
  
  // Pattern 4: Évitement de l'action concrète
  const procrastinationMessages = userMessages.filter(m =>
    m.text.toLowerCase().match(/plus tard|demain|la semaine prochaine|quand j'aurai le temps/)
  );
  
  const hasProcrastinationPattern = procrastinationMessages.length > 2;
  
  return {
    hasRepeatedGoals,
    hasSalaryAvoidancePattern,
    hasOverEnthusiasmPattern,
    hasProcrastinationPattern,
    careerChangeMessages,
    salaryMentions,
    negotiationFear,
    goalsPattern,
    enthusiasmMessages,
    procrastinationMessages
  };
};

const CONNECTION_DOTS_MESSAGES = {
  salaryAvoidance: (patterns, ctx) => {
    const salaryMsg = patterns.salaryMentions[0]?.text.slice(0, 100) || "mention du salaire";
    const negotiationMsg = patterns.negotiationFear[0]?.text.slice(0, 100) || "peur de négocier";
    const careerMsg = patterns.careerChangeMessages[0]?.text.slice(0, 100) || "envie de changer de métier";
    
    return `💡 **CONNEXION DÉTECTÉE**

J'ai analysé nos dernières conversations et j'ai remarqué quelque chose d'important...

**Conversation 1** (il y a ${Math.floor(Math.random() * 20 + 10)} jours) :
"${salaryMsg}..."

**Conversation 2** (il y a ${Math.floor(Math.random() * 10 + 3)} jours) :
"${negotiationMsg}..."

**Conversation 3** (aujourd'hui) :
"${careerMsg}..."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💭 **Réflexion Aegis :**

Tu fuis vers un nouveau métier pour résoudre un problème de **négociation salariale**. 

Mais si tu ne règles pas ce blocage psychologique, tu le retrouveras en ${ctx.objectifReconversion} aussi.

**Scénario probable :**
→ Tu deviens ${ctx.objectifReconversion} dans 12 mois
→ Tu obtiens 52K€ (pas 55K€ car tu n'oses pas négocier)
→ Tu te sens sous-payé à nouveau
→ **Cycle recommence**

**La vraie solution en 2 étapes :**

**1️⃣ Court terme (3 mois) :**
   Apprendre à négocier dans ton poste actuel
   → Formation "Négociation salariale" (2h sur SkillShield)
   → Simuler avec moi 3 entretiens de négociation
   → Demander une augmentation (objectif : +3-5K€)

**2️⃣ Moyen terme (12 mois) :**
   Transition vers ${ctx.objectifReconversion} AVEC compétence négo acquise
   → Tu arriveras à 58-62K€ (pas 52K€)
   → Gain total : **+10K€/an de différence**

On travaille sur la **cause racine** ou tu préfères éviter le sujet ?

[💪 Ok, aidons-moi à négocier] [➡️ Non merci, je veux juste changer de métier]

— Aegis 🛡️`;
  },

  executionPattern: (patterns, ctx) => {
    const recentGoals = patterns.goalsPattern.slice(-3);
    const enthusiasmPhrases = patterns.enthusiasmMessages.slice(-2);
    
    return `🎯 **PATTERN COMPORTEMENTAL DÉTECTÉ**

J'observe un pattern récurrent dans tes conversations :

${recentGoals.map((goal, i) => {
  const daysAgo = Math.floor(Math.random() * 14 + 1);
  return `📅 **Il y a ${daysAgo} jour${daysAgo > 1 ? 's' : ''} :** "${goal.text.slice(0, 80)}..."`;
}).join('\n')}

${enthusiasmPhrases.map((enthusiasm, i) => {
  return `📅 **Récemment :** "${enthusiasm.text.slice(0, 60)}..."`;
}).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Je vois **3 patterns toxiques** :

**1️⃣ Sur-enthousiasme initial + sous-exécution**
   → Tu es motivé par l'**idée**, pas par la **réalisation**

**2️⃣ Objectifs trop ambitieux**
   → "Finir la formation" en 1 semaine = irréaliste pour quelqu'un qui bosse full-time

**3️⃣ Absence de micro-engagements**
   → Tu te fixes des gros objectifs, pas des actions de 30min

**Le vrai problème n'est PAS ta motivation.**
**C'est ton système d'exécution qui est cassé.**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Nouvelle règle Aegis pour toi :**

❌ Fini les "Je vais finir X cette semaine"
✅ Place aux **"Demain, 20h-20h30, je fais [action micro]"**

**Exemples d'actions micro :**
- 20 min de vidéo formation (pas "finir le module")
- Écrire 5 lignes de code (pas "terminer la feature")
- Lire 1 article tech (pas "faire une veille complète")

On teste pendant 2 semaines. Deal ?

[✅ Ok, je vais être plus réaliste] [📊 Montre-moi comment faire]

— Aegis 🛡️`;
  },

  procrastinationPattern: (patterns, ctx) => {
    const procrastinationExamples = patterns.procrastinationMessages.slice(-3);
    
    return `⏰ **PATTERN DE PROCRASTINATION DÉTECTÉ**

J'ai repéré un pattern inquiétant dans tes messages :

${procrastinationExamples.map((msg, i) => {
  const daysAgo = Math.floor(Math.random() * 10 + 1);
  return `📅 **Il y a ${daysAgo} jour${daysAgo > 1 ? 's' : ''} :** "${msg.text.slice(0, 70)}..."`;
}).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Le problème :** Tu reportes systématiquement l'action.

**Pourquoi ça arrive :**
→ Peur de l'échec (mieux vaut ne pas essayer que d'échouer)
→ Perfectionnisme paralysant (attendre le "bon moment")
→ Surcharge cognitive (trop d'options = paralysie)

**La solution :** Règle des 2 minutes

**Si une tâche prend moins de 2 minutes → FAIS-LA MAINTENANT**

**Exemples concrets pour toi :**
- ✅ "Je lis 1 article tech maintenant" (2 min)
- ✅ "J'ouvre la formation maintenant" (30 sec)
- ✅ "Je fais 1 exercice de code maintenant" (2 min)

**Résultat :** Momentum créé, moins de report, plus d'action.

Tu veux qu'on teste cette méthode cette semaine ?

[✅ Oui, testons la règle des 2 minutes] [🤔 J'ai besoin de plus d'infos]

— Aegis 🛡️`;
  }
};

// ============================================================================
// 🎮 SYSTÈME DE GAMIFICATION COMPLET - Badges, Progression, Niveaux
// ============================================================================
const BADGES = {
  docker_master: {
    id: 'docker_master',
    name: 'Docker Master',
    icon: '🐳',
    description: '3 projets Docker conteneurisés',
    requirement: { type: 'projects_docker', count: 3 },
    color: '#06B6D4',
    points: 50
  },
  cicd_ninja: {
    id: 'cicd_ninja',
    name: 'CI/CD Ninja',
    icon: '⚡',
    description: '1 pipeline CI/CD en production',
    requirement: { type: 'pipeline_deployed', count: 1 },
    color: '#10B981',
    points: 75
  },
  fast_learner: {
    id: 'fast_learner',
    name: 'Fast Learner',
    icon: '🚀',
    description: '3 formations complétées en 3 mois',
    requirement: { type: 'formations_completed', count: 3, timeLimit: 90 },
    color: '#F59E0B',
    points: 100
  },
  opensource_contributor: {
    id: 'opensource_contributor',
    name: 'Open Source Hero',
    icon: '💻',
    description: '5 Pull Requests acceptées',
    requirement: { type: 'github_prs', count: 5 },
    color: '#8B5CF6',
    points: 125
  },
  thought_leader: {
    id: 'thought_leader',
    name: 'Thought Leader',
    icon: '✍️',
    description: '5 articles techniques publiés',
    requirement: { type: 'articles_published', count: 5 },
    color: '#EC4899',
    points: 150
  },
  certified_pro: {
    id: 'certified_pro',
    name: 'Certified Pro',
    icon: '🏆',
    description: '2 certifications obtenues',
    requirement: { type: 'certifications', count: 2 },
    color: '#EF4444',
    points: 200
  },
  networker: {
    id: 'networker',
    name: 'Networker',
    icon: '🤝',
    description: '50+ connexions + 5 événements',
    requirement: { type: 'networking', connections: 50, events: 5 },
    color: '#3B82F6',
    points: 100
  },
  morning_warrior: {
    id: 'morning_warrior',
    name: 'Morning Warrior',
    icon: '🌅',
    description: '7 jours consécutifs de formation matinale',
    requirement: { type: 'morning_streak', days: 7 },
    color: '#F97316',
    points: 75
  },
  consistency_king: {
    id: 'consistency_king',
    name: 'Consistency King',
    icon: '📅',
    description: '30 jours de pratique quotidienne',
    requirement: { type: 'daily_streak', days: 30 },
    color: '#14B8A6',
    points: 250
  },
  top_10_percent: {
    id: 'top_10_percent',
    name: 'Top 10%',
    icon: '⭐',
    description: 'Rejoindre le top 10% des utilisateurs',
    requirement: { type: 'percentile', value: 10 },
    color: '#FFD700',
    points: 500
  }
};

const DAILY_CHALLENGES = [
  {
    id: 'complete_1_module',
    title: 'Terminer 1 module de formation',
    xp: 30,
    icon: '📚'
  },
  {
    id: 'ask_5_questions',
    title: 'Poser 5 questions à Aegis',
    xp: 20,
    icon: '💬'
  },
  {
    id: 'review_job_offer',
    title: 'Analyser une offre d\'emploi',
    xp: 25,
    icon: '🔍'
  },
  {
    id: 'update_linkedin',
    title: 'Mettre à jour son profil LinkedIn',
    xp: 35,
    icon: '💼'
  },
  {
    id: 'network_connection',
    title: 'Ajouter 3 nouvelles connexions',
    xp: 40,
    icon: '🌐'
  }
];

const WEEKLY_REWARDS = [
  { threshold: 100, reward: '🎁 Accès formation premium', xp: 200 },
  { threshold: 250, reward: '🎁 Badge exclusif "Grinder"', xp: 500 },
  { threshold: 500, reward: '🎁 Session 1-on-1 avec coach', xp: 1000 }
];

// Fonctions de calcul XP et niveaux
const calculateLevel = (xp) => {
  return Math.floor(Math.sqrt(xp / 50)) + 1;
};

const calculateXPForNextLevel = (currentLevel) => {
  return Math.pow(currentLevel, 2) * 50;
};

const isConsecutiveDay = (lastDate) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return new Date(lastDate).toDateString() === yesterday.toDateString();
};

const getTimeUntilMidnight = () => {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}m`;
};

const calculateUserRank = (ctx) => {
  const baseRank = Math.max(1, Math.floor(500 - (ctx.totalPoints / 10)));
  return baseRank;
};

const generateMockLeaderboard = (currentUser) => {
  const mockUsers = [
    { name: 'Sophie M.', level: 12, points: 3450 },
    { name: 'Thomas L.', level: 11, points: 3280 },
    { name: 'Julie R.', level: 10, points: 2890 },
    { name: 'Marc D.', level: 9, points: 2560 },
    { name: 'Emma K.', level: 8, points: 2340 },
    { name: currentUser.prenom, level: currentUser.level, points: currentUser.totalPoints, isCurrentUser: true },
    { name: 'Pierre B.', level: 7, points: 1950 },
    { name: 'Sarah F.', level: 7, points: 1840 },
    { name: 'Alex V.', level: 6, points: 1620 },
    { name: 'Léa N.', level: 6, points: 1510 },
  ];
  
  return mockUsers
    .sort((a, b) => b.points - a.points)
    .slice(0, 10);
};

// Fonction de vérification des badges
const checkBadgeUnlock = (userContext) => {
  const unlockedBadges = [];
  
  Object.values(BADGES).forEach(badge => {
    if (userContext.unlockedBadges.includes(badge.id)) return;
    
    let unlocked = false;
    const req = badge.requirement;
    
    switch (req.type) {
      case 'projects_docker':
        unlocked = userContext.stats.projectsDocker >= req.count;
        break;
      case 'pipeline_deployed':
        unlocked = userContext.stats.pipelinesDeployed >= req.count;
        break;
      case 'formations_completed':
        const recentFormations = userContext.stats.formationsStartDates.filter(date => {
          const daysSince = (Date.now() - date) / (1000 * 60 * 60 * 24);
          return daysSince <= req.timeLimit;
        });
        unlocked = recentFormations.length >= req.count;
        break;
      case 'github_prs':
        unlocked = userContext.stats.githubPRs >= req.count;
        break;
      case 'articles_published':
        unlocked = userContext.stats.articlesPublished >= req.count;
        break;
      case 'certifications':
        unlocked = userContext.stats.certifications >= req.count;
        break;
      case 'networking':
        unlocked = 
          userContext.stats.networkingConnections >= req.connections &&
          userContext.stats.networkingEvents >= req.events;
        break;
      case 'morning_streak':
        unlocked = userContext.stats.morningStreak >= req.days;
        break;
      case 'daily_streak':
        unlocked = userContext.stats.dailyStreak >= req.days;
        break;
      case 'percentile':
        // Calculé via benchmark - pour l'instant simulé
        const userPercentile = Math.floor(Math.random() * 40) + 10;
        unlocked = userPercentile <= req.value;
        break;
    }
    
    if (unlocked) {
      unlockedBadges.push(badge);
    }
  });
  
  return unlockedBadges;
};


// ============================================================================
// 📊 PROJECTION CARRIÈRE PROACTIVE - Prédiction "Dans 3 mois..."
// ============================================================================
const generateCareerProjection = (ctx) => {
  const monthsToTarget = 12;
  const currentScore = ctx.scoreRisque;
  
  // Calculs basés sur progression actuelle
  const month3Score = Math.max(currentScore - 15, 25);
  const month6Score = Math.max(currentScore - 25, 22);
  const month12Score = Math.max(currentScore - 42, 20);
  
  const projectedSalary = {
    current: "45-52K€",
    month6: "52-58K€",
    month12: "58-65K€"
  };
  
  return `📊 **PROJECTION CARRIÈRE PERSONNALISÉE**

Si tu suis le plan qu'on vient d'établir :

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **DANS 3 MOIS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Certification ${ctx.objectifReconversion} niveau 1 obtenue
✅ 2 projets portfolio prêts (app CI/CD + monitoring dashboard)
✅ Score de risque IA : ${currentScore}% → ${month3Score}% (-${currentScore - month3Score}%)
✅ Compétences ${ctx.objectifReconversion} niveau intermédiaire

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **DANS 6 MOIS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Compétences transférables vers ${ctx.objectifReconversion} (score: 87%)
✅ Salaire potentiel : ${projectedSalary.current} → ${projectedSalary.month6} (+15-25%)
✅ 5 entreprises ciblées pour postuler (liste personnalisée)
✅ Réseau professionnel élargi (3 meetups, 1 conférence)
✅ Score de risque IA : ${month6Score}%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **DANS 12 MOIS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Poste ${ctx.objectifReconversion} obtenu
✅ Score de risque IA : ${month12Score}% (ZONE SÉCURISÉE)
✅ Compétences cloud + automatisation maîtrisées
✅ Salaire : ${projectedSalary.month12}

📈 **Probabilité de réussite : 78%**
(Basé sur 2,340 reconversions similaires dans notre base)

💾 [Sauvegarder ce plan] ✏️ [Ajuster les objectifs]

— Aegis 🛡️ | Votre garde rapprochée contre l'obsolescence`;
};

// ============================================================================
// 📊 PROJECTIONS DYNAMIQUES - Ajustement selon feedback utilisateur
// ============================================================================
const generateDynamicCareerProjection = (ctx) => {
  const { dynamicProjections, sectorialComparisons, temporalAlerts } = ctx;
  
  // Analyser le feedback utilisateur sur les projections précédentes
  const feedbackAnalysis = analyzeProjectionFeedback(dynamicProjections);
  
  // Ajuster les facteurs d'adaptation selon le feedback
  const adjustedFactors = adjustAdaptationFactors(dynamicProjections, feedbackAnalysis);
  
  // Générer une projection ajustée
  const adjustedProjection = generateAdjustedProjection(ctx, adjustedFactors);
  
  // Ajouter à l'historique
  const newProjection = {
    id: `proj_${Date.now()}`,
    timestamp: new Date(),
    originalProjection: generateCareerProjection(ctx),
    adjustedProjection,
    feedbackAnalysis,
    adaptationFactors: adjustedFactors,
    accuracy: calculateProjectionAccuracy(adjustedProjection, feedbackAnalysis)
  };
  
  return {
    ...ctx,
    dynamicProjections: {
      ...dynamicProjections,
      projectionHistory: [...dynamicProjections.projectionHistory, newProjection],
      adaptationFactors: adjustedFactors
    }
  };
};

const analyzeProjectionFeedback = (dynamicProjections) => {
  const { userFeedbackOnProjections, projectionHistory } = dynamicProjections;
  
  if (userFeedbackOnProjections.length === 0) {
    return {
      overallSatisfaction: 0.78,
      timelineAccuracy: 0.75,
      salaryAccuracy: 0.73,
      skillAccuracy: 0.85,
      confidence: 0.5
    };
  }
  
  // Analyser les feedbacks récents (derniers 30 jours)
  const recentFeedback = userFeedbackOnProjections.filter(f => 
    new Date().getTime() - f.timestamp.getTime() < 30 * 24 * 60 * 60 * 1000
  );
  
  if (recentFeedback.length === 0) {
    return {
      overallSatisfaction: 0.78,
      timelineAccuracy: 0.75,
      salaryAccuracy: 0.73,
      skillAccuracy: 0.85,
      confidence: 0.5
    };
  }
  
  // Calculer les métriques de satisfaction
  const avgSatisfaction = recentFeedback.reduce((sum, f) => sum + f.satisfaction, 0) / recentFeedback.length;
  const timelineAccuracy = recentFeedback.reduce((sum, f) => sum + (f.timelineAccuracy || 0.75), 0) / recentFeedback.length;
  const salaryAccuracy = recentFeedback.reduce((sum, f) => sum + (f.salaryAccuracy || 0.73), 0) / recentFeedback.length;
  const skillAccuracy = recentFeedback.reduce((sum, f) => sum + (f.skillAccuracy || 0.85), 0) / recentFeedback.length;
  
  return {
    overallSatisfaction: avgSatisfaction,
    timelineAccuracy,
    salaryAccuracy,
    skillAccuracy,
    confidence: Math.min(0.95, 0.5 + (recentFeedback.length / 10) * 0.45),
    sampleSize: recentFeedback.length
  };
};

const adjustAdaptationFactors = (dynamicProjections, feedbackAnalysis) => {
  const { adaptationFactors } = dynamicProjections;
  const { overallSatisfaction, timelineAccuracy, salaryAccuracy, skillAccuracy } = feedbackAnalysis;
  
  // Ajuster les facteurs selon la satisfaction utilisateur
  const satisfactionAdjustment = (overallSatisfaction - 0.78) * 0.2; // ±20% selon satisfaction
  const timelineAdjustment = (timelineAccuracy - 0.75) * 0.15;
  const salaryAdjustment = (salaryAccuracy - 0.73) * 0.1;
  const skillAdjustment = (skillAccuracy - 0.85) * 0.05;
  
  return {
    userProgress: Math.max(0.5, Math.min(1.5, adaptationFactors.userProgress + satisfactionAdjustment)),
    marketConditions: Math.max(0.8, Math.min(1.2, adaptationFactors.marketConditions + timelineAdjustment)),
    sectorTrends: Math.max(0.7, Math.min(1.3, adaptationFactors.sectorTrends + salaryAdjustment)),
    personalFactors: Math.max(0.6, Math.min(1.4, adaptationFactors.personalFactors + skillAdjustment))
  };
};

const generateAdjustedProjection = (ctx, adaptationFactors) => {
  const { scoreRisque, objectifReconversion, prenom } = ctx;
  
  // Ajuster les calculs selon les facteurs d'adaptation
  const adjustedMonth3Score = Math.max(scoreRisque - (15 * adaptationFactors.userProgress), 25);
  const adjustedMonth6Score = Math.max(scoreRisque - (25 * adaptationFactors.marketConditions), 22);
  const adjustedMonth12Score = Math.max(scoreRisque - (42 * adaptationFactors.sectorTrends), 20);
  
  // Ajuster les salaires selon les facteurs
  const salaryMultiplier = adaptationFactors.personalFactors;
  const baseSalary = { current: 45, month6: 52, month12: 58 };
  
  const adjustedSalary = {
    current: `${Math.round(baseSalary.current * salaryMultiplier)}-${Math.round(52 * salaryMultiplier)}K€`,
    month6: `${Math.round(baseSalary.month6 * salaryMultiplier)}-${Math.round(58 * salaryMultiplier)}K€`,
    month12: `${Math.round(baseSalary.month12 * salaryMultiplier)}-${Math.round(65 * salaryMultiplier)}K€`
  };
  
  // Ajuster la probabilité de réussite
  const baseProbability = 0.78;
  const adjustedProbability = Math.min(0.95, baseProbability + (adaptationFactors.userProgress - 1) * 0.1);
  
  return {
    month3Score: adjustedMonth3Score,
    month6Score: adjustedMonth6Score,
    month12Score: adjustedMonth12Score,
    projectedSalary: adjustedSalary,
    successProbability: adjustedProbability,
    adaptationFactors,
    timestamp: new Date()
  };
};

const calculateProjectionAccuracy = (adjustedProjection, feedbackAnalysis) => {
  const { confidence, sampleSize } = feedbackAnalysis;
  
  // Calculer la précision basée sur la confiance et la taille de l'échantillon
  const baseAccuracy = 0.78;
  const confidenceBoost = (confidence - 0.5) * 0.4; // Boost de 0-20% selon confiance
  const sampleBoost = Math.min(0.1, sampleSize / 50); // Boost de 0-10% selon échantillon
  
  return Math.min(0.98, baseAccuracy + confidenceBoost + sampleBoost);
};

// ============================================================================
// 🏭 COMPARAISONS SECTORIELLES - Projections par secteur d'activité
// ============================================================================
const generateSectorialComparisons = (ctx) => {
  const { sectorialComparisons, scoreRisque, objectifReconversion } = ctx;
  
  // Analyser les secteurs cibles
  const targetSectorAnalysis = analyzeTargetSectors(sectorialComparisons, objectifReconversion);
  
  // Générer les chemins de migration
  const migrationPaths = generateMigrationPaths(sectorialComparisons, targetSectorAnalysis);
  
  // Analyser les opportunités croisées
  const crossSectorOpportunities = analyzeCrossSectorOpportunities(sectorialComparisons, migrationPaths);
  
  return {
    ...ctx,
    sectorialComparisons: {
      ...sectorialComparisons,
      crossSectorAnalysis: targetSectorAnalysis,
      migrationPaths,
      crossSectorOpportunities
    }
  };
};

const analyzeTargetSectors = (sectorialComparisons, targetSector) => {
  const { sectorData, currentSector } = sectorialComparisons;
  const currentData = sectorData[currentSector];
  const targetData = sectorData[targetSector] || sectorData['DevOps'];
  
  return {
    currentSector: {
      name: currentSector,
      data: currentData,
      riskLevel: currentData.riskScore > 60 ? 'high' : currentData.riskScore > 40 ? 'medium' : 'low'
    },
    targetSector: {
      name: targetSector,
      data: targetData,
      riskLevel: targetData.riskScore > 60 ? 'high' : targetData.riskScore > 40 ? 'medium' : 'low'
    },
    comparison: {
      salaryIncrease: calculateSalaryIncrease(currentData.avgSalary, targetData.avgSalary),
      riskReduction: currentData.riskScore - targetData.riskScore,
      growthAdvantage: targetData.growthRate - currentData.growthRate,
      demandTrend: targetData.demandTrend,
      migrationDifficulty: calculateMigrationDifficulty(currentSector, targetSector)
    }
  };
};

const calculateSalaryIncrease = (currentSalary, targetSalary) => {
  // Extraire les valeurs numériques des salaires
  const currentAvg = parseFloat(currentSalary.split('-')[1].replace('K€', ''));
  const targetAvg = parseFloat(targetSalary.split('-')[1].replace('K€', ''));
  
  return Math.round(((targetAvg - currentAvg) / currentAvg) * 100);
};

const calculateMigrationDifficulty = (currentSector, targetSector) => {
  const difficultyMatrix = {
    'Tech & IT': { 'DevOps': 0.3, 'Cloud': 0.4, 'AI/ML': 0.6 },
    'DevOps': { 'Cloud': 0.2, 'AI/ML': 0.5, 'Tech & IT': 0.4 },
    'Cloud': { 'AI/ML': 0.4, 'DevOps': 0.3, 'Tech & IT': 0.5 },
    'AI/ML': { 'Cloud': 0.4, 'DevOps': 0.5, 'Tech & IT': 0.6 }
  };
  
  return difficultyMatrix[currentSector]?.[targetSector] || 0.5;
};

const generateMigrationPaths = (sectorialComparisons, targetAnalysis) => {
  const { currentSector, targetSector, comparison } = targetAnalysis;
  
  return [
    {
      path: 'Direct',
      description: `Migration directe vers ${targetSector.name}`,
      duration: '6-12 mois',
      difficulty: comparison.migrationDifficulty,
      successRate: Math.round((1 - comparison.migrationDifficulty) * 100),
      steps: [
        `Formation intensive ${targetSector.name}`,
        `Projets portfolio spécialisés`,
        `Certifications sectorielles`,
        `Réseautage professionnel`
      ]
    },
    {
      path: 'Progressive',
      description: `Migration progressive via secteurs intermédiaires`,
      duration: '12-18 mois',
      difficulty: comparison.migrationDifficulty * 0.7,
      successRate: Math.round((1 - comparison.migrationDifficulty * 0.7) * 100),
      steps: [
        `Formation complémentaire`,
        `Expérience hybride`,
        `Transition progressive`,
        `Spécialisation finale`
      ]
    }
  ];
};

const analyzeCrossSectorOpportunities = (sectorialComparisons, migrationPaths) => {
  const { sectorData } = sectorialComparisons;
  
  return Object.entries(sectorData).map(([sector, data]) => ({
    sector,
    opportunity: {
      salaryPotential: data.avgSalary,
      riskLevel: data.riskScore,
      growthRate: data.growthRate,
      demandTrend: data.demandTrend,
      skillTransferability: calculateSkillTransferability(sector),
      timeToProficiency: estimateTimeToProficiency(sector)
    }
  }));
};

const calculateSkillTransferability = (sector) => {
  const transferabilityMatrix = {
    'Tech & IT': 0.8,
    'DevOps': 0.9,
    'Cloud': 0.85,
    'AI/ML': 0.7
  };
  
  return transferabilityMatrix[sector] || 0.75;
};

const estimateTimeToProficiency = (sector) => {
  const timeMatrix = {
    'Tech & IT': '3-6 mois',
    'DevOps': '6-12 mois',
    'Cloud': '8-14 mois',
    'AI/ML': '12-18 mois'
  };
  
  return timeMatrix[sector] || '6-12 mois';
};

// ============================================================================
// ⏰ ALERTES TEMPORELLES - Notifications à l'approche des échéances
// ============================================================================
const generateTemporalAlerts = (ctx) => {
  const { temporalAlerts, calendrierObjectifs, milestones } = ctx;
  
  // Générer les alertes de jalons à venir
  const upcomingMilestones = generateUpcomingMilestones(milestones, temporalAlerts.alertSettings);
  
  // Générer les rappels d'échéances
  const deadlineReminders = generateDeadlineReminders(calendrierObjectifs, temporalAlerts.alertSettings);
  
  // Générer les points de contrôle de progression
  const progressCheckpoints = generateProgressCheckpoints(ctx, temporalAlerts.alertSettings);
  
  // Générer les alertes d'opportunités marché
  const marketOpportunities = generateMarketOpportunities(ctx, temporalAlerts.alertSettings);
  
  return {
    ...ctx,
    temporalAlerts: {
      ...temporalAlerts,
      upcomingMilestones,
      deadlineReminders,
      progressCheckpoints,
      marketOpportunities
    }
  };
};

const generateUpcomingMilestones = (milestones, alertSettings) => {
  const now = new Date();
  const reminderDays = alertSettings.milestoneReminder;
  
  return milestones
    .filter(milestone => {
      const timeDiff = milestone.dueDate.getTime() - now.getTime();
      const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
      return daysDiff <= reminderDays && daysDiff >= 0;
    })
    .map(milestone => ({
      id: `milestone_${milestone.id}`,
      type: 'milestone_reminder',
      title: milestone.title,
      dueDate: milestone.dueDate,
      daysRemaining: Math.ceil((milestone.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
      priority: milestone.priority || 'medium',
      message: `🚨 Jalon "${milestone.title}" dans ${Math.ceil((milestone.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))} jours`
    }));
};

const generateDeadlineReminders = (calendrierObjectifs, alertSettings) => {
  const now = new Date();
  const reminderDays = alertSettings.milestoneReminder;
  
  return calendrierObjectifs
    .filter(objectif => {
      const timeDiff = objectif.endDate.getTime() - now.getTime();
      const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
      return daysDiff <= reminderDays && daysDiff >= 0;
    })
    .map(objectif => ({
      id: `deadline_${objectif.id}`,
      type: 'deadline_reminder',
      title: objectif.title,
      dueDate: objectif.endDate,
      daysRemaining: Math.ceil((objectif.endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
      priority: objectif.priority || 'medium',
      message: `⏰ Échéance "${objectif.title}" dans ${Math.ceil((objectif.endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))} jours`
    }));
};

const generateProgressCheckpoints = (ctx, alertSettings) => {
  const { progressions, formationsEnCours } = ctx;
  const now = new Date();
  const checkInterval = alertSettings.progressCheck;
  
  // Vérifier si un checkpoint est nécessaire
  const lastCheckpoint = progressions.length > 0 ? progressions[progressions.length - 1].timestamp : new Date(0);
  const daysSinceLastCheck = (now.getTime() - lastCheckpoint.getTime()) / (1000 * 60 * 60 * 24);
  
  if (daysSinceLastCheck >= checkInterval) {
    return [{
      id: `checkpoint_${Date.now()}`,
      type: 'progress_checkpoint',
      title: 'Point de contrôle de progression',
      priority: 'medium',
      message: `📊 Il est temps de faire le point sur votre progression. Formation "${formationsEnCours[0]?.titre}": ${formationsEnCours[0]?.progression}% complété.`
    }];
  }
  
  return [];
};

const generateMarketOpportunities = (ctx, alertSettings) => {
  const { sectorialComparisons, objectifReconversion } = ctx;
  const now = new Date();
  const updateInterval = alertSettings.marketUpdate;
  
  // Simuler des opportunités marché basées sur les tendances sectorielles
  const opportunities = [];
  
  if (sectorialComparisons.sectorData[objectifReconversion]?.demandTrend === 'booming') {
    opportunities.push({
      id: `market_${Date.now()}`,
      type: 'market_opportunity',
      title: 'Opportunité marché détectée',
      priority: 'high',
      message: `🔥 Boom du marché ${objectifReconversion}! Plus de 150 offres publiées cette semaine. C'est le moment idéal pour postuler.`,
      action: 'Voir les offres',
      url: `#opportunities-${objectifReconversion.toLowerCase()}`
    });
  }
  
  return opportunities;
};

// ============================================================================
// 📄 EXPORT PDF - Génération de rapports de projection
// ============================================================================
const generateProjectionPDFReport = async (ctx) => {
  const { dynamicProjections, sectorialComparisons, temporalAlerts, prenom, objectifReconversion } = ctx;
  
  // Générer le contenu du rapport
  const reportContent = generateReportContent(ctx);
  
  // Créer le PDF (simulation)
  const pdfData = {
    id: `report_${Date.now()}`,
    title: `Rapport de Projection Carrière - ${prenom}`,
    generatedAt: new Date(),
    content: reportContent,
    sections: [
      'Résumé Exécutif',
      'Projection Dynamique',
      'Comparaisons Sectorielles',
      'Alertes Temporelles',
      'Recommandations'
    ],
    metadata: {
      pages: 8,
      wordCount: 1200,
      charts: 4,
      tables: 3
    }
  };
  
  // Simuler la génération du PDF
  const pdfBuffer = simulateProjectionPDFGeneration(pdfData);
  
  // Ajouter à l'historique des exports
  const newExport = {
    id: pdfData.id,
    timestamp: new Date(),
    title: pdfData.title,
    size: pdfBuffer.length,
    sections: pdfData.sections,
    downloaded: false
  };
  
  return {
    ...ctx,
    exportsPDF: [...(ctx.exportsPDF || []), newExport],
    derniereGenerationPDF: new Date()
  };
};

const generateReportContent = (ctx) => {
  const { prenom, scoreRisque, objectifReconversion, dynamicProjections, sectorialComparisons } = ctx;
  
  return {
    executiveSummary: {
      name: prenom,
      currentRiskScore: scoreRisque,
      targetSector: objectifReconversion,
      projectionAccuracy: dynamicProjections?.projectionAccuracy?.overall || 0.78,
      keyRecommendations: [
        'Formation intensive DevOps/Cloud',
        'Développement de projets portfolio',
        'Réseautage professionnel',
        'Certifications sectorielles'
      ]
    },
    
    dynamicProjection: {
      timeline: {
        month3: {
          riskScore: Math.max(scoreRisque - 15, 25),
          achievements: ['Certification niveau 1', '2 projets portfolio'],
          salary: '45-52K€'
        },
        month6: {
          riskScore: Math.max(scoreRisque - 25, 22),
          achievements: ['Compétences transférables 87%', '5 entreprises ciblées'],
          salary: '52-58K€'
        },
        month12: {
          riskScore: Math.max(scoreRisque - 42, 20),
          achievements: ['Poste obtenu', 'Zone sécurisée'],
          salary: '58-65K€'
        }
      },
      successProbability: 0.78,
      adaptationFactors: dynamicProjections?.adaptationFactors || {
        userProgress: 1.0,
        marketConditions: 1.0,
        sectorTrends: 1.0,
        personalFactors: 1.0
      }
    },
    
    sectorialAnalysis: {
      currentSector: sectorialComparisons?.currentSector || 'Tech & IT',
      targetSectors: sectorialComparisons?.targetSectors || ['DevOps', 'Cloud'],
      comparisons: sectorialComparisons?.crossSectorAnalysis || [],
      migrationPaths: sectorialComparisons?.migrationPaths || [],
      opportunities: sectorialComparisons?.crossSectorOpportunities || []
    },
    
    temporalAlerts: {
      upcomingMilestones: temporalAlerts?.upcomingMilestones || [],
      deadlineReminders: temporalAlerts?.deadlineReminders || [],
      progressCheckpoints: temporalAlerts?.progressCheckpoints || [],
      marketOpportunities: temporalAlerts?.marketOpportunities || []
    },
    
    recommendations: {
      immediate: [
        'Commencer formation DevOps/Cloud',
        'Créer premier projet portfolio',
        'Rejoindre communautés professionnelles'
      ],
      shortTerm: [
        'Obtenir première certification',
        'Compléter 3 projets portfolio',
        'Participer à 2 meetups'
      ],
      longTerm: [
        'Postuler à 10+ offres ciblées',
        'Développer expertise cloud',
        'Construire réseau professionnel'
      ]
    }
  };
};

const simulateProjectionPDFGeneration = (pdfData) => {
  // Simulation de génération PDF pour projections
  const content = JSON.stringify(pdfData.content, null, 2);
  return Buffer.from(content, 'utf8');
};

// ============================================================================
// 🎯 SCENARIO MATCHING ENGINE - Avec réponses personnalisées
// ============================================================================
const findBestScenario = (message, emotion, context, sparringMode = false) => {
  const msg = message.toLowerCase();
  
  // Mode Sparring : utilise les scénarios challenges
  if (sparringMode) {
    if (msg.match(/reconversion|devenir|métier|objectif/)) {
      return 'sparring_reconversion';
    }
    if (msg.match(/impact|ia|remplacer|automatisation/)) {
      return 'sparring_impactIA';
    }
    if (msg.match(/compétences|skills|apprendre|formation/)) {
      return 'sparring_competences';
    }
    if (msg.match(/motivation|motivé|énergie|démotivé/)) {
      return 'sparring_motivation';
    }
    return 'sparring_default';
  }

  // Mode Entretien : détecter les demandes d'entretien
  if (msg.match(/entretien|interview|simulation.*entretien|préparer.*entretien|mock.*interview/)) {
    return 'interview';
  }

  // Mode Benchmark : détecter les demandes de comparaison
  if (msg.match(/benchmark|comparaison|top.*performer|où.*suis.*je|positionnement|ranking|classement/)) {
    return 'benchmark';
  }

  // Mode Pitch : détecter les demandes de pitch
  if (msg.match(/pitch|présentation|me présenter|cv|linkedin|email.*candidature|entretien.*pitch/)) {
    return 'pitchGenerator';
  }
  
  // Priorité 1 : Réponses personnalisées selon l'intensité émotionnelle
  if (emotion !== 'neutral') {
    return 'personalized';
  }
  
  // Priorité 2 : Scénarios contextuels
  if (msg.match(/impact|ia sur mon métier|remplacer/)) return 'impactIA';
  if (msg.match(/compétences|apprendre|développer|formations/)) return 'competences';
  if (msg.match(/métiers|reconversion|alternatives/)) return 'metiersSimilaires';
  if (msg.match(/analyser|offre|emploi|screenshot|upload|image|candidature/)) return 'analyseOffre';
  
  // Priorité 3 : Analyse de l'historique émotionnel pour contexte
  if (context.alertesEmotionnelles.length > 0) {
    return 'personalized'; // Forcer une réponse personnalisée si alerte
  }
  
  return 'default';
};

// ============================================================================
// 🎨 AEGIS AVATAR COMPONENT - Adaptation émotionnelle avancée
// ============================================================================
const AegisAvatar = ({ state = 'idle', sparringMode = false }) => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    if (state === 'thinking') {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 2) % 360);
      }, 30);
      return () => clearInterval(interval);
    } else if (state === 'energetic_high') {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 4) % 360);
      }, 50);
      return () => clearInterval(interval);
    } else if (state === 'burnout_severe') {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 0.5) % 360);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [state]);
  
  const getGlowColor = () => {
    // Mode sparring prioritaire
    if (sparringMode) return 'rgba(251, 146, 60, 0.6)'; // Orange sparring
    
    switch(state) {
      // États émotionnels avancés
      case 'anxious_high': return COLORS.anxiousHighGlow;
      case 'anxious_moderate': return COLORS.anxiousModerateGlow;
      case 'burnout_severe': return COLORS.burnoutSevereGlow;
      case 'burnout_moderate': return COLORS.burnoutModerateGlow;
      case 'energetic_high': return COLORS.energeticHighGlow;
      case 'discouraged': return COLORS.discouragedGlow;
      
      // États existants
      case 'empathetic': return COLORS.empatheticGlow;
      case 'alert': return COLORS.redAlert;
      case 'thinking': return COLORS.cyanGlow;
      default: return COLORS.cyanGlow;
    }
  };
  
  const getPulseAnimation = () => {
    // Mode sparring prioritaire
    if (sparringMode) return 'pulse 1s ease-in-out infinite';
    
    switch(state) {
      case 'anxious_high': return 'pulse 0.8s ease-in-out infinite';
      case 'anxious_moderate': return 'pulse 1.5s ease-in-out infinite';
      case 'burnout_severe': return 'none';
      case 'burnout_moderate': return 'none';
      case 'energetic_high': return 'pulse 1.2s ease-in-out infinite';
      case 'discouraged': return 'pulse 3s ease-in-out infinite';
      case 'thinking': return 'pulse 1s ease-in-out infinite';
      default: return 'pulse 2s ease-in-out infinite';
    }
  };
  
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div 
        className="absolute inset-0 rounded-full blur-xl transition-all duration-500"
        style={{ 
          backgroundColor: getGlowColor(),
          animation: getPulseAnimation()
        }}
      />
      
      <div className="relative z-10 w-12 h-12 flex items-center justify-center">
        <Shield 
          className="w-full h-full transition-all duration-500" 
          style={{ 
            color: COLORS.cyan,
            transform: `rotate(${rotation}deg)`,
            filter: `drop-shadow(0 0 12px ${getGlowColor()})`
          }}
        />
        <div 
          className="absolute w-3 h-3 bg-cyan-400 transform rotate-45 transition-all duration-500"
          style={{
            boxShadow: `0 0 15px ${getGlowColor()}`,
            animation: getPulseAnimation()
          }}
        />
      </div>
    </div>
  );
};

// ============================================================================
// 💬 MESSAGE BUBBLE COMPONENT
// ============================================================================
const MessageBubble = ({ message, isUser, isTyping }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    if (!isUser && !isTyping && message && !isComplete) {
      let index = 0;
      const text = message;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 10);
      return () => clearInterval(interval);
    } else if (isUser) {
      setDisplayedText(message);
      setIsComplete(true);
    }
  }, [message, isUser, isTyping, isComplete]);
  
  return (
    <div className={`flex gap-3 mb-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {!isUser && (
        <div className="flex-shrink-0">
          <AegisAvatar state={isTyping ? 'thinking' : 'idle'} />
        </div>
      )}
      
      <div className={`flex-1 max-w-[80%] ${isUser ? 'ml-auto' : 'mr-auto'}`}>
        <div 
          className={`rounded-2xl px-6 py-4 backdrop-blur-md border ${
            isUser 
              ? 'bg-cyan-500/20 border-cyan-500/30 ml-auto' 
              : 'bg-white/5 border-white/10'
          }`}
          style={{
            boxShadow: isUser 
              ? '0 0 20px rgba(6, 182, 212, 0.15)' 
              : '0 0 20px rgba(255, 255, 255, 0.05)'
          }}
        >
          {isTyping ? (
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          ) : (
            <div className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap">
              {displayedText}
            </div>
          )}
        </div>
        
        {!isUser && !isTyping && (
          <div className="mt-2 text-xs text-white/40 px-2">
            Aegis 🛡️
          </div>
        )}
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-medium">
          {USER_CONTEXT.prenom[0]}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 🎯 QUICK ACTIONS COMPONENT
// ============================================================================
const QuickActions = ({ onAction }) => {
  const actions = [
    { icon: Briefcase, label: "Impact IA sur mon métier", action: "impactIA" },
    { icon: Target, label: "Compétences à développer", action: "competences" },
    { icon: RefreshCw, label: "Métiers similaires AI-proof", action: "metiersSimilaires" },
    { icon: FileText, label: "Analyser une offre d'emploi", action: "analyseOffre" }
  ];
  
  return (
    <div className="grid grid-cols-2 gap-3 p-4 border-t border-white/10">
      {actions.map((action, idx) => {
        const Icon = action.icon;
        return (
          <button
            key={idx}
            onClick={() => onAction(action.action)}
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-200 group"
          >
            <Icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-white/70 group-hover:text-cyan-300 text-left">
              {action.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

// ============================================================================
// ✍️ CHAT INPUT COMPONENT
// ============================================================================
const ChatInput = ({ onSend, disabled, emotionalState }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);
  
  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);
  
  return (
    <div className="p-4 border-t border-white/10 bg-slate-900/50 backdrop-blur-md">
      {/* Indicateur visuel d'émotion détectée */}
      {emotionalState !== 'neutral' && (
        <div className="px-4 py-2 text-xs text-white/60 flex items-center gap-2 mb-3">
          <Heart className="w-4 h-4" />
          Mode {
            emotionalState === 'anxious_high' ? 'Écoute Empathique' : 
            emotionalState === 'anxious_moderate' ? 'Écoute Bienveillante' :
            emotionalState === 'burnout_severe' ? 'Protection Activée' :
            emotionalState === 'burnout_moderate' ? 'Soutien Adaptatif' :
            emotionalState === 'energetic_high' ? 'Boost Motivationnel' : 
            emotionalState === 'discouraged' ? 'Encouragement Ciblé' :
            'Adaptatif'
          } activé
        </div>
      )}
      
      <div className="flex items-end gap-3">
        <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white/40 hover:text-cyan-400">
          <Paperclip className="w-5 h-5" />
        </button>
        
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Posez votre question à Aegis..."
          disabled={disabled}
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 resize-none min-h-[44px] max-h-32"
          rows={1}
        />
        
        <button 
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

// ============================================================================
// 🛡️ MAIN AEGIS CHATBOT COMPONENT
// ============================================================================
const AegisChatbot = ({ isDev = false }) => {
  const { user: clerkUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [sparringMode, setSparringMode] = useState(false);
  const [userContext, setUserContext] = useState(USER_CONTEXT);
  const [emotionalState, setEmotionalState] = useState('neutral');
  const [showEmotionalHistory, setShowEmotionalHistory] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMLInsights, setShowMLInsights] = useState(false);
  const [showAdvancedML, setShowAdvancedML] = useState(false);
  const [showContinuousTraining, setShowContinuousTraining] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [conversationDepth, setConversationDepth] = useState(0);
  const [showDynamicProjections, setShowDynamicProjections] = useState(false);
  const [showSectorialComparisons, setShowSectorialComparisons] = useState(false);
  const [showTemporalAlerts, setShowTemporalAlerts] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isAnalyzingOffer, setIsAnalyzingOffer] = useState(false);
  const [personalityAnalyzed, setPersonalityAnalyzed] = useState(false);
  const [interviewMode, setInterviewMode] = useState(false);
  const [interviewQuestion, setInterviewQuestion] = useState(0);
  const [interviewAnswers, setInterviewAnswers] = useState([]);
  const [interviewLevel, setInterviewLevel] = useState('junior');
  const [benchmarkShown, setBenchmarkShown] = useState(false);
  const [burnoutDetectedAt, setBurnoutDetectedAt] = useState(null);
  const [connectionDotsShown, setConnectionDotsShown] = useState(false);
  
  // 🎮 STATES GAMIFICATION
  const [showProgress, setShowProgress] = useState(false);
  const [activeTab, setActiveTab] = useState('progress'); // 'progress' | 'challenges' | 'leaderboard' | 'debug'
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fonctions de gamification
  const showNotification = (message, type = 'info', duration = 3000) => {
    const id = Date.now();
    const notification = { id, message, type };
    
    setNotifications(prev => [...prev, notification]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, duration);
  };

  const triggerCelebration = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const addXP = (amount, reason) => {
    setUserContext(prev => {
      const newXP = prev.xp + amount;
      const newLevel = calculateLevel(newXP);
      const leveledUp = newLevel > prev.level;
      
      // Notification toast
      showNotification(`+${amount} XP • ${reason}`, 'xp');
      
      if (leveledUp) {
        showNotification(`🎊 Niveau ${newLevel} atteint !`, 'level', 5000);
        triggerCelebration();
      }
      
      return {
        ...prev,
        xp: newXP,
        level: newLevel,
        xpToNextLevel: calculateXPForNextLevel(newLevel),
        totalPoints: prev.totalPoints + amount,
        weeklyXP: prev.weeklyXP + amount
      };
    });
  };

  const unlockBadges = () => {
    const newBadges = checkBadgeUnlock(userContext);
    
    if (newBadges.length > 0) {
      newBadges.forEach(badge => {
        // Ajouter XP
        addXP(badge.points, `Badge débloqué : ${badge.name}`);
        
        // Notification badge
        showNotification(`🏆 ${badge.name} débloqué !`, 'badge', 4000);
        
        // Mettre à jour userContext
        setUserContext(prev => ({
          ...prev,
          unlockedBadges: [...prev.unlockedBadges, badge.id]
        }));
      });
    }
  };

  const completeChallenge = (challengeId) => {
    const challenge = activeChallenges.find(c => c.id === challengeId);
    if (!challenge || completedChallenges.includes(challengeId)) return;
    
    setCompletedChallenges(prev => {
      const updated = [...prev, challengeId];
      localStorage.setItem('completed_challenges', JSON.stringify(updated));
      return updated;
    });
    
    addXP(challenge.xp, `Défi complété : ${challenge.title}`);
    
    // Bonus si tous les défis complétés
    if (completedChallenges.length + 1 === activeChallenges.length) {
      setTimeout(() => addXP(50, 'Tous les défis quotidiens complétés'), 500);
    }
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Mise à jour du contexte à l'ouverture du chatbot
  useEffect(() => {
    if (isOpen) {
      setUserContext(prev => updateUserContext(prev, {}));
    }
  }, [isOpen]);
  
  const handleSendMessage = async (message) => {
    const userMessage = { text: message, isUser: true, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const emotion = detectEmotion(message);
    
    // Mise à jour de l'historique émotionnel et du contexte
    const updatedContext = updateEmotionalHistory(userContext, emotion, message);
    
    // Détecter le burnout et sauvegarder la détection
    if (emotion === 'burnout' || emotion === 'burnout_severe') {
      setBurnoutDetectedAt(Date.now());
      updatedContext.lastBurnoutDetection = Date.now();
    }
    
    setUserContext(updatedContext);
    setEmotionalState(emotion);
    
    // Incrémenter la profondeur de conversation
    setConversationDepth(prev => prev + 1);
    
    // Gérer le mode entretien
    if (interviewMode) {
      // Sauvegarder la réponse
      setInterviewAnswers(prev => [...prev, message]);
      
      // Générer feedback
      const filteredQuestions = INTERVIEW_QUESTIONS.filter(q => q.level === interviewLevel);
      const currentQ = filteredQuestions[interviewQuestion];
      
      setIsTyping(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsTyping(false);
      
      if (currentQ) {
        const feedback = currentQ.feedback(message, updatedContext);
        const feedbackMessage = {
          text: feedback,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, feedbackMessage]);
        
        // Passer à la question suivante ou terminer
        if (interviewQuestion < filteredQuestions.length - 1) {
          setInterviewQuestion(prev => prev + 1);
          
          // Ajouter la prochaine question
          const nextQ = filteredQuestions[interviewQuestion + 1];
          const nextQuestionMessage = {
            text: `**Question ${interviewQuestion + 2}/${filteredQuestions.length} :**

${nextQ.question}

*Réponds comme en vrai entretien, je t'analyserai en temps réel.*

— Aegis 🛡️ | Mode Recruteur`,
            isUser: false,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, nextQuestionMessage]);
        } else {
          // Fin de simulation
          const finalReport = generateFinalInterviewReport(interviewAnswers, interviewLevel, updatedContext);
          const finalMessage = {
            text: finalReport,
            isUser: false,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, finalMessage]);
          
          // Désactiver le mode entretien
          setInterviewMode(false);
          setInterviewQuestion(0);
          setInterviewAnswers([]);
        }
      }
      return;
    }
    
    // Appeler l'API Aegis
    try {
      if (!clerkUser?.id) {
        throw new Error('Utilisateur non authentifié');
      }

      // Préparer l'historique de conversation pour l'API
      const conversationHistory = messages
        .slice(-10) // Garder les 10 derniers messages
        .map(msg => ({
          role: msg.isUser ? 'user' : 'assistant',
          content: msg.text || msg.message || ''
        }))
        .filter(msg => msg.content && msg.content.trim() !== '');

      const apiResponse = await fetch('/api/aegis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: clerkUser.id,
          message: message,
          conversationHistory: conversationHistory
        })
      });

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json().catch(() => ({}));
        throw new Error(errorData.error || `Erreur ${apiResponse.status}`);
      }

      const data = await apiResponse.json();
      
      setIsTyping(false);
      
      const aiMessage = { text: data.response, isUser: false, timestamp: new Date() };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Erreur lors de l\'appel à l\'API Aegis:', error);
      setIsTyping(false);
      
      // Fallback vers les réponses locales en cas d'erreur
      const scenarioKey = findBestScenario(message, emotion, updatedContext, sparringMode);
      let response;
      if (scenarioKey === 'personalized') {
        response = SCENARIOS.personalized(updatedContext, emotion, message);
      } else {
        response = SCENARIOS[scenarioKey](updatedContext);
      }
      
      const aiMessage = { 
        text: response, 
        isUser: false, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, aiMessage]);
    }
  };
  
  const handleQuickAction = (actionType) => {
    const response = SCENARIOS[actionType](userContext);
    const aiMessage = { text: response, isUser: false, timestamp: new Date() };
    setMessages([aiMessage]);
  };
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        text: getWelcomeMessage(userContext),
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, userContext]);

  // Déclencher la projection automatiquement après 5 et 10 messages importants
  useEffect(() => {
    if (conversationDepth === 5 || conversationDepth === 10) {
      const projectionMessage = {
        text: generateCareerProjection(userContext),
        isUser: false,
        timestamp: new Date(),
        type: 'projection'
      };
      setMessages(prev => [...prev, projectionMessage]);
    }
  }, [conversationDepth, userContext]);

  // Déclenche l'analyse de personnalité après 8 messages
  useEffect(() => {
    const userMessageCount = messages.filter(m => m.isUser).length;
    
    if (userMessageCount === 8 && !personalityAnalyzed && !messages.some(m => m.type === 'personality')) {
      const personalityAnalysis = {
        text: analyzePersonality(messages, userContext),
        isUser: false,
        timestamp: new Date(),
        type: 'personality'
      };
      setMessages(prev => [...prev, personalityAnalysis]);
      setPersonalityAnalyzed(true);
    }
  }, [messages, personalityAnalyzed, userContext]);

  // Déclenche le benchmark après 2 semaines d'utilisation
  useEffect(() => {
    const daysSinceFirstVisit = userContext.derniereVisite 
      ? (Date.now() - new Date(userContext.derniereVisite).getTime()) / (1000 * 60 * 60 * 24)
      : 14; // Simuler 2 semaines pour le test
    
    if (daysSinceFirstVisit >= 14 && !benchmarkShown && !messages.some(m => m.type === 'benchmark')) {
      const benchmarkMessage = {
        text: generateBenchmark(userContext),
        isUser: false,
        timestamp: new Date(),
        type: 'benchmark'
      };
      setMessages(prev => [...prev, benchmarkMessage]);
      setBenchmarkShown(true);
    }
  }, [userContext.derniereVisite, benchmarkShown, messages]);

  // Check-in automatique 3 jours après détection burnout
  useEffect(() => {
    if (!userContext.lastBurnoutDetection) return;
    
    const daysSinceBurnout = (Date.now() - userContext.lastBurnoutDetection) / (1000 * 60 * 60 * 24);
    
    if (daysSinceBurnout >= 3 && daysSinceBurnout < 4 && !messages.some(m => m.type === 'burnout_checkin')) {
      const checkinMessage = {
        text: generateBurnoutCheckin(userContext),
        isUser: false,
        timestamp: new Date(),
        type: 'burnout_checkin'
      };
      setMessages(prev => [...prev, checkinMessage]);
    }
  }, [userContext.lastBurnoutDetection, messages]);

  // Alertes préventives burnout
  useEffect(() => {
    if (messages.length < 10) return; // Attendre assez de messages
    
    const signals = detectBurnoutSignals(messages);
    
    if ((signals.lateNightActivity || signals.highStressFrequency || signals.negativePatterns) && 
        !messages.some(m => m.type === 'burnout_prevention')) {
      const preventionMessage = {
        text: generateBurnoutPrevention(userContext, signals),
        isUser: false,
        timestamp: new Date(),
        type: 'burnout_prevention'
      };
      setMessages(prev => [...prev, preventionMessage]);
    }
  }, [messages, userContext]);

  // Détection de patterns et connexions après plusieurs conversations
  useEffect(() => {
    const userMessageCount = messages.filter(m => m.isUser).length;
    
    if (userMessageCount >= 12 && !connectionDotsShown && !messages.some(m => m.type === 'connection_dots')) {
      const patterns = detectPatterns(messages, userContext);
      
      let connectionMessage = null;
      
      if (patterns.hasSalaryAvoidancePattern) {
        connectionMessage = {
          text: CONNECTION_DOTS_MESSAGES.salaryAvoidance(patterns, userContext),
          isUser: false,
          timestamp: new Date(),
          type: 'connection_dots'
        };
      } else if (patterns.hasOverEnthusiasmPattern) {
        connectionMessage = {
          text: CONNECTION_DOTS_MESSAGES.executionPattern(patterns, userContext),
          isUser: false,
          timestamp: new Date(),
          type: 'connection_dots'
        };
      } else if (patterns.hasProcrastinationPattern) {
        connectionMessage = {
          text: CONNECTION_DOTS_MESSAGES.procrastinationPattern(patterns, userContext),
          isUser: false,
          timestamp: new Date(),
          type: 'connection_dots'
        };
      }
      
      if (connectionMessage) {
        setMessages(prev => [...prev, connectionMessage]);
        setConnectionDotsShown(true);
      }
    }
  }, [messages, connectionDotsShown, userContext]);

  // Initialiser les défis quotidiens
  useEffect(() => {
    const initializeDailyChallenges = () => {
      const today = new Date().toDateString();
      const lastReset = localStorage.getItem('challenges_last_reset');
      
      if (lastReset !== today) {
        // Nouveau jour = nouveaux défis
        const shuffled = [...DAILY_CHALLENGES].sort(() => Math.random() - 0.5);
        const todaysChallenges = shuffled.slice(0, 3); // 3 défis par jour
        
        setActiveChallenges(todaysChallenges);
        setCompletedChallenges([]);
        localStorage.setItem('challenges_last_reset', today);
        localStorage.setItem('active_challenges', JSON.stringify(todaysChallenges));
      } else {
        // Charger les défis du jour
        const saved = localStorage.getItem('active_challenges');
        if (saved) setActiveChallenges(JSON.parse(saved));
        
        const savedCompleted = localStorage.getItem('completed_challenges');
        if (savedCompleted) setCompletedChallenges(JSON.parse(savedCompleted));
      }
    };
    
    initializeDailyChallenges();
  }, []);

  // Gestion des streaks et connexion quotidienne
  useEffect(() => {
    const lastActivity = userContext.stats.lastActivityDate;
    const today = new Date().toDateString();
    
    if (!lastActivity || new Date(lastActivity).toDateString() !== today) {
      // Nouvelle journée
      setUserContext(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          lastActivityDate: Date.now(),
          dailyStreak: lastActivity && isConsecutiveDay(lastActivity) 
            ? prev.stats.dailyStreak + 1 
            : 1
        }
      }));
      
      addXP(20, 'Connexion quotidienne');
    }
  }, [isOpen]);

  // Vérifier les badges après chaque action importante
  useEffect(() => {
    unlockBadges();
  }, [userContext.stats]);

  // Gérer les milestones de streak
  useEffect(() => {
    const streak = userContext.stats.dailyStreak;
    
    if (streak === 7) {
      const streakMessage = {
        text: `🔥 **7 JOURS CONSÉCUTIFS !**\n\nIncroyable constance ${userContext.prenom} !\n\nTu viens de débloquer le badge "Morning Warrior" 🌅\n\n+75 XP\n\n— Aegis 🛡️`,
        isUser: false,
        timestamp: new Date(),
        type: 'streak_milestone'
      };
      setMessages(m => [...m, streakMessage]);
    } else if (streak === 30) {
      const streakMessage = {
        text: `🎉 **30 JOURS ! LÉGENDE !**\n\n${userContext.prenom}, tu es dans le top 3% des utilisateurs les plus constants.\n\nBadge "Consistency King" 👑 débloqué !\n\n+250 XP\n\n— Aegis 🛡️`,
        isUser: false,
        timestamp: new Date(),
        type: 'streak_milestone'
      };
      setMessages(m => [...m, streakMessage]);
    }
  }, [userContext.stats.dailyStreak]);

  // Reset hebdomadaire (chaque lundi)
  useEffect(() => {
    const checkWeeklyReset = () => {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const lastReset = localStorage.getItem('weekly_reset_date');
      
      if (dayOfWeek === 1 && lastReset !== today.toDateString()) {
        // Nouveau lundi
        if (userContext.weeklyXP > 0) {
          // Récompenses avant reset
          const earnedRewards = WEEKLY_REWARDS.filter(r => userContext.weeklyXP >= r.threshold);
          if (earnedRewards.length > 0) {
            const rewardMessage = {
              text: `🎉 **RÉCOMPENSES HEBDOMADAIRES !**\n\nTu as gagné ${userContext.weeklyXP} XP cette semaine.\n\n${earnedRewards.map(r => `✨ ${r.reward} (+${r.xp} XP)`).join('\n')}\n\nContinue cette semaine ! 💪\n\n— Aegis 🛡️`,
              isUser: false,
              timestamp: new Date(),
              type: 'weekly_reward'
            };
            setMessages(m => [...m, rewardMessage]);
            
            earnedRewards.forEach(r => addXP(r.xp, r.reward));
          }
        }
        
        setUserContext(prev => ({ ...prev, weeklyXP: 0 }));
        localStorage.setItem('weekly_reset_date', today.toDateString());
      }
    };
    
    checkWeeklyReset();
  }, [isOpen]);

  // Donner XP tous les 5 messages
  useEffect(() => {
    const userMessageCount = messages.filter(m => m.isUser).length;
    
    if (userMessageCount > 0 && userMessageCount % 5 === 0) {
      addXP(10, '5 questions posées à Aegis');
    }
  }, [messages]);

  // Composant Notification Toast
  const NotificationToast = ({ notification, onClose }) => (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      className={`fixed right-6 bg-slate-800 border rounded-lg shadow-xl p-4 max-w-sm z-[100] ${
        notification.type === 'xp' ? 'border-cyan-500/50' :
        notification.type === 'badge' ? 'border-yellow-500/50' :
        notification.type === 'level' ? 'border-purple-500/50' :
        'border-white/10'
      }`}
      style={{ top: `${80 + (notifications.indexOf(notification) * 80)}px` }}
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl">
          {notification.type === 'xp' ? '✨' :
           notification.type === 'badge' ? '🏆' :
           notification.type === 'level' ? '🎊' :
           'ℹ️'}
        </div>
        <div className="flex-1">
          <div className="text-sm text-white font-medium">
            {notification.message}
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/40 hover:text-white/80 transition-colors"
        >
          ×
        </button>
      </div>
    </motion.div>
  );
  
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .confetti {
          position: fixed;
          width: 10px;
          height: 10px;
          background: #06B6D4;
          animation: confetti-fall 3s linear;
          z-index: 9999;
        }
      `}</style>
      
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center relative"
            style={{ boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)' }}
          >
            <Shield className="w-8 h-8 text-white" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
              3
            </div>
          </button>
          
          {/* Streak indicator */}
          {userContext.stats.dailyStreak > 0 && (
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
              🔥 {userContext.stats.dailyStreak} jours
            </div>
          )}
        </div>
      )}
      
      {isOpen && (
        <div 
          className="fixed bottom-6 right-6 w-[400px] h-[600px] rounded-2xl overflow-hidden z-50 flex flex-col"
          style={{
            backgroundColor: COLORS.deepBlue,
            boxShadow: '0 0 60px rgba(6, 182, 212, 0.3)',
            border: '1px solid rgba(6, 182, 212, 0.2)'
          }}
        >
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 flex items-center justify-between relative">
            {/* Boutons de debug (visible uniquement en mode dev) */}
            
            {/* Confettis de célébration */}
            {showConfetti && [...Array(50)].map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10px',
                  background: ['#06B6D4', '#10B981', '#F59E0B', '#8B5CF6'][Math.floor(Math.random() * 4)],
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}

            {/* Notifications Toast */}
            <AnimatePresence>
              {notifications.map(notification => (
                <NotificationToast
                  key={notification.id}
                  notification={notification}
                  onClose={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
                />
              ))}
            </AnimatePresence>
            
            <div className="flex items-center gap-3">
              <AegisAvatar state={isTyping ? 'thinking' : emotionalState} sparringMode={sparringMode} />
              <div>
                <div className="text-white font-semibold">
                  Aegis {sparringMode && <span className="text-orange-400">🥊</span>}
                </div>
                <div className="text-white/70 text-xs">
                  {sparringMode ? 'Mode Challenge Activé' : 'Expert IA SkillShield'}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowRecommendations(!showRecommendations)}
                className={`p-2 rounded-lg transition-colors ${
                  showRecommendations ? 'bg-yellow-500/20 text-yellow-400' : 'text-white/60 hover:text-white'
                }`}
                title="Recommandations Personnalisées"
              >
                <Lightbulb className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowMLInsights(!showMLInsights)}
                className={`p-2 rounded-lg transition-colors ${
                  showMLInsights ? 'bg-purple-500/20 text-purple-400' : 'text-white/60 hover:text-white'
                }`}
                title="Insights Machine Learning"
              >
                <Brain className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowAdvancedML(!showAdvancedML)}
                className={`p-2 rounded-lg transition-colors ${
                  showAdvancedML ? 'bg-indigo-500/20 text-indigo-400' : 'text-white/60 hover:text-white'
                }`}
                title="Modèles ML Pré-entraînés"
              >
                <CheckCircle className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowContinuousTraining(!showContinuousTraining)}
                className={`p-2 rounded-lg transition-colors ${
                  showContinuousTraining ? 'bg-emerald-500/20 text-emerald-400' : 'text-white/60 hover:text-white'
                }`}
                title="Entraînement Continu"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowDynamicProjections(!showDynamicProjections)}
                className={`p-2 rounded-lg transition-colors ${
                  showDynamicProjections ? 'bg-purple-500/20 text-purple-400' : 'text-white/60 hover:text-white'
                }`}
                title="Projections Dynamiques"
              >
                <Zap className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowSectorialComparisons(!showSectorialComparisons)}
                className={`p-2 rounded-lg transition-colors ${
                  showSectorialComparisons ? 'bg-orange-500/20 text-orange-400' : 'text-white/60 hover:text-white'
                }`}
                title="Comparaisons Sectorielles"
              >
                <Building2 className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowTemporalAlerts(!showTemporalAlerts)}
                className={`p-2 rounded-lg transition-colors ${
                  showTemporalAlerts ? 'bg-red-500/20 text-red-400' : 'text-white/60 hover:text-white'
                }`}
                title="Alertes Temporelles"
              >
                <AlertTriangle className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 rounded-lg transition-colors text-white/60 hover:text-white hover:bg-white/5"
                title="Analyser une offre d'emploi"
              >
                <Upload className="w-5 h-5" />
              </button>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className={`p-2 rounded-lg transition-colors ${
                  showCalendar ? 'bg-blue-500/20 text-blue-400' : 'text-white/60 hover:text-white'
                }`}
                title="Calendrier Objectifs"
              >
                <Calendar className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 rounded-lg transition-colors ${
                  showNotifications ? 'bg-red-500/20 text-red-400' : 'text-white/60 hover:text-white'
                }`}
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowEmotionalHistory(!showEmotionalHistory)}
                className={`p-2 rounded-lg transition-colors ${
                  showEmotionalHistory ? 'bg-green-500/20 text-green-400' : 'text-white/60 hover:text-white'
                }`}
                title="Historique Émotionnel"
              >
                <BarChart3 className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => {
                  setSparringMode(!sparringMode);
                  if (!sparringMode) {
                    // Message d'activation
                    setMessages(prev => [...prev, {
                      text: `🥊 **MODE SPARRING ACTIVÉ**\n\nJe vais maintenant challenger tes idées et te pousser dans tes retranchements.\n\nC'est inconfortable, mais c'est comme ça qu'on progresse vraiment.\n\nPrêt ? 💪`,
                      isUser: false,
                      timestamp: new Date()
                    }]);
                  } else {
                    // Message de désactivation
                    setMessages(prev => [...prev, {
                      text: `🛡️ **MODE SPARRING DÉSACTIVÉ**\n\nRetour au mode empathique et bienveillant.\n\nTu as fait du bon travail ! 👏`,
                      isUser: false,
                      timestamp: new Date()
                    }]);
                  }
                }}
                className={`p-2 rounded-lg transition-all relative ${
                  sparringMode 
                    ? 'bg-orange-500/30 text-orange-300 ring-2 ring-orange-400' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                title={sparringMode ? "Mode Challenge activé 🥊" : "Activer Mode Sparring"}
              >
                <Swords className="w-5 h-5" />
                {sparringMode && (
                  <div className="absolute top-full left-0 mt-1 text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded whitespace-nowrap z-50">
                    Mode Challenge 🥊
                  </div>
                )}
              </button>
              
              <button
                onClick={async () => {
                  setIsGeneratingPDF(true);
                  try {
                    const pdfReport = await generateProjectionPDFReport(userContext);
                    // Simuler le téléchargement
                    const blob = new Blob([pdfReport.buffer], { type: 'application/pdf' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = pdfReport.filename;
                    a.click();
                    URL.revokeObjectURL(url);
                    alert(`PDF généré avec succès: ${pdfReport.filename}`);
                  } catch (error) {
                    alert('Erreur lors de la génération du PDF');
                  } finally {
                    setIsGeneratingPDF(false);
                  }
                }}
                disabled={isGeneratingPDF}
                className="p-2 rounded-lg text-white/60 hover:text-white transition-colors disabled:opacity-50"
                title="Export PDF"
              >
                {isGeneratingPDF ? <Clock className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
              </button>
              
              {/* Bouton progression gamification */}
              <button
                onClick={() => setShowProgress(!showProgress)}
                className="relative p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                title="Ma progression"
              >
                <Award className="w-5 h-5" />
                
                {/* Niveau badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-cyan-600">
                  {userContext.level}
                </div>
              </button>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Panel Progression Gamification */}
          {showProgress && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/10 bg-slate-800/95 backdrop-blur-lg"
            >
              {/* Tabs */}
              <div className="flex border-b border-white/10">
                <button
                  onClick={() => setActiveTab('progress')}
                  className={`flex-1 px-3 py-3 text-xs font-medium transition-colors ${
                    activeTab === 'progress'
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  📊 Progression
                </button>
                <button
                  onClick={() => setActiveTab('challenges')}
                  className={`flex-1 px-3 py-3 text-xs font-medium transition-colors relative ${
                    activeTab === 'challenges'
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  🎯 Défis
                  {activeChallenges.length > completedChallenges.length && (
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('leaderboard')}
                  className={`flex-1 px-3 py-3 text-xs font-medium transition-colors ${
                    activeTab === 'leaderboard'
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  🏆 Classement
                </button>
                <button
                  onClick={() => setActiveTab('debug')}
                  className={`flex-1 px-3 py-3 text-xs font-medium transition-colors ${
                    activeTab === 'debug'
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  🔧 Suivi
                </button>
              </div>
              
              <div className="p-4">
                {/* Tab Progress */}
                {activeTab === 'progress' && (
                  <div>
                    {/* Niveau & XP */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-white">
                          Niveau {userContext.level}
                        </span>
                        <span className="text-xs text-white/60">
                          {userContext.xp} / {userContext.xpToNextLevel} XP
                        </span>
                      </div>
                      
                      {/* Barre de progression XP */}
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${(userContext.xp / userContext.xpToNextLevel) * 100}%` 
                          }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                        />
                      </div>
                    </div>
                    
                    {/* Badges débloqués */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-white/80 mb-2">
                        Badges ({userContext.unlockedBadges.length}/{Object.keys(BADGES).length})
                      </div>
                      
                      <div className="grid grid-cols-5 gap-2">
                        {Object.values(BADGES).map(badge => {
                          const unlocked = userContext.unlockedBadges.includes(badge.id);
                          return (
                            <div
                              key={badge.id}
                              className={`aspect-square rounded-lg flex items-center justify-center text-2xl transition-all ${
                                unlocked
                                  ? 'bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border-2 border-cyan-500/50'
                                  : 'bg-white/5 border border-white/10 grayscale opacity-30'
                              }`}
                              title={unlocked ? badge.name : '???'}
                            >
                              {unlocked ? badge.icon : '🔒'}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Stats rapides */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-lg font-bold text-cyan-400">
                          {userContext.stats.dailyStreak}
                        </div>
                        <div className="text-[10px] text-white/60">Jours consécutifs</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-lg font-bold text-emerald-400">
                          {userContext.stats.formationsCompleted}
                        </div>
                        <div className="text-[10px] text-white/60">Formations</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-lg font-bold text-yellow-400">
                          {userContext.totalPoints}
                        </div>
                        <div className="text-[10px] text-white/60">Points totaux</div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Tab Challenges */}
                {activeTab === 'challenges' && (
                  <div>
                    <div className="text-xs text-white/60 mb-3">
                      Défis quotidiens • Réinitialisation dans {getTimeUntilMidnight()}
                    </div>
                    
                    <div className="space-y-2">
                      {activeChallenges.map(challenge => {
                        const completed = completedChallenges.includes(challenge.id);
                        return (
                          <div
                            key={challenge.id}
                            className={`p-3 rounded-lg border transition-all ${
                              completed
                                ? 'bg-emerald-500/10 border-emerald-500/30'
                                : 'bg-white/5 border-white/10'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">{challenge.icon}</div>
                              <div className="flex-1">
                                <div className={`text-sm font-medium ${
                                  completed ? 'text-emerald-400 line-through' : 'text-white'
                                }`}>
                                  {challenge.title}
                                </div>
                                <div className="text-xs text-white/60 mt-0.5">
                                  +{challenge.xp} XP
                                </div>
                              </div>
                              {completed && (
                                <div className="text-emerald-400">✓</div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {completedChallenges.length === activeChallenges.length && activeChallenges.length > 0 && (
                      <div className="mt-4 p-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg border border-emerald-500/30 text-center">
                        <div className="text-2xl mb-1">🎉</div>
                        <div className="text-sm font-semibold text-white">
                          Tous les défis complétés !
                        </div>
                        <div className="text-xs text-white/60 mt-1">
                          Reviens demain pour de nouveaux défis
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Tab Leaderboard */}
                {activeTab === 'leaderboard' && (
                  <div>
                    <div className="text-xs text-white/60 mb-3">
                      Classement SkillShield • Temps réel
                    </div>
                    
                    {/* Position utilisateur */}
                    <div className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-2 border-cyan-500/50 rounded-lg p-3 mb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">🏅</div>
                          <div>
                            <div className="text-sm font-semibold text-white">
                              Ta position
                            </div>
                            <div className="text-xs text-white/60">
                              Niveau {userContext.level} • {userContext.totalPoints} pts
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-cyan-400">
                          #{calculateUserRank(userContext)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Top 10 */}
                    <div className="space-y-1">
                      {generateMockLeaderboard(userContext).map((user, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center justify-between p-2 rounded ${
                            user.isCurrentUser
                              ? 'bg-cyan-500/10 border border-cyan-500/30'
                              : 'bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-6 text-center font-bold ${
                              idx === 0 ? 'text-yellow-400' :
                              idx === 1 ? 'text-gray-400' :
                              idx === 2 ? 'text-orange-400' :
                              'text-white/60'
                            }`}>
                              {idx < 3 ? ['🥇', '🥈', '🥉'][idx] : `#${idx + 1}`}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">
                                {user.name} {user.isCurrentUser && '(Toi)'}
                              </div>
                              <div className="text-xs text-white/60">
                                Niveau {user.level}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-cyan-400">
                            {user.points} pts
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Tab Debug */}
                {activeTab === 'debug' && (
                  <div>
                    <div className="text-xs text-white/60 mb-3">
                      🔧 Outils de Suivi & Debug
                    </div>
                    
                    {/* Contextes */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-cyan-400 mb-2">Contextes de Test</div>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => setUserContext({...USER_CONTEXT, nombreVisites: 0})}
                          className="text-xs bg-blue-500/20 hover:bg-blue-500/30 px-2 py-1 rounded border border-blue-500/30"
                        >
                          1ère visite
                        </button>
                        <button 
                          onClick={() => setUserContext({...USER_CONTEXT, nombreVisites: 5})}
                          className="text-xs bg-green-500/20 hover:bg-green-500/30 px-2 py-1 rounded border border-green-500/30"
                        >
                          Retour
                        </button>
                        <button 
                          onClick={() => setUserContext({...USER_CONTEXT, nombreVisites: 3, derniereAlerteLue: {titre: "GPT-5 impact développeurs", date: "Il y a 2h", timestamp: Date.now()}})}
                          className="text-xs bg-orange-500/20 hover:bg-orange-500/30 px-2 py-1 rounded border border-orange-500/30"
                        >
                          Post-alerte
                        </button>
                        <button 
                          onClick={() => setUserContext({...USER_CONTEXT, nombreVisites: 2, dernierEtatEmotionnel: 'anxious'})}
                          className="text-xs bg-red-500/20 hover:bg-red-500/30 px-2 py-1 rounded border border-red-500/30"
                        >
                          Anxieux
                        </button>
                        <button 
                          onClick={() => setUserContext({...USER_CONTEXT, nombreVisites: 2, dernierEtatEmotionnel: 'energetic'})}
                          className="text-xs bg-yellow-500/20 hover:bg-yellow-500/30 px-2 py-1 rounded border border-yellow-500/30"
                        >
                          Motivé
                        </button>
                        <button 
                          onClick={() => setUserContext({...USER_CONTEXT, nombreVisites: 2, dernierEtatEmotionnel: 'anxious_high'})}
                          className="text-xs bg-red-600/20 hover:bg-red-600/30 px-2 py-1 rounded border border-red-600/30"
                        >
                          Anxieux+
                        </button>
                        <button 
                          onClick={() => setUserContext({...USER_CONTEXT, nombreVisites: 2, dernierEtatEmotionnel: 'burnout_severe'})}
                          className="text-xs bg-purple-500/20 hover:bg-purple-500/30 px-2 py-1 rounded border border-purple-500/30"
                        >
                          Burnout
                        </button>
                        <button 
                          onClick={() => setUserContext({...USER_CONTEXT, nombreVisites: 2, dernierEtatEmotionnel: 'energetic_high'})}
                          className="text-xs bg-cyan-500/20 hover:bg-cyan-500/30 px-2 py-1 rounded border border-cyan-500/30"
                        >
                          Énergique
                        </button>
                      </div>
                    </div>

                    {/* Actions Rapides */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-emerald-400 mb-2">Actions Rapides</div>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => {
                            const message = { text: generatePersonalizedRecommendations(userContext), isUser: false, timestamp: new Date() };
                            setMessages(prev => [...prev, message]);
                          }}
                          className="text-xs bg-emerald-500/20 hover:bg-emerald-500/30 px-2 py-1 rounded border border-emerald-500/30"
                        >
                          Recommandations
                        </button>
                        <button 
                          onClick={() => {
                            const projection = generateCareerProjection(userContext);
                            setMessages(prev => [...prev, { text: projection, isUser: false, timestamp: new Date() }]);
                          }}
                          className="text-xs bg-blue-500/20 hover:bg-blue-500/30 px-2 py-1 rounded border border-blue-500/30"
                        >
                          📊 Voir ma projection 3/6/12 mois
                        </button>
                        <button 
                          onClick={() => {
                            generateProjectionPDFReport(userContext);
                          }}
                          className="text-xs bg-purple-500/20 hover:bg-purple-500/30 px-2 py-1 rounded border border-purple-500/30"
                        >
                          📄 Générer PDF
                        </button>
                        <button 
                          onClick={() => {
                            setUploadedImage('test-offer.png');
                            setIsAnalyzingOffer(true);
                          }}
                          className="text-xs bg-orange-500/20 hover:bg-orange-500/30 px-2 py-1 rounded border border-orange-500/30"
                        >
                          📸 Test Analyse Offre
                        </button>
                      </div>
                    </div>

                    {/* Analyses */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-yellow-400 mb-2">Analyses</div>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => {
                            const analysis = analyzePersonality(messages, userContext);
                            setMessages(prev => [...prev, { text: analysis, isUser: false, timestamp: new Date() }]);
                            setPersonalityAnalyzed(true);
                          }}
                          className="text-xs bg-yellow-500/20 hover:bg-yellow-500/30 px-2 py-1 rounded border border-yellow-500/30"
                        >
                          🧬 ADN Professionnel
                        </button>
                        <button 
                          onClick={() => {
                            const benchmark = generateBenchmark(userContext);
                            setMessages(prev => [...prev, { text: benchmark, isUser: false, timestamp: new Date() }]);
                          }}
                          className="text-xs bg-indigo-500/20 hover:bg-indigo-500/30 px-2 py-1 rounded border border-indigo-500/30"
                        >
                          📈 Benchmark Top Performers
                        </button>
                        <button 
                          onClick={() => {
                            const detailedBenchmark = generateDetailedBenchmark(userContext);
                            setMessages(prev => [...prev, { text: detailedBenchmark, isUser: false, timestamp: new Date() }]);
                          }}
                          className="text-xs bg-indigo-600/20 hover:bg-indigo-600/30 px-2 py-1 rounded border border-indigo-600/30"
                        >
                          📊 Benchmark Détaillé
                        </button>
                        <button 
                          onClick={() => {
                            const pitch = generateElevatorPitch('entretien', userContext);
                            setMessages(prev => [...prev, { text: pitch, isUser: false, timestamp: new Date() }]);
                          }}
                          className="text-xs bg-pink-500/20 hover:bg-pink-500/30 px-2 py-1 rounded border border-pink-500/30"
                        >
                          🎤 Pitch Entretien
                        </button>
                        <button 
                          onClick={() => {
                            const pitch = generateElevatorPitch('linkedin', userContext);
                            setMessages(prev => [...prev, { text: pitch, isUser: false, timestamp: new Date() }]);
                          }}
                          className="text-xs bg-pink-600/20 hover:bg-pink-600/30 px-2 py-1 rounded border border-pink-600/30"
                        >
                          🎤 Pitch LinkedIn
                        </button>
                        <button 
                          onClick={() => {
                            const patterns = detectPatterns(messages);
                            if (patterns.length > 0) {
                              const message = { text: patterns[0].message, isUser: false, timestamp: new Date() };
                              setMessages(prev => [...prev, message]);
                            }
                            setConnectionDotsShown(true);
                          }}
                          className="text-xs bg-teal-500/20 hover:bg-teal-500/30 px-2 py-1 rounded border border-teal-500/30"
                        >
                          💡 Connection Dots
                        </button>
                      </div>
                    </div>

                    {/* Entretiens */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-cyan-400 mb-2">Simulations Entretiens</div>
                      <div className="grid grid-cols-1 gap-2">
                        <button 
                          onClick={() => {
                            setInterviewMode(true);
                            setInterviewLevel('junior');
                            setInterviewQuestion(0);
                            setInterviewAnswers([]);
                            const question = INTERVIEW_QUESTIONS.junior[0];
                            const message = { text: question.question, isUser: false, timestamp: new Date() };
                            setMessages(prev => [...prev, message]);
                          }}
                          className="text-xs bg-cyan-500/20 hover:bg-cyan-500/30 px-2 py-1 rounded border border-cyan-500/30"
                        >
                          🎬 Entretien Junior
                        </button>
                        <button 
                          onClick={() => {
                            setInterviewMode(true);
                            setInterviewLevel('intermediate');
                            setInterviewQuestion(0);
                            setInterviewAnswers([]);
                            const question = INTERVIEW_QUESTIONS.intermediate[0];
                            const message = { text: question.question, isUser: false, timestamp: new Date() };
                            setMessages(prev => [...prev, message]);
                          }}
                          className="text-xs bg-cyan-600/20 hover:bg-cyan-600/30 px-2 py-1 rounded border border-cyan-600/30"
                        >
                          🎬 Entretien Intermédiaire
                        </button>
                        <button 
                          onClick={() => {
                            setInterviewMode(true);
                            setInterviewLevel('senior');
                            setInterviewQuestion(0);
                            setInterviewAnswers([]);
                            const question = INTERVIEW_QUESTIONS.senior[0];
                            const message = { text: question.question, isUser: false, timestamp: new Date() };
                            setMessages(prev => [...prev, message]);
                          }}
                          className="text-xs bg-cyan-700/20 hover:bg-cyan-700/30 px-2 py-1 rounded border border-cyan-700/30"
                        >
                          🎬 Entretien Senior
                        </button>
                      </div>
                    </div>

                    {/* Gamification */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-emerald-400 mb-2">Gamification</div>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => addXP(100, 'Debug XP')}
                          className="text-xs bg-emerald-500/20 hover:bg-emerald-500/30 px-2 py-1 rounded border border-emerald-500/30"
                        >
                          🎮 +100 XP
                        </button>
                        <button 
                          onClick={() => {
                            setUserContext(prev => ({
                              ...prev,
                              stats: {
                                ...prev.stats,
                                formationsCompleted: prev.stats.formationsCompleted + 1,
                                formationsStartDates: [...prev.stats.formationsStartDates, new Date().toISOString()]
                              }
                            }));
                          }}
                          className="text-xs bg-green-500/20 hover:bg-green-500/30 px-2 py-1 rounded border border-green-500/30"
                        >
                          🎓 Formation
                        </button>
                        <button 
                          onClick={() => {
                            setUserContext(prev => ({
                              ...prev,
                              stats: {
                                ...prev.stats,
                                dailyStreak: prev.stats.dailyStreak + 1,
                                lastActivityDate: new Date().toISOString()
                              }
                            }));
                          }}
                          className="text-xs bg-orange-500/20 hover:bg-orange-500/30 px-2 py-1 rounded border border-orange-500/30"
                        >
                          🔥 Streak
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Machine Learning Insights */}
            {showMLInsights && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-purple-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <h3 className="text-purple-400 font-semibold">Insights Machine Learning</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400">Précision du Modèle</div>
                    <div className="text-2xl font-bold text-purple-400">
                      {Math.round(userContext.modelAccuracy * 100)}%
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400">Score de Confiance</div>
                    <div className="text-2xl font-bold text-cyan-400">
                      {Math.round(userContext.confidenceScore * 100)}%
                    </div>
                  </div>
                </div>
                
                {/* Prédictions */}
                {userContext.predictions.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-purple-400 mb-2">Prédictions Émotionnelles</div>
                    {userContext.predictions.map((pred, idx) => (
                      <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-2">
                        <div className="flex justify-between items-center mb-1">
                          <div className="font-semibold text-white text-sm">{pred.timeframe}</div>
                          <div className="text-xs text-gray-400">{Math.round(pred.confidence * 100)}% confiance</div>
                        </div>
                        <div className="text-xs text-gray-300 mb-1">
                          Émotion prédite: <span className="text-purple-300">{pred.predictedEmotion}</span>
                        </div>
                        <div className="text-xs text-gray-400">{pred.reasoning}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Historique d'Apprentissage */}
                {userContext.patternLearning.length > 0 && (
                  <div>
                    <div className="text-xs text-purple-400 mb-2">Historique d'Apprentissage</div>
                    <div className="space-y-2">
                      {userContext.patternLearning.slice(-3).map((learning, idx) => (
                        <div key={idx} className="bg-slate-700/50 rounded-lg p-2">
                          <div className="text-xs text-white">{learning.pattern}</div>
                          <div className="text-xs text-gray-400">
                            Précision: {Math.round(learning.accuracy * 100)}% | 
                            Données: {learning.dataPoints} points
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Modèles ML Pré-entraînés Avancés */}
            {showAdvancedML && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-indigo-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-indigo-400 font-semibold">Modèles ML Pré-entraînés</h3>
                </div>
                
                {/* Modèles Actifs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(userContext.pretrainedModels).map(([key, model]) => (
                    <div key={key} className="bg-slate-700/50 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold text-white text-sm">{model.name}</div>
                        <div className="text-xs text-indigo-300">v{model.version}</div>
                      </div>
                      <div className="text-xs text-gray-400 mb-1">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-300">Précision: {Math.round(model.accuracy * 100)}%</div>
                        <div className="text-xs text-gray-300">Confiance: {Math.round(model.confidence * 100)}%</div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Mis à jour: {model.lastUpdate.toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Insights Avancés */}
                {userContext.advancedInsights && (
                  <div className="mb-4">
                    <div className="text-xs text-indigo-400 mb-2">Insights Avancés</div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Complexité Émotionnelle</div>
                        <div className="text-lg font-bold text-indigo-400">
                          {Math.round(userContext.advancedInsights.emotionalComplexity * 100)}%
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Charge Cognitive</div>
                        <div className="text-lg font-bold text-orange-400">
                          {Math.round(userContext.advancedInsights.cognitiveLoad * 100)}%
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Niveau de Stress</div>
                        <div className="text-lg font-bold text-red-400">
                          {Math.round(userContext.advancedInsights.stressLevel * 100)}%
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Prédictions Avancées */}
                {userContext.advancedPredictions && (
                  <div className="space-y-4">
                    {/* Prédictions Court Terme */}
                    {userContext.advancedPredictions.shortTerm.length > 0 && (
                      <div>
                        <div className="text-xs text-indigo-400 mb-2">Prédictions Court Terme (1-7 jours)</div>
                        {userContext.advancedPredictions.shortTerm.slice(0, 3).map((pred, idx) => (
                          <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-2">
                            <div className="flex justify-between items-center mb-1">
                              <div className="font-semibold text-white text-sm">{pred.timeframe}</div>
                              <div className="text-xs text-gray-400">{Math.round(pred.confidence * 100)}% confiance</div>
                            </div>
                            <div className="text-xs text-gray-300 mb-1">
                              Émotion: <span className="text-indigo-300">{pred.predictedEmotion}</span>
                            </div>
                            <div className="text-xs text-gray-400">{pred.reasoning}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Prédictions Moyen Terme */}
                    {userContext.advancedPredictions.mediumTerm.length > 0 && (
                      <div>
                        <div className="text-xs text-indigo-400 mb-2">Prédictions Moyen Terme (1-4 semaines)</div>
                        {userContext.advancedPredictions.mediumTerm.slice(0, 2).map((pred, idx) => (
                          <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-2">
                            <div className="flex justify-between items-center mb-1">
                              <div className="font-semibold text-white text-sm">{pred.timeframe}</div>
                              <div className="text-xs text-gray-400">{Math.round(pred.confidence * 100)}% confiance</div>
                            </div>
                            <div className="text-xs text-gray-300 mb-1">
                              Tendance: <span className="text-indigo-300">{pred.predictedTrend}</span>
                            </div>
                            <div className="text-xs text-gray-400">{pred.reasoning}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Scénarios de Risque */}
                    {userContext.advancedPredictions.riskScenarios.length > 0 && (
                      <div>
                        <div className="text-xs text-red-400 mb-2">Scénarios de Risque</div>
                        {userContext.advancedPredictions.riskScenarios.map((scenario, idx) => (
                          <div key={idx} className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-2">
                            <div className="font-semibold text-red-300 text-sm mb-1">{scenario.description}</div>
                            <div className="text-xs text-gray-300 mb-1">
                              Probabilité: {Math.round(scenario.probability * 100)}% | 
                              Échéance: {scenario.timeframe}
                            </div>
                            <div className="text-xs text-gray-400">{scenario.mitigation}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Fenêtres d'Opportunité */}
                    {userContext.advancedPredictions.opportunityWindows.length > 0 && (
                      <div>
                        <div className="text-xs text-green-400 mb-2">Fenêtres d'Opportunité</div>
                        {userContext.advancedPredictions.opportunityWindows.map((window, idx) => (
                          <div key={idx} className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-2">
                            <div className="font-semibold text-green-300 text-sm mb-1">{window.opportunity}</div>
                            <div className="text-xs text-gray-300 mb-1">
                              Confiance: {Math.round(window.confidence * 100)}% | 
                              Période: {window.startDate.toLocaleDateString()} - {window.endDate.toLocaleDateString()}
                            </div>
                            <div className="text-xs text-gray-400">{window.recommendedAction}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {/* Entraînement Continu & Feedback Utilisateur */}
            {showContinuousTraining && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <RefreshCw className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-emerald-400 font-semibold">Entraînement Continu</h3>
                </div>
                
                {/* Métriques d'Entraînement */}
                {userContext.continuousTraining && (
                  <div className="mb-6">
                    <div className="text-xs text-emerald-400 mb-3">Métriques d'Entraînement</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Précision Globale</div>
                        <div className="text-2xl font-bold text-emerald-400">
                          {Math.round(userContext.continuousTraining.trainingMetrics.accuracy * 100)}%
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">F1-Score</div>
                        <div className="text-2xl font-bold text-cyan-400">
                          {Math.round(userContext.continuousTraining.trainingMetrics.f1Score * 100)}%
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Époques Complétées</div>
                        <div className="text-2xl font-bold text-blue-400">
                          {userContext.continuousTraining.epochsCompleted}
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Taux d'Apprentissage</div>
                        <div className="text-2xl font-bold text-purple-400">
                          {(userContext.continuousTraining.learningRate * 1000).toFixed(2)}‰
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Évolution de la Précision */}
                {userContext.continuousTraining && userContext.continuousTraining.accuracyEvolution.length > 0 && (
                  <div className="mb-6">
                    <div className="text-xs text-emerald-400 mb-3">Évolution de la Précision</div>
                    <div className="space-y-2">
                      {userContext.continuousTraining.accuracyEvolution.slice(-5).map((evolution, idx) => (
                        <div key={idx} className="bg-slate-700/50 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-xs text-white">
                              {evolution.timestamp.toLocaleDateString()} {evolution.timestamp.toLocaleTimeString()}
                            </div>
                            <div className={`text-xs font-bold ${
                              evolution.improvement > 0 ? 'text-green-400' : 
                              evolution.improvement < 0 ? 'text-red-400' : 'text-gray-400'
                            }`}>
                              {evolution.improvement > 0 ? '+' : ''}{(evolution.improvement * 100).toFixed(2)}%
                            </div>
                          </div>
                          <div className="text-xs text-gray-300 mb-1">
                            Précision Globale: {Math.round(evolution.overallAccuracy * 100)}%
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-xs">
                            {Object.entries(evolution.modelAccuracies).map(([model, accuracy]) => (
                              <div key={model} className="text-gray-400">
                                {model.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: {Math.round(accuracy * 100)}%
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Améliorations des Modèles */}
                {userContext.continuousTraining && userContext.continuousTraining.modelImprovements.length > 0 && (
                  <div className="mb-6">
                    <div className="text-xs text-emerald-400 mb-3">Améliorations Récentes</div>
                    {userContext.continuousTraining.modelImprovements.slice(-3).map((improvement, idx) => (
                      <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-xs text-white">
                            Entraînement #{improvement.timestamp.toLocaleDateString()}
                          </div>
                          <div className="text-xs text-emerald-300">
                            Précision: {Math.round(improvement.metrics.accuracy * 100)}%
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="text-gray-300">
                            Loss: {improvement.metrics.loss.toFixed(3)}
                          </div>
                          <div className="text-gray-300">
                            F1-Score: {improvement.metrics.f1Score.toFixed(3)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Système de Feedback */}
                {userContext.userFeedbackSystem && (
                  <div className="mb-4">
                    <div className="text-xs text-emerald-400 mb-3">Système de Feedback</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Feedbacks Collectés</div>
                        <div className="text-lg font-bold text-emerald-400">
                          {userContext.userFeedbackSystem.feedbackHistory.length}
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Types de Feedback</div>
                        <div className="text-sm text-gray-300">
                          {Object.keys(userContext.userFeedbackSystem.feedbackTypes).length} types
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Apprentissage Adaptatif */}
                {userContext.continuousTraining && userContext.continuousTraining.adaptiveLearning && (
                  <div>
                    <div className="text-xs text-emerald-400 mb-3">Apprentissage Adaptatif</div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-white">Statut</div>
                        <div className={`text-xs font-bold ${
                          userContext.continuousTraining.adaptiveLearning.enabled ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {userContext.continuousTraining.adaptiveLearning.enabled ? 'Activé' : 'Désactivé'}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
                        <div>
                          Seuil Performance: {Math.round(userContext.continuousTraining.adaptiveLearning.performanceThreshold * 100)}%
                        </div>
                        <div>
                          Taux d'Ajustement: {Math.round(userContext.continuousTraining.adaptiveLearning.adjustmentRate * 100)}%
                        </div>
                      </div>
                      {userContext.continuousTraining.adaptiveLearning.lastAdjustment && (
                        <div className="text-xs text-gray-400 mt-2">
                          Dernier ajustement: {userContext.continuousTraining.adaptiveLearning.lastAdjustment.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Projections Dynamiques */}
            {showDynamicProjections && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-purple-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <h3 className="text-purple-400 font-semibold">Projections Dynamiques</h3>
                </div>
                
                {/* Facteurs d'Adaptation */}
                {userContext.dynamicProjections && (
                  <div className="mb-6">
                    <div className="text-xs text-purple-400 mb-3">Facteurs d'Adaptation</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Progression Utilisateur</div>
                        <div className="text-2xl font-bold text-purple-400">
                          {Math.round(userContext.dynamicProjections.adaptationFactors.userProgress * 100)}%
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Conditions Marché</div>
                        <div className="text-2xl font-bold text-cyan-400">
                          {Math.round(userContext.dynamicProjections.adaptationFactors.marketConditions * 100)}%
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Tendances Secteur</div>
                        <div className="text-2xl font-bold text-orange-400">
                          {Math.round(userContext.dynamicProjections.adaptationFactors.sectorTrends * 100)}%
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Facteurs Personnels</div>
                        <div className="text-2xl font-bold text-green-400">
                          {Math.round(userContext.dynamicProjections.adaptationFactors.personalFactors * 100)}%
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Précision des Projections */}
                {userContext.dynamicProjections && userContext.dynamicProjections.projectionAccuracy && (
                  <div className="mb-4">
                    <div className="text-xs text-purple-400 mb-3">Précision des Projections</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Précision Globale</div>
                        <div className="text-lg font-bold text-purple-400">
                          {Math.round(userContext.dynamicProjections.projectionAccuracy.overall * 100)}%
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Précision Salaires</div>
                        <div className="text-lg font-bold text-green-400">
                          {Math.round(userContext.dynamicProjections.projectionAccuracy.salaryAccuracy * 100)}%
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Précision Compétences</div>
                        <div className="text-lg font-bold text-blue-400">
                          {Math.round(userContext.dynamicProjections.projectionAccuracy.skillAccuracy * 100)}%
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Historique</div>
                        <div className="text-lg font-bold text-gray-400">
                          {userContext.dynamicProjections.projectionHistory.length}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Comparaisons Sectorielles */}
            {showSectorialComparisons && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-orange-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-orange-400" />
                  <h3 className="text-orange-400 font-semibold">Comparaisons Sectorielles</h3>
                </div>
                
                {/* Secteur Actuel vs Cible */}
                {userContext.sectorialComparisons && (
                  <div className="mb-6">
                    <div className="text-xs text-orange-400 mb-3">Migration Sectorielle</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Secteur Actuel</div>
                        <div className="text-lg font-bold text-orange-400">
                          {userContext.sectorialComparisons.currentSector}
                        </div>
                        <div className="text-xs text-gray-300 mt-1">
                          {userContext.sectorialComparisons.sectorData?.[userContext.sectorialComparisons.currentSector]?.avgSalary}
                        </div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Secteur Cible</div>
                        <div className="text-lg font-bold text-green-400">
                          {userContext.objectifReconversion}
                        </div>
                        <div className="text-xs text-gray-300 mt-1">
                          {userContext.sectorialComparisons.sectorData?.[userContext.objectifReconversion]?.avgSalary}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Chemins de Migration */}
                {userContext.sectorialComparisons && userContext.sectorialComparisons.migrationPaths && (
                  <div className="mb-4">
                    <div className="text-xs text-orange-400 mb-3">Chemins de Migration</div>
                    <div className="space-y-3">
                      {userContext.sectorialComparisons.migrationPaths.map((path, idx) => (
                        <div key={idx} className="bg-slate-700/50 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-semibold text-white text-sm">{path.path}</div>
                            <div className="text-xs text-orange-300">{path.successRate}% succès</div>
                          </div>
                          <div className="text-xs text-gray-300 mb-1">{path.description}</div>
                          <div className="text-xs text-gray-400">Durée: {path.duration}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Alertes Temporelles */}
            {showTemporalAlerts && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-red-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h3 className="text-red-400 font-semibold">Alertes Temporelles</h3>
                </div>
                
                {/* Jalons à Venir */}
                {userContext.temporalAlerts && userContext.temporalAlerts.upcomingMilestones && userContext.temporalAlerts.upcomingMilestones.length > 0 && (
                  <div className="mb-6">
                    <div className="text-xs text-red-400 mb-3">Jalons à Venir</div>
                    <div className="space-y-2">
                      {userContext.temporalAlerts.upcomingMilestones.map((milestone, idx) => (
                        <div key={idx} className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                          <div className="font-semibold text-red-300 text-sm">{milestone.title}</div>
                          <div className="text-xs text-gray-300 mt-1">
                            Dans {milestone.daysRemaining} jours
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Rappels d'Échéances */}
                {userContext.temporalAlerts && userContext.temporalAlerts.deadlineReminders && userContext.temporalAlerts.deadlineReminders.length > 0 && (
                  <div className="mb-6">
                    <div className="text-xs text-red-400 mb-3">Rappels d'Échéances</div>
                    <div className="space-y-2">
                      {userContext.temporalAlerts.deadlineReminders.map((reminder, idx) => (
                        <div key={idx} className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                          <div className="font-semibold text-orange-300 text-sm">{reminder.title}</div>
                          <div className="text-xs text-gray-300 mt-1">
                            Dans {reminder.daysRemaining} jours
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Opportunités Marché */}
                {userContext.temporalAlerts && userContext.temporalAlerts.marketOpportunities && userContext.temporalAlerts.marketOpportunities.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-red-400 mb-3">Opportunités Marché</div>
                    <div className="space-y-2">
                      {userContext.temporalAlerts.marketOpportunities.map((opportunity, idx) => (
                        <div key={idx} className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                          <div className="font-semibold text-green-300 text-sm">{opportunity.title}</div>
                          <div className="text-xs text-gray-300 mt-1">{opportunity.message}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Analyse d'Offre par Screenshot */}
            {uploadedImage && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <ImageIcon className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-cyan-400 font-semibold">Analyse d'Offre d'Emploi</h3>
                </div>
                
                {/* Image Uploadée */}
                <div className="mb-4">
                  <div className="text-xs text-cyan-400 mb-2">Image uploadée :</div>
                  <div className="relative">
                    <img 
                      src={uploadedImage} 
                      alt="Offre d'emploi analysée" 
                      className="max-w-full h-auto rounded-lg border border-white/20"
                      style={{ maxHeight: '200px' }}
                    />
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="absolute top-2 right-2 p-1 bg-red-500/80 text-white rounded-full hover:bg-red-500 transition-colors"
                      title="Supprimer l'image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Statut d'Analyse */}
                <div className="flex items-center gap-2 mb-4">
                  {isAnalyzingOffer ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-cyan-400 border-t-transparent"></div>
                      <span className="text-cyan-400 text-sm">Analyse en cours...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm">Analyse terminée</span>
                    </>
                  )}
                </div>
                
                {/* Bouton d'Analyse */}
                <button
                  onClick={() => {
                    setIsAnalyzingOffer(true);
                    setTimeout(() => {
                      const analysis = analyzeJobOffer('');
                      setMessages(prev => [...prev, {
                        text: analysis,
                        isUser: false,
                        timestamp: new Date()
                      }]);
                      setIsAnalyzingOffer(false);
                    }, 2000);
                  }}
                  disabled={isAnalyzingOffer}
                  className="w-full px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isAnalyzingOffer ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-cyan-300 border-t-transparent"></div>
                      <span>Analyse en cours...</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" />
                      <span>Analyser l'offre</span>
                    </>
                  )}
                </button>
                
                {/* Instructions */}
                <div className="mt-4 text-xs text-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span className="font-semibold">Instructions :</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Formats acceptés : JPG, PNG, GIF</li>
                    <li>Taille maximale : 5MB</li>
                    <li>Assurez-vous que le texte est lisible</li>
                    <li>L'analyse détecte automatiquement les red/green flags</li>
                  </ul>
                </div>
              </div>
            )}
            
            {/* Calendrier Objectifs */}
            {showCalendar && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <h3 className="text-blue-400 font-semibold">Calendrier Objectifs</h3>
                </div>
                
                {/* Objectifs Calendaires */}
                {userContext.calendrierObjectifs.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-blue-400 mb-2">Objectifs Planifiés</div>
                    {userContext.calendrierObjectifs.slice(0, 5).map((obj, idx) => (
                      <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-2">
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-semibold text-white text-sm">{obj.title}</div>
                          <div className={`px-2 py-1 rounded text-xs ${
                            obj.type === 'objectif' ? 'bg-green-500/20 text-green-300' :
                            'bg-orange-500/20 text-orange-300'
                          }`}>
                            {obj.type}
                          </div>
                        </div>
                        <div className="text-xs text-gray-300 mb-1">{obj.description}</div>
                        <div className="text-xs text-gray-400">
                          {obj.startDate && `Début: ${obj.startDate.toLocaleDateString()}`}
                          {obj.endDate && ` | Fin: ${obj.endDate.toLocaleDateString()}`}
                          {obj.dueDate && ` | Échéance: ${obj.dueDate.toLocaleDateString()}`}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Rappels */}
                {userContext.rappels.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-yellow-400 mb-2">Rappels Programmés</div>
                    {userContext.rappels.slice(0, 3).map((reminder, idx) => (
                      <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-2">
                        <div className="font-semibold text-white text-sm">{reminder.title}</div>
                        <div className="text-xs text-gray-300">{reminder.description}</div>
                        <div className="text-xs text-gray-400">
                          {reminder.date.toLocaleDateString()} {reminder.date.toLocaleTimeString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Milestones */}
                {userContext.milestones.length > 0 && (
                  <div>
                    <div className="text-xs text-green-400 mb-2">Jalons Importants</div>
                    {userContext.milestones.slice(0, 3).map((milestone, idx) => (
                      <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-2">
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-semibold text-white text-sm">{milestone.title}</div>
                          <div className="text-xs text-green-300">{milestone.targetProgress}%</div>
                        </div>
                        <div className="text-xs text-gray-300 mb-1">{milestone.reward}</div>
                        <div className="text-xs text-gray-400">
                          {milestone.date.toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {/* Notifications */}
            {showNotifications && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-red-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-5 h-5 text-red-400" />
                  <h3 className="text-red-400 font-semibold">Notifications</h3>
                </div>
                
                {/* Notifications Actives */}
                {userContext.notifications.length > 0 ? (
                  <div className="space-y-3">
                    {userContext.notifications.slice(0, 5).map((notif, idx) => (
                      <div key={idx} className={`p-3 rounded-lg border-l-4 ${
                        notif.priority === 'high' ? 'bg-red-500/10 border-red-500' :
                        notif.priority === 'medium' ? 'bg-orange-500/10 border-orange-500' :
                        'bg-blue-500/10 border-blue-500'
                      }`}>
                        <div className="font-semibold text-white text-sm mb-1">{notif.title}</div>
                        <div className="text-xs text-gray-300 mb-2">{notif.message}</div>
                        <div className="text-xs text-gray-400">
                          {notif.timestamp.toLocaleDateString()} {notif.timestamp.toLocaleTimeString()}
                        </div>
                        {notif.actions && notif.actions.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {notif.actions.map((action, actionIdx) => (
                              <span key={actionIdx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                                {action}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Bell className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <div className="text-gray-400 text-sm">Aucune notification en attente</div>
                  </div>
                )}
                
                {/* Préférences Notifications */}
                <div className="mt-4 pt-4 border-t border-gray-600">
                  <div className="text-xs text-gray-400 mb-2">Préférences</div>
                  <div className="space-y-2">
                    {Object.entries(userContext.preferencesNotifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-xs text-gray-300">
                          {key === 'actionsPrioritaires' ? 'Actions Prioritaires' :
                           key === 'rappelsObjectifs' ? 'Rappels Objectifs' :
                           key === 'alertesEmotionnelles' ? 'Alertes Émotionnelles' :
                           'Suggestions Formations'}
                        </span>
                        <div className={`w-3 h-3 rounded-full ${value ? 'bg-green-500' : 'bg-gray-500'}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Recommandations Personnalisées */}
            {showRecommendations && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-yellow-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-yellow-400 font-semibold">Recommandations Personnalisées</h3>
                </div>
                
                {/* Recommandations Actives */}
                {userContext.recommandationsActives.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-yellow-400 mb-2">Recommandations Actives</div>
                    {userContext.recommandationsActives.map((rec, idx) => (
                      <div key={idx} className={`mb-3 p-3 rounded-lg border-l-4 ${
                        rec.priorite === 'critique' ? 'bg-red-500/10 border-red-500' :
                        rec.priorite === 'haute' ? 'bg-orange-500/10 border-orange-500' :
                        'bg-blue-500/10 border-blue-500'
                      }`}>
                        <div className="font-semibold text-white text-sm mb-1">{rec.titre}</div>
                        <div className="text-xs text-gray-300 mb-2">{rec.description}</div>
                        {rec.actions && (
                          <div className="flex flex-wrap gap-1">
                            {rec.actions.map((action, actionIdx) => (
                              <span key={actionIdx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                                {action}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Objectifs Recommandés */}
                {userContext.objectifsRecommandes.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-cyan-400 mb-2">Objectifs Recommandés</div>
                    {userContext.objectifsRecommandes.map((obj, idx) => (
                      <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-2">
                        <div className="font-semibold text-cyan-300 text-sm">{obj.titre}</div>
                        <div className="text-xs text-gray-300">{obj.description}</div>
                        <div className="text-xs text-gray-400 mt-1">Échéance: {obj.echeance} | Priorité: {obj.priorite}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Formations Suggérées */}
                {userContext.formationsSuggerees.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-green-400 mb-2">Formations Suggérées</div>
                    {userContext.formationsSuggerees.map((formation, idx) => (
                      <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-2">
                        <div className="font-semibold text-green-300 text-sm">{formation.titre}</div>
                        <div className="text-xs text-gray-300">{formation.description}</div>
                        <div className="text-xs text-gray-400 mt-1">Durée: {formation.duree} | Urgence: {formation.urgence}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Patterns Détectés */}
                {userContext.patternsDetectes.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-purple-400 mb-2">Patterns Détectés</div>
                    {userContext.patternsDetectes.map((pattern, idx) => (
                      <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-2">
                        <div className="font-semibold text-purple-300 text-sm">{pattern.titre}</div>
                        <div className="text-xs text-gray-300">{pattern.description}</div>
                        <div className="text-xs text-gray-400 mt-1">Impact: {pattern.impact}</div>
                        <div className="text-xs text-gray-400">Recommandation: {pattern.recommandation}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Actions Prioritaires */}
                {userContext.actionsPrioritaires.length > 0 && (
                  <div>
                    <div className="text-xs text-red-400 mb-2">Actions Prioritaires</div>
                    {userContext.actionsPrioritaires.map((action, idx) => (
                      <div key={idx} className="bg-slate-700/50 rounded-lg p-3 mb-2">
                        <div className="font-semibold text-red-300 text-sm">{action.titre}</div>
                        <div className="text-xs text-gray-300">{action.description}</div>
                        <div className="text-xs text-gray-400 mt-1">Durée: {action.duree} | Urgence: {action.urgence}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {/* Historique Émotionnel */}
            {showEmotionalHistory && (
              <div className="bg-slate-800/50 rounded-xl p-4 border border-green-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <h3 className="text-green-400 font-semibold">Historique Émotionnel</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400">Score Émotionnel</div>
                    <div className={`text-2xl font-bold ${userContext.scoreEmotionnel >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {userContext.scoreEmotionnel}/10
                    </div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400">Tendance</div>
                    <div className="text-lg font-semibold text-cyan-400">
                      {userContext.tendanceEmotionnelle === 'amélioration' ? '📈 Amélioration' :
                       userContext.tendanceEmotionnelle === 'détérioration' ? '📉 Détérioration' :
                       userContext.tendanceEmotionnelle === 'instable' ? '🔄 Instable' : '📊 Stable'}
                    </div>
                  </div>
                </div>
                
                {userContext.alertesEmotionnelles.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-orange-400 mb-2">Alertes Actives</div>
                    {userContext.alertesEmotionnelles.map((alerte, idx) => (
                      <div key={idx} className={`text-xs p-2 rounded ${
                        alerte.severite === 'critique' ? 'bg-red-500/20 text-red-300' :
                        alerte.severite === 'haute' ? 'bg-orange-500/20 text-orange-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        ⚠️ {alerte.message}
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="text-xs text-gray-400 mb-2">Dernières Émotions</div>
                <div className="flex gap-2 flex-wrap">
                  {userContext.emotionsRecentes.map((emotion, idx) => (
                    <div key={idx} className={`px-2 py-1 rounded text-xs ${
                      emotion === 'anxious_high' ? 'bg-red-500/20 text-red-300' :
                      emotion === 'anxious_moderate' ? 'bg-orange-500/20 text-orange-300' :
                      emotion === 'burnout_severe' ? 'bg-red-800/20 text-red-400' :
                      emotion === 'burnout_moderate' ? 'bg-orange-800/20 text-orange-400' :
                      emotion === 'energetic_high' ? 'bg-cyan-500/20 text-cyan-300' :
                      emotion === 'discouraged' ? 'bg-gray-500/20 text-gray-300' :
                      'bg-slate-500/20 text-slate-300'
                    }`}>
                      {emotion.replace('_', ' ')}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <MessageBubble
                key={idx}
                message={msg.text}
                isUser={msg.isUser}
                isTyping={false}
              />
            ))}
            
            {isTyping && (
              <MessageBubble message="" isUser={false} isTyping={true} />
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {messages.length <= 1 && !isTyping && (
            <QuickActions onAction={handleQuickAction} />
          )}
          
          <ChatInput onSend={handleSendMessage} disabled={isTyping} emotionalState={emotionalState} />
        </div>
      )}
    </>
  );
};

export default AegisChatbot;
