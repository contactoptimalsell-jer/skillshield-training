// API client pour l'envoi d'email avec PDF
// Cette fonction détecte automatiquement l'environnement (local vs production)

interface SendReportData {
  email: string;
  firstName: string;
  score: number;
  answers: any;
  breakdown: any;
}

export async function sendReportWithPDF(data: SendReportData) {
  // Détecter l'environnement
  const isLocal = window.location.hostname === 'localhost';
  const apiUrl = isLocal 
    ? 'http://localhost:3001/api/send-report-with-pdf'
    : '/api/send-report-with-pdf'; // Pour Vercel

  console.log(`📧 Envoi vers: ${apiUrl}`);

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    },
    body: JSON.stringify(data)
  });

  console.log('📧 Réponse du serveur:', response.status, response.statusText);

  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ Erreur serveur:', errorText);
    let errorData;
    
    try {
      errorData = JSON.parse(errorText);
    } catch {
      errorData = { error: 'Erreur de serveur', details: errorText };
    }
    
    throw new Error(errorData.error || 'Erreur lors de l\'envoi');
  }

  const result = await response.json();
  console.log('✅ Réponse reçue:', result);
  return result;
}
