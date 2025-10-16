// Script de test pour l'API Supabase + Email
const testData = {
  email: "test@example.com",
  firstName: "Test User",
  score: 65,
  riskLevel: "Élevé",
  answers: {
    firstName: "Test User",
    job: "data-analyst",
    experience: 5,
    sector: "tech"
  },
  breakdown: {
    baseJob: 40,
    taskAdjustment: -5,
    digitalSkills: 10,
    aiUsage: -10,
    sector: 15,
    market: 5,
    environment: 5,
    adaptability: 0,
    demographics: 0,
    regulation: 0
  }
};

async function testAPI() {
  try {
    console.log('🧪 Test de l\'API submit-assessment...');
    
    const response = await fetch('http://localhost:3001/api/submit-assessment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Succès !');
      console.log('📧 Email envoyé:', result.emailSent);
      console.log('🆔 Assessment ID:', result.assessmentId);
      console.log('📨 Message ID:', result.messageId);
      console.log('\n🔗 Testez la page résultats :');
      console.log(`http://localhost:5173/results?id=${result.assessmentId}`);
    } else {
      console.log('❌ Erreur:', result.error);
      console.log('📝 Détails:', result.details);
    }
  } catch (error) {
    console.log('💥 Erreur réseau:', error.message);
  }
}

// Exécuter le test
testAPI();

