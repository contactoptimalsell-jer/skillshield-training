import { useState } from 'react';
import { sendReportWithPDF } from '../api/sendReport';

interface SendReportData {
  email: string;
  firstName: string;
  score: number;
  answers: any;
  breakdown: any;
}

export function useSendReport() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendReport = async (data: SendReportData) => {
    setSending(true);
    setError(null);

    try {
      const result = await sendReportWithPDF(data);
      setSent(true);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
      throw err;
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setSent(false);
    setError(null);
    setSending(false);
  };

  return { sendReport, sending, sent, error, reset };
}
