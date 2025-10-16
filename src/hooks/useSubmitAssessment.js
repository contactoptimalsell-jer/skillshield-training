// Hook personnalisé pour soumettre l'évaluation au backend
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSubmitAssessment() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submitAssessment = async (assessmentData) => {
    setSubmitting(true);
    setError(null);

    try {
      console.log('🚀 Soumission de l\'évaluation...', assessmentData);

      const response = await fetch('http://localhost:3001/api/submit-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: assessmentData.email,
          firstName: assessmentData.firstName,
          score: assessmentData.score,
          riskLevel: getRiskLevel(assessmentData.score),
          answers: assessmentData.answers,
          breakdown: assessmentData.breakdown,
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('✅ Évaluation soumise avec succès !', data.assessmentId);
        setSubmitted(true);
        
        // Rediriger vers la page de résultats
        navigate(`/results?id=${data.assessmentId}`);
        
        return data;
      } else {
        console.error('❌ Erreur lors de la soumission:', data.error);
        setError(data.error || 'Erreur lors de la soumission');
        throw new Error(data.error || 'Erreur lors de la soumission');
      }
    } catch (error) {
      console.error('❌ Erreur réseau:', error);
      const errorMessage = error.message || 'Impossible de contacter le serveur';
      setError(errorMessage);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setError(null);
    setSubmitting(false);
  };

  return {
    submitAssessment,
    submitting,
    submitted,
    error,
    reset
  };
}

// Fonction utilitaire pour déterminer le niveau de risque
function getRiskLevel(score) {
  if (score < 30) return 'Faible';
  if (score < 50) return 'Modéré';
  if (score < 70) return 'Élevé';
  return 'Critique';
}

