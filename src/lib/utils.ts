import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('fr-FR').format(num)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}

export function calculateRiskScore(
  job: string,
  sector: string,
  experience: number,
  repetitiveTasks: number
): number {
  // Algorithme simplifié de calcul du risque IA
  let baseScore = 30 // Score de base
  
  // Impact du métier
  const highRiskJobs = ['comptable', 'assistant', 'traducteur', 'analyste', 'développeur', 'designer']
  const mediumRiskJobs = ['marketing', 'vente', 'support', 'rh', 'logistique']
  
  if (highRiskJobs.some(jobType => job.toLowerCase().includes(jobType))) {
    baseScore += 35
  } else if (mediumRiskJobs.some(jobType => job.toLowerCase().includes(jobType))) {
    baseScore += 20
  }
  
  // Impact du secteur
  const highRiskSectors = ['technologie', 'finance', 'médias', 'communication']
  const mediumRiskSectors = ['santé', 'éducation', 'retail']
  
  if (highRiskSectors.some(sectorType => sector.toLowerCase().includes(sectorType))) {
    baseScore += 25
  } else if (mediumRiskSectors.some(sectorType => sector.toLowerCase().includes(sectorType))) {
    baseScore += 15
  }
  
  // Impact de l'expérience (plus d'expérience = plus de résistance)
  if (experience < 2) {
    baseScore += 20
  } else if (experience < 5) {
    baseScore += 10
  } else if (experience > 10) {
    baseScore -= 10
  }
  
  // Impact des tâches répétitives
  baseScore += repetitiveTasks * 3
  
  return Math.min(Math.max(baseScore, 0), 100)
}

export function getRiskLevel(score: number): {
  level: string
  color: string
  description: string
  timeline: string
} {
  if (score < 30) {
    return {
      level: 'Faible',
      color: 'text-accent-500',
      description: 'Votre profil présente un risque limité face à l\'IA.',
      timeline: 'Plus de 3 ans'
    }
  } else if (score < 60) {
    return {
      level: 'Modéré',
      color: 'text-secondary-500',
      description: 'Certaines tâches de votre métier pourraient être automatisées.',
      timeline: '1-2 ans'
    }
  } else {
    return {
      level: 'Élevé',
      color: 'text-red-500',
      description: 'Votre métier présente un risque significatif d\'automatisation.',
      timeline: '6-12 mois'
    }
  }
}

