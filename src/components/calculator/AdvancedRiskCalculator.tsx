import React, { useState } from 'react';
import { CalculatorForm } from './CalculatorForm';
import { ResultsPage } from './ResultsPage';
import { CalculatorErrorBoundary } from './CalculatorErrorBoundary';
import { calculateRiskScore } from '../../utils/riskCalculator';
import { useSubmitAssessment } from '../../hooks/useSubmitAssessment';

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

// Interface pour le résultat du calcul
interface RiskCalculationResult {
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

interface SubmitAssessmentData {
  email: string;
  firstName: string;
  score: number;
  riskLevel: string;
  answers: any;
  breakdown: any;
}

export const AdvancedRiskCalculator: React.FC = () => {
  const [step, setStep] = useState<'form' | 'results'>('form');
  const [result, setResult] = useState<RiskCalculationResult | null>(null);
  const [answers, setAnswers] = useState<CalculatorAnswers | null>(null);
  const [assessmentId, setAssessmentId] = useState<string | null>(null);
  
  const { submitAssessment, submitting, submitted, error, reset } = useSubmitAssessment();

  const handleFormComplete = async (formAnswers: CalculatorAnswers) => {
    try {
      // Calculer le score de risque
      const riskResult = calculateRiskScore(formAnswers);
      
      setAnswers(formAnswers);
      setResult(riskResult);
      
      // Sauvegarder les données dans localStorage pour récupération en cas d'erreur
      localStorage.setItem('skillshield-last-calculation', JSON.stringify({
        answers: formAnswers,
        result: riskResult,
        timestamp: Date.now()
      }));
      
      // Préparer les données pour Supabase
      const submitData: SubmitAssessmentData = {
        email: formAnswers.email || '', // L'email sera saisi dans le modal
        firstName: formAnswers.firstName,
        score: riskResult.score,
        riskLevel: formatRiskLevel(riskResult.level),
        answers: formAnswers,
        breakdown: riskResult.breakdown
      };
      
      setStep('results');
    } catch (error) {
      console.error('Erreur lors du calcul du score:', error);
      // En cas d'erreur, on peut afficher un message ou revenir au formulaire
    }
  };

  const handleSubmitToSupabase = async (email: string) => {
    if (!answers || !result) return;
    
    try {
      const submitData: SubmitAssessmentData = {
        email,
        firstName: answers.firstName,
        score: result.score,
        riskLevel: formatRiskLevel(result.level),
        answers,
        breakdown: result.breakdown
      };
      
      const response = await submitAssessment(submitData);
      setAssessmentId(response.assessmentId);
      return response;
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      throw error;
    }
  };

  const formatRiskLevel = (level: 'low' | 'medium' | 'high' | 'critical'): string => {
    switch (level) {
      case 'low': return 'Faible';
      case 'medium': return 'Modéré';
      case 'high': return 'Élevé';
      case 'critical': return 'Critique';
      default: return 'Modéré';
    }
  };

  const handleBackToForm = () => {
    setStep('form');
    setResult(null);
    setAnswers(null);
    setAssessmentId(null);
    reset();
  };

  return (
    <CalculatorErrorBoundary>
      {step === 'form' && (
        <CalculatorForm onComplete={handleFormComplete} />
      )}

      {step === 'results' && result && answers && (
        <ResultsPage 
          result={result} 
          answers={answers} 
          onBack={handleBackToForm}
          onSubmitToSupabase={handleSubmitToSupabase}
          assessmentId={assessmentId}
          submitting={submitting}
          submitted={submitted}
          error={error}
        />
      )}
    </CalculatorErrorBoundary>
  );
};
