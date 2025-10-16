// Serveur de test simplifié pour l'API d'email
const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Route de santé
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Test server running' });
});

// Route de test simple pour l'email
app.post('/api/send-report-with-pdf', async (req, res) => {
  try {
    console.log('📧 Requête reçue:', req.body);
    
    const { email, firstName, score, answers, breakdown } = req.body;
    
    if (!email || !score) {
      return res.status(400).json({ error: 'Données manquantes' });
    }
    
    // Pour le test, on simule un envoi réussi
    console.log(`📧 Simulation d'envoi pour ${firstName} (${email}) avec score ${score}%`);
    
    // Simuler un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    res.json({
      success: true,
      messageId: 'test_' + Date.now(),
      message: 'Email simulé envoyé avec succès (mode test)'
    });
    
  } catch (error) {
    console.error('❌ Erreur:', error);
    res.status(500).json({
      error: 'Erreur lors de l\'envoi',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🧪 Serveur de test démarré sur http://localhost:${PORT}`);
  console.log(`📧 API email: http://localhost:${PORT}/api/send-report-with-pdf`);
  console.log(`🔑 RESEND_API_KEY: ${process.env.RESEND_API_KEY ? 'Trouvée' : 'Manquante'}`);
});

