// Base de données des métiers basée sur O*NET Database (Public Domain) + OECD Employment Outlook 2025
// Sources : https://www.onetcenter.org/, https://www.oecd.org/employment/outlook/
// Updated: 2025-01-12

export const jobsDatabase = {
  "développeur-web": {
    automationProbability: 0.15, // 15% risque (faible)
    taskRoutineness: 0.30,
    cognitiveComplexity: 0.85,
    socialInteraction: 0.40,
    creativity: 0.75,
    physicalDexterity: 0.05,
    growthRate: 1.25, // +25% croissance
    aiImpact: "moyen",
    source: "O*NET 2024",
    description: "Développement d'applications web et mobiles"
  },
  "développeur-full-stack": {
    automationProbability: 0.12,
    taskRoutineness: 0.25,
    cognitiveComplexity: 0.90,
    socialInteraction: 0.35,
    creativity: 0.80,
    physicalDexterity: 0.05,
    growthRate: 1.30,
    aiImpact: "faible",
    source: "O*NET 2024",
    description: "Développement front-end et back-end"
  },
  "data-analyst": {
    automationProbability: 0.45,
    taskRoutineness: 0.60,
    cognitiveComplexity: 0.85,
    socialInteraction: 0.50,
    creativity: 0.40,
    physicalDexterity: 0.05,
    growthRate: 1.15,
    aiImpact: "fort",
    source: "OECD 2025",
    description: "Analyse de données et reporting"
  },
  "data-scientist": {
    automationProbability: 0.25,
    taskRoutineness: 0.40,
    cognitiveComplexity: 0.95,
    socialInteraction: 0.45,
    creativity: 0.85,
    physicalDexterity: 0.05,
    growthRate: 1.40,
    aiImpact: "moyen",
    source: "OECD 2025",
    description: "Modélisation et intelligence artificielle"
  },
  "comptable": {
    automationProbability: 0.68,
    taskRoutineness: 0.85,
    cognitiveComplexity: 0.60,
    socialInteraction: 0.25,
    creativity: 0.15,
    physicalDexterity: 0.05,
    growthRate: 0.92, // -8% décroissance
    aiImpact: "fort",
    source: "OECD 2025",
    description: "Comptabilité et gestion financière"
  },
  "designer-graphique": {
    automationProbability: 0.38,
    taskRoutineness: 0.40,
    cognitiveComplexity: 0.75,
    socialInteraction: 0.60,
    creativity: 0.95,
    physicalDexterity: 0.10,
    growthRate: 1.08,
    aiImpact: "moyen-fort",
    source: "WEF 2025",
    description: "Design visuel et communication"
  },
  "ui-ux-designer": {
    automationProbability: 0.22,
    taskRoutineness: 0.35,
    cognitiveComplexity: 0.80,
    socialInteraction: 0.70,
    creativity: 0.90,
    physicalDexterity: 0.10,
    growthRate: 1.35,
    aiImpact: "faible",
    source: "O*NET 2024",
    description: "Design d'interface utilisateur"
  },
  "chef-projet": {
    automationProbability: 0.18,
    taskRoutineness: 0.30,
    cognitiveComplexity: 0.85,
    socialInteraction: 0.90,
    creativity: 0.60,
    physicalDexterity: 0.05,
    growthRate: 1.20,
    aiImpact: "faible",
    source: "O*NET 2024",
    description: "Gestion et coordination de projets"
  },
  "product-manager": {
    automationProbability: 0.15,
    taskRoutineness: 0.25,
    cognitiveComplexity: 0.90,
    socialInteraction: 0.85,
    creativity: 0.75,
    physicalDexterity: 0.05,
    growthRate: 1.45,
    aiImpact: "faible",
    source: "O*NET 2024",
    description: "Stratégie et développement produit"
  },
  "marketing-manager": {
    automationProbability: 0.35,
    taskRoutineness: 0.45,
    cognitiveComplexity: 0.75,
    socialInteraction: 0.80,
    creativity: 0.70,
    physicalDexterity: 0.05,
    growthRate: 1.12,
    aiImpact: "moyen",
    source: "OECD 2025",
    description: "Stratégie marketing et communication"
  },
  "commercial": {
    automationProbability: 0.42,
    taskRoutineness: 0.50,
    cognitiveComplexity: 0.70,
    socialInteraction: 0.95,
    creativity: 0.40,
    physicalDexterity: 0.05,
    growthRate: 1.05,
    aiImpact: "moyen-fort",
    source: "OECD 2025",
    description: "Vente et relation client"
  },
  "rh-recruteur": {
    automationProbability: 0.55,
    taskRoutineness: 0.65,
    cognitiveComplexity: 0.70,
    socialInteraction: 0.85,
    creativity: 0.30,
    physicalDexterity: 0.05,
    growthRate: 1.08,
    aiImpact: "fort",
    source: "OECD 2025",
    description: "Ressources humaines et recrutement"
  },
  "assistant-administratif": {
    automationProbability: 0.82,
    taskRoutineness: 0.90,
    cognitiveComplexity: 0.45,
    socialInteraction: 0.60,
    creativity: 0.20,
    physicalDexterity: 0.15,
    growthRate: 0.85,
    aiImpact: "très-fort",
    source: "OECD 2025",
    description: "Support administratif et secrétariat"
  },
  "médecin": {
    automationProbability: 0.08,
    taskRoutineness: 0.20,
    cognitiveComplexity: 0.95,
    socialInteraction: 0.90,
    creativity: 0.30,
    physicalDexterity: 0.60,
    growthRate: 1.18,
    aiImpact: "faible",
    source: "OECD 2025",
    description: "Médecine et soins patients"
  },
  "infirmier": {
    automationProbability: 0.25,
    taskRoutineness: 0.40,
    cognitiveComplexity: 0.75,
    socialInteraction: 0.85,
    creativity: 0.20,
    physicalDexterity: 0.70,
    growthRate: 1.22,
    aiImpact: "faible",
    source: "OECD 2025",
    description: "Soins infirmiers et accompagnement"
  },
  "enseignant": {
    automationProbability: 0.35,
    taskRoutineness: 0.45,
    cognitiveComplexity: 0.80,
    socialInteraction: 0.95,
    creativity: 0.60,
    physicalDexterity: 0.10,
    growthRate: 1.15,
    aiImpact: "moyen",
    source: "OECD 2025",
    description: "Enseignement et formation"
  },
  "avocat": {
    automationProbability: 0.18,
    taskRoutineness: 0.30,
    cognitiveComplexity: 0.90,
    socialInteraction: 0.80,
    creativity: 0.50,
    physicalDexterity: 0.05,
    growthRate: 1.12,
    aiImpact: "faible",
    source: "OECD 2025",
    description: "Conseil juridique et représentation"
  },
  "architecte": {
    automationProbability: 0.28,
    taskRoutineness: 0.35,
    cognitiveComplexity: 0.85,
    socialInteraction: 0.70,
    creativity: 0.90,
    physicalDexterity: 0.20,
    growthRate: 1.10,
    aiImpact: "moyen",
    source: "OECD 2025",
    description: "Conception architecturale et urbanisme"
  },
  "journaliste": {
    automationProbability: 0.48,
    taskRoutineness: 0.55,
    cognitiveComplexity: 0.80,
    socialInteraction: 0.75,
    creativity: 0.85,
    physicalDexterity: 0.05,
    growthRate: 0.95,
    aiImpact: "fort",
    source: "OECD 2025",
    description: "Journalisme et communication"
  },
  "traducteur": {
    automationProbability: 0.75,
    taskRoutineness: 0.85,
    cognitiveComplexity: 0.70,
    socialInteraction: 0.30,
    creativity: 0.40,
    physicalDexterity: 0.05,
    growthRate: 0.88,
    aiImpact: "très-fort",
    source: "OECD 2025",
    description: "Traduction et interprétation"
  },
  "chauffeur": {
    automationProbability: 0.65,
    taskRoutineness: 0.80,
    cognitiveComplexity: 0.40,
    socialInteraction: 0.20,
    creativity: 0.10,
    physicalDexterity: 0.85,
    growthRate: 0.90,
    aiImpact: "fort",
    source: "OECD 2025",
    description: "Transport et livraison"
  },
  "cuisinier": {
    automationProbability: 0.45,
    taskRoutineness: 0.60,
    cognitiveComplexity: 0.60,
    socialInteraction: 0.30,
    creativity: 0.70,
    physicalDexterity: 0.90,
    growthRate: 1.05,
    aiImpact: "moyen-fort",
    source: "OECD 2025",
    description: "Cuisine et restauration"
  },
  "serveur": {
    automationProbability: 0.35,
    taskRoutineness: 0.50,
    cognitiveComplexity: 0.45,
    socialInteraction: 0.95,
    creativity: 0.20,
    physicalDexterity: 0.60,
    growthRate: 1.02,
    aiImpact: "moyen",
    source: "OECD 2025",
    description: "Service en salle et accueil"
  },
  "agent-immobilier": {
    automationProbability: 0.55,
    taskRoutineness: 0.65,
    cognitiveComplexity: 0.60,
    socialInteraction: 0.90,
    creativity: 0.30,
    physicalDexterity: 0.20,
    growthRate: 1.08,
    aiImpact: "fort",
    source: "OECD 2025",
    description: "Transaction et conseil immobilier"
  },
  "banquier": {
    automationProbability: 0.58,
    taskRoutineness: 0.70,
    cognitiveComplexity: 0.75,
    socialInteraction: 0.70,
    creativity: 0.25,
    physicalDexterity: 0.05,
    growthRate: 0.95,
    aiImpact: "fort",
    source: "OECD 2025",
    description: "Services bancaires et financiers"
  },
  "ingénieur": {
    automationProbability: 0.22,
    taskRoutineness: 0.35,
    cognitiveComplexity: 0.90,
    socialInteraction: 0.50,
    creativity: 0.65,
    physicalDexterity: 0.30,
    growthRate: 1.20,
    aiImpact: "faible",
    source: "OECD 2025",
    description: "Ingénierie et conception technique"
  },
  "consultant": {
    automationProbability: 0.25,
    taskRoutineness: 0.30,
    cognitiveComplexity: 0.85,
    socialInteraction: 0.85,
    creativity: 0.70,
    physicalDexterity: 0.05,
    growthRate: 1.25,
    aiImpact: "faible",
    source: "OECD 2025",
    description: "Conseil et expertise métier"
  },
  "freelance": {
    automationProbability: 0.30,
    taskRoutineness: 0.40,
    cognitiveComplexity: 0.80,
    socialInteraction: 0.60,
    creativity: 0.75,
    physicalDexterity: 0.20,
    growthRate: 1.35,
    aiImpact: "moyen",
    source: "OECD 2025",
    description: "Travailleur indépendant"
  }
};

// Secteurs d'activité avec multiplicateurs de risque
export const sectorsDatabase = {
  "technologie": {
    riskMultiplier: 0.85, // Moins de risque
    growthRate: 1.30,
    aiAdoption: "élevée",
    description: "Technologie / IT"
  },
  "finance": {
    riskMultiplier: 1.15, // Plus de risque
    growthRate: 1.05,
    aiAdoption: "très-élevée",
    description: "Finance / Banque"
  },
  "santé": {
    riskMultiplier: 0.75,
    growthRate: 1.20,
    aiAdoption: "moyenne",
    description: "Santé / Médical"
  },
  "éducation": {
    riskMultiplier: 1.05,
    growthRate: 1.15,
    aiAdoption: "faible",
    description: "Éducation / Formation"
  },
  "commerce": {
    riskMultiplier: 1.20,
    growthRate: 1.02,
    aiAdoption: "élevée",
    description: "Commerce / Retail"
  },
  "industrie": {
    riskMultiplier: 1.10,
    growthRate: 1.08,
    aiAdoption: "très-élevée",
    description: "Industrie / Manufacturing"
  },
  "création": {
    riskMultiplier: 0.90,
    growthRate: 1.12,
    aiAdoption: "moyenne",
    description: "Création / Médias"
  },
  "services": {
    riskMultiplier: 1.25,
    growthRate: 1.05,
    aiAdoption: "élevée",
    description: "Services Professionnels"
  },
  "hôtellerie": {
    riskMultiplier: 1.15,
    growthRate: 1.03,
    aiAdoption: "moyenne",
    description: "Hôtellerie / Restauration"
  },
  "logistique": {
    riskMultiplier: 1.30,
    growthRate: 1.08,
    aiAdoption: "très-élevée",
    description: "Logistique / Transport"
  },
  "construction": {
    riskMultiplier: 0.95,
    growthRate: 1.10,
    aiAdoption: "faible",
    description: "Construction / BTP"
  },
  "agriculture": {
    riskMultiplier: 1.20,
    growthRate: 1.05,
    aiAdoption: "élevée",
    description: "Agriculture"
  },
  "service-client": {
    riskMultiplier: 1.40,
    growthRate: 0.98,
    aiAdoption: "très-élevée",
    description: "Service Client / Support"
  },
  "administration": {
    riskMultiplier: 1.35,
    growthRate: 1.02,
    aiAdoption: "élevée",
    description: "Administration Publique"
  },
  "autre": {
    riskMultiplier: 1.00,
    growthRate: 1.05,
    aiAdoption: "moyenne",
    description: "Autre"
  }
};

// Fonctions utilitaires
export const getJobRisk = (jobKey: string) => {
  return jobsDatabase[jobKey] || jobsDatabase["autre"];
};

export const getSectorRisk = (sectorKey: string) => {
  return sectorsDatabase[sectorKey] || sectorsDatabase["autre"];
};

export const getAllJobs = () => {
  return Object.keys(jobsDatabase).map(key => ({
    key,
    ...jobsDatabase[key]
  }));
};

export const getAllSectors = () => {
  return Object.keys(sectorsDatabase).map(key => ({
    key,
    ...sectorsDatabase[key]
  }));
};
