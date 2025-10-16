// Script de test pour l'envoi d'email
const testEmail = async (email, firstName = 'Test User') => {
  const testData = {
    email: email,
    firstName: firstName,
    score: 75,
    answers: {
      firstName: firstName,
      job: 'Développeur',
      sector: 'Tech',
      experience: 5
    },
    breakdown: {
      baseJob: 20,
      taskAdjustment: 5,
      digitalSkills: 15,
      aiUsage: 10,
      sector: 8,
      market: 7,
      environment: -3,
      adaptability: 12,
      demographics: -2,
      regulation: 5
    }
  };

  try {
    console.log(`🧪 Test d'envoi d'email pour ${firstName} (${email})`);
    
    const response = await fetch('http://localhost:3001/api/send-report-with-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Succès!', result);
      console.log(`📧 Email envoyé avec ID: ${result.messageId}`);
      console.log(`📬 Vérifiez votre boîte mail : ${email}`);
    } else {
      console.log('❌ Erreur:', result);
    }
  } catch (error) {
    console.log('💥 Erreur de connexion:', error.message);
  }
};

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testEmail };
}

// Si appelé directement avec un argument
if (process.argv[2]) {
  const email = process.argv[2];
  const name = process.argv[3] || 'Test User';
  testEmail(email, name);
} else {
  console.log('Usage: node test-email-send.js <email> [name]');
  console.log('Exemple: node test-email-send.js jerome@example.com Jerome');
}

