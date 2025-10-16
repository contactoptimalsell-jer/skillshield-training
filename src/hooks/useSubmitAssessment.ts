import { useState } from 'react';

interface SubmitAssessmentData {
  email: string;
  firstName: string;
  score: number;
  riskLevel: string;
  answers: any;
  breakdown: any;
}

interface SubmitAssessmentResponse {
  success: boolean;
  assessmentId: string;
  emailSent: boolean;
  messageId: string;
}

export function useSubmitAssessment() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitAssessment = async (data: SubmitAssessmentData): Promise<SubmitAssessmentResponse> => {
    setSubmitting(true);
    setError(null);

    try {
      const isLocal = window.location.hostname === 'localhost';
      const apiUrl = isLocal
        ? 'http://localhost:3001/api/submit-assessment'
        : '/api/submit-assessment';

      console.log(`📝 Soumission vers: ${apiUrl}`);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        body: JSON.stringify(data)
      });

      console.log('📝 Réponse du serveur:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Erreur serveur:', errorText);
        let errorData;

        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: 'Erreur de serveur', details: errorText };
        }

        throw new Error(errorData.error || 'Erreur lors de la soumission');
      }

      const result = await response.json();
      console.log('✅ Soumission réussie:', result);
      
      setSubmitted(true);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      throw err;
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setError(null);
    setSubmitting(false);
  };

  return { submitAssessment, submitting, submitted, error, reset };
}
